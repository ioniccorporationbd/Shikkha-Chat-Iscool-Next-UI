import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaBookOpen,
  FaBottleWater,
  FaCalendarCheck,
  FaCheck,
  FaChildReaching,
  FaComputer,
  FaDroplet,
  FaFlask,
  FaFutbol,
  FaHeartPulse,
  FaHouseMedicalCircleCheck,
  FaLightbulb,
  FaMasksTheater,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegBuilding,
  FaRestroom,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTriangleExclamation,
  FaUserGraduate,
  FaUsersGear,
  FaVideo,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  icon: ReactNode;
};

type FacilityItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type SafetyItem = {
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
    title: "আধুনিক শ্রেণিকক্ষ",
    value: "৩০+",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "লাইব্রেরি",
    value: "১টি",
    icon: <FaBookOpen />,
  },
  {
    title: "কম্পিউটার ল্যাব",
    value: "১টি",
    icon: <FaComputer />,
  },
  {
    title: "বিজ্ঞান ল্যাব",
    value: "১টি",
    icon: <FaFlask />,
  },
];

const academicFacilities: FacilityItem[] = [
  {
    title: "সুবিন্যস্ত শ্রেণিকক্ষ",
    description:
      "পরিচ্ছন্ন, আলো-বাতাসপূর্ণ ও শিক্ষাবান্ধব শ্রেণিকক্ষ শিক্ষার্থীদের মনোযোগী শেখার পরিবেশ তৈরি করে।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "লাইব্রেরি ও পাঠাগার",
    description:
      "পাঠ্যবইয়ের পাশাপাশি গল্প, বিজ্ঞান, ইতিহাস ও সাধারণ জ্ঞানের বই পড়ার মাধ্যমে শিক্ষার্থীদের জ্ঞান বৃদ্ধি পায়।",
    icon: <FaBookOpen />,
  },
  {
    title: "বিজ্ঞান ল্যাব",
    description:
      "বিজ্ঞান বিষয়ে বাস্তবভিত্তিক শেখা, পরীক্ষা-নিরীক্ষা ও পর্যবেক্ষণের জন্য ল্যাব সুবিধা প্রদান করা হয়।",
    icon: <FaFlask />,
  },
  {
    title: "কম্পিউটার ও আইসিটি ল্যাব",
    description:
      "ডিজিটাল দক্ষতা, কম্পিউটার শিক্ষা, আইসিটি অনুশীলন ও প্রযুক্তিভিত্তিক শেখার জন্য ল্যাব সুবিধা রয়েছে।",
    icon: <FaComputer />,
  },
  {
    title: "মাল্টিমিডিয়া ক্লাস",
    description:
      "ভিডিও, অডিও, প্রেজেন্টেশন ও ডিজিটাল কনটেন্টের মাধ্যমে পাঠদানকে আরও আকর্ষণীয় ও কার্যকর করা হয়।",
    icon: <FaVideo />,
  },
  {
    title: "শিক্ষা সহায়ক উপকরণ",
    description:
      "চার্ট, মডেল, বোর্ড, প্রজেক্ট ম্যাটেরিয়াল ও অন্যান্য শিক্ষা উপকরণ পাঠদানকে সহজ ও প্রাণবন্ত করে।",
    icon: <FaLightbulb />,
  },
];

const studentSupportFacilities: FacilityItem[] = [
  {
    title: "স্বাস্থ্যসেবা ও ফার্স্ট এইড",
    description:
      "শিক্ষার্থীদের প্রাথমিক স্বাস্থ্যসেবা ও জরুরি অবস্থায় দ্রুত সহায়তার জন্য ফার্স্ট এইড ব্যবস্থা রাখা হয়।",
    icon: <FaHouseMedicalCircleCheck />,
  },
  {
    title: "কাউন্সেলিং সহায়তা",
    description:
      "শিক্ষার্থীদের মানসিক চাপ, পড়াশোনা বা আচরণগত সমস্যায় পরামর্শ ও সহায়ক পরিবেশ প্রদান করা হয়।",
    icon: <FaHeartPulse />,
  },
  {
    title: "পরিচ্ছন্ন পানীয় জল",
    description:
      "শিক্ষার্থীদের স্বাস্থ্য সুরক্ষায় নিরাপদ ও পরিচ্ছন্ন পানীয় জলের ব্যবস্থা রাখা হয়।",
    icon: <FaBottleWater />,
  },
  {
    title: "পরিচ্ছন্ন টয়লেট",
    description:
      "স্বাস্থ্যবিধি বজায় রাখতে শিক্ষার্থীদের জন্য পরিচ্ছন্ন ও ব্যবহারযোগ্য টয়লেট সুবিধা নিশ্চিত করা হয়।",
    icon: <FaRestroom />,
  },
  {
    title: "নিরাপদ ক্যাম্পাস",
    description:
      "বিদ্যালয় প্রাঙ্গণে শিক্ষার্থীদের নিরাপদ চলাচল, শৃঙ্খলা ও শিক্ষক-স্টাফ তত্ত্বাবধান নিশ্চিত করা হয়।",
    icon: <FaShieldHalved />,
  },
  {
    title: "শিক্ষার্থী সহায়তা",
    description:
      "পড়াশোনা, শৃঙ্খলা, উপস্থিতি ও ব্যক্তিগত উন্নয়নে শিক্ষার্থীদের প্রয়োজনীয় দিকনির্দেশনা দেওয়া হয়।",
    icon: <FaChildReaching />,
  },
];

const coCurricularFacilities: FacilityItem[] = [
  {
    title: "খেলার মাঠ",
    description:
      "শারীরিক সুস্থতা, দলগত কাজ ও ক্রীড়া চর্চার জন্য বিদ্যালয়ে খেলার সুযোগ ও মাঠের ব্যবস্থা রয়েছে।",
    icon: <FaFutbol />,
  },
  {
    title: "সাংস্কৃতিক কার্যক্রম",
    description:
      "গান, নৃত্য, আবৃত্তি, নাটক ও সাংস্কৃতিক অনুষ্ঠানের মাধ্যমে শিক্ষার্থীদের প্রতিভা বিকাশের সুযোগ দেওয়া হয়।",
    icon: <FaMasksTheater />,
  },
  {
    title: "বিতর্ক ও কুইজ কার্যক্রম",
    description:
      "যুক্তি, জ্ঞান, উপস্থাপনা দক্ষতা ও আত্মবিশ্বাস বৃদ্ধির জন্য বিতর্ক ও কুইজ কার্যক্রম পরিচালিত হয়।",
    icon: <FaUsersGear />,
  },
  {
    title: "বার্ষিক ক্রীড়া ও অনুষ্ঠান",
    description:
      "বার্ষিক ক্রীড়া প্রতিযোগিতা, পুরস্কার বিতরণী ও বিভিন্ন অনুষ্ঠান শিক্ষার্থীদের অংশগ্রহণমূলক শেখার সুযোগ দেয়।",
    icon: <FaCalendarCheck />,
  },
];

const safetyItems: SafetyItem[] = [
  {
    title: "নিরাপত্তা পর্যবেক্ষণ",
    description:
      "বিদ্যালয়ের প্রবেশপথ, শ্রেণিকক্ষ ও ক্যাম্পাস এলাকায় নিয়মিত তত্ত্বাবধান নিশ্চিত করা হয়।",
    icon: <FaShieldHalved />,
  },
  {
    title: "শিক্ষক ও কর্মচারীদের তত্ত্বাবধান",
    description:
      "শিক্ষার্থী চলাচল, ক্লাস কার্যক্রম ও বিরতির সময়ে শিক্ষক ও কর্মচারীরা নজরদারি করেন।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "জরুরি যোগাযোগ ব্যবস্থা",
    description:
      "জরুরি পরিস্থিতিতে অভিভাবক ও সংশ্লিষ্ট কর্তৃপক্ষের সঙ্গে দ্রুত যোগাযোগের ব্যবস্থা রাখা হয়।",
    icon: <FaTriangleExclamation />,
  },
  {
    title: "শৃঙ্খলাপূর্ণ পরিবেশ",
    description:
      "নিয়মনীতি, আচরণবিধি ও শিক্ষার্থী তত্ত্বাবধানের মাধ্যমে নিরাপদ ও শৃঙ্খলাপূর্ণ পরিবেশ বজায় রাখা হয়।",
    icon: <FaSchoolFlag />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "বিদ্যালয়ের শ্রেণিকক্ষ, ল্যাব, লাইব্রেরি ও অন্যান্য সুবিধা সঠিকভাবে ব্যবহার করতে হবে।",
      "বিদ্যালয়ের কোনো সম্পদ নষ্ট করা যাবে না এবং ব্যবহার শেষে জায়গামতো রাখতে হবে।",
      "ল্যাব, লাইব্রেরি, টয়লেট ও শ্রেণিকক্ষ সবসময় পরিচ্ছন্ন রাখতে হবে।",
      "খেলার মাঠ ও সহশিক্ষা কার্যক্রমে অংশগ্রহণের সময় শৃঙ্খলা বজায় রাখতে হবে।",
      "নিরাপত্তা নির্দেশনা ও শিক্ষক-কর্মচারীদের পরামর্শ মেনে চলতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "সন্তানকে বিদ্যালয়ের সুবিধা সঠিকভাবে ব্যবহার ও সংরক্ষণ করতে উৎসাহ দিন।",
      "বিদ্যালয়ের নিয়মনীতি, নিরাপত্তা নির্দেশনা ও শৃঙ্খলা মেনে চলতে সন্তানকে সচেতন করুন।",
      "কোনো সমস্যা, ক্ষতি বা অসুবিধা দেখলে বিদ্যালয় কর্তৃপক্ষকে জানাতে সহযোগিতা করুন।",
      "সন্তানের স্বাস্থ্য, পরিচ্ছন্নতা ও নিরাপত্তা সম্পর্কে নিয়মিত খোঁজ রাখুন।",
      "বিদ্যালয়ের উন্নয়ন ও সুন্দর পরিবেশ বজায় রাখতে ইতিবাচক সহযোগিতা প্রদান করুন।",
    ],
  },
];

const FacilitiesPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Campus Facilities
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            সুবিধাসমূহ
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থীদের নিরাপদ, আধুনিক, সৃজনশীল ও মানসম্মত শিক্ষার পরিবেশ
            নিশ্চিত করতে বিদ্যালয়ের বিভিন্ন সুবিধা।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Facilities Overview */}
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
                  নিরাপদ ও আধুনিক শিক্ষার পরিবেশ
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ের সুবিধাসমূহ শিক্ষার্থীদের মানসম্মত শিক্ষা,
                  নিরাপত্তা, স্বাস্থ্য, প্রযুক্তি ব্যবহার এবং সহশিক্ষা কার্যক্রমে
                  অংশগ্রহণের সুযোগ তৈরি করে। আধুনিক শ্রেণিকক্ষ, লাইব্রেরি,
                  ল্যাব, খেলার মাঠ, স্বাস্থ্যসেবা ও নিরাপদ ক্যাম্পাস
                  শিক্ষার্থীদের পূর্ণ বিকাশে গুরুত্বপূর্ণ ভূমিকা রাখে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              শিক্ষা সুবিধা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Academic Facilities
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {academicFacilities.map((facility) => (
              <article
                key={facility.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {facility.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {facility.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Facilities */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                শিক্ষার্থী সহায়তা
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Student Support Facilities
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {studentSupportFacilities.map((facility) => (
                <article
                  key={facility.title}
                  className="group rounded-[24px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                    {facility.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                    {facility.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular Facilities */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              সহশিক্ষা সুবিধা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              Co-curricular Facilities
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coCurricularFacilities.map((facility) => (
              <article
                key={facility.title}
                className="group rounded-[26px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  {facility.icon}
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-primary transition-colors duration-500 group-hover:text-inverse">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                  {facility.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Safety and Security */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                নিরাপত্তা ব্যবস্থা
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                Safety and Security
              </h2>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-1 w-16 rounded-full bg-color-primary" />
                <span className="h-1 w-7 rounded-full bg-color-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {safetyItems.map((item) => (
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
                  <FaStar className="text-sm" />

                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    সমাপনী বার্তা
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  উন্নত সুবিধাই মানসম্মত শিক্ষার সহায়ক
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  বিদ্যালয়ের আধুনিক সুবিধাসমূহ শিক্ষার্থীদের শেখাকে সহজ,
                  আনন্দদায়ক ও নিরাপদ করে তোলে। শিক্ষক, শিক্ষার্থী, অভিভাবক ও
                  কর্তৃপক্ষের সম্মিলিত সহযোগিতায় এসব সুবিধা সঠিকভাবে ব্যবহার ও
                  সংরক্ষণ করলে একটি উন্নত শিক্ষার পরিবেশ গড়ে ওঠে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaRegBuilding />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    আধুনিক ক্যাম্পাস
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    নিরাপদ, পরিচ্ছন্ন ও শিক্ষাবান্ধব পরিবেশ শিক্ষার্থীর বিকাশে
                    সহায়ক।
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

export default FacilitiesPage;