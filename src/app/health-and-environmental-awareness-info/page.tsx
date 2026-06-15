import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBottleWater,
  FaCalendarCheck,
  FaCheck,
  FaCloudArrowDown,
  FaDroplet,
  FaHeartPulse,
  FaLeaf,
  FaPeopleGroup,
  FaRecycle,
  FaRegClock,
  FaSchoolFlag,
  FaSeedling,
  FaShieldHalved,
  FaStar,
  FaTrashCan,
  FaTree,
  FaUserGraduate,
  FaUtensils,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type AwarenessItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ActivityItem = {
  id: number;
  activityName: string;
  category: string;
  dateTime: string;
  responsible: string;
  note: string;
  fileUrl: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "স্বাস্থ্য সচেতনতা",
    value: "১০+",
    icon: <FaHeartPulse />,
  },
  {
    title: "পরিচ্ছন্নতা কার্যক্রম",
    value: "১২+",
    icon: <FaRecycle />,
  },
  {
    title: "পরিবেশ সংরক্ষণ",
    value: "১৫+",
    icon: <FaLeaf />,
  },
  {
    title: "নিরাপদ ক্যাম্পাস",
    value: "২৪/৭",
    icon: <FaShieldHalved />,
  },
];

const healthAwareness: AwarenessItem[] = [
  {
    title: "হাত ধোয়ার অভ্যাস",
    description:
      "খাবার খাওয়ার আগে, টয়লেট ব্যবহারের পর এবং বাইরে থেকে আসার পরে সাবান দিয়ে হাত ধোয়ার অভ্যাস গড়ে তুলতে হবে।",
    icon: <FaDroplet />,
  },
  {
    title: "নিরাপদ পানীয় জল",
    description:
      "শিক্ষার্থীদের পর্যাপ্ত ও নিরাপদ পানি পান করতে উৎসাহিত করা হয়, যাতে শরীর সুস্থ ও সক্রিয় থাকে।",
    icon: <FaBottleWater />,
  },
  {
    title: "পুষ্টিকর খাবার",
    description:
      "শারীরিক ও মানসিক বিকাশের জন্য স্বাস্থ্যকর খাবার, ফল, শাকসবজি ও সুষম খাদ্য গ্রহণ গুরুত্বপূর্ণ।",
    icon: <FaUtensils />,
  },
  {
    title: "নিয়মিত ব্যায়াম",
    description:
      "নিয়মিত খেলাধুলা ও শারীরিক ব্যায়াম শিক্ষার্থীদের সুস্থতা, মনোযোগ ও আত্মবিশ্বাস বাড়ায়।",
    icon: <FaHeartPulse />,
  },
  {
    title: "প্রাথমিক চিকিৎসা",
    description:
      "বিদ্যালয়ে ছোটখাটো অসুস্থতা বা আঘাতের ক্ষেত্রে দ্রুত সহায়তার জন্য প্রাথমিক চিকিৎসা ব্যবস্থা রাখা হয়।",
    icon: <FaShieldHalved />,
  },
];

const environmentalAwareness: AwarenessItem[] = [
  {
    title: "বৃক্ষরোপণ",
    description:
      "পরিবেশ রক্ষা, অক্সিজেন বৃদ্ধি ও সবুজ ক্যাম্পাস গড়ে তুলতে নিয়মিত বৃক্ষরোপণ কর্মসূচি পালন করা হয়।",
    icon: <FaTree />,
  },
  {
    title: "প্লাস্টিক ব্যবহার কমানো",
    description:
      "একবার ব্যবহারযোগ্য প্লাস্টিক কমিয়ে পরিবেশবান্ধব ব্যাগ, বোতল ও উপকরণ ব্যবহারে উৎসাহ দেওয়া হয়।",
    icon: <FaRecycle />,
  },
  {
    title: "পানি সাশ্রয়",
    description:
      "অপ্রয়োজনীয় পানি অপচয় রোধ করা এবং কল ব্যবহারের পর বন্ধ রাখার অভ্যাস গড়ে তোলা হয়।",
    icon: <FaDroplet />,
  },
  {
    title: "পরিচ্ছন্ন ক্যাম্পাস",
    description:
      "শ্রেণিকক্ষ, মাঠ, করিডোর ও বিদ্যালয় প্রাঙ্গণ পরিচ্ছন্ন রাখতে সবাইকে দায়িত্বশীল হতে হবে।",
    icon: <FaSchoolFlag />,
  },
  {
    title: "বর্জ্য ব্যবস্থাপনা",
    description:
      "ময়লা নির্দিষ্ট ডাস্টবিনে ফেলা এবং পুনর্ব্যবহারযোগ্য জিনিস আলাদা করে রাখার অভ্যাস তৈরি করা হয়।",
    icon: <FaTrashCan />,
  },
];

const schoolActivities: AwarenessItem[] = [
  {
    title: "স্বাস্থ্য ক্যাম্প",
    description:
      "শিক্ষার্থীদের স্বাস্থ্য পরীক্ষা, স্বাস্থ্য পরামর্শ ও সচেতনতা বৃদ্ধির জন্য স্বাস্থ্য ক্যাম্প আয়োজন করা হয়।",
    icon: <FaHeartPulse />,
  },
  {
    title: "পরিচ্ছন্নতা অভিযান",
    description:
      "বিদ্যালয় প্রাঙ্গণ পরিচ্ছন্ন রাখা এবং শিক্ষার্থীদের পরিচ্ছন্নতার গুরুত্ব বোঝাতে বিশেষ অভিযান পরিচালিত হয়।",
    icon: <FaRecycle />,
  },
  {
    title: "বৃক্ষরোপণ কর্মসূচি",
    description:
      "শিক্ষার্থীদের অংশগ্রহণে ক্যাম্পাসে বৃক্ষরোপণ ও গাছের যত্ন নেওয়ার কর্মসূচি পালন করা হয়।",
    icon: <FaSeedling />,
  },
  {
    title: "সচেতনতা সভা",
    description:
      "স্বাস্থ্যবিধি, নিরাপত্তা, পরিবেশ রক্ষা ও দায়িত্বশীল আচরণ বিষয়ে শিক্ষার্থীদের সচেতন করা হয়।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "পরিবেশ দিবস পালন",
    description:
      "বিশ্ব পরিবেশ দিবস ও অন্যান্য পরিবেশভিত্তিক দিবসে আলোচনা, র‍্যালি ও প্রদর্শনীর আয়োজন করা হয়।",
    icon: <FaLeaf />,
  },
];

const activityItems: ActivityItem[] = [
  {
    id: 1,
    activityName: "হাত ধোয়া সচেতনতা কর্মসূচি",
    category: "স্বাস্থ্য",
    dateTime: "১০ জানুয়ারি ২০২৬",
    responsible: "স্বাস্থ্য কমিটি",
    note: "সকল শ্রেণির শিক্ষার্থীদের অংশগ্রহণ বাধ্যতামূলক।",
    fileUrl: "#",
  },
  {
    id: 2,
    activityName: "পরিচ্ছন্ন ক্যাম্পাস অভিযান",
    category: "পরিচ্ছন্নতা",
    dateTime: "১৫ জানুয়ারি ২০২৬",
    responsible: "স্কাউট দল",
    note: "শ্রেণিকক্ষ ও ক্যাম্পাস পরিচ্ছন্ন রাখার কর্মসূচি।",
    fileUrl: "#",
  },
  {
    id: 3,
    activityName: "বৃক্ষরোপণ কর্মসূচি",
    category: "পরিবেশ",
    dateTime: "০৫ ফেব্রুয়ারি ২০২৬",
    responsible: "ইকো ক্লাব",
    note: "বিদ্যালয় প্রাঙ্গণে ফলজ ও ঔষধি গাছ রোপণ করা হবে।",
    fileUrl: "#",
  },
  {
    id: 4,
    activityName: "স্বাস্থ্য পরীক্ষা ক্যাম্প",
    category: "স্বাস্থ্য",
    dateTime: "২০ ফেব্রুয়ারি ২০২৬",
    responsible: "বিদ্যালয় কর্তৃপক্ষ",
    note: "শিক্ষার্থীদের প্রাথমিক স্বাস্থ্য পরীক্ষা করা হবে।",
    fileUrl: "#",
  },
  {
    id: 5,
    activityName: "প্লাস্টিক মুক্ত ক্যাম্পাস ঘোষণা",
    category: "পরিবেশ",
    dateTime: "১০ মার্চ ২০২৬",
    responsible: "পরিবেশ কমিটি",
    note: "একবার ব্যবহারযোগ্য প্লাস্টিক ব্যবহার নিরুৎসাহিত করা হবে।",
    fileUrl: "#",
  },
  {
    id: 6,
    activityName: "বিশ্ব পরিবেশ দিবস পালন",
    category: "পরিবেশ দিবস",
    dateTime: "০৫ জুন ২০২৬",
    responsible: "ইকো ক্লাব ও শিক্ষকবৃন্দ",
    note: "আলোচনা, পোস্টার প্রদর্শনী ও সচেতনতা কার্যক্রম অনুষ্ঠিত হবে।",
    fileUrl: "#",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "নিয়মিত সাবান দিয়ে হাত ধোয়া এবং ব্যক্তিগত পরিচ্ছন্নতা বজায় রাখতে হবে।",
      "পরিচ্ছন্ন পোশাক, নখ, চুল ও স্বাস্থ্যকর অভ্যাস বজায় রাখতে হবে।",
      "ময়লা নির্দিষ্ট ডাস্টবিনে ফেলতে হবে এবং বিদ্যালয় প্রাঙ্গণ নোংরা করা যাবে না।",
      "গাছপালা, ফুলের বাগান ও বিদ্যালয়ের পরিবেশ রক্ষা করতে হবে।",
      "পানি, বিদ্যুৎ ও বিদ্যালয়ের সম্পদ অপচয় করা যাবে না।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানের স্বাস্থ্যবিধি, পরিচ্ছন্নতা ও নিরাপদ অভ্যাস নিয়মিত পর্যবেক্ষণ করুন।",
      "স্বাস্থ্যকর খাবার, পর্যাপ্ত পানি এবং নিয়মিত ঘুম নিশ্চিত করতে সহায়তা করুন।",
      "সন্তানকে পরিবেশবান্ধব অভ্যাস, গাছের যত্ন ও প্লাস্টিক ব্যবহার কমাতে উৎসাহ দিন।",
      "অসুস্থ হলে সন্তানকে বিদ্যালয়ে পাঠানোর আগে প্রয়োজনীয় চিকিৎসা ও পরামর্শ নিন।",
      "বিদ্যালয়ের স্বাস্থ্য ও পরিবেশ সচেতনতা কার্যক্রমে ইতিবাচক সহযোগিতা করুন।",
    ],
  },
];

const HealthEnvironmentalAwarenessInfoPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Health & Environment
          </p>

          <h1 className="mt-5 text-[34px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            স্বাস্থ্য ও পরিবেশ সচেতনতা তথ্য
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থীদের স্বাস্থ্য সুরক্ষা, পরিচ্ছন্নতা, নিরাপদ অভ্যাস,
            পরিবেশ সংরক্ষণ ও দায়িত্বশীল জীবনযাপনের সচেতনতামূলক তথ্য।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Awareness Overview */}
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
                  সুস্থ জীবন, পরিচ্ছন্ন পরিবেশ
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  স্বাস্থ্য ও পরিবেশ সচেতনতা শিক্ষার্থীদের দায়িত্বশীল, সুস্থ
                  ও সচেতন নাগরিক হিসেবে গড়ে তুলতে সাহায্য করে। নিয়মিত
                  স্বাস্থ্যবিধি মানা, পরিচ্ছন্নতা বজায় রাখা, পরিবেশ সংরক্ষণ,
                  পানি ও বিদ্যুৎ সাশ্রয় এবং গাছপালার যত্ন নেওয়া একটি সুন্দর
                  বিদ্যালয় ও সমাজ গঠনের গুরুত্বপূর্ণ অংশ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Awareness */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Awareness Message
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  পরিচ্ছন্নতা ও পরিবেশ রক্ষাই সুস্থতার প্রথম ধাপ
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের প্রতিটি শিক্ষার্থী যদি নিজের স্বাস্থ্য, শ্রেণিকক্ষ,
                  ক্যাম্পাস এবং পরিবেশের প্রতি দায়িত্বশীল হয়, তাহলে একটি
                  নিরাপদ, সুন্দর ও স্বাস্থ্যকর শিক্ষার পরিবেশ তৈরি হয়।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    স্বাস্থ্য: পরিচ্ছন্ন অভ্যাস
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    পরিবেশ: সবুজ ক্যাম্পাস
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    দায়িত্ব: সবার
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaLeaf />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Green Campus
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    সুস্থ শিক্ষার্থী ও পরিচ্ছন্ন পরিবেশই সুন্দর বিদ্যালয়ের
                    পরিচয়।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Awareness */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              স্বাস্থ্য সচেতনতা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Health Awareness
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {healthAwareness.map((item) => (
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

      {/* Environmental Awareness */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                পরিবেশ সচেতনতা
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Environmental Awareness
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {environmentalAwareness.map((item) => (
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

      {/* School Activities */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বিদ্যালয় কার্যক্রম
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              School Activities
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {schoolActivities.map((item) => (
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

      {/* Awareness Table */}
      <section
        id="awareness-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              সচেতনতা কার্যক্রম
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Awareness Table
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
                      কার্যক্রমের নাম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিভাগ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      তারিখ / সময়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      দায়িত্বপ্রাপ্ত
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      মন্তব্য
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      বিস্তারিত
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {activityItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaLeaf />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {item.activityName}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.dateTime}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.responsible}
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.note}
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
              {activityItems.map((item) => (
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
                        {item.activityName}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaLeaf />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">
                        তারিখ / সময়:
                      </span>{" "}
                      {item.dateTime}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">
                        দায়িত্বপ্রাপ্ত:
                      </span>{" "}
                      {item.responsible}
                    </p>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">মন্তব্য:</span>{" "}
                      {item.note}
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
                  সচেতন শিক্ষার্থীই সুন্দর ভবিষ্যৎ গড়ে
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  স্বাস্থ্যবিধি মানা, পরিচ্ছন্নতা বজায় রাখা এবং পরিবেশ রক্ষা
                  করা শুধু বিদ্যালয়ের দায়িত্ব নয়, এটি প্রতিটি শিক্ষার্থীর
                  ব্যক্তিগত দায়িত্ব। ছোট ছোট ভালো অভ্যাসই একটি সুস্থ, নিরাপদ ও
                  সবুজ ভবিষ্যৎ গড়ে তোলে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaTree />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Healthy & Green
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    সুস্থ থাকুন, পরিবেশ বাঁচান এবং বিদ্যালয় পরিচ্ছন্ন রাখুন।
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

export default HealthEnvironmentalAwarenessInfoPage;
