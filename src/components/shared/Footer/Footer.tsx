

const Footer = () => {
    return (
        <footer
            className="px-8 bg-gradient-to-b from-[#003ca6] to-[#001740] via-[#001740] via-[84.49%] relative pt-[40px] text-white"
        >
            <div className="l-container relative z-10">
                <div className="bg-gradient-to-b from-white to-[#d9d8d8] flex flex-wrap rounded-[16px] px-[24px] py-[40px] text-black">
                    <div className="mb-4 w-full md:mb-0 md:w-1/3 md:max-w-[385px]">
                        <h2 className="text-[38px] font-light">
                            Subscribe to our&nbsp;newsletter
                        </h2>
                        <form className="test-drive-form mx-auto w-full text-white">
                            <div className="relative mt-[18px] flex items-center gap-8 border border-black rounded-lg outline-black">
                                <label className="w-full sm:flex-1">
                                    <span className="sr-only">Email email</span>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter email"
                                        className="max-h-[54px] w-full rounded-[10px] bg-white p-[20px]"
                                        name="EMAIL"
                                    />
                                </label>
                                <input
                                    type="text"
                                    className="hidden"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    name="b_bae2c222f61f9ae32dd037b70_b522708f22"
                                />
                                <button
                                    type="submit"
                                    className="button-primary button--black absolute right-[20px] top-1/2 inline-flex -translate-y-1/2 items-center gap-2 text-sm"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-2/3 md:pl-10">
                        <nav
                            aria-label="Footer navigation"
                            className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-3 lg:gap-x-16"
                        >
                            <div className="space-y-8 text-sm">
                                <div>
                                    <p className="mb-[10px] border-b border-black/20 pb-[10px] text-sm font-[500]">
                                        Platform
                                    </p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/marketplace"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Marketplace </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/network"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Network</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="mb-[10px] border-b border-black/20 pb-[10px] text-sm font-[500]">
                                        Solutions{" "}
                                    </p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/tech-enabled-care"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Tech-Enabled Care</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/health-systems"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Health Systems</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/urgent-care"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Urgent Care</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-8 text-sm">
                                <div>
                                    <p className="mb-[10px] border-b border-black/20 pb-[10px] text-sm font-[500]">
                                        Case Studies
                                    </p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/case-studies"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>View All</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="mb-[10px] border-b border-black/20 pb-[10px] text-sm font-[500]">
                                        Resources
                                    </p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/blog"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Blog</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://docs.photon.health/docs"
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Docs</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-8 text-sm">
                                <div>
                                    <p className="mb-[10px] border-b border-black/20 pb-[10px] text-sm font-[500]">
                                        Company
                                    </p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/about-us"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>About Us</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="/careers"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Careers</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="mb-[10px] border-b border-black/20 pb-[10px] text-sm font-[500]">
                                        Follow Us
                                    </p>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                href="https://x.com/photonhealth"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>Twitter (X)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.linkedin.com/company/photon-health"
                                                className="pointer group inline-flex items-center gap-2 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                                                <span>LinkedIn</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <a className="block" href="/">
                    <img
                        alt="Footer"
                        loading="lazy"
          
                        decoding="async"
                        data-nimg={1}
                        className="mx-auto my-4"
                        style={{ color: "transparent" }}
                        src='/logo_w.svg'
                    />
                </a>
                <div className="flex flex-col items-center justify-between py-[40px] text-sm sm:flex-row">
                    <ul className="flex items-center gap-[24px]">
                        <li>
                            <a className="underline hover:no-underline" href="/terms">
                                Terms
                            </a>
                        </li>
                        <li>
                            <a className="underline hover:no-underline" href="/privacy">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a className="underline hover:no-underline" href="/baa">
                                BAA
                            </a>
                        </li>
                    </ul>
                    <p className="mt-[20px] sm:mt-0">
                        ©&nbsp;2025 Photon&nbsp;Health,&nbsp;Inc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer