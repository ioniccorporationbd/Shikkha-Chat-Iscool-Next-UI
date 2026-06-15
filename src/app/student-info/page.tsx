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
  FaFlask,
  FaGraduationCap,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegClock,
  FaSchoolFlag,
  FaStar,
  FaUserGraduate,
  FaUsersGear,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type TeacherCategory = {
  title: string;
  description: string;
  icon: ReactNode;
};

type TeacherItem = {
  id: number;
  name: string;
  designation: string;
  subject: string;
  qualification: string;
  experience: string;
  fileUrl: string;
};

type SubjectTeacher = {
  subject: string;
  teacher: string;
  classRange: string;
  icon: ReactNode;
};

type Responsibility = {
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
    title: "মোট শিক্ষক",
    value: "৪৫+",
    icon: <FaPeopleGroup />,
  },
  {
    title: "বিষয়ভিত্তিক শিক্ষক",
    value: "২৫+",
    icon: <FaBookOpen />,
  },
  {
    title: "সিনিয়র শিক্ষক",
    value: "১২+",
    icon: <FaAward />,
  },
  {
    title: "সহকারী শিক্ষক",
    value: "৩০+",
    icon: <FaPersonChalkboard />,
  },
];

const teacherCategories: TeacherCategory[] = [
  {
    title: "Head Teacher",
    description:
      "বিদ্যালয়ের একাডেমিক পরিকল্পনা, প্রশাসনিক নেতৃত্ব ও সামগ্রিক শিক্ষার মান উন্নয়নে নেতৃত্ব প্রদান করেন।",
    icon: <FaSchoolFlag />,
  },
  {
    title: "Assistant Teachers",
    description:
      "শ্রেণিকক্ষ পাঠদান, শিক্ষার্থী মূল্যায়ন এবং দৈনন্দিন একাডেমিক কার্যক্রম পরিচালনা করেন।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "Subject Teachers",
    description:
      "নির্দিষ্ট বিষয়ের দক্ষ শিক্ষকরা বিষয়ভিত্তিক পাঠদান, অনুশীলন ও মূল্যায়ন পরিচালনা করেন।",
    icon: <FaBookOpen />,
  },
  {
    title: "Class Teachers",
    description:
      "শ্রেণির উপস্থিতি, আচরণ, অগ্রগতি ও অভিভাবক যোগাযোগের দায়িত্ব পালন করেন।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "ICT / Lab Teachers",
    description:
      "কম্পিউটার, বিজ্ঞান ল্যাব ও প্র্যাকটিক্যাল ক্লাস পরিচালনার মাধ্যমে বাস্তবভিত্তিক শিক্ষা নিশ্চিত করেন।",
    icon: <FaComputer />,
  },
];

const teachers: TeacherItem[] = [
  {
    id: 1,
    name: "মোঃ আব্দুল করিম",
    designation: "প্রধান শিক্ষক",
    subject: "প্রশাসন ও একাডেমিক নেতৃত্ব",
    qualification: "এম.এ, বি.এড",
    experience: "২০ বছর",
    fileUrl: "#",
  },
  {
    id: 2,
    name: "মোছাঃ সালমা আক্তার",
    designation: "সহকারী প্রধান শিক্ষক",
    subject: "বাংলা",
    qualification: "এম.এ, বি.এড",
    experience: "১৬ বছর",
    fileUrl: "#",
  },
  {
    id: 3,
    name: "মোঃ রবিউল ইসলাম",
    designation: "সিনিয়র শিক্ষক",
    subject: "গণিত",
    qualification: "এম.এসসি, বি.এড",
    experience: "১৪ বছর",
    fileUrl: "#",
  },
  {
    id: 4,
    name: "নুসরাত জাহান",
    designation: "সহকারী শিক্ষক",
    subject: "ইংরেজি",
    qualification: "এম.এ, বি.এড",
    experience: "১০ বছর",
    fileUrl: "#",
  },
  {
    id: 5,
    name: "মোঃ মাহমুদুল হাসান",
    designation: "সহকারী শিক্ষক",
    subject: "বিজ্ঞান",
    qualification: "এম.এসসি",
    experience: "৯ বছর",
    fileUrl: "#",
  },
  {
    id: 6,
    name: "সাবিনা ইয়াসমিন",
    designation: "আইসিটি শিক্ষক",
    subject: "আইসিটি",
    qualification: "বি.এসসি ইন সিএসই",
    experience: "৭ বছর",
    fileUrl: "#",
  },
  {
    id: 7,
    name: "মোঃ ফারুক হোসেন",
    designation: "সহকারী শিক্ষক",
    subject: "সমাজবিজ্ঞান",
    qualification: "এম.এস.এস",
    experience: "১১ বছর",
    fileUrl: "#",
  },
  {
    id: 8,
    name: "আয়েশা সিদ্দিকা",
    designation: "সহকারী শিক্ষক",
    subject: "ধর্ম শিক্ষা",
    qualification: "এম.এ",
    experience: "৮ বছর",
    fileUrl: "#",
  },
];

const subjectTeachers: SubjectTeacher[] = [
  {
    subject: "বাংলা",
    teacher: "মোছাঃ সালমা আক্তার",
    classRange: "ষষ্ঠ - দশম",
    icon: <FaBookOpen />,
  },
  {
    subject: "ইংরেজি",
    teacher: "নুসরাত জাহান",
    classRange: "তৃতীয় - দশম",
    icon: <FaGraduationCap />,
  },
  {
    subject: "গণিত",
    teacher: "মোঃ রবিউল ইসলাম",
    classRange: "চতুর্থ - দশম",
    icon: <FaClipboardCheck />,
  },
  {
    subject: "বিজ্ঞান",
    teacher: "মোঃ মাহমুদুল হাসান",
    classRange: "ষষ্ঠ - দশম",
    icon: <FaFlask />,
  },
  {
    subject: "আইসিটি",
    teacher: "সাবিনা ইয়াসমিন",
    classRange: "ষষ্ঠ - দশম",
    icon: <FaComputer />,
  },
  {
    subject: "সমাজবিজ্ঞান",
    teacher: "মোঃ ফারুক হোসেন",
    classRange: "ষষ্ঠ - দশম",
    icon: <FaPeopleGroup />,
  },
];

const responsibilities: Responsibility[] = [
  {
    title: "পাঠদান পরিচালনা",
    description:
      "শিক্ষার্থীদের বয়স, শ্রেণি ও পাঠ্যসূচি অনুযায়ী সহজ, কার্যকর ও অংশগ্রহণমূলক পাঠদান পরিচালনা করা।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "শিক্ষার্থী মূল্যায়ন",
    description:
      "ক্লাস টেস্ট, অ্যাসাইনমেন্ট, মৌখিক পরীক্ষা ও লিখিত পরীক্ষার মাধ্যমে শিক্ষার্থীর অগ্রগতি মূল্যায়ন করা।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "অভিভাবক যোগাযোগ",
    description:
      "শিক্ষার্থীর উপস্থিতি, আচরণ ও পড়াশোনার অগ্রগতি সম্পর্কে অভিভাবকদের সঙ্গে প্রয়োজনীয় যোগাযোগ রাখা।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "সহশিক্ষা কার্যক্রম",
    description:
      "বিতর্ক, ক্রীড়া, সাংস্কৃতিক অনুষ্ঠান, বিজ্ঞান মেলা ও ক্লাব কার্যক্রমে শিক্ষার্থীদের দিকনির্দেশনা দেওয়া।",
    icon: <FaUsersGear />,
  },
  {
    title: "ক্লাস রুটিন অনুসরণ",
    description:
      "নির্ধারিত সময়সূচি অনুযায়ী ক্লাস নেওয়া, পাঠ পরিকল্পনা অনুসরণ করা এবং সময়ানুবর্তিতা বজায় রাখা।",
    icon: <FaRegClock />,
  },
  {
    title: "শৃঙ্খলা ও নৈতিকতা",
    description:
      "শিক্ষার্থীদের শৃঙ্খলা, দায়িত্ববোধ, নৈতিকতা ও ভালো আচরণ গঠনে ইতিবাচক ভূমিকা রাখা।",
    icon: <FaStar />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "শিক্ষকদের সম্মান করতে হবে এবং ক্লাসে মনোযোগ দিয়ে পাঠ শুনতে হবে।",
      "কোনো বিষয় বুঝতে সমস্যা হলে বিনয়ের সঙ্গে শিক্ষককে প্রশ্ন করতে হবে।",
      "শিক্ষকের দেওয়া হোমওয়ার্ক, অ্যাসাইনমেন্ট ও নির্দেশনা সময়মতো সম্পন্ন করতে হবে।",
      "ক্লাসে শৃঙ্খলা বজায় রাখতে হবে এবং অন্য শিক্ষার্থীদের শেখার পরিবেশ নষ্ট করা যাবে না।",
      "শিক্ষকের পরামর্শ অনুযায়ী নিয়মিত পড়াশোনা ও অনুশীলন করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের শ্রেণি শিক্ষক ও বিষয় শিক্ষকের সঙ্গে নিয়মিত যোগাযোগ রাখুন।",
      "অভিভাবক-শিক্ষক সভায় অংশগ্রহণ করে সন্তানের অগ্রগতি সম্পর্কে জানুন।",
      "শিক্ষকের পরামর্শ অনুযায়ী বাড়িতে পড়াশোনার পরিবেশ তৈরি করতে সহায়তা করুন।",
      "সন্তানের উপস্থিতি, হোমওয়ার্ক ও আচরণ নিয়মিত পর্যবেক্ষণ করুন।",
      "কোনো সমস্যা হলে সরাসরি শিক্ষক বা বিদ্যালয় কর্তৃপক্ষের সঙ্গে যোগাযোগ করুন।",
    ],
  },
];

const TeachersInfoPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Faculty Members
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            শিক্ষকদের তথ্য
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের অভিজ্ঞ শিক্ষক-শিক্ষিকাদের পরিচিতি, পদবি, বিষয়, যোগ্যতা
            ও দায়িত্ব সম্পর্কে বিস্তারিত তথ্য।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Teachers Overview */}
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
                  অভিজ্ঞ শিক্ষক, মানসম্মত শিক্ষা
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ের শিক্ষকরা শিক্ষার্থীদের জ্ঞান, নৈতিকতা, শৃঙ্খলা ও
                  সৃজনশীলতা গঠনে গুরুত্বপূর্ণ ভূমিকা পালন করেন। অভিজ্ঞতা,
                  বিষয়ভিত্তিক দক্ষতা এবং শিক্ষার্থীবান্ধব পাঠদান পদ্ধতির মাধ্যমে
                  শিক্ষকরা প্রতিটি শিক্ষার্থীর শেখার অগ্রগতি নিশ্চিত করতে কাজ
                  করেন। এই পেজে বিদ্যালয়ের শিক্ষক-শিক্ষিকাদের পরিচিতি, দায়িত্ব
                  ও বিষয়ভিত্তিক তথ্য তুলে ধরা হয়েছে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teacher */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Leadership
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  প্রধান শিক্ষকের নেতৃত্বে শিক্ষার মান উন্নয়ন
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের প্রধান শিক্ষক একাডেমিক পরিকল্পনা, শিক্ষক
                  তত্ত্বাবধান, শিক্ষার্থী উন্নয়ন এবং বিদ্যালয়ের সামগ্রিক
                  প্রশাসনিক কার্যক্রম পরিচালনায় নেতৃত্ব প্রদান করেন। তাঁর
                  অভিজ্ঞতা ও দিকনির্দেশনা বিদ্যালয়ের শিক্ষার পরিবেশকে আরও
                  উন্নত ও শৃঙ্খলাপূর্ণ করে তোলে।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    পদবি: প্রধান শিক্ষক
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    অভিজ্ঞতা: ২০ বছর
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    যোগ্যতা: এম.এ, বি.এড
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaPersonChalkboard />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Head Teacher
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    শিক্ষার মান, শৃঙ্খলা ও বিদ্যালয়ের অগ্রগতিতে নেতৃত্ব প্রদান।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Categories */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              শিক্ষক বিভাগ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Teacher Categories
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {teacherCategories.map((category) => (
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

      {/* Subject Wise Teachers */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                বিষয়ভিত্তিক শিক্ষক
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Subject Wise Teachers
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {subjectTeachers.map((item) => (
                <article
                  key={item.subject}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {item.subject}
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary transition-colors duration-500 group-hover:text-inverse/90">
                    {item.teacher}
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    শ্রেণি: {item.classRange}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teachers List */}
      <section
        id="teachers-list"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              শিক্ষকদের তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Teachers List
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
                      শিক্ষকের নাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পদবি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিষয়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      যোগ্যতা
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      অভিজ্ঞতা
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      বিস্তারিত
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {teachers.map((teacher) => (
                    <tr
                      key={teacher.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaPersonChalkboard />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {teacher.name}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {teacher.designation}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {teacher.subject}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {teacher.qualification}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {teacher.experience}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={teacher.fileUrl}
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
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {teacher.designation}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {teacher.name}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaPersonChalkboard />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">বিষয়:</span>{" "}
                      {teacher.subject}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">যোগ্যতা:</span>{" "}
                      {teacher.qualification}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">অভিজ্ঞতা:</span>{" "}
                      {teacher.experience}
                    </p>
                  </div>

                  <Link
                    href={teacher.fileUrl}
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

      {/* Teacher Responsibilities */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              শিক্ষকদের দায়িত্ব
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Teacher Responsibilities
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((item) => (
              <article
                key={item.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary">
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
                  শিক্ষকই শিক্ষার্থীর ভবিষ্যৎ গঠনের পথপ্রদর্শক
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  একজন শিক্ষক শুধু পাঠদান করেন না, তিনি শিক্ষার্থীর চরিত্র,
                  আত্মবিশ্বাস, নৈতিকতা ও ভবিষ্যৎ গঠনে গুরুত্বপূর্ণ ভূমিকা রাখেন।
                  শিক্ষক, শিক্ষার্থী ও অভিভাবকের সম্মিলিত সহযোগিতায় মানসম্মত
                  শিক্ষা নিশ্চিত করা সম্ভব।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaGraduationCap />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Our Teachers
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    অভিজ্ঞ শিক্ষক-শিক্ষিকারাই বিদ্যালয়ের সবচেয়ে বড় সম্পদ।
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

export default TeachersInfoPage;