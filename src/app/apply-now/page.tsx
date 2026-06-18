import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaPeopleGroup,
  FaPenToSquare,
  FaRegClock,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTriangleExclamation,
  FaUserGraduate,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type AdmissionStep = {
  title: string;
  description: string;
};

type RequiredDocument = {
  title: string;
  description: string;
  icon: ReactNode;
};

type FormField = {
  title: string;
  description: string;
};

type RuleItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ApplicationItem = {
  id: number;
  step: string;
  task: string;
  requiredInfo: string;
  note: string;
  fileUrl: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "অনলাইন আবেদন",
    value: "সহজ",
    icon: <FaPenToSquare />,
  },
  {
    title: "ভর্তি ফরম",
    value: "ডাউনলোড",
    icon: <FaFileLines />,
  },
  {
    title: "প্রয়োজনীয় কাগজপত্র",
    value: "৫+",
    icon: <FaClipboardCheck />,
  },
  {
    title: "আবেদন সময়সীমা",
    value: "নির্ধারিত",
    icon: <FaRegClock />,
  },
];

const admissionSteps: AdmissionStep[] = [
  {
    title: "আবেদন ফরম পূরণ",
    description:
      "শিক্ষার্থীর নাম, জন্ম তারিখ, শ্রেণি, পূর্ববর্তী বিদ্যালয় ও অভিভাবকের তথ্য দিয়ে আবেদন ফরম পূরণ করুন।",
  },
  {
    title: "শিক্ষার্থীর তথ্য প্রদান",
    description:
      "সঠিক নাম, জন্ম নিবন্ধন নম্বর, শ্রেণি, রোল বা পূর্ববর্তী শিক্ষাগত তথ্য যাচাই করে লিখুন।",
  },
  {
    title: "প্রয়োজনীয় কাগজপত্র জমা",
    description:
      "জন্ম নিবন্ধন, ছবি, ফলাফল, অভিভাবকের জাতীয় পরিচয়পত্রসহ প্রয়োজনীয় ডকুমেন্ট প্রস্তুত করুন।",
  },
  {
    title: "আবেদন ফি পরিশোধ",
    description:
      "বিদ্যালয় নির্ধারিত নিয়ম অনুযায়ী আবেদন ফি পরিশোধ করুন এবং রশিদ বা ট্রানজেকশন তথ্য সংরক্ষণ করুন।",
  },
  {
    title: "ভর্তি নিশ্চিতকরণ",
    description:
      "আবেদন যাচাই, ভর্তি পরীক্ষা বা সাক্ষাৎকার শেষে বিদ্যালয়ের নির্দেশনা অনুযায়ী ভর্তি নিশ্চিত করুন।",
  },
];

const requiredDocuments: RequiredDocument[] = [
  {
    title: "জন্ম নিবন্ধন সনদ",
    description:
      "শিক্ষার্থীর বয়স ও পরিচয় যাচাইয়ের জন্য জন্ম নিবন্ধন সনদের কপি জমা দিতে হবে।",
    icon: <FaFileLines />,
  },
  {
    title: "পূর্ববর্তী শ্রেণির ফলাফল",
    description:
      "পূর্ববর্তী বিদ্যালয় বা শ্রেণির ফলাফল/প্রগ্রেস রিপোর্ট আবেদনপত্রের সঙ্গে যুক্ত করতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "পাসপোর্ট সাইজ ছবি",
    description:
      "সাম্প্রতিক পাসপোর্ট সাইজ ছবি আবেদন ফরম ও ভর্তি রেকর্ডের জন্য প্রয়োজন।",
    icon: <FaUserGraduate />,
  },
  {
    title: "অভিভাবকের জাতীয় পরিচয়পত্র",
    description:
      "অভিভাবকের পরিচয় যাচাই ও যোগাযোগ রেকর্ডের জন্য জাতীয় পরিচয়পত্রের কপি প্রয়োজন।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "ট্রান্সফার সার্টিফিকেট",
    description:
      "অন্য বিদ্যালয় থেকে আগত শিক্ষার্থীর ক্ষেত্রে ট্রান্সফার সার্টিফিকেট প্রযোজ্য হতে পারে।",
    icon: <FaSchoolFlag />,
  },
];

const formFields: FormField[] = [
  {
    title: "শিক্ষার্থীর নাম",
    description: "জন্ম নিবন্ধন বা পূর্ববর্তী রেকর্ড অনুযায়ী পূর্ণ নাম লিখুন।",
  },
  {
    title: "জন্ম তারিখ",
    description: "জন্ম নিবন্ধন সনদ অনুযায়ী সঠিক জন্ম তারিখ উল্লেখ করুন।",
  },
  {
    title: "শ্রেণি",
    description: "যে শ্রেণিতে ভর্তি হতে চান তা সঠিকভাবে নির্বাচন করুন।",
  },
  {
    title: "পূর্ববর্তী বিদ্যালয়",
    description: "আগের বিদ্যালয়ের নাম, শ্রেণি ও শিক্ষাবর্ষ উল্লেখ করুন।",
  },
  {
    title: "অভিভাবকের নাম",
    description: "পিতা/মাতা/অভিভাবকের পূর্ণ নাম লিখুন।",
  },
  {
    title: "মোবাইল নম্বর",
    description: "যোগাযোগের জন্য সচল মোবাইল নম্বর দিন।",
  },
  {
    title: "বর্তমান ঠিকানা",
    description: "শিক্ষার্থীর বর্তমান বসবাসের ঠিকানা স্পষ্টভাবে লিখুন।",
  },
  {
    title: "রক্তের গ্রুপ",
    description: "জরুরি স্বাস্থ্য সহায়তার জন্য রক্তের গ্রুপ থাকলে উল্লেখ করুন।",
  },
];

const admissionRules: RuleItem[] = [
  {
    title: "সঠিক তথ্য প্রদান",
    description:
      "আবেদন ফরমে শিক্ষার্থী ও অভিভাবকের সকল তথ্য সঠিকভাবে পূরণ করতে হবে।",
    icon: <FaShieldHalved />,
  },
  {
    title: "অসম্পূর্ণ আবেদন গ্রহণযোগ্য নয়",
    description:
      "প্রয়োজনীয় তথ্য বা কাগজপত্র অসম্পূর্ণ থাকলে আবেদন যাচাই প্রক্রিয়া বিলম্বিত হতে পারে।",
    icon: <FaTriangleExclamation />,
  },
  {
    title: "সময়মতো আবেদন সম্পন্ন",
    description:
      "নির্ধারিত সময়সীমার মধ্যে আবেদন ফরম, ডকুমেন্ট ও ফি জমা দিতে হবে।",
    icon: <FaRegClock />,
  },
  {
    title: "ভুল তথ্য বাতিলযোগ্য",
    description:
      "ভুল, অসম্পূর্ণ বা বিভ্রান্তিকর তথ্য পাওয়া গেলে আবেদন বাতিল হতে পারে।",
    icon: <FaClipboardCheck />,
  },
];

const applicationItems: ApplicationItem[] = [
  {
    id: 1,
    step: "ধাপ ১",
    task: "আবেদন ফরম সংগ্রহ",
    requiredInfo: "শিক্ষার্থীর শ্রেণি ও অভিভাবকের যোগাযোগ নম্বর",
    note: "বিদ্যালয় অফিস বা অনলাইন থেকে ফরম সংগ্রহ করুন।",
    fileUrl: "#",
  },
  {
    id: 2,
    step: "ধাপ ২",
    task: "ফরম পূরণ",
    requiredInfo: "নাম, জন্ম তারিখ, শ্রেণি, ঠিকানা ও অভিভাবকের তথ্য",
    note: "সকল তথ্য পরিষ্কার ও সঠিকভাবে পূরণ করুন।",
    fileUrl: "#",
  },
  {
    id: 3,
    step: "ধাপ ৩",
    task: "ডকুমেন্ট জমা",
    requiredInfo: "জন্ম নিবন্ধন, ছবি, ফলাফল ও অভিভাবকের এনআইডি",
    note: "প্রয়োজনীয় কাগজপত্র ফরমের সঙ্গে সংযুক্ত করুন।",
    fileUrl: "#",
  },
  {
    id: 4,
    step: "ধাপ ৪",
    task: "আবেদন ফি পরিশোধ",
    requiredInfo: "পেমেন্ট রশিদ বা ট্রানজেকশন আইডি",
    note: "ফি পরিশোধের রশিদ সংরক্ষণ করুন।",
    fileUrl: "#",
  },
  {
    id: 5,
    step: "ধাপ ৫",
    task: "ভর্তি পরীক্ষা / সাক্ষাৎকার",
    requiredInfo: "প্রবেশপত্র ও প্রয়োজনীয় ডকুমেন্ট",
    note: "বিদ্যালয়ের ঘোষিত তারিখে উপস্থিত থাকতে হবে।",
    fileUrl: "#",
  },
  {
    id: 6,
    step: "ধাপ ৬",
    task: "ভর্তি নিশ্চিতকরণ",
    requiredInfo: "চূড়ান্ত ফি, রশিদ ও ভর্তি অনুমোদন",
    note: "বিদ্যালয়ের নির্দেশনা অনুযায়ী ভর্তি সম্পন্ন করুন।",
    fileUrl: "#",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "আবেদনের জন্য প্রয়োজনীয় তথ্য ও কাগজপত্র আগে থেকে প্রস্তুত রাখতে হবে।",
      "অভিভাবকের সহায়তায় আবেদন ফরম পূরণ করতে হবে।",
      "ভর্তি পরীক্ষা বা সাক্ষাৎকার থাকলে নিয়মিত প্রস্তুতি নিতে হবে।",
      "বিদ্যালয়ের নিয়মনীতি, সময়সূচি ও নোটিশ ভালোভাবে অনুসরণ করতে হবে।",
      "আবেদন সম্পন্ন হওয়ার পর রশিদ, প্রবেশপত্র বা প্রয়োজনীয় তথ্য সংরক্ষণ করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "আবেদন ফরম পূরণের আগে সন্তানের সকল তথ্য ও কাগজপত্র যাচাই করুন।",
      "সঠিক মোবাইল নম্বর ও ঠিকানা ব্যবহার করুন, যাতে বিদ্যালয় সহজে যোগাযোগ করতে পারে।",
      "আবেদন ফি পরিশোধের রশিদ বা ট্রানজেকশন আইডি সংরক্ষণ করুন।",
      "বিদ্যালয়ের ভর্তি নোটিশ, সময়সীমা ও নির্দেশনা নিয়মিত অনুসরণ করুন।",
      "ভুল তথ্য বা অসম্পূর্ণ ডকুমেন্ট এড়াতে আবেদন জমা দেওয়ার আগে সবকিছু পুনরায় যাচাই করুন।",
    ],
  },
];

const ApplyNowPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* উপরের অংশ */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            ভর্তি আবেদন
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            এখনই আবেদন করুন
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            নতুন শিক্ষাবর্ষে ভর্তি আবেদন, প্রয়োজনীয় তথ্য, আবেদন প্রক্রিয়া ও
            নির্দেশনা এক জায়গায় দেখার জন্য এই পেজ তৈরি করা হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </section>

      {/* আবেদন সারসংক্ষেপ */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overviewItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                {item.icon}
              </div>

              <h3 className="mt-4 text-2xl font-black text-primary">
                {item.value}
              </h3>

              <p className="mt-1 text-sm font-semibold text-secondary">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ভূমিকা */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  ভূমিকা
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                  সহজ ও সুশৃঙ্খল ভর্তি আবেদন প্রক্রিয়া
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ে ভর্তি আবেদন প্রক্রিয়া শিক্ষার্থী ও অভিভাবকদের জন্য
                  সহজ, স্বচ্ছ ও তথ্যভিত্তিকভাবে সাজানো হয়েছে। সঠিক তথ্য,
                  প্রয়োজনীয় কাগজপত্র এবং নির্ধারিত সময়ের মধ্যে আবেদন সম্পন্ন
                  করলে ভর্তি যাচাই ও নিশ্চিতকরণ প্রক্রিয়া দ্রুত সম্পন্ন হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* বিশেষ আবেদন কার্ড */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    ভর্তি চলছে
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  নতুন শিক্ষাবর্ষে ভর্তি আবেদন চলছে
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  আগ্রহী শিক্ষার্থী ও অভিভাবকদের নির্ধারিত সময়ের মধ্যে আবেদন
                  ফরম পূরণ, প্রয়োজনীয় ডকুমেন্ট জমা এবং আবেদন ফি পরিশোধ করে
                  ভর্তি প্রক্রিয়া সম্পন্ন করার জন্য অনুরোধ করা হচ্ছে।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    আবেদন: অনলাইন / অফিস
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    শ্রেণি: প্লে - দশম
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    সময়সীমা: নোটিশ অনুযায়ী
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaGraduationCap />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    আজই আবেদন করুন
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    সঠিক তথ্য দিয়ে আবেদন করুন এবং ভর্তি প্রক্রিয়া সম্পন্ন করুন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ভর্তি ধাপসমূহ */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                আবেদন প্রক্রিয়া
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                ভর্তির ধাপসমূহ
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
              {admissionSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-color-secondary text-sm font-black text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {["০১", "০২", "০৩", "০৪", "০৫"][index]}
                  </div>

                  <h3 className="mt-5 text-lg font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* প্রয়োজনীয় কাগজপত্র */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              প্রয়োজনীয় কাগজপত্র
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              প্রয়োজনীয় কাগজপত্র
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {requiredDocuments.map((document) => (
              <article
                key={document.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {document.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {document.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {document.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* আবেদন ফরমের তথ্য */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                আবেদন ফরমের তথ্য
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                আবেদন ফরমের প্রয়োজনীয় তথ্য
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {formFields.map((field) => (
                <div
                  key={field.title}
                  className="group rounded-[22px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color-secondary text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    <FaCheck />
                  </div>

                  <h3 className="mt-4 text-lg font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                    {field.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {field.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ভর্তি নিয়ম */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ভর্তি নিয়ম
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              ভর্তি নিয়মাবলি
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {admissionRules.map((rule) => (
              <article
                key={rule.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {rule.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary">
                  {rule.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {rule.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* আবেদন ধাপের তালিকা */}
      <section
        id="application-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              আবেদন ধাপের তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              আবেদন ধাপের বিস্তারিত তালিকা
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-soft bg-page-primary shadow-sm">
            <div className="hidden lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-soft bg-page-secondary">
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      ধাপ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      কাজ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      প্রয়োজনীয় তথ্য
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      মন্তব্য
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ডাউনলোড
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {applicationItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.step}
                        </span>
                      </td>

                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaPenToSquare />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {item.task}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold leading-7 text-secondary">
                        {item.requiredInfo}
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.note}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={item.fileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
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
              {applicationItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.step}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {item.task}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaPenToSquare />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">
                        প্রয়োজনীয় তথ্য:
                      </span>{" "}
                      {item.requiredInfo}
                    </p>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">মন্তব্য:</span>{" "}
                      {item.note}
                    </p>
                  </div>

                  <Link
                    href={item.fileUrl}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-4 py-3 text-sm font-black text-inverse transition-all duration-500 hover:bg-color-secondary hover:text-primary"
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

      {/* নির্দেশনা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {guidelineSections.map((section) => (
              <article
                key={section.title}
                className="group rounded-[28px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                    {section.icon}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      নির্দেশনা
                    </p>

                    <h3 className="mt-2 text-xl font-black leading-tight text-primary sm:text-2xl">
                      {section.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 rounded-[18px] border border-soft bg-page-secondary p-4 transition-all duration-500 group-hover:border-brand-primary-soft"
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
        </div>
      </section>

      {/* সমাপনী বার্তা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaCalendarCheck className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    সমাপনী বার্তা
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  সঠিক আবেদনই সফল ভর্তির প্রথম ধাপ
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  ভর্তি আবেদন করার সময় সঠিক তথ্য, প্রয়োজনীয় কাগজপত্র এবং
                  সময়সীমা অনুসরণ করা অত্যন্ত গুরুত্বপূর্ণ। শিক্ষার্থী ও
                  অভিভাবকের সচেতন সহযোগিতায় আবেদন প্রক্রিয়া সহজ, দ্রুত এবং
                  সফলভাবে সম্পন্ন করা সম্ভব।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    ভর্তির যাত্রা
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    আজই আবেদন করুন এবং শিক্ষার নতুন যাত্রা শুরু করুন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplyNowPage;