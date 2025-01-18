import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-8 flex w-full items-center justify-center py-3 text-gray-500 dark:text-gray-400">
      <p className="text-gray-600 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Dean Machines. All rights reserved.
      </p>
      <Link
        isExternal
        className="ml-2 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
        href="/LICENSE"
      >
        License
      </Link>
      <Link
        isExternal
        className="ml-4 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
        href={siteConfig.links.docs}
      >
        Documentation
      </Link>
      <Link
        isExternal
        className="ml-4 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
        href="/guides"
      >
        Guides
      </Link>
      <Link
        isExternal
        className="ml-4 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"
        href="/contact"
      >
        Contact
      </Link>
    </footer>
  );
}
