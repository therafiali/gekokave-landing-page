"use client";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Headphone Store", href: "/headphones" },
        { name: "Brand Partners", href: "/brands" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Wireless Headphones", href: "/wireless-headphones" },
        { name: "Wired & Audiophile Gear", href: "/wired-gear" },
        { name: "Gaming Headsets", href: "/gaming-headsets" },
      ],
    },
    {
      title: "Reviews",
      links: [
        { name: "All Headphone Reviews", href: "/reviews" },
      ],
    },
    {
      title: "Guides",
      links: [
        { name: "Tech Blog", href: "/blog" },
        { name: "Buying Guides", href: "/guides" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About Our Tech Blog", href: "/about-us" },
        { name: "Work With Us", href: "/careers" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "X (Tech Updates)", href: "https://x.com/techbrand" },
        { name: "LinkedIn (Reviews & News)", href: "https://www.linkedin.com/company/techbrand" },
      ],
    },
  ];

  const bottomLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Affiliate Disclosure", href: "/affiliate" },
  ];

  return (
    <footer className="px-8 bg-gradient-to-b from-[#003ca6] to-[#001740] via-[#001740] via-[84.49%] relative pt-[40px] text-white">
      <div className="l-container relative z-10">
        <div className="bg-gradient-to-b from-white to-[#d9d8d8] flex flex-wrap rounded-[16px] px-[24px] py-[40px] text-black">
          {/* Newsletter Section */}
          <div className="mb-4 w-full md:mb-0 md:w-1/3 md:max-w-[385px]">
            <h2 className="text-[38px] font-light">
              Get the Latest Headphone & Tech Deals
            </h2>
            <form className="test-drive-form mx-auto w-full text-white">
              <div className="relative mt-[18px] flex items-center gap-8 border border-black rounded-lg outline-black">
                <label className="w-full sm:flex-1">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email for deals & reviews"
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
                  Join Now
                </button>
              </div>
            </form>
          </div>

          {/* Footer Navigation */}
          <div className="w-full md:w-2/3 md:pl-10">
            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-3 lg:gap-x-16"
            >
              {footerLinks.map((section, idx) => (
                <div key={idx} className="space-y-8 text-sm">
                  <div>
                    <p className="mb-[10px] border-b border-black/20 pb-[10px] text-sm font-[500]">
                      {section.title}
                    </p>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <a
                            className="pointer group inline-flex items-center gap-2 hover:underline"
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : "_self"}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            <span className="h-[7px] w-[7px] rounded-full border border-black group-hover:bg-black" />
                            <span>{link.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer Logo */}
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

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between py-[40px] text-sm sm:flex-row">
          <ul className="flex items-center gap-[24px]">
            {bottomLinks.map((link, idx) => (
              <li key={idx}>
                <a className="underline hover:no-underline" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-[20px] sm:mt-0">
            ©&nbsp;2025 YourBrandName. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
