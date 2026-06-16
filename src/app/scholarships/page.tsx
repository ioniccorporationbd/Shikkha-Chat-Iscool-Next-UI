import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaHandHoldingDollar,
  FaMedal,
  FaPeopleGroup,
  FaPersonRunning,
  FaReceipt,
  FaRegClock,
  FaSchoolFlag,
  FaShieldHeart,
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

type ScholarshipCategory = {
  title: string;
  description: string;
  icon: ReactNode;
};

type CriteriaItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type RequiredDocument = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ProcessStep = {
  title: string;
  description: string;
};

type ScholarshipItem = {
  id: number;
  scholarshipName: string;
  eligibility: string;
  supportType: string;
  applicationTime: string;
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
    title: "মেধাবৃত্তি",
    value: "১০+",
    icon: <FaAward />,
  },
  {
    title: "আর্থিক সহায়তা",
    value: "সহায়তা",
    icon: <FaHandHoldingDollar />,
  },
  {
    title: "বিশেষ বৃত্তি",
    value: "৫+",
    icon: <FaShieldHeart />,
  },
  {
    title: "আবেদন সময়সীমা",
    value: "নির্ধারিত",
    icon: <FaRegClock />,
  },
];

const scholarshipCategories: ScholarshipCategory[] = [
  {
    title: "Merit Scholarship",
    description:
      "বার্ষিক পরীক্ষা, ক্লাস টেস্ট ও ধারাবাহিক ভালো ফলাফলের ভিত্তিতে মেধাবী শিক্ষার্থীদের জন্য বৃত্তি।",
    icon: <FaAward />,
  },
  {
    title: "Need-Based Scholarship",
    description:
      "আর্থিকভাবে অসচ্ছল কিন্তু পড়াশোনায় আগ্রহী শিক্ষার্থীদের জন্য বিশেষ আর্থিক সহায়তা।",
    icon: <FaHandHoldingDollar />,
  },
  {
    title: "Attendance Scholarship",
    description:
      "নিয়মিত উপস্থিতি, সময়ানুবর্তিতা এবং বিদ্যালয়ের নিয়ম মেনে চলার স্বীকৃতি হিসেবে বৃত্তি।",
    icon: <FaRegClock />,
  },
  {
    title: "Sports Scholarship",
    description:
      "ক্রীড়া প্রতিযোগিতায় সাফল্য অর্জনকারী এবং নিয়মিত খেলাধুলায় অংশগ্রহণকারী শিক্ষার্থীদের জন্য।",
    icon: <FaTrophy />,
  },
  {
    title: "Cultural Scholarship",
    description:
      "গান, আবৃত্তি, বিতর্ক, চিত্রাঙ্কন ও সাংস্কৃতিক কার্যক্রমে সাফল্যের জন্য বিশেষ বৃত্তি।",
    icon: <FaMedal />,
  },
  {
    title: "Special Support Scholarship",
    description:
      "বিশেষ পরিস্থিতি, পারিবারিক সমস্যা বা জরুরি শিক্ষাসহায়তার প্রয়োজন হলে বিবেচনাধীন সহায়তা।",
    icon: <FaShieldHeart />,
  },
];

const eligibilityCriteria: CriteriaItem[] = [
  {
    title: "ভালো ফলাফল",
    description:
      "পরীক্ষা, ক্লাস টেস্ট ও ধারাবাহিক মূল্যায়নে ভালো ফলাফল বৃত্তির জন্য গুরুত্বপূর্ণ যোগ্যতা।",
    icon: <FaGraduationCap />,
  },
  {
    title: "নিয়মিত উপস্থিতি",
    description:
      "বিদ্যালয়ে নিয়মিত উপস্থিতি, সময়ানুবর্তিতা ও ক্লাসে সক্রিয় অংশগ্রহণ বিবেচনা করা হয়।",
    icon: <FaRegClock />,
  },
  {
    title: "শৃঙ্খলাপূর্ণ আচরণ",
    description:
      "শিক্ষক, সহপাঠী ও বিদ্যালয়ের নিয়মের প্রতি সম্মানজনক আচরণ বজায় রাখতে হবে।",
    icon: <FaUsersGear />,
  },
  {
    title: "সহশিক্ষা কার্যক্রম",
    description:
      "ক্রীড়া, সাংস্কৃতিক, বিজ্ঞান, বিতর্ক ও ক্লাব কার্যক্রমে অংশগ্রহণ অতিরিক্ত যোগ্যতা হিসেবে বিবেচিত হয়।",
    icon: <FaPersonRunning />,
  },
  {
    title: "আর্থিক অবস্থা",
    description:
      "Need-Based Scholarship-এর ক্ষেত্রে পরিবারের আর্থিক অবস্থা যাচাই-বাছাই করা হতে পারে।",
    icon: <FaHandHoldingDollar />,
  },
];

const requiredDocuments: RequiredDocument[] = [
  {
    title: "আবেদন ফরম",
    description:
      "বিদ্যালয় থেকে নির্ধারিত বৃত্তির আবেদন ফরম সংগ্রহ করে সঠিকভাবে পূরণ করতে হবে।",
    icon: <FaFileLines />,
  },
  {
    title: "ফলাফলের কপি",
    description:
      "সাম্প্রতিক পরীক্ষার ফলাফল, প্রগ্রেস রিপোর্ট বা মার্কশিটের কপি জমা দিতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "জন্ম নিবন্ধন",
    description:
      "শিক্ষার্থীর পরিচয় ও বয়স যাচাইয়ের জন্য জন্ম নিবন্ধন সনদের কপি প্রয়োজন হতে পারে।",
    icon: <FaUserGraduate />,
  },
  {
    title: "অভিভাবকের আয়ের সনদ",
    description:
      "আর্থিক সহায়তার ক্ষেত্রে অভিভাবকের আয় বা আর্থিক অবস্থার প্রমাণ জমা দিতে হতে পারে।",
    icon: <FaReceipt />,
  },
  {
    title: "পাসপোর্ট সাইজ ছবি",
    description:
      "আবেদন ফরম ও অফিস রেকর্ডের জন্য সাম্প্রতিক পাসপোর্ট সাইজ ছবি প্রয়োজন।",
    icon: <FaPeopleGroup />,
  },
];

const applicationProcess: ProcessStep[] = [
  {
    title: "আবেদন ফরম সংগ্রহ",
    description:
      "বিদ্যালয় অফিস বা নির্ধারিত অনলাইন মাধ্যম থেকে বৃত্তির আবেদন ফরম সংগ্রহ করুন।",
  },
  {
    title: "প্রয়োজনীয় তথ্য পূরণ",
    description:
      "শিক্ষার্থীর নাম, শ্রেণি, রোল, ফলাফল, অভিভাবকের তথ্য ও বৃত্তির ধরন সঠিকভাবে পূরণ করুন।",
  },
  {
    title: "ডকুমেন্ট জমা",
    description:
      "ফলাফল, ছবি, জন্ম নিবন্ধন, আয়ের সনদসহ প্রয়োজনীয় কাগজপত্র আবেদন ফরমের সঙ্গে জমা দিন।",
  },
  {
    title: "যাচাই-বাছাই",
    description:
      "বিদ্যালয় কর্তৃপক্ষ আবেদন, ফলাফল, উপস্থিতি, আচরণ ও প্রয়োজনীয় ডকুমেন্ট যাচাই করবে।",
  },
  {
    title: "ফলাফল প্রকাশ",
    description:
      "চূড়ান্ত যাচাই শেষে নির্বাচিত শিক্ষার্থীদের তালিকা নোটিশ বোর্ড বা অফিসের মাধ্যমে প্রকাশ করা হবে।",
  },
];

const scholarshipItems: ScholarshipItem[] = [
  {
    id: 1,
    scholarshipName: "মেধাবৃত্তি",
    eligibility: "বার্ষিক পরীক্ষায় ভালো ফলাফল",
    supportType: "টিউশন ফি ছাড় / সম্মাননা",
    applicationTime: "ফলাফল প্রকাশের পর",
    note: "শ্রেণিভিত্তিক মেধা তালিকা অনুযায়ী।",
    fileUrl: "#",
  },
  {
    id: 2,
    scholarshipName: "আর্থিক সহায়তা বৃত্তি",
    eligibility: "অসচ্ছল কিন্তু নিয়মিত শিক্ষার্থী",
    supportType: "আংশিক ফি সহায়তা",
    applicationTime: "শিক্ষাবর্ষের শুরুতে",
    note: "অভিভাবকের আর্থিক তথ্য যাচাইযোগ্য।",
    fileUrl: "#",
  },
  {
    id: 3,
    scholarshipName: "উপস্থিতি বৃত্তি",
    eligibility: "নিয়মিত উপস্থিতি ও সময়ানুবর্তিতা",
    supportType: "সনদ / বিশেষ পুরস্কার",
    applicationTime: "সেশন শেষে",
    note: "উপস্থিতির রেকর্ড অনুযায়ী নির্বাচন।",
    fileUrl: "#",
  },
  {
    id: 4,
    scholarshipName: "ক্রীড়া বৃত্তি",
    eligibility: "ক্রীড়ায় সাফল্য ও সক্রিয় অংশগ্রহণ",
    supportType: "পুরস্কার / সহায়তা",
    applicationTime: "প্রতিযোগিতা শেষে",
    note: "বিদ্যালয় ও আন্তঃবিদ্যালয় অর্জন বিবেচ্য।",
    fileUrl: "#",
  },
  {
    id: 5,
    scholarshipName: "সাংস্কৃতিক বৃত্তি",
    eligibility: "সাংস্কৃতিক কার্যক্রমে সাফল্য",
    supportType: "সম্মাননা / বিশেষ সহায়তা",
    applicationTime: "বার্ষিক অনুষ্ঠানের আগে",
    note: "গান, আবৃত্তি, বিতর্ক, চিত্রাঙ্কন প্রযোজ্য।",
    fileUrl: "#",
  },
  {
    id: 6,
    scholarshipName: "বিশেষ সহায়তা বৃত্তি",
    eligibility: "বিশেষ পরিস্থিতি বা জরুরি সহায়তা প্রয়োজন",
    supportType: "কর্তৃপক্ষের বিবেচনায় সহায়তা",
    applicationTime: "প্রয়োজন অনুযায়ী",
    note: "লিখিত আবেদন ও যাচাই প্রয়োজন।",
    fileUrl: "#",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "নিয়মিত পড়াশোনা করতে হবে এবং ভালো ফলাফল ধরে রাখার চেষ্টা করতে হবে।",
      "বিদ্যালয়ে নিয়মিত উপস্থিত থাকতে হবে এবং সময়ানুবর্তিতা বজায় রাখতে হবে।",
      "বৃত্তির আবেদন সময়সীমা, নোটিশ ও প্রয়োজনীয় নির্দেশনা ভালোভাবে অনুসরণ করতে হবে।",
      "ফলাফলের কপি, ছবি ও প্রয়োজনীয় কাগজপত্র আগে থেকে প্রস্তুত রাখতে হবে।",
      "শৃঙ্খলা, সততা ও ভালো আচরণ বজায় রাখতে হবে, কারণ এগুলোও বিবেচনা করা হতে পারে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের বৃত্তির আবেদন প্রক্রিয়ায় প্রয়োজনীয় তথ্য ও কাগজপত্র দিয়ে সহায়তা করুন।",
      "ফলাফল, জন্ম নিবন্ধন, আয়ের সনদ ও অন্যান্য ডকুমেন্ট জমা দেওয়ার আগে যাচাই করুন।",
      "বিদ্যালয়ের নোটিশ, আবেদন সময়সীমা ও ফলাফল প্রকাশের আপডেট নিয়মিত অনুসরণ করুন।",
      "সন্তানকে নিয়মিত পড়াশোনা, উপস্থিতি ও ভালো আচরণ বজায় রাখতে উৎসাহ দিন।",
      "কোনো তথ্য বুঝতে সমস্যা হলে বিদ্যালয় অফিস বা শ্রেণি শিক্ষকের সঙ্গে যোগাযোগ করুন।",
    ],
  },
];

const ScholarshipsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Scholarships
          </p>

          <h1 className="mt-5 text-[36px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            বৃত্তি ও আর্থিক সহায়তা
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            মেধাবী, পরিশ্রমী ও আর্থিকভাবে অসচ্ছল শিক্ষার্থীদের জন্য বিদ্যালয়ের
            বৃত্তি, আর্থিক সহায়তা, আবেদন প্রক্রিয়া ও প্রয়োজনীয় নির্দেশনা।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Scholarship Overview */}
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
                  মেধা, পরিশ্রম ও শিক্ষার সুযোগকে সম্মান
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বৃত্তি শিক্ষার্থীদের পড়াশোনায় উৎসাহিত করে, মেধার স্বীকৃতি
                  দেয় এবং আর্থিকভাবে অসচ্ছল শিক্ষার্থীদের শিক্ষার ধারাবাহিকতা
                  বজায় রাখতে সহায়তা করে। বিদ্যালয় শিক্ষার্থীদের ফলাফল,
                  উপস্থিতি, আচরণ, সহশিক্ষা কার্যক্রম ও আর্থিক অবস্থার ভিত্তিতে
                  বিভিন্ন ধরনের বৃত্তি ও সহায়তা প্রদান করতে পারে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Scholarship */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Scholarship Support
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  মেধাবী ও পরিশ্রমী শিক্ষার্থীদের পাশে বিদ্যালয়
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  শিক্ষার্থীদের একাডেমিক সাফল্য, নিয়মিত উপস্থিতি, ভালো আচরণ
                  এবং বিশেষ প্রতিভাকে উৎসাহিত করতে বিদ্যালয় বিভিন্ন ধরনের
                  বৃত্তি ও আর্থিক সহায়তার সুযোগ রাখে।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    মেধা: ফলাফলভিত্তিক
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    সহায়তা: প্রয়োজনভিত্তিক
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    আবেদন: সময়সীমা অনুযায়ী
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaAward />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Merit Support
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    মেধা, চেষ্টা ও দায়িত্বশীল আচরণের স্বীকৃতি হিসেবে বৃত্তি।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Categories */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বৃত্তির বিভাগ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Scholarship Categories
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scholarshipCategories.map((category) => (
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

      {/* Eligibility Criteria */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                যোগ্যতার শর্ত
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Eligibility Criteria
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {eligibilityCriteria.map((criteria) => (
                <article
                  key={criteria.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {criteria.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {criteria.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {criteria.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              প্রয়োজনীয় ডকুমেন্ট
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Required Documents
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
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {document.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary">
                  {document.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {document.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                আবেদন প্রক্রিয়া
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Application Process
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
              {applicationProcess.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-color-secondary text-sm font-black text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {String(index + 1).padStart(2, "0")}
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

      {/* Scholarship Table */}
      <section
        id="scholarship-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বৃত্তির তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Scholarship Table
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
                      বৃত্তির নাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      যোগ্যতা
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      সহায়তার ধরন
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      আবেদন সময়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      মন্তব্য
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      বিস্তারিত
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {scholarshipItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaAward />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {item.scholarshipName}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold leading-7 text-secondary">
                        {item.eligibility}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.supportType}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.applicationTime}
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.note}
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
              {scholarshipItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.applicationTime}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {item.scholarshipName}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaAward />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">যোগ্যতা:</span>{" "}
                      {item.eligibility}
                    </p>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">
                        সহায়তার ধরন:
                      </span>{" "}
                      {item.supportType}
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
                    Download
                    <FaCloudArrowDown />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
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
                  বৃত্তি শিক্ষার্থীর স্বপ্নকে আরও শক্তিশালী করে
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বৃত্তি শুধু আর্থিক সহায়তা নয়, এটি শিক্ষার্থীর মেধা,
                  পরিশ্রম, দায়িত্বশীলতা ও স্বপ্নের স্বীকৃতি। সঠিক প্রস্তুতি,
                  নিয়মিত পড়াশোনা এবং সময়মতো আবেদন শিক্ষার্থীদের জন্য নতুন
                  সম্ভাবনার দরজা খুলে দেয়।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Support Education
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    মেধা ও শিক্ষার পথে বিদ্যালয় শিক্ষার্থীদের পাশে আছে।
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

export default ScholarshipsPage;