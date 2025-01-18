import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-8 flex w-full items-center justify-center py-3 text-muted-foreground dark:text-muted-foreground">
      <p className="text-foreground dark:text-muted-foreground">
        &copy; {new Date().getFullYear()} Dean Machines. All rights reserved.
      </p>
      <Link
        isExternal
        className="ml-2 text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary"
        href="/LICENSE"
      >
        License
      </Link>
      <Link
        isExternal
        className="ml-4 text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary"
        href={siteConfig.links.docs}
      >
        Documentation
      </Link>
      <Link
        isExternal
        className="ml-4 text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary"
        href="/guides"
      >
        Guides
      </Link>
      <Link
        isExternal
        className="ml-4 text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary"
        href="/contact"
      >
        Contact
      </Link>
    </footer>
  );
}
