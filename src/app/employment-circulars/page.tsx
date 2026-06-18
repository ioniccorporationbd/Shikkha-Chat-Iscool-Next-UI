import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBriefcase,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaIdCard,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegClock,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTriangleExclamation,
  FaUserTie,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type PositionItem = {
  title: string;
  department: string;
  vacancies: string;
  description: string;
  icon: ReactNode;
};

type RequirementItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ProcessItem = {
  title: string;
  description: string;
};

type CircularItem = {
  id: number;
  position: string;
  department: string;
  vacancies: string;
  qualification: string;
  deadline: string;
  status: string;
  fileUrl: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "চলমান নিয়োগ",
    value: "৪টি",
    description: "বর্তমানে শিক্ষক ও প্রশাসনিক পদে নিয়োগ বিজ্ঞপ্তি প্রকাশিত আছে।",
    icon: <FaBriefcase />,
  },
  {
    title: "আবেদন পদ্ধতি",
    value: "অফলাইন",
    description: "নির্ধারিত আবেদন ফরম পূরণ করে বিদ্যালয় অফিসে জমা দিতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "শেষ তারিখ",
    value: "৩০ জুন",
    description: "নির্ধারিত সময়ের পরে কোনো আবেদন গ্রহণ করা হবে না।",
    icon: <FaRegClock />,
  },
  {
    title: "নির্বাচন প্রক্রিয়া",
    value: "পরীক্ষা",
    description: "লিখিত পরীক্ষা, ডেমো ক্লাস এবং সাক্ষাৎকারের মাধ্যমে নির্বাচন।",
    icon: <FaCalendarCheck />,
  },
];

const positions: PositionItem[] = [
  {
    title: "সহকারী শিক্ষক",
    department: "বাংলা / ইংরেজি / গণিত",
    vacancies: "৩টি",
    description:
      "বিষয়ভিত্তিক পাঠদান, পাঠ পরিকল্পনা তৈরি, শিক্ষার্থীর অগ্রগতি পর্যবেক্ষণ এবং পরীক্ষার প্রস্তুতিতে সহায়তা করতে হবে।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "অফিস সহকারী",
    department: "প্রশাসন",
    vacancies: "১টি",
    description:
      "অফিস ফাইল, শিক্ষার্থী রেকর্ড, ভর্তি তথ্য, ফি রেকর্ড এবং অভিভাবক যোগাযোগ সংক্রান্ত কাজ পরিচালনা করতে হবে।",
    icon: <FaUserTie />,
  },
  {
    title: "ল্যাব সহকারী",
    department: "বিজ্ঞান / আইসিটি",
    vacancies: "১টি",
    description:
      "বিজ্ঞান ও কম্পিউটার ল্যাব ব্যবস্থাপনা, ব্যবহারিক ক্লাসে সহায়তা এবং ল্যাব উপকরণ সংরক্ষণ করতে হবে।",
    icon: <FaGraduationCap />,
  },
  {
    title: "গ্রন্থাগারিক",
    department: "লাইব্রেরি",
    vacancies: "১টি",
    description:
      "লাইব্রেরির বই, রেজিস্টার, পাঠক সেবা, বই ইস্যু-রিটার্ন এবং শিক্ষার্থীদের পাঠাভ্যাস উন্নয়নে কাজ করতে হবে।",
    icon: <FaFileLines />,
  },
];

const requirements: RequirementItem[] = [
  {
    title: "শিক্ষাগত যোগ্যতা",
    description:
      "পদ অনুযায়ী স্বীকৃত প্রতিষ্ঠান থেকে প্রয়োজনীয় ডিগ্রি, বিষয়ভিত্তিক দক্ষতা এবং একাডেমিক ফলাফল থাকতে হবে।",
    icon: <FaGraduationCap />,
  },
  {
    title: "অভিজ্ঞতা",
    description:
      "শিক্ষকতা, অফিস ব্যবস্থাপনা, ল্যাব পরিচালনা অথবা লাইব্রেরি ব্যবস্থাপনায় পূর্ব অভিজ্ঞতা থাকলে অগ্রাধিকার দেওয়া হবে।",
    icon: <FaBriefcase />,
  },
  {
    title: "প্রয়োজনীয় দক্ষতা",
    description:
      "যোগাযোগ দক্ষতা, দায়িত্ববোধ, সময়ানুবর্তিতা, দলগত কাজ এবং শিক্ষার্থীবান্ধব মনোভাব থাকা আবশ্যক।",
    icon: <FaStar />,
  },
  {
    title: "ডকুমেন্ট প্রস্তুতি",
    description:
      "জীবনবৃত্তান্ত, শিক্ষাগত সনদ, জাতীয় পরিচয়পত্র, ছবি এবং অভিজ্ঞতার সনদ আবেদনপত্রের সঙ্গে জমা দিতে হবে।",
    icon: <FaIdCard />,
  },
];

const processItems: ProcessItem[] = [
  {
    title: "বিজ্ঞপ্তি পড়ুন",
    description:
      "প্রথমে নিয়োগ বিজ্ঞপ্তির পদ, যোগ্যতা, সময়সীমা ও প্রয়োজনীয় ডকুমেন্ট ভালোভাবে পড়ুন।",
  },
  {
    title: "আবেদন ফরম সংগ্রহ",
    description:
      "বিদ্যালয় অফিস অথবা নির্ধারিত মাধ্যম থেকে আবেদন ফরম সংগ্রহ করুন।",
  },
  {
    title: "ডকুমেন্ট সংযুক্ত করুন",
    description:
      "জীবনবৃত্তান্ত, সনদ, পরিচয়পত্র, ছবি এবং অভিজ্ঞতার কাগজপত্র ফরমের সঙ্গে সংযুক্ত করুন।",
  },
  {
    title: "নির্ধারিত সময়ে জমা দিন",
    description:
      "শেষ তারিখের আগে বিদ্যালয় অফিসে আবেদনপত্র জমা দিয়ে রশিদ বা গ্রহণ কপি সংরক্ষণ করুন।",
  },
  {
    title: "পরীক্ষা ও সাক্ষাৎকার",
    description:
      "নির্ধারিত তারিখে লিখিত পরীক্ষা, ডেমো ক্লাস বা সাক্ষাৎকারে অংশগ্রহণ করুন।",
  },
];

const circularItems: CircularItem[] = [
  {
    id: 1,
    position: "সহকারী শিক্ষক",
    department: "বাংলা",
    vacancies: "১টি",
    qualification: "সংশ্লিষ্ট বিষয়ে স্নাতক / স্নাতকোত্তর",
    deadline: "৩০ জুন ২০২৬",
    status: "চলমান",
    fileUrl: "#",
  },
  {
    id: 2,
    position: "সহকারী শিক্ষক",
    department: "ইংরেজি",
    vacancies: "১টি",
    qualification: "ইংরেজি বিষয়ে স্নাতক / স্নাতকোত্তর",
    deadline: "৩০ জুন ২০২৬",
    status: "চলমান",
    fileUrl: "#",
  },
  {
    id: 3,
    position: "অফিস সহকারী",
    department: "প্রশাসন",
    vacancies: "১টি",
    qualification: "এইচএসসি / স্নাতক, কম্পিউটার জ্ঞানসহ",
    deadline: "২৫ জুন ২০২৬",
    status: "চলমান",
    fileUrl: "#",
  },
  {
    id: 4,
    position: "ল্যাব সহকারী",
    department: "বিজ্ঞান / আইসিটি",
    vacancies: "১টি",
    qualification: "বিজ্ঞান / আইসিটি বিষয়ে দক্ষতা",
    deadline: "২৫ জুন ২০২৬",
    status: "চলমান",
    fileUrl: "#",
  },
];

const documentItems: RequirementItem[] = [
  {
    title: "জীবনবৃত্তান্ত",
    description:
      "ব্যক্তিগত তথ্য, শিক্ষাগত যোগ্যতা, অভিজ্ঞতা ও যোগাযোগ নম্বরসহ পূর্ণাঙ্গ সিভি জমা দিতে হবে।",
    icon: <FaFileLines />,
  },
  {
    title: "শিক্ষাগত সনদ",
    description:
      "প্রযোজ্য সকল একাডেমিক সনদ ও নম্বরপত্রের সত্যায়িত কপি সংযুক্ত করতে হবে।",
    icon: <FaGraduationCap />,
  },
  {
    title: "জাতীয় পরিচয়পত্র",
    description:
      "প্রার্থীর জাতীয় পরিচয়পত্র অথবা গ্রহণযোগ্য পরিচয়পত্রের কপি জমা দিতে হবে।",
    icon: <FaIdCard />,
  },
  {
    title: "ছবি ও অভিজ্ঞতা সনদ",
    description:
      "সাম্প্রতিক পাসপোর্ট সাইজ ছবি এবং পূর্ব অভিজ্ঞতার সনদ থাকলে সংযুক্ত করতে হবে।",
    icon: <FaClipboardCheck />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "আবেদনকারীদের নির্দেশনা",
    icon: <FaUserTie />,
    points: [
      "আবেদন করার আগে পদভিত্তিক যোগ্যতা, দায়িত্ব এবং শেষ তারিখ ভালোভাবে যাচাই করুন।",
      "আবেদন ফরমে সকল তথ্য পরিষ্কার, সঠিক এবং পূর্ণাঙ্গভাবে লিখুন।",
      "অসম্পূর্ণ আবেদন, ভুল তথ্য অথবা প্রয়োজনীয় ডকুমেন্ট ছাড়া আবেদন গ্রহণযোগ্য নাও হতে পারে।",
      "পরীক্ষা বা সাক্ষাৎকারের দিন মূল সনদ, পরিচয়পত্র এবং প্রয়োজনীয় কাগজপত্র সঙ্গে রাখুন।",
    ],
  },
  {
    title: "নির্বাচন নীতিমালা",
    icon: <FaShieldHalved />,
    points: [
      "যোগ্যতা, অভিজ্ঞতা, দক্ষতা এবং সাক্ষাৎকারের ভিত্তিতে প্রার্থী নির্বাচন করা হবে।",
      "বিদ্যালয় কর্তৃপক্ষ প্রয়োজন অনুযায়ী পদ সংখ্যা পরিবর্তন, স্থগিত বা বাতিল করার অধিকার সংরক্ষণ করে।",
      "প্রার্থীর তথ্য যাচাইয়ের সময় ভুল বা বিভ্রান্তিকর তথ্য পাওয়া গেলে আবেদন বাতিল হতে পারে।",
      "চূড়ান্ত নির্বাচিত প্রার্থীদের বিদ্যালয়ের নিয়মনীতি ও দায়িত্ব যথাযথভাবে অনুসরণ করতে হবে।",
    ],
  },
];

const EmploymentCircularsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* উপরের অংশ */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            নিয়োগ বিজ্ঞপ্তি
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            নিয়োগ বিজ্ঞপ্তি
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের শিক্ষক, কর্মকর্তা ও কর্মচারী নিয়োগ সংক্রান্ত বিজ্ঞপ্তি,
            আবেদন নির্দেশনা, যোগ্যতা, সময়সীমা এবং প্রয়োজনীয় তথ্য এখানে প্রকাশ
            করা হয়।
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </section>

      {/* সারসংক্ষেপ */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {overviewItems.map((item) => (
            <article
              key={item.title}
              className="group rounded-[28px] border border-soft bg-page-primary p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                {item.icon}
              </div>

              <p className="mt-5 text-3xl font-black text-primary">
                {item.value}
              </p>

              <h3 className="mt-2 text-lg font-black text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ভূমিকা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                নিয়োগ প্রক্রিয়ার পরিচিতি
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl lg:text-5xl">
                যোগ্য, দায়িত্বশীল ও শিক্ষাবান্ধব জনবল নিয়োগে স্বচ্ছ প্রক্রিয়া
              </h2>

              <p className="mt-6 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                বিদ্যালয়ের শিক্ষার মান উন্নয়ন, প্রশাসনিক কার্যক্রম সুশৃঙ্খল
                রাখা এবং শিক্ষার্থীদের নিরাপদ ও সহায়ক পরিবেশ নিশ্চিত করার জন্য
                দক্ষ জনবল অত্যন্ত গুরুত্বপূর্ণ। নিয়োগ বিজ্ঞপ্তির মাধ্যমে
                পদভিত্তিক যোগ্যতা, আবেদন পদ্ধতি, সময়সীমা এবং নির্বাচনী
                প্রক্রিয়া স্পষ্টভাবে জানানো হয়।
              </p>

              <p className="mt-4 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                প্রার্থীদের একাডেমিক যোগ্যতা, অভিজ্ঞতা, যোগাযোগ দক্ষতা,
                দায়িত্ববোধ এবং শিক্ষার্থীবান্ধব মনোভাব বিবেচনা করে নির্বাচন
                করা হয়। বিদ্যালয় সবসময় স্বচ্ছ, নিয়মতান্ত্রিক এবং ন্যায্য
                প্রক্রিয়ার মাধ্যমে যোগ্য প্রার্থী নির্বাচন করতে প্রতিশ্রুতিবদ্ধ।
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-5">
                <Image
                  src="/assets/3.jpg"
                  alt="নিয়োগ বিজ্ঞপ্তি"
                  width={900}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[360px] w-full rounded-[24px] object-cover"
                />

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">
                      ন্যায্য নিয়োগ
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      যোগ্যতা ও দক্ষতার ভিত্তিতে স্বচ্ছ নির্বাচন।
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">
                      বিদ্যালয় টিম
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      দায়িত্বশীল শিক্ষক ও কর্মী নিয়ে শক্তিশালী টিম।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* বিশেষ নোটিশ */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaTriangleExclamation className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  গুরুত্বপূর্ণ নোটিশ
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                আবেদন করার আগে বিজ্ঞপ্তির সব শর্ত ভালোভাবে পড়ে নিন
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                নিয়োগ প্রক্রিয়ায় অংশগ্রহণের জন্য প্রার্থীদের নির্ধারিত যোগ্যতা,
                প্রয়োজনীয় ডকুমেন্ট, আবেদন ফরম, জমাদানের শেষ তারিখ এবং পরীক্ষা
                বা সাক্ষাৎকারের নির্দেশনা ভালোভাবে অনুসরণ করতে হবে। অসম্পূর্ণ
                আবেদন অথবা ভুল তথ্যের কারণে আবেদন বাতিল হতে পারে।
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "সঠিক তথ্য",
                  "পূর্ণাঙ্গ ডকুমেন্ট",
                  "সময়সীমা অনুসরণ",
                  "পরীক্ষা / সাক্ষাৎকার",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-inverse"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaBriefcase />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  আমাদের টিমে যোগ দিন
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  যোগ্য, দায়িত্বশীল এবং শিক্ষার্থীবান্ধব প্রার্থীদের জন্য
                  বিদ্যালয়ের পক্ষ থেকে আহ্বান।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* বর্তমান নিয়োগ বিজ্ঞপ্তি টেবিল */}
      <section
        id="employment-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বর্তমান বিজ্ঞপ্তি
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              বর্তমান নিয়োগ বিজ্ঞপ্তি
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              বিদ্যালয়ের চলমান নিয়োগ বিজ্ঞপ্তির গুরুত্বপূর্ণ তথ্য নিচে দেওয়া
              হলো।
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-soft bg-page-primary shadow-sm">
            <div className="hidden lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-soft bg-page-secondary">
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পদবি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিভাগ / বিষয়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পদের সংখ্যা
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      যোগ্যতা
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শেষ তারিখ
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ফাইল
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {circularItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                            <FaBriefcase />
                          </span>
                          <div>
                            <p className="text-sm font-black text-primary">
                              {item.position}
                            </p>
                            <p className="mt-1 text-xs font-bold text-brand-primary">
                              {item.status}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.department}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-color-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.vacancies}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.qualification}
                      </td>

                      <td className="px-5 py-5 text-sm font-black text-primary">
                        {item.deadline}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={item.fileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:opacity-90"
                        >
                          ডাউনলোড
                          <FaCloudArrowDown />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {circularItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.department}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-primary">
                        {item.position}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                      <FaBriefcase />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">পদ:</span>{" "}
                      {item.vacancies}
                    </p>
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">যোগ্যতা:</span>{" "}
                      {item.qualification}
                    </p>
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">শেষ তারিখ:</span>{" "}
                      {item.deadline}
                    </p>
                  </div>

                  <Link
                    href={item.fileUrl}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-4 py-3 text-sm font-black text-inverse transition-all duration-500 hover:opacity-90"
                  >
                    ডাউনলোড
                    <FaCloudArrowDown />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* পদসমূহ */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              পদসমূহ
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              উপলব্ধ পদসমূহ
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              বিদ্যালয়ের একাডেমিক ও প্রশাসনিক কার্যক্রম পরিচালনার জন্য বিভিন্ন
              পদে যোগ্য প্রার্থী আহ্বান করা হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {positions.map((position) => (
              <article
                key={position.title}
                className="group rounded-[26px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {position.icon}
                </div>

                <p className="mt-5 text-sm font-black text-brand-primary">
                  {position.department} · {position.vacancies}
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                  {position.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {position.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* যোগ্যতা ও প্রয়োজনীয়তা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              যোগ্যতা ও প্রয়োজনীয়তা
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              যোগ্যতা ও প্রয়োজনীয়তা
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-soft bg-page-primary p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ছবিসহ আবেদন প্রক্রিয়া */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-4">
              <Image
                src="/assets/4.jpg"
                alt="আবেদন প্রক্রিয়া"
                width={900}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[360px] w-full rounded-[24px] object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                আবেদন প্রক্রিয়া
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                ধাপে ধাপে আবেদন সম্পন্ন করার নির্দেশনা
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                নিয়োগ আবেদন সম্পন্ন করার জন্য প্রার্থীদের নির্ধারিত ফরম পূরণ,
                প্রয়োজনীয় ডকুমেন্ট সংযুক্তকরণ এবং সময়মতো আবেদন জমা দেওয়ার
                বিষয়টি গুরুত্বসহকারে অনুসরণ করতে হবে। প্রতিটি ধাপ সঠিকভাবে
                সম্পন্ন করলে যাচাই ও নির্বাচনী প্রক্রিয়া সহজ হয়।
              </p>

              <div className="mt-6 space-y-3">
                {processItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-[18px] border border-soft bg-page-secondary p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-color-primary text-xs font-black text-inverse">
                      {["১", "২", "৩", "৪", "৫"][index]}
                    </span>

                    <div>
                      <h3 className="text-sm font-black text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold leading-7 text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* প্রয়োজনীয় ডকুমেন্ট */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              প্রয়োজনীয় ডকুমেন্ট
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              প্রয়োজনীয় ডকুমেন্টসমূহ
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {documentItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* নির্দেশনা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 lg:grid-cols-2">
          {guidelineSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {section.icon}
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                    নির্দেশনা
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-primary">
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {section.points.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-[18px] border border-soft bg-page-secondary p-4"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-color-primary text-[10px] text-inverse">
                      <FaCheck />
                    </span>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* সমাপনী */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaSchoolFlag className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  সমাপনী বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                যোগ্য প্রার্থী, উন্নত শিক্ষা পরিবেশ
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের উন্নত শিক্ষা কার্যক্রম পরিচালনার জন্য দক্ষ,
                দায়িত্বশীল এবং শিক্ষার্থীবান্ধব শিক্ষক ও কর্মী প্রয়োজন।
                যোগ্য প্রার্থীদের আবেদন করার জন্য বিদ্যালয়ের পক্ষ থেকে
                আন্তরিক আহ্বান জানানো হচ্ছে।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaPeopleGroup />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  এখনই আবেদন করুন
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  বিদ্যালয়ের নিয়ম অনুসরণ করে নির্ধারিত সময়ের মধ্যে আবেদন জমা
                  দিন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmploymentCircularsPage;