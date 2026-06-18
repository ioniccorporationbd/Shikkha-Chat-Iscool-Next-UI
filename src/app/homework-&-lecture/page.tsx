import Link from "next/link";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaClipboardList,
  FaCloudArrowDown,
  FaFilePdf,
  FaFolderOpen,
  FaGraduationCap,
  FaHouseUser,
  FaMagnifyingGlass,
  FaPenToSquare,
  FaPeopleGroup,
  FaRegClock,
  FaSchoolFlag,
  FaUserGraduate,
} from "react-icons/fa6";

type DocumentItem = {
  id: number;
  className: string;
  subject: string;
  type: string;
  date: string;
  teacher: string;
  fileUrl: string;
};

type GuidelineSection = {
  title: string;
  icon: React.ReactNode;
  points: string[];
};

type SubjectItem = {
  title: string;
  total: string;
};

const documentItems: DocumentItem[] = [
  {
    id: 1,
    className: "প্রথম শ্রেণি",
    subject: "বাংলা",
    type: "হোমওয়ার্ক",
    date: "১২ জানুয়ারি ২০২৬",
    teacher: "শ্রেণি শিক্ষক",
    fileUrl: "#",
  },
  {
    id: 2,
    className: "দ্বিতীয় শ্রেণি",
    subject: "ইংরেজি",
    type: "লেকচার নোট",
    date: "১৩ জানুয়ারি ২০২৬",
    teacher: "ইংরেজি শিক্ষক",
    fileUrl: "#",
  },
  {
    id: 3,
    className: "তৃতীয় শ্রেণি",
    subject: "গণিত",
    type: "ওয়ার্কশিট",
    date: "১৪ জানুয়ারি ২০২৬",
    teacher: "গণিত শিক্ষক",
    fileUrl: "#",
  },
  {
    id: 4,
    className: "চতুর্থ শ্রেণি",
    subject: "বিজ্ঞান",
    type: "ক্লাস লেকচার",
    date: "১৫ জানুয়ারি ২০২৬",
    teacher: "বিজ্ঞান শিক্ষক",
    fileUrl: "#",
  },
  {
    id: 5,
    className: "পঞ্চম শ্রেণি",
    subject: "বাংলাদেশ ও বিশ্বপরিচয়",
    type: "অধ্যায়ভিত্তিক নোট",
    date: "১৬ জানুয়ারি ২০২৬",
    teacher: "বিষয় শিক্ষক",
    fileUrl: "#",
  },
  {
    id: 6,
    className: "ষষ্ঠ শ্রেণি",
    subject: "আইসিটি",
    type: "প্র্যাকটিস শিট",
    date: "১৭ জানুয়ারি ২০২৬",
    teacher: "আইসিটি শিক্ষক",
    fileUrl: "#",
  },
];

const subjects: SubjectItem[] = [
  {
    title: "বাংলা",
    total: "১২টি ডকুমেন্ট",
  },
  {
    title: "ইংরেজি",
    total: "১০টি ডকুমেন্ট",
  },
  {
    title: "গণিত",
    total: "১৫টি ডকুমেন্ট",
  },
  {
    title: "বিজ্ঞান",
    total: "৯টি ডকুমেন্ট",
  },
  {
    title: "আইসিটি",
    total: "৮টি ডকুমেন্ট",
  },
  {
    title: "ধর্ম শিক্ষা",
    total: "৬টি ডকুমেন্ট",
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "প্রতিদিন নিয়মিত এই পেজ থেকে হোমওয়ার্ক ও ক্লাস লেকচার ডকুমেন্ট চেক করতে হবে।",
      "নির্ধারিত সময়ের মধ্যে হোমওয়ার্ক সম্পন্ন করে শিক্ষককে জমা দিতে হবে।",
      "ডাউনলোড করা ফাইল ভালোভাবে সংরক্ষণ করতে হবে।",
      "কোনো ডকুমেন্ট বুঝতে সমস্যা হলে বিষয় শিক্ষক বা শ্রেণি শিক্ষকের সঙ্গে যোগাযোগ করতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaHouseUser />,
    points: [
      "সন্তানের হোমওয়ার্ক ও ক্লাস লেকচার ডকুমেন্ট নিয়মিত পর্যবেক্ষণ করুন।",
      "জমাদানের তারিখ সম্পর্কে সচেতন থাকুন এবং সন্তানকে সময়মতো কাজ শেষ করতে উৎসাহ দিন।",
      "পড়াশোনায় দুর্বলতা দেখা দিলে শ্রেণি শিক্ষক বা বিষয় শিক্ষকের সঙ্গে যোগাযোগ করুন।",
      "शिक्षার্থীর পড়ার রুটিন তৈরি করতে সহায়তা করুন।",
    ],
  },
];

const classList = [
  "প্রথম শ্রেণি",
  "দ্বিতীয় শ্রেণি",
  "তৃতীয় শ্রেণি",
  "চতুর্থ শ্রেণি",
  "পঞ্চম শ্রেণি",
  "ষষ্ঠ শ্রেণি",
  "সপ্তম শ্রেণি",
  "অষ্টম শ্রেণি",
  "নবম শ্রেণি",
  "দশম শ্রেণি",
];

const HomeWorkAndLectureDocumentsPage = () => {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Section */}
      <section className="relative overflow-hidden bg-page-primary px-4 py-14 text-primary sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-brand-primary sm:text-sm">
            একাডেমিক রিসোর্স
          </p>

          <h1 className="mt-5 text-[34px] font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            হোমওয়ার্ক ও ক্লাস লেকচার ডকুমেন্টস
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-7 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থীদের নিয়মিত পড়াশোনা, হোমওয়ার্ক, ক্লাস লেকচার, ওয়ার্কশিট
            এবং অধ্যায়ভিত্তিক নোট সহজভাবে সংগ্রহ করার জন্য এই পেজ তৈরি করা
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

      {/* Quick Stats */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
              <FaClipboardList />
            </div>

            <h3 className="mt-4 text-2xl font-black text-primary">৬০+</h3>
            <p className="mt-1 text-sm font-semibold text-secondary">
              মোট ডকুমেন্ট
            </p>
          </div>

          <div className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
              <FaBookOpen />
            </div>

            <h3 className="mt-4 text-2xl font-black text-primary">৮+</h3>
            <p className="mt-1 text-sm font-semibold text-secondary">
              বিষয়ভিত্তিক নোট
            </p>
          </div>

          <div className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
              <FaGraduationCap />
            </div>

            <h3 className="mt-4 text-2xl font-black text-primary">১০</h3>
            <p className="mt-1 text-sm font-semibold text-secondary">
              শ্রেণিভিত্তিক রিসোর্স
            </p>
          </div>

          <div className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
              <FaRegClock />
            </div>

            <h3 className="mt-4 text-2xl font-black text-primary">সাপ্তাহিক</h3>
            <p className="mt-1 text-sm font-semibold text-secondary">
              নিয়মিত আপডেট
            </p>
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
                  পড়াশোনার সহায়ক ডকুমেন্ট
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  এই পেজে শিক্ষার্থীদের জন্য শ্রেণিভিত্তিক ও বিষয়ভিত্তিক
                  হোমওয়ার্ক, ক্লাস লেকচার, ওয়ার্কশিট এবং পরীক্ষার প্রস্তুতিমূলক
                  নোট সংরক্ষণ করা হয়েছে। শিক্ষার্থীরা সহজেই প্রয়োজনীয় ডকুমেন্ট
                  ডাউনলোড করতে পারবে এবং অভিভাবকরাও সন্তানের পড়াশোনা নিয়মিত
                  পর্যবেক্ষণ করতে পারবেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Cards */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              বিষয়ভিত্তিক তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              বিষয় অনুযায়ী ডকুমেন্টস
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-color-primary" />
              <span className="h-1 w-7 rounded-full bg-color-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.title}
                className="group rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-page-secondary group-hover:text-brand-primary">
                    <FaFolderOpen />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                      {subject.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-secondary transition-colors duration-500 group-hover:text-inverse/80">
                      {subject.total}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class List */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                  শ্রেণিভিত্তিক
                </p>
                <h2 className="mt-2 text-3xl font-black text-primary">
                  শ্রেণি অনুযায়ী ডকুমেন্টস
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-secondary px-4 py-2 text-sm font-black text-secondary">
                <FaMagnifyingGlass className="text-brand-primary" />
                সহজে শ্রেণি নির্বাচন করুন
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {classList.map((item) => (
                <Link
                  key={item}
                  href="#documents"
                  className="rounded-[18px] border border-soft bg-page-secondary px-4 py-4 text-center text-sm font-black text-primary transition-all duration-500 hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-lg"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Table */}
      <section id="documents" className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ডাউনলোড এলাকা
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
              সাম্প্রতিক ডকুমেন্টস
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
                      শ্রেণি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বিষয়
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      ডকুমেন্ট
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      তারিখ
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শিক্ষক
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ডাউনলোড
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {documentItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.className}
                      </td>
                      <td className="px-5 py-5 text-sm font-black text-primary">
                        {item.subject}
                      </td>
                      <td className="px-5 py-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-page-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          <FaFilePdf />
                          {item.type}
                        </span>
                      </td>
                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.date}
                      </td>
                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.teacher}
                      </td>
                      <td className="px-5 py-5 text-right">
                        <Link
                          href={item.fileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary"
                        >
                          ডাউনলোড করুন
                          <FaCloudArrowDown />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {documentItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {item.className}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-primary">
                        {item.subject}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color-secondary text-primary">
                      <FaFilePdf />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">ডকুমেন্ট:</span>{" "}
                      {item.type}
                    </p>
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">তারিখ:</span>{" "}
                      {item.date}
                    </p>
                    <p className="text-sm font-semibold text-secondary">
                      <span className="font-black text-primary">শিক্ষক:</span>{" "}
                      {item.teacher}
                    </p>
                  </div>

                  <Link
                    href={item.fileUrl}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-4 py-3 text-sm font-black text-inverse transition-all duration-500 hover:bg-color-secondary hover:text-primary"
                  >
                    ডাউনলোড করুন
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
                  নিয়মিত পড়াশোনার সহজ সহায়ক
                </h2>

                <p className="mt-4 text-sm font-semibold leading-8 text-inverse/90 sm:text-base">
                  হোমওয়ার্ক ও ক্লাস লেকচার ডকুমেন্টস শিক্ষার্থীদের প্রতিদিনের
                  পড়াশোনা আরও সহজ, পরিকল্পিত ও কার্যকর করে তোলে। শিক্ষক,
                  শিক্ষার্থী এবং অভিভাবকের সম্মিলিত সহযোগিতায় শিক্ষার মান আরও
                  উন্নত করা সম্ভব।
                </p>
              </div>

              <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
                <div className="rounded-[28px] bg-page-primary p-6 text-center shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <p className="mt-5 text-2xl font-black text-primary">
                    শিক্ষা সহায়তা
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-secondary">
                    নিয়মিত ডকুমেন্ট চেক করে পড়াশোনাকে আরও সহজ ও সফল করুন।
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

export default HomeWorkAndLectureDocumentsPage;