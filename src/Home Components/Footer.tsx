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
  { title: "Admissions Info", href: "/admission" },
  { title: "Online Application", href: "/admission" },
  { title: "Academic Results", href: "#" },
  { title: "Tuition & Fees Payment", href: "#" },
  { title: "Campus Life & Gallery", href: "/gallery" },
];

const institutionalLinks: FooterLink[] = [
  { title: "About Our Institution", href: "/about" },
  { title: "Message from the Chairman", href: "/message-from-chairman" },
  { title: "Mission, Vision & Values", href: "/vision-and-objectives" },
  { title: "Governing Body", href: "/governing-body" },
  { title: "Careers / Join Us", href: "/employment" },
];

const boardLinks: FooterLink[] = [
  { title: "Ministry of Education", href: "#", isExternal: true },
  { title: "Dhaka Education Board", href: "#", isExternal: true },
  { title: "DSHE", href: "#", isExternal: true },
  { title: "Directorate of Primary Education", href: "#", isExternal: true },
];

const socialLinks = [
  { title: "Facebook", href: "#", icon: <FaFacebookF /> },
  { title: "YouTube", href: "#", icon: <FaYoutube /> },
  { title: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
  { title: "Twitter", href: "#", icon: <FaXTwitter /> },
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
                alt="School Logo"
                width={150}
                height={80}
                priority
                className="h-auto w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Committed to providing global standards of learning, cultivating character, and fostering intellectual development for young minds.
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <FaMapPin className="mt-1 text-blue-400 shrink-0" />
                <span>Baily Road, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400 shrink-0" />
                <span>+880 2-48317513, +880 2-58310500</span>
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Academics</h3>
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Institution</h3>
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Portals & Boards</h3>
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
              <p className="font-bold text-lg text-slate-800">Office Hours</p>
            </div>
          </div>

          {/* Daily Unique Visits Card */}
          <div className="flex items-center justify-center gap-4 rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
            <FaUsers className="text-2xl text-indigo-600" />
            <div>
              <p className="font-bold text-lg text-slate-800">Daily Unique Visits</p>
            </div>
          </div>

          {/* Total Analytics Registry Card */}
          <div className="flex items-center justify-center gap-4 rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
            <FaGlobe className="text-2xl text-indigo-600" />
            <div>
              <p className="font-bold text-lg text-slate-800">Total Analytics Registry</p>
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
    &copy; {new Date().getFullYear()} Viqarunnisa Noon School & College. All rights reserved.
    <span className="block sm:inline sm:ml-[15px] text-slate-600">
      Site architecture by IONIC Corporation.
    </span>
  </p>
</div>
        </div>
      </div>
    </footer>
  );
}