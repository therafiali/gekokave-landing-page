import { ArrowRight } from "lucide-react";

// Navigation Data
const navigationData = {
  products: [
    {
      id: 1,
      title: "Wireless",
      href: "/wireless",
      icon: "M12 2v20M8 6h8M8 12h8M8 18h8"
    },
    {
      id: 2,
      title: "Wired",
      href: "/wired",
      icon: "M4 12h16M12 4v16"
    },
    {
      id: 3,
      title: "Gaming",
      href: "/gaming",
      icon: "M2 2h20v20H2z",
      additionalPaths: ["M8 8h8M8 12h8M8 16h4"]
    },
    {
      id: 4,
      title: "Professional",
      href: "/professional",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    }
  ],
  technology: [
    {
      id: 1,
      title: "Noise Cancellation",
      href: "/noise-cancellation",
      icon: "M12 2v20M8 8h8M8 12h8M8 16h4"
    },
    {
      id: 2,
      title: "Sound Quality",
      href: "/sound-quality",
      icon: "M3 12h18M12 3v18"
    },
    {
      id: 3,
      title: "Battery Life",
      href: "/battery-life",
      icon: "M2 7h20v14H2z",
      additionalPaths: ["M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"]
    },
    {
      id: 4,
      title: "Connectivity",
      href: "/connectivity",
      icon: "M8 12h8M12 8v8M3 12h18M12 3v18"
    }
  ],
  support: [
    {
      id: 1,
      title: "FAQs",
      href: "/faq",
      icon: "M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0",
      additionalPaths: ["M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"]
    },
    {
      id: 2,
      title: "Warranty",
      href: "/warranty",
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    },
    {
      id: 3,
      title: "Manuals",
      href: "/manuals",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      additionalPaths: ["M14 2v6h6M16 13H8M16 17H8M10 9H8"]
    },
    {
      id: 4,
      title: "Contact",
      href: "/contact",
      icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }
  ],
  about: [
    {
      id: 1,
      title: "Our Story",
      href: "/our-story",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    },
    {
      id: 2,
      title: "Press",
      href: "/press",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      additionalPaths: ["M14 2v6h6M16 13H8M16 17H8M10 9H8"]
    },
    {
      id: 3,
      title: "Careers",
      href: "/careers",
      icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    }
  ]
};

const mainNavItems = [
  { id: 1, label: "Products", hasDropdown: true, dropdownKey: "products" },
  { id: 2, label: "Technology", hasDropdown: true, dropdownKey: "technology" },
  { id: 3, label: "Reviews", hasDropdown: false, href: "/reviews" },
  { id: 4, label: "Support", hasDropdown: true, dropdownKey: "support" },
  { id: 5, label: "About", hasDropdown: true, dropdownKey: "about" }
];

// Reusable Components
const NavDot = () => (
  <span className="block h-[7px] w-[7px] rounded-full border border-transparent transition-colors group-hover:border-[var(--seafoam)] group-hover:bg-[var(--seafoam)]" />
);

const DropdownIcon = () => (
  <svg
    className="h-4 w-4 transition-transform"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const DropdownItem = ({ item }) => (
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
  return (
    <section className="invisible fixed left-1/2 top-10 z-[10000] hidden w-[1360px] max-w-[calc(100%-80px)] -translate-x-1/2 lg:visible lg:flex p-[2px] rounded-[16px] hover:bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300">
      <header className="w-full flex items-center justify-between rounded-[16px] bg-white px-[16px] py-[13px] shadow-sm">
        {/* Logo */}
        <a className="flex items-center gap-2 transition-opacity hover:opacity-80" href="/">
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
          {mainNavItems.map((navItem) => (
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
          ))}
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
          <a
            className="pointer button-primary group link-/"
            href="/shop"
          >
            <span className="flex items-center gap-2 text-black">
              Shop
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </span>
          </a>
        </nav>
      </header>
    </section>
  );
};

export default Header;