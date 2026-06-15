import Link from "next/link";
import {
  FaCalendarCheck,
  FaCheck,
  FaChildDress,
  FaPeopleGroup,
  FaPerson,
  FaPersonRunning,
  FaRegSnowflake,
  FaSchoolFlag,
  FaShieldHeart,
  FaShirt,
  FaTriangleExclamation,
} from "react-icons/fa6";

type DressCodeSection = {
  title: string;
  icon: React.ReactNode;
  points: string[];
};

const dressCodeSections: DressCodeSection[] = [
  {
    title: "সাধারণ ইউনিফর্ম নির্দেশনা",
    icon: <FaShirt />,
    points: [
      "প্রতিটি শিক্ষার্থীকে বিদ্যালয় কর্তৃক নির্ধারিত ইউনিফর্ম পরিধান করতে হবে।",
      "ইউনিফর্ম অবশ্যই পরিষ্কার, পরিপাটি এবং শালীন হতে হবে।",
      "বিদ্যালয়ের পরিচয়পত্র ব্যবহার বাধ্যতামূলক হলে তা নিয়মিত সঙ্গে রাখতে হবে।",
      "জুতা, মোজা, ব্যাগ এবং অন্যান্য ব্যবহার্য সামগ্রী বিদ্যালয়ের নির্দেশনা অনুযায়ী হতে হবে।",
      "বিদ্যালয়ের নির্ধারিত পোশাক ছাড়া অন্য কোনো পোশাক পরে আসা যাবে না।",
    ],
  },
  {
    title: "ছাত্রদের পোশাকবিধি",
    icon: <FaPerson />,
    points: [
      "ছাত্রদের নির্ধারিত শার্ট, প্যান্ট এবং অন্যান্য ইউনিফর্ম পরিধান করতে হবে।",
      "শার্ট পরিষ্কার ও ইস্ত্রি করা থাকা উচিত এবং সঠিকভাবে পরিধান করতে হবে।",
      "চুল পরিপাটি, পরিষ্কার এবং বিদ্যালয়ের নিয়ম অনুযায়ী রাখতে হবে।",
      "পরিষ্কার জুতা ও মোজা ব্যবহার করতে হবে।",
      "অতিরিক্ত ফ্যাশন, অননুমোদিত অলংকার বা অশোভন স্টাইল পরিহার করতে হবে।",
    ],
  },
  {
    title: "ছাত্রীদের পোশাকবিধি",
    icon: <FaChildDress />,
    points: [
      "ছাত্রীদের নির্ধারিত ইউনিফর্ম, ওড়না বা স্কার্ফ নিয়ম অনুযায়ী পরিধান করতে হবে।",
      "পোশাক পরিষ্কার, পরিপাটি, শালীন এবং বিদ্যালয়ের মান অনুযায়ী হতে হবে।",
      "চুল পরিপাটি ও পরিচ্ছন্ন রাখতে হবে।",
      "অননুমোদিত সাজসজ্জা, অতিরিক্ত অলংকার বা অশালীন পোশাক ব্যবহার করা যাবে না।",
      "বিদ্যালয়ের পরিবেশের সঙ্গে মানানসই মার্জিত পোশাক বজায় রাখতে হবে।",
    ],
  },
  {
    title: "শীতকালীন পোশাক",
    icon: <FaRegSnowflake />,
    points: [
      "শীতকালে বিদ্যালয় অনুমোদিত সোয়েটার, ব্লেজার বা কার্ডিগান পরিধান করতে হবে।",
      "শীতকালীন পোশাকের রঙ ও ডিজাইন বিদ্যালয়ের নির্দেশনা অনুযায়ী হতে হবে।",
      "অননুমোদিত জ্যাকেট, হুডি বা উজ্জ্বল রঙের পোশাক পরিধান করা যাবে না।",
      "শীতকালীন পোশাকও পরিষ্কার ও পরিপাটি রাখতে হবে।",
      "বিদ্যালয়ের ইউনিফর্মের সঙ্গে সামঞ্জস্যপূর্ণ পোশাক ব্যবহার করতে হবে।",
    ],
  },
  {
    title: "ক্রীড়া ও সহশিক্ষা পোশাক",
    icon: <FaPersonRunning />,
    points: [
      "ক্রীড়া বা নির্দিষ্ট সহশিক্ষা কার্যক্রমে বিদ্যালয় নির্ধারিত পোশাক পরিধান করতে হবে।",
      "খেলাধুলার দিনে উপযুক্ত জুতা ও প্রয়োজনীয় সামগ্রী ব্যবহার করতে হবে।",
      "স্পোর্টস ড্রেস পরিষ্কার ও কার্যক্রমের উপযোগী হতে হবে।",
      "বিদ্যালয়ের অনুমতি ছাড়া অন্য কোনো পোশাক ব্যবহার করা যাবে না।",
      "ক্রীড়া কার্যক্রমে শৃঙ্খলা ও নিরাপত্তা বজায় রাখতে হবে।",
    ],
  },
  {
    title: "পরিচ্ছন্নতা ও ব্যক্তিগত স্বাস্থ্যবিধি",
    icon: <FaShieldHeart />,
    points: [
      "প্রতিদিন পরিষ্কার পোশাক পরে বিদ্যালয়ে আসতে হবে।",
      "চুল, নখ, জুতা এবং ব্যক্তিগত পরিচ্ছন্নতা নিয়মিত বজায় রাখতে হবে।",
      "অপরিচ্ছন্ন পোশাক, দুর্গন্ধযুক্ত জুতা বা অগোছালো উপস্থিতি পরিহার করতে হবে।",
      "শিক্ষার্থীদের স্বাস্থ্যসম্মত ও পরিপাটি জীবনযাপনে অভ্যস্ত হতে হবে।",
      "পরিচ্ছন্নতা শৃঙ্খলা ও ভালো ব্যক্তিত্বের গুরুত্বপূর্ণ অংশ।",
    ],
  },
  {
    title: "নিষিদ্ধ বিষয়",
    icon: <FaTriangleExclamation />,
    points: [
      "অননুমোদিত পোশাক, রঙিন বা অশালীন পোশাক পরিধান করা যাবে না।",
      "অতিরিক্ত অলংকার, ভারী মেকআপ বা অননুমোদিত সাজসজ্জা নিষিদ্ধ।",
      "রঙিন চুল, অশালীন হেয়ার স্টাইল বা বিদ্যালয়ের পরিবেশবিরোধী সাজ গ্রহণযোগ্য নয়।",
      "ক্যাপ, সানগ্লাস, অননুমোদিত ব্যাগ বা অন্যান্য ফ্যাশন সামগ্রী ব্যবহার করা যাবে না।",
      "ড্রেস কোড ভঙ্গ করলে বিদ্যালয়ের শৃঙ্খলাবিধি অনুযায়ী ব্যবস্থা নেওয়া হবে।",
    ],
  },
  {
    title: "অভিভাবকদের ভূমিকা",
    icon: <FaPeopleGroup />,
    points: [
      "অভিভাবকদের সন্তানকে নিয়মিত সঠিক ইউনিফর্মে বিদ্যালয়ে পাঠাতে হবে।",
      "ইউনিফর্ম, জুতা, মোজা ও পরিচয়পত্র নিয়মিত পরিষ্কার ও প্রস্তুত রাখা উচিত।",
      "সন্তান বিদ্যালয়ের পোশাকবিধি মেনে চলছে কি না তা পর্যবেক্ষণ করতে হবে।",
      "ড্রেস কোড সম্পর্কে কোনো সমস্যা থাকলে বিদ্যালয়ের সঙ্গে যোগাযোগ করতে হবে।",
      "শৃঙ্খলাপূর্ণ বিদ্যালয় পরিবেশ বজায় রাখতে অভিভাবকদের সহযোগিতা গুরুত্বপূর্ণ।",
    ],
  },
];

const keyValues = [
  "পরিচ্ছন্নতা",
  "শালীনতা",
  "শৃঙ্খলা",
  "পরিপাটি",
  "সম্মান",
  "একতা",
];

const DressCodePage = () => {
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
            ড্রেস কোড
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            পরিচ্ছন্নতা, শালীনতা ও শৃঙ্খলার মাধ্যমে শিক্ষার্থীদের সুন্দর
            বিদ্যালয় পরিবেশ গড়ে তোলার নির্দেশনা।
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
                  ইউনিফর্মের উদ্দেশ্য
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  বিদ্যালয়ের ড্রেস কোড শিক্ষার্থীদের মধ্যে শৃঙ্খলা,
                  পরিচ্ছন্নতা, একতা এবং বিদ্যালয়ের প্রতি সম্মানবোধ গড়ে তোলে।
                  সঠিক ইউনিফর্ম শিক্ষার্থীদের পরিচয় বহন করে এবং বিদ্যালয়ের
                  সুন্দর ও শৃঙ্খলাপূর্ণ পরিবেশ বজায় রাখতে সহায়তা করে। তাই
                  প্রতিটি শিক্ষার্থীকে নির্ধারিত পোশাকবিধি যথাযথভাবে অনুসরণ
                  করতে হবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Sections */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              নিয়ম ও নির্দেশনা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              শিক্ষার্থীদের পোশাকবিধি
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {dressCodeSections.map((section, index) => (
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
                  পরিপাটি পোশাক সুন্দর শিক্ষার পরিচয়
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  ড্রেস কোড মেনে চলা শুধু একটি নিয়ম নয়, বরং এটি শিক্ষার্থীর
                  শৃঙ্খলা, আত্মসম্মান এবং বিদ্যালয়ের প্রতি দায়িত্ববোধের প্রকাশ।
                  শিক্ষক, শিক্ষার্থী ও অভিভাবকদের সম্মিলিত সহযোগিতায় একটি
                  পরিচ্ছন্ন, শালীন ও সুন্দর বিদ্যালয় পরিবেশ গড়ে তোলা সম্ভব।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    শালীনতা
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    পরিচ্ছন্ন ও পরিপাটি পোশাক শিক্ষার্থীর সুন্দর পরিচয় বহন
                    করে।
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

export default DressCodePage;