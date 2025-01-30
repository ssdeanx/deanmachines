import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { FC, useState } from "react";
import { z } from "zod";

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
      const response = await fetch("/api/form", {
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
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        borderRadius: "0.5rem",
        backgroundColor: "hsl(var(--background))",
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        ".dark &": {
          backgroundColor: "hsl(var(--default))",
          padding: "1.5rem",
        },
      }}
    >
      <TextField
        required
        aria-label="Name"
        label="Name"
        placeholder="Enter your name"
        value={values.name}
        onChange={(e) => handleFieldChange("name", e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "hsl(var(--gray-100))",
            dark: { backgroundColor: "hsl(var(--gray-700))" },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "hsl(var(--primary))",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
              borderColor: "hsl(var(--primary))",
            },
          },
        }}
      />

      <TextField
        required
        aria-label="Email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={values.email}
        onChange={(e) => handleFieldChange("email", e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "hsl(var(--gray-100))",
            dark: { backgroundColor: "hsl(var(--gray-700))" },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "hsl(var(--primary))",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
              borderColor: "hsl(var(--primary))",
            },
          },
        }}
      />

      <FormControl fullWidth error={!!errors.category}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          required
          aria-label="Category"
          label="Category"
          labelId="category-label"
          value={values.category}
          onChange={(e) => handleFieldChange("category", e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "hsl(var(--gray-100))",
              dark: { backgroundColor: "hsl(var(--gray-700))" },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "hsl(var(--primary))",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderWidth: "2px",
                borderColor: "hsl(var(--primary))",
              },
            },
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        multiline
        required
        aria-label="Message"
        label="Message"
        placeholder="Enter your message"
        value={values.message}
        onChange={(e) => handleFieldChange("message", e.target.value)}
        error={!!errors.message}
        helperText={errors.message}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "hsl(var(--gray-100))",
            dark: { backgroundColor: "hsl(var(--gray-700))" },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "hsl(var(--primary))",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
              borderColor: "hsl(var(--primary))",
            },
          },
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            aria-label={isSubmitting ? "Submitting..." : "Submit form"}
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            type="submit"
            sx={{ minWidth: "120px" }}
          >
            {isSubmitting ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>

        {submitStatus === "success" && (
          <Box
            sx={{
              borderRadius: "0.375rem",
              backgroundColor: "hsl(var(--success))",
              padding: "1rem",
              color: "hsl(var(--foreground))",
              dark: {
                backgroundColor: "hsl(var(--success))",
                color: "hsl(var(--muted-foreground))",
              },
            }}
            role="alert"
          >
            Thanks for your inquiry! We&#39;ll get back to you soon.
          </Box>
        )}

        {submitStatus === "error" && (
          <Box
            sx={{
              borderRadius: "0.375rem",
              backgroundColor: "hsl(var(--error))",
              padding: "1rem",
              color: "hsl(var(--foreground))",
              dark: {
                backgroundColor: "hsl(var(--error))",
                color: "hsl(var(--muted-foreground))",
              },
            }}
            role="alert"
          >
            Sorry, something went wrong. Please try again later.
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
