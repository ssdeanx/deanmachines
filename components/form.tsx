import React, { FC, useState } from "react";
import { z } from "zod";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Spinner,
} from "@nextui-org/react";

// Define form value types
interface FormValues {
  name: string;
  email: string;
  category: string;
  message: string;
}

// Define category options
const categories = [
  { value: "hardware", label: "Hardware Inquiry" },
  { value: "software", label: "Software Inquiry" },
  { value: "data", label: "Data Inquiry" },
  { value: "general", label: "General Inquiry" },
] as const;

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const ContactForm: FC = () => {
  // Form state
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  // Form status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Handle field changes
  const handleFieldChange = (field: keyof FormValues, value: string) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  // Validate form
  const validateForm = (): boolean => {
    try {
      formSchema.parse(values);
      setErrors({});

      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<FormValues> = {};

        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormValues] = err.message;
          }
        });
        setErrors(newErrors);
      }

      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok)
        throw new Error(`Failed to submit form: ${response.status}`);

      setSubmitStatus("success");
      // Reset form on success
      setValues({
        name: "",
        email: "",
        category: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
      // Optionally, log the error to an external service
      // logError("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      noValidate
      className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      onSubmit={handleSubmit}
    >
      <Input
        isRequired
        aria-label="Name"
        classNames={{
          inputWrapper: "bg-gray-100 dark:bg-gray-700",
        }}
        errorMessage={errors.name}
        isInvalid={!!errors.name}
        label="Name"
        placeholder="Enter your name"
        value={values.name}
        onChange={(e) => handleFieldChange("name", e.target.value)}
      />

      <Input
        isRequired
        aria-label="Email"
        classNames={{
          inputWrapper: "bg-gray-100 dark:bg-gray-700",
        }}
        errorMessage={errors.email}
        isInvalid={!!errors.email}
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={values.email}
        onChange={(e) => handleFieldChange("email", e.target.value)}
      />

      <Select
        isRequired
        aria-label="Category"
        classNames={{
          trigger: "bg-gray-100 dark:bg-gray-700",
        }}
        errorMessage={errors.category}
        isInvalid={!!errors.category}
        label="Category"
        placeholder="Select a category"
        value={values.category}
        onChange={(e) => handleFieldChange("category", e.target.value)}
      >
        {categories.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </Select>

      <Textarea
        isRequired
        aria-label="Message"
        classNames={{
          inputWrapper: "bg-gray-100 dark:bg-gray-700",
        }}
        errorMessage={errors.message}
        isInvalid={!!errors.message}
        label="Message"
        placeholder="Enter your message"
        value={values.message}
        onChange={(e) => handleFieldChange("message", e.target.value)}
      />

      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Button
            aria-label={isSubmitting ? "Submitting..." : "Submit form"}
            className="min-w-[120px]"
            color="primary"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? <Spinner color="current" size="sm" /> : "Submit"}
          </Button>
        </div>

        {submitStatus === "success" && (
          <div
            className="rounded-md bg-green-100 p-4 text-green-700"
            role="alert"
          >
            Thanks for your inquiry! We&#39;ll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="rounded-md bg-red-100 p-4 text-red-700" role="alert">
            Sorry, something went wrong. Please try again later.
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
