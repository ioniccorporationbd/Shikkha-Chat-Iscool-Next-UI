import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaChildReaching,
  FaComputer,
  FaFlask,
  FaGraduationCap,
  FaHandsHoldingChild,
  FaLeaf,
  FaMasksTheater,
  FaMedal,
  FaMicrophone,
  FaPalette,
  FaPeopleGroup,
  FaPersonRunning,
  FaSchoolFlag,
  FaSeedling,
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

type ActivityItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ClubItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type BenefitItem = {
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
    title: "মোট কার্যক্রম",
    value: "২০+",
    icon: <FaTrophy />,
  },
  {
    title: "ক্লাব সংখ্যা",
    value: "৬+",
    icon: <FaUsers />,
  },
  {
    title: "বার্ষিক অনুষ্ঠান",
    value: "১২+",
    icon: <FaCalendarCheck />,
  },
  {
    title: "অংশগ্রহণকারী শিক্ষার্থী",
    value: "৫০০+",
    icon: <FaUserGraduate />,
  },
];

const activities: ActivityItem[] = [
  {
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    description:
      "শিক্ষার্থীদের শারীরিক সক্ষমতা, দলগত মনোভাব ও প্রতিযোগিতামূলক মানসিকতা গড়ে তোলার জন্য আয়োজন করা হয়।",
    icon: <FaPersonRunning />,
  },
  {
    title: "সাংস্কৃতিক অনুষ্ঠান",
    description:
      "গান, নৃত্য, আবৃত্তি, নাটক ও বিভিন্ন সাংস্কৃতিক পরিবেশনার মাধ্যমে শিক্ষার্থীদের প্রতিভা বিকাশের সুযোগ তৈরি হয়।",
    icon: <FaMasksTheater />,
  },
  {
    title: "বিতর্ক প্রতিযোগিতা",
    description:
      "যুক্তি, আত্মবিশ্বাস, উপস্থাপনা দক্ষতা এবং চিন্তাশক্তি উন্নয়নে বিতর্ক প্রতিযোগিতা গুরুত্বপূর্ণ ভূমিকা রাখে।",
    icon: <FaMicrophone />,
  },
  {
    title: "বিজ্ঞান মেলা",
    description:
      "বিজ্ঞানভিত্তিক চিন্তা, উদ্ভাবনী ধারণা ও বাস্তবভিত্তিক শেখার আগ্রহ বৃদ্ধির জন্য বিজ্ঞান মেলার আয়োজন করা হয়।",
    icon: <FaFlask />,
  },
  {
    title: "চিত্রাঙ্কন প্রতিযোগিতা",
    description:
      "শিক্ষার্থীদের কল্পনাশক্তি, সৃজনশীলতা ও শিল্পভাবনা প্রকাশের সুন্দর একটি মাধ্যম হলো চিত্রাঙ্কন।",
    icon: <FaPalette />,
  },
  {
    title: "কুইজ প্রতিযোগিতা",
    description:
      "সাধারণ জ্ঞান, পাঠ্যবিষয় ও সমসাময়িক বিষয় সম্পর্কে শিক্ষার্থীদের আগ্রহ ও জ্ঞান বৃদ্ধি করে।",
    icon: <FaBookOpen />,
  },
  {
    title: "স্কাউট / গার্লস গাইড",
    description:
      "নেতৃত্ব, সেবা, শৃঙ্খলা, দায়িত্ববোধ ও মানবিক মূল্যবোধ গঠনে স্কাউট কার্যক্রম সহায়ক।",
    icon: <FaHandsHoldingChild />,
  },
  {
    title: "বৃক্ষরোপণ কর্মসূচি",
    description:
      "পরিবেশ সচেতনতা, সামাজিক দায়িত্ববোধ এবং প্রকৃতির প্রতি ভালোবাসা তৈরিতে বৃক্ষরোপণ কর্মসূচি পরিচালিত হয়।",
    icon: <FaSeedling />,
  },
];

const clubs: ClubItem[] = [
  {
    title: "Science Club",
    description:
      "বিজ্ঞানভিত্তিক গবেষণা, প্রজেক্ট, প্রদর্শনী ও সৃজনশীল উদ্ভাবনে শিক্ষার্থীদের উৎসাহিত করে।",
    icon: <FaFlask />,
  },
  {
    title: "Debate Club",
    description:
      "যুক্তি, ভাষা দক্ষতা, আত্মবিশ্বাস ও নেতৃত্বগুণ বিকাশে বিতর্ক ক্লাব কার্যকর ভূমিকা রাখে।",
    icon: <FaMicrophone />,
  },
  {
    title: "Cultural Club",
    description:
      "গান, নৃত্য, আবৃত্তি, অভিনয় ও সাংস্কৃতিক পরিবেশনার মাধ্যমে শিক্ষার্থীদের প্রতিভা বিকাশ করে।",
    icon: <FaMasksTheater />,
  },
  {
    title: "Sports Club",
    description:
      "নিয়মিত খেলাধুলা, দলগত অনুশীলন ও শারীরিক সক্ষমতা বৃদ্ধির সুযোগ প্রদান করে।",
    icon: <FaPersonRunning />,
  },
  {
    title: "ICT Club",
    description:
      "কম্পিউটার, প্রযুক্তি, প্রোগ্রামিং ও ডিজিটাল দক্ষতা বিকাশে শিক্ষার্থীদের সহায়তা করে।",
    icon: <FaComputer />,
  },
  {
    title: "Art Club",
    description:
      "চিত্রাঙ্কন, কারুকাজ, সৃজনশীল নকশা ও শিল্পচর্চার মাধ্যমে শিক্ষার্থীদের সৃজনশীলতা প্রকাশের সুযোগ দেয়।",
    icon: <FaPalette />,
  },
];

const benefits: BenefitItem[] = [
  {
    title: "আত্মবিশ্বাস বৃদ্ধি",
    description:
      "মঞ্চে অংশগ্রহণ, প্রতিযোগিতা ও দলীয় কার্যক্রম শিক্ষার্থীর আত্মবিশ্বাস বাড়ায়।",
    icon: <FaStar />,
  },
  {
    title: "নেতৃত্বগুণ উন্নয়ন",
    description:
      "দল পরিচালনা, দায়িত্ব পালন ও সিদ্ধান্ত গ্রহণের মাধ্যমে নেতৃত্বগুণ বিকাশ হয়।",
    icon: <FaAward />,
  },
  {
    title: "দলগত কাজ শেখা",
    description:
      "সহশিক্ষা কার্যক্রমে একসঙ্গে কাজ করার মাধ্যমে সহযোগিতা ও সহমর্মিতা শেখা যায়।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "সৃজনশীলতা বিকাশ",
    description:
      "শিল্প, সংস্কৃতি, বিজ্ঞান ও প্রযুক্তিভিত্তিক কাজ শিক্ষার্থীর সৃজনশীল চিন্তাকে সমৃদ্ধ করে।",
    icon: <FaChildReaching />,
  },
  {
    title: "সামাজিক দায়িত্ববোধ",
    description:
      "পরিবেশ, সমাজ ও মানবিক কাজের মাধ্যমে শিক্ষার্থীদের দায়িত্বশীল নাগরিক হিসেবে গড়ে তোলে।",
    icon: <FaLeaf />,
  },
  {
    title: "শৃঙ্খলা ও নৈতিকতা",
    description:
      "নিয়মিত অংশগ্রহণ, সময়ানুবর্তিতা ও শিক্ষক নির্দেশনা মানার মাধ্যমে শৃঙ্খলা গড়ে ওঠে।",
    icon: <FaMedal />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "নিজের আগ্রহ ও প্রতিভা অনুযায়ী সহশিক্ষা কার্যক্রমে নিয়মিত অংশগ্রহণ করতে হবে।",
      "কার্যক্রম চলাকালীন শিক্ষক ও দায়িত্বপ্রাপ্ত ব্যক্তির নির্দেশনা মেনে চলতে হবে।",
      "দলগত কাজ, সময়ানুবর্তিতা, শৃঙ্খলা ও পারস্পরিক সম্মান বজায় রাখতে হবে।",
      "বিদ্যালয়ের নিয়মনীতি মেনে প্রতিযোগিতা ও অনুষ্ঠানে অংশগ্রহণ করতে হবে।",
      "জয়-পরাজয়কে স্বাভাবিকভাবে গ্রহণ করে শেখার মানসিকতা রাখতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানকে পড়াশোনার পাশাপাশি সহশিক্ষা কার্যক্রমে অংশগ্রহণে উৎসাহ দিন।",
      "সন্তানের আগ্রহ, প্রতিভা ও দক্ষতা অনুযায়ী উপযুক্ত কার্যক্রম বেছে নিতে সহযোগিতা করুন।",
      "বিদ্যালয়ের অনুষ্ঠান, প্রতিযোগিতা ও কার্যক্রমে প্রয়োজনীয় সহযোগিতা প্রদান করুন।",
      "সন্তানের আত্মবিশ্বাস বাড়াতে উৎসাহ, প্রশংসা ও ইতিবাচক সমর্থন দিন।",
      "সহশিক্ষা কার্যক্রমকে শিক্ষার্থীর সার্বিক বিকাশের গুরুত্বপূর্ণ অংশ হিসেবে বিবেচনা করুন।",
    ],
  },
];

const CoCurricularActivitiesPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Student Development
          </p>

          <h1 className="mt-5 text-[36px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            সহশিক্ষা কার্যক্রম
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থীদের সৃজনশীলতা, নেতৃত্ব, আত্মবিশ্বাস, দলগত কাজ ও নৈতিক
            বিকাশে সহশিক্ষা কার্যক্রম গুরুত্বপূর্ণ ভূমিকা রাখে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Activity Overview */}
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
                  পড়াশোনার পাশাপাশি পূর্ণ বিকাশ
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  সহশিক্ষা কার্যক্রম শিক্ষার্থীদের পাঠ্যবইয়ের বাইরের জগৎকে
                  জানার সুযোগ করে দেয়। খেলাধুলা, সংস্কৃতি, বিতর্ক, বিজ্ঞান,
                  প্রযুক্তি, শিল্প ও সামাজিক কার্যক্রমের মাধ্যমে শিক্ষার্থীদের
                  আত্মবিশ্বাস, নেতৃত্বগুণ, সৃজনশীলতা এবং সামাজিক দায়িত্ববোধ
                  গড়ে ওঠে। একটি সুন্দর বিদ্যালয় পরিবেশে সহশিক্ষা কার্যক্রম
                  শিক্ষার্থীর সার্বিক বিকাশের গুরুত্বপূর্ণ অংশ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Activities */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              প্রধান কার্যক্রম
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Major Activities
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {activity.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs and Groups */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                ক্লাব ও গ্রুপ
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Clubs and Groups
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {clubs.map((club) => (
                <div
                  key={club.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                      {club.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                        {club.title}
                      </h3>

                      <p className="mt-2 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                        {club.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              উপকারিতা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Benefits of Co-curricular Activities
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                    {benefit.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-black leading-tight text-primary">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </div>
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
                  সহশিক্ষা কার্যক্রম শিক্ষার্থীর পূর্ণ বিকাশের পথ
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  পাঠ্যপুস্তকের জ্ঞানের পাশাপাশি সহশিক্ষা কার্যক্রম শিক্ষার্থীদের
                  আত্মবিশ্বাস, নেতৃত্ব, সৃজনশীলতা এবং সামাজিক দায়িত্ববোধ গড়ে
                  তোলে। শিক্ষক, শিক্ষার্থী ও অভিভাবকদের সহযোগিতায় বিদ্যালয়ের
                  সহশিক্ষা কার্যক্রম আরও প্রাণবন্ত ও ফলপ্রসূ হয়ে ওঠে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    সার্বিক বিকাশ
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    সহশিক্ষা কার্যক্রম শিক্ষার্থীদের মেধা, মনন ও মানবিকতা
                    বিকাশে সহায়ক।
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

export default CoCurricularActivitiesPage;