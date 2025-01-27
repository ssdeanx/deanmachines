// app/data/layout.tsx
"use client";
import Card from '@mui/material/Card';
 
 export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-16">
      <Card sx={{padding: '1.5rem'}}>
        <div className="flex flex-col gap-4">{children}</div>
      </Card>
    </section>
  );
}
