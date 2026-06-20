"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

type SocialLinks = {
  facebook?: string;
  linkedin?: string;
  whatsapp?: string;
};

type GoverningMember = {
  name: string;
  designation: string;
  image: string;
  alt: string;
  socials?: SocialLinks;
};

type PaymentMethod = {
  name: string;
  image: string;
};

type GoverningMemberCardProps = {
  member: GoverningMember;
  onDetailsClick: (member: GoverningMember) => void;
};

const governingMembers: GoverningMember[] = [
  {
    name: "সিদ্দিকী নাসির উদ্দিন",
    designation: "অভিভাবক প্রতিনিধি (কলেজ)",
    image: "/assets/body%20images/Siddique%20Nasir.jpg",
    alt: "সিদ্দিকী নাসির উদ্দিন",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "মো. ওহাদুজ জামান মন্টু",
    designation: "অভিভাবক প্রতিনিধি (কলেজ)",
    image: "/assets/body%20images/Md.%20Ohaduj%20Zaman.jpg",
    alt: "মো. ওহাদুজ জামান মন্টু",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "ড. তাজুল ইসলাম",
    designation: "অভিভাবক প্রতিনিধি (মাধ্যমিক)",
    image: "/assets/body%20images/Dr.%20Tajul%20Islam.png",
    alt: "ড. তাজুল ইসলাম",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "আনোয়ার কবির ভূইয়া (পুলক)",
    designation: "অভিভাবক প্রতিনিধি (কলেজ)",
    image: "/assets/body%20images/Anower%20Kabir.jpg",
    alt: "আনোয়ার কবির ভূইয়া পুলক",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "গোলাম বেনজির পলাশ",
    designation: "অভিভাবক প্রতিনিধি (প্রাথমিক)",
    image: "/assets/body%20images/Golam%20Benzir.jpg",
    alt: "গোলাম বেনজির পলাশ",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "মৌসুমী খান",
    designation: "অভিভাবক প্রতিনিধি (সংরক্ষিত মহিলা)",
    image: "/assets/body%20images/Moushmi%20Khan.jpg",
    alt: "মৌসুমী খান",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "মো. আব্দুর রাজ্জাক আকন্দ",
    designation: "শিক্ষক প্রতিনিধি (বিদ্যালয়)",
    image: "/assets/body%20images/Abdur%20Razzak.jpg",
    alt: "মো. আব্দুর রাজ্জাক আকন্দ",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "চাঁদ সুলতানা",
    designation: "শিক্ষক প্রতিনিধি (সংরক্ষিত মহিলা)",
    image: "/assets/body%20images/Chaad%20Sultana.jpg",
    alt: "চাঁদ সুলতানা",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
];

const paymentMethods: PaymentMethod[] = [
  { name: "বিকাশ", image: "/assets/images/bkash.png" },
  { name: "রকেট", image: "/assets/images/rocket%20.png" },
  { name: "ডাচ্-বাংলা ব্যাংক", image: "/assets/images/dbbl%20.jpg" },
  { name: "সোনালী ব্যাংক", image: "/assets/images/Sonali-Bank-logo-.png" },
];

const mobile = "/assets/images/mobileNexus%20.png";
const odhayanLogo = "/assets/images/logo-mane.png";

const toBanglaNumber = (value: string | number) =>
  value.toString().replace(/\d/g, (digit) => "০১২৩৪۵۶۷۸۹"[Number(digit)]);

function SocialIcon({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href || "#"}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-soft bg-page-secondary text-sm text-brand-primary shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-md"
    >
      {children}
    </Link>
  );
}

function GoverningMemberCard({
  member,
  onDetailsClick,
}: GoverningMemberCardProps) {
  return (
    <button
      type="button"
      onClick={() => onDetailsClick(member)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-soft bg-page-primary text-left shadow-sm outline-none transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl focus:ring-2 focus:ring-[color:var(--color-primary)]/30"
    >
      <div className="absolute left-0 top-0 z-20 h-[5px] w-full bg-color-primary transition-all duration-500 group-hover:bg-color-secondary" />

      <div className="relative aspect-[4/5] w-full overflow-hidden bg-page-secondary">
        <Image
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          src={member.image}
          alt={member.alt}
          width={400}
          height={500}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-[var(--color-primary)]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute bottom-4 left-0 right-0 flex translate-y-4 justify-center gap-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <SocialIcon href={member.socials?.facebook} label="ফেসবুক">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href={member.socials?.linkedin} label="লিংকডইন">
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon href={member.socials?.whatsapp} label="হোয়াটসঅ্যাপ">
            <FaWhatsapp />
          </SocialIcon>
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-color-secondary px-4 py-2 text-xs font-black text-brand-primary opacity-0 shadow-md transition-all duration-500 group-hover:opacity-100">
          বিস্তারিত দেখুন
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between p-5 text-center">
        <div>
          <h3 className="text-lg font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-brand-primary">
            {member.name}
          </h3>
          <div className="mx-auto my-3 h-[3px] w-10 rounded-full bg-color-secondary transition-all duration-500 group-hover:w-20 group-hover:bg-color-primary" />
        </div>

        <p className="flex min-h-[40px] items-center justify-center text-sm font-medium leading-relaxed text-secondary">
          {member.designation}
        </p>
      </div>
    </button>
  );
}

function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <div className="group flex h-[100px] items-center justify-center rounded-xl border border-soft bg-page-primary p-4 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-primary hover:shadow-lg">
      <div className="relative h-full w-full max-w-[160px] transition-transform duration-500 group-hover:scale-105">
        <Image
          className="object-contain"
          src={method.image}
          alt={method.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
        />
      </div>
    </div>
  );
}

function MemberDetailsModal({
  member,
  onClose,
}: {
  member: GoverningMember | null;
  onClose: () => void;
}) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] border border-soft bg-page-primary shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="বন্ধ করুন"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-color-primary text-xl text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
        >
          <FaXmark />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative min-h-[420px] overflow-hidden bg-page-secondary lg:col-span-5">
            <Image
              src={member.image}
              alt={member.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-flex rounded-full bg-color-secondary px-5 py-2 text-xs font-black text-brand-primary shadow-md">
                পরিচালনা পর্ষদ সদস্য
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-primary">
              সদস্যের বিস্তারিত তথ্য
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-primary sm:text-4xl">
              {member.name}
            </h2>

            <div className="mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mt-5 rounded-2xl bg-color-secondary px-5 py-4 text-base font-black leading-7 text-brand-primary">
              {member.designation}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-soft bg-page-secondary p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                  নাম
                </p>
                <p className="mt-2 text-lg font-black text-primary">
                  {member.name}
                </p>
              </div>

              <div className="rounded-2xl border border-soft bg-page-secondary p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                  পদবি
                </p>
                <p className="mt-2 text-lg font-black text-primary">
                  {member.designation}
                </p>
              </div>

              <div className="rounded-2xl border border-soft bg-page-secondary p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                  বিভাগ
                </p>
                <p className="mt-2 text-lg font-black text-primary">
                  পরিচালনা পর্ষদ
                </p>
              </div>

              <div className="rounded-2xl border border-soft bg-page-secondary p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                  অবস্থান
                </p>
                <p className="mt-2 text-lg font-black text-primary">
                  সক্রিয় সদস্য
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-soft bg-page-secondary p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                দায়িত্ব ও ভূমিকা
              </p>

              <p className="mt-3 text-sm font-semibold leading-8 text-secondary">
                প্রতিষ্ঠান পরিচালনা, শিক্ষার মানোন্নয়ন, অভিভাবক ও শিক্ষক
                প্রতিনিধিত্ব, প্রশাসনিক সিদ্ধান্ত গ্রহণ এবং শিক্ষার্থীবান্ধব
                পরিবেশ তৈরিতে পরিচালনা পর্ষদের সদস্য হিসেবে গুরুত্বপূর্ণ ভূমিকা
                পালন করেন।
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialIcon href={member.socials?.facebook} label="ফেসবুক">
                <FaFacebookF />
              </SocialIcon>

              <SocialIcon href={member.socials?.linkedin} label="লিংকডইন">
                <FaLinkedinIn />
              </SocialIcon>

              <SocialIcon href={member.socials?.whatsapp} label="হোয়াটসঅ্যাপ">
                <FaWhatsapp />
              </SocialIcon>

              <button
                type="button"
                onClick={onClose}
                className="ml-auto inline-flex items-center justify-center rounded-full bg-color-primary px-6 py-3 text-sm font-black text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GoverningBody() {
  const [selectedMember, setSelectedMember] = useState<GoverningMember | null>(
    null
  );

  const closeModal = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    if (!selectedMember) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedMember]);

  return (
    <main className="bg-page-secondary font-main text-primary antialiased selection:bg-color-primary selection:text-inverse">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 xl:py-24">
        <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-color-primary opacity-[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="mb-10 text-center sm:text-left">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-primary">
              পরিচালনা কাঠামো
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary sm:text-3xl md:text-4xl">
              পরিচালনা পর্ষদ
            </h2>

            <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-color-primary sm:mx-0" />

            <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-secondary sm:text-base">
              সদস্যের ছবি বা কার্ডে ক্লিক করলে বিস্তারিত তথ্যসহ একটি মডাল দেখা
              যাবে।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {governingMembers.map((member) => (
              <GoverningMemberCard
                key={member.name}
                member={member}
                onDetailsClick={setSelectedMember}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 xl:pb-24">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl border border-soft bg-page-primary shadow-md transition-shadow duration-500 hover:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-5 xl:p-12">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {paymentMethods.map((method) => (
                  <PaymentCard key={method.name} method={method} />
                ))}
              </div>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden bg-color-primary p-8 sm:p-12 lg:col-span-7 xl:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-color-secondary opacity-25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-page-primary opacity-15 blur-3xl" />

              <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                <div className="order-2 flex justify-center md:order-1 md:col-span-5">
                  <div className="inline-block rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src={mobile}
                      alt="মোবাইল পোর্টাল"
                      width={260}
                      height={480}
                      className="h-auto max-h-[380px] w-auto object-contain xl:max-h-[440px]"
                    />
                  </div>
                </div>

                <div className="order-1 text-center md:order-2 md:col-span-7 md:text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-color-secondary">
                    প্যারেন্টস পোর্টাল
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-inverse sm:text-3xl xl:text-4xl">
                    প্যারেন্টস পোর্টালের মাধ্যমে যেকোনো ফি প্রদান করুন
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-relaxed text-inverse/80">
                    একটিমাত্র ডিজিটাল প্ল্যাটফর্ম থেকেই ফি প্রদান, শিক্ষার্থীর
                    তথ্য এবং প্রাতিষ্ঠানিক সকল সেবা সহজেই উপভোগ করুন।
                  </p>

                  <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row md:items-start">
                    <Link
                      href="/payment-procedure"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-color-secondary px-7 py-3.5 text-sm font-extrabold text-brand-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      পেমেন্ট পদ্ধতি দেখুন
                      <FaArrowRight />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-inverse transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                    >
                      সহায়তা নিন
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10 flex items-center justify-center border-t border-white/10 pt-6 md:justify-start">
                <Image
                  src={odhayanLogo}
                  alt="প্রতিষ্ঠানের লোগো"
                  width={150}
                  height={52}
                  className="h-auto w-36 rounded-xl bg-white px-3 py-2 shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MemberDetailsModal member={selectedMember} onClose={closeModal} />
    </main>
  );
}