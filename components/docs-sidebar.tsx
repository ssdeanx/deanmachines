import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const sidebarItems = [
  {
    label: "Getting Started",
    items: [
      { href: "/docs", label: "Documentation" },
      { href: "/docs/getting-started", label: "Getting Started" },
    ],
  },
  {
    label: "API",
    items: [{ href: "/docs/api-reference", label: "API Reference" }],
  },
  {
    label: "Contribution",
    items: [
      {
        href: "/docs/contribution-guidelines",
        label: "Contribution Guidelines",
      },
    ],
  },
  {
    label: "Hardware",
    items: [{ href: "/docs/nvidia-orin", label: "NVIDIA Orin Nano" }],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[hsl(var(--gray-100))] p-4 dark:bg-[hsl(var(--default))]">
      <nav>
        {sidebarItems.map((section) => (
          <div key={section.label}>
            <h3 className="mb-2 font-semibold text-foreground dark:text-muted-foreground">
              {section.label}
            </h3>
            {section.items.map((item) => (
              <Link
                key={item.href}
                className={clsx(
                  "block rounded-md px-4 py-2 hover:bg-[hsl(var(--gray-200))] dark:hover:bg-[hsl(var(--gray-700))]",
                  {
                    "bg-[hsl(var(--gray-200))] font-semibold dark:bg-[hsl(var(--gray-700))]":
                      pathname === item.href,
                  },
                  "text-foreground dark:text-muted-foreground",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
