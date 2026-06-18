import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaCalendarDays,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFlag,
  FaGraduationCap,
  FaPeopleGroup,
  FaRegBell,
  FaRegClock,
  FaSchoolFlag,
  FaStar,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type MonthlySchedule = {
  month: string;
  activities: string[];
};

type ImportantDate = {
  id: number;
  title: string;
  date: string;
  type: string;
};

type ExamSchedule = {
  id: number;
  className: string;
  examName: string;
  startDate: string;
  endDate: string;
  resultDate: string;
};

type HolidayItem = {
  id: number;
  title: string;
  date: string;
  category: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "শিক্ষাবর্ষ",
    value: "২০২৬",
    icon: <FaCalendarDays />,
  },
  {
    title: "মোট কার্যদিবস",
    value: "২২০+",
    icon: <FaRegClock />,
  },
  {
    title: "পরীক্ষা",
    value: "৪টি",
    icon: <FaClipboardCheck />,
  },
  {
    title: "সহশিক্ষা কার্যক্রম",
    value: "১২+",
    icon: <FaTrophy />,
  },
];

const monthlySchedules: MonthlySchedule[] = [
  {
    month: "জানুয়ারি",
    activities: [
      "নতুন শিক্ষাবর্ষের ক্লাস শুরু",
      "বই বিতরণ ও পরিচিতি ক্লাস",
      "শিক্ষার্থী তথ্য হালনাগাদ",
    ],
  },
  {
    month: "ফেব্রুয়ারি",
    activities: [
      "নিয়মিত ক্লাস ও সাপ্তাহিক মূল্যায়ন",
      "আন্তর্জাতিক মাতৃভাষা দিবস পালন",
      "অভিভাবক-শিক্ষক যোগাযোগ কার্যক্রম",
    ],
  },
  {
    month: "মার্চ",
    activities: [
      "প্রথম শ্রেণি মূল্যায়ন",
      "স্বাধীনতা দিবস উদযাপন",
      "সহশিক্ষা কার্যক্রম ও সাংস্কৃতিক প্রস্তুতি",
    ],
  },
  {
    month: "এপ্রিল",
    activities: [
      "প্রথম টার্ম পরীক্ষা",
      "বৈশাখী অনুষ্ঠান",
      "পরীক্ষার খাতা মূল্যায়ন ও অগ্রগতি আলোচনা",
    ],
  },
  {
    month: "মে",
    activities: [
      "নিয়মিত ক্লাস ও অধ্যায়ভিত্তিক মূল্যায়ন",
      "বিজ্ঞান ও সৃজনশীল কার্যক্রম",
      "অভিভাবক সভা",
    ],
  },
  {
    month: "জুন",
    activities: [
      "অর্ধবার্ষিক পরীক্ষার প্রস্তুতি",
      "সিলেবাস পুনরালোচনা",
      "অর্ধবার্ষিক পরীক্ষা শুরু",
    ],
  },
  {
    month: "জুলাই",
    activities: [
      "অর্ধবার্ষিক পরীক্ষার ফলাফল প্রকাশ",
      "দুর্বল শিক্ষার্থীদের বিশেষ সহায়তা",
      "নতুন অধ্যায়ভিত্তিক পাঠদান শুরু",
    ],
  },
  {
    month: "আগস্ট",
    activities: [
      "জাতীয় শোক দিবস পালন",
      "নিয়মিত ক্লাস ও ক্লাস টেস্ট",
      "সহশিক্ষা কার্যক্রম",
    ],
  },
  {
    month: "সেপ্টেম্বর",
    activities: [
      "দ্বিতীয় টার্ম মূল্যায়ন",
      "ক্রীড়া প্রস্তুতি",
      "শিক্ষার্থীদের অগ্রগতি পর্যালোচনা",
    ],
  },
  {
    month: "অক্টোবর",
    activities: [
      "বার্ষিক পরীক্ষার প্রস্তুতি",
      "পাঠ পুনরালোচনা",
      "অভিভাবক-শিক্ষক সভা",
    ],
  },
  {
    month: "নভেম্বর",
    activities: [
      "বার্ষিক পরীক্ষা",
      "পরীক্ষা খাতা মূল্যায়ন",
      "পরবর্তী শ্রেণির প্রস্তুতিমূলক নির্দেশনা",
    ],
  },
  {
    month: "ডিসেম্বর",
    activities: [
      "বার্ষিক ফলাফল প্রকাশ",
      "পুরস্কার বিতরণী অনুষ্ঠান",
      "শীতকালীন ছুটি ও নতুন বছরের প্রস্তুতি",
    ],
  },
];

const importantDates: ImportantDate[] = [
  {
    id: 1,
    title: "নতুন শিক্ষাবর্ষের ক্লাস শুরু",
    date: "০১ জানুয়ারি ২০২৬",
    type: "একাডেমিক",
  },
  {
    id: 2,
    title: "প্রথম টার্ম পরীক্ষা",
    date: "১০ এপ্রিল ২০২৬",
    type: "পরীক্ষা",
  },
  {
    id: 3,
    title: "অর্ধবার্ষিক পরীক্ষা",
    date: "১৫ জুন ২০২৬",
    type: "পরীক্ষা",
  },
  {
    id: 4,
    title: "অভিভাবক-শিক্ষক সভা",
    date: "২০ জুলাই ২০২৬",
    type: "মিটিং",
  },
  {
    id: 5,
    title: "বার্ষিক পরীক্ষা",
    date: "০৫ নভেম্বর ২০২৬",
    type: "পরীক্ষা",
  },
  {
    id: 6,
    title: "বার্ষিক ফলাফল প্রকাশ",
    date: "২০ ডিসেম্বর ২০২৬",
    type: "ফলাফল",
  },
];

const examSchedules: ExamSchedule[] = [
  {
    id: 1,
    className: "প্রথম - তৃতীয় শ্রেণি",
    examName: "প্রথম টার্ম পরীক্ষা",
    startDate: "১০ এপ্রিল ২০২৬",
    endDate: "১৮ এপ্রিল ২০২৬",
    resultDate: "৩০ এপ্রিল ২০২৬",
  },
  {
    id: 2,
    className: "চতুর্থ - পঞ্চম শ্রেণি",
    examName: "অর্ধবার্ষিক পরীক্ষা",
    startDate: "১৫ জুন ২০২৬",
    endDate: "২৫ জুন ২০২৬",
    resultDate: "১০ জুলাই ২০২৬",
  },
  {
    id: 3,
    className: "ষষ্ঠ - অষ্টম শ্রেণি",
    examName: "দ্বিতীয় টার্ম পরীক্ষা",
    startDate: "০৮ সেপ্টেম্বর ২০২৬",
    endDate: "১৮ সেপ্টেম্বর ২০২৬",
    resultDate: "৩০ সেপ্টেম্বর ২০২৬",
  },
  {
    id: 4,
    className: "নবম - দশম শ্রেণি",
    examName: "বার্ষিক পরীক্ষা",
    startDate: "০৫ নভেম্বর ২০২৬",
    endDate: "২৫ নভেম্বর ২০২৬",
    resultDate: "২০ ডিসেম্বর ২০২৬",
  },
];

const holidayItems: HolidayItem[] = [
  {
    id: 1,
    title: "আন্তর্জাতিক মাতৃভাষা দিবস",
    date: "২১ ফেব্রুয়ারি ২০২৬",
    category: "জাতীয় দিবস",
  },
  {
    id: 2,
    title: "স্বাধীনতা দিবস",
    date: "২৬ মার্চ ২০২৬",
    category: "জাতীয় দিবস",
  },
  {
    id: 3,
    title: "ঈদুল ফিতর",
    date: "বিদ্যালয়ের নোটিশ অনুযায়ী",
    category: "ধর্মীয় ছুটি",
  },
  {
    id: 4,
    title: "ঈদুল আযহা",
    date: "বিদ্যালয়ের নোটিশ অনুযায়ী",
    category: "ধর্মীয় ছুটি",
  },
  {
    id: 5,
    title: "জাতীয় শোক দিবস",
    date: "১৫ আগস্ট ২০২৬",
    category: "জাতীয় দিবস",
  },
  {
    id: 6,
    title: "বিজয় দিবস",
    date: "১৬ ডিসেম্বর ২০২৬",
    category: "জাতীয় দিবস",
  },
];

const eventItems = [
  "বার্ষিক ক্রীড়া প্রতিযোগিতা",
  "সাংস্কৃতিক অনুষ্ঠান",
  "বিজ্ঞান মেলা",
  "বিতর্ক প্রতিযোগিতা",
  "জাতীয় দিবস উদযাপন",
  "অভিভাবক-শিক্ষক সভা",
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "একাডেমিক ক্যালেন্ডার নিয়মিত দেখে ক্লাস, পরীক্ষা ও কার্যক্রমের তারিখ সম্পর্কে সচেতন থাকতে হবে।",
      "পরীক্ষা, ক্লাস টেস্ট ও অ্যাসাইনমেন্টের আগে যথাযথ প্রস্তুতি নিতে হবে।",
      "বিদ্যালয়ের কোনো কার্যক্রম বা অনুষ্ঠানে অংশগ্রহণের আগে শিক্ষকের নির্দেশনা অনুসরণ করতে হবে।",
      "কোনো তারিখ পরিবর্তন হলে বিদ্যালয়ের অফিসিয়াল নোটিশ অনুসরণ করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের ক্লাস, পরীক্ষা, ছুটি ও বিদ্যালয়ের কার্যক্রমের তারিখ নিয়মিত পর্যবেক্ষণ করুন।",
      "পরীক্ষার সময় শিক্ষার্থী পড়াশোনার রুটিন ও প্রস্তুতিতে সহযোগিতা করুন।",
      "অভিভাবক সভা ও গুরুত্বপূর্ণ বিদ্যালয় কার্যক্রমে অংশগ্রহণ করুন।",
      "তারিখ পরিবর্তন বা নতুন ঘোষণা জানতে বিদ্যালয়ের নোটিশ নিয়মিত দেখুন।",
    ],
  },
];

const AcademicCalendarPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            একাডেমিক রুটিন
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            একাডেমিক ক্যালেন্ডার
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষাবর্ষের ক্লাস, পরীক্ষা, ছুটি, অনুষ্ঠান ও গুরুত্বপূর্ণ
            কার্যক্রমের সময়সূচি এক জায়গায় দেখার জন্য এই পেজ তৈরি করা হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </section>

      {/* Academic Year Overview */}
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
                  শিক্ষাবর্ষের পরিকল্পিত সময়সূচি
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  একাডেমিক ক্যালেন্ডার শিক্ষার্থী, শিক্ষক ও অভিভাবকদের জন্য
                  শিক্ষাবর্ষের গুরুত্বপূর্ণ কার্যক্রম সম্পর্কে পূর্ব ধারণা দেয়।
                  ক্লাস, পরীক্ষা, ছুটি, অভিভাবক সভা, সহশিক্ষা কার্যক্রম ও
                  ফলাফল প্রকাশের সম্ভাব্য সময়সূচি এই ক্যালেন্ডারে উল্লেখ থাকে।
                  এতে শিক্ষার্থীরা নিয়মিত প্রস্তুতি নিতে পারে এবং অভিভাবকরাও
                  সন্তানের পড়াশোনা ও কার্যক্রম পরিকল্পিতভাবে পর্যবেক্ষণ করতে
                  পারেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              মাসভিত্তিক সময়সূচি
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              মাসিক একাডেমিক ক্যালেন্ডার
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {monthlySchedules.map((item, index) => (
              <article
                key={item.month}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-color-secondary text-xl font-black text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      মাস
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-primary">
                      {item.month}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {item.activities.map((activity) => (
                    <div
                      key={activity}
                      className="flex gap-3 rounded-[18px] border border-soft bg-page-secondary p-4"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-color-primary text-[10px] text-inverse">
                        <FaCheck />
                      </span>

                      <p className="text-sm font-semibold leading-7 text-secondary">
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  গুরুত্বপূর্ণ তারিখ
                </p>

                <h2 className="mt-2 text-3xl font-black text-primary">
                  গুরুত্বপূর্ণ তারিখসমূহ
                </h2>
              </div>

              <Link
                href="#exam-schedule"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-color-primary px-5 py-3 text-sm font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
              >
                পরীক্ষার সময়সূচি
                <FaCalendarCheck />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {importantDates.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-[22px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary transition-colors duration-500 group-hover:text-inverse/80">
                        {item.type}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                      <FaRegBell />
                    </div>
                  </div>

                  <p className="mt-4 text-sm font-black text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exam Schedule */}
      <section
        id="exam-schedule"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              পরীক্ষা সময়সূচি
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              পরীক্ষার রুটিন
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
                      শ্রেণি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পরীক্ষা
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শুরু
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শেষ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      ফলাফল
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ডাউনলোড
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {examSchedules.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.className}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          <FaClipboardCheck />
                          {item.examName}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.startDate}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.endDate}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.resultDate}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href="#"
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
              {examSchedules.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.className}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-primary">
                        {item.examName}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaClipboardCheck />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">শুরু:</span>{" "}
                      {item.startDate}
                    </p>
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">শেষ:</span>{" "}
                      {item.endDate}
                    </p>
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">ফলাফল:</span>{" "}
                      {item.resultDate}
                    </p>
                  </div>

                  <Link
                    href="#"
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

      {/* Holidays and Events */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                ছুটির তালিকা
              </p>

              <h2 className="mt-2 text-3xl font-black text-primary">
                ছুটির তালিকা
              </h2>
            </div>

            <div className="space-y-4">
              {holidayItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[20px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaFlag />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.category}
                      </p>

                      <h3 className="mt-1 text-lg font-black text-primary">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-secondary">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                অনুষ্ঠান ও কার্যক্রম
              </p>

              <h2 className="mt-2 text-3xl font-black text-primary">
                অনুষ্ঠান ও কার্যক্রমসমূহ
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {eventItems.map((event) => (
                <div
                  key={event}
                  className="group rounded-[20px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color-secondary text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    <FaStar />
                  </div>

                  <h3 className="mt-4 text-lg font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {event}
                  </h3>
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
                  পরিকল্পিত শিক্ষাবর্ষই সফল শিক্ষার পথ
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  একাডেমিক ক্যালেন্ডার শিক্ষার্থী, শিক্ষক ও অভিভাবকদের
                  সারা বছরের শিক্ষা কার্যক্রম সম্পর্কে সুস্পষ্ট ধারণা দেয়।
                  সময়মতো প্রস্তুতি, নিয়মিত অংশগ্রহণ এবং বিদ্যালয়ের নির্দেশনা
                  অনুসরন করলে শিক্ষাবর্ষ আরও সুন্দর ও সফল হয়।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    শিক্ষা পরিকল্পনা
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    সময়সূচি মেনে চলা সফল শিক্ষাজীবনের গুরুত্বপূর্ণ অংশ।
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

export default AcademicCalendarPage;