"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCalendarDays,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaMapPin,
  FaPhone,
  FaUsers,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

type FooterLink = {
  title: string;
  href: string;
  isExternal?: boolean;
};

const logoSrc = "/assets/images/logo-mane.png";

const academicLinks: FooterLink[] = [
  { title: "ভর্তি তথ্য", href: "/admission" },
  { title: "অনলাইন আবেদন", href: "/admission" },
  { title: "একাডেমিক ফলাফল", href: "#" },
  { title: "বেতন ও ফি পরিশোধ", href: "#" },
  { title: "ক্যাম্পাস লাইফ ও গ্যালারি", href: "/gallery" },
];

const institutionalLinks: FooterLink[] = [
  { title: "আমাদের প্রতিষ্ঠান সম্পর্কে", href: "/about" },
  { title: "চেয়ারম্যানের বাণী", href: "/message-from-chairman" },
  { title: "লক্ষ্য, উদ্দেশ্য ও মূল্যবোধ", href: "/vision-and-objectives" },
  { title: "পরিচালনা পরিষদ", href: "/governing-body" },
  { title: "চাকরি / আমাদের সাথে যোগ দিন", href: "/employment" },
];

const boardLinks: FooterLink[] = [
  { title: "শিক্ষা মন্ত্রণালয়", href: "#", isExternal: true },
  { title: "ঢাকা শিক্ষা বোর্ড", href: "#", isExternal: true },
  { title: "মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর", href: "#", isExternal: true },
  { title: "প্রাথমিক শিক্ষা অধিদপ্তর", href: "#", isExternal: true },
];

const socialLinks = [
  { title: "ফেসবুক", href: "#", icon: <FaFacebookF /> },
  { title: "ইউটিউব", href: "#", icon: <FaYoutube /> },
  { title: "লিংকডইন", href: "#", icon: <FaLinkedinIn /> },
  { title: "টুইটার", href: "#", icon: <FaXTwitter /> },
];

export default function Footer() {
  const [visitorStats, setVisitorStats] = useState({ today: 0, total: 0 });

  useEffect(() => {
    try {
      const savedVisits = localStorage.getItem("visitData");
      const visits: string[] = savedVisits ? JSON.parse(savedVisits) : [];
      const now = new Date();
      const todayStr = now.toISOString().split("T")[0];

      const todayCount = visits.filter((v) => v.startsWith(todayStr)).length + 1;
      const updatedVisits = [...visits, now.toISOString()];

      setVisitorStats({ today: todayCount, total: updatedVisits.length });
      localStorage.setItem("visitData", JSON.stringify(updatedVisits));
    } catch {
      setVisitorStats({ today: 1, total: 1 });
    }
  }, []);

  return (
    <footer className="bg-slate-900 font-sans text-slate-300">


      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Identity & Contact Column */}
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="inline-block bg-white p-3 rounded-xl shadow-inner">
              <Image
                src={logoSrc}
                alt="স্কুলের লোগো"
                width={150}
                height={80}
                priority
                className="h-auto w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              আন্তর্জাতিক মানের শিক্ষা প্রদান, চারিত্রিক গঠন এবং শিক্ষার্থীদের মানসিক বিকাশে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <FaMapPin className="mt-1 text-blue-400 shrink-0" />
                <span>বেইলি রোড, ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400 shrink-0" />
                <span>+৮৮০ ২-৪৮৩১৭৫১৩, +৮৮০ ২-৫৮৩১০৫০০</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 shrink-0" />
                <span>info@vnsc.edu.bd</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">শিক্ষা বিভাগ</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {academicLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="hover:text-blue-400 transition-colors block py-1">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">প্রতিষ্ঠান</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {institutionalLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="hover:text-blue-400 transition-colors block py-1">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">পোর্টাল ও বোর্ড</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {boardLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="group flex items-center gap-1.5 hover:text-blue-400 transition-colors block py-1">
                      <span>{link.title}</span>
                      <FaArrowUpRightFromSquare className="text-[10px] text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>


        <div className="text-center mt-12 grid  grid-cols-1 gap-4 border-t border-slate-800 pt-8 sm:grid-cols-3">
          {/* Office Hours Card */}
          <div className="flex items-center justify-center  gap-4 rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
            <FaClock className="text-2xl text-indigo-600" />
            <div>
              <p className="font-bold text-lg text-slate-800">অফিস সময়</p>
            </div>
          </div>

          {/* Daily Unique Visits Card */}
          <div className="flex items-center justify-center gap-4 rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
            <FaUsers className="text-2xl text-indigo-600" />
            <div>
              <p className="font-bold text-lg text-slate-800">দৈনিক ভিজিটর সংখ্যা</p>
            </div>
          </div>

          {/* Total Analytics Registry Card */}
          <div className="flex items-center justify-center gap-4 rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
            <FaGlobe className="text-2xl text-indigo-600" />
            <div>
              <p className="font-bold text-lg text-slate-800">সর্বমোট পরিদর্শন সংখ্যা</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Panel */}
        <div className="mt-9 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt">
        
          <div className="flex gap-3 mt-5">
            {socialLinks.map((social) => (
              <Link
                key={social.title}
                href={social.href}
                aria-label={social.title}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-blue-600 hover:text-white"

              >
                {social.icon}
              </Link>
            ))}

            
          </div>
      <div className="mx-20">
  <p className="text-xs text-white text-center sm:text-left">
    &copy; {new Date().getFullYear()} ভিকারুননিসা নূন স্কুল ও কলেজ। সর্বস্বত্ব সংরক্ষিত।
    <span className="block sm:inline sm:ml-[15px] text-slate-600">
      ওয়েবসাইট নির্মাণ ও ডিজাইন: আইওনিক কর্পোরেশন।
    </span>
  </p>
</div>
        </div>
      </div>
    </footer>
  );
}