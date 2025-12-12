import { ArrowRight, MoveUpRight } from "lucide-react";



const Header = () => {
    return (
        <header className="l-header invisible fixed left-1/2 top-10 z-[10000] hidden w-[1360px] max-w-[calc(100%-80px)] -translate-x-1/2 items-center justify-between rounded-[16px] bg-white px-[16px] py-[13px] shadow-sm lg:visible lg:flex">
            <a className="flex items-center gap-2 transition-opacity hover:opacity-80" href="/">
                <img
                    alt="AudioTech Logo"
                    width={171}
                    height={17}
                    decoding="async"
                    data-nimg={1}
                    className="h-auto md:w-[90px] lg:w-[120px] xl:w-[170px]"
                    style={{ color: "transparent" }}
                    src="https://images.ctfassets.net/k0ydwkm1u654/4pn4BfoZjXbjOLkOogNsKU/05aac0ebb7813e0e07696ae13bd48bea/photon-logo-black.svg"
                />
                <span className="sr-only">GekoKave</span>
            </a>
            <nav className="navigation flex items-center gap-1.5 xl:gap-3">
                <div className="navDropdown">
                    <button className="nav-link group">
                        <span className="relative flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-[11px] transition-all duration-200 xl:text-sm bg-transparent hover:bg-[var(--light-gray)] group-hover:font-medium">
                            <span className="block h-[7px] w-[7px] rounded-full border border-transparent transition-colors group-hover:border-[var(--seafoam)] group-hover:bg-[var(--seafoam)]" />
                            Products
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
                        </span>
                    </button>
                    <div className="navDropdown-menu">
                        <div className="mx-auto flex w-full max-w-[938px] flex-wrap items-center justify-center gap-4 py-[16px]">
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/wireless"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M12 2v20M8 6h8M8 12h8M8 18h8" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Wireless
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/wired"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M4 12h16M12 4v16" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Wired
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/gaming"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <rect x="2" y="2" width="20" height="20" rx="2" />
                                        <path d="M8 8h8M8 12h8M8 16h4" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Gaming
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/professional"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Professional
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="navDropdown">
                    <button className="nav-link group">
                        <span className="relative flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-[11px] transition-all duration-200 xl:text-sm bg-transparent hover:bg-[var(--light-gray)] group-hover:font-medium">
                            <span className="block h-[7px] w-[7px] rounded-full border border-transparent transition-colors group-hover:border-[var(--seafoam)] group-hover:bg-[var(--seafoam)]" />
                            Technology
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
                        </span>
                    </button>
                    <div className="navDropdown-menu">
                        <div className="mx-auto flex w-full max-w-[938px] flex-wrap items-center justify-center gap-4 py-[16px]">
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/noise-cancellation"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M12 2v20M8 8h8M8 12h8M8 16h4" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Noise Cancellation
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/sound-quality"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M3 12h18M12 3v18" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Sound Quality
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/battery-life"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <rect x="2" y="7" width="20" height="14" rx="2" />
                                        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Battery Life
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/connectivity"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M8 12h8M12 8v8M3 12h18M12 3v18" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Connectivity
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <a
                    className="pointer relative flex items-center gap-2 rounded-[20px] px-4 py-2 transition-colors hover:bg-[var(--light-gray)] group link-/"
                    href="/reviews"
                >
                    <span className="relative flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-[11px] transition-all duration-200 xl:text-sm bg-transparent group-hover:bg-[var(--light-gray)] group-hover:font-medium">
                        <span className="block h-[7px] w-[7px] rounded-full border border-transparent transition-colors group-hover:border-[var(--seafoam)] group-hover:bg-[var(--seafoam)]" />
                        Reviews
                    </span>
                </a>
                <div className="navDropdown">
                    <button className="nav-link group">
                        <span className="relative flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-[11px] transition-all duration-200 xl:text-sm bg-transparent hover:bg-[var(--light-gray)] group-hover:font-medium">
                            <span className="block h-[7px] w-[7px] rounded-full border border-transparent transition-colors group-hover:border-[var(--seafoam)] group-hover:bg-[var(--seafoam)]" />
                            Support
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
                        </span>
                    </button>
                    <div className="navDropdown-menu">
                        <div className="mx-auto flex w-full max-w-[938px] flex-wrap items-center justify-center gap-4 py-[16px]">
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/faq"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        FAQs
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/warranty"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Warranty
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/manuals"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Manuals
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/contact"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Contact
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="navDropdown">
                    <button className="nav-link group">
                        <span className="relative flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-[11px] transition-all duration-200 xl:text-sm bg-transparent hover:bg-[var(--light-gray)] group-hover:font-medium">
                            <span className="block h-[7px] w-[7px] rounded-full border border-transparent transition-colors group-hover:border-[var(--seafoam)] group-hover:bg-[var(--seafoam)]" />
                            About
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
                        </span>
                    </button>
                    <div className="navDropdown-menu">
                        <div className="mx-auto flex w-full max-w-[938px] flex-wrap items-center justify-center gap-4 py-[16px]">
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/our-story"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Our Story
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/press"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Press
                                    </span>
                                </div>
                            </a>
                            <a
                                className="pointer radius-[20px] group flex w-1/4 min-w-[200px] items-center gap-4 rounded-[20px] border p-[9px] border-transparent hover:border-[var(--seafoam)] transition-all duration-200"
                                href="/careers"
                            >
                                <div className="transiton-colors flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[var(--light-gray)] group-hover:bg-[var(--seafoam)] transition-all duration-200">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transiton-all group-hover:invert">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div className="group flex flex-col">
                                    <span className="transition-colors group-hover:font-normal group-hover:text-[var(--seafoam)]">
                                        Careers
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="flex items-center gap-1.5 xl:gap-3">
                <a
                    href="/login"
                    className="pointer button-outline text-[11px] xl:text-sm group link-/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="">Sign In</span>
                </a>
                <a
                    className="pointer button-primary group link-/"
                    href="/shop"
                >
                    <span className="flex items-center gap-2">
                        Shop
                        <ArrowRight className="w-4 h-4 -rotate-45" />
                    </span>
                </a>
            </nav>
        </header>

    )
}

export default Header;