import Link from "next/link";
import { usePathname } from "next/navigation";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from "clsx";
import { styled } from '@mui/material/styles';
 
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
 
const StyledLink = styled(Link)(({ theme, href }) => {
    const pathname = usePathname();
    return {
        display: 'block',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        textDecoration: 'none',
        color: 'hsl(var(--foreground))',
        backgroundColor: pathname === href ? 'hsl(var(--gray-200))' : 'transparent',
        '&:hover': { backgroundColor: 'hsl(var(--gray-200))' },
        dark: { color: 'hsl(var(--muted-foreground))' },
    }
  });
 
export default function DocsSidebar() {
  const pathname = usePathname();
 
  return (    
    <aside className="w-64 p-4" style={{ backgroundColor: 'hsl(var(--gray-100))' }}>
      <nav>
        {sidebarItems.map((section) => (
          <div key={section.label}>
            <h3 className="mb-2 font-semibold text-foreground dark:text-muted-foreground" style={{ color: 'hsl(var(--foreground))' }}>
              {section.label}
            </h3>
            <List>
            {section.items.map((item) => (
              <ListItem key={item.href} disablePadding>
                <StyledLink
                  href={item.href}
                >
                  {item.label}
                </StyledLink>
              </ListItem>
            ))}
            </List>
          </div>
        ))}
      </nav>
    </aside>
  );
}
