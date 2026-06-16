import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaComputer,
  FaFileLines,
  FaFlask,
  FaGraduationCap,
  FaMedal,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegBuilding,
  FaRegClock,
  FaSchoolFlag,
  FaStar,
  FaTrophy,
  FaUserGraduate,
  FaUsersGear,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type FactCard = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type FactTableItem = {
  id: number;
  factType: string;
  description: string;
  value: string;
  note: string;
};

type ImportanceItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

const overviewItems: OverviewItem[] = [
  {
    title: "প্রতিষ্ঠার সাল",
    value: "২০০৫",
    icon: <FaSchoolFlag />,
  },
  {
    title: "মোট শিক্ষার্থী",
    value: "১২০০+",
    icon: <FaUserGraduate />,
  },
  {
    title: "মোট শিক্ষক",
    value: "৪৫+",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "শ্রেণি সংখ্যা",
    value: "১০+",
    icon: <FaBookOpen />,
  },
];

const academicFacts: FactCard[] = [
  {
    title: "শিক্ষাবর্ষ",
    value: "২০২৬",
    description:
      "নতুন শিক্ষাবর্ষ অনুযায়ী পাঠদান, পরীক্ষা, কার্যক্রম ও একাডেমিক পরিকল্পনা পরিচালিত হয়।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "মোট শ্রেণি",
    value: "প্লে - দশম",
    description:
      "প্রাথমিক থেকে মাধ্যমিক পর্যায় পর্যন্ত শিক্ষার্থীদের জন্য শ্রেণিভিত্তিক পাঠদান ব্যবস্থা রয়েছে।",
    icon: <FaGraduationCap />,
  },
  {
    title: "বিষয় সংখ্যা",
    value: "২৫+",
    description:
      "বাংলা, ইংরেজি, গণিত, বিজ্ঞান, আইসিটি, সমাজবিজ্ঞানসহ বিভিন্ন বিষয় পড়ানো হয়।",
    icon: <FaBookOpen />,
  },
  {
    title: "পরীক্ষার ধরন",
    value: "৪+",
    description:
      "ক্লাস টেস্ট, অর্ধবার্ষিক, বার্ষিক ও মডেল টেস্টের মাধ্যমে শিক্ষার্থীদের মূল্যায়ন করা হয়।",
    icon: <FaClipboardCheck />,
  },
];

const studentTeacherFacts: FactCard[] = [
  {
    title: "শিক্ষার্থী সংখ্যা",
    value: "১২০০+",
    description:
      "বিদ্যালয়ে বিভিন্ন শ্রেণিতে নিয়মিত শিক্ষার্থী অধ্যয়ন করছে এবং একাডেমিক কার্যক্রমে অংশগ্রহণ করছে।",
    icon: <FaUserGraduate />,
  },
  {
    title: "শিক্ষক সংখ্যা",
    value: "৪৫+",
    description:
      "অভিজ্ঞ শিক্ষক-শিক্ষিকারা বিষয়ভিত্তিক পাঠদান ও শিক্ষার্থীদের অগ্রগতি নিশ্চিত করেন।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "সহকারী শিক্ষক",
    value: "৩০+",
    description:
      "সহকারী শিক্ষকরা শ্রেণিকক্ষ পাঠদান, মূল্যায়ন ও শিক্ষার্থী সহায়তায় গুরুত্বপূর্ণ ভূমিকা পালন করেন।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "শিক্ষক-শিক্ষার্থী অনুপাত",
    value: "১:২৭",
    description:
      "উন্নত পাঠদান ও শিক্ষার্থী পর্যবেক্ষণের জন্য শিক্ষক-শিক্ষার্থী অনুপাত ভারসাম্যপূর্ণ রাখা হয়।",
    icon: <FaUsersGear />,
  },
];

const campusFacts: FactCard[] = [
  {
    title: "শ্রেণিকক্ষ",
    value: "৩০+",
    description:
      "শিক্ষার্থীদের আরামদায়ক ও মনোযোগী পাঠদানের জন্য পর্যাপ্ত শ্রেণিকক্ষ রয়েছে।",
    icon: <FaRegBuilding />,
  },
  {
    title: "লাইব্রেরি",
    value: "৫০০০+ বই",
    description:
      "পাঠ্যবই, গল্প, বিজ্ঞান, ইতিহাস ও সাধারণ জ্ঞানের বই নিয়ে সমৃদ্ধ লাইব্রেরি রয়েছে।",
    icon: <FaBookOpen />,
  },
  {
    title: "বিজ্ঞান ল্যাব",
    value: "১টি",
    description:
      "বিজ্ঞানভিত্তিক প্র্যাকটিক্যাল ক্লাস ও পরীক্ষণের জন্য ল্যাব সুবিধা রয়েছে।",
    icon: <FaFlask />,
  },
  {
    title: "কম্পিউটার ল্যাব",
    value: "১টি",
    description:
      "আইসিটি শিক্ষা ও ডিজিটাল দক্ষতা বৃদ্ধির জন্য কম্পিউটার ল্যাব ব্যবহার করা হয়।",
    icon: <FaComputer />,
  },
];

const achievementFacts: FactCard[] = [
  {
    title: "একাডেমিক সাফল্য",
    value: "৯৫%+",
    description:
      "বার্ষিক পরীক্ষায় শিক্ষার্থীদের ধারাবাহিক ভালো ফলাফল বিদ্যালয়ের একাডেমিক মান তুলে ধরে।",
    icon: <FaAward />,
  },
  {
    title: "ক্রীড়া অর্জন",
    value: "২০+",
    description:
      "ইন্টার স্কুল ও স্থানীয় ক্রীড়া প্রতিযোগিতায় শিক্ষার্থীরা নিয়মিত সাফল্য অর্জন করছে।",
    icon: <FaTrophy />,
  },
  {
    title: "সাংস্কৃতিক অর্জন",
    value: "১৫+",
    description:
      "গান, আবৃত্তি, বিতর্ক, চিত্রাঙ্কন ও সাংস্কৃতিক প্রতিযোগিতায় শিক্ষার্থীদের অংশগ্রহণ রয়েছে।",
    icon: <FaMedal />,
  },
  {
    title: "সহশিক্ষা কার্যক্রম",
    value: "২৫+",
    description:
      "বিজ্ঞান মেলা, ক্লাব কার্যক্রম, বিতর্ক, স্কাউট ও পরিবেশ কার্যক্রম নিয়মিত পরিচালিত হয়।",
    icon: <FaStar />,
  },
];

const factTableItems: FactTableItem[] = [
  {
    id: 1,
    factType: "প্রতিষ্ঠা",
    description: "বিদ্যালয়ের প্রতিষ্ঠার সাল",
    value: "২০০৫",
    note: "দীর্ঘদিনের শিক্ষাসেবা ও অভিজ্ঞতা।",
  },
  {
    id: 2,
    factType: "শিক্ষার্থী",
    description: "বর্তমান মোট শিক্ষার্থী",
    value: "১২০০+",
    note: "প্লে থেকে দশম শ্রেণি পর্যন্ত।",
  },
  {
    id: 3,
    factType: "শিক্ষক",
    description: "মোট শিক্ষক-শিক্ষিকা",
    value: "৪৫+",
    note: "বিষয়ভিত্তিক অভিজ্ঞ শিক্ষক।",
  },
  {
    id: 4,
    factType: "ক্লাস",
    description: "শ্রেণি কার্যক্রম",
    value: "প্লে - দশম",
    note: "নিয়মিত ক্লাস ও মূল্যায়ন ব্যবস্থা।",
  },
  {
    id: 5,
    factType: "লাইব্রেরি",
    description: "লাইব্রেরির বই সংখ্যা",
    value: "৫০০০+",
    note: "পাঠ্য, গল্প, বিজ্ঞান ও রেফারেন্স বই।",
  },
  {
    id: 6,
    factType: "ল্যাব",
    description: "বিজ্ঞান ও আইসিটি ল্যাব",
    value: "২টি",
    note: "প্র্যাকটিক্যাল ও ডিজিটাল শিক্ষা সহায়ক।",
  },
  {
    id: 7,
    factType: "ফলাফল",
    description: "একাডেমিক সফলতার হার",
    value: "৯৫%+",
    note: "নিয়মিত মূল্যায়ন ও গাইডলাইনের ফলাফল।",
  },
  {
    id: 8,
    factType: "কার্যক্রম",
    description: "সহশিক্ষা কার্যক্রম",
    value: "২৫+",
    note: "ক্রীড়া, সংস্কৃতি, বিজ্ঞান ও ক্লাব কার্যক্রম।",
  },
];

const importanceItems: ImportanceItem[] = [
  {
    title: "অভিভাবকদের জন্য",
    description:
      "বিদ্যালয়ের শিক্ষার্থী সংখ্যা, শিক্ষক, সুবিধা ও সাফল্য সম্পর্কে দ্রুত ধারণা পাওয়া যায়।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "শিক্ষার্থীদের জন্য",
    description:
      "বিদ্যালয়ের সুযোগ-সুবিধা, কার্যক্রম ও অর্জন সম্পর্কে শিক্ষার্থীরা সহজে জানতে পারে।",
    icon: <FaUserGraduate />,
  },
  {
    title: "দর্শনার্থীদের জন্য",
    description:
      "বিদ্যালয়ের পরিচিতি, একাডেমিক কাঠামো ও গুরুত্বপূর্ণ তথ্য এক নজরে দেখা যায়।",
    icon: <FaSchoolFlag />,
  },
];

const FastFactsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            School Snapshot
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            দ্রুত তথ্য
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের গুরুত্বপূর্ণ সংখ্যা, একাডেমিক তথ্য, শিক্ষার্থী-শিক্ষক
            পরিসংখ্যান, সুবিধা ও সাফল্যের সংক্ষিপ্ত পরিচিতি।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Fast Facts Overview */}
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

      {/* Introduction */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  ভূমিকা
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                  এক নজরে বিদ্যালয়ের গুরুত্বপূর্ণ তথ্য
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  Fast Facts পেজটি বিদ্যালয়ের গুরুত্বপূর্ণ তথ্যগুলো দ্রুত
                  জানার জন্য তৈরি করা হয়েছে। এখানে প্রতিষ্ঠার সাল, শিক্ষার্থী
                  সংখ্যা, শিক্ষক সংখ্যা, একাডেমিক কার্যক্রম, ক্যাম্পাস সুবিধা
                  ও অর্জন সংক্ষেপে তুলে ধরা হয়েছে, যাতে অভিভাবক, শিক্ষার্থী ও
                  দর্শনার্থীরা বিদ্যালয় সম্পর্কে সহজে ধারণা পেতে পারেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Facts */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Quick Overview
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  তথ্যভিত্তিক পরিচিতি, সহজ সিদ্ধান্ত
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের মূল তথ্যগুলো এক জায়গায় থাকলে অভিভাবক ও
                  শিক্ষার্থীরা ভর্তি, একাডেমিক সুবিধা, শিক্ষক-শিক্ষার্থী
                  অনুপাত এবং বিদ্যালয়ের সামগ্রিক মান সম্পর্কে দ্রুত ধারণা পেতে
                  পারেন।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    শিক্ষার্থী: ১২০০+
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    শিক্ষক: ৪৫+
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    বই: ৫০০০+
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaFileLines />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Fast Facts
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    বিদ্যালয়ের গুরুত্বপূর্ণ তথ্য এক নজরে জানুন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Facts */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              একাডেমিক তথ্য
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Academic Facts
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {academicFacts.map((fact) => (
              <article
                key={fact.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {fact.icon}
                </div>

                <p className="mt-5 text-2xl font-black text-brand-primary transition-colors duration-500 group-hover:text-inverse">
                  {fact.value}
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {fact.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {fact.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Student & Teacher Facts */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                শিক্ষার্থী ও শিক্ষক তথ্য
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Student & Teacher Facts
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {studentTeacherFacts.map((fact) => (
                <article
                  key={fact.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {fact.icon}
                  </div>

                  <p className="mt-5 text-2xl font-black text-brand-primary transition-colors duration-500 group-hover:text-inverse">
                    {fact.value}
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {fact.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {fact.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Facts */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ক্যাম্পাস সুবিধা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Campus Facilities Facts
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {campusFacts.map((fact) => (
              <article
                key={fact.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {fact.icon}
                </div>

                <p className="mt-5 text-2xl font-black text-brand-primary transition-colors duration-500 group-hover:text-inverse">
                  {fact.value}
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {fact.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {fact.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Facts */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                অর্জন
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Achievement Facts
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {achievementFacts.map((fact) => (
                <article
                  key={fact.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {fact.icon}
                  </div>

                  <p className="mt-5 text-2xl font-black text-brand-primary transition-colors duration-500 group-hover:text-inverse">
                    {fact.value}
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {fact.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {fact.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fast Facts Table */}
      <section id="fast-facts-table" className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              তথ্য তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Fast Facts Table
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
                      তথ্যের ধরন
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিবরণ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      সংখ্যা / মান
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      মন্তব্য
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {factTableItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaFileLines />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {item.factType}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.description}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.value}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {factTableItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.factType}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {item.value}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaFileLines />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">বিবরণ:</span>{" "}
                      {item.description}
                    </p>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">মন্তব্য:</span>{" "}
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why These Facts Matter */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                কেন এই তথ্য গুরুত্বপূর্ণ
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Why These Facts Matter
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {importanceItems.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
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
                  দ্রুত তথ্য, স্পষ্ট ধারণা
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের গুরুত্বপূর্ণ তথ্যগুলো সংক্ষেপে জানা অভিভাবক,
                  শিক্ষার্থী ও দর্শনার্থীদের জন্য খুবই সহায়ক। এই তথ্যগুলো
                  বিদ্যালয়ের শিক্ষা, পরিবেশ, সুবিধা ও অর্জন সম্পর্কে একটি
                  দ্রুত ও স্পষ্ট ধারণা দেয়।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    School at a Glance
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    এক নজরে বিদ্যালয়ের পরিচিতি, সুবিধা ও অর্জন।
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

export default FastFactsPage;