import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBuildingColumns,
  FaCalendarCheck,
  FaCashRegister,
  FaCheck,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaCreditCard,
  FaFileLines,
  FaGraduationCap,
  FaHandHoldingDollar,
  FaLandmark,
  FaMobileScreenButton,
  FaMoneyBillWave,
  FaPeopleGroup,
  FaReceipt,
  FaRegClock,
  FaSchoolFlag,
  FaShieldHeart,
  FaStar,
  FaTriangleExclamation,
  FaUserGraduate,
  FaWallet,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type FeeCategory = {
  title: string;
  description: string;
  icon: ReactNode;
};

type PaymentMethod = {
  title: string;
  description: string;
  icon: ReactNode;
};

type FeeItem = {
  id: number;
  feeType: string;
  className: string;
  amount: string;
  paymentTime: string;
  note: string;
  fileUrl: string;
};

type InstructionItem = {
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
    title: "ভর্তি ফি",
    value: "নির্ধারিত",
    icon: <FaGraduationCap />,
  },
  {
    title: "মাসিক বেতন",
    value: "মাসিক",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "পরীক্ষা ফি",
    value: "টার্ম অনুযায়ী",
    icon: <FaClipboardCheck />,
  },
  {
    title: "পেমেন্ট পদ্ধতি",
    value: "৫+",
    icon: <FaWallet />,
  },
];

const feeCategories: FeeCategory[] = [
  {
    title: "Admission Fee",
    description:
      "নতুন শিক্ষার্থী ভর্তি, ভর্তি ফরম, রেজিস্ট্রেশন ও প্রাথমিক প্রশাসনিক কার্যক্রমের জন্য নির্ধারিত ফি।",
    icon: <FaGraduationCap />,
  },
  {
    title: "Monthly Tuition Fee",
    description:
      "শ্রেণিভিত্তিক নিয়মিত পাঠদান, একাডেমিক সহায়তা ও বিদ্যালয়ের মাসিক কার্যক্রম পরিচালনার ফি।",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Exam Fee",
    description:
      "ক্লাস টেস্ট, অর্ধবার্ষিক, বার্ষিক, মডেল টেস্ট ও মূল্যায়ন কার্যক্রম পরিচালনার জন্য পরীক্ষা ফি।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Session Fee",
    description:
      "নতুন শিক্ষাবর্ষের একাডেমিক পরিকল্পনা, আইডি কার্ড, ডায়েরি ও প্রশাসনিক সেবার জন্য সেশন ফি।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Library / Lab Fee",
    description:
      "লাইব্রেরি, বিজ্ঞান ল্যাব, কম্পিউটার ল্যাব ও ব্যবহারিক শিক্ষার সহায়ক সুবিধার জন্য ফি।",
    icon: <FaFileLines />,
  },
  {
    title: "Transport Fee",
    description:
      "বিদ্যালয়ের পরিবহন সুবিধা ব্যবহারকারী শিক্ষার্থীদের জন্য রুট অনুযায়ী পরিবহন ফি প্রযোজ্য হতে পারে।",
    icon: <FaSchoolFlag />,
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    title: "Office Cash Payment",
    description:
      "বিদ্যালয় অফিসে সরাসরি নগদ পেমেন্ট করা যাবে এবং পেমেন্টের পর অফিস থেকে রশিদ সংগ্রহ করতে হবে।",
    icon: <FaCashRegister />,
  },
  {
    title: "Bank Payment",
    description:
      "বিদ্যালয়ের নির্ধারিত ব্যাংক অ্যাকাউন্টে ফি জমা দিয়ে জমা স্লিপ অফিসে জমা দিতে হবে।",
    icon: <FaBuildingColumns />,
  },
  {
    title: "Mobile Banking",
    description:
      "মোবাইল ব্যাংকিংয়ের মাধ্যমে পেমেন্ট করলে ট্রানজেকশন আইডি সংরক্ষণ করতে হবে।",
    icon: <FaMobileScreenButton />,
  },
  {
    title: "Online Payment",
    description:
      "অনলাইন পেমেন্ট সুবিধা থাকলে শিক্ষার্থী আইডি ব্যবহার করে নির্ধারিত পোর্টালে পেমেন্ট করা যাবে।",
    icon: <FaCreditCard />,
  },
  {
    title: "Card Payment",
    description:
      "ডেবিট বা ক্রেডিট কার্ডের মাধ্যমে পেমেন্ট করার ক্ষেত্রে পেমেন্ট কনফার্মেশন সংরক্ষণ করুন।",
    icon: <FaLandmark />,
  },
];

const feeItems: FeeItem[] = [
  {
    id: 1,
    feeType: "ভর্তি ফি",
    className: "প্লে - দশম",
    amount: "অফিসে জানুন",
    paymentTime: "ভর্তির সময়",
    note: "ভর্তি নিশ্চিত করার আগে পরিশোধ করতে হবে।",
    fileUrl: "#",
  },
  {
    id: 2,
    feeType: "মাসিক বেতন",
    className: "সকল শ্রেণি",
    amount: "শ্রেণি অনুযায়ী",
    paymentTime: "প্রতি মাসের ১০ তারিখের মধ্যে",
    note: "সময়মতো পরিশোধ করা বাধ্যতামূলক।",
    fileUrl: "#",
  },
  {
    id: 3,
    feeType: "পরীক্ষা ফি",
    className: "সকল পরীক্ষার্থী",
    amount: "পরীক্ষা অনুযায়ী",
    paymentTime: "পরীক্ষার আগে",
    note: "প্রবেশপত্র সংগ্রহের আগে ফি পরিশোধ করতে হবে।",
    fileUrl: "#",
  },
  {
    id: 4,
    feeType: "সেশন ফি",
    className: "সকল শ্রেণি",
    amount: "শিক্ষাবর্ষ অনুযায়ী",
    paymentTime: "শিক্ষাবর্ষের শুরুতে",
    note: "আইডি কার্ড, ডায়েরি ও প্রশাসনিক কার্যক্রমের জন্য।",
    fileUrl: "#",
  },
  {
    id: 5,
    feeType: "লাইব্রেরি / ল্যাব ফি",
    className: "প্রযোজ্য শ্রেণি",
    amount: "নির্ধারিত",
    paymentTime: "সেশন অনুযায়ী",
    note: "লাইব্রেরি ও ল্যাব সুবিধা ব্যবহারের জন্য।",
    fileUrl: "#",
  },
  {
    id: 6,
    feeType: "পরিবহন ফি",
    className: "পরিবহন ব্যবহারকারী",
    amount: "রুট অনুযায়ী",
    paymentTime: "প্রতি মাসে",
    note: "পরিবহন সুবিধা গ্রহণকারীদের জন্য প্রযোজ্য।",
    fileUrl: "#",
  },
];

const paymentInstructions: InstructionItem[] = [
  {
    title: "সঠিক শিক্ষার্থী আইডি ব্যবহার",
    description:
      "পেমেন্ট করার সময় শিক্ষার্থীর সঠিক আইডি, নাম, শ্রেণি ও রোল নম্বর ব্যবহার করুন।",
    icon: <FaUserGraduate />,
  },
  {
    title: "রশিদ সংগ্রহ",
    description:
      "অফিস, ব্যাংক বা অনলাইন যেকোনো মাধ্যমে পেমেন্টের পর রশিদ বা কনফার্মেশন সংগ্রহ করুন।",
    icon: <FaReceipt />,
  },
  {
    title: "ট্রানজেকশন আইডি সংরক্ষণ",
    description:
      "মোবাইল ব্যাংকিং বা অনলাইন পেমেন্টের ক্ষেত্রে ট্রানজেকশন আইডি লিখে রাখুন।",
    icon: <FaMobileScreenButton />,
  },
  {
    title: "সময়মতো ফি পরিশোধ",
    description:
      "নির্ধারিত সময়ের মধ্যে ফি পরিশোধ করলে জরিমানা, বিলম্ব ও প্রশাসনিক জটিলতা এড়ানো যায়।",
    icon: <FaRegClock />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "প্রতি মাসের নির্ধারিত সময়ের মধ্যে মাসিক বেতন পরিশোধ করুন।",
      "পেমেন্টের পর রশিদ, ব্যাংক স্লিপ বা ট্রানজেকশন আইডি সংরক্ষণ করুন।",
      "শিক্ষার্থীর নাম, শ্রেণি, রোল ও আইডি নম্বর সঠিকভাবে ব্যবহার করুন।",
      "বকেয়া থাকলে বিলম্ব না করে বিদ্যালয় অফিসে যোগাযোগ করুন।",
      "ভর্তি, পরীক্ষা বা বিশেষ ফি সম্পর্কিত নোটিশ নিয়মিত অনুসরণ করুন।",
    ],
  },
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "ফি সংক্রান্ত নোটিশ বা রশিদ অভিভাবকের কাছে সময়মতো পৌঁছে দিতে হবে।",
      "পরীক্ষার আগে ফি পরিশোধ ও প্রবেশপত্র সংগ্রহের বিষয়টি নিশ্চিত করতে হবে।",
      "বিদ্যালয়ের অফিস থেকে পাওয়া রশিদ বা কাগজপত্র যত্নসহকারে রাখতে হবে।",
      "ফি বকেয়া থাকলে শ্রেণি শিক্ষক বা অভিভাবককে দ্রুত জানাতে হবে।",
      "পেমেন্ট সংক্রান্ত কোনো সমস্যায় নিজে সিদ্ধান্ত না নিয়ে অভিভাবক বা অফিসের সহায়তা নিতে হবে।",
    ],
  },
];

const FeesPaymentPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Fees & Payment
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            ফি ও পেমেন্ট
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের ভর্তি ফি, মাসিক বেতন, পরীক্ষা ফি, অন্যান্য চার্জ এবং
            পেমেন্ট পদ্ধতি সম্পর্কে প্রয়োজনীয় তথ্য।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Fees Overview */}
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
                  সহজ, স্বচ্ছ ও নিয়মিত পেমেন্ট ব্যবস্থা
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ের ফি ও পেমেন্ট সম্পর্কিত তথ্য অভিভাবকদের জন্য খুবই
                  গুরুত্বপূর্ণ। সময়মতো ফি পরিশোধ করলে শিক্ষার্থীর একাডেমিক
                  কার্যক্রম, পরীক্ষা, ভর্তি, রেজিস্ট্রেশন ও অন্যান্য সেবা
                  নির্বিঘ্নে সম্পন্ন হয়। পেমেন্টের পর রশিদ বা ট্রানজেকশন
                  প্রমাণ সংরক্ষণ করা আবশ্যক।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Payment Card */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Payment Notice
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  সময়মতো ফি পরিশোধ করুন, রশিদ সংরক্ষণ করুন
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের সকল ফি নির্ধারিত সময়ের মধ্যে পরিশোধ করার অনুরোধ
                  করা হচ্ছে। নগদ, ব্যাংক, মোবাইল ব্যাংকিং বা অনলাইন পেমেন্টের
                  ক্ষেত্রে রশিদ, স্লিপ বা ট্রানজেকশন আইডি সংরক্ষণ করুন।
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    মাসিক বেতন: ১০ তারিখের মধ্যে
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    রশিদ: আবশ্যক
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    পেমেন্ট: ৫+ পদ্ধতি
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaReceipt />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Payment Receipt
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    পেমেন্টের পর রশিদ বা ট্রানজেকশন প্রমাণ সংরক্ষণ করুন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Categories */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ফি-এর বিভাগ
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Fee Categories
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {feeCategories.map((category) => (
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

      {/* Payment Methods */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                পেমেন্ট পদ্ধতি
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Payment Methods
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {paymentMethods.map((method) => (
                <article
                  key={method.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {method.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {method.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {method.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Table */}
      <section
        id="fee-structure"
        className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ফি কাঠামো
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Fee Structure Table
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
                      ফি-এর ধরন
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শ্রেণি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পরিমাণ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      পেমেন্ট সময়
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
                  {feeItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                            <FaHandHoldingDollar />
                          </span>

                          <p className="text-sm font-black leading-6 text-primary">
                            {item.feeType}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.className}
                      </td>

                      <td className="px-5 py-5">
                        <span className="inline-flex items-center rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.amount}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.paymentTime}
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
              {feeItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.className}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                        {item.feeType}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaHandHoldingDollar />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">পরিমাণ:</span>{" "}
                      {item.amount}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">
                        পেমেন্ট সময়:
                      </span>{" "}
                      {item.paymentTime}
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

      {/* Payment Instructions */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              পেমেন্ট নির্দেশনা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Payment Instructions
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paymentInstructions.map((instruction) => (
              <article
                key={instruction.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {instruction.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary">
                  {instruction.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {instruction.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Late Payment Policy */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-secondary text-3xl text-primary">
                  <FaTriangleExclamation />
                </div>

                <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  Late Payment Policy
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                  বিলম্বিত পেমেন্ট নীতিমালা
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-4">
                  <div className="flex gap-3 rounded-[20px] border border-soft bg-page-secondary p-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-color-primary text-[10px] text-inverse">
                      <FaCheck />
                    </span>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      নির্ধারিত সময়ের পরে পেমেন্ট করলে বিদ্যালয়ের নিয়ম অনুযায়ী
                      বিলম্ব ফি বা জরিমানা প্রযোজ্য হতে পারে।
                    </p>
                  </div>

                  <div className="flex gap-3 rounded-[20px] border border-soft bg-page-secondary p-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-color-primary text-[10px] text-inverse">
                      <FaCheck />
                    </span>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      দীর্ঘদিন বকেয়া থাকলে অভিভাবককে বিদ্যালয় অফিসে যোগাযোগ করে
                      বকেয়া পরিশোধের পরিকল্পনা নিশ্চিত করতে হবে।
                    </p>
                  </div>

                  <div className="flex gap-3 rounded-[20px] border border-soft bg-page-secondary p-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-color-primary text-[10px] text-inverse">
                      <FaCheck />
                    </span>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      বিশেষ সমস্যার ক্ষেত্রে অভিভাবক লিখিতভাবে অফিসে আবেদন
                      করলে কর্তৃপক্ষ বিষয়টি বিবেচনা করতে পারে।
                    </p>
                  </div>
                </div>
              </div>
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
                  <FaShieldHeart className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    সমাপনী বার্তা
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  নিয়মিত পেমেন্টে শিক্ষার ধারাবাহিকতা বজায় থাকে
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  সময়মতো ফি পরিশোধ, সঠিক তথ্য ব্যবহার এবং রশিদ সংরক্ষণ করলে
                  শিক্ষার্থী, অভিভাবক ও বিদ্যালয়ের মধ্যে স্বচ্ছতা বজায় থাকে।
                  নিয়মিত পেমেন্ট শিক্ষার্থীর শিক্ষা কার্যক্রমকে আরও সুন্দর ও
                  নির্বিঘ্ন করে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaReceipt />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    Pay Safely
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    সঠিক পেমেন্ট করুন, রশিদ রাখুন, নিশ্চিন্ত থাকুন।
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

export default FeesPaymentPage;