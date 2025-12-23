"use client";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavigationItem {
  id: number;
  title: string;
  href: string;
  icon: string;
  additionalPaths?: string[];
}

type NavigationGroupKey = "products" | "technology" | "support" | "about";

type NavigationDataMap = Record<NavigationGroupKey, NavigationItem[]>;

const navigationData: NavigationDataMap = {
  about: [
    {
      id: 1,
      title: "Our Story",
      href: "/our-story",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    },
    {
      id: 2,
      title: "Press",
      href: "/press",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      additionalPaths: ["M14 2v6h6", "M16 13H8", "M16 17H8", "M10 9H8"],
    },
    {
      id: 3,
      title: "Careers",
      href: "/careers",
      icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    },
  ],
  products: [
    {
      id: 1,
      title: "Wireless",
      href: "/wireless",
      icon: "M12 2v20M8 6h8M8 12h8M8 18h8",
    },
    {
      id: 2,
      title: "Wired",
      href: "/wired",
      icon: "M4 12h16M12 4v16",
    },
    {
      id: 3,
      title: "Gaming",
      href: "/gaming",
      icon: "M2 2h20v20H2z",
      additionalPaths: ["M8 8h8M8 12h8M8 16h4"],
    },
    {
      id: 4,
      title: "Professional",
      href: "/professional",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    },
  ],
  technology: [
    {
      id: 1,
      title: "Noise Cancellation",
      href: "/noise-cancellation",
      icon: "M12 2v20M8 8h8M8 12h8M8 16h4",
    },
    {
      id: 2,
      title: "Sound Quality",
      href: "/sound-quality",
      icon: "M3 12h18M12 3v18",
    },
    {
      id: 3,
      title: "Battery Life",
      href: "/battery-life",
      icon: "M2 7h20v14H2z",
      additionalPaths: ["M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"],
    },
    {
      id: 4,
      title: "Connectivity",
      href: "/connectivity",
      icon: "M8 12h8M12 8v8M3 12h18M12 3v18",
    },
  ],
  support: [
    {
      id: 1,
      title: "FAQs",
      href: "/faq",
      icon: "M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0",
      additionalPaths: ["M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"],
    },
    {
      id: 2,
      title: "Warranty",
      href: "/warranty",
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
    {
      id: 3,
      title: "Manuals",
      href: "/manuals",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      additionalPaths: ["M14 2v6h6", "M16 13H8", "M16 17H8", "M10 9H8"],
    },
    {
      id: 4,
      title: "Contact",
      href: "/contact",
      icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    },
  ],

};

interface MainNavWithDropdown {
  id: number;
  label: string;
  hasDropdown: true;
  dropdownKey: NavigationGroupKey;
}

interface MainNavWithoutDropdown {
  id: number;
  label: string;
  hasDropdown: false;
  href: string;
}

type MainNavItem = MainNavWithDropdown | MainNavWithoutDropdown;

const mainNavItems: MainNavItem[] = [
  { id: 0, label: "About", hasDropdown: true, dropdownKey: "about" },
  { id: 1, label: "Products", hasDropdown: true, dropdownKey: "products" },
  { id: 2, label: "Technology", hasDropdown: true, dropdownKey: "technology" },
  { id: 3, label: "Reviews", hasDropdown: false, href: "/reviews" },
  { id: 4, label: "Support", hasDropdown: true, dropdownKey: "support" },
];

// Reusable Components
const NavDot = () => (
  <span className="block h-[7px] w-[7px] rounded-full border border-transparent transition-colors group-hover:border-[var(--seafoam)] group-hover:bg-[var(--seafoam)]" />
);

const DropdownIcon = () => (
  <svg
    className="h-4 w-4 transition-transform group-hover:rotate-180 duration-300"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

interface DropdownItemProps {
  item: NavigationItem;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ item }) => (
  <a
    className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
    href={item.href}
  >
    <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="transiton-all group-hover:invert"
      >
        <path d={item.icon} />
        {item.additionalPaths?.map((path, idx) => (
          <path key={idx} d={path} />
        ))}
      </svg>
    </div>
    <div className="group flex flex-col">
      <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
        {item.title}
      </span>
    </div>
  </a>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <>
      {/* Desktop Header */}
      <section className="fixed left-1/2 top-10 z-[10000] w-[1360px] max-w-[calc(100%-80px)] -translate-x-1/2 hidden lg:flex p-[2px] rounded-[16px] hover:bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300">
        <header className="w-full flex items-center justify-between rounded-[16px] bg-white px-[16px] py-[13px] shadow-sm">
          {/* Logo */}
          <a
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            href="/"
          >
            <img
              alt="AudioTech Logo"
              decoding="async"
              data-nimg={1}
              className="h-auto md:w-[90px] lg:w-[120px] xl:w-[120px]"
              style={{ color: "transparent" }}
              src="/logo b.png"
            />
            <span className="sr-only">GekoKave</span>
          </a>

          {/* Main Navigation */}
          <nav className="navigation flex items-center gap-1.5 xl:gap-3">
            {mainNavItems.map((navItem) =>
              navItem.hasDropdown ? (
                <div key={navItem.id} className="navDropdown">
                  <button className="nav-link group">
                    <span className="relative flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-[11px] transition-all duration-200 xl:text-sm bg-transparent hover:bg-[var(--light-gray)] group-hover:font-medium">
                      <NavDot />
                      {navItem.label}
                      <DropdownIcon />
                    </span>
                  </button>
                  <div className="navDropdown-menu">
                    <div className="mx-auto flex w-full max-w-[938px] flex-wrap items-center justify-center gap-4 py-[16px] px-4">
                      {navigationData[navItem.dropdownKey].map((item) => (
                        <DropdownItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={navItem.id}
                  className="pointer relative flex items-center gap-2 rounded-[20px] px-4 py-2 transition-colors hover:bg-[var(--light-gray)] group link-/"
                  href={navItem.href}
                >
                  <span className="relative flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-[11px] transition-all duration-200 xl:text-sm bg-transparent group-hover:bg-[var(--light-gray)] group-hover:font-medium">
                    <NavDot />
                    {navItem.label}
                  </span>
                </a>
              )
            )}
          </nav>

          {/* Right Navigation */}
          <nav className="flex items-center gap-1.5 xl:gap-3">
            <a
              href="/login"
              className="pointer button-outline text-[11px] xl:text-sm group link-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Sign In</span>
            </a>
            <a className="pointer button-primary  group link-/" href="/shop">
              <span className="flex items-center gap-2 text-black group-hover:text-white">
                Shop
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </span>
            </a>
          </nav>
        </header>
      </section>

      {/* Mobile/Tablet Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[10000] bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a className="flex items-center gap-2" href="/">
            <img
              alt="AudioTech Logo"
              className="h-8 w-auto"
              src="/logo b.png"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg max-h-[calc(100vh-60px)] overflow-y-auto">
            <nav className="px-4 py-4 space-y-2">
              {mainNavItems.map((navItem) => (
                <div key={navItem.id}>
                  {navItem.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(navItem.dropdownKey)}
                        className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium">{navItem.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openDropdown === navItem.dropdownKey
                            ? "rotate-180"
                            : ""
                            }`}
                        />
                      </button>
                      {openDropdown === navItem.dropdownKey && (
                        <div className="pl-4 space-y-1 mt-2">
                          {navigationData[navItem.dropdownKey].map((item) => (
                            <a
                              key={item.id}
                              href={item.href}
                              className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d={item.icon} />
                                  {item.additionalPaths?.map((path, idx) => (
                                    <path key={idx} d={path} />
                                  ))}
                                </svg>
                              </div>
                              <span className="text-sm">{item.title}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={navItem.href}
                      className="block py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {navItem.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2 border-t">
                <a
                  href="/login"
                  className="block w-full text-center py-3 px-4 rounded-lg border border-gray-300 hover:border-[var(--seafoam)] hover:text-[var(--seafoam)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </a>
                <a
                  href="/shop"
                  className="block w-full text-center py-3 px-4 rounded-lg bg-[var(--seafoam)] text-white hover:bg-[var(--button-hover)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
