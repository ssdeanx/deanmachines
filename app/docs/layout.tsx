"use client";

import DocsSidebar from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <DocsSidebar />
      <main className="flex-1 grow p-4">
        <section className="flex flex-col gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg justify-center text-center">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
