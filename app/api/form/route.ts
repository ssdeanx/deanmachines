import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";

import { rateLimit } from "@/lib/rate-limit";
import logger from "@/lib/logger";
import { EmailTemplate } from "@/components/email";

// Validation Schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z.string().email("Invalid email address").toLowerCase().trim(),
  category: z.enum(["general", "technical", "bug", "feature", "other"], {
    required_error: "Please select a category",
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .trim(),
});

// Email Configuration
const emailConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
} as const;

// Create email transporter
const transporter = nodemailer.createTransport(emailConfig);

// Rate limiter configuration
const rateLimiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  _uniqueTokenPerInterval: 500,
});

export async function POST(request: Request) {
  try {
    // Apply rate limiting
    try {
      const token = request.headers.get("x-forwarded-for") || "";
      const limit = 100;

      await rateLimiter.check(request, limit, token);
    } catch {
      logger.warn("Rate limit exceeded for contact form");

      return NextResponse.json(
        { message: "Rate limit exceeded. Please try again later." },
        { status: 429 },
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = formSchema.parse(body);

    // Render email template
    const htmlContent = await render(
      EmailTemplate({
        name: validatedData.name,
        email: validatedData.email,
        category: validatedData.category,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      }),
    );

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form: ${validatedData.category}`,
      text: generatePlainTextEmail(validatedData),
      html: htmlContent,
    });

    logger.info("Contact form email sent successfully", {
      category: validatedData.category,
      email: validatedData.email,
    });

    return NextResponse.json(
      {
        message: "Message sent successfully",
        status: "success",
      },
      { status: 200 },
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      logger.warn("Contact form validation error", { errors: error.errors });

      return NextResponse.json(
        {
          message: "Invalid form data",
          errors: error.errors,
          status: "error",
        },
        { status: 400 },
      );
    }

    // Handle email sending errors
    if (error instanceof Error && "code" in error) {
      logger.error("Email sending error", { error });

      return NextResponse.json(
        {
          message: "Failed to send email. Please try again later.",
          status: "error",
        },
        { status: 500 },
      );
    }

    // Handle other errors
    logger.error("Unexpected error in contact form", { error });

    return NextResponse.json(
      {
        message: "Internal server error",
        status: "error",
      },
      { status: 500 },
    );
  }
}

// Helper function to generate plain text email
function generatePlainTextEmail(data: {
  name: string;
  email: string;
  category: "general" | "technical" | "bug" | "feature" | "other";
  message: string;
}): string {
  return `
Name: ${data.name}
Email: ${data.email}
Category: ${data.category}
Message: ${data.message}
Timestamp: ${new Date().toISOString()}
  `.trim();
}
