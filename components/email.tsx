import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  category: string;
  message: string;
  timestamp: string;
}

export function EmailTemplate({
  name,
  email,
  category,
  message,
  timestamp,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading}>New Contact Form Submission</Text>
            <Text style={field}>Name: {name}</Text>
            <Text style={field}>Email: {email}</Text>
            <Text style={field}>Category: {category}</Text>
            <Text style={field}>Message:</Text>
            <Text style={messageStyle}>{message}</Text>
            <Text style={timestampStyle}>Submitted at: {timestamp}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "24px",
};

const field = {
  fontSize: "16px",
  margin: "12px 0",
};

const messageStyle = {
  fontSize: "16px",
  margin: "12px 0",
  whiteSpace: "pre-wrap",
};

const timestampStyle = {
  fontSize: "14px",
  color: "#666666",
  marginTop: "24px",
};
