import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaReceipt,
  FaRegClock,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTriangleExclamation,
  FaUserGraduate,
  FaUsersGear,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type TransferType = {
  title: string;
  description: string;
  icon: ReactNode;
};

type RequiredDocument = {
  title: string;
  description: string;
  icon: ReactNode;
};

type ProcessStep = {
  title: string;
  description: string;
};

type RuleItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type TransferItem = {
  id: number;
  step: string;
  task: string;
  responsible: string;
  timeline: string;
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
    title: "ট্রান্সফার আবেদন",
    value: "ফরম",
    icon: <FaFileLines />,
  },
  {
    title: "ছাড়পত্র / টিসি",
    value: "প্রযোজ্য",
    icon: <FaSchoolFlag />,
  },
  {
    title: "ডকুমেন্ট যাচাই",
    value: "আবশ্যক",
    icon: <FaClipboardCheck />,
  },
  {
    title: "অফিস অনুমোদন",
    value: "চূড়ান্ত",
    icon: <FaShieldHalved />,
  },
];

const transferTypes: TransferType[] = [
  {
    title: "ভর্তি স্থানান্তর",
    description:
      "অন্য বিদ্যালয় থেকে আগত শিক্ষার্থীদের ভর্তি, ছাড়পত্র যাচাই ও প্রয়োজনীয় ডকুমেন্ট গ্রহণের প্রক্রিয়া।",
    icon: <FaUserGraduate />,
  },
  {
    title: "বহির্গামী স্থানান্তর",
    description:
      "এই বিদ্যালয় থেকে অন্য বিদ্যালয়ে যাওয়ার জন্য ছাড়পত্র বা ট্রান্সফার সার্টিফিকেট প্রদানের প্রক্রিয়া।",
    icon: <FaSchoolFlag />,
  },
  {
    title: "শিক্ষাবর্ষের মাঝামাঝি স্থানান্তর",
    description:
      "শিক্ষাবর্ষের মাঝামাঝি সময়ে বিশেষ কারণ বা পারিবারিক প্রয়োজনে স্থানান্তরের আবেদন।",
    icon: <FaRegClock />,
  },
  {
    title: "শ্রেণি স্থানান্তর",
    description:
      "শিক্ষার্থীর এক শ্রেণি থেকে অন্য শ্রেণিতে স্থানান্তর বা শ্রেণি সংশোধনের প্রশাসনিক প্রক্রিয়া।",
    icon: <FaGraduationCap />,
  },
  {
    title: "শাখা স্থানান্তর",
    description:
      "একই শ্রেণির মধ্যে শাখা পরিবর্তনের আবেদন, যাচাই ও অনুমোদন প্রক্রিয়া।",
    icon: <FaUsersGear />,
  },
  {
    title: "বিশেষ পরিস্থিতির স্থানান্তর",
    description:
      "অসুস্থতা, অভিভাবকের বদলি, পারিবারিক জরুরি অবস্থা বা বিশেষ পরিস্থিতিতে স্থানান্তর বিবেচনা।",
    icon: <FaShieldHalved />,
  },
];

const requiredDocuments: RequiredDocument[] = [
  {
    title: "ট্রান্সফার আবেদন ফরম",
    description:
      "বিদ্যালয় অফিস থেকে নির্ধারিত ট্রান্সফার আবেদন ফরম সংগ্রহ করে সঠিকভাবে পূরণ করতে হবে।",
    icon: <FaFileLines />,
  },
  {
    title: "জন্ম নিবন্ধন সনদ",
    description:
      "শিক্ষার্থীর পরিচয়, বয়স ও অফিসিয়াল রেকর্ড যাচাইয়ের জন্য জন্ম নিবন্ধন সনদের কপি প্রয়োজন।",
    icon: <FaUserGraduate />,
  },
  {
    title: "পূর্ববর্তী শ্রেণির ফলাফল",
    description:
      "শিক্ষার্থীর একাডেমিক অগ্রগতি যাচাইয়ের জন্য সর্বশেষ ফলাফল বা প্রগ্রেস রিপোর্ট জমা দিতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "অভিভাবকের আবেদনপত্র",
    description:
      "স্থানান্তরের কারণ উল্লেখ করে অভিভাবকের স্বাক্ষরসহ লিখিত আবেদনপত্র জমা দিতে হবে।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "বকেয়া ফি পরিশোধের রশিদ",
    description:
      "কোনো বকেয়া ফি থাকলে তা পরিশোধ করে রশিদ বা পেমেন্ট প্রমাণ জমা দিতে হবে।",
    icon: <FaReceipt />,
  },
  {
    title: "পূর্ববর্তী বিদ্যালয়ের ছাড়পত্র",
    description:
      "ভর্তি স্থানান্তরের ক্ষেত্রে পূর্ববর্তী বিদ্যালয়ের টিসি বা ছাড়পত্র জমা দিতে হতে পারে।",
    icon: <FaSchoolFlag />,
  },
];

const transferProcess: ProcessStep[] = [
  {
    title: "আবেদন ফরম সংগ্রহ",
    description:
      "বিদ্যালয় অফিস থেকে ট্রান্সফার আবেদন ফরম সংগ্রহ করুন অথবা নির্ধারিত অনলাইন মাধ্যম থেকে ফরম নিন।",
  },
  {
    title: "প্রয়োজনীয় তথ্য পূরণ",
    description:
      "শিক্ষার্থীর নাম, শ্রেণি, রোল, স্থানান্তরের কারণ, অভিভাবকের তথ্য ও যোগাযোগ নম্বর পূরণ করুন।",
  },
  {
    title: "ডকুমেন্ট জমা",
    description:
      "ফলাফল, জন্ম নিবন্ধন, আবেদনপত্র, রশিদ এবং প্রযোজ্য ছাড়পত্রসহ প্রয়োজনীয় ডকুমেন্ট জমা দিন।",
  },
  {
    title: "ফি ও বকেয়া যাচাই",
    description:
      "বিদ্যালয় অফিস শিক্ষার্থীর বকেয়া ফি, লাইব্রেরি বই, ল্যাব সামগ্রী ও অন্যান্য দায় যাচাই করবে।",
  },
  {
    title: "কর্তৃপক্ষের অনুমোদন",
    description:
      "শ্রেণি শিক্ষক, হিসাব বিভাগ ও প্রশাসনিক যাচাই শেষে কর্তৃপক্ষ আবেদন অনুমোদন করবে।",
  },
  {
    title: "টিসি / ছাড়পত্র গ্রহণ",
    description:
      "অনুমোদন সম্পন্ন হলে নির্ধারিত সময়ের মধ্যে অফিস থেকে ট্রান্সফার সার্টিফিকেট বা ছাড়পত্র সংগ্রহ করুন।",
  },
];

const transferRules: RuleItem[] = [
  {
    title: "সঠিক তথ্য প্রদান",
    description:
      "আবেদন ফরমে শিক্ষার্থী, শ্রেণি, রোল, অভিভাবক ও স্থানান্তরের কারণ সঠিকভাবে লিখতে হবে।",
    icon: <FaShieldHalved />,
  },
  {
    title: "বকেয়া ফি পরিশোধ",
    description:
      "বিদ্যালয়ের কোনো বকেয়া ফি, লাইব্রেরি বই বা ল্যাব সামগ্রী বাকি থাকলে আগে তা নিষ্পত্তি করতে হবে।",
    icon: <FaReceipt />,
  },
  {
    title: "সম্পূর্ণ ডকুমেন্ট জমা",
    description:
      "অসম্পূর্ণ আবেদন, ভুল তথ্য বা প্রয়োজনীয় কাগজপত্র ছাড়া ট্রান্সফার আবেদন গ্রহণযোগ্য নাও হতে পারে।",
    icon: <FaTriangleExclamation />,
  },
  {
    title: "কর্তৃপক্ষের সিদ্ধান্ত",
    description:
      "স্থানান্তর অনুমোদন বিদ্যালয় কর্তৃপক্ষের যাচাই-বাছাই ও সিদ্ধান্ত অনুযায়ী চূড়ান্ত হবে।",
    icon: <FaClipboardCheck />,
  },
];

const transferItems: TransferItem[] = [
  {
    id: 1,
    step: "ধাপ ১",
    task: "আবেদন ফরম সংগ্রহ",
    responsible: "অভিভাবক / শিক্ষার্থী",
    timeline: "অফিস সময়",
    note: "বিদ্যালয় অফিস থেকে নির্ধারিত ফরম সংগ্রহ করতে হবে।",
    fileUrl: "#",
  },
  {
    id: 2,
    step: "ধাপ ২",
    task: "ফরম পূরণ",
    responsible: "অভিভাবক",
    timeline: "১ কর্মদিবস",
    note: "সঠিক তথ্য, কারণ ও যোগাযোগ নম্বর উল্লেখ করতে হবে।",
    fileUrl: "#",
  },
  {
    id: 3,
    step: "ধাপ ৩",
    task: "ডকুমেন্ট জমা",
    responsible: "অভিভাবক / অফিস",
    timeline: "১-২ কর্মদিবস",
    note: "জন্ম নিবন্ধন, ফলাফল, রশিদ ও আবেদনপত্র জমা দিতে হবে।",
    fileUrl: "#",
  },
  {
    id: 4,
    step: "ধাপ ৪",
    task: "ফি ও রেকর্ড যাচাই",
    responsible: "হিসাব বিভাগ",
    timeline: "১ কর্মদিবস",
    note: "বকেয়া ফি, লাইব্রেরি বই ও অন্যান্য দায় যাচাই করা হবে।",
    fileUrl: "#",
  },
  {
    id: 5,
    step: "ধাপ ৫",
    task: "শ্রেণি শিক্ষক যাচাই",
    responsible: "শ্রেণি শিক্ষক",
    timeline: "১ কর্মদিবস",
    note: "উপস্থিতি, আচরণ ও একাডেমিক রেকর্ড যাচাই করা হতে পারে।",
    fileUrl: "#",
  },
  {
    id: 6,
    step: "ধাপ ৬",
    task: "টিসি / ছাড়পত্র প্রদান",
    responsible: "বিদ্যালয় অফিস",
    timeline: "অনুমোদনের পর",
    note: "কর্তৃপক্ষের অনুমোদন শেষে ছাড়পত্র সংগ্রহ করা যাবে।",
    fileUrl: "#",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "স্থানান্তরের আগে প্রয়োজনীয় ডকুমেন্ট, ফলাফল ও পরিচয় সংক্রান্ত কাগজপত্র প্রস্তুত রাখতে হবে।",
      "শ্রেণি শিক্ষককে স্থানান্তরের বিষয়টি জানাতে হবে এবং প্রয়োজনীয় একাডেমিক রেকর্ড সংগ্রহ করতে হবে।",
      "লাইব্রেরি থেকে নেওয়া বই, ল্যাব সামগ্রী বা বিদ্যালয়ের কোনো সম্পদ থাকলে ফেরত দিতে হবে।",
      "বিদ্যালয়ের আইডি কার্ড, ডায়েরি বা অফিসিয়াল রেকর্ড সংক্রান্ত নির্দেশনা অনুসরণ করতে হবে।",
      "টিসি বা ছাড়পত্র পাওয়ার পর তা নতুন বিদ্যালয়ে জমা দেওয়ার জন্য যত্নসহকারে সংরক্ষণ করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "স্থানান্তরের কারণ উল্লেখ করে আবেদনপত্র সঠিকভাবে পূরণ করুন এবং স্বাক্ষর করুন।",
      "বকেয়া ফি, লাইব্রেরি বই, ল্যাব সামগ্রী বা অন্যান্য দায় আছে কিনা অফিস থেকে যাচাই করুন।",
      "জন্ম নিবন্ধন, ফলাফল, ছবি, রশিদ ও প্রয়োজনীয় ডকুমেন্ট জমা দেওয়ার আগে পুনরায় যাচাই করুন।",
      "বিদ্যালয় অফিসের সময়সূচি ও নির্দেশনা অনুযায়ী আবেদন জমা এবং ছাড়পত্র সংগ্রহ করুন।",
      "কোনো তথ্য বুঝতে সমস্যা হলে শ্রেণি শিক্ষক বা বিদ্যালয় অফিসের সঙ্গে সরাসরি যোগাযোগ করুন।",
    ],
  },
];

const TransferProceduresPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* উপরের অংশ */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            স্থানান্তর প্রক্রিয়া
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            স্থানান্তর প্রক্রিয়া
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ে ভর্তি স্থানান্তর, ছাড়পত্র, ট্রান্সফার সার্টিফিকেট,
            প্রয়োজনীয় কাগজপত্র ও আবেদন প্রক্রিয়া সম্পর্কিত গুরুত্বপূর্ণ
            নির্দেশনা।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </section>

      {/* স্থানান্তরের সারসংক্ষেপ */}
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

      {/* ভূমিকা */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  ভূমিকা
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                  সুশৃঙ্খল ও অফিসিয়াল স্থানান্তর প্রক্রিয়া
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  শিক্ষার্থীর বিদ্যালয় পরিবর্তন, ছাড়পত্র গ্রহণ বা নতুন
                  বিদ্যালয়ে ভর্তি হওয়ার ক্ষেত্রে একটি সঠিক ও অফিসিয়াল
                  স্থানান্তর প্রক্রিয়া অনুসরণ করা প্রয়োজন। আবেদন ফরম,
                  প্রয়োজনীয় ডকুমেন্ট, বকেয়া যাচাই এবং কর্তৃপক্ষের অনুমোদনের
                  মাধ্যমে ট্রান্সফার সার্টিফিকেট বা ছাড়পত্র প্রদান করা হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* বিশেষ স্থানান্তর কার্ড */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    স্থানান্তর নোটিশ
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  স্থানান্তরের আগে সকল রেকর্ড ও বকেয়া যাচাই করুন
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  ট্রান্সফার আবেদন করার আগে শিক্ষার্থীর ফি, লাইব্রেরি বই, ল্যাব
                  সামগ্রী, ফলাফল ও অফিসিয়াল রেকর্ড যাচাই করা জরুরি। এতে টিসি
                  বা ছাড়পত্র গ্রহণের প্রক্রিয়া দ্রুত ও সহজ হয়।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    আবেদন: লিখিত ফরম
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    যাচাই: অফিস রেকর্ড
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    অনুমোদন: কর্তৃপক্ষ
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaFileLines />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    ট্রান্সফার সার্টিফিকেট
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    অফিসিয়াল অনুমোদনের পর টিসি বা ছাড়পত্র সংগ্রহ করুন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* স্থানান্তরের ধরন */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              স্থানান্তরের ধরন
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              স্থানান্তরের ধরনসমূহ
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {transferTypes.map((type) => (
              <article
                key={type.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {type.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {type.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {type.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* প্রয়োজনীয় কাগজপত্র */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                প্রয়োজনীয় কাগজপত্র
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                প্রয়োজনীয় কাগজপত্র
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {requiredDocuments.map((document) => (
                <article
                  key={document.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {document.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {document.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {document.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* স্থানান্তর আবেদন প্রক্রিয়া */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              আবেদন প্রক্রিয়া
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              স্থানান্তর আবেদন প্রক্রিয়া
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {transferProcess.map((step, index) => (
              <article
                key={step.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-color-secondary text-sm font-black text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {["০১", "০২", "০৩", "০৪", "০৫", "০৬"][index]}
                </div>

                <h3 className="mt-5 text-lg font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* স্থানান্তর নিয়ম */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                স্থানান্তর নিয়ম
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                স্থানান্তর নিয়মাবলি
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {transferRules.map((rule) => (
                <article
                  key={rule.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                    {rule.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary">
                    {rule.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                    {rule.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* স্থানান্তর তালিকা */}
      <section
        id="transfer-table"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              স্থানান্তর তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              স্থানান্তরের বিস্তারিত তালিকা
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
                      প্রক্রিয়ার ধাপ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      প্রয়োজনীয় কাজ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      দায়িত্বপ্রাপ্ত
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      সময়সীমা
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
                  {transferItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.step}
                        </span>
                      </td>

                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaFileLines />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {item.task}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.responsible}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.timeline}
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.note}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href={item.fileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
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
              {transferItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.step}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {item.task}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaFileLines />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">
                        দায়িত্বপ্রাপ্ত:
                      </span>{" "}
                      {item.responsible}
                    </p>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">সময়সীমা:</span>{" "}
                      {item.timeline}
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
                    ডাউনলোড
                    <FaCloudArrowDown />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* নির্দেশনা */}
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

      {/* সমাপনী বার্তা */}
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
                  সঠিক প্রক্রিয়ায় স্থানান্তর করুন, রেকর্ড নিরাপদ রাখুন
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  স্থানান্তর প্রক্রিয়া একটি গুরুত্বপূর্ণ অফিসিয়াল কাজ। সঠিক
                  তথ্য, প্রয়োজনীয় ডকুমেন্ট, বকেয়া নিষ্পত্তি এবং বিদ্যালয়
                  কর্তৃপক্ষের নির্দেশনা অনুসরণ করলে টিসি বা ছাড়পত্র গ্রহণ সহজ,
                  দ্রুত ও নির্ভুলভাবে সম্পন্ন হয়।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    অফিসিয়াল স্থানান্তর
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    অফিসিয়াল নিয়ম মেনে টিসি বা ছাড়পত্র গ্রহণ করুন।
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

export default TransferProceduresPage;