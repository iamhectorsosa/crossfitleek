import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

type NavItem = {
  label: string;
  children?: NavItem[];
};

const MenuIcon: React.FC = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className="size-5"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

type MenuLinkProps = {
  label: string;
};

const MenuLink: React.FC<MenuLinkProps> = ({ label }) => (
  <DrawerClose
    nativeButton={false}
    render={
      <Link
        href="#"
        className={cn(
          "heading-styles",
          "block py-3 text-base underline-offset-4 transition-colors",
          "outline-none hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline",
        )}
      />
    }
  >
    {label}
  </DrawerClose>
);

export const NavbarDrawer: React.FC = () => {
  const t = useTranslations();

  const items: NavItem[] = [
    { label: t("Navbar.links.about") },
    {
      label: t("Navbar.links.offer"),
      children: [
        { label: t("Navbar.links.crossfit") },
        { label: t("Navbar.links.sweat") },
        { label: t("Navbar.links.kidsAndTeens") },
      ],
    },
    { label: t("Navbar.links.personalTraining") },
    { label: t("Navbar.links.memberships") },
    { label: t("Navbar.links.schedule") },
    { label: t("Navbar.links.contact") },
  ];

  return (
    <Drawer swipeDirection="up" showSwipeHandle>
      <DrawerTrigger
        aria-label={t("Navbar.openMenu")}
        className={cn(
          "button-styles",
          "border border-border bg-secondary text-foreground hover:bg-secondary/70",
          "px-1.5 py-1.5",
        )}
      >
        <MenuIcon />
      </DrawerTrigger>

      <DrawerContent className="border-border bg-card text-foreground">
        <DrawerTitle className="sr-only">{t("Navbar.menuTitle")}</DrawerTitle>
        <DrawerDescription className="sr-only">
          {t("Navbar.menuDescription")}
        </DrawerDescription>

        <nav
          aria-label={t("Navbar.menuTitle")}
          className="mx-auto min-h-0 w-full max-w-5xl flex-1 overflow-y-auto px-4 py-2"
        >
          <ul className="divide-y divide-border">
            {items.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <span className="block py-3 font-header text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      {item.label}
                    </span>
                    <ul className="mb-3 ml-1 border-l border-border pl-4">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <MenuLink label={child.label} />
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <MenuLink label={item.label} />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <DrawerFooter className="mx-auto w-full max-w-5xl">
          <DrawerClose
            nativeButton={false}
            render={
              <a
                href="#"
                className={cn(
                  "button-styles",
                  "border border-primary bg-primary text-sm hover:bg-primary/90",
                  "px-3 py-1.5",
                )}
              />
            }
          >
            {t("StartTrialForTwoWeeks")}
          </DrawerClose>
          <DrawerClose
            className={cn(
              "button-styles",
              "border border-border bg-secondary text-sm hover:bg-secondary/70",
              "px-3 py-1.5",
            )}
          >
            {t("Navbar.closeMenu")}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
