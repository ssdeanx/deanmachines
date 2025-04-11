'use client';

import { useState } from "react";
import { Metadata } from "next";
import { Mail, MessageSquare, Building, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { siteConfig } from "@/config/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/components/common/IconWrapper";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Note: Metadata must be exported from a Server Component
export const metadata: Metadata = {
  title: `Contact Us - ${siteConfig.name}`,
  description: "Get in touch with our team for any questions or inquiries.",
};

const contactMethods = [
  {
    title: "Email",
    description: "Drop us a line anytime",
    icon: Mail,
    content: "contact@deanmachines.com",
  },
  {
    title: "Live Chat",
    description: "Available during business hours",
    icon: MessageSquare,
    content: "Open chat support",
  },
  {
    title: "Office",
    description: "Come visit us",
    icon: Building,
    content: "123 AI Avenue, Tech District",
  },
  {
    title: "Phone",
    description: "Mon-Fri from 9am to 5pm",
    icon: Phone,
    content: "+1 (555) 123-4567",
  },
];

// Define the form validation schema with Zod
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

// Type for our form values
type ContactFormValues = z.infer<typeof formSchema>;

// Export the actual page component without metadata
export default function ContactPage() {
  // Form state for submission, success, and errors
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // In a real application, you would send this data to your backend API
      // For now, we'll simulate a successful submission with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted successfully:", data);
      setSubmitSuccess(true);
      reset(); // Clear the form

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Have questions? We&apos;d love to hear from you.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Methods */}
        <div className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <IconWrapper
                    icon={method.icon}
                    className="rounded-lg border bg-muted p-2"
                  />
                  <div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{method.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Success message */}
            {submitSuccess && (
              <Alert className="mb-6 border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  Your message has been sent successfully! We'll be in touch soon.
                </AlertDescription>
              </Alert>
            )}

            {/* Error message */}
            {submitError && (
              <Alert className="mb-6 border-destructive bg-destructive/10 text-destructive">
                <AlertDescription>{submitError}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    {...register("firstName")}
                    className={errors.firstName ? "border-destructive" : ""}
                    aria-invalid={!!errors.firstName}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    {...register("lastName")}
                    className={errors.lastName ? "border-destructive" : ""}
                    aria-invalid={!!errors.lastName}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                  aria-invalid={!!errors.email}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={4}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                  aria-invalid={!!errors.message}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
