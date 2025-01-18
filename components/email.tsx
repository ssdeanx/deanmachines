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
      <Preview>New Dean Machines Inquiry from {name}</Preview>
      <Body
        style={{
          backgroundColor: "hsl(var(--background))",
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
        }}
      >
        <Container
          className="rounded-lg bg-[hsl(var(--background))] shadow-md"
          style={{
            margin: "0 auto",
            padding: "20px 0 48px",
            maxWidth: "580px",
          }}
        >
          <Section>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "24px",
              }}
            >
              New Dean Machines Inquiry
            </Text>
            <Text
              style={{
                fontSize: "16px",
                margin: "12px 0",
              }}
            >
              Name: {name}
            </Text>
            <Text
              style={{
                fontSize: "16px",
                margin: "12px 0",
              }}
            >
              Email: {email}
            </Text>
            <Text
              style={{
                fontSize: "16px",
                margin: "12px 0",
              }}
            >
              Category: {category}
            </Text>
            <Text
              style={{
                fontSize: "16px",
                margin: "12px 0",
              }}
            >
              Message:
            </Text>
            <Text
              style={{
                fontSize: "16px",
                margin: "12px 0",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                marginTop: "24px",
              }}
            >
              Submitted at: {timestamp}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
