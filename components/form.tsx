// components/form.tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Textarea,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";

import { useForm } from "@/hooks";

interface FormData {
  name: string;
  email: string;
  message: string;
  category: string;
}

const initialValues: FormData = {
  name: "",
  email: "",
  message: "",
  category: "general",
};

const categories = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "feature", label: "Feature Request" },
  { value: "other", label: "Other" },
];

// Custom validation functions with specific error messages
const validateField = (
  name: keyof FormData,
  value: string,
): string | undefined => {
  switch (name) {
    case "name":
      if (!value.trim()) {
        return "Name is required";
      }
      if (value.length < 2) {
        return "Name must be at least 2 characters long";
      }
      if (value.length > 50) {
        return "Name must be less than 50 characters long";
      }

      return undefined;

    case "email":
      if (!value.trim()) {
        return "Email is required";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
      if (value.length > 100) {
        return "Email must be less than 100 characters long";
      }

      return undefined;

    case "message":
      if (!value.trim()) {
        return "Message is required";
      }
      if (value.length < 10) {
        return "Message must be at least 10 characters long";
      }
      if (value.length > 1000) {
        return "Message must be less than 1000 characters long";
      }

      return undefined;

    case "category":
      if (!value) {
        return "Please select a category";
      }

      return undefined;

    default:
      return undefined;
  }
};

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setErrors,
  } = useForm<FormData>({
    initialValues,
    onSubmit: async (formData) => {
      try {
        // Validate all fields before submission
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        let hasErrors = false;

        (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
          const error = validateField(key, formData[key]);

          if (error) {
            newErrors[key] = error;
            hasErrors = true;
          }
        });

        if (hasErrors) {
          setErrors(newErrors);
          throw new Error("Please fix the form errors before submitting");
        }

        // Your existing submit logic
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));

          throw new Error(errorData.message || "Failed to submit form");
        }

        setSubmitStatus("success");
      } catch (error) {
        setSubmitStatus("error");
        if (error instanceof Error) {
          setErrors({ _form: error.message });
        } else {
          setErrors({ _form: "An unexpected error occurred" });
        }
        throw error;
      }
    },
  });

  // Handle field change with validation
  const handleFieldChange = (field: keyof FormData, value: string) => {
    handleChange(field, value);
    const error = validateField(field, value);

    setErrors({ ...errors, [field]: error });
  };

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <h2 className="text-xl font-semibold">Contact Form</h2>
      </CardHeader>
      <CardBody>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            isRequired
            errorMessage={errors.name}
            isInvalid={!!errors.name}
            label="Name"
            placeholder="Enter your name"
            value={values.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
          />

          <Input
            isRequired
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
            errorMessage={errors.message}
            isInvalid={!!errors.message}
            label="Message"
            placeholder="Enter your message"
            value={values.message}
            onChange={(e) => handleFieldChange("message", e.target.value)}
          />

          <div className="flex justify-end gap-2">
            <Button
              color="primary"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              type="submit"
            >
              {isSubmitting ? <Spinner color="current" size="sm" /> : "Submit"}
            </Button>
          </div>

          {submitStatus === "success" && (
            <p className="text-success">Form submitted successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="text-danger">
              Failed to submit form. Please try again.
            </p>
          )}
          {errors._form && <p className="text-danger">{errors._form}</p>}
        </form>
      </CardBody>
    </Card>
  );
}
