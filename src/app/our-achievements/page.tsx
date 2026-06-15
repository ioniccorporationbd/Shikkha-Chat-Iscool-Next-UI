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
  FaMasksTheater,
  FaMedal,
  FaPeopleGroup,
  FaPersonRunning,
  FaRegStar,
  FaSchoolFlag,
  FaStar,
  FaTrophy,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type AchievementCategory = {
  title: string;
  description: string;
  icon: ReactNode;
};

type AchievementItem = {
  id: number;
  achievementName: string;
  category: string;
  studentOrTeam: string;
  year: string;
  award: string;
  fileUrl: string;
};

type HighlightItem = {
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
    title: "মোট পুরস্কার",
    value: "১০০+",
    icon: <FaTrophy />,
  },
  {
    title: "একাডেমিক সাফল্য",
    value: "৪০+",
    icon: <FaGraduationCap />,
  },
  {
    title: "ক্রীড়া অর্জন",
    value: "২৫+",
    icon: <FaPersonRunning />,
  },
  {
    title: "সাংস্কৃতিক অর্জন",
    value: "৩০+",
    icon: <FaMasksTheater />,
  },
];

const academicAchievements: AchievementCategory[] = [
  {
    title: "পরীক্ষায় ভালো ফলাফল",
    description:
      "বিদ্যালয়ের শিক্ষার্থীরা নিয়মিত ক্লাস, পরিশ্রম ও শিক্ষকদের দিকনির্দেশনায় পরীক্ষায় ভালো ফলাফল অর্জন করে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "বৃত্তি অর্জন",
    description:
      "মেধাবী শিক্ষার্থীরা বিভিন্ন বৃত্তি পরীক্ষায় অংশগ্রহণ করে সফলতা অর্জন করেছে।",
    icon: <FaAward />,
  },
  {
    title: "মেধা তালিকায় স্থান",
    description:
      "বিদ্যালয়ের শিক্ষার্থীরা শ্রেণি ও বোর্ড পর্যায়ে মেধা তালিকায় স্থান করে প্রতিষ্ঠানের সুনাম বৃদ্ধি করেছে।",
    icon: <FaMedal />,
  },
  {
    title: "বোর্ড পর্যায়ের সাফল্য",
    description:
      "পাবলিক পরীক্ষা ও গুরুত্বপূর্ণ মূল্যায়নে শিক্ষার্থীদের ধারাবাহিক সাফল্য বিদ্যালয়ের মান তুলে ধরে।",
    icon: <FaBookOpen />,
  },
];

const coCurricularAchievements: AchievementCategory[] = [
  {
    title: "বিতর্ক প্রতিযোগিতা",
    description:
      "যুক্তিবোধ, ভাষা দক্ষতা ও আত্মবিশ্বাসের মাধ্যমে শিক্ষার্থীরা বিতর্ক প্রতিযোগিতায় সাফল্য অর্জন করেছে।",
    icon: <FaUsers />,
  },
  {
    title: "বিজ্ঞান মেলা",
    description:
      "সৃজনশীল বিজ্ঞান প্রজেক্ট, উদ্ভাবনী চিন্তা ও বাস্তবভিত্তিক উপস্থাপনার মাধ্যমে শিক্ষার্থীরা প্রশংসিত হয়েছে।",
    icon: <FaFlask />,
  },
  {
    title: "কুইজ প্রতিযোগিতা",
    description:
      "সাধারণ জ্ঞান, বিজ্ঞান, ইতিহাস ও সমসাময়িক বিষয়ভিত্তিক কুইজে শিক্ষার্থীরা ভালো ফলাফল করেছে।",
    icon: <FaRegStar />,
  },
  {
    title: "আইসিটি প্রজেক্ট",
    description:
      "প্রযুক্তি ব্যবহার, ডিজিটাল দক্ষতা ও প্রজেক্ট উপস্থাপনার মাধ্যমে শিক্ষার্থীরা আইসিটি ক্ষেত্রে অর্জন করেছে।",
    icon: <FaComputer />,
  },
];

const sportsAchievements: HighlightItem[] = [
  {
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    description:
      "দৌড়, লং জাম্প, হাই জাম্প, দলীয় খেলা ও অন্যান্য ক্রীড়া ইভেন্টে শিক্ষার্থীরা অংশগ্রহণ করে পুরস্কার অর্জন করেছে।",
    icon: <FaPersonRunning />,
  },
  {
    title: "আন্তঃস্কুল টুর্নামেন্ট",
    description:
      "ফুটবল, ক্রিকেট ও অন্যান্য দলীয় খেলায় শিক্ষার্থীরা বিদ্যালয়ের প্রতিনিধিত্ব করে সাফল্য অর্জন করেছে।",
    icon: <FaTrophy />,
  },
  {
    title: "অ্যাথলেটিকস সাফল্য",
    description:
      "শারীরিক সক্ষমতা, নিয়মিত অনুশীলন ও দলগত প্রচেষ্টার মাধ্যমে অ্যাথলেটিকস ইভেন্টে ভালো ফলাফল হয়েছে।",
    icon: <FaMedal />,
  },
];

const culturalAchievements: HighlightItem[] = [
  {
    title: "গান ও সংগীত",
    description:
      "বিদ্যালয়ের শিক্ষার্থীরা সংগীত প্রতিযোগিতা ও সাংস্কৃতিক অনুষ্ঠানে অংশ নিয়ে প্রশংসা অর্জন করেছে।",
    icon: <FaMasksTheater />,
  },
  {
    title: "নৃত্য ও আবৃত্তি",
    description:
      "সৃজনশীল প্রকাশ, শুদ্ধ উচ্চারণ ও পরিবেশনার মাধ্যমে শিক্ষার্থীরা সাংস্কৃতিক ক্ষেত্রে সাফল্য দেখিয়েছে।",
    icon: <FaStar />,
  },
  {
    title: "নাটক ও মঞ্চ পরিবেশনা",
    description:
      "দলগত অভিনয়, উপস্থাপনা ও সৃজনশীলতার মাধ্যমে শিক্ষার্থীরা মঞ্চ পরিবেশনায় বিশেষ সাফল্য অর্জন করেছে।",
    icon: <FaAward />,
  },
];

const achievementItems: AchievementItem[] = [
  {
    id: 1,
    achievementName: "জাতীয় বিজ্ঞান মেলায় সাফল্য",
    category: "বিজ্ঞান",
    studentOrTeam: "Science Club Team",
    year: "২০২৬",
    award: "২য় স্থান",
    fileUrl: "#",
  },
  {
    id: 2,
    achievementName: "আন্তঃস্কুল বিতর্ক প্রতিযোগিতা",
    category: "বিতর্ক",
    studentOrTeam: "Debate Team",
    year: "২০২৬",
    award: "চ্যাম্পিয়ন",
    fileUrl: "#",
  },
  {
    id: 3,
    achievementName: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    category: "ক্রীড়া",
    studentOrTeam: "Class Nine Team",
    year: "২০২৫",
    award: "সেরা দল",
    fileUrl: "#",
  },
  {
    id: 4,
    achievementName: "সাংস্কৃতিক প্রতিযোগিতা",
    category: "সাংস্কৃতিক",
    studentOrTeam: "Cultural Team",
    year: "২০২৫",
    award: "১ম স্থান",
    fileUrl: "#",
  },
  {
    id: 5,
    achievementName: "বৃত্তি পরীক্ষায় সফলতা",
    category: "একাডেমিক",
    studentOrTeam: "Class Five Students",
    year: "২০২৫",
    award: "বৃত্তি অর্জন",
    fileUrl: "#",
  },
  {
    id: 6,
    achievementName: "আইসিটি প্রজেক্ট প্রদর্শনী",
    category: "আইসিটি",
    studentOrTeam: "ICT Club",
    year: "২০২৬",
    award: "বিশেষ সম্মাননা",
    fileUrl: "#",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "প্রতিটি প্রতিযোগিতা ও কার্যক্রমে অংশগ্রহণের আগে শিক্ষক নির্দেশনা অনুসরণ করতে হবে।",
      "জয়-পরাজয়কে স্বাভাবিকভাবে গ্রহণ করে শেখার মানসিকতা রাখতে হবে।",
      "একাডেমিক পড়াশোনার পাশাপাশি সহশিক্ষা কার্যক্রমেও নিয়মিত অংশগ্রহণ করতে হবে।",
      "দলগত কাজ, সময়ানুবর্তিতা ও শৃঙ্খলা বজায় রেখে বিদ্যালয়ের সুনাম বৃদ্ধি করতে হবে।",
      "অর্জন ধরে রাখতে নিয়মিত অনুশীলন, অধ্যবসায় ও আত্মবিশ্বাস বজায় রাখতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের আগ্রহ ও প্রতিভা অনুযায়ী একাডেমিক ও সহশিক্ষা কার্যক্রমে অংশগ্রহণে উৎসাহ দিন।",
      "প্রতিযোগিতা, পরীক্ষা ও বিদ্যালয়ের কার্যক্রমের জন্য প্রয়োজনীয় প্রস্তুতিতে সহযোগিতা করুন।",
      "সন্তানের ছোট অর্জনকেও মূল্যায়ন করে আত্মবিশ্বাস বাড়াতে সাহায্য করুন।",
      "অতিরিক্ত চাপ না দিয়ে নিয়মিত অনুশীলন ও শেখার পরিবেশ তৈরি করুন।",
      "বিদ্যালয়ের অর্জন ও কার্যক্রম সম্পর্কে জানতে নিয়মিত নোটিশ ও আপডেট অনুসরণ করুন।",
    ],
  },
];

const OurAchievementsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            School Success Stories
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            আমাদের অর্জন
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থী, শিক্ষক ও প্রতিষ্ঠানের একাডেমিক, সহশিক্ষা, ক্রীড়া,
            সাংস্কৃতিক ও সামাজিক সাফল্যের গল্প এক জায়গায় তুলে ধরার জন্য এই পেজ
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

      {/* Achievement Overview */}
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
                  প্রচেষ্টা, অধ্যবসায় ও সাফল্যের গল্প
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ের প্রতিটি অর্জন শিক্ষার্থী, শিক্ষক, অভিভাবক ও
                  কর্তৃপক্ষের সম্মিলিত প্রচেষ্টার ফল। একাডেমিক ফলাফল,
                  সহশিক্ষা কার্যক্রম, বিজ্ঞান, ক্রীড়া, সংস্কৃতি এবং সামাজিক
                  কার্যক্রমে শিক্ষার্থীদের অংশগ্রহণ বিদ্যালয়ের গৌরব বৃদ্ধি করে।
                  এই পেজে আমাদের বিদ্যালয়ের উল্লেখযোগ্য সাফল্য ও অর্জনের
                  তথ্য তুলে ধরা হয়েছে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Achievement */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Featured Achievement
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  জাতীয় পর্যায়ে বিজ্ঞান মেলায় সাফল্য
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের শিক্ষার্থীরা সৃজনশীল বিজ্ঞান প্রজেক্ট উপস্থাপন
                  করে জাতীয় পর্যায়ের বিজ্ঞান মেলায় বিশেষ সাফল্য অর্জন করেছে।
                  এই অর্জন শিক্ষার্থীদের গবেষণামূলক চিন্তা, উদ্ভাবনী ক্ষমতা এবং
                  দলগত কাজের সুন্দর উদাহরণ।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    বিভাগ: বিজ্ঞান
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    পুরস্কার: ২য় স্থান
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    বছর: ২০২৬
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaTrophy />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Proud Moment
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    শিক্ষার্থীদের সাফল্যই বিদ্যালয়ের সবচেয়ে বড় গৌরব।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              একাডেমিক সাফল্য
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Academic Achievements
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {academicAchievements.map((item) => (
              <article
                key={item.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
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
      </section>

      {/* Co-curricular Achievements */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                সহশিক্ষা অর্জন
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Co-curricular Achievements
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {coCurricularAchievements.map((item) => (
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

      {/* Sports and Cultural Achievements */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                ক্রীড়া অর্জন
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary">
                Sports Achievements
              </h2>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="space-y-4">
              {sportsAchievements.map((item) => (
                <article
                  key={item.title}
                  className="group flex gap-4 rounded-[22px] border border-soft bg-page-secondary p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                সাংস্কৃতিক অর্জন
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary">
                Cultural Achievements
              </h2>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="space-y-4">
              {culturalAchievements.map((item) => (
                <article
                  key={item.title}
                  className="group flex gap-4 rounded-[22px] border border-soft bg-page-secondary p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Table */}
      <section
        id="achievement-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              অর্জনের তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Achievement Table
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
                      অর্জনের নাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিভাগ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শিক্ষার্থী / দল
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বছর
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পুরস্কার
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      বিস্তারিত
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {achievementItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaTrophy />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {item.achievementName}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.studentOrTeam}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.year}
                      </td>

                      <td className="px-5 py-5 text-sm font-black text-secondary">
                        {item.award}
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
              {achievementItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.category}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {item.achievementName}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaTrophy />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">
                        শিক্ষার্থী / দল:
                      </span>{" "}
                      {item.studentOrTeam}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">বছর:</span>{" "}
                      {item.year}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">পুরস্কার:</span>{" "}
                      {item.award}
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
                  <FaCalendarCheck className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    সমাপনী বার্তা
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  প্রতিটি অর্জন ভবিষ্যতের অনুপ্রেরণা
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  আমাদের শিক্ষার্থীদের প্রতিটি অর্জন বিদ্যালয়ের জন্য গর্বের
                  বিষয়। এই সাফল্য নতুন প্রজন্মকে আরও মনোযোগী, আত্মবিশ্বাসী ও
                  সৃজনশীল হতে অনুপ্রাণিত করে। শিক্ষক, অভিভাবক ও শিক্ষার্থীদের
                  সম্মিলিত প্রচেষ্টায় বিদ্যালয়ের অর্জনের ধারা আরও সমৃদ্ধ হবে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Our Pride
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    শিক্ষার্থীদের সাফল্যই বিদ্যালয়ের সবচেয়ে বড় অর্জন।
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

export default OurAchievementsPage;