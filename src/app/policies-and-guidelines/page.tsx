import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaMobileScreenButton,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegClock,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTriangleExclamation,
  FaUserGraduate,
  FaUsersGear,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type PolicyCategory = {
  title: string;
  description: string;
  icon: ReactNode;
};

type GuidelineItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type PolicyItem = {
  id: number;
  policyName: string;
  category: string;
  applicableFor: string;
  importance: string;
  fileUrl: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "আচরণবিধি",
    value: "১২+",
    icon: <FaUsersGear />,
  },
  {
    title: "উপস্থিতি নীতিমালা",
    value: "৯০%",
    icon: <FaRegClock />,
  },
  {
    title: "পরীক্ষা নীতিমালা",
    value: "১০+",
    icon: <FaClipboardCheck />,
  },
  {
    title: "নিরাপত্তা নির্দেশিকা",
    value: "২৪/৭",
    icon: <FaShieldHalved />,
  },
];

const policyCategories: PolicyCategory[] = [
  {
    title: "Academic Policy",
    description:
      "পাঠদান, হোমওয়ার্ক, অ্যাসাইনমেন্ট, ক্লাস কার্যক্রম ও শিক্ষার্থীর একাডেমিক অগ্রগতি সম্পর্কিত নীতিমালা।",
    icon: <FaBookOpen />,
  },
  {
    title: "Attendance Policy",
    description:
      "নিয়মিত উপস্থিতি, সময়মতো বিদ্যালয়ে আসা, অনুপস্থিতির কারণ জানানো এবং উপস্থিতির রেকর্ড সংক্রান্ত নির্দেশনা।",
    icon: <FaRegClock />,
  },
  {
    title: "Discipline Policy",
    description:
      "শ্রেণিকক্ষ, ক্যাম্পাস, সহপাঠী ও শিক্ষকদের প্রতি সম্মানজনক আচরণ এবং শৃঙ্খলা বজায় রাখার নীতিমালা।",
    icon: <FaUsersGear />,
  },
  {
    title: "Exam Policy",
    description:
      "পরীক্ষার সময়সূচি, পরীক্ষার হলে আচরণ, নকলমুক্ত পরীক্ষা ও মূল্যায়ন পদ্ধতি সম্পর্কিত নিয়ম।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Safety & Security Policy",
    description:
      "বিদ্যালয় ক্যাম্পাসে নিরাপদ চলাচল, জরুরি পরিস্থিতি, স্বাস্থ্য সচেতনতা ও নিরাপত্তা নির্দেশনা।",
    icon: <FaShieldHalved />,
  },
  {
    title: "Digital Device Policy",
    description:
      "মোবাইল, ইন্টারনেট, কম্পিউটার, অনলাইন ক্লাস ও প্রযুক্তি ব্যবহারের দায়িত্বশীল নিয়মনীতি।",
    icon: <FaMobileScreenButton />,
  },
];

const importantGuidelines: GuidelineItem[] = [
  {
    title: "সময়মতো বিদ্যালয়ে উপস্থিত হওয়া",
    description:
      "প্রতিদিন নির্ধারিত সময়ের আগে বিদ্যালয়ে উপস্থিত হতে হবে এবং ক্লাস শুরু হওয়ার পর প্রবেশ এড়াতে হবে।",
    icon: <FaRegClock />,
  },
  {
    title: "ইউনিফর্ম ও পরিচয়পত্র ব্যবহার",
    description:
      "পরিচ্ছন্ন ইউনিফর্ম, জুতা এবং বিদ্যালয়ের পরিচয়পত্র ব্যবহার করে বিদ্যালয়ে আসতে হবে।",
    icon: <FaUserGraduate />,
  },
  {
    title: "ক্লাসে শৃঙ্খলা বজায় রাখা",
    description:
      "ক্লাস চলাকালীন মনোযোগ, নীরবতা, শিক্ষক নির্দেশনা এবং সহপাঠীর শেখার পরিবেশ বজায় রাখতে হবে।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "পরীক্ষায় সততা বজায় রাখা",
    description:
      "পরীক্ষার সময় নকল, অসদুপায় বা অন্যের সহায়তা নেওয়া থেকে বিরত থাকতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "বিদ্যালয়ের সম্পদ সংরক্ষণ",
    description:
      "বই, বেঞ্চ, বোর্ড, ল্যাব সামগ্রী, লাইব্রেরি ও ক্যাম্পাসের সম্পদ যত্নসহকারে ব্যবহার করতে হবে।",
    icon: <FaSchoolFlag />,
  },
  {
    title: "নিরাপত্তা নির্দেশনা মানা",
    description:
      "জরুরি পরিস্থিতি, বিরতি, ল্যাব, সিঁড়ি ও ক্যাম্পাস চলাচলের সময় নিরাপত্তা নির্দেশনা মেনে চলতে হবে।",
    icon: <FaShieldHalved />,
  },
];

const policyItems: PolicyItem[] = [
  {
    id: 1,
    policyName: "একাডেমিক নীতিমালা",
    category: "Academic",
    applicableFor: "শিক্ষার্থী ও শিক্ষক",
    importance: "অতি গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 2,
    policyName: "উপস্থিতি নীতিমালা",
    category: "Attendance",
    applicableFor: "শিক্ষার্থী",
    importance: "গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 3,
    policyName: "আচরণ ও শৃঙ্খলা নীতিমালা",
    category: "Discipline",
    applicableFor: "সকল শিক্ষার্থী",
    importance: "অতি গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 4,
    policyName: "পরীক্ষা নীতিমালা",
    category: "Exam",
    applicableFor: "পরীক্ষার্থী",
    importance: "অতি গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 5,
    policyName: "নিরাপত্তা নির্দেশিকা",
    category: "Safety",
    applicableFor: "শিক্ষার্থী, শিক্ষক ও অভিভাবক",
    importance: "গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 6,
    policyName: "ডিজিটাল ডিভাইস ব্যবহার নীতিমালা",
    category: "Technology",
    applicableFor: "শিক্ষার্থী",
    importance: "গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নীতিমালা",
    icon: <FaUserGraduate />,
    points: [
      "প্রতিদিন সময়মতো বিদ্যালয়ে উপস্থিত থাকতে হবে এবং নিয়মিত ক্লাসে অংশগ্রহণ করতে হবে।",
      "শিক্ষক, সহপাঠী, কর্মচারী এবং বিদ্যালয়ের সকল সদস্যের প্রতি সম্মানজনক আচরণ করতে হবে।",
      "হোমওয়ার্ক, অ্যাসাইনমেন্ট, প্রজেক্ট ও ক্লাসওয়ার্ক সময়মতো সম্পন্ন করতে হবে।",
      "পরীক্ষায় সততা বজায় রাখতে হবে এবং কোনো ধরনের অসদুপায় অবলম্বন করা যাবে না।",
      "মোবাইল বা ডিজিটাল ডিভাইস বিদ্যালয়ের অনুমতি ছাড়া ব্যবহার করা যাবে না।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশিকা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের নিয়মিত উপস্থিতি, সময়ানুবর্তিতা ও পড়াশোনার অগ্রগতি পর্যবেক্ষণ করুন।",
      "বিদ্যালয়ের নোটিশ, পরীক্ষার সময়সূচি, ছুটি ও গুরুত্বপূর্ণ নির্দেশনা নিয়মিত অনুসরণ করুন।",
      "শ্রেণি শিক্ষক ও বিষয় শিক্ষকের সঙ্গে সন্তানের পড়াশোনা ও আচরণ সম্পর্কে যোগাযোগ রাখুন।",
      "বিদ্যালয়ের নীতিমালা মেনে চলতে সন্তানকে উৎসাহিত করুন এবং প্রয়োজনীয় সহায়তা দিন।",
      "কোনো সমস্যা হলে সরাসরি বিদ্যালয় কর্তৃপক্ষ বা দায়িত্বপ্রাপ্ত শিক্ষকের সঙ্গে যোগাযোগ করুন।",
    ],
  },
];

const PoliciesGuidelinesPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            School Rules
          </p>

          <h1 className="mt-5 text-[36px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            নীতিমালা ও নির্দেশিকা
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের একাডেমিক, শৃঙ্খলা, নিরাপত্তা, উপস্থিতি, পরীক্ষা ও
            অভিভাবক-শিক্ষার্থী সম্পর্কিত গুরুত্বপূর্ণ নীতিমালা ও নির্দেশিকা।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Policy Overview */}
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
                  নিয়মনীতি মানলেই সুন্দর শিক্ষার পরিবেশ
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ের নীতিমালা ও নির্দেশিকা শিক্ষার্থী, শিক্ষক,
                  অভিভাবক এবং বিদ্যালয় কর্তৃপক্ষের মধ্যে দায়িত্ববোধ, শৃঙ্খলা ও
                  সহযোগিতা নিশ্চিত করে। একটি নিরাপদ, পরিচ্ছন্ন, নৈতিক ও
                  শিক্ষাবান্ধব পরিবেশ গড়ে তুলতে নিয়মনীতি অনুসরণ করা অত্যন্ত
                  গুরুত্বপূর্ণ। এই পেজে বিদ্যালয়ের গুরুত্বপূর্ণ একাডেমিক,
                  উপস্থিতি, পরীক্ষা, আচরণ, নিরাপত্তা ও প্রযুক্তি ব্যবহার
                  সম্পর্কিত নির্দেশনা তুলে ধরা হয়েছে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Policy */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Core Guideline
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  শৃঙ্খলা, নিরাপত্তা ও সততা আমাদের প্রধান নীতি
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের প্রতিটি শিক্ষার্থীকে সময়ানুবর্তিতা, সততা,
                  সম্মানজনক আচরণ এবং দায়িত্বশীলতার মাধ্যমে শিক্ষার পরিবেশ
                  উন্নত করতে উৎসাহিত করা হয়। নিয়মনীতি মেনে চললে শিক্ষার্থী
                  শুধু ভালো ফলাফল নয়, ভালো মানুষ হিসেবেও গড়ে ওঠে।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    আচরণ: সম্মানজনক
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    পরীক্ষা: নকলমুক্ত
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    উপস্থিতি: নিয়মিত
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaShieldHalved />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Safe Campus
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    নিয়মনীতি, নিরাপত্তা ও দায়িত্বশীল আচরণই সুন্দর ক্যাম্পাসের
                    ভিত্তি।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              নীতিমালার বিভাগ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Policy Categories
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {policyCategories.map((category) => (
              <article
                key={category.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {category.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Important Guidelines */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                গুরুত্বপূর্ণ নির্দেশিকা
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Important Guidelines
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {importantGuidelines.map((item) => (
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

      {/* Policy Table */}
      <section
        id="policy-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              নীতিমালা তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Policy Table
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
                      নীতিমালার নাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিভাগ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      প্রযোজ্য ব্যক্তি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      গুরুত্ব
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      বিস্তারিত
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {policyItems.map((item) => (
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
                            {item.policyName}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.applicableFor}
                      </td>

                      <td className="px-5 py-5 text-sm font-black text-secondary">
                        {item.importance}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={item.fileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
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
              {policyItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.category}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {item.policyName}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaFileLines />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">
                        প্রযোজ্য ব্যক্তি:
                      </span>{" "}
                      {item.applicableFor}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">গুরুত্ব:</span>{" "}
                      {item.importance}
                    </p>
                  </div>

                  <Link
                    href={item.fileUrl}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-4 py-3 text-sm font-black text-inverse transition-all duration-500 hover:bg-color-secondary hover:text-primary"
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

      {/* Student and Parent Guidelines */}
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
                      নির্দেশিকা
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
                  নিয়মনীতি মানলেই নিরাপদ ও সুন্দর বিদ্যালয়
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের নীতিমালা ও নির্দেশিকা মেনে চললে শিক্ষার্থী,
                  শিক্ষক ও অভিভাবকের মধ্যে সুন্দর সমন্বয় তৈরি হয়। শৃঙ্খলা,
                  সততা, নিরাপত্তা ও দায়িত্বশীলতার মাধ্যমে একটি আদর্শ
                  শিক্ষাবান্ধব পরিবেশ গড়ে তোলা সম্ভব।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaGraduationCap />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Better School Life
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    নিয়ম, দায়িত্ব ও সম্মান বজায় রাখাই সুন্দর শিক্ষাজীবনের
                    ভিত্তি।
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

export default PoliciesGuidelinesPage;