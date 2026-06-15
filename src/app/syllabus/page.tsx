import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaClipboardList,
  FaCloudArrowDown,
  FaFileLines,
  FaFolderOpen,
  FaGraduationCap,
  FaMagnifyingGlass,
  FaPeopleGroup,
  FaPenToSquare,
  FaRegClock,
  FaSchoolFlag,
  FaUserGraduate,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type SubjectItem = {
  title: string;
  total: string;
};

type SyllabusItem = {
  id: number;
  className: string;
  subject: string;
  term: string;
  topics: string;
  fileUrl: string;
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
    icon: <FaCalendarCheck />,
  },
  {
    title: "মোট শ্রেণি",
    value: "১০",
    icon: <FaGraduationCap />,
  },
  {
    title: "বিষয় সংখ্যা",
    value: "৮+",
    icon: <FaBookOpen />,
  },
  {
    title: "ডাউনলোডযোগ্য সিলেবাস",
    value: "৬০+",
    icon: <FaFileLines />,
  },
];

const subjects: SubjectItem[] = [
  {
    title: "বাংলা",
    total: "১২টি সিলেবাস",
  },
  {
    title: "ইংরেজি",
    total: "১০টি সিলেবাস",
  },
  {
    title: "গণিত",
    total: "১৫টি সিলেবাস",
  },
  {
    title: "বিজ্ঞান",
    total: "৯টি সিলেবাস",
  },
  {
    title: "বাংলাদেশ ও বিশ্বপরিচয়",
    total: "৮টি সিলেবাস",
  },
  {
    title: "আইসিটি",
    total: "৬টি সিলেবাস",
  },
];

const syllabusItems: SyllabusItem[] = [
  {
    id: 1,
    className: "Class One",
    subject: "বাংলা",
    term: "প্রথম টার্ম",
    topics: "স্বরবর্ণ, ব্যঞ্জনবর্ণ, শব্দ গঠন, ছোট গল্প",
    fileUrl: "#",
  },
  {
    id: 2,
    className: "Class Two",
    subject: "ইংরেজি",
    term: "প্রথম টার্ম",
    topics: "Alphabet Review, Word Meaning, Basic Sentence",
    fileUrl: "#",
  },
  {
    id: 3,
    className: "Class Three",
    subject: "গণিত",
    term: "অর্ধবার্ষিক",
    topics: "যোগ, বিয়োগ, গুণ, ভাগ ও জ্যামিতির প্রাথমিক ধারণা",
    fileUrl: "#",
  },
  {
    id: 4,
    className: "Class Four",
    subject: "বিজ্ঞান",
    term: "অর্ধবার্ষিক",
    topics: "উদ্ভিদ, প্রাণী, পরিবেশ ও স্বাস্থ্যবিধি",
    fileUrl: "#",
  },
  {
    id: 5,
    className: "Class Five",
    subject: "বাংলাদেশ ও বিশ্বপরিচয়",
    term: "বার্ষিক",
    topics: "বাংলাদেশের ইতিহাস, সংস্কৃতি, প্রাকৃতিক সম্পদ",
    fileUrl: "#",
  },
  {
    id: 6,
    className: "Class Six",
    subject: "আইসিটি",
    term: "বার্ষিক",
    topics: "কম্পিউটার পরিচিতি, হার্ডওয়্যার, সফটওয়্যার, ইন্টারনেট",
    fileUrl: "#",
  },
];

const classList = [
  "Class One",
  "Class Two",
  "Class Three",
  "Class Four",
  "Class Five",
  "Class Six",
  "Class Seven",
  "Class Eight",
  "Class Nine",
  "Class Ten",
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "সিলেবাস অনুযায়ী প্রতিদিন নিয়মিত পড়াশোনা করতে হবে।",
      "প্রতিটি টার্ম পরীক্ষার আগে নির্ধারিত অধ্যায় ভালোভাবে প্রস্তুত করতে হবে।",
      "কোনো অধ্যায় বা টপিক বুঝতে সমস্যা হলে দ্রুত শ্রেণি শিক্ষক বা বিষয় শিক্ষকের সঙ্গে যোগাযোগ করতে হবে।",
      "সিলেবাসের বাইরে অতিরিক্ত অনুশীলন করলে পরীক্ষার প্রস্তুতি আরও ভালো হবে।",
      "ডাউনলোড করা সিলেবাস সংরক্ষণ করে নিয়মিত অনুসরণ করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের সিলেবাস অনুযায়ী পড়াশোনা হচ্ছে কি না নিয়মিত পর্যবেক্ষণ করুন।",
      "পরীক্ষার আগে অধ্যায়ভিত্তিক প্রস্তুতিতে সন্তানকে সহায়তা করুন।",
      "সন্তানের দুর্বল বিষয় চিহ্নিত করে প্রয়োজনে শ্রেণি শিক্ষক বা বিষয় শিক্ষকের সঙ্গে যোগাযোগ করুন।",
      "পড়াশোনার জন্য নিয়মিত সময়সূচি তৈরি করতে সন্তানকে সহযোগিতা করুন।",
      "বিদ্যালয়ের নতুন নোটিশ বা সিলেবাস আপডেট নিয়মিত অনুসরণ করুন।",
    ],
  },
];

const SyllabusPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Academic Syllabus
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            সিলেবাস
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শ্রেণিভিত্তিক ও বিষয়ভিত্তিক পাঠ্যসূচি, অধ্যায় তালিকা, পরীক্ষার
            প্রস্তুতি এবং ডাউনলোডযোগ্য সিলেবাস এক জায়গায় দেখার জন্য এই পেজ
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

      {/* Syllabus Overview */}
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
                  পরিকল্পিত পড়াশোনার মূল ভিত্তি
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  সিলেবাস শিক্ষার্থী, শিক্ষক ও অভিভাবকদের জন্য শিক্ষাবর্ষের
                  পাঠ্যসূচি সম্পর্কে সুস্পষ্ট ধারণা দেয়। কোন শ্রেণিতে কোন
                  বিষয়, কোন টার্মে কোন অধ্যায় বা টপিক পড়ানো হবে—তা সিলেবাসের
                  মাধ্যমে জানা যায়। এর ফলে শিক্ষার্থীরা সময়মতো প্রস্তুতি নিতে
                  পারে এবং অভিভাবকরাও সন্তানের পড়াশোনা পরিকল্পিতভাবে পর্যবেক্ষণ
                  করতে পারেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Wise Syllabus */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বিষয়ভিত্তিক তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Subject Wise Syllabus
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.title}
                className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                    <FaFolderOpen />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                      {subject.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                      {subject.total}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Wise Syllabus */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  শ্রেণিভিত্তিক
                </p>

                <h2 className="mt-2 text-3xl font-black text-primary">
                  Class Wise Syllabus
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-secondary px-4 py-2 text-sm font-black text-secondary">
                <FaMagnifyingGlass className="text-brand-primary" />
                সহজে শ্রেণি নির্বাচন করুন
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {classList.map((item) => (
                <Link
                  key={item}
                  href="#syllabus-table"
                  className="rounded-[18px] border border-soft bg-page-secondary px-4 py-4 text-center text-sm font-black text-primary transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-lg"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Table */}
      <section
        id="syllabus-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              Download Area
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              সাম্প্রতিক সিলেবাস
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
                      বিষয়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      টার্ম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      অধ্যায় / টপিক
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ডাউনলোড
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {syllabusItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.className}
                      </td>

                      <td className="px-5 py-5 text-sm font-black text-primary">
                        {item.subject}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          <FaRegClock />
                          {item.term}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold leading-7 text-secondary">
                        {item.topics}
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
              {syllabusItems.map((item) => (
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
                        {item.subject}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaClipboardList />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">টার্ম:</span>{" "}
                      {item.term}
                    </p>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">
                        অধ্যায় / টপিক:
                      </span>{" "}
                      {item.topics}
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
                  <FaPenToSquare className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    সমাপনী বার্তা
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  সঠিক সিলেবাস অনুসরণই সফল প্রস্তুতির চাবিকাঠি
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  সিলেবাস অনুসরণ করলে শিক্ষার্থীরা সময়মতো পাঠ প্রস্তুত করতে
                  পারে, পরীক্ষার আগে অধ্যায়ভিত্তিক পুনরালোচনা করতে পারে এবং
                  পড়াশোনাকে আরও পরিকল্পিতভাবে এগিয়ে নিতে পারে। শিক্ষক,
                  শিক্ষার্থী ও অভিভাবকের সম্মিলিত সহযোগিতায় শিক্ষার মান আরও
                  উন্নত করা সম্ভব।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    পাঠ্যসূচি
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    পরিকল্পিত পাঠ্যসূচি শিক্ষার্থীর প্রস্তুতিকে সহজ ও সফল করে।
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

export default SyllabusPage;