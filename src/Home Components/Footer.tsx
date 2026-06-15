"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaGraduationCap,
  FaLinkedinIn,
  FaMapLocationDot,
  FaPhoneVolume,
  FaRegAddressCard,
  FaRegEye,
  FaSchool,
  FaTwitter,
  FaUserGraduate,
  FaYoutube,
} from "react-icons/fa6";

type QuickButton = {
  title: string;
  href: string;
  icon: ReactNode;
};

type FooterLink = {
  title: string;
  href: string;
};

type SocialLink = {
  title: string;
  href: string;
  icon: ReactNode;
};

const logoSrc = "/assets/images/logo-mane.png";

const quickButtons: QuickButton[] = [
  {
    title: "Get Appointment",
    href: "/contact",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Contact Us Today",
    href: "/contact",
    icon: <FaPhoneVolume />,
  },
  {
    title: "Take a School Tour",
    href: "/campuslife",
    icon: <FaMapLocationDot />,
  },
];

const importantLinks: FooterLink[] = [
  { title: "Dhaka Districts office", href: "#" },
  { title: "Dhaka Education Board", href: "#" },
  { title: "eTIF", href: "#" },
  {
    title: "Directorate of Secondary and Higher Education",
    href: "#",
  },
  { title: "Directorate of Primary Education", href: "#" },
  { title: "Ministry of Education", href: "#" },
];

const serviceLinks: FooterLink[] = [
  { title: "Admission", href: "/admission" },
  { title: "Result", href: "#" },
  { title: "Online Admission", href: "/admission" },
  { title: "Fees Payment", href: "#" },
];

const aboutLinks: FooterLink[] = [
  { title: "About Us", href: "/about" },
  { title: "Chairman Message", href: "/message-from-chairman" },
  { title: "Mission and Vision", href: "/vision-and-objectives" },
  { title: "Contact Us", href: "/contact" },
];

const companyLinks: FooterLink[] = [
  { title: "Board of Directors", href: "/governing-body" },
  { title: "Executive Directors", href: "/executive-director" },
  { title: "Share Holders", href: "#" },
];

const otherLinks: FooterLink[] = [
  { title: "Property", href: "#" },
  { title: "Join Us", href: "/employment" },
  { title: "Gallery", href: "/gallery" },
];

const socialLinks: SocialLink[] = [
  {
    title: "Facebook",
    href: "#",
    icon: <FaFacebookF />,
  },
  {
    title: "YouTube",
    href: "#",
    icon: <FaYoutube />,
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: <FaLinkedinIn />,
  },
  {
    title: "Twitter",
    href: "#",
    icon: <FaTwitter />,
  },
];

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => {
  return (
    <div>
      <h3 className="text-lg font-black text-primary">{title}</h3>

      <div className="mt-5 flex flex-col gap-3">
        {links.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex w-fit items-center gap-2 text-base font-semibold text-primary transition-all duration-500 hover:translate-x-1 hover:text-brand-primary"
          >
            <span>{item.title}</span>
            <FaArrowRight className="text-[10px] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
};

const TopInfo = ({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="group flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-primary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
        {icon}
      </div>

      <div className="text-primary">
        <p className="text-sm font-semibold leading-none">{label}</p>
        <div className="mt-2 text-base font-black leading-6">{children}</div>
      </div>
    </div>
  );
};

const OfficeRow = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-[115px_1fr] sm:gap-4">
      <p className="font-black text-inverse">{label}</p>
      <div className="font-bold leading-6 text-inverse/95">{children}</div>
    </div>
  );
};

const Footer = () => {
  const [todayCount, setTodayCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    try {
      const savedVisits = localStorage.getItem("visitData");
      const visits: string[] = savedVisits ? JSON.parse(savedVisits) : [];

      const now = new Date();
      const today = now.toISOString().split("T")[0];

      const todayVisits = visits.filter((visit) => visit.startsWith(today));
      const updatedVisits = [...visits, now.toISOString()];

      setTodayCount(todayVisits.length + 1);
      setTotalCount(updatedVisits.length);

      localStorage.setItem("visitData", JSON.stringify(updatedVisits));
    } catch {
      const fallbackVisit = new Date().toISOString();

      setTodayCount(1);
      setTotalCount(1);
      localStorage.setItem("visitData", JSON.stringify([fallbackVisit]));
    }
  }, []);

  return (
    <footer className="bg-color-secondary font-main text-primary">
      {/* Top Area */}
      <div className="border-b border-brand-primary/20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-14">
          <Link href="/" className="group flex justify-center md:justify-start">
            <div className="flex h-24 w-44 items-center justify-center rounded-[18px] bg-page-primary/70 px-4 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
              <Image
                src={logoSrc}
                alt="School Logo"
                width={190}
                height={100}
                priority
                className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>

          <TopInfo icon={<FaPhoneVolume />} label="To More Inquiry">
            <p>01867268422</p>
            <p>01866785183</p>
          </TopInfo>

          <TopInfo icon={<FaEnvelope />} label="To Send Mail">
            <p>info@vnsc.edu.bd</p>
            <p>vnsc_bd@yahoo.com</p>
          </TopInfo>

          <div className="text-center lg:text-left">
            <p className="text-base font-black text-primary">Follow Us</p>

            <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
              {socialLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  aria-label={item.title}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-color-primary text-inverse shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-page-primary hover:text-brand-primary hover:shadow-md"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="border-b border-brand-primary/20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:px-8 lg:py-14">
          <div className="lg:col-span-2">
            <FooterColumn title="About Us" links={aboutLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Our Company" links={companyLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Others" links={otherLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Services" links={serviceLinks} />
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-[18px] bg-color-primary p-6 text-inverse shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-7">
              <h3 className="text-center text-2xl font-black uppercase tracking-wide">
                Corporate Office
              </h3>

              <div className="mt-6 space-y-5">
                <OfficeRow label="Head Office:">
                  <p>Baily Road, Dhaka, Bangladesh</p>
                </OfficeRow>

                <OfficeRow label="Helpline:">
                  <p>01867268422</p>
                  <p>01866785183</p>
                  <p>01866785184</p>
                </OfficeRow>

                <OfficeRow label="Telephone:">
                  <p>02-48317513, 02-48317519</p>
                  <p>02-58310500</p>
                </OfficeRow>

                <OfficeRow label="Email:">
                  <p>info@vnsc.edu.bd</p>
                  <p>vnsc_bd@yahoo.com</p>
                </OfficeRow>

                <OfficeRow label="Website:">
                  <p>www.vnsc.edu.bd</p>
                </OfficeRow>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Area */}
      <div className="border-b border-brand-primary/20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {quickButtons.map((button) => (
            <Link
              key={button.title}
              href={button.href}
              className="group flex items-center justify-between rounded-[18px] border border-brand-primary/20 bg-page-primary/50 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-color-primary text-xl text-inverse transition-all duration-500 group-hover:bg-color-secondary group-hover:text-primary">
                  {button.icon}
                </span>

                <div>
                  <p className="text-base font-black transition-colors duration-500">
                    {button.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-secondary transition-colors duration-500 group-hover:text-inverse">
                    View details
                  </p>
                </div>
              </div>

              <FaArrowRight className="text-sm opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>

      {/* Visitor + Hours */}
      <div className="border-b border-brand-primary/20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-5 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="rounded-[18px] border border-brand-primary/20 bg-page-primary/50 p-5">
            <div className="flex items-center gap-3">
              <FaRegEye className="text-2xl text-brand-primary" />
              <div>
                <p className="text-sm font-bold text-secondary">Today Visitor</p>
                <p className="text-2xl font-black text-primary">{todayCount}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[18px] border border-brand-primary/20 bg-page-primary/50 p-5">
            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-2xl text-brand-primary" />
              <div>
                <p className="text-sm font-bold text-secondary">Total Visitor</p>
                <p className="text-2xl font-black text-primary">{totalCount}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[18px] border border-brand-primary/20 bg-page-primary/50 p-5">
            <div className="flex items-center gap-3">
              <FaClock className="text-2xl text-brand-primary" />
              <div>
                <p className="text-sm font-bold text-secondary">Working Hours</p>
                <p className="text-base font-black text-primary">
                  Week Days: 9 AM - 5 PM
                </p>
                <p className="text-sm font-bold text-secondary">
                  Friday & Saturday: Close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="px-4 py-8 text-center">
        <p className="text-sm font-semibold text-primary">
          Copyright {new Date().getFullYear()} Viqarunnisa Noon School & College
          | Developed By IONIC Corporation
        </p>
      </div>
    </footer>
  );
};

export default Footer;