"use client";
 
 import DocsSidebar from "@/components/docs-sidebar";
 
 export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <DocsSidebar />
      <main style={{flexGrow: 1, padding: '1rem'}}>
        <section style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 0'}}>
          <div style={{display: 'inline-block', maxWidth: '40rem', justifyContent: 'center', textAlign: 'center'}}>
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
