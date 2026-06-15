import Link from "next/link";
import {
  FaCalendarCheck,
  FaCheck,
  FaClipboardCheck,
  FaMobileScreenButton,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegClock,
  FaShieldHeart,
  FaUserGraduate,
  FaVest,
} from "react-icons/fa6";

type ConductSection = {
  title: string;
  icon: React.ReactNode;
  points: string[];
};

const conductSections: ConductSection[] = [
  {
    title: "শিক্ষার্থীর দায়িত্ব",
    icon: <FaUserGraduate />,
    points: [
      "নিয়মিত বিদ্যালয়ে উপস্থিত থাকতে হবে এবং সময়মতো ক্লাসে আসতে হবে।",
      "নির্ধারিত স্কুল ইউনিফর্ম পরিধান করতে হবে এবং পরিচ্ছন্ন থাকতে হবে।",
      "শিক্ষক, কর্মচারী, সহপাঠী এবং বিদ্যালয়ের সম্পদের প্রতি সম্মান দেখাতে হবে।",
      "ক্লাসওয়ার্ক, হোমওয়ার্ক এবং অ্যাসাইনমেন্ট আন্তরিকতার সঙ্গে সম্পন্ন করতে হবে।",
      "সততা, শৃঙ্খলা, পরিচ্ছন্নতা এবং দায়িত্বশীল আচরণ বজায় রাখতে হবে।",
    ],
  },
  {
    title: "শ্রেণিকক্ষের নিয়মাবলি",
    icon: <FaPersonChalkboard />,
    points: [
      "পাঠদানের সময় মনোযোগ দিয়ে শুনতে হবে এবং শ্রদ্ধার সঙ্গে অংশগ্রহণ করতে হবে।",
      "সহপাঠীদের বিরক্ত করা বা শ্রেণিকক্ষের পরিবেশ নষ্ট করা যাবে না।",
      "কথা বলা, শ্রেণিকক্ষ ত্যাগ করা বা কোনো উপকরণ ব্যবহারের আগে অনুমতি নিতে হবে।",
      "প্রতিদিন প্রয়োজনীয় বই, খাতা এবং শিক্ষা উপকরণ সঙ্গে আনতে হবে।",
      "শিক্ষক ও শ্রেণি মনিটরের নির্দেশনা মেনে চলতে হবে।",
    ],
  },
  {
    title: "আচরণ ও শৃঙ্খলা",
    icon: <FaShieldHeart />,
    points: [
      "বুলিং, মারামারি, অশালীন ভাষা এবং অসম্মানজনক আচরণ সম্পূর্ণ নিষিদ্ধ।",
      "বিদ্যালয়ের সম্পদ নষ্ট করা বা শ্রেণিকক্ষের উপকরণ অপব্যবহার করা যাবে না।",
      "সবার সঙ্গে ভদ্র, নম্র এবং সম্মানজনক আচরণ করতে হবে।",
      "বিদ্যালয় প্রাঙ্গণ এবং বিদ্যালয়-সম্পর্কিত অনুষ্ঠানে নিয়ম মেনে চলতে হবে।",
      "শৃঙ্খলাজনিত কোনো সমস্যা হলে শ্রেণি শিক্ষক বা কর্তৃপক্ষকে জানাতে হবে।",
    ],
  },
  {
    title: "উপস্থিতি ও সময়নিষ্ঠা",
    icon: <FaRegClock />,
    points: [
      "প্রতিটি শিক্ষার্থীর নিয়মিত উপস্থিতি বাধ্যতামূলক।",
      "দেরিতে আসা পরিহার করতে হবে এবং প্রয়োজন হলে যথাযথ কারণ জানাতে হবে।",
      "অনুপস্থিতির জন্য বিদ্যালয় কর্তৃপক্ষের অনুমোদন নিতে হবে।",
      "সমাবেশ, ক্লাস, পরীক্ষা এবং বিদ্যালয়ের সকল কার্যক্রমে সময়মতো উপস্থিত থাকতে হবে।",
      "অনিবার্য অনুপস্থিতির ক্ষেত্রে অভিভাবকদের বিদ্যালয়কে অবহিত করতে হবে।",
    ],
  },
  {
    title: "ইউনিফর্ম ও ব্যক্তিগত পরিচ্ছন্নতা",
    icon: <FaVest />,
    points: [
      "পরিচ্ছন্ন ও সম্পূর্ণ স্কুল ইউনিফর্ম পরিধান করতে হবে।",
      "প্রয়োজনে বিদ্যালয়ের পরিচয়পত্র সঙ্গে রাখতে বা পরিধান করতে হবে।",
      "চুল, জুতা এবং সামগ্রিক পোশাক-পরিচ্ছদ পরিপাটি ও শালীন হতে হবে।",
      "অননুমোদিত অলংকার বা অনুপযুক্ত পোশাক ব্যবহার করা যাবে না।",
      "ব্যক্তিগত স্বাস্থ্যবিধি ও পরিচ্ছন্নতা বজায় রাখতে হবে।",
    ],
  },
  {
    title: "মোবাইল ও প্রযুক্তি ব্যবহার",
    icon: <FaMobileScreenButton />,
    points: [
      "বিদ্যালয় কর্তৃপক্ষের অনুমতি ছাড়া মোবাইল ফোন ব্যবহার করা যাবে না।",
      "ডিজিটাল ডিভাইস শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে ব্যবহার করতে হবে।",
      "অনুমতি ছাড়া ছবি, ভিডিও বা অডিও ধারণ করা নিষিদ্ধ।",
      "সাইবার বুলিং, সামাজিক যোগাযোগমাধ্যমের অপব্যবহার বা ক্ষতিকর কনটেন্ট শেয়ার করা যাবে না।",
      "প্রযুক্তি ব্যবহারে দায়িত্বশীলতা ও শালীনতা বজায় রাখতে হবে।",
    ],
  },
  {
    title: "পরীক্ষার নিয়মাবলি",
    icon: <FaClipboardCheck />,
    points: [
      "পরীক্ষার হলে সময়মতো উপস্থিত থাকতে হবে।",
      "পরীক্ষায় অসদুপায় অবলম্বন বা নকল করা কঠোরভাবে নিষিদ্ধ।",
      "পরীক্ষা হলের সকল নির্দেশনা মেনে চলতে হবে।",
      "প্রয়োজনীয় কলম, পেন্সিল ও অন্যান্য পরীক্ষা উপকরণ শিক্ষার্থীকে সঙ্গে আনতে হবে।",
      "পরীক্ষার নিয়ম ভঙ্গ করলে বিদ্যালয়ের শৃঙ্খলাবিধি অনুযায়ী ব্যবস্থা নেওয়া হবে।",
    ],
  },
  {
    title: "অভিভাবকদের সহযোগিতা",
    icon: <FaPeopleGroup />,
    points: [
      "অভিভাবকদের বিদ্যালয়ের নিয়মনীতি ও শৃঙ্খলা বজায় রাখতে সহযোগিতা করতে হবে।",
      "অভিভাবক সভায় অংশগ্রহণ করা এবং প্রয়োজনে শিক্ষকদের সঙ্গে যোগাযোগ রাখা জরুরি।",
      "শিক্ষার্থীর পড়াশোনা, হোমওয়ার্ক এবং অগ্রগতি নিয়মিত পর্যবেক্ষণ করতে হবে।",
      "শিক্ষার্থীদের সততা, সময়নিষ্ঠা, ভদ্রতা এবং দায়িত্বশীলতা শেখাতে অভিভাবকদের ভূমিকা গুরুত্বপূর্ণ।",
      "যেকোনো সমস্যা বা পরামর্শ বিদ্যালয়ের নির্ধারিত যোগাযোগ মাধ্যমে জানাতে হবে।",
    ],
  },
];

const keyValues = [
  "সম্মান",
  "শৃঙ্খলা",
  "দায়িত্ব",
  "সততা",
  "পরিচ্ছন্নতা",
  "সময়ানুবর্তিতা",
];

const CodeOfConductsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 font-main text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            Our Institution
          </p>

          <h1 className="mt-5 text-[38px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            আচরণবিধি
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শৃঙ্খলা, সম্মান, দায়িত্ববোধ এবং নিরাপদ শিক্ষার পরিবেশ নিশ্চিত করার
            জন্য এই আচরণবিধি প্রণয়ন করা হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-xl"
          >
            Back to Home
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
                  দায়িত্বশীল বিদ্যালয় সমাজ গঠন
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  আচরণবিধি শিক্ষার্থীদের শৃঙ্খলা, সম্মান, দায়িত্ববোধ, সততা এবং
                  ভালো নাগরিকত্বের পথে পরিচালিত করে। প্রত্যেক শিক্ষার্থীকে
                  শ্রেণিকক্ষ, বিদ্যালয় প্রাঙ্গণ, পরীক্ষা এবং বিদ্যালয়-সম্পর্কিত
                  সকল কার্যক্রমে এই নিয়মাবলি মেনে চলতে হবে। এই মানদণ্ড বজায়
                  রাখলে বিদ্যালয়ে একটি সুন্দর, নিরাপদ ও উৎসাহব্যঞ্জক শিক্ষার
                  পরিবেশ তৈরি হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conduct Sections */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              নিয়ম ও দায়িত্ব
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              শিক্ষার্থীদের নির্দেশনা
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {conductSections.map((section, index) => (
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
                      নিয়ম {String(index + 1).padStart(2, "0")}
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
                  সুন্দর শিক্ষার পরিবেশ গড়ে তুলি একসাথে
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  শিক্ষার্থী, শিক্ষক, অভিভাবক এবং বিদ্যালয় কর্তৃপক্ষের সম্মিলিত
                  সহযোগিতায় শৃঙ্খলা, সম্মান এবং শিক্ষার উৎকর্ষ বজায় রাখা সম্ভব।
                  এই আচরণবিধি অনুসরণ করলে প্রত্যেক শিক্ষার্থী আরও আত্মবিশ্বাসী,
                  দায়িত্বশীল এবং ভবিষ্যতের জন্য প্রস্তুত হয়ে উঠবে।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaShieldHeart />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    শৃঙ্খলা
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    সম্মান, দায়িত্ববোধ ও সততা প্রতিটি শিক্ষার্থীর পথপ্রদর্শক।
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

export default CodeOfConductsPage;