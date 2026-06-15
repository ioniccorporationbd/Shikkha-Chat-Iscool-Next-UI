import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaComputer,
  FaFileLines,
  FaFlask,
  FaGraduationCap,
  FaMasksTheater,
  FaPeopleGroup,
  FaPersonRunning,
  FaRegBell,
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

type NewsItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  fileUrl: string;
};

type EventItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
};

type CategoryItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type AchievementItem = {
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
    title: "মোট সংবাদ",
    value: "৮০+",
    icon: <FaFileLines />,
  },
  {
    title: "আসন্ন অনুষ্ঠান",
    value: "১২+",
    icon: <FaCalendarCheck />,
  },
  {
    title: "শিক্ষার্থী অর্জন",
    value: "২৫+",
    icon: <FaTrophy />,
  },
  {
    title: "সাম্প্রতিক আপডেট",
    value: "১০+",
    icon: <FaRegBell />,
  },
];

const latestNews: NewsItem[] = [
  {
    id: 1,
    title: "প্রথম টার্ম পরীক্ষার সময়সূচি প্রকাশ",
    category: "পরীক্ষা",
    date: "১২ জানুয়ারি ২০২৬",
    description:
      "প্রথম টার্ম পরীক্ষার সময়সূচি প্রকাশ করা হয়েছে। শিক্ষার্থীদের নির্ধারিত সময়সূচি অনুযায়ী প্রস্তুতি নেওয়ার জন্য নির্দেশ দেওয়া হচ্ছে।",
    fileUrl: "#",
  },
  {
    id: 2,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতার প্রস্তুতি শুরু",
    category: "ক্রীড়া",
    date: "১৫ জানুয়ারি ২০২৬",
    description:
      "বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতার প্রস্তুতি শুরু হয়েছে। আগ্রহী শিক্ষার্থীদের শ্রেণি শিক্ষকের সঙ্গে যোগাযোগ করতে বলা হচ্ছে।",
    fileUrl: "#",
  },
  {
    id: 3,
    title: "বিজ্ঞান মেলায় শিক্ষার্থীদের অংশগ্রহণ",
    category: "বিজ্ঞান",
    date: "১৮ জানুয়ারি ২০২৬",
    description:
      "বিদ্যালয়ের শিক্ষার্থীরা বিজ্ঞান মেলায় অংশগ্রহণ করে সৃজনশীল প্রজেক্ট প্রদর্শন করেছে এবং প্রশংসা অর্জন করেছে।",
    fileUrl: "#",
  },
  {
    id: 4,
    title: "অভিভাবক-শিক্ষক সভার ঘোষণা",
    category: "সভা",
    date: "২০ জানুয়ারি ২০২৬",
    description:
      "শিক্ষার্থীদের অগ্রগতি, উপস্থিতি ও আচরণ বিষয়ে আলোচনা করার জন্য অভিভাবক-শিক্ষক সভার আয়োজন করা হয়েছে।",
    fileUrl: "#",
  },
  {
    id: 5,
    title: "সাংস্কৃতিক অনুষ্ঠানের নিবন্ধন শুরু",
    category: "সাংস্কৃতিক",
    date: "২২ জানুয়ারি ২০২৬",
    description:
      "গান, নৃত্য, আবৃত্তি ও নাটকে অংশগ্রহণের জন্য শিক্ষার্থীদের নিবন্ধন শুরু হয়েছে।",
    fileUrl: "#",
  },
  {
    id: 6,
    title: "নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম",
    category: "ভর্তি",
    date: "২৫ জানুয়ারি ২০২৬",
    description:
      "নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হয়েছে। ভর্তি ফরম ও প্রয়োজনীয় তথ্য বিদ্যালয় অফিস থেকে সংগ্রহ করা যাবে।",
    fileUrl: "#",
  },
];

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    category: "Sports Event",
    date: "০৫ ফেব্রুয়ারি ২০২৬",
    time: "সকাল ৯:০০টা",
    venue: "বিদ্যালয় মাঠ",
  },
  {
    id: 2,
    title: "সাংস্কৃতিক অনুষ্ঠান",
    category: "Cultural Event",
    date: "১২ ফেব্রুয়ারি ২০২৬",
    time: "সকাল ১০:০০টা",
    venue: "বিদ্যালয় অডিটোরিয়াম",
  },
  {
    id: 3,
    title: "বিজ্ঞান মেলা",
    category: "Science Event",
    date: "২০ ফেব্রুয়ারি ২০২৬",
    time: "সকাল ৯:৩০টা",
    venue: "বিজ্ঞান ল্যাব",
  },
  {
    id: 4,
    title: "অভিভাবক-শিক্ষক সভা",
    category: "Parent Meeting",
    date: "২৫ ফেব্রুয়ারি ২০২৬",
    time: "দুপুর ১২:০০টা",
    venue: "বিদ্যালয় হলরুম",
  },
];

const eventCategories: CategoryItem[] = [
  {
    title: "Academic Events",
    description:
      "পরীক্ষা, ফলাফল, ক্লাস কার্যক্রম, সেমিনার ও শিক্ষাবিষয়ক গুরুত্বপূর্ণ আয়োজন।",
    icon: <FaBookOpen />,
  },
  {
    title: "Cultural Events",
    description:
      "গান, নৃত্য, আবৃত্তি, নাটক ও সাংস্কৃতিক পরিবেশনার মাধ্যমে শিক্ষার্থীদের প্রতিভা বিকাশ।",
    icon: <FaMasksTheater />,
  },
  {
    title: "Sports Events",
    description:
      "বার্ষিক ক্রীড়া, দলীয় খেলা ও শারীরিক সক্ষমতা বৃদ্ধির বিভিন্ন প্রতিযোগিতা।",
    icon: <FaPersonRunning />,
  },
  {
    title: "Science & ICT Events",
    description:
      "বিজ্ঞান মেলা, প্রযুক্তি প্রদর্শনী, আইসিটি প্রজেক্ট ও উদ্ভাবনী কার্যক্রম।",
    icon: <FaFlask />,
  },
  {
    title: "National Day Programs",
    description:
      "জাতীয় দিবস, বিশেষ দিবস ও সামাজিক সচেতনতামূলক কর্মসূচি পালন।",
    icon: <FaSchoolFlag />,
  },
  {
    title: "Parent Meetings",
    description:
      "অভিভাবক-শিক্ষক সভা, শিক্ষার্থীর অগ্রগতি আলোচনা ও পরামর্শমূলক কার্যক্রম।",
    icon: <FaPeopleGroup />,
  },
];

const achievements: AchievementItem[] = [
  {
    title: "বিজ্ঞান মেলায় সাফল্য",
    description:
      "শিক্ষার্থীরা সৃজনশীল বিজ্ঞান প্রজেক্ট প্রদর্শন করে প্রশংসা অর্জন করেছে।",
    icon: <FaFlask />,
  },
  {
    title: "ক্রীড়া প্রতিযোগিতায় পুরস্কার",
    description:
      "বিদ্যালয়ের শিক্ষার্থীরা আন্তঃস্কুল ক্রীড়া প্রতিযোগিতায় ভালো ফলাফল করেছে।",
    icon: <FaTrophy />,
  },
  {
    title: "বিতর্কে অসাধারণ পারফরম্যান্স",
    description:
      "বিতর্ক প্রতিযোগিতায় শিক্ষার্থীরা যুক্তি, ভাষা ও আত্মবিশ্বাসের পরিচয় দিয়েছে।",
    icon: <FaAward />,
  },
  {
    title: "আইসিটি প্রজেক্ট প্রদর্শনী",
    description:
      "আইসিটি ক্লাবের শিক্ষার্থীরা প্রযুক্তিনির্ভর প্রজেক্ট উপস্থাপন করেছে।",
    icon: <FaComputer />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "বিদ্যালয়ের সংবাদ ও ইভেন্ট আপডেট নিয়মিত দেখতে হবে।",
      "নির্ধারিত সময় অনুযায়ী অনুষ্ঠান, প্রতিযোগিতা ও কার্যক্রমে অংশগ্রহণ করতে হবে।",
      "যেকোনো ইভেন্টে অংশগ্রহণের আগে শ্রেণি শিক্ষক বা দায়িত্বপ্রাপ্ত শিক্ষকের নির্দেশনা নিতে হবে।",
      "অনুষ্ঠানের সময় শৃঙ্খলা, সময়ানুবর্তিতা ও বিদ্যালয়ের নিয়মনীতি মেনে চলতে হবে।",
      "জয়-পরাজয়কে স্বাভাবিকভাবে গ্রহণ করে শেখার মানসিকতা রাখতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "বিদ্যালয়ের সংবাদ, অনুষ্ঠান ও গুরুত্বপূর্ণ আপডেট নিয়মিত দেখুন।",
      "সন্তানের আগ্রহ ও প্রতিভা অনুযায়ী বিদ্যালয়ের কার্যক্রমে অংশগ্রহণে উৎসাহ দিন।",
      "অনুষ্ঠান বা প্রতিযোগিতার জন্য প্রয়োজনীয় প্রস্তুতিতে সন্তানকে সহযোগিতা করুন।",
      "অভিভাবক সভা ও বিদ্যালয়ের গুরুত্বপূর্ণ অনুষ্ঠানে অংশগ্রহণের চেষ্টা করুন।",
      "কোনো ইভেন্ট বা ঘোষণার বিষয়ে প্রশ্ন থাকলে বিদ্যালয়ের অফিসিয়াল মাধ্যমে যোগাযোগ করুন।",
    ],
  },
];

const NewsAndEventsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            School Updates
          </p>

          <h1 className="mt-5 text-[36px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            সংবাদ ও অনুষ্ঠান
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের সর্বশেষ সংবাদ, গুরুত্বপূর্ণ ঘোষণা, অনুষ্ঠান,
            প্রতিযোগিতা ও শিক্ষার্থীদের অর্জন এক জায়গায় দেখার জন্য এই পেজ
            তৈরি করা হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Overview */}
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
                  বিদ্যালয়ের সংবাদ ও কার্যক্রম
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  সংবাদ ও অনুষ্ঠান পেজে বিদ্যালয়ের নিয়মিত আপডেট, অনুষ্ঠান,
                  প্রতিযোগিতা, শিক্ষার্থীদের অর্জন, অভিভাবক সভা এবং গুরুত্বপূর্ণ
                  কার্যক্রমের তথ্য প্রকাশ করা হয়। শিক্ষার্থী, অভিভাবক ও শিক্ষকরা
                  এই পেজ থেকে বিদ্যালয়ের সাম্প্রতিক খবর ও আসন্ন আয়োজন সম্পর্কে
                  সহজে জানতে পারবেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />
                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Featured Event
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠান ২০২৬
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  শিক্ষার্থীদের প্রতিভা, আত্মবিশ্বাস, দলগত কাজ এবং সৃজনশীলতা
                  বিকাশের লক্ষ্যে বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন
                  করা হচ্ছে। সকল শিক্ষার্থী, অভিভাবক ও শিক্ষককে অনুষ্ঠানে
                  অংশগ্রহণের জন্য আমন্ত্রণ জানানো হচ্ছে।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    তারিখ: ০৫ ফেব্রুয়ারি ২০২৬
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    স্থান: বিদ্যালয় মাঠ
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaTrophy />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Annual Event
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    ক্রীড়া, সংস্কৃতি ও শিক্ষার্থীদের প্রতিভা বিকাশের বিশেষ
                    আয়োজন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              সর্বশেষ সংবাদ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Latest News
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news) => (
              <article
                key={news.id}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      {news.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                      {news.title}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                    <FaRegBell />
                  </div>
                </div>

                <p className="mt-4 text-sm font-black text-brand-primary">
                  {news.date}
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {news.description}
                </p>

                <Link
                  href={news.fileUrl}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-5 py-3 text-sm font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
                >
                  বিস্তারিত দেখুন
                  <FaCloudArrowDown />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                আসন্ন অনুষ্ঠান
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Upcoming Events
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="overflow-hidden rounded-[26px] border border-soft bg-page-secondary">
              <div className="hidden lg:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-soft bg-page-primary">
                      <th className="px-5 py-4 text-left text-sm font-black text-primary">
                        অনুষ্ঠান
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-black text-primary">
                        বিভাগ
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-black text-primary">
                        তারিখ
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-black text-primary">
                        সময়
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-black text-primary">
                        স্থান
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {upcomingEvents.map((event) => (
                      <tr
                        key={event.id}
                        className="border-b border-soft transition-all duration-500 hover:bg-page-primary"
                      >
                        <td className="px-5 py-5 text-sm font-black text-primary">
                          {event.title}
                        </td>

                        <td className="px-5 py-5">
                          <span className="inline-flex items-center rounded-full bg-page-primary px-3 py-2 text-xs font-black text-brand-primary">
                            {event.category}
                          </span>
                        </td>

                        <td className="px-5 py-5 text-sm font-bold text-secondary">
                          {event.date}
                        </td>

                        <td className="px-5 py-5 text-sm font-bold text-secondary">
                          {event.time}
                        </td>

                        <td className="px-5 py-5 text-sm font-bold text-secondary">
                          {event.venue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-[22px] border border-soft bg-page-primary p-4"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      {event.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                      {event.title}
                    </h3>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-semibold text-secondary">
                        <span className="font-black text-primary">তারিখ:</span>{" "}
                        {event.date}
                      </p>

                      <p className="text-sm font-semibold text-secondary">
                        <span className="font-black text-primary">সময়:</span>{" "}
                        {event.time}
                      </p>

                      <p className="text-sm font-semibold text-secondary">
                        <span className="font-black text-primary">স্থান:</span>{" "}
                        {event.venue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ইভেন্ট বিভাগ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Event Categories
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eventCategories.map((category) => (
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

      {/* Achievements */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                শিক্ষার্থীদের অর্জন
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Student Achievements
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((item) => (
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
                  বিদ্যালয়ের প্রতিটি সংবাদ ও অনুষ্ঠান শিক্ষার অংশ
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  সংবাদ ও অনুষ্ঠান শিক্ষার্থী, অভিভাবক ও শিক্ষকদের বিদ্যালয়ের
                  কার্যক্রমের সঙ্গে সংযুক্ত রাখে। নিয়মিত আপডেট অনুসরণ করলে
                  শিক্ষার্থীরা বিভিন্ন সুযোগ, প্রতিযোগিতা ও গুরুত্বপূর্ণ
                  কার্যক্রমে সময়মতো অংশগ্রহণ করতে পারে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    School Events
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    বিদ্যালয়ের সংবাদ, অনুষ্ঠান ও অর্জন নিয়মিত অনুসরণ করুন।
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

export default NewsAndEventsPage;