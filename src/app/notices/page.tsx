import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBell,
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaMoneyBillWave,
  FaPeopleGroup,
  FaRegBell,
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
  description: string;
  icon: ReactNode;
};

type NoticeCategory = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type NoticeItem = {
  id: number;
  date: string;
  title: string;
  category: string;
  priority: string;
  fileUrl: string;
};

type ArchiveItem = {
  title: string;
  value: string;
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
    title: "মোট নোটিশ",
    value: "২৫+",
    description: "একাডেমিক, পরীক্ষা, ভর্তি ও প্রশাসনিক নোটিশ প্রকাশিত হয়েছে।",
    icon: <FaBell />,
  },
  {
    title: "নতুন নোটিশ",
    value: "৬টি",
    description: "সাম্প্রতিক গুরুত্বপূর্ণ আপডেট শিক্ষার্থী ও অভিভাবকদের জন্য।",
    icon: <FaRegBell />,
  },
  {
    title: "জরুরি নোটিশ",
    value: "৩টি",
    description: "সময়সীমা, পরীক্ষা ও ফি সংক্রান্ত জরুরি নির্দেশনা।",
    icon: <FaTriangleExclamation />,
  },
  {
    title: "ডাউনলোড ফাইল",
    value: "১২+",
    description: "পিডিএফ, বিজ্ঞপ্তি ও প্রয়োজনীয় ফাইল ডাউনলোডের সুবিধা।",
    icon: <FaCloudArrowDown />,
  },
];

const noticeCategories: NoticeCategory[] = [
  {
    title: "একাডেমিক নোটিশ",
    value: "৮টি",
    description:
      "ক্লাস রুটিন, পাঠ পরিকল্পনা, একাডেমিক নির্দেশনা এবং শ্রেণিভিত্তিক আপডেট এখানে প্রকাশ করা হয়।",
    icon: <FaBookOpen />,
  },
  {
    title: "পরীক্ষার নোটিশ",
    value: "৫টি",
    description:
      "পরীক্ষার তারিখ, সিলেবাস, আসন বিন্যাস, প্রবেশপত্র এবং ফলাফল সংক্রান্ত নোটিশ প্রকাশ করা হয়।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "ভর্তি নোটিশ",
    value: "৪টি",
    description:
      "ভর্তি আবেদন, আবেদন সময়সীমা, প্রয়োজনীয় ডকুমেন্ট এবং ভর্তি পরীক্ষার নির্দেশনা দেওয়া হয়।",
    icon: <FaGraduationCap />,
  },
  {
    title: "ফি নোটিশ",
    value: "৩টি",
    description:
      "মাসিক ফি, পরীক্ষার ফি, পেমেন্ট সময়সীমা এবং রশিদ সংক্রান্ত গুরুত্বপূর্ণ তথ্য প্রকাশ করা হয়।",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "ছুটির নোটিশ",
    value: "৩টি",
    description:
      "সরকারি ছুটি, বিদ্যালয় ঘোষিত ছুটি, বিশেষ দিবস ও একাডেমিক বিরতির তথ্য দেওয়া হয়।",
    icon: <FaUmbrellaBeach />,
  },
  {
    title: "অনুষ্ঠানের নোটিশ",
    value: "২টি",
    description:
      "সাংস্কৃতিক অনুষ্ঠান, ক্রীড়া প্রতিযোগিতা, অভিভাবক সভা এবং বিশেষ কার্যক্রমের নোটিশ প্রকাশ করা হয়।",
    icon: <FaRegCalendarDays />,
  },
];

const noticeItems: NoticeItem[] = [
  {
    id: 1,
    date: "১৫ জুন ২০২৬",
    title: "অর্ধবার্ষিক পরীক্ষার সময়সূচি প্রকাশ",
    category: "পরীক্ষা",
    priority: "জরুরি",
    fileUrl: "#",
  },
  {
    id: 2,
    date: "১২ জুন ২০২৬",
    title: "নতুন শিক্ষাবর্ষের ভর্তি আবেদন সংক্রান্ত নির্দেশনা",
    category: "ভর্তি",
    priority: "গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 3,
    date: "১০ জুন ২০২৬",
    title: "জুন মাসের বেতন ও পরীক্ষার ফি পরিশোধের নোটিশ",
    category: "ফি",
    priority: "গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 4,
    date: "০৮ জুন ২০২৬",
    title: "শ্রেণিভিত্তিক ক্লাস রুটিন আপডেট",
    category: "একাডেমিক",
    priority: "সাধারণ",
    fileUrl: "#",
  },
  {
    id: 5,
    date: "০৫ জুন ২০২৬",
    title: "অভিভাবক সভার তারিখ ও সময় ঘোষণা",
    category: "অনুষ্ঠান",
    priority: "গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 6,
    date: "০১ জুন ২০২৬",
    title: "ঈদুল আযহা উপলক্ষে বিদ্যালয় ছুটির নোটিশ",
    category: "ছুটি",
    priority: "সাধারণ",
    fileUrl: "#",
  },
];

const archiveItems: ArchiveItem[] = [
  {
    title: "পিডিএফ বিজ্ঞপ্তি",
    value: "ডাউনলোড",
    description:
      "গুরুত্বপূর্ণ নোটিশ পিডিএফ আকারে সংরক্ষণ ও ডাউনলোড করা যাবে।",
    icon: <FaFileLines />,
  },
  {
    title: "নোটিশ আর্কাইভ",
    value: "সংরক্ষণ",
    description:
      "পুরোনো নোটিশগুলো ক্যাটাগরি ও তারিখ অনুযায়ী সংরক্ষিত থাকবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "অফিস যাচাই",
    value: "যাচাই",
    description:
      "জরুরি তথ্য বা বিভ্রান্তি থাকলে বিদ্যালয় অফিস থেকে যাচাই করুন।",
    icon: <FaSchoolFlag />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "প্রতিদিন বিদ্যালয়ের নোটিশ বোর্ড ও ওয়েবসাইটের নোটিশ অংশ নিয়মিত দেখবে।",
      "পরীক্ষা, ক্লাস রুটিন, অ্যাসাইনমেন্ট ও ফি সংক্রান্ত নোটিশ গুরুত্বসহকারে অনুসরণ করবে।",
      "নোটিশে উল্লেখিত সময়সীমা, তারিখ ও নির্দেশনা খাতা বা ডায়েরিতে লিখে রাখবে।",
      "কোনো নোটিশ বুঝতে সমস্যা হলে শ্রেণি শিক্ষক বা অফিসে যোগাযোগ করবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের একাডেমিক অগ্রগতি, পরীক্ষা ও ফি সংক্রান্ত নোটিশ নিয়মিত অনুসরণ করুন।",
      "ভর্তি, ছুটি, অভিভাবক সভা ও জরুরি নির্দেশনা সময়মতো দেখে প্রয়োজনীয় ব্যবস্থা নিন।",
      "নোটিশে দেওয়া তারিখ ও সময়সীমা মিস না করার জন্য পরিবারে আলাদা করে নোট রাখুন।",
      "কোনো তথ্য সম্পর্কে সন্দেহ হলে বিদ্যালয় অফিসে ফোন বা সরাসরি যোগাযোগ করে যাচাই করুন।",
    ],
  },
];

const NoticesPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* উপরের অংশ */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            নোটিশসমূহ
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            নোটিশসমূহ
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের একাডেমিক, ভর্তি, পরীক্ষা, ফি, ছুটি, অনুষ্ঠান এবং
            প্রশাসনিক গুরুত্বপূর্ণ নোটিশ এখানে প্রকাশ করা হয়।
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </section>

      {/* সারসংক্ষেপ */}
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

      {/* ভূমিকা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                নোটিশ প্রকাশের পরিচিতি
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl lg:text-5xl">
                শিক্ষার্থী, অভিভাবক ও শিক্ষকদের জন্য নিয়মিত আপডেট
              </h2>

              <p className="mt-6 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                বিদ্যালয়ের নোটিশ পেজ শিক্ষার্থী, অভিভাবক, শিক্ষক এবং
                দর্শনার্থীদের জন্য গুরুত্বপূর্ণ তথ্য জানার প্রধান মাধ্যম।
                পরীক্ষা, ভর্তি, ফি, ছুটি, অনুষ্ঠান, একাডেমিক রুটিন এবং
                প্রশাসনিক নির্দেশনা নিয়মিতভাবে এখানে প্রকাশ করা হয়।
              </p>

              <p className="mt-4 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                সময়মতো নোটিশ অনুসরণ করলে শিক্ষার্থীরা পরীক্ষার প্রস্তুতি,
                ক্লাস কার্যক্রম, ফি পরিশোধ এবং বিদ্যালয়ের গুরুত্বপূর্ণ
                কার্যক্রম সম্পর্কে সঠিক ধারণা পায়। তাই নিয়মিত নোটিশ দেখা
                শিক্ষার্থী ও অভিভাবক উভয়ের জন্য গুরুত্বপূর্ণ।
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-5">
                <Image
                  src="/assets/3.jpg"
                  alt="বিদ্যালয়ের নোটিশ"
                  width={900}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[360px] w-full rounded-[24px] object-cover"
                />

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">
                      নিয়মিত আপডেট
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      বিদ্যালয়ের প্রয়োজনীয় তথ্য নিয়মিত প্রকাশ করা হয়।
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">
                      সহজ প্রবেশাধিকার
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      শিক্ষার্থী ও অভিভাবক সহজেই তথ্য দেখতে পারেন।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* সর্বশেষ নোটিশ হাইলাইট */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaTriangleExclamation className="text-sm" />
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  সর্বশেষ নোটিশ হাইলাইট
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                অর্ধবার্ষিক পরীক্ষার সময়সূচি প্রকাশিত হয়েছে
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                শিক্ষার্থীদের জানানো যাচ্ছে যে অর্ধবার্ষিক পরীক্ষার সময়সূচি
                প্রকাশ করা হয়েছে। পরীক্ষার রুটিন, সিলেবাস এবং প্রয়োজনীয়
                নির্দেশনা ভালোভাবে অনুসরণ করতে হবে। অভিভাবকদের অনুরোধ করা
                হচ্ছে সন্তানের প্রস্তুতি ও উপস্থিতি নিশ্চিত করতে।
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "পরীক্ষা শুরু: ২০ জুন",
                  "রুটিন প্রকাশিত",
                  "সিলেবাস অনুসরণ",
                  "প্রবেশপত্র আবশ্যক",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-inverse"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaBell />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  গুরুত্বপূর্ণ নোটিশ
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  জরুরি নোটিশ সময়মতো দেখে প্রয়োজনীয় ব্যবস্থা গ্রহণ করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ক্যাটাগরি */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              নোটিশ ক্যাটাগরি
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              নোটিশ ক্যাটাগরিসমূহ
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              নোটিশগুলো বিষয়ভিত্তিক ক্যাটাগরিতে সাজানো থাকে, যাতে প্রয়োজনীয়
              তথ্য দ্রুত খুঁজে পাওয়া যায়।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {noticeCategories.map((item) => (
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

      {/* নোটিশ টেবিল */}
      <section
        id="notice-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              নোটিশ তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              সর্বশেষ নোটিশ তালিকা
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              সর্বশেষ প্রকাশিত নোটিশগুলো নিচের তালিকায় উপস্থাপন করা হলো।
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-soft bg-page-primary shadow-sm">
            <div className="hidden lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-soft bg-page-secondary">
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      তারিখ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      নোটিশ শিরোনাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিভাগ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      অগ্রাধিকার
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ফাইল
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {noticeItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-color-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.date}
                        </span>
                      </td>

                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                            <FaFileLines />
                          </span>
                          <p className="text-sm font-black text-primary">
                            {item.title}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.category}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-color-primary px-3 py-2 text-xs font-black text-inverse">
                          {item.priority}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={item.fileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:opacity-90"
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
              {noticeItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.date}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-primary">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                      <FaFileLines />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">বিভাগ:</span>{" "}
                      {item.category}
                    </p>
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">
                        অগ্রাধিকার:
                      </span>{" "}
                      {item.priority}
                    </p>
                  </div>

                  <Link
                    href={item.fileUrl}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-4 py-3 text-sm font-black text-inverse transition-all duration-500 hover:opacity-90"
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

      {/* আর্কাইভ অংশ */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-4">
              <Image
                src="/assets/4.jpg"
                alt="নোটিশ আর্কাইভ"
                width={900}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[360px] w-full rounded-[24px] object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                ডাউনলোড ও আর্কাইভ
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                পুরোনো নোটিশ সংরক্ষণ ও প্রয়োজনীয় ফাইল ডাউনলোড সুবিধা
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                গুরুত্বপূর্ণ নোটিশ পিডিএফ বা বিজ্ঞপ্তি আকারে সংরক্ষণ করা হলে
                শিক্ষার্থী ও অভিভাবক পরবর্তীতে সহজেই তথ্য যাচাই করতে পারেন।
                বিশেষ করে পরীক্ষা, ভর্তি ও ফি সংক্রান্ত নোটিশ সংরক্ষণ করা খুব
                জরুরি।
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {archiveItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[20px] border border-soft bg-page-secondary p-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                      {item.icon}
                    </div>
                    <p className="mt-4 text-sm font-black text-brand-primary">
                      {item.value}
                    </p>
                    <h3 className="mt-1 font-black text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* নির্দেশনা */}
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

      {/* সমাপনী */}
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
                নিয়মিত নোটিশ অনুসরণ করুন, সময়মতো প্রস্তুত থাকুন
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের সব গুরুত্বপূর্ণ ঘোষণা, পরীক্ষার সময়সূচি, ভর্তি
                নির্দেশনা, ফি, ছুটি এবং অনুষ্ঠান সংক্রান্ত তথ্য নিয়মিত নোটিশে
                প্রকাশ করা হয়। তাই শিক্ষার্থী ও অভিভাবকদের নিয়মিত নোটিশ
                অনুসরণ করার অনুরোধ করা হচ্ছে।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaBell />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  নিয়মিত আপডেট থাকুন
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  নিয়মিত নোটিশ দেখে শিক্ষার প্রতিটি ধাপে প্রস্তুত থাকুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NoticesPage;