"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaBookOpen,
  FaCalendarDays,
  FaCheck,
  FaCircleInfo,
  FaDownload,
  FaFileLines,
  FaGraduationCap,
  FaMagnifyingGlass,
  FaSchoolFlag,
} from "react-icons/fa6";

type SyllabusItem = {
  id: number;
  classId: number;
  className: string;
  subject: string;
  term: string;
  topics: string;
  fileUrl: string;
};

type SyllabusStat = {
  id: number;
  title: string;
  value: string;
  icon: React.ReactNode;
};

const toBanglaNumber = (value: string | number) =>
  value
    .toString()
    .replace(/\d/g, (digit) =>
      new Intl.NumberFormat("bn-BD", { useGrouping: false }).format(
        Number(digit)
      )
    );

const syllabusData: SyllabusItem[] = [
  {
    id: 1,
    classId: 1,
    className: "প্রথম শ্রেণি",
    subject: "বাংলা",
    term: "প্রথম সাময়িক",
    topics: "বর্ণ, শব্দ, বাক্য, ছড়া, গল্প ও সহজ পাঠ অনুশীলন",
    fileUrl: "/downloads/syllabus/class-1-bangla.pdf",
  },
  {
    id: 2,
    classId: 1,
    className: "প্রথম শ্রেণি",
    subject: "গণিত",
    term: "প্রথম সাময়িক",
    topics: "সংখ্যা পরিচিতি, গণনা, যোগ, বিয়োগ ও আকার চেনা",
    fileUrl: "/downloads/syllabus/class-1-math.pdf",
  },
  {
    id: 3,
    classId: 2,
    className: "দ্বিতীয় শ্রেণি",
    subject: "বাংলা",
    term: "অর্ধবার্ষিক",
    topics: "পাঠ, শব্দার্থ, বাক্য গঠন, ছোট গল্প ও অনুচ্ছেদ লেখা",
    fileUrl: "/downloads/syllabus/class-2-bangla.pdf",
  },
  {
    id: 4,
    classId: 2,
    className: "দ্বিতীয় শ্রেণি",
    subject: "গণিত",
    term: "অর্ধবার্ষিক",
    topics: "যোগ, বিয়োগ, গুণের প্রাথমিক ধারণা ও সমস্যা সমাধান",
    fileUrl: "/downloads/syllabus/class-2-math.pdf",
  },
  {
    id: 5,
    classId: 3,
    className: "তৃতীয় শ্রেণি",
    subject: "গণিত",
    term: "অর্ধবার্ষিক",
    topics: "যোগ, বিয়োগ, গুণ, ভাগ ও জ্যামিতির প্রাথমিক ধারণা",
    fileUrl: "/downloads/syllabus/class-3-math.pdf",
  },
  {
    id: 6,
    classId: 3,
    className: "তৃতীয় শ্রেণি",
    subject: "বাংলা",
    term: "বার্ষিক",
    topics: "গল্প, কবিতা, অনুচ্ছেদ, ব্যাকরণ ও পঠন দক্ষতা",
    fileUrl: "/downloads/syllabus/class-3-bangla.pdf",
  },
  {
    id: 7,
    classId: 4,
    className: "চতুর্থ শ্রেণি",
    subject: "বিজ্ঞান",
    term: "প্রথম সাময়িক",
    topics: "জীবজগৎ, পরিবেশ, পানি, বায়ু ও স্বাস্থ্যবিধি",
    fileUrl: "/downloads/syllabus/class-4-science.pdf",
  },
  {
    id: 8,
    classId: 4,
    className: "চতুর্থ শ্রেণি",
    subject: "ইংরেজি",
    term: "অর্ধবার্ষিক",
    topics: "শব্দভাণ্ডার, বাক্য গঠন, পাঠ অনুধাবন ও সহজ রচনা",
    fileUrl: "/downloads/syllabus/class-4-english.pdf",
  },
  {
    id: 9,
    classId: 5,
    className: "পঞ্চম শ্রেণি",
    subject: "বাংলাদেশ ও বিশ্বপরিচয়",
    term: "বার্ষিক",
    topics: "বাংলাদেশ, মুক্তিযুদ্ধ, সমাজ, সংস্কৃতি ও নাগরিক দায়িত্ব",
    fileUrl: "/downloads/syllabus/class-5-social.pdf",
  },
  {
    id: 10,
    classId: 5,
    className: "পঞ্চম শ্রেণি",
    subject: "গণিত",
    term: "বার্ষিক",
    topics: "ভগ্নাংশ, দশমিক, জ্যামিতি, পরিমাপ ও সমস্যা সমাধান",
    fileUrl: "/downloads/syllabus/class-5-math.pdf",
  },
  {
    id: 11,
    classId: 6,
    className: "ষষ্ঠ শ্রেণি",
    subject: "বাংলা",
    term: "প্রথম সাময়িক",
    topics: "গদ্য, পদ্য, ব্যাকরণ, অনুচ্ছেদ ও সৃজনশীল লিখন",
    fileUrl: "/downloads/syllabus/class-6-bangla.pdf",
  },
  {
    id: 12,
    classId: 6,
    className: "ষষ্ঠ শ্রেণি",
    subject: "গণিত",
    term: "অর্ধবার্ষিক",
    topics: "পূর্ণসংখ্যা, ভগ্নাংশ, অনুপাত, শতকরা ও জ্যামিতি",
    fileUrl: "/downloads/syllabus/class-6-math.pdf",
  },
  {
    id: 13,
    classId: 7,
    className: "সপ্তম শ্রেণি",
    subject: "বিজ্ঞান",
    term: "বার্ষিক",
    topics: "পদার্থ, জীববিজ্ঞান, শক্তি, পরিবেশ ও পরীক্ষণ",
    fileUrl: "/downloads/syllabus/class-7-science.pdf",
  },
  {
    id: 14,
    classId: 7,
    className: "সপ্তম শ্রেণি",
    subject: "ডিজিটাল প্রযুক্তি",
    term: "অর্ধবার্ষিক",
    topics: "কম্পিউটার ব্যবহার, তথ্য, নিরাপত্তা ও ডিজিটাল আচরণ",
    fileUrl: "/downloads/syllabus/class-7-digital-technology.pdf",
  },
  {
    id: 15,
    classId: 8,
    className: "অষ্টম শ্রেণি",
    subject: "ইতিহাস ও সামাজিক বিজ্ঞান",
    term: "বার্ষিক",
    topics: "ইতিহাস, সমাজ, সংস্কৃতি, অর্থনীতি ও নাগরিক জীবন",
    fileUrl: "/downloads/syllabus/class-8-social-science.pdf",
  },
  {
    id: 16,
    classId: 8,
    className: "অষ্টম শ্রেণি",
    subject: "ইংরেজি",
    term: "বার্ষিক",
    topics: "পাঠ অনুধাবন, ব্যাকরণ, লিখন, অনুবাদ ও কথোপকথন",
    fileUrl: "/downloads/syllabus/class-8-english.pdf",
  },
  {
    id: 17,
    classId: 9,
    className: "নবম শ্রেণি",
    subject: "বাংলা",
    term: "প্রথম সাময়িক",
    topics: "গদ্য, পদ্য, ব্যাকরণ, সৃজনশীল প্রশ্ন ও লিখন দক্ষতা",
    fileUrl: "/downloads/syllabus/class-9-bangla.pdf",
  },
  {
    id: 18,
    classId: 9,
    className: "নবম শ্রেণি",
    subject: "গণিত",
    term: "অর্ধবার্ষিক",
    topics: "বীজগণিত, জ্যামিতি, ত্রিকোণমিতি, পরিসংখ্যান ও সমস্যা সমাধান",
    fileUrl: "/downloads/syllabus/class-9-math.pdf",
  },
  {
    id: 19,
    classId: 10,
    className: "দশম শ্রেণি",
    subject: "বিজ্ঞান",
    term: "বার্ষিক",
    topics: "পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান ও ব্যবহারিক ধারণা",
    fileUrl: "/downloads/syllabus/class-10-science.pdf",
  },
  {
    id: 20,
    classId: 10,
    className: "দশম শ্রেণি",
    subject: "ইংরেজি",
    term: "বার্ষিক",
    topics: "পাঠ, ব্যাকরণ, রচনা, সারাংশ, চিঠি ও অনুচ্ছেদ",
    fileUrl: "/downloads/syllabus/class-10-english.pdf",
  },
  {
    id: 21,
    classId: 11,
    className: "একাদশ শ্রেণি",
    subject: "তথ্য ও যোগাযোগ প্রযুক্তি",
    term: "অর্ধবার্ষিক",
    topics: "তথ্যপ্রযুক্তি, সংখ্যা পদ্ধতি, ওয়েব ধারণা ও প্রোগ্রামিং ভিত্তি",
    fileUrl: "/downloads/syllabus/class-11-ict.pdf",
  },
  {
    id: 22,
    classId: 11,
    className: "একাদশ শ্রেণি",
    subject: "বাংলা",
    term: "বার্ষিক",
    topics: "সাহিত্য পাঠ, ব্যাকরণ, লিখন, অনুধাবন ও সৃজনশীল প্রশ্ন",
    fileUrl: "/downloads/syllabus/class-11-bangla.pdf",
  },
  {
    id: 23,
    classId: 12,
    className: "দ্বাদশ শ্রেণি",
    subject: "ইংরেজি",
    term: "নির্বাচনী",
    topics: "পাঠ অনুধাবন, ব্যাকরণ, রচনা, প্রতিবেদন ও অনুবাদ",
    fileUrl: "/downloads/syllabus/class-12-english.pdf",
  },
  {
    id: 24,
    classId: 12,
    className: "দ্বাদশ শ্রেণি",
    subject: "গণিত",
    term: "নির্বাচনী",
    topics: "ক্যালকুলাস, জ্যামিতি, বীজগণিত, সম্ভাবনা ও প্রয়োগমূলক সমস্যা",
    fileUrl: "/downloads/syllabus/class-12-math.pdf",
  },
];

const classOptions = [
  "সব শ্রেণি",
  "প্রথম শ্রেণি",
  "দ্বিতীয় শ্রেণি",
  "তৃতীয় শ্রেণি",
  "চতুর্থ শ্রেণি",
  "পঞ্চম শ্রেণি",
  "ষষ্ঠ শ্রেণি",
  "সপ্তম শ্রেণি",
  "অষ্টম শ্রেণি",
  "নবম শ্রেণি",
  "দশম শ্রেণি",
  "একাদশ শ্রেণি",
  "দ্বাদশ শ্রেণি",
];

const termOptions = [
  "সব টার্ম",
  "প্রথম সাময়িক",
  "অর্ধবার্ষিক",
  "বার্ষিক",
  "নির্বাচনী",
];

const stats: SyllabusStat[] = [
  {
    id: 1,
    title: "মোট সিলেবাস",
    value: toBanglaNumber(syllabusData.length),
    icon: <FaFileLines />,
  },
  {
    id: 2,
    title: "শ্রেণি",
    value: "১২",
    icon: <FaGraduationCap />,
  },
  {
    id: 3,
    title: "বিষয়",
    value: "৮+",
    icon: <FaBookOpen />,
  },
  {
    id: 4,
    title: "টার্ম",
    value: "৪",
    icon: <FaCalendarDays />,
  },
];

function SyllabusCard({ item }: { item: SyllabusItem }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-color-secondary text-xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
          <FaFileLines />
        </div>

        <span className="rounded-full bg-color-secondary px-4 py-2 text-xs font-black text-brand-primary">
          {item.term}
        </span>
      </div>

      <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">
        {item.className}
      </p>

      <h3 className="mt-3 text-xl font-black leading-snug text-primary">
        {item.subject}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm font-semibold leading-7 text-secondary">
        {item.topics}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3">
        <div className="rounded-2xl bg-page-secondary p-4">
          <div className="flex items-center gap-2 text-brand-primary">
            <FaGraduationCap className="text-sm" />
            <span className="text-xs font-black">শ্রেণি</span>
          </div>

          <p className="mt-2 text-sm font-black text-primary">
            {item.className}
          </p>
        </div>

        <div className="rounded-2xl bg-page-secondary p-4">
          <div className="flex items-center gap-2 text-brand-primary">
            <FaBookOpen className="text-sm" />
            <span className="text-xs font-black">টপিকসমূহ</span>
          </div>

          <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
            {item.topics}
          </p>
        </div>
      </div>

      <Link
        href={item.fileUrl}
        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-6 py-3 text-sm font-black text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
      >
        সিলেবাস ডাউনলোড করুন
        <FaDownload />
      </Link>
    </article>
  );
}

export default function SyllabusPage() {
  const [selectedClass, setSelectedClass] = useState("সব শ্রেণি");
  const [selectedTerm, setSelectedTerm] = useState("সব টার্ম");
  const [searchText, setSearchText] = useState("");

  const filteredSyllabus = useMemo(() => {
    return syllabusData.filter((item) => {
      const classMatched =
        selectedClass === "সব শ্রেণি" || item.className === selectedClass;

      const termMatched =
        selectedTerm === "সব টার্ম" || item.term === selectedTerm;

      const searchMatched =
        item.className.toLowerCase().includes(searchText.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchText.toLowerCase()) ||
        item.term.toLowerCase().includes(searchText.toLowerCase()) ||
        item.topics.toLowerCase().includes(searchText.toLowerCase());

      return classMatched && termMatched && searchMatched;
    });
  }, [selectedClass, selectedTerm, searchText]);

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-brand-primary sm:text-sm">
            একাডেমিক সিলেবাস
          </p>

          <h1 className="mt-7 text-[40px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            শ্রেণিভিত্তিক সিলেবাস
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            প্রথম শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত প্রতিটি শ্রেণির
            বিষয়ভিত্তিক সিলেবাস, টার্ম, টপিকসমূহ এবং ডাউনলোড লিংক এখানে
            সুন্দরভাবে সাজানো হয়েছে।
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
            >
              হোমে ফিরে যান
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-soft bg-color-secondary px-8 py-4 text-sm font-black text-brand-primary shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-inverse">
                  <FaSchoolFlag />
                  পাঠ পরিকল্পনা
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  শিক্ষার্থীদের জন্য পরিকল্পিত সিলেবাস
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  প্রতিটি শ্রেণির সিলেবাস শিক্ষার্থীদের শেখার ধাপ, পরীক্ষার
                  প্রস্তুতি এবং বিষয়ভিত্তিক দক্ষতা উন্নয়নের জন্য সাজানো হয়েছে।
                  সঠিক পরিকল্পনা অনুযায়ী পাঠদান নিশ্চিত করতে সিলেবাস গুরুত্বপূর্ণ
                  ভূমিকা রাখে।
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 bg-color-secondary p-6 sm:grid-cols-2 sm:p-8 lg:col-span-4 lg:p-10">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                      {stat.icon}
                    </div>

                    <h3 className="mt-5 text-4xl font-black text-primary">
                      {stat.value}
                    </h3>

                    <p className="mt-2 text-sm font-black text-brand-primary">
                      {stat.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-10 rounded-[30px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-4">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
                  সিলেবাস খুঁজুন
                </p>

                <h2 className="mt-2 text-2xl font-black text-primary">
                  অনুসন্ধান ও ফিল্টার
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="relative">
                  <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary" />

                  <input
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="শ্রেণি, বিষয়, টার্ম বা টপিক লিখুন"
                    className="w-full rounded-full border border-soft bg-page-secondary py-4 pl-12 pr-5 text-sm font-semibold text-primary outline-none transition focus:border-brand-primary focus:bg-page-primary"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-black text-primary">
                  শ্রেণি নির্বাচন
                </p>

                <div className="flex gap-3 overflow-x-auto pb-2">
                  {classOptions.map((className) => (
                    <button
                      key={className}
                      type="button"
                      onClick={() => setSelectedClass(className)}
                      className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition-all duration-300 ${
                        selectedClass === className
                          ? "bg-color-primary text-inverse shadow-lg"
                          : "bg-color-secondary text-brand-primary hover:bg-color-primary hover:text-inverse"
                      }`}
                    >
                      {className}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-black text-primary">
                  টার্ম নির্বাচন
                </p>

                <div className="flex gap-3 overflow-x-auto pb-2">
                  {termOptions.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setSelectedTerm(term)}
                      className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition-all duration-300 ${
                        selectedTerm === term
                          ? "bg-color-primary text-inverse shadow-lg"
                          : "bg-color-secondary text-brand-primary hover:bg-color-primary hover:text-inverse"
                      }`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
                সিলেবাস তালিকা
              </p>

              <h2 className="mt-2 text-3xl font-black text-primary">
                নির্বাচিত সিলেবাসসমূহ
              </h2>

              <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-secondary">
                নির্বাচিত শ্রেণি, টার্ম এবং অনুসন্ধান অনুযায়ী সিলেবাসগুলো
                এখানে দেখানো হচ্ছে।
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-color-secondary px-5 py-3 text-sm font-black text-brand-primary">
              <span>{toBanglaNumber(filteredSyllabus.length)}</span>
              <span>টি সিলেবাস</span>
            </div>
          </div>

          {filteredSyllabus.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filteredSyllabus.map((item) => (
                <SyllabusCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="rounded-[30px] border border-soft bg-page-primary p-8 text-center shadow-sm sm:p-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-secondary text-3xl text-brand-primary">
                <FaCircleInfo />
              </div>

              <h3 className="mt-5 text-2xl font-black text-primary">
                কোনো সিলেবাস পাওয়া যায়নি
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-secondary">
                আপনার অনুসন্ধান বা নির্বাচিত ফিল্টারের সঙ্গে কোনো সিলেবাস মেলেনি।
                অন্য তথ্য দিয়ে আবার চেষ্টা করুন।
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaCheck className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  সিলেবাস নির্দেশনা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                নিয়মিত সিলেবাস অনুসরণে ভালো প্রস্তুতি
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                শিক্ষার্থীরা যদি নির্ধারিত সিলেবাস অনুযায়ী নিয়মিত পড়াশোনা,
                অনুশীলন এবং পুনরাবৃত্তি করে, তাহলে পরীক্ষার প্রস্তুতি আরও
                সুসংগঠিত ও ফলপ্রসূ হয়।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaBookOpen />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  পাঠ প্রস্তুতি
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  প্রতিটি সিলেবাস শিক্ষার্থীদের পরিকল্পিত পাঠ প্রস্তুতিতে সহায়তা
                  করে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}