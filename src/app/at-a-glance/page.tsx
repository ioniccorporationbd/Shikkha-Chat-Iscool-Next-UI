import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaComputer,
  FaFileLines,
  FaFlask,
  FaGraduationCap,
  FaMedal,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegBuilding,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTrophy,
  FaUserGraduate,
  FaUsersGear,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type InfoCard = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type ProgramItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type TableItem = {
  id: number;
  subject: string;
  description: string;
  value: string;
  note: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "প্রতিষ্ঠার সাল",
    value: "২০০৫",
    description: "দীর্ঘদিন ধরে মানসম্মত শিক্ষা কার্যক্রম পরিচালনা।",
    icon: <FaSchoolFlag />,
  },
  {
    title: "মোট শিক্ষার্থী",
    value: "১২০০+",
    description: "বিভিন্ন শ্রেণিতে নিয়মিত শিক্ষার্থী অধ্যয়ন করছে।",
    icon: <FaUserGraduate />,
  },
  {
    title: "মোট শিক্ষক",
    value: "৪৫+",
    description: "অভিজ্ঞ ও বিষয়ভিত্তিক শিক্ষক-শিক্ষিকা।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "লাইব্রেরি বই",
    value: "৫০০০+",
    description: "পাঠ্য, গল্প, বিজ্ঞান ও রেফারেন্স বইয়ের সংগ্রহ।",
    icon: <FaBookOpen />,
  },
];

const academicInfo: InfoCard[] = [
  {
    title: "শিক্ষাবর্ষ",
    value: "২০২৬",
    description:
      "নতুন শিক্ষাবর্ষ অনুযায়ী বার্ষিক পাঠ পরিকল্পনা, পরীক্ষা, মূল্যায়ন এবং সহশিক্ষা কার্যক্রম সাজানো হয়।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "শ্রেণি কার্যক্রম",
    value: "প্লে - দশম",
    description:
      "প্রাথমিক থেকে মাধ্যমিক পর্যায় পর্যন্ত শিক্ষার্থীদের বয়স ও দক্ষতা অনুযায়ী শ্রেণিভিত্তিক পাঠদান পরিচালিত হয়।",
    icon: <FaGraduationCap />,
  },
  {
    title: "পাঠ্যক্রম",
    value: "জাতীয় কারিকুলাম",
    description:
      "সরকারি নির্দেশনা ও আধুনিক শিক্ষাপদ্ধতির সমন্বয়ে শিক্ষার্থীদের জন্য মানসম্মত পাঠ্যক্রম অনুসরণ করা হয়।",
    icon: <FaBookOpen />,
  },
  {
    title: "মূল্যায়ন পদ্ধতি",
    value: "নিয়মিত",
    description:
      "শ্রেণি পরীক্ষা, অ্যাসাইনমেন্ট, মৌখিক মূল্যায়ন, অর্ধবার্ষিক ও বার্ষিক পরীক্ষার মাধ্যমে অগ্রগতি যাচাই করা হয়।",
    icon: <FaClipboardCheck />,
  },
];

const studentTeacherInfo: InfoCard[] = [
  {
    title: "মোট শিক্ষার্থী",
    value: "১২০০+",
    description:
      "বিদ্যালয়ের বিভিন্ন শ্রেণিতে নিয়মিত শিক্ষার্থীরা একাডেমিক ও সহশিক্ষা কার্যক্রমে অংশগ্রহণ করছে।",
    icon: <FaUserGraduate />,
  },
  {
    title: "ছাত্র",
    value: "৬৫০+",
    description:
      "ছাত্রদের একাডেমিক অগ্রগতি, শৃঙ্খলা ও দক্ষতা উন্নয়নে নিয়মিত কার্যক্রম পরিচালিত হয়।",
    icon: <FaGraduationCap />,
  },
  {
    title: "ছাত্রী",
    value: "৫৫০+",
    description:
      "ছাত্রীদের নিরাপদ পরিবেশ, মানসম্মত শিক্ষা ও অংশগ্রহণমূলক কার্যক্রম নিশ্চিত করা হয়।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "শিক্ষক",
    value: "৪৫+",
    description:
      "অভিজ্ঞ ও বিষয়ভিত্তিক শিক্ষক-শিক্ষিকারা শিক্ষার্থীদের পাঠদান ও মূল্যায়ন পরিচালনা করেন।",
    icon: <FaPersonChalkboard />,
  },
];

const campusFacilities: InfoCard[] = [
  {
    title: "আধুনিক শ্রেণিকক্ষ",
    value: "৩০+",
    description:
      "আলোকিত, পরিচ্ছন্ন ও শিক্ষাবান্ধব শ্রেণিকক্ষে পাঠদান পরিচালিত হয়, যাতে শিক্ষার্থীরা মনোযোগ দিয়ে শিখতে পারে।",
    icon: <FaRegBuilding />,
  },
  {
    title: "সমৃদ্ধ লাইব্রেরি",
    value: "৫০০০+ বই",
    description:
      "পাঠ্যবই, গল্প, ইতিহাস, বিজ্ঞান, সাধারণ জ্ঞান ও রেফারেন্স বইয়ের মাধ্যমে শিক্ষার্থীদের পাঠাভ্যাস তৈরি হয়।",
    icon: <FaBookOpen />,
  },
  {
    title: "বিজ্ঞান ল্যাব",
    value: "১টি",
    description:
      "বিজ্ঞানভিত্তিক ব্যবহারিক শিক্ষা, পরীক্ষণ ও পর্যবেক্ষণের জন্য শিক্ষার্থীরা ল্যাব সুবিধা ব্যবহার করে।",
    icon: <FaFlask />,
  },
  {
    title: "কম্পিউটার ল্যাব",
    value: "১টি",
    description:
      "আইসিটি শিক্ষা, ডিজিটাল দক্ষতা এবং প্রযুক্তিভিত্তিক শেখার জন্য কম্পিউটার ল্যাব ব্যবহৃত হয়।",
    icon: <FaComputer />,
  },
];

const programs: ProgramItem[] = [
  {
    title: "একাডেমিক উৎকর্ষ প্রোগ্রাম",
    description:
      "নিয়মিত ক্লাস, সাপ্তাহিক মূল্যায়ন, বিশেষ ক্লাস এবং দুর্বল শিক্ষার্থীদের জন্য অতিরিক্ত সহায়তার মাধ্যমে একাডেমিক মান উন্নত করা হয়।",
    icon: <FaGraduationCap />,
  },
  {
    title: "সহশিক্ষা প্রোগ্রাম",
    description:
      "বিতর্ক, আবৃত্তি, চিত্রাঙ্কন, সাংস্কৃতিক অনুষ্ঠান, বিজ্ঞান মেলা ও ক্লাব কার্যক্রম শিক্ষার্থীদের সৃজনশীলতা বাড়ায়।",
    icon: <FaUsersGear />,
  },
  {
    title: "ক্রীড়া ও সুস্থতা প্রোগ্রাম",
    description:
      "নিয়মিত খেলাধুলা, শরীরচর্চা, বার্ষিক ক্রীড়া প্রতিযোগিতা এবং স্বাস্থ্য সচেতনতা কার্যক্রম শিক্ষার্থীদের সুস্থ রাখে।",
    icon: <FaTrophy />,
  },
  {
    title: "শৃঙ্খলা ও নেতৃত্ব প্রোগ্রাম",
    description:
      "শৃঙ্খলা, দায়িত্ববোধ, সময়ানুবর্তিতা, দলগত কাজ ও নেতৃত্বের গুণাবলি তৈরির জন্য নিয়মিত কার্যক্রম পরিচালিত হয়।",
    icon: <FaShieldHalved />,
  },
];

const achievements: InfoCard[] = [
  {
    title: "একাডেমিক সাফল্য",
    value: "৯৫%+",
    description:
      "নিয়মিত পাঠদান, পরীক্ষার প্রস্তুতি এবং শিক্ষক সহায়তার মাধ্যমে শিক্ষার্থীরা ভালো ফলাফল অর্জন করে।",
    icon: <FaAward />,
  },
  {
    title: "ক্রীড়া অর্জন",
    value: "২০+",
    description:
      "স্থানীয় ও আন্তঃবিদ্যালয় ক্রীড়া প্রতিযোগিতায় শিক্ষার্থীরা নিয়মিত অংশগ্রহণ ও সাফল্য অর্জন করে।",
    icon: <FaTrophy />,
  },
  {
    title: "সাংস্কৃতিক অর্জন",
    value: "১৫+",
    description:
      "গান, আবৃত্তি, বিতর্ক, চিত্রাঙ্কন ও সাংস্কৃতিক পরিবেশনায় শিক্ষার্থীদের উল্লেখযোগ্য অংশগ্রহণ রয়েছে।",
    icon: <FaMedal />,
  },
  {
    title: "সহশিক্ষা কার্যক্রম",
    value: "২৫+",
    description:
      "বিজ্ঞান, সাহিত্য, পরিবেশ, স্কাউট, নেতৃত্ব ও সেবামূলক কার্যক্রমের মাধ্যমে শিক্ষার্থীদের পূর্ণাঙ্গ বিকাশ হয়।",
    icon: <FaStar />,
  },
];

const tableItems: TableItem[] = [
  {
    id: 1,
    subject: "প্রতিষ্ঠা",
    description: "বিদ্যালয়ের প্রতিষ্ঠার সাল",
    value: "২০০৫",
    note: "দীর্ঘদিনের শিক্ষাসেবা ও অভিজ্ঞতা।",
  },
  {
    id: 2,
    subject: "ইআইআইএন / কোড",
    description: "বিদ্যালয়ের পরিচিতি কোড",
    value: "১২৩৪৫৬",
    note: "অফিসিয়াল রেকর্ড অনুযায়ী পরিবর্তনযোগ্য।",
  },
  {
    id: 3,
    subject: "শ্রেণি",
    description: "যে শ্রেণি পর্যন্ত পাঠদান করা হয়",
    value: "প্লে - দশম",
    note: "শ্রেণিভিত্তিক পাঠদান ও মূল্যায়ন।",
  },
  {
    id: 4,
    subject: "শিক্ষার্থী",
    description: "বর্তমান মোট শিক্ষার্থী",
    value: "১২০০+",
    note: "ছাত্র ও ছাত্রী মিলিয়ে।",
  },
  {
    id: 5,
    subject: "শিক্ষক",
    description: "মোট শিক্ষক-শিক্ষিকা",
    value: "৪৫+",
    note: "বিষয়ভিত্তিক অভিজ্ঞ শিক্ষক।",
  },
  {
    id: 6,
    subject: "কর্মকর্তা-কর্মচারী",
    description: "অফিস ও সহায়ক কর্মী",
    value: "২০+",
    note: "প্রশাসনিক ও সহায়ক সেবা।",
  },
  {
    id: 7,
    subject: "লাইব্রেরি",
    description: "লাইব্রেরির বই সংখ্যা",
    value: "৫০০০+",
    note: "পাঠ্য, গল্প ও রেফারেন্স বই।",
  },
  {
    id: 8,
    subject: "ল্যাব সুবিধা",
    description: "বিজ্ঞান ও কম্পিউটার ল্যাব",
    value: "২টি",
    note: "ব্যবহারিক শিক্ষা সহায়ক।",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের জন্য",
    icon: <FaUserGraduate />,
    points: [
      "বিদ্যালয়ের নিয়মনীতি, সময়সূচি ও একাডেমিক নির্দেশনা নিয়মিত অনুসরণ করতে হবে।",
      "লাইব্রেরি, ল্যাব, শ্রেণিকক্ষ ও ক্যাম্পাসের সম্পদ যত্নসহকারে ব্যবহার করতে হবে।",
      "ক্লাস, পরীক্ষা, সহশিক্ষা কার্যক্রম ও ক্রীড়া অনুষ্ঠানে সক্রিয় অংশগ্রহণ করতে হবে।",
      "শিক্ষক, সহপাঠী ও বিদ্যালয়ের সকল সদস্যের প্রতি সম্মানজনক আচরণ বজায় রাখতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের জন্য",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের উপস্থিতি, পড়াশোনা, আচরণ ও পরীক্ষার অগ্রগতি নিয়মিত পর্যবেক্ষণ করুন।",
      "বিদ্যালয়ের নোটিশ, ফি, পরীক্ষা, সভা ও গুরুত্বপূর্ণ আপডেট নিয়মিত অনুসরণ করুন।",
      "শ্রেণি শিক্ষক ও বিদ্যালয় কর্তৃপক্ষের সঙ্গে প্রয়োজনীয় যোগাযোগ বজায় রাখুন।",
      "সন্তানকে সময়মতো বিদ্যালয়ে পাঠানো, স্বাস্থ্যকর অভ্যাস ও ভালো আচরণে উৎসাহিত করুন।",
    ],
  },
];

const AtAGlancePage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* উপরের অংশ */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-300 text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.65em] text-brand-primary sm:text-sm">
            এক নজরে
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            এক নজরে বিদ্যালয়
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের পরিচিতি, প্রতিষ্ঠার ইতিহাস, একাডেমিক তথ্য,
            শিক্ষার্থী-শিক্ষক পরিসংখ্যান, সুবিধা ও অর্জনের সংক্ষিপ্ত বিবরণ।
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </section>

      {/* সারসংক্ষেপ কার্ড */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-375 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ছবিসহ পরিচিতি */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375 rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                বিদ্যালয়ের পরিচিতি
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl lg:text-5xl">
                শিক্ষা, শৃঙ্খলা ও সৃজনশীলতার সমন্বয়ে একটি পূর্ণাঙ্গ শিক্ষা
                প্রতিষ্ঠান
              </h2>

              <p className="mt-6 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                আমাদের বিদ্যালয় শিক্ষার্থীদের মানসম্মত শিক্ষা, নৈতিকতা,
                শৃঙ্খলা, নেতৃত্ব, সৃজনশীলতা এবং সামাজিক দায়িত্ববোধ গঠনে কাজ
                করে। এখানে পাঠদান শুধু বইয়ের মধ্যে সীমাবদ্ধ নয়; বরং নিয়মিত
                মূল্যায়ন, সহশিক্ষা কার্যক্রম, ক্রীড়া, সংস্কৃতি, বিজ্ঞানচর্চা,
                প্রযুক্তি শিক্ষা এবং মানবিক মূল্যবোধের মাধ্যমে শিক্ষার্থীদের
                ভবিষ্যতের জন্য প্রস্তুত করা হয়।
              </p>

              <p className="mt-4 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                অভিজ্ঞ শিক্ষক, নিরাপদ ক্যাম্পাস, সমৃদ্ধ লাইব্রেরি, ল্যাব
                সুবিধা এবং শিক্ষার্থীবান্ধব পরিবেশের কারণে অভিভাবক ও
                শিক্ষার্থীদের কাছে বিদ্যালয়টি একটি নির্ভরযোগ্য শিক্ষা
                প্রতিষ্ঠান হিসেবে পরিচিত।
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-5">
                <Image
                  src="/assets/3.jpg"
                  alt="বিদ্যালয় ক্যাম্পাস"
                  width={900}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-90 w-full rounded-3xl object-cover"
                />

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">লক্ষ্য</p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      শিক্ষার্থীদের জ্ঞান, নৈতিকতা ও দক্ষতায় এগিয়ে নেওয়া।
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">ভিশন</p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      দায়িত্বশীল, সৃজনশীল ও আত্মবিশ্বাসী নাগরিক গড়ে তোলা।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* বিশেষ উপস্থাপনা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375 overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaStar className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  বিদ্যালয়ের প্রোফাইল
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                এক নজরে তথ্য, স্পষ্ট পরিচিতি এবং সুন্দর উপস্থাপনা
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের গুরুত্বপূর্ণ তথ্যগুলো এক জায়গায় উপস্থাপন করলে
                শিক্ষার্থী, অভিভাবক ও দর্শনার্থীরা খুব সহজে বিদ্যালয়ের
                একাডেমিক মান, সুবিধা, পরিবেশ, শিক্ষক-শিক্ষার্থী পরিসংখ্যান এবং
                অর্জন সম্পর্কে ধারণা পেতে পারেন।
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "মানসম্মত শিক্ষা",
                  "নিরাপদ ক্যাম্পাস",
                  "অভিজ্ঞ শিক্ষক",
                  "সহশিক্ষা কার্যক্রম",
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
                  <FaSchoolFlag />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  ১৮+ বছর
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  দীর্ঘ অভিজ্ঞতা, ধারাবাহিক শিক্ষা কার্যক্রম এবং শিক্ষার্থীদের
                  সার্বিক বিকাশে নিবেদিত একটি প্রতিষ্ঠান।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* একাডেমিক তথ্য */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              একাডেমিক তথ্য
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              একাডেমিক তথ্য
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              বিদ্যালয়ের একাডেমিক কার্যক্রম নিয়মিত পাঠদান, পরিকল্পিত মূল্যায়ন
              এবং শিক্ষার্থী সহায়তার মাধ্যমে পরিচালিত হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {academicInfo.map((item) => (
              <article
                key={item.title}
                className="group rounded-[28px] border border-soft bg-page-primary p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {item.icon}
                </div>

                <p className="mt-5 text-2xl font-black text-brand-primary">
                  {item.value}
                </p>

                <h3 className="mt-2 text-xl font-black text-primary">
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

      {/* শিক্ষার্থী ও শিক্ষক */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375 rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              শিক্ষার্থী ও শিক্ষক
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              শিক্ষার্থী ও শিক্ষক
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              শিক্ষার্থী, শিক্ষক ও সহায়ক কর্মীদের সমন্বয়ে বিদ্যালয়ের একাডেমিক
              পরিবেশ সুন্দরভাবে পরিচালিত হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {studentTeacherInfo.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {item.icon}
                </div>

                <p className="mt-5 text-2xl font-black text-brand-primary">
                  {item.value}
                </p>

                <h3 className="mt-2 text-xl font-black text-primary">
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

      {/* ছবিসহ শেখার পরিবেশ */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375 rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-4">
              <Image
                src="/assets/4.jpg"
                alt="শ্রেণিকক্ষ"
                width={900}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-85 w-full rounded-3xl object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                শেখার পরিবেশ
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                শিক্ষার্থীবান্ধব শ্রেণিকক্ষ ও মনোযোগী শেখার পরিবেশ
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                বিদ্যালয়ের শ্রেণিকক্ষগুলো শিক্ষার্থীদের শেখার উপযোগী করে
                সাজানো। শিক্ষকরা পাঠদানকে সহজ, আনন্দদায়ক ও অংশগ্রহণমূলক করার
                চেষ্টা করেন। নিয়মিত ক্লাসওয়ার্ক, প্রশ্নোত্তর, দলগত আলোচনা এবং
                ব্যবহারিক উদাহরণের মাধ্যমে শিক্ষার্থীদের শেখার আগ্রহ বাড়ানো
                হয়।
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-[20px] border border-soft bg-page-secondary p-4">
                  <p className="font-black text-primary">অংশগ্রহণমূলক ক্লাস</p>

                  <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                    প্রশ্নোত্তর ও অংশগ্রহণমূলক পাঠদান।
                  </p>
                </div>

                <div className="rounded-[20px] border border-soft bg-page-secondary p-4">
                  <p className="font-black text-primary">নিয়মিত মূল্যায়ন</p>

                  <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                    ধারাবাহিক মূল্যায়নের মাধ্যমে উন্নয়ন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* প্রোগ্রাম */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375 rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              প্রোগ্রাম ও কার্যক্রম
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              প্রোগ্রাম ও কার্যক্রম
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              শুধু পাঠ্যবই নয়, শিক্ষার্থীদের পূর্ণাঙ্গ বিকাশের জন্য বিভিন্ন
              একাডেমিক, সহশিক্ষা, ক্রীড়া ও নেতৃত্বমূলক কার্যক্রম পরিচালিত হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-[26px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {program.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ক্যাম্পাস সুবিধা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ক্যাম্পাস সুবিধা
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              ক্যাম্পাস সুবিধাসমূহ
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              নিরাপদ ও শিক্ষাবান্ধব ক্যাম্পাস শিক্ষার্থীদের শেখা, অনুশীলন এবং
              সৃজনশীলতা বিকাশে সহায়তা করে।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {campusFacilities.map((facility) => (
              <article
                key={facility.title}
                className="group rounded-[28px] border border-soft bg-page-primary p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {facility.icon}
                </div>

                <p className="mt-5 text-2xl font-black text-brand-primary">
                  {facility.value}
                </p>

                <h3 className="mt-2 text-xl font-black text-primary">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {facility.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* দ্বিতীয় ছবি অংশ */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375 rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                শ্রেণিকক্ষের বাইরে
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                সহশিক্ষা কার্যক্রমে শিক্ষার্থীদের আত্মবিশ্বাস ও নেতৃত্ব গড়ে ওঠে
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                বিদ্যালয়ে ক্রীড়া, সাংস্কৃতিক অনুষ্ঠান, বিতর্ক, বিজ্ঞান মেলা,
                ক্লাব কার্যক্রম এবং পরিবেশ সচেতনতা কর্মসূচি নিয়মিত আয়োজন করা
                হয়। এসব কার্যক্রম শিক্ষার্থীদের দলগত কাজ, নেতৃত্ব, সৃজনশীলতা,
                আত্মবিশ্বাস এবং সামাজিক দায়িত্ববোধ তৈরি করে।
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "বিতর্ক, আবৃত্তি ও সাংস্কৃতিক পরিবেশনা",
                  "বিজ্ঞান মেলা, ক্লাব কার্যক্রম ও উদ্ভাবনী প্রজেক্ট",
                  "ক্রীড়া, শরীরচর্চা ও নেতৃত্বমূলক কার্যক্রম",
                ].map((point) => (
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
            </div>

            <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-4">
              <Image
                src="/assets/3.jpg"
                alt="বিদ্যালয়ের প্রোগ্রাম"
                width={900}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-90 w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* অর্জন */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-375 rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              অর্জন ও সাফল্য
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              অর্জন ও সাফল্য
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              একাডেমিক ফলাফল, ক্রীড়া, সংস্কৃতি ও সহশিক্ষা কার্যক্রমে
              শিক্ষার্থীদের ধারাবাহিক সাফল্য বিদ্যালয়ের মানকে প্রতিফলিত করে।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {item.icon}
                </div>

                <p className="mt-5 text-2xl font-black text-brand-primary">
                  {item.value}
                </p>

                <h3 className="mt-2 text-xl font-black text-primary">
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

      {/* টেবিল */}
      <section
        id="at-a-glance-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-375">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              উপস্থাপিত তথ্য
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              এক নজরে তথ্যের তালিকা
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              বিদ্যালয়ের গুরুত্বপূর্ণ তথ্যগুলো নিচের টেবিলে সহজভাবে উপস্থাপন
              করা হয়েছে।
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-soft bg-page-primary shadow-sm">
            <div className="hidden lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-soft bg-page-secondary">
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিষয়
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিবরণ
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      তথ্য / সংখ্যা
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      মন্তব্য
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {tableItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                            <FaFileLines />
                          </span>

                          <p className="text-sm font-black text-primary">
                            {item.subject}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.description}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-color-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.value}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {tableItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.subject}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-primary">
                        {item.value}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-brand-primary">
                      <FaFileLines />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">বিবরণ:</span>{" "}
                      {item.description}
                    </p>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">মন্তব্য:</span>{" "}
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* নির্দেশনা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-375 grid-cols-1 gap-6 lg:grid-cols-2">
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
        <div className="mx-auto max-w-375 overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaCalendarCheck className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  সমাপনী বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                এক নজরে পরিচিতি, আস্থার সঙ্গে শিক্ষার পথচলা
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের তথ্য, প্রোগ্রাম, সুবিধা ও অর্জন একসঙ্গে জানলে
                অভিভাবক ও শিক্ষার্থীরা সহজেই একটি স্পষ্ট ধারণা পান। আমাদের
                লক্ষ্য হলো শিক্ষার্থীদের জন্য নিরাপদ, মানসম্মত, সৃজনশীল এবং
                ভবিষ্যতমুখী শিক্ষা পরিবেশ নিশ্চিত করা।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaSchoolFlag />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  এক নজরে
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  বিদ্যালয়ের গুরুত্বপূর্ণ তথ্য, সুবিধা, অর্জন ও পরিচিতি এক
                  জায়গায় সুন্দরভাবে উপস্থাপন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AtAGlancePage;