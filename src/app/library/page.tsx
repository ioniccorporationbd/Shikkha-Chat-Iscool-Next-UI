import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBook,
  FaBookOpen,
  FaBookmark,
  FaCalendarCheck,
  FaCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaMagnifyingGlass,
  FaNewspaper,
  FaPeopleGroup,
  FaRegClock,
  FaSchoolFlag,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type BookCategory = {
  title: string;
  description: string;
  icon: ReactNode;
};

type FacilityItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type RuleItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type BookItem = {
  id: number;
  bookName: string;
  category: string;
  author: string;
  level: string;
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
    title: "মোট বই",
    value: "৫০০০+",
    icon: <FaBook />,
  },
  {
    title: "বিষয়ভিত্তিক বই",
    value: "২৫+",
    icon: <FaBookOpen />,
  },
  {
    title: "নিয়মিত পাঠক",
    value: "৮০০+",
    icon: <FaPeopleGroup />,
  },
  {
    title: "লাইব্রেরি সময়",
    value: "৯টা-৩টা",
    icon: <FaRegClock />,
  },
];

const bookCategories: BookCategory[] = [
  {
    title: "Text Books",
    description:
      "শ্রেণিভিত্তিক পাঠ্যবই, সহায়ক বই ও সিলেবাসভিত্তিক গুরুত্বপূর্ণ বই শিক্ষার্থীদের পড়াশোনায় সহায়তা করে।",
    icon: <FaBookOpen />,
  },
  {
    title: "Story Books",
    description:
      "গল্প, উপন্যাস, শিশু সাহিত্য ও নৈতিক শিক্ষামূলক বই শিক্ষার্থীদের কল্পনাশক্তি ও ভাষা দক্ষতা বাড়ায়।",
    icon: <FaBookmark />,
  },
  {
    title: "Science Books",
    description:
      "বিজ্ঞান, আবিষ্কার, প্রযুক্তি ও গবেষণামূলক বই শিক্ষার্থীদের অনুসন্ধিৎসা ও সৃজনশীল চিন্তা বাড়ায়।",
    icon: <FaGraduationCap />,
  },
  {
    title: "History Books",
    description:
      "ইতিহাস, মুক্তিযুদ্ধ, ঐতিহ্য ও বিশ্বসভ্যতা সম্পর্কিত বই শিক্ষার্থীদের জ্ঞানভান্ডার সমৃদ্ধ করে।",
    icon: <FaFileLines />,
  },
  {
    title: "Religious Books",
    description:
      "নৈতিকতা, মূল্যবোধ, ধর্মীয় শিক্ষা ও সুন্দর জীবন গঠনে সহায়ক বই লাইব্রেরিতে রাখা হয়।",
    icon: <FaStar />,
  },
  {
    title: "General Knowledge Books",
    description:
      "কুইজ, সাধারণ জ্ঞান, সমসাময়িক বিষয় ও প্রতিযোগিতামূলক পরীক্ষার প্রস্তুতির জন্য বই রয়েছে।",
    icon: <FaMagnifyingGlass />,
  },
];

const libraryFacilities: FacilityItem[] = [
  {
    title: "পাঠাগার কক্ষ",
    description:
      "শিক্ষার্থীদের শান্ত, পরিচ্ছন্ন ও মনোযোগী পরিবেশে বই পড়ার জন্য আলাদা পাঠাগার কক্ষ রয়েছে।",
    icon: <FaBookOpen />,
  },
  {
    title: "বই ধার নেওয়ার ব্যবস্থা",
    description:
      "লাইব্রেরি কার্ড ব্যবহার করে শিক্ষার্থীরা নির্ধারিত সময়ের জন্য বই ধার নিতে পারে।",
    icon: <FaBookmark />,
  },
  {
    title: "রেফারেন্স বই",
    description:
      "পরীক্ষা প্রস্তুতি, গবেষণা ও অতিরিক্ত জ্ঞান অর্জনের জন্য রেফারেন্স বই ব্যবহার করা যায়।",
    icon: <FaFileLines />,
  },
  {
    title: "পত্রিকা ও ম্যাগাজিন",
    description:
      "সমসাময়িক খবর, বিজ্ঞান, শিক্ষা ও সাধারণ জ্ঞান বৃদ্ধির জন্য পত্রিকা ও ম্যাগাজিনের ব্যবস্থা রয়েছে।",
    icon: <FaNewspaper />,
  },
  {
    title: "নীরব পাঠ পরিবেশ",
    description:
      "লাইব্রেরিতে নীরবতা, শৃঙ্খলা ও মনোযোগী পাঠের পরিবেশ বজায় রাখা হয়।",
    icon: <FaRegClock />,
  },
  {
    title: "শিক্ষার্থী সহায়তা",
    description:
      "বই নির্বাচন, রেফারেন্স খোঁজা ও পাঠাভ্যাস তৈরিতে শিক্ষক ও লাইব্রেরি দায়িত্বপ্রাপ্তরা সহায়তা করেন।",
    icon: <FaPeopleGroup />,
  },
];

const libraryRules: RuleItem[] = [
  {
    title: "নীরবতা বজায় রাখা",
    description:
      "লাইব্রেরির ভেতরে উচ্চস্বরে কথা বলা যাবে না, যাতে অন্য শিক্ষার্থীদের পড়াশোনায় বিঘ্ন না ঘটে।",
    icon: <FaRegClock />,
  },
  {
    title: "বই যত্নসহকারে ব্যবহার",
    description:
      "বইয়ের পৃষ্ঠা ছেঁড়া, দাগ দেওয়া, ভাঁজ করা বা নষ্ট করা সম্পূর্ণ নিষিদ্ধ।",
    icon: <FaBook />,
  },
  {
    title: "সময়মতো বই ফেরত",
    description:
      "ধার নেওয়া বই নির্ধারিত সময়ের মধ্যে লাইব্রেরিতে ফেরত দিতে হবে।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "লাইব্রেরি কার্ড ব্যবহার",
    description:
      "বই ধার নেওয়া ও ফেরত দেওয়ার সময় লাইব্রেরি কার্ড বা শিক্ষার্থীর পরিচয় ব্যবহার করতে হবে।",
    icon: <FaUserGraduate />,
  },
];

const bookItems: BookItem[] = [
  {
    id: 1,
    bookName: "বাংলা ব্যাকরণ ও রচনা",
    category: "Text Book",
    author: "শিক্ষা বোর্ড",
    level: "ষষ্ঠ - দশম",
    status: "Available",
    fileUrl: "#",
  },
  {
    id: 2,
    bookName: "English Grammar Practice",
    category: "Reference",
    author: "Academic Panel",
    level: "ষষ্ঠ - দশম",
    status: "Available",
    fileUrl: "#",
  },
  {
    id: 3,
    bookName: "গণিত অনুশীলন সহায়িকা",
    category: "Text Book",
    author: "ম্যাথ টিম",
    level: "চতুর্থ - দশম",
    status: "Available",
    fileUrl: "#",
  },
  {
    id: 4,
    bookName: "বিজ্ঞান ও আবিষ্কার",
    category: "Science",
    author: "বিজ্ঞান লেখক দল",
    level: "ষষ্ঠ - দশম",
    status: "Available",
    fileUrl: "#",
  },
  {
    id: 5,
    bookName: "মুক্তিযুদ্ধের ইতিহাস",
    category: "History",
    author: "ইতিহাস গবেষণা দল",
    level: "সকল শ্রেণি",
    status: "Available",
    fileUrl: "#",
  },
  {
    id: 6,
    bookName: "সাধারণ জ্ঞান সংগ্রহ",
    category: "General Knowledge",
    author: "Knowledge Team",
    level: "তৃতীয় - দশম",
    status: "Available",
    fileUrl: "#",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "নিয়মিত লাইব্রেরিতে গিয়ে পাঠ্যবইয়ের পাশাপাশি গল্প, বিজ্ঞান, ইতিহাস ও সাধারণ জ্ঞানের বই পড়তে হবে।",
      "বই পরিষ্কার রাখতে হবে এবং বইয়ের কোনো অংশ নষ্ট করা যাবে না।",
      "লাইব্রেরির ভেতরে নীরবতা, শৃঙ্খলা ও পরিচ্ছন্নতা বজায় রাখতে হবে।",
      "ধার নেওয়া বই নির্ধারিত সময়ের মধ্যে ফেরত দিতে হবে।",
      "পড়া বই থেকে গুরুত্বপূর্ণ তথ্য নোট করে নিজের জ্ঞানভান্ডার সমৃদ্ধ করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানকে নিয়মিত বই পড়তে উৎসাহ দিন এবং বাসায় পাঠাভ্যাস তৈরিতে সহায়তা করুন।",
      "পাঠ্যবইয়ের পাশাপাশি গল্প, বিজ্ঞান, ইতিহাস ও শিক্ষামূলক বই পড়তে উৎসাহিত করুন।",
      "সন্তান লাইব্রেরি থেকে বই ধার নিলে সময়মতো ফেরত দেওয়ার বিষয়ে সচেতন করুন।",
      "মোবাইল বা স্ক্রিন টাইম কমিয়ে বই পড়ার সময় নির্ধারণে সহযোগিতা করুন।",
      "সন্তানের আগ্রহ অনুযায়ী উপযুক্ত বই নির্বাচন করতে শিক্ষক বা লাইব্রেরি দায়িত্বপ্রাপ্তদের পরামর্শ নিতে পারেন।",
    ],
  },
];

const LibraryPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            School Library
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            লাইব্রেরি
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থীদের পাঠাভ্যাস, জ্ঞানচর্চা, গবেষণা ও সৃজনশীল চিন্তা
            বিকাশে বিদ্যালয়ের লাইব্রেরি সুবিধা।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Library Overview */}
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
                  বই পড়া জ্ঞানের দরজা খুলে দেয়
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ের লাইব্রেরি শিক্ষার্থীদের জ্ঞানচর্চা, পাঠাভ্যাস,
                  গবেষণা, সৃজনশীল চিন্তা এবং ভাষা দক্ষতা বিকাশে গুরুত্বপূর্ণ
                  ভূমিকা রাখে। পাঠ্যবইয়ের পাশাপাশি গল্প, বিজ্ঞান, ইতিহাস,
                  ধর্মীয় শিক্ষা, সাধারণ জ্ঞান ও রেফারেন্স বই শিক্ষার্থীদের
                  শেখাকে আরও বিস্তৃত ও আনন্দদায়ক করে তোলে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Library */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Reading Culture
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  পাঠাভ্যাস গড়ে তুলতে লাইব্রেরির ভূমিকা
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  নিয়মিত বই পড়া শিক্ষার্থীর ভাষা দক্ষতা, চিন্তাশক্তি,
                  কল্পনাশক্তি ও আত্মবিশ্বাস বৃদ্ধি করে। বিদ্যালয়ের লাইব্রেরি
                  শিক্ষার্থীদের জন্য এমন একটি পরিবেশ তৈরি করে, যেখানে তারা
                  নিজের আগ্রহ অনুযায়ী বই নির্বাচন করে জ্ঞান অর্জন করতে পারে।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    বই: ৫০০০+
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    সময়: সকাল ৯টা - বিকাল ৩টা
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    সুবিধা: বই ধার
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaBookOpen />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Read More
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    বই পড়ার অভ্যাস শিক্ষার্থীর শেখাকে গভীর ও আনন্দদায়ক করে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Categories */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বইয়ের বিভাগ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Book Categories
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bookCategories.map((category) => (
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

      {/* Library Facilities */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                লাইব্রেরি সুবিধা
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Library Facilities
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {libraryFacilities.map((facility) => (
                <article
                  key={facility.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {facility.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {facility.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Library Rules */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              লাইব্রেরি নিয়ম
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Library Rules
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {libraryRules.map((rule) => (
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

      {/* Book List Table */}
      <section id="book-list" className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বইয়ের তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Book List Table
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
                      বইয়ের নাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিভাগ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      লেখক
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শ্রেণি / স্তর
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      অবস্থা
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      বিস্তারিত
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {bookItems.map((book) => (
                    <tr
                      key={book.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaBookOpen />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {book.bookName}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {book.category}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {book.author}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {book.level}
                      </td>

                      <td className="px-5 py-5 text-sm font-black text-secondary">
                        {book.status}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={book.fileUrl}
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
              {bookItems.map((book) => (
                <div
                  key={book.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {book.category}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {book.bookName}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaBookOpen />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">লেখক:</span>{" "}
                      {book.author}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">
                        শ্রেণি / স্তর:
                      </span>{" "}
                      {book.level}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">অবস্থা:</span>{" "}
                      {book.status}
                    </p>
                  </div>

                  <Link
                    href={book.fileUrl}
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
                  লাইব্রেরি শিক্ষার্থীর জ্ঞানের ভান্ডার
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  নিয়মিত বই পড়া শিক্ষার্থীর চিন্তা, ভাষা, কল্পনা ও নৈতিক
                  বোধকে সমৃদ্ধ করে। বিদ্যালয়ের লাইব্রেরি শুধু বই সংরক্ষণের
                  জায়গা নয়, এটি শিক্ষার্থীর জ্ঞান, গবেষণা ও সৃজনশীলতার বিকাশের
                  একটি গুরুত্বপূর্ণ কেন্দ্র।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Knowledge Hub
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    বই পড়ুন, জানুন, ভাবুন এবং নিজেকে সমৃদ্ধ করুন।
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

export default LibraryPage;