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
  { name: "হোম", link: "/" },
  {
    name: "আমাদের সম্পর্কে",
    link: "#",
    subLink: [
      { name: "চেয়ারম্যানের বাণী", link: "/message-from-chairman" },
      { name: "প্রিন্সিপালের বাণী", link: "/message-from-principal" },
      { name: "গভর্নিং বডি", link: "/governing-body" },
      { name: "স্মাস্টার প্ল্যান", link: "/master-plan" },
      { name: "ইতিহাস", link: "/history" },
      { name: "লক্ষ্য ও উদ্দেশ্য", link: "/vision-and-objectives" },
      { name: "অবকাঠামো", link: "/infrastructure" },
    ],
  },
  {
    name: "একাডেমিক",
    link: "#",
    subLink: [
      { name: "আচরণবিধি", link: "/code-of-conducts" },
      { name: "অভিভাবকদের নির্দেশিকা", link: "/guideline-for-parents" },
      { name: "ড্রেস কোড", link: "/dress-code" },
      { name: "বাড়ির কাজ ও লেকচার", link: "/homework-&-lecture" },
      { name: "পাঠ পরিকল্পনা", link: "/lesson-plan" },
      { name: "একাডেমিক ক্যালেন্ডার", link: "/academic-calendar" },
      { name: "সিলেবাস", link: "/syllabus" },
      { name: "ক্লাসের সময়সূচি", link: "/class-routine" },
      { name: "সহ-শিক্ষা কার্যক্রম", link: "/co-curricular-activities" },
    ],
  },
  {
    name: "তথ্য",
    link: "#",
    subLink: [
      { name: "নোটিশ বোর্ড", link: "/notice-board" },
      { name: "পেমেন্ট পদ্ধতি", link: "/payment-procedure" },
      { name: "সুযোগ-সুবিধা", link: "/facilities" },
      { name: "সংবাদ ও অনুষ্ঠান", link: "/news-and-events" },
      { name: "আমাদের অর্জনসমূহ", link: "/our-achievements" },
      { name: "ছুটির তালিকা", link: "/list-of-holidays" },
      { name: "শিক্ষকদের তথ্য", link: "/teachers-info" },
      { name: "শিক্ষার্থীদের তথ্য", link: "/student-info" },
      { name: "নীতিমালা ও নির্দেশিকা", link: "/policies-and-guidelines" },
      { name: "লাইব্রেরি", link: "/library" },
      {
        name: "স্বাস্থ্য সচেতনতা",
        link: "/health-and-environmental-awareness-info",
      },
    ],
  },
  {
    name: "ভর্তি",
    link: "#",
    subLink: [
      { name: "এখনই আবেদন করুন", link: "/apply-now" },
      { name: "এক নজরে মূল তথ্য", link: "/fast-facts" },
      { name: "ফি এবং পেমেন্ট", link: "/fees-and-payment" },
      { name: "বৃত্তি ও আর্থিক সহায়তা", link: "/scholarships" },
      { name: "স্থানান্তর প্রক্রিয়া", link: "/transfer-procedures" },
    ],
  },
  {
    name: "মিডিয়া",
    link: "#",
    subLink: [{ name: "মিডিয়া গ্যালারি", link: "/gallery" }],
  },
  {
    name: "কর্মসংস্থান",
    link: "#",
    subLink: [
      { name: "এক নজরে", link: "/at-a-glance" },
      { name: "নিয়োগ বিজ্ঞপ্তি", link: "/employment-circulars" },
      { name: "নিয়োগ পরীক্ষার ফলাফল", link: "/recruitment-exam-results" },
    ],
  },
  { name: "যোগাযোগ", link: "/contact" },
 {
    name: "স্বাধীনতা কর্নার",
    link: "/notices",
    subLink: [{ name: "নোটিশ", link: "/notices" }],
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
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
    if (link === "#") return false;
    if (link === "/") return pathname === "/";
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  const isMenuActive = (item: NavItem) => {
    if (isRouteActive(item.link)) return true;
    return Boolean(item.subLink?.some((subItem) => isRouteActive(subItem.link)));
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
    <header className="sticky top-0 z-50 w-full border-b border-soft bg-color-primary font-main text-inverse shadow-md">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-2">
          <Link
            href="/"
            onClick={(event) => handleMenuLinkClick(event, "/")}
            className="group relative shrink-0 transition-transform duration-200 active:scale-[0.98]"
          >
            <div className="flex h-14 w-36 items-center justify-center rounded-xl border border-soft bg-page-primary px-3 shadow-sm transition-all duration-300 group-hover:border-brand-primary-soft group-hover:shadow-md sm:w-44">
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

          <nav className="hidden h-full flex-1 items-center justify-center gap-1 text-xs font-bold 2xl:flex 2xl:gap-2 2xl:text-sm">
            {navList.map((item, index) => {
              const active = isMenuActive(item);
              const hasDropdown = Boolean(item.subLink?.length);
              const isRightDropdown = index >= navList.length - 3;

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="group relative flex h-full items-center"
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-2.5 tracking-wide transition-all duration-200 ${
                        active
                          ? "text-brand-secondary"
                          : "text-inverse/90 hover:text-brand-secondary"
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                      <FaChevronDown className="text-[9px] opacity-70 transition-transform duration-300 ease-out group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.link}
                      onClick={(event) => handleMenuLinkClick(event, item.link)}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-2.5 tracking-wide transition-all duration-200 ${
                        active
                          ? "text-brand-secondary"
                          : "text-inverse/90 hover:text-brand-secondary"
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  )}

                  {hasDropdown && (
                    <div
                      className={`invisible absolute top-[calc(100%-4px)] z-50 w-80 translate-y-2 p-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                        isRightDropdown ? "right-0" : "left-0"
                      }`}
                    >
                      <div className="rounded-xl border border-soft bg-color-primary p-2 shadow-xl ring-1 ring-black/10">
                        <div className="mb-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2">
                          <p className="text-xs font-black text-brand-secondary">
                            {item.name}
                          </p>
                          <p className="text-[10px] font-medium text-inverse/60">
                           নিচে একটি বিকল্প নির্বাচন করুন
                          </p>
                        </div>

                        <div className="grid max-h-[360px] grid-cols-1 gap-1 overflow-y-auto">
                          {item.subLink?.map((subItem, subIndex) => {
                            const subActive = isRouteActive(subItem.link);

                            return (
                              <Link
                                key={`${subItem.name}-${subIndex}`}
                                href={subItem.link}
                                onClick={(event) =>
                                  handleMenuLinkClick(event, subItem.link)
                                }
                                className={`group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-200 ${
                                  subActive
                                    ? "bg-color-secondary text-primary"
                                    : "text-inverse/80 hover:bg-white/10 hover:text-brand-secondary"
                                }`}
                              >
                                <span className="leading-5">
                                  {subItem.name}
                                </span>

                                <span
                                  className={`ml-3 h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200 ${
                                    subActive
                                      ? "bg-color-primary"
                                      : "bg-color-secondary opacity-0 group-hover/item:opacity-100"
                                  }`}
                                />
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

          <div className="hidden items-center gap-3 2xl:flex">
            <Link
              href="/online-admission"
              className="rounded-full bg-color-secondary px-5 py-2.5 text-sm font-black text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              অনলাইন ভর্তি
            </Link>

            <Link
              href="/login"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black text-inverse transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              লগইন
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setToggle((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-xl text-inverse transition hover:bg-white/15 2xl:hidden"
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {toggle && (
        <div className="2xl:hidden">
          <button
            type="button"
            aria-label="Close menu backdrop"
            onClick={closeMobileMenu}
            className="fixed inset-0 z-40 bg-black/45"
          />

          <div className="fixed right-0 top-0 z-50 h-screen w-[86%] max-w-[390px] overflow-y-auto border-l border-soft bg-color-primary p-4 shadow-2xl">
            <div className="mb-5 flex items-center justify-between gap-4">
              <Link
                href="/"
                onClick={(event) => handleMenuLinkClick(event, "/")}
                className="flex h-14 w-40 items-center justify-center rounded-xl border border-soft bg-page-primary px-3"
              >
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={150}
                  height={48}
                  priority
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-xl text-inverse"
              >
                <FaTimes />
              </button>
            </div>

            <nav className="space-y-2">
              {navList.map((item, index) => {
                const active = isMenuActive(item);
                const hasDropdown = Boolean(item.subLink?.length);
                const dropdownOpen = activeSubIndex === index;

                return (
                  <div
                    key={`${item.name}-mobile-${index}`}
                    className="rounded-xl border border-white/10 bg-white/5"
                  >
                    <div className="flex items-center">
                      {hasDropdown ? (
                        <button
                          type="button"
                          onClick={() => handleSubToggle(index)}
                          className={`flex min-h-12 flex-1 items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
                            active
                              ? "text-brand-secondary"
                              : "text-inverse/85 hover:text-brand-secondary"
                          }`}
                        >
                          <span>{item.name}</span>
                          <FaChevronDown
                            className={`text-xs transition-transform duration-300 ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.link}
                          onClick={(event) =>
                            handleMenuLinkClick(event, item.link)
                          }
                          className={`flex min-h-12 flex-1 items-center rounded-xl px-4 py-3 text-sm font-bold transition ${
                            active
                              ? "text-brand-secondary"
                              : "text-inverse/85 hover:text-brand-secondary"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>

                    {hasDropdown && dropdownOpen && (
                      <div className="border-t border-white/10 p-2">
                        <div className="grid grid-cols-1 gap-1">
                          {item.subLink?.map((subItem, subIndex) => {
                            const subActive = isRouteActive(subItem.link);

                            return (
                              <Link
                                key={`${subItem.name}-mobile-${subIndex}`}
                                href={subItem.link}
                                onClick={(event) =>
                                  handleMenuLinkClick(event, subItem.link)
                                }
                                className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                                  subActive
                                    ? "bg-color-secondary text-primary"
                                    : "text-inverse/75 hover:bg-white/10 hover:text-brand-secondary"
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
            </nav>

            <div className="sticky bottom-0 mt-6 grid grid-cols-2 gap-3 border-t border-white/10 bg-color-primary pt-5">
              <Link
                href="/online-admission"
                onClick={closeMobileMenu}
                className="flex items-center justify-center rounded-xl bg-color-secondary px-4 py-3 text-sm font-black text-primary"
              >
            অনলাইন ভর্তি
              </Link>

              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black text-inverse"
              >
                লগইন
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;