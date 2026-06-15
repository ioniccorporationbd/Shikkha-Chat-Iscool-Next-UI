import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBell,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaMoon,
  FaPeopleGroup,
  FaRegCalendarDays,
  FaRegClock,
  FaSchoolFlag,
  FaStar,
  FaTriangleExclamation,
  FaUmbrellaBeach,
  FaUserGraduate,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type HolidayCategory = {
  title: string;
  description: string;
  icon: ReactNode;
};

type MonthlyHoliday = {
  month: string;
  holidays: string[];
};

type HolidayItem = {
  id: number;
  holidayName: string;
  type: string;
  date: string;
  day: string;
  note: string;
  fileUrl: string;
};

type ImportantNote = {
  title: string;
  description: string;
  icon: ReactNode;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "মোট ছুটি",
    value: "৬৫+",
    icon: <FaRegCalendarDays />,
  },
  {
    title: "সরকারি ছুটি",
    value: "২২+",
    icon: <FaSchoolFlag />,
  },
  {
    title: "ধর্মীয় ছুটি",
    value: "১৮+",
    icon: <FaMoon />,
  },
  {
    title: "বিদ্যালয় নির্ধারিত ছুটি",
    value: "২৫+",
    icon: <FaUmbrellaBeach />,
  },
];

const holidayCategories: HolidayCategory[] = [
  {
    title: "National Holidays",
    description:
      "জাতীয় দিবস, সরকারি ছুটি ও রাষ্ট্রীয় গুরুত্বপূর্ণ দিবস উপলক্ষে বিদ্যালয় বন্ধ থাকবে।",
    icon: <FaSchoolFlag />,
  },
  {
    title: "Religious Holidays",
    description:
      "ঈদ, পূজা, বড়দিন, বুদ্ধ পূর্ণিমা ও অন্যান্য ধর্মীয় উৎসব উপলক্ষে নির্ধারিত ছুটি।",
    icon: <FaMoon />,
  },
  {
    title: "School Vacations",
    description:
      "গ্রীষ্মকালীন ছুটি, শীতকালীন ছুটি ও শিক্ষাবর্ষের নির্ধারিত দীর্ঘ বিরতি।",
    icon: <FaUmbrellaBeach />,
  },
  {
    title: "Exam Breaks",
    description:
      "পরীক্ষা শেষে শিক্ষার্থীদের বিশ্রাম ও নতুন প্রস্তুতির জন্য নির্ধারিত বিরতি।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Special Holidays",
    description:
      "বিশেষ পরিস্থিতি, সরকারি নির্দেশনা বা বিদ্যালয় কর্তৃপক্ষের সিদ্ধান্ত অনুযায়ী ছুটি।",
    icon: <FaBell />,
  },
];

const monthlyHolidays: MonthlyHoliday[] = [
  {
    month: "জানুয়ারি",
    holidays: ["শীতকালীন ছুটি", "জাতীয় পাঠ্যপুস্তক উৎসব পরবর্তী বিরতি"],
  },
  {
    month: "ফেব্রুয়ারি",
    holidays: ["শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস"],
  },
  {
    month: "মার্চ",
    holidays: ["স্বাধীনতা দিবস", "শবেবরাত উপলক্ষে ছুটি"],
  },
  {
    month: "এপ্রিল",
    holidays: ["বাংলা নববর্ষ", "ঈদুল ফিতর উপলক্ষে ছুটি"],
  },
  {
    month: "মে",
    holidays: ["বুদ্ধ পূর্ণিমা", "মে দিবস"],
  },
  {
    month: "জুন",
    holidays: ["ঈদুল আযহা উপলক্ষে ছুটি", "গ্রীষ্মকালীন ছুটি"],
  },
  {
    month: "জুলাই",
    holidays: ["পরীক্ষা পরবর্তী বিরতি", "বিদ্যালয় নির্ধারিত বিশেষ ছুটি"],
  },
  {
    month: "আগস্ট",
    holidays: ["জাতীয় শোক দিবস", "সাপ্তাহিক ও বিশেষ ছুটি"],
  },
  {
    month: "সেপ্টেম্বর",
    holidays: ["মিলাদুন্নবী উপলক্ষে ছুটি"],
  },
  {
    month: "অক্টোবর",
    holidays: ["দুর্গাপূজা উপলক্ষে ছুটি"],
  },
  {
    month: "নভেম্বর",
    holidays: ["বার্ষিক পরীক্ষা প্রস্তুতি বিরতি"],
  },
  {
    month: "ডিসেম্বর",
    holidays: ["বিজয় দিবস", "শীতকালীন ছুটি", "বড়দিন উপলক্ষে ছুটি"],
  },
];

const holidayItems: HolidayItem[] = [
  {
    id: 1,
    holidayName: "শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস",
    type: "জাতীয় ছুটি",
    date: "২১ ফেব্রুয়ারি ২০২৬",
    day: "শনিবার",
    note: "বিদ্যালয়ে বিশেষ আলোচনা ও শ্রদ্ধা নিবেদন অনুষ্ঠিত হতে পারে।",
    fileUrl: "#",
  },
  {
    id: 2,
    holidayName: "স্বাধীনতা দিবস",
    type: "জাতীয় ছুটি",
    date: "২৬ মার্চ ২০২৬",
    day: "বৃহস্পতিবার",
    note: "জাতীয় দিবস উপলক্ষে বিদ্যালয়ের নির্ধারিত কর্মসূচি থাকতে পারে।",
    fileUrl: "#",
  },
  {
    id: 3,
    holidayName: "বাংলা নববর্ষ",
    type: "জাতীয় উৎসব",
    date: "১৪ এপ্রিল ২০২৬",
    day: "মঙ্গলবার",
    note: "সাংস্কৃতিক কার্যক্রম বিদ্যালয়ের নোটিশ অনুযায়ী অনুষ্ঠিত হবে।",
    fileUrl: "#",
  },
  {
    id: 4,
    holidayName: "ঈদুল ফিতর",
    type: "ধর্মীয় ছুটি",
    date: "চাঁদ দেখা সাপেক্ষে",
    day: "পরিবর্তনশীল",
    note: "সরকারি ঘোষণা অনুযায়ী ছুটির সময়সূচি নির্ধারিত হবে।",
    fileUrl: "#",
  },
  {
    id: 5,
    holidayName: "ঈদুল আযহা",
    type: "ধর্মীয় ছুটি",
    date: "চাঁদ দেখা সাপেক্ষে",
    day: "পরিবর্তনশীল",
    note: "সরকারি নির্দেশনা অনুযায়ী ছুটির তালিকা হালনাগাদ করা হবে।",
    fileUrl: "#",
  },
  {
    id: 6,
    holidayName: "দুর্গাপূজা",
    type: "ধর্মীয় ছুটি",
    date: "অক্টোবর ২০২৬",
    day: "নোটিশ অনুযায়ী",
    note: "বিদ্যালয়ের নোটিশ বোর্ডে বিস্তারিত সময়সূচি প্রকাশ করা হবে।",
    fileUrl: "#",
  },
  {
    id: 7,
    holidayName: "বার্ষিক পরীক্ষা পরবর্তী বিরতি",
    type: "পরীক্ষা বিরতি",
    date: "নভেম্বর ২০২৬",
    day: "নোটিশ অনুযায়ী",
    note: "পরীক্ষার সময়সূচি শেষে বিরতির তারিখ জানানো হবে।",
    fileUrl: "#",
  },
  {
    id: 8,
    holidayName: "বিজয় দিবস",
    type: "জাতীয় ছুটি",
    date: "১৬ ডিসেম্বর ২০২৬",
    day: "বুধবার",
    note: "জাতীয় কর্মসূচি ও বিদ্যালয়ের অনুষ্ঠান থাকতে পারে।",
    fileUrl: "#",
  },
  {
    id: 9,
    holidayName: "শীতকালীন ছুটি",
    type: "বিদ্যালয় ছুটি",
    date: "ডিসেম্বর ২০২৬",
    day: "নোটিশ অনুযায়ী",
    note: "চূড়ান্ত ছুটির সময়সূচি বিদ্যালয়ের অফিসিয়াল নোটিশে প্রকাশ করা হবে।",
    fileUrl: "#",
  },
];

const importantNotes: ImportantNote[] = [
  {
    title: "ধর্মীয় ছুটির তারিখ পরিবর্তন হতে পারে",
    description:
      "ঈদ, শবেবরাত ও অন্যান্য চাঁদ দেখা সাপেক্ষ ছুটির তারিখ সরকারি ঘোষণার ভিত্তিতে পরিবর্তন হতে পারে।",
    icon: <FaMoon />,
  },
  {
    title: "সরকারি নির্দেশনা অনুসরণ করা হবে",
    description:
      "শিক্ষা মন্ত্রণালয় বা সংশ্লিষ্ট কর্তৃপক্ষের নির্দেশনা অনুযায়ী ছুটির তালিকা হালনাগাদ করা হবে।",
    icon: <FaSchoolFlag />,
  },
  {
    title: "জরুরি নোটিশ প্রকাশ করা হবে",
    description:
      "ছুটির সময়সূচিতে কোনো পরিবর্তন হলে বিদ্যালয়ের নোটিশ বোর্ড ও অফিসিয়াল মাধ্যমে জানানো হবে।",
    icon: <FaTriangleExclamation />,
  },
  {
    title: "ছুটির পর উপস্থিতি জরুরি",
    description:
      "ছুটি শেষে নির্ধারিত দিনে শিক্ষার্থীদের সময়মতো বিদ্যালয়ে উপস্থিত থাকতে হবে।",
    icon: <FaRegClock />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "ছুটির সময় পড়াশোনার নিয়মিত রুটিন বজায় রাখতে হবে।",
      "শিক্ষক কর্তৃক দেওয়া হোমওয়ার্ক, অ্যাসাইনমেন্ট ও প্রজেক্ট সময়মতো সম্পন্ন করতে হবে।",
      "ছুটির পরে নির্ধারিত দিনে বিদ্যালয়ে উপস্থিত থাকতে হবে।",
      "দীর্ঘ ছুটির সময় বই পড়া, অনুশীলন ও সৃজনশীল কাজে সময় ব্যয় করতে হবে।",
      "ছুটির সময় নিরাপদ চলাফেরা ও অভিভাবকের নির্দেশনা মেনে চলতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের ছুটির সময় পড়াশোনা, বিশ্রাম ও বিনোদনের মধ্যে ভারসাম্য বজায় রাখতে সহায়তা করুন।",
      "বিদ্যালয়ের নোটিশ বোর্ড ও অফিসিয়াল আপডেট নিয়মিত অনুসরণ করুন।",
      "হোমওয়ার্ক, অ্যাসাইনমেন্ট ও পরীক্ষার প্রস্তুতি পর্যবেক্ষণ করুন।",
      "ছুটির পর সন্তানের নিয়মিত উপস্থিতি নিশ্চিত করুন।",
      "যেকোনো পরিবর্তিত ছুটির তথ্য বিদ্যালয়ের অফিস থেকে নিশ্চিত করুন।",
    ],
  },
];

const ListOfHolidaysPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Academic Schedule
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            ছুটির তালিকা
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষাবর্ষের সরকারি ছুটি, ধর্মীয় ছুটি, জাতীয় দিবস, পরীক্ষার
            পরবর্তী বিরতি এবং বিদ্যালয় নির্ধারিত ছুটির তালিকা।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Holiday Overview */}
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
                  শিক্ষাবর্ষের ছুটি পরিকল্পনা
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  ছুটির তালিকা শিক্ষার্থী, অভিভাবক ও শিক্ষকদের পুরো শিক্ষাবর্ষের
                  পরিকল্পনা করতে সহায়তা করে। জাতীয় দিবস, সরকারি ছুটি, ধর্মীয়
                  উৎসব, পরীক্ষা পরবর্তী বিরতি এবং বিদ্যালয় নির্ধারিত ছুটির
                  তথ্য এখানে সাজানো হয়েছে। কোনো ছুটির তারিখ পরিবর্তন হলে
                  বিদ্যালয়ের নোটিশ বোর্ডে হালনাগাদ তথ্য প্রকাশ করা হবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Categories */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ছুটির ধরন
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Holiday Categories
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {holidayCategories.map((category) => (
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

      {/* Monthly Holiday List */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                মাসভিত্তিক ছুটি
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Monthly Holiday List
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {monthlyHolidays.map((item) => (
                <article
                  key={item.month}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                      <FaCalendarCheck />
                    </div>

                    <h3 className="text-xl font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                      {item.month}
                    </h3>
                  </div>

                  <div className="mt-4 space-y-3">
                    {item.holidays.map((holiday) => (
                      <div
                        key={holiday}
                        className="flex gap-3 rounded-[18px] border border-soft bg-page-primary p-3 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-color-primary text-[9px] text-inverse">
                          <FaCheck />
                        </span>

                        <p className="text-sm font-semibold leading-6 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                          {holiday}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Table */}
      <section
        id="holiday-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বিস্তারিত তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Holiday Table
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
                      ছুটির নাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      ধরন
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      তারিখ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      দিন
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
                  {holidayItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaCalendarCheck />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {item.holidayName}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.type}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.date}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.day}
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
              {holidayItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.type}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {item.holidayName}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaCalendarCheck />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">তারিখ:</span>{" "}
                      {item.date}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">দিন:</span>{" "}
                      {item.day}
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

      {/* Important Notes */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              গুরুত্বপূর্ণ নির্দেশনা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Important Notes
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {importantNotes.map((note) => (
              <article
                key={note.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {note.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary">
                  {note.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {note.description}
                </p>
              </article>
            ))}
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
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    সমাপনী বার্তা
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  ছুটির সময়ও শেখার ধারাবাহিকতা বজায় রাখুন
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  ছুটি শিক্ষার্থীদের বিশ্রাম, পরিবারকে সময় দেওয়া এবং নতুন
                  উদ্যমে পড়াশোনায় ফেরার সুযোগ তৈরি করে। তবে ছুটির সময় নিয়মিত
                  পড়াশোনা, হোমওয়ার্ক সম্পন্ন করা এবং বিদ্যালয়ের আপডেট অনুসরণ
                  করলে শিক্ষার ধারাবাহিকতা বজায় থাকে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaRegCalendarDays />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Holiday Plan
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    ছুটির তালিকা দেখে পড়াশোনা, বিশ্রাম ও প্রস্তুতির পরিকল্পনা
                    করুন।
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

export default ListOfHolidaysPage;