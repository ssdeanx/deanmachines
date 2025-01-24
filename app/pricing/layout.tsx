"use client";
 
 export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem 0'}}>
      <div style={{display: 'inline-block', maxWidth: '40rem', justifyContent: 'center', textAlign: 'center'}}>
        {children}
      </div>
    </section>
  );
}
