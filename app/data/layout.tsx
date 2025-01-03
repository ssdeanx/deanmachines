// app/data/layout.tsx
import { Card } from "@nextui-org/react";

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-16">
      <Card className="p-6">
        <div className="flex flex-col gap-4">{children}</div>
      </Card>
    </section>
  );
}
