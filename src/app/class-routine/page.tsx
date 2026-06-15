import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaChalkboardUser,
  FaClock,
  FaCloudArrowDown,
  FaDoorOpen,
  FaFileLines,
  FaGraduationCap,
  FaMagnifyingGlass,
  FaPeopleGroup,
  FaRegClock,
  FaSchoolFlag,
  FaUserGraduate,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type ClassRoutineItem = {
  id: number;
  className: string;
  shift: string;
  time: string;
  totalPeriods: string;
  room: string;
  fileUrl: string;
};

type PeriodItem = {
  period: string;
  time: string;
  type: string;
};

type RoutineTableItem = {
  id: number;
  day: string;
  time: string;
  subject: string;
  teacher: string;
  room: string;
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
    title: "ক্লাস সময়",
    value: "৮:০০ - ২:০০",
    icon: <FaClock />,
  },
  {
    title: "মোট পিরিয়ড",
    value: "৬টি",
    icon: <FaBookOpen />,
  },
  {
    title: "সাপ্তাহিক ক্লাস",
    value: "৬ দিন",
    icon: <FaGraduationCap />,
  },
];

const classRoutineItems: ClassRoutineItem[] = [
  {
    id: 1,
    className: "Class One",
    shift: "Morning Shift",
    time: "৮:০০ AM - ১২:০০ PM",
    totalPeriods: "৫টি পিরিয়ড",
    room: "Room 101",
    fileUrl: "#",
  },
  {
    id: 2,
    className: "Class Two",
    shift: "Morning Shift",
    time: "৮:০০ AM - ১২:৩০ PM",
    totalPeriods: "৫টি পিরিয়ড",
    room: "Room 102",
    fileUrl: "#",
  },
  {
    id: 3,
    className: "Class Three",
    shift: "Morning Shift",
    time: "৮:০০ AM - ১:০০ PM",
    totalPeriods: "৬টি পিরিয়ড",
    room: "Room 201",
    fileUrl: "#",
  },
  {
    id: 4,
    className: "Class Four",
    shift: "Morning Shift",
    time: "৮:০০ AM - ১:৩০ PM",
    totalPeriods: "৬টি পিরিয়ড",
    room: "Room 202",
    fileUrl: "#",
  },
  {
    id: 5,
    className: "Class Five",
    shift: "Day Shift",
    time: "৯:০০ AM - ২:০০ PM",
    totalPeriods: "৬টি পিরিয়ড",
    room: "Room 301",
    fileUrl: "#",
  },
  {
    id: 6,
    className: "Class Six",
    shift: "Day Shift",
    time: "৯:০০ AM - ২:০০ PM",
    totalPeriods: "৬টি পিরিয়ড",
    room: "Room 302",
    fileUrl: "#",
  },
];

const periodItems: PeriodItem[] = [
  {
    period: "Assembly",
    time: "৮:০০ - ৮:১৫",
    type: "প্রাত্যহিক সমাবেশ",
  },
  {
    period: "1st Period",
    time: "৮:১৫ - ৯:০০",
    type: "প্রথম পিরিয়ড",
  },
  {
    period: "2nd Period",
    time: "৯:০০ - ৯:৪৫",
    type: "দ্বিতীয় পিরিয়ড",
  },
  {
    period: "Short Break",
    time: "৯:৪৫ - ১০:০০",
    type: "সংক্ষিপ্ত বিরতি",
  },
  {
    period: "3rd Period",
    time: "১০:০০ - ১০:৪৫",
    type: "তৃতীয় পিরিয়ড",
  },
  {
    period: "4th Period",
    time: "১০:৪৫ - ১১:৩০",
    type: "চতুর্থ পিরিয়ড",
  },
  {
    period: "Tiffin Break",
    time: "১১:৩০ - ১২:০০",
    type: "টিফিন বিরতি",
  },
  {
    period: "5th Period",
    time: "১২:০০ - ১২:৪৫",
    type: "পঞ্চম পিরিয়ড",
  },
  {
    period: "6th Period",
    time: "১২:৪৫ - ১:৩০",
    type: "ষষ্ঠ পিরিয়ড",
  },
];

const routineTableItems: RoutineTableItem[] = [
  {
    id: 1,
    day: "রবিবার",
    time: "৮:১৫ - ৯:০০",
    subject: "বাংলা",
    teacher: "বাংলা শিক্ষক",
    room: "Room 101",
  },
  {
    id: 2,
    day: "সোমবার",
    time: "৯:০০ - ৯:৪৫",
    subject: "ইংরেজি",
    teacher: "ইংরেজি শিক্ষক",
    room: "Room 102",
  },
  {
    id: 3,
    day: "মঙ্গলবার",
    time: "১০:০০ - ১০:৪৫",
    subject: "গণিত",
    teacher: "গণিত শিক্ষক",
    room: "Room 201",
  },
  {
    id: 4,
    day: "বুধবার",
    time: "১০:৪৫ - ১১:৩০",
    subject: "বিজ্ঞান",
    teacher: "বিজ্ঞান শিক্ষক",
    room: "Room 202",
  },
  {
    id: 5,
    day: "বৃহস্পতিবার",
    time: "১২:০০ - ১২:৪৫",
    subject: "বাংলাদেশ ও বিশ্বপরিচয়",
    teacher: "বিষয় শিক্ষক",
    room: "Room 301",
  },
  {
    id: 6,
    day: "শনিবার",
    time: "১২:৪৫ - ১:৩০",
    subject: "আইসিটি",
    teacher: "আইসিটি শিক্ষক",
    room: "ICT Lab",
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
      "প্রতিদিন ক্লাস রুটিন অনুযায়ী প্রয়োজনীয় বই, খাতা ও শিক্ষা উপকরণ সঙ্গে আনতে হবে।",
      "সমাবেশ ও প্রতিটি পিরিয়ডে সময়মতো উপস্থিত থাকতে হবে।",
      "প্রতিটি ক্লাসে মনোযোগ দিয়ে পাঠ শুনতে হবে এবং প্রয়োজন হলে প্রশ্ন করতে হবে।",
      "রুটিন পরিবর্তন হলে বিদ্যালয়ের নোটিশ বা শ্রেণি শিক্ষকের নির্দেশনা অনুসরণ করতে হবে।",
      "ক্লাসের কাজ ও হোমওয়ার্ক সময়মতো সম্পন্ন করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের ক্লাস রুটিন অনুযায়ী প্রতিদিন বই-খাতা ও প্রয়োজনীয় উপকরণ প্রস্তুত করে দিন।",
      "শিক্ষার্থী যেন সময়মতো বিদ্যালয়ে পৌঁছায়, তা নিশ্চিত করুন।",
      "রুটিন অনুযায়ী প্রতিদিনের পড়াশোনা ও হোমওয়ার্ক পর্যবেক্ষণ করুন।",
      "কোনো রুটিন পরিবর্তন বা বিশেষ নোটিশ থাকলে বিদ্যালয়ের অফিসিয়াল ঘোষণা অনুসরণ করুন।",
      "সন্তানের পড়াশোনায় সমস্যা হলে শ্রেণি শিক্ষক বা বিষয় শিক্ষকের সঙ্গে যোগাযোগ করুন।",
    ],
  },
];

const ClassRoutinePage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Daily Academic Schedule
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            ক্লাস রুটিন
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শ্রেণিভিত্তিক দৈনিক ক্লাস সময়সূচি, বিষয়ভিত্তিক পাঠদান, বিরতি এবং
            শিক্ষকদের রুটিন এক জায়গায় দেখার জন্য এই পেজ তৈরি করা হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Routine Overview */}
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
                  পরিকল্পিত দৈনিক ক্লাস সময়সূচি
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  ক্লাস রুটিন শিক্ষার্থীদের দৈনিক পড়াশোনা, বই-খাতা প্রস্তুতি
                  এবং সময় ব্যবস্থাপনাকে সহজ করে তোলে। শ্রেণিভিত্তিক রুটিনের
                  মাধ্যমে কোন দিনে কোন বিষয়, কোন সময়ে কোন শিক্ষক ক্লাস নেবেন এবং
                  কোন কক্ষে পাঠদান হবে—তা সহজে জানা যায়। এটি শিক্ষার্থী,
                  শিক্ষক ও অভিভাবকদের পরিকল্পিত প্রস্তুতিতে সহায়তা করে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Wise Routine */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  শ্রেণিভিত্তিক
                </p>

                <h2 className="mt-2 text-3xl font-black text-primary">
                  Class Wise Routine
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
                  href="#routine-table"
                  className="rounded-[18px] border border-soft bg-page-secondary px-4 py-4 text-center text-sm font-black text-primary transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-lg"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Routine Download Cards */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              রুটিন তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              শ্রেণিভিত্তিক রুটিন ডাউনলোড
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {classRoutineItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      {item.shift}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-primary">
                      {item.className}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                    <FaFileLines />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 rounded-[18px] border border-soft bg-page-secondary p-4">
                    <FaRegClock className="text-brand-primary" />
                    <p className="text-sm font-semibold text-secondary">
                      {item.time}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-[18px] border border-soft bg-page-secondary p-4">
                    <FaBookOpen className="text-brand-primary" />
                    <p className="text-sm font-semibold text-secondary">
                      {item.totalPeriods}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-[18px] border border-soft bg-page-secondary p-4">
                    <FaDoorOpen className="text-brand-primary" />
                    <p className="text-sm font-semibold text-secondary">
                      {item.room}
                    </p>
                  </div>
                </div>

                <Link
                  href={item.fileUrl}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-5 py-3 text-sm font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
                >
                  Download Routine
                  <FaCloudArrowDown />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Period Schedule */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              পিরিয়ড সময়সূচি
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Period Schedule
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {periodItems.map((item, index) => (
              <div
                key={item.period}
                className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-sm font-black text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary transition-colors duration-500 group-hover:text-inverse/80">
                      {item.period}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                      {item.type}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine Table */}
      <section
        id="routine-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              দৈনিক রুটিন
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Daily Routine Table
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
                      দিন
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      সময়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিষয়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শিক্ষক
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      কক্ষ
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {routineTableItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5 text-sm font-black text-primary">
                        {item.day}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.time}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          <FaBookOpen />
                          {item.subject}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.teacher}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.room}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {routineTableItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.day}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-primary">
                        {item.subject}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaChalkboardUser />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">সময়:</span>{" "}
                      {item.time}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">শিক্ষক:</span>{" "}
                      {item.teacher}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">কক্ষ:</span>{" "}
                      {item.room}
                    </p>
                  </div>
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
                  সঠিক রুটিন অনুসরণেই নিয়মিত পড়াশোনার সফলতা
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  ক্লাস রুটিন শিক্ষার্থীদের সময়ানুবর্তিতা, প্রস্তুতি এবং
                  নিয়মিত পড়াশোনার অভ্যাস গড়ে তোলে। শিক্ষক, শিক্ষার্থী ও
                  অভিভাবকদের সহযোগিতায় রুটিন অনুযায়ী ক্লাস কার্যক্রম সুন্দরভাবে
                  পরিচালিত হলে শিক্ষার পরিবেশ আরও ফলপ্রসূ হয়।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    সময়ানুবর্তিতা
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    নিয়মিত রুটিন মেনে চলা সফল শিক্ষাজীবনের গুরুত্বপূর্ণ অংশ।
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

export default ClassRoutinePage;