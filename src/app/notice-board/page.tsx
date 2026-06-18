import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBell,
  FaBullhorn,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaPeopleGroup,
  FaRegBell,
  FaSchoolFlag,
  FaTriangleExclamation,
  FaUserGraduate,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type NoticeCategory = {
  title: string;
  description: string;
  icon: ReactNode;
};

type NoticeItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  status: string;
  fileUrl: string;
};

type ImportantNotice = {
  title: string;
  date: string;
  description: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "মোট নোটিশ",
    value: "১২০+",
    icon: <FaFileLines />,
  },
  {
    title: "নতুন নোটিশ",
    value: "৮টি",
    icon: <FaBell />,
  },
  {
    title: "পরীক্ষা নোটিশ",
    value: "১৫+",
    icon: <FaClipboardCheck />,
  },
  {
    title: "ভর্তি নোটিশ",
    value: "৬+",
    icon: <FaGraduationCap />,
  },
];

const noticeCategories: NoticeCategory[] = [
  {
    title: "সাধারণ নোটিশ",
    description:
      "বিদ্যালয়ের দৈনন্দিন ঘোষণা, সময়সূচি, প্রশাসনিক তথ্য ও সাধারণ নির্দেশনা।",
    icon: <FaBullhorn />,
  },
  {
    title: "পরীক্ষা সংক্রান্ত নোটিশ",
    description:
      "পরীক্ষার সময়সূচি, আসন বিন্যাস, পরীক্ষার নিয়ম ও ফলাফল সংক্রান্ত ঘোষণা।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "ভর্তি নোটিশ",
    description:
      "নতুন ভর্তি, ফরম সংগ্রহ, ভর্তি পরীক্ষা ও ভর্তি ফলাফল সম্পর্কিত তথ্য।",
    icon: <FaGraduationCap />,
  },
  {
    title: "ফলাফল নোটিশ",
    description:
      "টার্ম পরীক্ষা, অর্ধবার্ষিক, বার্ষিক পরীক্ষা ও অন্যান্য মূল্যায়নের ফলাফল।",
    icon: <FaFileLines />,
  },
  {
    title: "ছুটির নোটিশ",
    description:
      "সরকারি ছুটি, ধর্মীয় ছুটি, বিশেষ ছুটি ও বিদ্যালয় নির্ধারিত ছুটির ঘোষণা।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "অনুষ্ঠান ও কার্যক্রম",
    description:
      "ক্রীড়া, সাংস্কৃতিক অনুষ্ঠান, অভিভাবক সভা ও সহশিক্ষা কার্যক্রমের আপডেট।",
    icon: <FaBullhorn />,
  },
];

const latestNotices: NoticeItem[] = [
  {
    id: 1,
    title: "প্রথম টার্ম পরীক্ষার সময়সূচি প্রকাশ",
    category: "পরীক্ষা",
    date: "১২ জানুয়ারি ২০২৬",
    status: "নতুন",
    fileUrl: "#",
  },
  {
    id: 2,
    title: "অভিভাবক-শিক্ষক সভার নোটিশ",
    category: "সভা",
    date: "১৫ জানুয়ারি ২০২৬",
    status: "গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 3,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতার প্রস্তুতি",
    category: "কার্যক্রম",
    date: "১৮ জানুয়ারি ২০২৬",
    status: "চলমান",
    fileUrl: "#",
  },
  {
    id: 4,
    title: "নতুন শিক্ষাবর্ষে ভর্তি কার্যক্রম",
    category: "ভর্তি",
    date: "২০ জানুয়ারি ২০২৬",
    status: "নতুন",
    fileUrl: "#",
  },
  {
    id: 5,
    title: "বিশেষ ছুটির ঘোষণা",
    category: "ছুটি",
    date: "২২ জানুয়ারি ২০২৬",
    status: "গুরুত্বপূর্ণ",
    fileUrl: "#",
  },
  {
    id: 6,
    title: "অর্ধবার্ষিক পরীক্ষার ফলাফল প্রকাশ",
    category: "ফলাফল",
    date: "২৫ জানুয়ারি ২০২৬",
    status: "প্রকাশিত",
    fileUrl: "#",
  },
];

const importantNotices: ImportantNotice[] = [
  {
    title: "পরীক্ষার হলে প্রবেশের সময় পরিবর্তন",
    date: "১০ জানুয়ারি ২০২৬",
    description:
      "পরীক্ষার দিন শিক্ষার্থীদের নির্ধারিত সময়ের কমপক্ষে ৩০ মিনিট আগে বিদ্যালয়ে উপস্থিত থাকতে হবে।",
  },
  {
    title: "অভিভাবক সভায় উপস্থিতির অনুরোধ",
    date: "১৫ জানুয়ারি ২০২৬",
    description:
      "শিক্ষার্থীর অগ্রগতি, উপস্থিতি ও আচরণ বিষয়ে আলোচনার জন্য অভিভাবকদের সভায় উপস্থিত থাকার অনুরোধ করা হচ্ছে।",
  },
  {
    title: "ইউনিফর্ম ও পরিচয়পত্র সংক্রান্ত নির্দেশনা",
    date: "২০ জানুয়ারি ২০২৬",
    description:
      "বিদ্যালয়ে প্রবেশের সময় শিক্ষার্থীদের পরিচ্ছন্ন ইউনিফর্ম ও পরিচয়পত্র ব্যবহার বাধ্যতামূলক।",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "প্রতিদিন নিয়মিত নোটিশ বোর্ড দেখে বিদ্যালয়ের নতুন ঘোষণা সম্পর্কে জানতে হবে।",
      "পরীক্ষা, ছুটি, ক্লাস সময়সূচি ও কার্যক্রমের তারিখ সতর্কতার সঙ্গে অনুসরণ করতে হবে।",
      "কোনো নোটিশ বুঝতে সমস্যা হলে শ্রেণি শিক্ষক বা বিদ্যালয় অফিসে যোগাযোগ করতে হবে।",
      "নোটিশে উল্লেখিত নির্দেশনা যথাসময়ে পালন করতে হবে।",
      "ডাউনলোড করা নোটিশ বা ফাইল ভালোভাবে সংরক্ষণ করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের বিদ্যালয় সংক্রান্ত আপডেট জানতে নিয়মিত নোটিশ বোর্ড দেখুন।",
      "পরীক্ষার তারিখ, ছুটি, অভিভাবক সভা ও জরুরি ঘোষণার নোটিশ অনুসরণ করুন।",
      "কোনো গুরুত্বপূর্ণ নোটিশ পেলে প্রয়োজনীয় প্রস্তুতি নিতে সন্তানকে সহযোগিতা করুন।",
      "নোটিশ সম্পর্কে কোনো প্রশ্ন থাকলে বিদ্যালয়ের অফিসিয়াল যোগাযোগ মাধ্যমে যোগাযোগ করুন।",
      "বিদ্যালয়ের নির্দেশনা অনুসরণ করে শিক্ষার্থীর নিয়মিত পড়াশোনা ও উপস্থিতি নিশ্চিত করুন।",
    ],
  },
];

const NoticeBoardPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            বিদ্যালয়ের আপডেট সমূহ
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            নোটিশ বোর্ড
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের গুরুত্বপূর্ণ ঘোষণা, পরীক্ষা, ছুটি, ভর্তি, ফলাফল ও
            অন্যান্য আপডেট এক জায়গায় দেখার জন্য এই পেজ তৈরি করা হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </section>

      {/* Notice Overview */}
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
                  বিদ্যালয়ের সকল গুরুত্বপূর্ণ ঘোষণা
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  নোটিশ বোর্ড বিদ্যালয়ের শিক্ষার্থী, অভিভাবক, শিক্ষক ও
                  সংশ্লিষ্ট সকলের জন্য গুরুত্বপূর্ণ তথ্য জানার নির্ভরযোগ্য
                  নিয়মিত প্রকাশ করা হবে। তাই সকলকে
                  নিয়মিত নোটিশ বোর্ড অনুসরণ করার জন্য অনুরোধ করা হচ্ছে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Categories */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              নোটিশ বিভাগ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              নোটিশের ক্যাটাগরি সমূহ
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {noticeCategories.map((category) => (
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

      {/* Important Notices */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  জরুরি ঘোষণা
                </p>

                <h2 className="mt-2 text-3xl font-black text-primary">
                  গুরুত্বপূর্ণ নোটিশ সমূহ
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-secondary px-4 py-2 text-sm font-black text-secondary">
                <FaTriangleExclamation className="text-brand-primary" />
                নিয়মিত আপডেট দেখুন
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {importantNotices.map((notice) => (
                <article
                  key={notice.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    <FaRegBell />
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {notice.title}
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary transition-colors duration-500 group-hover:text-inverse/90">
                    {notice.date}
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {notice.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Notices Table */}
      <section
        id="latest-notices"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              সর্বশেষ নোটিশ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              সর্বশেষ নোটিশ সমূহ
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
                      শিরোনাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিভাগ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      তারিখ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      অবস্থা
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ডাউনলোড
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {latestNotices.map((notice) => (
                    <tr
                      key={notice.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaBell />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {notice.title}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {notice.category}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {notice.date}
                      </td>

                      <td className="px-5 py-5 text-sm font-black text-secondary">
                        {notice.status}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={notice.fileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
                        >
                          ডাউনলোড করুন
                          <FaCloudArrowDown />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {latestNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {notice.category}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {notice.title}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaBell />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">তারিখ:</span>{" "}
                      {notice.date}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">অবস্থা:</span>{" "}
                      {notice.status}
                    </p>
                  </div>

                  <Link
                    href={notice.fileUrl}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-4 py-3 text-sm font-black text-inverse transition-all duration-500 hover:bg-color-secondary hover:text-primary"
                  >
                    ডাউনলোড করুন
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
                  সময়মতো নোটিশ অনুসরণ করুন
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  নোটিশ বোর্ড বিদ্যালয়ের গুরুত্বপূর্ণ তথ্য জানার প্রধান মাধ্যম।
                  শিক্ষার্থী, অভিভাবক ও শিক্ষক সবাই নিয়মিত নোটিশ বোর্ড অনুসরণ
                  করলে পরীক্ষা, ছুটি, সভা, ফলাফল ও অন্যান্য কার্যক্রম সম্পর্কে
                  সময়মতো প্রস্তুতি নেওয়া সহজ হয়।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    গুরুত্বপূর্ণ ঘোষণা
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    নিয়মিত নোটিশ দেখুন এবং বিদ্যালয়ের আপডেট সম্পর্কে সচেতন
                    থাকুন।
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

export default NoticeBoardPage;