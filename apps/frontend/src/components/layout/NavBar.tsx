'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Menu,
  Home,
  ChevronDown,
  Brain,
  Database,
  Wrench,
  Workflow,
  Building,
  Headset,
  BarChart,
  Rocket,
  Code,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/common/SearchInput";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { UserNav } from "@/components/user/UserNav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { IconWrapper } from "@/components/common/IconWrapper";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { type NavItem } from "@/types/nav";

/**
 * Maps icon strings from config to their corresponding Lucide icon components
 */
const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  database: Database,
  wrench: Wrench,
  workflow: Workflow,
  building: Building,
  headset: Headset,
  barChart: BarChart,
  rocket: Rocket,
  code: Code,
  bookOpen: BookOpen,
};

/**
 * Component for rendering a list item in dropdown navigation
 * @param title - The title of the navigation item
 * @param href - The link destination
 * @param description - Optional description text
 * @param icon - Optional icon identifier
 * @returns A styled navigation list item component
 */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    href: string;
    description?: string;
    icon?: string;
  }
>(({ className, title, href, description, icon, ...props }, ref) => {
  const IconComponent = icon ? iconMap[icon] || null : null;

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300",
            "hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {IconComponent && (
              <div className="rounded-md bg-muted p-2 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 motion-reduce:transition-none">
                <IconComponent className="size-5 text-foreground/70 group-hover:text-foreground transition-colors" />
              </div>
            )}
            <div className="text-sm font-medium leading-none group-hover:translate-x-0.5 transition-transform duration-300 motion-reduce:transition-none">
              {title}
            </div>
          </div>
          {description && (
            <p className="line-clamp-2 mt-2 text-sm leading-snug text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
              {description}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

/**
 * Main navigation component rendering nav items and dropdowns
 */
function MainNav() {
  const pathname = usePathname();
  const { mainNav } = siteConfig;

  // Check if a path is active (exact match or starts with path for sections)
  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link
        href="/"
        className="flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80"
        aria-label="Home"
      >
        <span className="sr-only md:not-sr-only font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{siteConfig.name}</span>
        <span className="md:hidden font-bold text-xl">dm</span>
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "group transition-all duration-300 px-3",
                  isActive("/") ? "bg-accent text-accent-foreground" : "hover:bg-accent/40"
                )}
              >
                <span className="flex items-center gap-1">
                  <Home className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Home</span>
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {mainNav.map((item) => {
            // If the item has children, render as dropdown
            if (item.children && item.children.length > 0) {
              return (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger
                    className={cn(
                      "group transition-all duration-300 px-3",
                      isActive(item.href) ? "bg-accent text-accent-foreground" : "hover:bg-accent/40"
                    )}
                  >
                    <span>
                      {item.title}
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className={cn(
                      "grid gap-3 p-4 w-[400px] @md:w-[500px]",
                      "animate-in fade-in-50 zoom-in-95 data-[motion=from-start]:slide-in-from-left-10 data-[motion=from-end]:slide-in-from-right-10 data-[motion=to-start]:slide-out-to-left-10 data-[motion=to-end]:slide-out-to-right-10",
                      item.children.length > 2 ? "@lg:grid-cols-2" : ""
                    )}>
                      {item.children.map((child) => (
                        <ListItem
                          key={child.title}
                          title={child.title}
                          href={child.href}
                          icon={child.icon}
                          description={child.description}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }

            // Otherwise render as regular link
            return (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "transition-all duration-300 px-3",
                      isActive(item.href) ? "bg-accent text-accent-foreground" : "hover:bg-accent/40"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

/**
 * Mobile navigation item component for responsive menu
 */
/**
 * Mobile navigation item component for responsive menu
 * Enhanced with smooth animations and improved interactions
 */
function MobileNavItem({
  item,
  isActive,
  depth = 0
}: {
  item: NavItem;
  isActive: (path: string) => boolean;
  depth?: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const IconComponent = item.icon ? iconMap[item.icon] || null : null;

  return (
    <div className={cn(
      "group transition-all duration-300",
      isOpen && "bg-accent/10 rounded-lg"
    )}>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={cn(
            "flex w-full items-center gap-2 py-2 text-base font-medium transition-colors duration-300",
            isActive(item.href) ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground",
            depth > 0 ? "pl-4" : "",
            "group-hover:translate-x-0.5 transition-transform motion-reduce:transition-none"
          )}
          onClick={hasChildren ? () => setIsOpen(!isOpen) : undefined}
        >
          {IconComponent && <IconComponent className="size-4 opacity-70 group-hover:opacity-100 transition-opacity" />}
          {item.title}
        </Link>
        {hasChildren && (
          <Button
            variant="ghost"
            size="sm"
            className="size-8 p-0 hover:bg-accent/50 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-300",
                isOpen ? "rotate-180" : ""
              )}
            />
            <span className="sr-only">Toggle {item.title} submenu</span>
          </Button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="ml-4 mt-1 space-y-1 animate-in slide-in-from-left-5 duration-300">
          {item.children?.map((child, index) => (
            <div
              key={child.href}
              className={cn(
                "rounded-md transition-all duration-300 hover:bg-accent/30",
                "animate-in fade-in-50 duration-300",
                { "delay-100": index === 0 },
                { "delay-150": index === 1 },
                { "delay-200": index >= 2 }
              )}
            >
              <Link
                href={child.href}
                className={cn(
                  "flex items-center gap-2 py-2 pl-4 text-sm font-medium transition-all duration-300",
                  "rounded-md",
                  isActive(child.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/70 hover:text-foreground hover:translate-x-1"
                )}
              >
                {child.icon && iconMap[child.icon] && (
                  <IconWrapper icon={iconMap[child.icon]} size="sm" withHoverEffect />
                )}
                {child.title}
              </Link>
              {child.description && (
                <p className="pl-4 text-xs text-muted-foreground mb-2 line-clamp-1">{child.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Primary navigation component including desktop and mobile navigation
 */
export function NavBar() {
  const pathname = usePathname();
  // Using try/catch to handle case when SessionProvider is not available
  // This prevents the "useSession must be wrapped in SessionProvider" error
  // Initialize with a default session state
  const [sessionData, setSessionData] = React.useState<{
    data: any;
    status: "loading" | "authenticated" | "unauthenticated";
  }>({
    data: null,
    status: "loading"
  });

  // Safely try to get session after component mounts
  React.useEffect(() => {
    try {
      // Get real session data from useSession() directly
      const sessionResult = useSession();
      if (sessionResult) {
        setSessionData({
          data: sessionResult.data,
          status: sessionResult.status
        });
      }
    } catch (e) {
      // If SessionProvider is not available, set to unauthenticated
      setSessionData({
        data: null,
        status: "unauthenticated"
      });
    }
  }, []);

  // Destructure from our safe state
  const { data: session, status } = sessionData;

  const [isScrolled, setIsScrolled] = React.useState(false);
  const isAuthenticated = status === "authenticated" && !!session?.user;
  const isAdmin = isAuthenticated && session?.user?.role === "admin";

  // Handle scroll event to update navbar styling
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if a path is active (exact match or starts with path for sections)
  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  /**
   * Get navigation items based on authentication status and user role
   */
  const getNavItems = () => {
    const items = [...siteConfig.mainNav]; // Create a copy to avoid mutating the original

    if (isAuthenticated) {
      // Add user-specific navigation items
      if (!items.some(item => item.href === "/dashboard")) {
        items.push({
          title: "Dashboard",
          href: "/dashboard",
        });
      }

      // Add admin-specific navigation items if the user is an admin
      if (isAdmin && !items.some(item => item.href === "/admin")) {
        items.push({
          title: "Admin",
          href: "/admin/dashboard",
          children: [
            {
              title: "Dashboard",
              href: "/admin/dashboard",
              icon: "barChart",
              description: "Admin dashboard with key metrics and performance indicators",
            },
            {
              title: "Users",
              href: "/admin/users",
              icon: "building",
              description: "Manage user accounts and permissions",
            },
            {
              title: "Settings",
              href: "/admin/settings",
              icon: "wrench",
              description: "Configure system settings and preferences",
            },
          ]
        });
      }
    }

    return items;
  };

  // Get the appropriate navigation items based on auth status
  const navItems = getNavItems();

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-xl transition-all duration-300",
      "supports-[backdrop-filter]:bg-background/60",
      isScrolled ? "shadow-md" : "shadow-sm"
    )}>
      <div className="container flex h-16 items-center @container">
        <MainNav />
        <div className="flex items-center ml-auto space-x-4">
          <nav className="flex items-center space-x-2">
            <SearchInput />
            <ThemeToggle />

            {/* Mobile navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="@md:hidden transition-all duration-300 hover:scale-110 active:scale-95 motion-reduce:transition-none"
                  aria-label="Toggle menu"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80%] max-w-sm animate-in slide-in-from-right-80 duration-300 border-l border-border/50"
              >
                <SheetHeader>
                  <SheetTitle className="text-left font-heading">Navigation</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-2 animate-in fade-in slide-in-from-right-5 duration-500 delay-150">
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center gap-2 py-2 text-base font-medium transition-all duration-300 rounded-md px-2",
                      isActive("/")
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/30"
                    )}
                  >
                    <Home className="size-5 text-primary" />
                    <span>Home</span>
                  </Link>

                  {/* Mobile navigation items */}
                  {navItems.map((item) => (
                    <MobileNavItem
                      key={item.href}
                      item={item}
                      isActive={isActive}
                    />
                  ))}

                  {/* Mobile login/signup links for unauthenticated users */}
                  {!isAuthenticated && (
                    <div className="mt-4 space-y-2 border-t pt-4 border-border/30">
                      <Link
                        href="/login"
                        className="flex items-center gap-2 py-2.5 px-2 text-base font-medium transition-all duration-300 rounded-md
                          text-foreground/70 hover:text-foreground hover:bg-accent/30"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="flex items-center justify-center gap-2 py-2.5 text-base font-medium
                          bg-primary text-primary-foreground hover:bg-primary/90
                          transition-all duration-300 rounded-md hover:shadow-sm active:scale-[0.98]"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Authentication UI */}
            <div className="hidden @md:flex items-center space-x-2">
              {status === "loading" ? (
                <div className="h-8 w-20 bg-muted/50 animate-pulse rounded-md" aria-hidden="true">
                  <span className="sr-only">Loading authentication status</span>
                </div>
              ) : isAuthenticated ? (
                <UserNav user={session.user} />
              ) : (
                <>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mr-1 transition-all duration-300 hover:border-primary/50 hover:bg-accent/30 active:scale-95"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary transition-all duration-300 hover:bg-primary/90 active:scale-95 shadow-sm hover:shadow"
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
