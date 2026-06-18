import Link from "next/link";
import {
  FaCalendarCheck,
  FaCheck,
  FaClipboardList,
  FaComments,
  FaGraduationCap,
  FaHeartPulse,
  FaHouseUser,
  FaMobileScreenButton,
  FaPeopleGroup,
  FaPersonCircleCheck,
  FaRegClock,
  FaShieldHeart,
} from "react-icons/fa6";

type ParentGuidelineSection = {
  title: string;
  icon: React.ReactNode;
  points: string[];
};

const guidelineSections: ParentGuidelineSection[] = [
  {
    title: "উপস্থিতি ও সময়নিষ্ঠা",
    icon: <FaRegClock />,
    points: [
      "শিক্ষার্থীর নিয়মিত বিদ্যালয়ে উপস্থিতি নিশ্চিত করা অভিভাবকের গুরুত্বপূর্ণ দায়িত্ব।",
      "শিক্ষার্থী যেন প্রতিদিন সময়মতো বিদ্যালয়ে পৌঁছায়, তা নিশ্চিত করতে হবে।",
      "অনিবার্য কারণে অনুপস্থিত হলে বিদ্যালয় কর্তৃপক্ষকে যথাসময়ে অবহিত করতে হবে।",
      "দেরিতে আসা বা বারবার অনুপস্থিতি শিক্ষার্থীর পড়াশোনায় নেতিবাচক প্রভাব ফেলে।",
      "বিদ্যালয়ের সময়সূচি, পরীক্ষা ও বিশেষ কার্যক্রম সম্পর্কে অভিভাবকদের সচেতন থাকতে হবে।",
    ],
  },
  {
    title: "হোমওয়ার্ক ও পড়াশোনা পর্যবেক্ষণ",
    icon: <FaClipboardList />,
    points: [
      "শিক্ষার্থীর হোমওয়ার্ক, অ্যাসাইনমেন্ট ও ক্লাসওয়ার্ক নিয়মিত পর্যবেক্ষণ করতে হবে।",
      "প্রতিদিন নির্দিষ্ট সময়ে পড়াশোনার অভ্যাস গড়ে তুলতে অভিভাবকদের সহযোগিতা প্রয়োজন।",
      "শিক্ষার্থীর খাতা, ডায়েরি ও নোটিশ নিয়মিত পরীক্ষা করা উচিত।",
      "পড়াশোনায় দুর্বলতা দেখা দিলে দ্রুত শ্রেণি শিক্ষক বা বিষয় শিক্ষকের সঙ্গে যোগাযোগ করতে হবে।",
      "শিক্ষার্থীর শেখার প্রতি আগ্রহ বাড়াতে উৎসাহ, প্রশংসা ও ধৈর্যশীল সহযোগিতা প্রয়োজন।",
    ],
  },
  {
    title: "শৃঙ্খলা ও আচরণ",
    icon: <FaPersonCircleCheck />,
    points: [
      "শিক্ষার্থীকে ভদ্রতা, শালীনতা, সততা ও দায়িত্বশীল আচরণ শেখাতে হবে।",
      "বিদ্যালয়ের আচরণবিধি মেনে চলতে শিক্ষার্থীকে উৎসাহিত করতে হবে।",
      "সহপাঠী, শিক্ষক, কর্মচারী ও বিদ্যালয়ের সম্পদের প্রতি সম্মান দেখানোর শিক্ষা দিতে হবে।",
      "বুলিং, মারামারি, অশালীন ভাষা বা অনৈতিক আচরণ থেকে বিরত থাকতে সন্তানকে সচেতন করতে হবে।",
      "শৃঙ্খলাজনিত কোনো সমস্যা হলে বিদ্যালয়ের সঙ্গে সহযোগিতামূলক মনোভাব বজায় রাখতে হবে।",
    ],
  },
  {
    title: "অভিভাবক-শিক্ষক যোগাযোগ",
    icon: <FaComments />,
    points: [
      "শিক্ষার্থীর অগ্রগতি জানতে নিয়মিত শিক্ষক ও বিদ্যালয়ের সঙ্গে যোগাযোগ রাখা উচিত।",
      "অভিভাবক সভা, ফলাফল আলোচনা ও পরামর্শ সভায় অংশগ্রহণ করা প্রয়োজন।",
      "শিক্ষার্থীর আচরণ, স্বাস্থ্য বা পারিবারিক কোনো গুরুত্বপূর্ণ বিষয় বিদ্যালয়কে জানানো উচিত।",
      "কোনো অভিযোগ বা পরামর্শ থাকলে নির্ধারিত অফিসিয়াল যোগাযোগ মাধ্যমে জানাতে হবে।",
      "শিক্ষক ও অভিভাবকের সহযোগিতা শিক্ষার্থীর সার্বিক উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখে।",
    ],
  },
  {
    title: "স্বাস্থ্য, নিরাপত্তা ও পরিচ্ছন্নতা",
    icon: <FaShieldHeart />,
    points: [
      "শিক্ষার্থীকে নিয়মিত স্বাস্থ্যকর খাবার, পর্যাপ্ত ঘুম ও পরিচ্ছন্ন জীবনযাপনে অভ্যস্ত করতে হবে।",
      "অসুস্থ হলে বিদ্যালয়ে পাঠানোর আগে প্রয়োজনীয় চিকিৎসা ও বিশ্রামের ব্যবস্থা করতে হবে।",
      "সংক্রামক রোগ বা বিশেষ স্বাস্থ্য সমস্যা থাকলে বিদ্যালয় কর্তৃপক্ষকে জানাতে হবে।",
      "শিক্ষার্থীর ইউনিফর্ম, বই-খাতা, জুতা ও ব্যক্তিগত পরিচ্ছন্নতা নিশ্চিত করতে হবে।",
      "বিদ্যালয়ে আসা-যাওয়ার সময় শিক্ষার্থীর নিরাপত্তার বিষয়ে অভিভাবকদের সতর্ক থাকতে হবে।",
    ],
  },
  {
    title: "মোবাইল, ইন্টারনেট ও প্রযুক্তি ব্যবহার",
    icon: <FaMobileScreenButton />,
    points: [
      "শিক্ষার্থীর মোবাইল, ইন্টারনেট ও সামাজিক যোগাযোগমাধ্যম ব্যবহারের ওপর অভিভাবকদের নজর রাখা জরুরি।",
      "অনলাইন কনটেন্ট, গেমস বা সামাজিক যোগাযোগমাধ্যম যেন পড়াশোনায় ব্যাঘাত না ঘটায় তা নিশ্চিত করতে হবে।",
      "সাইবার বুলিং, অনিরাপদ ওয়েবসাইট ও ক্ষতিকর কনটেন্ট সম্পর্কে শিক্ষার্থীকে সচেতন করতে হবে।",
      "প্রযুক্তি যেন শিক্ষামূলক ও দায়িত্বশীল কাজে ব্যবহৃত হয়, সে বিষয়ে দিকনির্দেশনা দিতে হবে।",
      "বিদ্যালয়ের অনুমতি ছাড়া শিক্ষার্থীর মোবাইল ফোন ব্যবহার নিরুৎসাহিত করতে হবে।",
    ],
  },
  {
    title: "সহশিক্ষা কার্যক্রমে অংশগ্রহণ",
    icon: <FaGraduationCap />,
    points: [
      "খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান, বিতর্ক, বিজ্ঞান মেলা ও অন্যান্য কার্যক্রমে শিক্ষার্থীকে উৎসাহিত করতে হবে।",
      "সহশিক্ষা কার্যক্রম শিক্ষার্থীর আত্মবিশ্বাস, নেতৃত্ব ও সৃজনশীলতা বৃদ্ধি করে।",
      "বিদ্যালয়ের অনুষ্ঠান ও কার্যক্রমে অভিভাবকদের সহযোগিতা শিক্ষার্থীদের অনুপ্রাণিত করে।",
      "শিক্ষার্থীর আগ্রহ ও প্রতিভা অনুযায়ী উপযুক্ত কার্যক্রমে অংশগ্রহণের সুযোগ দিতে হবে।",
      "শিক্ষার পাশাপাশি নৈতিকতা, দলগত কাজ ও সামাজিক দায়িত্ববোধ গঠনে সহশিক্ষা গুরুত্বপূর্ণ।",
    ],
  },
  {
    title: "মানসিক স্বাস্থ্য ও পারিবারিক সহায়তা",
    icon: <FaHeartPulse />,
    points: [
      "শিক্ষার্থীর মানসিক অবস্থা, আচরণ, চাপ, উদ্বেগ বা পরিবর্তন সম্পর্কে অভিভাবকদের সচেতন থাকতে হবে।",
      "সন্তানের সঙ্গে নিয়মিত কথা বলা, সময় দেওয়া এবং তার অনুভূতি গুরুত্ব দিয়ে শোনা প্রয়োজন।",
      "অতিরিক্ত চাপ, তুলনা বা নেতিবাচক মন্তব্য থেকে বিরত থাকতে হবে।",
      "শিক্ষার্থীর আত্মবিশ্বাস বাড়াতে উৎসাহ, ভালোবাসা ও ইতিবাচক পরিবেশ প্রদান করতে হবে।",
      "প্রয়োজনে শ্রেণি শিক্ষক, কাউন্সেলর বা বিদ্যালয় কর্তৃপক্ষের পরামর্শ নিতে হবে।",
    ],
  },
];

const keyValues = [
  "সহযোগিতা",
  "সময়ানুবর্তিতা",
  "দায়িত্ব",
  "শৃঙ্খলা",
  "নিরাপত্তা",
  "উৎসাহ",
];

const GuidelineForParentsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 font-main text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
         আমাদের প্রতিষ্ঠান
          </p>

          <h1 className="mt-5 text-[36px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            অভিভাবকদের নির্দেশিকা
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থী, অভিভাবক ও বিদ্যালয়ের সম্মিলিত সহযোগিতায় সুন্দর,
            শৃঙ্খলাপূর্ণ ও সফল শিক্ষার পরিবেশ গড়ে তোলাই এই নির্দেশিকার মূল
            উদ্দেশ্য।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
           হোম পেজে ফিরে যান
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {keyValues.map((value) => (
              <div
                key={value}
                className="group rounded-[18px] border border-soft bg-page-primary p-4 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-lg"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-color-secondary text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                  <FaCheck className="text-sm" />
                </div>

                <p className="mt-3 text-sm font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                  {value}
                </p>
              </div>
            ))}
          </div>
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
                  অভিভাবক ও বিদ্যালয়ের যৌথ দায়িত্ব
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  শিক্ষার্থীর সার্বিক উন্নয়নে বিদ্যালয়ের পাশাপাশি অভিভাবকদের
                  ভূমিকা অত্যন্ত গুরুত্বপূর্ণ। নিয়মিত উপস্থিতি, পড়াশোনা,
                  শৃঙ্খলা, স্বাস্থ্য, নিরাপত্তা ও মানসিক বিকাশে অভিভাবকদের
                  সচেতন সহযোগিতা শিক্ষার্থীর সফলতার পথ সহজ করে। এই নির্দেশিকা
                  অভিভাবকদের বিদ্যালয়ের নিয়মনীতি, প্রত্যাশা এবং দায়িত্ব সম্পর্কে
                  সুস্পষ্ট ধারণা দিতে সহায়তা করবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guideline Sections */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              নিয়ম ও নির্দেশনা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              অভিভাবকদের করণীয়
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {guidelineSections.map((section, index) => (
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
                      নির্দেশনা {String(index + 1).padStart(2, "0")}
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
                  সন্তানদের সুন্দর ভবিষ্যতের জন্য একসাথে কাজ করি
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  শিক্ষার্থী, অভিভাবক, শিক্ষক এবং বিদ্যালয় কর্তৃপক্ষের
                  পারস্পরিক সহযোগিতার মাধ্যমেই শিক্ষার্থীর পূর্ণ বিকাশ সম্ভব।
                  অভিভাবকদের সচেতন ভূমিকা সন্তানদের শৃঙ্খলাবোধ,
                  আত্মবিশ্বাস, দায়িত্বশীলতা এবং নৈতিক মূল্যবোধ গঠনে গুরুত্বপূর্ণ
                  ভূমিকা রাখে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaHouseUser />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    অভিভাবক সহযোগিতা
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    পরিবার ও বিদ্যালয়ের যৌথ প্রচেষ্টাই শিক্ষার্থীর সফলতার
                    ভিত্তি।
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

export default GuidelineForParentsPage;