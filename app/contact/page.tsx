"use client";
import { ContactForm } from "@/components/form";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        We'd love to hear from you! Please use the form below to send us a
        message.
      </Typography>
      <Box sx={{ width: "100%" }}>
        <ContactForm />
      </Box>
    </Container>
  );
}
