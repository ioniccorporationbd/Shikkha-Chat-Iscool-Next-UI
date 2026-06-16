import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaMapLocationDot,
  FaMessage,
  FaPhone,
  FaSchoolFlag,
  FaUserGraduate,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | Shikkha Chat",
  description: "Contact page for Shikkha Chat",
};

type ContactInfo = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type OfficeHour = {
  title: string;
  time: string;
  note: string;
};

const contactInfo: ContactInfo[] = [
  {
    title: "Address",
    value: "Ramna, Dhaka-1000",
    description: "বিদ্যালয় অফিসে সরাসরি যোগাযোগের জন্য এই ঠিকানায় আসতে পারেন।",
    icon: <FaLocationDot />,
  },
  {
    title: "Phone",
    value: "02-58310500",
    description: "অফিস সময়ের মধ্যে ফোন করে প্রয়োজনীয় তথ্য জানতে পারবেন।",
    icon: <FaPhone />,
  },
  {
    title: "Email",
    value: "info@vnsc.edu.bd, vnsc_bd@yahoo.com",
    description: "ভর্তি, একাডেমিক বা প্রশাসনিক বিষয়ে ইমেইল পাঠাতে পারেন।",
    icon: <FaEnvelope />,
  },
];

const officeHours: OfficeHour[] = [
  {
    title: "Office Hours",
    time: "Saturday - Thursday",
    note: "সকাল ৯টা থেকে বিকাল ৪টা পর্যন্ত অফিস কার্যক্রম চলমান থাকে।",
  },
  {
    title: "Admission Help",
    time: "10:00 AM - 02:00 PM",
    note: "ভর্তি সংক্রান্ত তথ্যের জন্য নির্ধারিত সময়ে যোগাযোগ করুন।",
  },
  {
    title: "Academic Support",
    time: "Class Days",
    note: "শ্রেণি শিক্ষক ও অফিসের মাধ্যমে একাডেমিক সহায়তা পাওয়া যাবে।",
  },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Hero Section */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            Contact Us
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            যোগাযোগ
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের ঠিকানা, ফোন নম্বর, ইমেইল, অফিস সময় এবং যোগাযোগ ফরমের
            মাধ্যমে শিক্ষার্থী, অভিভাবক ও দর্শনার্থীরা সহজে আমাদের সঙ্গে
            যোগাযোগ করতে পারবেন।
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1260px] grid-cols-1 gap-6 md:grid-cols-3">
          {contactInfo.map((item) => (
            <article
              key={item.title}
              className="group rounded-[28px] border border-soft bg-page-primary p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-secondary text-3xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                {item.icon}
              </div>

              <h2 className="mt-5 text-xl font-black text-primary">
                {item.title}
              </h2>

              <p className="mt-3 break-words text-sm font-bold leading-7 text-brand-primary sm:text-base">
                {item.value}
              </p>

              <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Introduction + Office Hours */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1260px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                যোগাযোগের নির্দেশনা
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                প্রয়োজনীয় তথ্যের জন্য বিদ্যালয়ের সঙ্গে সরাসরি যোগাযোগ করুন
              </h2>

              <p className="mt-6 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                ভর্তি, একাডেমিক কার্যক্রম, পরীক্ষার তথ্য, ফি, নোটিশ অথবা
                প্রশাসনিক কোনো বিষয়ে জানতে চাইলে বিদ্যালয়ের অফিসে সরাসরি
                যোগাযোগ করতে পারেন। অভিভাবক ও শিক্ষার্থীদের সুবিধার জন্য ফোন,
                ইমেইল এবং যোগাযোগ ফরমের ব্যবস্থা রাখা হয়েছে।
              </p>

              <p className="mt-4 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                যোগাযোগ করার সময় আপনার নাম, মোবাইল নম্বর, শিক্ষার্থীর শ্রেণি
                এবং বিষয়টি পরিষ্কারভাবে উল্লেখ করলে দ্রুত সহায়তা পাওয়া সহজ হয়।
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[30px] border border-soft bg-page-secondary p-5">
                <div className="flex items-center gap-4 rounded-[24px] bg-color-primary p-6 text-inverse">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-white/10 text-3xl">
                    <FaClock />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-inverse opacity-80">
                      Office Time
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-inverse">
                      অফিস সময়সূচি
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {officeHours.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-soft bg-page-primary p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-black text-primary">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm font-black text-brand-primary">
                            {item.time}
                          </p>
                        </div>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                          <FaClock />
                        </span>
                      </div>

                      <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1260px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm transition-all duration-500 hover:shadow-xl sm:p-8 lg:p-12 xl:p-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              Message Form
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              আমাদের কাছে বার্তা পাঠান
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              আপনার প্রশ্ন, মতামত বা প্রয়োজনীয় তথ্য নিচের ফরমে লিখে পাঠাতে
              পারেন। অফিস থেকে প্রয়োজন অনুযায়ী যোগাযোগ করা হবে।
            </p>
          </div>

          <form className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-soft bg-page-secondary p-4 text-sm font-semibold text-primary outline-none transition-all duration-300 placeholder:text-gray focus:bg-page-primary focus:ring-2 focus:ring-[color:var(--color-primary)]/30"
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No."
                className="w-full rounded-2xl border border-soft bg-page-secondary p-4 text-sm font-semibold text-primary outline-none transition-all duration-300 placeholder:text-gray focus:bg-page-primary focus:ring-2 focus:ring-[color:var(--color-primary)]/30"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded-2xl border border-soft bg-page-secondary p-4 text-sm font-semibold text-primary outline-none transition-all duration-300 placeholder:text-gray focus:bg-page-primary focus:ring-2 focus:ring-[color:var(--color-primary)]/30"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-soft bg-page-secondary p-4 text-sm font-semibold text-primary outline-none transition-all duration-300 placeholder:text-gray focus:bg-page-primary focus:ring-2 focus:ring-[color:var(--color-primary)]/30"
              />
            </div>

            <textarea
              rows={6}
              placeholder="Message"
              name="message"
              className="w-full resize-none rounded-2xl border border-soft bg-page-secondary p-4 text-sm font-semibold text-primary outline-none transition-all duration-300 placeholder:text-gray focus:bg-page-primary focus:ring-2 focus:ring-[color:var(--color-primary)]/30"
            />

            <button
              type="submit"
              className="mx-auto inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-md transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl active:scale-95 lg:w-48"
            >
              Submit
              <FaMessage />
            </button>
          </form>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1260px] overflow-hidden rounded-[34px] border border-soft bg-page-primary p-4 shadow-sm transition-all duration-500 hover:shadow-xl sm:p-5">
          <div className="mb-5 flex flex-col gap-4 rounded-[26px] bg-color-primary p-6 text-inverse lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-white/10 text-2xl">
                <FaMapLocationDot />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-inverse opacity-80">
                  School Location
                </p>
                <h2 className="mt-1 text-2xl font-black text-inverse">
                  Ramna, Dhaka-1000
                </h2>
              </div>
            </div>

            <p className="max-w-xl text-sm font-semibold leading-7 text-inverse opacity-90">
              বিদ্যালয়ে আসার আগে অফিস সময় নিশ্চিত করে যোগাযোগ করলে আপনার সময়
              সাশ্রয় হবে।
            </p>
          </div>

          <iframe
            title="Viqarunnisa Noon School and College Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.589438797351!2d90.407051!3d23.742124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57c2368d%3A0x4df20dee9b73140e!2sViqarunnisa%20Noon%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1731414574228!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full rounded-[26px] sm:h-[400px] lg:h-[450px]"
          />
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1260px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaSchoolFlag className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  যোগাযোগ বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                শিক্ষার্থী ও অভিভাবকদের সহযোগিতায় আমরা সবসময় প্রস্তুত
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের যেকোনো তথ্য, পরামর্শ, ভর্তি সহায়তা বা একাডেমিক
                যোগাযোগের জন্য আমাদের সঙ্গে যোগাযোগ করুন। আপনার বার্তা আমাদের
                কাছে গুরুত্বপূর্ণ।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaUserGraduate />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  Contact Support
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  অফিস সময়ের মধ্যে ফোন, ইমেইল বা ফরমের মাধ্যমে যোগাযোগ করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;