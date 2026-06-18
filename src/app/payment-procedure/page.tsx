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
  FaFileInvoiceDollar,
  FaHandHoldingDollar,
  FaLandmark,
  FaMobileScreenButton,
  FaMoneyBillWave,
  FaPeopleGroup,
  FaReceipt,
  FaRegClock,
  FaSchoolFlag,
  FaShieldHeart,
  FaTriangleExclamation,
  FaUserGraduate,
  FaWallet,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type PaymentMethod = {
  title: string;
  description: string;
  icon: ReactNode;
};

type PaymentStep = {
  title: string;
  description: string;
};

type RequiredInfo = {
  title: string;
  description: string;
};

type PaymentRule = {
  title: string;
  description: string;
  icon: ReactNode;
};

type FeeItem = {
  id: number;
  feeType: string;
  paymentTime: string;
  method: string;
  note: string;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

const overviewItems: OverviewItem[] = [
  {
    title: "টিউশন ফি",
    value: "মাসিক",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "ভর্তি ফি",
    value: "বার্ষিক",
    icon: <FaSchoolFlag />,
  },
  {
    title: "পরীক্ষা ফি",
    value: "টার্মভিত্তিক",
    icon: <FaClipboardCheck />,
  },
  {
    title: "অন্যান্য ফি",
    value: "প্রয়োজন অনুযায়ী",
    icon: <FaWallet />,
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    title: "বিদ্যালয় অফিসে নগদ পেমেন্ট",
    description:
      "অভিভাবক বিদ্যালয়ের হিসাব শাখায় সরাসরি নগদ ফি জমা দিয়ে রশিদ সংগ্রহ করতে পারবেন।",
    icon: <FaCashRegister />,
  },
  {
    title: "ব্যাংক ডিপোজিট",
    description:
      "বিদ্যালয় নির্ধারিত ব্যাংক হিসাবে ফি জমা দিয়ে জমার স্লিপ বিদ্যালয় অফিসে জমা দিতে হবে।",
    icon: <FaBuildingColumns />,
  },
  {
    title: "মোবাইল ব্যাংকিং",
    description:
      "বিদ্যালয় অনুমোদিত মোবাইল ব্যাংকিং নম্বরে ফি পাঠিয়ে ট্রানজেকশন আইডি সংরক্ষণ করতে হবে।",
    icon: <FaMobileScreenButton />,
  },
  {
    title: "অনলাইন পেমেন্ট",
    description:
      "বিদ্যালয়ের নির্ধারিত অনলাইন পেমেন্ট সিস্টেম ব্যবহার করে নিরাপদে ফি পরিশোধ করা যাবে।",
    icon: <FaCreditCard />,
  },
];

const paymentSteps: PaymentStep[] = [
  {
    title: "শিক্ষার্থীর তথ্য যাচাই",
    description:
      "শিক্ষার্থীর নাম, শ্রেণি, রোল নম্বর ও শিক্ষাবর্ষ সঠিকভাবে যাচাই করুন।",
  },
  {
    title: "ফি-এর ধরন নির্বাচন",
    description:
      "টিউশন ফি, ভর্তি ফি, পরীক্ষা ফি বা অন্যান্য ফি থেকে প্রয়োজনীয় ধরন নির্বাচন করুন।",
  },
  {
    title: "পেমেন্ট মাধ্যম নির্বাচন",
    description:
      "নগদ, ব্যাংক ডিপোজিট, মোবাইল ব্যাংকিং অথবা অনলাইন পেমেন্ট মাধ্যম নির্বাচন করুন।",
  },
  {
    title: "পেমেন্ট সম্পন্ন করুন",
    description:
      "সঠিক তথ্য ব্যবহার করে নির্ধারিত পরিমাণ ফি পরিশোধ করুন এবং ট্রানজেকশন তথ্য সংরক্ষণ করুন।",
  },
  {
    title: "রশিদ সংগ্রহ ও সংরক্ষণ",
    description:
      "পেমেন্টের পর বিদ্যালয় অফিস থেকে রশিদ সংগ্রহ করুন অথবা ডিজিটাল রশিদ সংরক্ষণ করুন।",
  },
];

const requiredInfo: RequiredInfo[] = [
  {
    title: "শিক্ষার্থীর নাম",
    description: "ভর্তির রেকর্ড অনুযায়ী পূর্ণ নাম ব্যবহার করুন।",
  },
  {
    title: "শ্রেণি",
    description: "বর্তমান শ্রেণির নাম সঠিকভাবে উল্লেখ করুন।",
  },
  {
    title: "রোল নম্বর",
    description: "শিক্ষার্থীর নির্ধারিত রোল নম্বর লিখুন।",
  },
  {
    title: "সেশন / শিক্ষাবর্ষ",
    description: "যে শিক্ষাবর্ষের ফি পরিশোধ করা হচ্ছে তা উল্লেখ করুন।",
  },
  {
    title: "পেমেন্টের ধরন",
    description: "টিউশন, ভর্তি, পরীক্ষা বা অন্যান্য ফি নির্বাচন করুন।",
  },
  {
    title: "মোবাইল নম্বর",
    description: "যোগাযোগের জন্য অভিভাবকের সচল মোবাইল নম্বর দিন।",
  },
];

const paymentRules: PaymentRule[] = [
  {
    title: "সময়ের মধ্যে ফি পরিশোধ",
    description:
      "নির্ধারিত তারিখের মধ্যে ফি পরিশোধ করলে প্রশাসনিক কাজ ও শিক্ষার্থীর রেকর্ড হালনাগাদ সহজ হয়।",
    icon: <FaRegClock />,
  },
  {
    title: "সঠিক তথ্য ব্যবহার",
    description:
      "ভুল নাম, রোল বা শ্রেণি দিয়ে পেমেন্ট করলে রেকর্ডে সমস্যা হতে পারে, তাই তথ্য যাচাই করে পেমেন্ট করুন।",
    icon: <FaShieldHeart />,
  },
  {
    title: "রশিদ সংরক্ষণ",
    description:
      "ফি পরিশোধের রশিদ বা ট্রানজেকশন আইডি ভবিষ্যৎ প্রয়োজনের জন্য সংরক্ষণ করা বাধ্যতামূলক।",
    icon: <FaReceipt />,
  },
  {
    title: "সমস্যা হলে যোগাযোগ",
    description:
      "পেমেন্টে কোনো সমস্যা হলে দ্রুত বিদ্যালয়ের হিসাব শাখা বা অফিসে যোগাযোগ করুন।",
    icon: <FaTriangleExclamation />,
  },
];

const feeItems: FeeItem[] = [
  {
    id: 1,
    feeType: "মাসিক টিউশন ফি",
    paymentTime: "প্রতি মাসের ১-১০ তারিখ",
    method: "নগদ / মোবাইল ব্যাংকিং / অনলাইন",
    note: "বিলম্ব ফি এড়াতে সময়মতো পরিশোধ করুন।",
  },
  {
    id: 2,
    feeType: "ভর্তি ফি",
    paymentTime: "ভর্তির সময়",
    method: "নগদ / ব্যাংক ডিপোজিট",
    note: "ভর্তি নিশ্চিত করার জন্য রশিদ সংরক্ষণ করুন।",
  },
  {
    id: 3,
    feeType: "পরীক্ষা ফি",
    paymentTime: "পরীক্ষার আগে নির্ধারিত সময়",
    method: "নগদ / অনলাইন",
    note: "পরীক্ষার প্রবেশপত্র সংগ্রহের আগে ফি পরিশোধ করুন।",
  },
  {
    id: 4,
    feeType: "সহশিক্ষা কার্যক্রম ফি",
    paymentTime: "কার্যক্রম অনুযায়ী",
    method: "বিদ্যালয় অফিস",
    note: "প্রযোজ্য ক্ষেত্রে বিদ্যালয়ের নোটিশ অনুসরণ করুন।",
  },
  {
    id: 5,
    feeType: "পরিচয়পত্র / ডায়েরি ফি",
    paymentTime: "শিক্ষাবর্ষের শুরুতে",
    method: "নগদ",
    note: "রশিদ সংগ্রহ করে শ্রেণি শিক্ষকের নির্দেশনা অনুসরণ করুন।",
  },
  {
    id: 6,
    feeType: "অন্যান্য ফি",
    paymentTime: "বিদ্যালয়ের নোটিশ অনুযায়ী",
    method: "নির্ধারিত মাধ্যম",
    note: "ফি-এর ধরন ও পরিমাণ অফিস থেকে নিশ্চিত করুন।",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "অভিভাবকের সহায়তায় নির্ধারিত সময়ের মধ্যে বিদ্যালয়ের ফি জমা দিতে হবে।",
      "ফি জমা দেওয়ার পর রশিদ শ্রেণি শিক্ষক বা বিদ্যালয় অফিসে দেখাতে হতে পারে।",
      "বকেয়া ফি থাকলে অভিভাবককে সময়মতো জানাতে হবে।",
      "পেমেন্ট রশিদ বা ট্রানজেকশন তথ্য হারিয়ে না ফেলার জন্য সতর্ক থাকতে হবে।",
      "ফি সংক্রান্ত কোনো প্রশ্ন থাকলে শ্রেণি শিক্ষক বা অফিসে যোগাযোগ করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "নির্ধারিত তারিখের মধ্যে সন্তানের বিদ্যালয় ফি পরিশোধ করুন।",
      "পেমেন্ট করার আগে শিক্ষার্থীর নাম, শ্রেণি, রোল এবং ফি-এর ধরন যাচাই করুন।",
      "নগদ, ব্যাংক বা অনলাইন যেকোনো পেমেন্টের রশিদ অবশ্যই সংরক্ষণ করুন।",
      "ভুল পেমেন্ট বা ট্রানজেকশন সমস্যা হলে দ্রুত বিদ্যালয়ের হিসাব শাখায় যোগাযোগ করুন।",
      "বিদ্যালয়ের অফিসিয়াল নোটিশ ছাড়া কোনো অননুমোদিত নম্বর বা মাধ্যমে পেমেন্ট করবেন না।",
    ],
  },
];

const PaymentProcedurePage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            স্কুল ফি প্রদান
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            পেমেন্ট পদ্ধতি
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            টিউশন ফি, ভর্তি ফি, পরীক্ষা ফি ও অন্যান্য বিদ্যালয় ফি পরিশোধের
            নিয়ম, মাধ্যম এবং নির্দেশনা এক জায়গায় দেখার জন্য এই পেজ তৈরি করা
            হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </section>

      {/* Payment Overview */}
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
                  নিরাপদ ও সহজ ফি পরিশোধ ব্যবস্থা
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ের ফি পরিশোধ প্রক্রিয়া শিক্ষার্থী ও অভিভাবকদের জন্য
                  সহজ, স্বচ্ছ এবং নিরাপদভাবে পরিচালনা করার উদ্দেশ্যে এই নির্দেশনা
                  তৈরি করা হয়েছে। নির্ধারিত সময়ের মধ্যে সঠিক তথ্য দিয়ে ফি
                  পরিশোধ করলে শিক্ষার্থীর হিসাব রেকর্ড সঠিক থাকে এবং বিদ্যালয়ের
                  প্রশাসনিক কার্যক্রম দ্রুত সম্পন্ন হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              পেমেন্ট মাধ্যম
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              ফি পরিশোধের মাধ্যমসমূহ
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paymentMethods.map((method) => (
              <article
                key={method.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
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
      </section>

      {/* Step by Step Procedure */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                ধাপে ধাপে প্রক্রিয়া
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                ধাপে ধাপে পেমেন্ট নির্দেশিকা
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
              {paymentSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-color-secondary text-sm font-black text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {String(index + 1).padStart(2, "0")}
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
        </div>
      </section>

      {/* Required Information */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              প্রয়োজনীয় তথ্য
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              পেমেন্টের জন্য প্রয়োজনীয় তথ্য
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {requiredInfo.map((info) => (
              <div
                key={info.title}
                className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                    <FaCheck />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-primary">
                      {info.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Table */}
      <section id="fee-table" className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ফি তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              ফি এবং পরিশোধের সময়সূচী
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
                      পরিশোধের সময়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      মাধ্যম
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      মন্তব্য
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      রশিদ
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
                        <span className="inline-flex items-center gap-2 rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          <FaHandHoldingDollar />
                          {item.feeType}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.paymentTime}
                      </td>

                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.method}
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.note}
                      </td>

                      <td className="px-5 py-5 text-right">
                        <Link
                          href="#"
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
              {feeItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        ফি-এর ধরন
                      </p>

                      <h3 className="mt-2 text-xl font-black text-primary">
                        {item.feeType}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaMoneyBillWave />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">
                        পরিশোধের সময়:
                      </span>{" "}
                      {item.paymentTime}
                    </p>

                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">মাধ্যম:</span>{" "}
                      {item.method}
                    </p>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      <span className="font-black text-primary">মন্তব্য:</span>{" "}
                      {item.note}
                    </p>
                  </div>

                  <Link
                    href="#"
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

      {/* Payment Rules */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              পেমেন্ট নিয়ম
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              ফি পরিশোধের নিয়মাবলী
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paymentRules.map((rule) => (
              <article
                key={rule.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
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
                  সময়মতো ফি পরিশোধ করুন
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের ফি সময়মতো ও সঠিক নিয়মে পরিশোধ করা শিক্ষার্থী,
                  অভিভাবক এবং বিদ্যালয় প্রশাসনের জন্য গুরুত্বপূর্ণ। সঠিক তথ্য
                  ব্যবহার, নিরাপদ পেমেন্ট মাধ্যম এবং রশিদ সংরক্ষণের মাধ্যমে ফি
                  পরিশোধ প্রক্রিয়া আরও সহজ ও স্বচ্ছ হয়।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaLandmark />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    নিরাপদ পেমেন্ট
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    সঠিক তথ্য দিয়ে ফি পরিশোধ করুন এবং রশিদ সংরক্ষণ করুন।
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

export default PaymentProcedurePage;