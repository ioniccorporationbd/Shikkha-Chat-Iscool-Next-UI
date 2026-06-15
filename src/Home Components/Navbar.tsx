"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

type SubLinkItem = {
  name: string;
  link: string;
};

type NavItem = {
  name: string;
  link: string;
  subLink?: SubLinkItem[];
};

const logoSrc = "/assets/images/logo-mane.png";

const navList: NavItem[] = [
  { name: "Home", link: "/" },
  {
    name: "About us",
    link: "/message-from-chairman",
    subLink: [
      { name: "Message from Chairman", link: "/message-from-chairman" },
      { name: "Message from Principal", link: "/message-from-principal" },
      { name: "Governing Body", link: "/governing-body" },
      { name: "Master Plan", link: "/master-plan" },
      { name: "History", link: "/history" },
      { name: "Vision and Objectives", link: "/vision-and-objectives" },
      { name: "Infrastructure", link: "/infrastructure" },
    ],
  },
  {
    name: "Academic",
    link: "/academic",
    subLink: [
      { name: "Code of Conducts", link: "/code-of-conducts" },
      { name: "Guideline for Parents", link: "/guideline-for-parents" },
      { name: "Dress Code", link: "/dress-code" },
      {
        name: "HomeWork & Lectures",
        link: "/homework-&-lecture",
      },
      { name: "Lesson Plan", link: "/lesson-plan" },
      { name: "Academic calendar", link: "/academic-calendar" },
      { name: "Syllabus", link: "/syllabus" },
      { name: "Class Routine", link: "/class-routine" },
      { name: "Co-curricular Activities", link: "/co-curricular-activities" },
    ],
  },
  {
    name: "Information",
    link: "/information",
    subLink: [
      { name: "Notice Board", link: "/notice-board" },
      { name: "Payment Procedure", link: "/payment-procedure" },
      { name: "Facilities", link: "/facilities" },
      { name: "News and Events", link: "/news-and-events" },
      { name: "Our Achievements", link: "/our-achievements" },
      { name: "List of Holidays", link: "/list-of-holidays" },
      { name: "Teachers Info", link: "/teachers-info" },
      { name: "Student Info", link: "/student-info" },
      { name: "Policies & Guidelines", link: "/policies-and-guidelines" },
      { name: "Library", link: "/library" },
      {
        name: "Health Awareness",
        link: "/health-and-environmental-awareness-info",
      },
    ],
  },
  {
    name: "Admission",
    link: "/admission",
    subLink: [
      { name: "Apply Now", link: "/apply-now" },
      { name: "Fast Facts", link: "/fast-facts" },
      { name: "Fees & Payment", link: "/fees-and-payment" },
      { name: "Scholarships", link: "/scholarships" },
      { name: "Transfer Procedures", link: "/transfer-procedures" },
    ],
  },
  {
    name: "Campus Life",
    link: "/gallery",
    subLink: [
      { name: "Photo Gallery", link: "/gallery" },
      { name: "Video Gallery", link: "/video-gallery" },
    ],
  },
  {
    name: "Employment",
    link: "/employment",
    subLink: [
      { name: "At a Glance", link: "/at-a-glance" },
      { name: "Employment Circulars", link: "/employment-circulars" },
      { name: "Recruitment Results", link: "/recruitment-exam-results" },
    ],
  },
  { name: "Contact", link: "/contact" },
  {
    name: "স্বাধীনতা কর্নার",
    link: "/freedomcorner",
    subLink: [
      { name: "নোটিশ", link: "/freedomcorner/notices" },
      { name: "ছবির গ্যালারী", link: "/gallery" },
      { name: "ভিডিও গ্যালারী", link: "/video-gallery" },
    ],
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState<boolean>(false);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  const closeMobileMenu = () => {
    setToggle(false);
    setActiveSubIndex(null);
  };

  const handleSubToggle = (index: number) => {
    setActiveSubIndex((prev) => (prev === index ? null : index));
  };

  const handleMenuLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    closeMobileMenu();

    if (typeof window === "undefined") return;

    const targetUrl = new URL(link, window.location.origin);

    if (targetUrl.pathname === window.location.pathname && targetUrl.hash) {
      event.preventDefault();
      window.history.pushState(
        null,
        "",
        `${targetUrl.pathname}${targetUrl.hash}`
      );
      window.dispatchEvent(new Event("hashchange"));
    }
  };

  const isRouteActive = (link: string) => {
    if (link === "/") return pathname === "/";
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  const isMenuActive = (item: NavItem) => {
    if (isRouteActive(item.link)) return true;
    return Boolean(
      item.subLink?.some((subItem) => isRouteActive(subItem.link))
    );
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-soft bg-color-primary font-main text-inverse shadow-md">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-2">
          {/* Logo Brand Container */}
          <Link
            href="/"
            onClick={(event) => handleMenuLinkClick(event, "/")}
            className="group relative shrink-0 transition-transform duration-200 active:scale-98"
          >
            <div className="flex h-14 w-36 items-center justify-center rounded-xl border border-border-soft bg-white px-3 shadow-xs transition-all duration-300 group-hover:border-color-secondary/50 group-hover:shadow-sm sm:w-44">
              <Image
                src={logoSrc}
                alt="Logo"
                width={160}
                height={50}
                priority
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Nav Items Links */}
          <nav className="hidden h-full flex-1 items-center justify-center gap-1 text-xs font-bold xl:flex 2xl:gap-2 2xl:text-sm">
            {navList.map((item, index) => {
              const active = isMenuActive(item);
              const hasDropdown = Boolean(item.subLink?.length);
              const isLargeDropdown = (item.subLink?.length ?? 0) > 6;

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="group relative flex h-full items-center"
                >
                  <Link
                    href={item.link}
                    onClick={(event) =>
                      handleMenuLinkClick(event, item.link)
                    }
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2.5 tracking-wide transition-all duration-200 ${
                      active
                        ? "text-color-secondary"
                        : "text-inverse/90 hover:text-color-secondary"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>

                    {hasDropdown && (
                      <FaChevronDown className="text-[9px] opacity-70 transition-transform duration-300 ease-out group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Desktop Dropdown Container Menu */}
                  {hasDropdown && (
                    <div
                      className={`invisible absolute top-[calc(100%-4px)] z-50 translate-y-2 opacity-0 transition-all duration-250 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                        isLargeDropdown
                          ? "left-1/2 w-[560px] -translate-x-1/2 p-2"
                          : "left-0 w-68 p-2"
                      }`}
                    >
                      {/* Dropdown Panel Body matches Navbar Body Color exactly */}
                      <div className="rounded-xl border border-border-soft bg-color-primary p-2 shadow-xl ring-1 ring-black/10">
                        {/* Internal Header Block */}
                        <div className="mb-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2">
                          <p className="text-xs font-black text-color-secondary">
                            {item.name}
                          </p>
                          <p className="text-[10px] font-medium text-inverse/60">
                            Select an option below
                          </p>
                        </div>

                        {/* Link Items Layout Grid */}
                        <div
                          className={`grid max-h-[360px] gap-1 overflow-y-auto ${
                            isLargeDropdown ? "grid-cols-2" : "grid-cols-1"
                          }`}
                        >
                          {item.subLink?.map((subItem, subIndex) => {
                            const subActive = isRouteActive(subItem.link);

                            return (
                              <Link
                                key={`${subItem.name}-${subIndex}`}
                                href={subItem.link}
                                onClick={(event) =>
                                  handleMenuLinkClick(event, subItem.link)
                                }
                                className={`group/item flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold transition-all duration-150 ${
                                  subActive
                                    ? "text-color-secondary font-black"
                                    : "text-inverse/90 hover:text-color-secondary"
                                }`}
                              >
                                <span className="truncate">
                                  {subItem.name}
                                </span>

                                <span className="transform text-[10px] text-color-secondary opacity-0 transition-all duration-150 group-hover/item:translate-x-1 group-hover/item:opacity-100">
                                  →
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden shrink-0 xl:block">
            <Link
              href="/login"
              onClick={(event) => handleMenuLinkClick(event, "/login")}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-color-secondary px-5 text-xs font-black tracking-wide text-color-secondary transition-all duration-200 hover:bg-color-secondary hover:text-black active:scale-98"
            >
              Login
            </Link>
          </div>

          {/* Desktop Sign In Button */}
          <div className="hidden shrink-0 xl:block">
            <Link
              href="/signin"
              onClick={(event) => handleMenuLinkClick(event, "/signin")}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-color-secondary px-5 text-xs font-black tracking-wide text-color-secondary transition-all duration-200 hover:bg-color-secondary hover:text-black active:scale-98"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Action Toggle Drawer Button */}
          <button
            type="button"
            onClick={() => setToggle((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft bg-color-primary text-inverse shadow-xs transition-colors active:scale-95 xl:hidden"
            aria-label="Toggle menu"
          >
            {toggle ? (
              <FaTimes className="text-base" />
            ) : (
              <FaBars className="text-base" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel Context Canvas */}
      <div
        className={`absolute left-0 top-full z-50 w-full border-b border-border-soft bg-color-primary shadow-2xl transition-all duration-300 ease-in-out xl:hidden ${
          toggle
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex max-h-[76vh] flex-col gap-1.5 overflow-y-auto p-4">
          <div className="mb-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center shadow-inner">
            <Image
              src={logoSrc}
              alt="Logo"
              width={130}
              height={40}
              priority
              className="mx-auto h-9 w-auto rounded-lg border border-border-soft bg-white object-contain px-3 py-1"
            />
            <p className="mt-2 text-[11px] font-bold text-inverse/60">
              Institutional Navigation Panel
            </p>
          </div>

          {navList.map((item, index) => {
            const hasSubMenu = Boolean(item.subLink?.length);
            const isOpen = activeSubIndex === index;
            const isActive = isMenuActive(item);

            return (
              <div
                key={`${item.name}-${index}`}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.link}
                    onClick={(event) =>
                      handleMenuLinkClick(event, item.link)
                    }
                    className={`w-full px-4 py-3 text-xs font-extrabold transition-all duration-200 ${
                      isActive
                        ? "text-color-secondary font-black"
                        : "text-inverse"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {hasSubMenu && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        handleSubToggle(index);
                      }}
                      className={`p-3 transition-colors ${
                        isActive ? "text-color-secondary" : "text-inverse/70"
                      }`}
                      aria-label={`Toggle ${item.name} list`}
                    >
                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Secondary Toggle Level Panel Container */}
                {hasSubMenu && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[500px] border-t border-white/10 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-1 bg-black/10 p-2">
                      {item.subLink?.map((subItem, subIndex) => {
                        const subActive = isRouteActive(subItem.link);

                        return (
                          <Link
                            key={`${subItem.name}-${subIndex}`}
                            href={subItem.link}
                            onClick={(event) =>
                              handleMenuLinkClick(event, subItem.link)
                            }
                            className={`block rounded-lg px-4 py-2.5 text-xs font-bold transition-colors ${
                              subActive
                                ? "text-color-secondary font-black"
                                : "text-inverse/90 hover:text-color-secondary"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="mt-2 flex w-full items-center gap-3">
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="flex h-11 flex-1 items-center justify-center rounded-lg border border-color-secondary text-xs font-black text-color-secondary transition-all duration-300 hover:bg-color-secondary hover:text-black active:scale-98"
            >
              Login
            </Link>

            <Link
              href="/signin"
              onClick={closeMobileMenu}
              className="flex h-11 flex-1 items-center justify-center rounded-lg border border-color-secondary text-xs font-black text-color-secondary transition-all duration-300 hover:bg-color-secondary hover:text-black active:scale-98"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;