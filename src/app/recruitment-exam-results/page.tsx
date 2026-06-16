import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileCircleCheck,
  FaFileLines,
  FaGraduationCap,
  FaIdCard,
  FaListCheck,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegClock,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTriangleExclamation,
  FaUserCheck,
  FaUserTie,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type CategoryItem = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type ProcessItem = {
  title: string;
  description: string;
};

type DocumentItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ResultItem = {
  id: number;
  roll: string;
  candidate: string;
  position: string;
  department: string;
  result: string;
  nextStep: string;
  fileUrl: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "প্রকাশিত ফলাফল",
    value: "৩টি",
    description: "লিখিত পরীক্ষা, ডেমো ক্লাস এবং সাক্ষাৎকারের ফলাফল প্রকাশিত হয়েছে।",
    icon: <FaFileCircleCheck />,
  },
  {
    title: "নির্বাচিত প্রার্থী",
    value: "১২ জন",
    description: "প্রাথমিকভাবে নির্বাচিত প্রার্থীদের পরবর্তী ধাপের জন্য ডাকা হয়েছে।",
    icon: <FaUserCheck />,
  },
  {
    title: "অপেক্ষমান তালিকা",
    value: "৮ জন",
    description: "প্রয়োজন অনুযায়ী অপেক্ষমান তালিকা থেকে প্রার্থী ডাকা হতে পারে।",
    icon: <FaListCheck />,
  },
  {
    title: "সাক্ষাৎকার তারিখ",
    value: "১৫ জুলাই",
    description: "নির্বাচিত প্রার্থীদের নির্ধারিত তারিখে উপস্থিত থাকতে হবে।",
    icon: <FaCalendarCheck />,
  },
];

const resultCategories: CategoryItem[] = [
  {
    title: "Written Exam Result",
    value: "প্রকাশিত",
    description:
      "লিখিত পরীক্ষায় প্রার্থীদের বিষয়জ্ঞান, সাধারণ দক্ষতা এবং পদের উপযোগিতা যাচাই করা হয়েছে।",
    icon: <FaFileLines />,
  },
  {
    title: "Demo Class List",
    value: "শর্টলিস্ট",
    description:
      "শিক্ষক পদের প্রার্থীদের পাঠদানের দক্ষতা যাচাইয়ের জন্য ডেমো ক্লাসে ডাকা হয়েছে।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "Viva / Interview List",
    value: "নির্ধারিত",
    description:
      "যোগাযোগ দক্ষতা, ব্যক্তিত্ব, অভিজ্ঞতা এবং দায়িত্ববোধ যাচাইয়ের জন্য সাক্ষাৎকার অনুষ্ঠিত হবে।",
    icon: <FaUserTie />,
  },
  {
    title: "Final Selection List",
    value: "পরবর্তী",
    description:
      "ডকুমেন্ট যাচাই, সাক্ষাৎকার এবং প্রয়োজনীয় মূল্যায়নের পর চূড়ান্ত তালিকা প্রকাশ করা হবে।",
    icon: <FaAward />,
  },
];

const processItems: ProcessItem[] = [
  {
    title: "লিখিত পরীক্ষা",
    description:
      "প্রার্থীদের পদের বিষয়ভিত্তিক জ্ঞান, সাধারণ দক্ষতা এবং বিশ্লেষণ ক্ষমতা যাচাই করা হয়।",
  },
  {
    title: "উত্তরপত্র মূল্যায়ন",
    description:
      "স্বচ্ছ মূল্যায়ন পদ্ধতির মাধ্যমে উত্তরপত্র যাচাই করে প্রাথমিক ফলাফল প্রস্তুত করা হয়।",
  },
  {
    title: "শর্টলিস্ট প্রকাশ",
    description:
      "যোগ্য প্রার্থীদের ডেমো ক্লাস, সাক্ষাৎকার অথবা পরবর্তী ধাপের জন্য তালিকাভুক্ত করা হয়।",
  },
  {
    title: "ডেমো ক্লাস / সাক্ষাৎকার",
    description:
      "শিক্ষক পদের জন্য পাঠদান দক্ষতা এবং অন্যান্য পদের জন্য দায়িত্ব পালনের সক্ষমতা যাচাই করা হয়।",
  },
  {
    title: "চূড়ান্ত নির্বাচন",
    description:
      "ফলাফল, সাক্ষাৎকার, ডকুমেন্ট যাচাই এবং বিদ্যালয়ের নীতিমালা অনুযায়ী চূড়ান্ত নির্বাচন করা হয়।",
  },
];

const documentItems: DocumentItem[] = [
  {
    title: "জাতীয় পরিচয়পত্র",
    description:
      "নির্বাচিত প্রার্থীদের পরিচয় যাচাইয়ের জন্য জাতীয় পরিচয়পত্রের মূল কপি ও ফটোকপি সঙ্গে রাখতে হবে।",
    icon: <FaIdCard />,
  },
  {
    title: "শিক্ষাগত সনদ",
    description:
      "প্রার্থীর শিক্ষাগত যোগ্যতা যাচাইয়ের জন্য সকল সনদ ও নম্বরপত্রের মূল কপি প্রয়োজন।",
    icon: <FaGraduationCap />,
  },
  {
    title: "অভিজ্ঞতার সনদ",
    description:
      "পূর্ববর্তী কর্মস্থলের অভিজ্ঞতা থাকলে সংশ্লিষ্ট সনদ বা প্রত্যয়নপত্র জমা দিতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "আবেদন কপি / প্রবেশপত্র",
    description:
      "আবেদন ফরমের কপি, পরীক্ষার প্রবেশপত্র এবং প্রয়োজনীয় কাগজপত্র সঙ্গে আনতে হবে।",
    icon: <FaFileLines />,
  },
];

const resultItems: ResultItem[] = [
  {
    id: 1,
    roll: "RT-1001",
    candidate: "মোঃ আরিফুল ইসলাম",
    position: "Assistant Teacher",
    department: "Bangla",
    result: "Selected",
    nextStep: "Demo Class",
    fileUrl: "#",
  },
  {
    id: 2,
    roll: "RT-1007",
    candidate: "সাবিনা ইয়াসমিন",
    position: "Assistant Teacher",
    department: "English",
    result: "Selected",
    nextStep: "Viva",
    fileUrl: "#",
  },
  {
    id: 3,
    roll: "RT-1012",
    candidate: "মোঃ রাশেদ হাসান",
    position: "Office Assistant",
    department: "Administration",
    result: "Selected",
    nextStep: "Document Check",
    fileUrl: "#",
  },
  {
    id: 4,
    roll: "RT-1018",
    candidate: "নুসরাত জাহান",
    position: "Lab Assistant",
    department: "Science / ICT",
    result: "Waiting",
    nextStep: "Waiting List",
    fileUrl: "#",
  },
  {
    id: 5,
    roll: "RT-1025",
    candidate: "মোঃ তানভীর আহমেদ",
    position: "Assistant Teacher",
    department: "Math",
    result: "Selected",
    nextStep: "Demo Class",
    fileUrl: "#",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "নির্বাচিত প্রার্থীদের নির্দেশনা",
    icon: <FaUserCheck />,
    points: [
      "নির্ধারিত তারিখ ও সময়ে বিদ্যালয়ে উপস্থিত হয়ে ডেমো ক্লাস, সাক্ষাৎকার বা ডকুমেন্ট যাচাই সম্পন্ন করতে হবে।",
      "জাতীয় পরিচয়পত্র, শিক্ষাগত সনদ, অভিজ্ঞতার সনদ, ছবি এবং প্রবেশপত্রের মূল কপি সঙ্গে আনতে হবে।",
      "পরীক্ষার রোল নম্বর ও আবেদন সংক্রান্ত তথ্য যাচাইয়ের জন্য সংরক্ষণ করতে হবে।",
      "বিদ্যালয়ের নির্দেশনা অনুযায়ী সময়ানুবর্তিতা, পোশাক ও আচরণবিধি অনুসরণ করতে হবে।",
    ],
  },
  {
    title: "অপেক্ষমান প্রার্থীদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "অপেক্ষমান তালিকায় থাকা প্রার্থীদের পরবর্তী ঘোষণা পর্যন্ত বিদ্যালয়ের নোটিশ নিয়মিত অনুসরণ করতে হবে।",
      "প্রয়োজন হলে বিদ্যালয় কর্তৃপক্ষ ফোন, নোটিশ বা ওয়েবসাইটের মাধ্যমে যোগাযোগ করবে।",
      "ভুল তথ্য, অসম্পূর্ণ কাগজপত্র বা অনুপস্থিতির কারণে সুযোগ বাতিল হতে পারে।",
      "চূড়ান্ত সিদ্ধান্ত বিদ্যালয় কর্তৃপক্ষের নীতিমালা ও প্রয়োজন অনুযায়ী গ্রহণ করা হবে।",
    ],
  },
];

const RecruitmentExamResultsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Recruitment Exam Results
          </p>

          <h1 className="mt-7 text-[40px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            নিয়োগ পরীক্ষার ফলাফল
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের শিক্ষক, কর্মকর্তা ও কর্মচারী নিয়োগ পরীক্ষার ফলাফল,
            নির্বাচিত প্রার্থীর তালিকা, সাক্ষাৎকার নির্দেশনা এবং পরবর্তী
            করণীয় এখানে প্রকাশ করা হয়।
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Overview */}
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

      {/* Introduction */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                ফলাফল প্রকাশের পরিচিতি
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl lg:text-5xl">
                স্বচ্ছ মূল্যায়ন ও নিয়মতান্ত্রিক নির্বাচনের মাধ্যমে ফলাফল প্রকাশ
              </h2>

              <p className="mt-6 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                বিদ্যালয়ের নিয়োগ পরীক্ষার ফলাফল লিখিত পরীক্ষা, ডেমো ক্লাস,
                সাক্ষাৎকার এবং প্রয়োজনীয় ডকুমেন্ট যাচাইয়ের ভিত্তিতে প্রকাশ করা
                হয়। প্রতিটি প্রার্থীর যোগ্যতা, দক্ষতা, অভিজ্ঞতা এবং পদের
                উপযোগিতা বিবেচনা করে ফলাফল প্রস্তুত করা হয়।
              </p>

              <p className="mt-4 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                ফলাফল প্রকাশের পর নির্বাচিত প্রার্থীদের নির্ধারিত সময়ে
                বিদ্যালয়ে উপস্থিত হয়ে পরবর্তী ধাপ সম্পন্ন করতে হবে। প্রার্থীদের
                সঠিক তথ্য, মূল সনদপত্র এবং আবেদন সংক্রান্ত কাগজপত্র সঙ্গে রাখা
                অত্যন্ত গুরুত্বপূর্ণ।
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-5">
                <Image
                  src="/assets/3.jpg"
                  alt="Recruitment exam result"
                  width={900}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[360px] w-full rounded-[24px] object-cover"
                />

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">Fair Result</p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      স্বচ্ছ মূল্যায়নের মাধ্যমে ফলাফল প্রস্তুত।
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">Next Step</p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      সাক্ষাৎকার, ডেমো ক্লাস ও ডকুমেন্ট যাচাই।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Notice */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaTriangleExclamation className="text-sm" />
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  Latest Result Notice
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                ফলাফল যাচাই করে নির্ধারিত পরবর্তী ধাপে অংশগ্রহণ করুন
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                প্রকাশিত ফলাফলে নির্বাচিত প্রার্থীদের নির্ধারিত তারিখে
                সাক্ষাৎকার, ডেমো ক্লাস অথবা ডকুমেন্ট যাচাইয়ের জন্য বিদ্যালয়ে
                উপস্থিত থাকতে হবে। সময়মতো উপস্থিত না হলে প্রার্থীর সুযোগ বাতিল
                বলে গণ্য হতে পারে।
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {["রোল নম্বর যাচাই", "মূল সনদ সঙ্গে আনুন", "সময়মতো উপস্থিতি", "পরবর্তী নির্দেশনা অনুসরণ"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-inverse"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaAward />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  Result Published
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  নির্বাচিত প্রার্থীদের অভিনন্দন এবং পরবর্তী ধাপের জন্য
                  প্রস্তুত থাকার অনুরোধ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result Categories */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ফলাফলের ধরন
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              Result Categories
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              নিয়োগ প্রক্রিয়ার বিভিন্ন ধাপে প্রকাশিত ফলাফল ও তালিকা নিচে
              উপস্থাপন করা হয়েছে।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resultCategories.map((item) => (
              <article
                key={item.title}
                className="group rounded-[26px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {item.icon}
                </div>

                <p className="mt-5 text-sm font-black text-brand-primary">
                  {item.value}
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight text-primary">
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

      {/* Results Table */}
      <section
        id="result-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ফলাফল তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              Recruitment Result Table
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              নির্বাচিত ও অপেক্ষমান প্রার্থীদের ফলাফল নিচের তালিকায় দেওয়া হলো।
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-soft bg-page-primary shadow-sm">
            <div className="hidden lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-soft bg-page-secondary">
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      রোল নম্বর
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      প্রার্থীর নাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পদবি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিভাগ / বিষয়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      ফলাফল
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পরবর্তী ধাপ
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ফাইল
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {resultItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-color-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.roll}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-black text-primary">
                        {item.candidate}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.position}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.department}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-color-primary px-3 py-2 text-xs font-black text-inverse">
                          {item.result}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.nextStep}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={item.fileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:opacity-90"
                        >
                          Download
                          <FaCloudArrowDown />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {resultItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.roll}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-primary">
                        {item.candidate}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                      <FaUserCheck />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">পদবি:</span>{" "}
                      {item.position}
                    </p>
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">বিভাগ:</span>{" "}
                      {item.department}
                    </p>
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">ফলাফল:</span>{" "}
                      {item.result}
                    </p>
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">
                        পরবর্তী ধাপ:
                      </span>{" "}
                      {item.nextStep}
                    </p>
                  </div>

                  <Link
                    href={item.fileUrl}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-4 py-3 text-sm font-black text-inverse transition-all duration-500 hover:opacity-90"
                  >
                    Download
                    <FaCloudArrowDown />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-4">
              <Image
                src="/assets/4.jpg"
                alt="Selection process"
                width={900}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[360px] w-full rounded-[24px] object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                নির্বাচন প্রক্রিয়া
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                ধাপে ধাপে মূল্যায়নের মাধ্যমে চূড়ান্ত নির্বাচন
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                নিয়োগ পরীক্ষার ফলাফল শুধু একটি পরীক্ষার ভিত্তিতে নয়, বরং
                লিখিত পরীক্ষা, ডেমো ক্লাস, সাক্ষাৎকার, অভিজ্ঞতা এবং ডকুমেন্ট
                যাচাইয়ের সমন্বয়ে প্রস্তুত করা হয়। এই প্রক্রিয়া বিদ্যালয়ের
                প্রয়োজন অনুযায়ী যোগ্য ও দায়িত্বশীল প্রার্থী নির্বাচনে সহায়তা
                করে।
              </p>

              <div className="mt-6 space-y-3">
                {processItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-[18px] border border-soft bg-page-secondary p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-color-primary text-xs font-black text-inverse">
                      {index + 1}
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

      {/* Required Documents */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              প্রয়োজনীয় ডকুমেন্ট
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              Required Documents
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              নির্বাচিত প্রার্থীদের ডকুমেন্ট যাচাইয়ের সময় নিচের কাগজপত্র
              সঙ্গে রাখা প্রয়োজন।
            </p>
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

      {/* Guidelines */}
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

      {/* Closing */}
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
                নির্বাচিত প্রার্থীদের অভিনন্দন
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                নিয়োগ পরীক্ষায় নির্বাচিত প্রার্থীদের বিদ্যালয়ের পক্ষ থেকে
                অভিনন্দন। পরবর্তী ধাপ, ডকুমেন্ট যাচাই, সাক্ষাৎকার এবং
                বিদ্যালয়ের নির্দেশনা যথাসময়ে অনুসরণ করার জন্য অনুরোধ করা
                হচ্ছে।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaUserCheck />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  Next Step
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  নির্ধারিত সময়ের মধ্যে সাক্ষাৎকার ও ডকুমেন্ট যাচাই সম্পন্ন
                  করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecruitmentExamResultsPage;