export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dean Machines",
  description: "Open-source autonomous drone platform.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Data",
      href: "/data",
    },
    {
      label: "Requirements",
      href: "/requirements",
    },
    {
      label: "Guides",
      href: "/guides",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/your-username/your-repo",
    twitter: "https://twitter.com/your-twitter",
    docs: "https://github.com/your-username/your-repo/wiki",
    discord: "https://discord.gg/your-discord",
    sponsor: "https://patreon.com/your-patreon",
  },
};
