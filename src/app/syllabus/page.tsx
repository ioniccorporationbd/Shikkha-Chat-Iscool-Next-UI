"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaClipboardList,
  FaCloudArrowDown,
  FaFileLines,
  FaFolderOpen,
  FaGraduationCap,
  FaMagnifyingGlass,
  FaPeopleGroup,
  FaPenToSquare,
  FaRegClock,
  FaSchoolFlag,
  FaUserGraduate,
} from "react-icons/fa6";

type ওভারভিউআইটেম = {
  শিরোনাম: string;
  মান: string;
  আইকন: ReactNode;
};

type বিষয়আইটেম = {
  শিরোনাম: string;
  মোট: string;
};

type সিলেবাসআইটেম = {
  আইডি: number;
  শ্রেণিরনাম: string;
  বিষয়: string;
  টার্ম: string;
  টপিকসমূহ: string;
  ফাইলইউআরএল: string;
};

type নির্দেশনাবিভাগ = {
  শিরোনাম: string;
  আইকন: ReactNode;
  পয়েন্টসমূহ: string[];
};

const ওভারভিউআইটেমসমূহ: ওভারভিউআইটেম[] = [
  {
    শিরোনাম: "শিক্ষাবর্ষ",
    মান: "২০২৬",
    আইকন: <FaCalendarCheck />,
  },
  {
    শিরোনাম: "মোট শ্রেণি",
    মান: "১০টি",
    আইকন: <FaGraduationCap />,
  },
  {
    শিরোনাম: "বিষয় সংখ্যা",
    মান: "১০+",
    আইকন: <FaBookOpen />,
  },
  {
    শিরোনাম: "ডাউনলোডযোগ্য সিলেবাস",
    মান: "৮০+",
    আইকন: <FaFileLines />,
  },
];

const বিষয়সমূহ: বিষয়আইটেম[] = [
  { শিরোনাম: "বাংলা", মোট: "১২টি সিলেবাস" },
  { শিরোনাম: "ইংরেজি", মোট: "১০টি সিলেবাস" },
  { শিরোনাম: "গণিত", মোট: "১৫টি সিলেবাস" },
  { শিরোনাম: "বিজ্ঞান", মোট: "৯টি সিলেবাস" },
  { শিরোনাম: "বাংলাদেশ ও বিশ্বপরিচয়", মোট: "৮টি সিলেবাস" },
  { শিরোনাম: "তথ্য ও যোগাযোগ প্রযুক্তি", মোট: "৬টি সিলেবাস" },
  { শিরোনাম: "ইতিহাস ও সামাজিক বিজ্ঞান", মোট: "৮টি সিলেবাস" },
  { শিরোনাম: "জীবন ও জীবিকা", মোট: "৭টি সিলেবাস" },
  { শিরোনাম: "ধর্ম ও নৈতিক শিক্ষা", মোট: "১০টি সিলেবাস" },
];

const সিলেবাসআইটেমসমূহ: সিলেবাসআইটেম[] = [
  {
    আইডি: 1,
    শ্রেণিরনাম: "প্রথম শ্রেণি",
    বিষয়: "বাংলা",
    টার্ম: "প্রথম টার্ম",
    টপিকসমূহ: "স্বরবর্ণ, ব্যঞ্জনবর্ণ, শব্দ গঠন, ছোট গল্প",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি১-বাংলা.পিডিএফ",
  },
  {
    আইডি: 2,
    শ্রেণিরনাম: "দ্বিতীয় শ্রেণি",
    বিষয়: "ইংরেজি",
    টার্ম: "প্রথম টার্ম",
    টপিকসমূহ: "বর্ণমালা পর্যালোচনা, শব্দের অর্থ, মৌলিক বাক্য গঠন",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি২-ইংরেজি.পিডিএফ",
  },
  {
    আইডি: 3,
    暗ডি: 3,
    শ্রেণিরনাম: "তৃতীয় শ্রেণি",
    বিষয়: "গণিত",
    টার্ম: "অর্ধবার্ষিক",
    টপিকসমূহ: "যোগ, বিয়োগ, গুণ, ভাগ ও জ্যামিতির প্রাথমিক ধারণা",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি৩-গণিত.পিডিএফ",
  },
  {
    আইডি: 4,
    শ্রেণিরনাম: "চতুর্থ শ্রেণি",
    বিষয়: "বিজ্ঞান",
    টার্ম: "অর্ধবার্ষিক",
    টপিকসমূহ: "উদ্ভিদ, প্রাণী, পরিবেশ ও স্বাস্থ্যবিধি",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি৪-বিজ্ঞান.পিডিএফ",
  },
  {
    আইডি: 5,
    শ্রেণিরনাম: "পঞ্চম শ্রেণি",
    বিষয়: "বাংলাদেশ ও বিশ্বপরিচয়",
    টার্ম: "বার্ষিক",
    টপিকসমূহ: "বাংলাদেশের ইতিহাস, সংস্কৃতি, প্রাকৃতিক সম্পদ",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি৫-বাংলাদেশ.পিডিএফ",
  },
  {
    আইডি: 6,
    শ্রেণিরনাম: "ষষ্ঠ শ্রেণি",
    বিষয়: "তথ্য ও যোগাযোগ প্রযুক্তি",
    টার্ম: "বার্ষিক",
    টপিকসমূহ: "কম্পিউটার পরিচিতি, হার্ডওয়্যার, সফটওয়্যার, ইন্টারনেট",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি৬-আইসিটি.পিডিএফ",
  },
  {
    আইডি: 7,
    শ্রেণিরনাম: "সপ্তম শ্রেণি",
    বিষয়: "গণিত",
    টার্ম: "অর্ধবার্ষিক",
    টপিকসমূহ: "অনুপাত, শতকরা, পূর্ণসংখ্যা, ভগ্নাংশ, সমীকরণ",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি৭-গণিত.পিডিএফ",
  },
  {
    আইডি: 8,
    শ্রেণিরনাম: "অষ্টম শ্রেণি",
    বিষয়: "বিজ্ঞান",
    টার্ম: "প্রথম টার্ম",
    টপিকসমূহ: "কোষ বিভাজন, পৃথিবীর উৎপত্তি, পরমাণুর গঠন",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি৮-বিজ্ঞান.পিডিএফ",
  },
  {
    আইডি: 9,
    শ্রেণিরনাম: "নবম শ্রেণি",
    বিষয়: "ইতিহাস ও সামাজিক বিজ্ঞান",
    টার্ম: "অর্ধবার্ষিক",
    টপিকসমূহ: "আঞ্চলিক ও বৈশ্বিক প্রেক্ষাপট, টেকসই সমাজ গঠন",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি৯-ইতিহাস.পিডিএফ",
  },
  {
    আইডি: 10,
    শ্রেণিরনাম: "দশম শ্রেণি",
    বিষয়: "বাংলা",
    টার্ম: "প্রাক-নির্বাচনী",
    টপিকসমূহ: "নির্বাচিত গদ্য, পদ্য, ব্যাকরণ ও নির্মিতি অংশ",
    ফাইলইউআরএল: "/ডাউনলোড/সিলেবাস/শ্রেণি১০-বাংলা.পিডিএফ",
  },
];

const শ্রেণিরতালিকা = [
  "প্রথম শ্রেণি",
  "দ্বিতীয় শ্রেণি",
  "তৃতীয় শ্রেণি",
  "চতুর্থ শ্রেণি",
  "পঞ্চম শ্রেণি",
  "ষষ্ঠ শ্রেণি",
  "সপ্তম শ্রেণি",
  "অষ্টম শ্রেণি",
  "নবম শ্রেণি",
  "দশম শ্রেণি",
];

const নির্দেশনাবিভাগসমূহ: নির্দেশনাবিভাগ[] = [
  {
    শিরোনাম: "শিক্ষার্থীদের নির্দেশনা",
    আইকন: <FaUserGraduate />,
    পয়েন্টসমূহ: [
      "সিলেবাস অনুযায়ী প্রতিদিন নিয়মিত পাঠ্যসূচি অনুসরণ করতে হবে।",
      "প্রতিটি টার্ম পরীক্ষার আগে নির্ধারিত অধ্যায় ভালোভাবে প্রস্তুত করতে হবে।",
      "কোনো অধ্যায় বা টপিক বুঝতে সমস্যা হলে দ্রুত শ্রেণি শিক্ষক বা বিষয় শিক্ষকের সঙ্গে যোগাযোগ করতে হবে।",
      "সিলেবাসের বাইরে অতিরিক্ত অনুশীলন করলে পরীক্ষার প্রস্তুতি আরও ভালো হবে।",
      "ডাউনলোড করা সিলেবাস সংরক্ষণ করে নিয়মিত অনুসরণ করতে হবে।",
    ],
  },
  {
    শিরোনাম: "অভিভাবকদের নির্দেশনা",
    আইকন: <FaPeopleGroup />,
    পয়েন্টসমূহ: [
      "সন্তানের সিলেবাস অনুযায়ী পড়াশোনা হচ্ছে কি না নিয়মিত পর্যবেক্ষণ করুন।",
      "পরীক্ষার আগে অধ্যায়ভিত্তিক প্রস্তুতিতে সন্তানকে সহায়তা করুন।",
      "সন্তানের দুর্বল বিষয় চিহ্নিত করে প্রয়োজনে শ্রেণি শিক্ষক বা বিষয় শিক্ষকের সঙ্গে যোগাযোগ করুন।",
      "পড়াশোনার জন্য নিয়মিত সময়সূচি তৈরি করতে সন্তানকে সহযোগিতা করুন।",
      "বিদ্যালয়ের নতুন নোটিশ বা সিলেবাস আপডেট নিয়মিত অনুসরণ করুন।",
    ],
  },
];

const সিলেবাসপেজ = () => {
  const [সক্রিয়ফিল্টার, সেটসক্রিয়ফিল্টার] = useState<string | null>(null);

  const ফিল্টারকৃতসিলেবাস = সক্রিয়ফিল্টার
    ? সিলেবাসআইটেমসমূহ.filter((আইটেম) => আইটেম.শ্রেণিরনাম === সক্রিয়ফিল্টার)
    : সিলেবাসআইটেমসমূহ;

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* উপরোক্ত অংশ */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            প্রাতিষ্ঠানিক পাঠ্যসূচি
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            সিলেবাস ও শিক্ষাক্রম
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শ্রেণিভিত্তিক ও বিষয়ভিত্তিক পাঠ্যসূচি, অধ্যায় তালিকা, পরীক্ষার
            প্রস্তুতি এবং ডাউনলোডযোগ্য অফিসিয়াল সিলেবাস এক জায়গায় দেখার জন্য এই পেজ
            তৈরি করা হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            প্রধান পাতায় ফিরে যান
          </Link>
        </div>
      </section>

      {/* সিলেবাস সংক্ষিপ্ত বিবরণী */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ওভারভিউআইটেমসমূহ.map((আইটেম) => (
            <div
              key={আইটেম.শিরোনাম}
              className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                {আইটেম.আইকন}
              </div>

              <h3 className="mt-4 text-2xl font-black text-primary">
                {আইটেম.মান}
              </h3>

              <p className="mt-1 text-sm font-semibold text-secondary">
                {আইটেম.শিরোনাম}
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
                  পরিকল্পিত পড়াশোনার মূল ভিত্তি
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  সিলেবাস শিক্ষার্থী, শিক্ষক ও অভিভাবকদের জন্য শিক্ষাবর্ষের
                  পাঠ্যসূচি সম্পর্কে সুস্পষ্ট ধারণা দেয়। কোন শ্রেণিতে কোন
                  বিষয়, কোন টার্মে কোন অধ্যায় বা টপিক পড়ানো হবে—তা সিলেবাসের
                  মাধ্যমে জানা যায়। এর ফলে শিক্ষার্থীরা সময়মতো প্রস্তুতি নিতে
                  পারে এবং অভিভাবকরাও সন্তানের পড়াশোনা পরিকল্পিতভাবে পর্যবেক্ষণ
                  করতে পারেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* বিষয়ভিত্তিক সিলেবাস */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বিষয়ভিত্তিক তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              বিষয়ভিত্তিক পাঠ্যসূচি
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {বিষয়সমূহ.map((বিষয়) => (
              <div
                key={বিষয়.শিরোনাম}
                className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                    <FaFolderOpen />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                      {বিষয়.শিরোনাম}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                      {বিষয়.মোট}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* শ্রেণিভিত্তিক ফিল্টার */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  শ্রেণিভিত্তিক ফিল্টার
                </p>

                <h2 className="mt-2 text-3xl font-black text-primary">
                  শ্রেণিভিত্তিক পাঠ্যসূচি
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-secondary px-4 py-2 text-sm font-black text-secondary">
                <FaMagnifyingGlass className="text-brand-primary" />
                সহজে শ্রেণি নির্বাচন করুন
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              <button
                onClick={() => সেটসক্রিয়ফিল্টার(null)}
                className={`rounded-[18px] border px-4 py-4 text-center text-sm font-black transition-all duration-300 ${
                  সক্রিয়ফিল্টার === null
                    ? "bg-color-primary text-inverse border-transparent shadow-md"
                    : "border-soft bg-page-secondary text-primary hover:bg-color-primary hover:text-inverse"
                }`}
              >
                সকল শ্রেণি
              </button>
              {শ্রেণিরতালিকা.map((আইটেম) => (
                <a
                  key={আইটেম}
                  href="#সিলেবাস-টেবিল"
                  onClick={() => সেটসক্রিয়ফিল্টার(আইটেম)}
                  className={`rounded-[18px] border px-4 py-4 text-center text-sm font-black transition-all duration-300 ${
                    সক্রিয়ফিল্টার === আইটেম
                      ? "bg-color-primary text-inverse border-transparent shadow-md"
                      : "border-soft bg-page-secondary text-primary hover:bg-color-primary hover:text-inverse"
                  }`}
                >
                  {আইটেম}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* সিলেবাস টেবিল এলাকা */}
      <section
        id="সিলেবাস-টেবিল"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ডাউনলোড এলাকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              {সক্রিয়ফিল্টার ? `${সক্রিয়ফিল্টার} এর সিলেবাস` : "সাম্প্রতিক সিলেবাস"}
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-soft bg-page-primary shadow-sm">
            {/* বড় পর্দার জন্য টেবিল ভিউ */}
            <div className="hidden lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-soft bg-page-secondary">
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">শ্রেণি</th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">বিষয়</th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">টার্ম</th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">অধ্যায় / টপিক</th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">ডাউনলোড</th>
                  </tr>
                </thead>

                <tbody>
                  {ফিল্টারকৃতসিলেবাস.length > 0 ? (
                    ফিল্টারকৃতসিলেবাস.map((আইটেম) => (
                      <tr
                        key={আইটেম.আইডি}
                        className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                      >
                        <td className="px-5 py-5 text-sm font-bold text-secondary">{আইটেম.শ্রেণিরনাম}</td>
                        <td className="px-5 py-5 text-sm font-black text-primary">{আইটেম.বিষয়}</td>
                        <td className="px-5 py-5">
                          <span className="inline-flex items-center gap-2 rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                            <FaRegClock />
                            {আইটেম.টার্ম}
                          </span>
                        </td>
                        <td className="px-5 py-5 text-sm font-bold leading-7 text-secondary">{আইটেম.টপিকসমূহ}</td>
                        <td className="px-5 py-5 text-right">
                          <Link
                            href={আইটেম.ফাইলইউআরএল}
                            className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
                          >
                            ডাউনলোড করুন <FaCloudArrowDown />
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-10 text-center font-bold text-secondary">
                        এই শ্রেণির জন্য কোনো সিলেবাস পাওয়া যায়নি।
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* মোবাইল বা ছোট পর্দার জন্য কার্ড ভিউ */}
            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {ফিল্টারকৃতসিলেবাস.length > 0 ? (
                ফিল্টারকৃতসিলেবাস.map((আইটেম) => (
                  <div key={আইটেম.আইডি} className="rounded-[22px] border border-soft bg-page-secondary p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                          {আইটেম.শ্রেণিরনাম}
                        </p>
                        <h3 className="mt-2 text-xl font-black text-primary">{আইটেম.বিষয়}</h3>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                        <FaClipboardList />
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold text-secondary">
                        <span className="font-black text-primary">টার্ম:</span> {আইটেম.টার্ম}
                      </p>
                      <p className="text-sm font-semibold leading-7 text-secondary">
                        <span className="font-black text-primary">অধ্যায় / টপিক:</span> {আইটেম.টপিকসমূহ}
                      </p>
                    </div>

                    <Link
                      href={আইটেম.ফাইলইউআরএল}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-4 py-3 text-sm font-black text-inverse transition-all duration-500 hover:bg-color-secondary hover:text-primary"
                    >
                      ডাউনলোড করুন <FaCloudArrowDown />
                    </Link>
                  </div>
                ))
              ) : (
                <p className="py-6 text-center font-bold text-secondary">
                  এই শ্রেণির জন্য কোনো সিলেবাস পাওয়া যায়নি।
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* নির্দেশনাবলী বিভাগ */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {নির্দেশনাবিভাগসমূহ.map((বিভাগ) => (
              <article
                key={বিভাগ.শিরোনাম}
                className="group rounded-[28px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                    {বিভাগ.আইকন}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      নির্দেশনা
                    </p>
                    <h3 className="mt-2 text-xl font-black leading-tight text-primary sm:text-2xl">
                      {বিভাগ.শিরোনাম}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {বিভাগ.পয়েন্টসমূহ.map((পয়েন্ট) => (
                    <div
                      key={পয়েন্ট}
                      className="flex gap-3 rounded-[18px] border border-soft bg-page-secondary p-4 transition-all duration-500 group-hover:border-brand-primary-soft"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-color-primary text-[10px] text-inverse">
                        <FaCheck />
                      </span>
                      <p className="text-sm font-semibold leading-7 text-secondary">
                        {পয়েন্ট}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* সমাপনী ব্যানার */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaPenToSquare className="text-sm" />
                  <p className="text-xs font-black uppercase tracking-[0.18em]">সমাপনী বার্তা</p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  সঠিক সিলেবাস অনুসরণই সফল প্রস্তুতির চাবিকাঠি
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  সিলেবাস অনুসরণ করলে শিক্ষার্থীরা সময়মতো পাঠ প্রস্তুত করতে
                  পারে, পরীক্ষার আগে অধ্যায়ভিত্তিক পুনরালোচনা করতে পারে এবং
                  পড়াশোনাকে আরও পরিকল্পিতভাবে এগিয়ে নিতে পারে। শিক্ষক,
                  শিক্ষার্থী ও অভিভাবকের সম্মিলিত সহযোগিতায় শিক্ষার মান আরও
                  উন্নত করা সম্ভব।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>
                  <p className="mt-5 text-2xl font-black text-primary">পাঠ্যসূচি</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    পরিকল্পিত পাঠ্যসূচি শিক্ষার্থীর প্রস্তুতিকে সহজ ও সফল করে।
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

export default সিলেবাসপেজ;