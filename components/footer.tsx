import React from 'react';
import Link from '@mui/material/Link';

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-8 flex w-full items-center justify-center py-3 text-muted-foreground dark:text-muted-foreground">
      <p className="text-foreground dark:text-muted-foreground">
        &copy; {new Date().getFullYear()} Dean Machines. All rights reserved. 
      </p>
      <Link
        
        className="ml-2 text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary"
  style={{ textDecoration: 'none' }}
  href="/LICENSE"
  target="_blank"
  rel="noopener noreferrer"
      >
        License
      </Link>
      <Link
        className="ml-4 text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary"
  style={{ textDecoration: 'none' }}
  href={siteConfig.links.docs}
  target="_blank"
  rel="noopener noreferrer"
      >
        Documentation
      </Link>
      <Link
        className="ml-4 text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary" style={{ textDecoration: 'none' }}
        href="/guides"
      >
        Guides
      </Link>
      <Link
              className="ml-4 text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary" style={{ textDecoration: 'none' }}
        href="/contact"
      >
        Contact
      </Link>
    </footer>
  );
}
