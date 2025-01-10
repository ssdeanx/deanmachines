import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
      <nav>
        {sidebarItems.map((section) => (
          <div key={section.label}>
            <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-2">
              {section.label}
            </h3>
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  pathname === item.href
                    ? "bg-gray-200 dark:bg-gray-700 font-semibold"
                    : ""
                }`}
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
