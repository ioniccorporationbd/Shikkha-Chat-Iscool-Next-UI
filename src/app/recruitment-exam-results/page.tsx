import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaCalendarCheck,
  FaCheck,
  FaCircleInfo,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaIdCard,
  FaPenToSquare,
  FaPeopleGroup,
  FaRegCalendarDays,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTriangleExclamation,
  FaUserGraduate,
  FaUsersGear,
} from "react-icons/fa6";

type SummaryCard = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type ResultNotice = {
  id: number;
  title: string;
  circularId: string;
  examType: string;
  publishDate: string;
  status: "Published" | "Final" | "Viva" | "Written";
  downloadUrl: string;
};

type Candidate = {
  id: number;
  roll: string;
  name: string;
  post: string;
  result: "Selected" | "Waiting" | "Qualified";
  remarks: string;
};

type Instruction = {
  title: string;
  description: string;
  icon: ReactNode;
};

const summaryCards: SummaryCard[] = [
  {
    title: "প্রকাশিত ফলাফল",
    value: "০৮",
    description: "নিয়োগ পরীক্ষার ফলাফল প্রকাশিত হয়েছে",
    icon: <FaFileLines />,
  },
  {
    title: "লিখিত পরীক্ষা",
    value: "০৪",
    description: "লিখিত পরীক্ষার ফলাফল নোটিশ",
    icon: <FaPenToSquare />,
  },
  {
    title: "মৌখিক পরীক্ষার ফলাফল",
    value: "০৩",
    description: "মৌখিক ও ব্যবহারিক পরীক্ষার ফলাফল",
    icon: <FaPeopleGroup />,
  },
  {
    title: "চূড়ান্ত নির্বাচন",
    value: "০১",
    description: "চূড়ান্ত নির্বাচিত প্রার্থীর তালিকা",
    icon: <FaAward />,
  },
];

const resultNotices: ResultNotice[] = [
  {
    id: 1,
    title: "সহকারী শিক্ষক নিয়োগের চূড়ান্ত ফলাফল ২০২৬",
    circularId: "REC-2026-01",
    examType: "চূড়ান্ত নির্বাচন",
    publishDate: "১৫ মার্চ ২০২৬",
    status: "Final",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "সহকারী শিক্ষক মৌখিক পরীক্ষার ফলাফল ২০২৬",
    circularId: "REC-2026-01",
    examType: "মৌখিক পরীক্ষার ফলাফল",
    publishDate: "১০ মার্চ ২০২৬",
    status: "Viva",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "অফিস সহকারী লিখিত পরীক্ষার ফলাফল",
    circularId: "REC-2026-02",
    examType: "লিখিত পরীক্ষা",
    publishDate: "০৫ মার্চ ২০২৬",
    status: "Written",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "কম্পিউটার অপারেটর নিয়োগের ফলাফল",
    circularId: "REC-2026-03",
    examType: "ব্যবহারিক ও মৌখিক পরীক্ষা",
    publishDate: "২৮ ফেব্রুয়ারি ২০২৬",
    status: "Published",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "হিসাব সহকারী লিখিত পরীক্ষার ফলাফল",
    circularId: "REC-2026-04",
    examType: "লিখিত পরীক্ষা",
    publishDate: "২০ ফেব্রুয়ারি ২০২৬",
    status: "Written",
    downloadUrl: "#",
  },
];

const candidates: Candidate[] = [
  {
    id: 1,
    roll: "২০২৬০১০১",
    name: "মোঃ হাসান মাহমুদ",
    post: "সহকারী শিক্ষক - গণিত",
    result: "Selected",
    remarks: "চূড়ান্তভাবে নির্বাচিত",
  },
  {
    id: 2,
    roll: "২০২৬০১০৮",
    name: "নুসরাত জাহান",
    post: "সহকারী শিক্ষক - বাংলা",
    result: "Selected",
    remarks: "চূড়ান্তভাবে নির্বাচিত",
  },
  {
    id: 3,
    roll: "২০২৬০১১৫",
    name: "ফারহানা আক্তার",
    post: "সহকারী শিক্ষক - ইংরেজি",
    result: "Qualified",
    remarks: "মৌখিক পরীক্ষার জন্য উত্তীর্ণ",
  },
  {
    id: 4,
    roll: "২০২৬০১২২",
    name: "মোঃ আরিফ হোসেন",
    post: "কম্পিউটার অপারেটর",
    result: "Selected",
    remarks: "ব্যবহারিক পরীক্ষায় উত্তীর্ণ",
  },
  {
    id: 5,
    roll: "২০২৬০১২৯",
    name: "শারমিন সুলতানা",
    post: "অফিস সহকারী",
    result: "Waiting",
    remarks: "অপেক্ষমাণ তালিকা",
  },
  {
    id: 6,
    roll: "২০২৬০১৩৬",
    name: "রাকিবুল ইসলাম",
    post: "হিসাব সহকারী",
    result: "Qualified",
    remarks: "লিখিত পরীক্ষায় উত্তীর্ণ",
  },
];

const instructions: Instruction[] = [
  {
    title: "ডকুমেন্ট যাচাই",
    description:
      "নির্বাচিত প্রার্থীদের নির্ধারিত তারিখে মূল সনদ, জাতীয় পরিচয়পত্র এবং প্রয়োজনীয় কাগজপত্রসহ উপস্থিত হতে হবে।",
    icon: <FaIdCard />,
  },
  {
    title: "মৌখিক পরীক্ষার সময়সূচি",
    description:
      "লিখিত পরীক্ষায় উত্তীর্ণ প্রার্থীদের মৌখিক পরীক্ষার সময়সূচি নোটিশ বোর্ড এবং ওয়েবসাইটে প্রকাশ করা হবে।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "যোগদানের নির্দেশনা",
    description:
      "চূড়ান্তভাবে নির্বাচিত প্রার্থীদের যোগদানপত্র সংগ্রহের জন্য বিদ্যালয় অফিসে যোগাযোগ করতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "অফিসিয়াল যাচাই",
    description:
      "ফলাফল যাচাইয়ের ক্ষেত্রে বিদ্যালয়ের অফিসিয়াল নোটিশ এবং অফিসের তথ্যই চূড়ান্ত বলে গণ্য হবে।",
    icon: <FaShieldHalved />,
  },
];

const statusStyle: Record<ResultNotice["status"], string> = {
  Published: "bg-blue-soft text-blue border-blue-soft",
  Final: "bg-color-secondary text-brand-primary border-brand-primary-soft",
  Viva: "bg-page-secondary text-secondary border-soft",
  Written: "bg-red-soft text-red border-red-soft",
};

const candidateStatusStyle: Record<Candidate["result"], string> = {
  Selected: "bg-color-secondary text-brand-primary border-brand-primary-soft",
  Waiting: "bg-page-secondary text-secondary border-soft",
  Qualified: "bg-blue-soft text-blue border-blue-soft",
};

const statusLabel: Record<ResultNotice["status"], string> = {
  Published: "প্রকাশিত",
  Final: "চূড়ান্ত",
  Viva: "মৌখিক",
  Written: "লিখিত",
};

const candidateResultLabel: Record<Candidate["result"], string> = {
  Selected: "নির্বাচিত",
  Waiting: "অপেক্ষমাণ",
  Qualified: "উত্তীর্ণ",
};

export default function RecruitmentExamResultsPage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* হিরো */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            নিয়োগ পরীক্ষার ফলাফল
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            নিয়োগ পরীক্ষার ফলাফল
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের নিয়োগ পরীক্ষার লিখিত, মৌখিক, ব্যবহারিক এবং চূড়ান্ত
            নির্বাচনের ফলাফল এখানে প্রকাশ করা হয়। প্রার্থীদের অফিসিয়াল নোটিশ
            অনুসরণ করার জন্য অনুরোধ করা হলো।
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </section>

      {/* সারসংক্ষেপ */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-inverse">
                  <FaSchoolFlag />
                  নিয়োগ ফলাফল নোটিশ
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  নিয়োগ পরীক্ষার ফলাফল, মৌখিক পরীক্ষার সময়সূচি ও চূড়ান্ত
                  নির্বাচন নোটিশ
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  নিয়োগ প্রক্রিয়ার স্বচ্ছতা নিশ্চিত করতে লিখিত পরীক্ষা, মৌখিক,
                  ব্যবহারিক এবং চূড়ান্ত নির্বাচনের ফলাফল ধাপে ধাপে প্রকাশ করা
                  হয়। প্রার্থীদের নির্ধারিত সময়ের মধ্যে প্রয়োজনীয় নির্দেশনা
                  অনুসরণ করতে হবে।
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 bg-color-secondary p-6 sm:grid-cols-2 sm:p-8 lg:col-span-4 lg:p-10">
                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaClipboardCheck />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">০৮</h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    ফলাফল নোটিশ
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaUserGraduate />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">০৬</h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    নমুনা প্রার্থী
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* সারসংক্ষেপ কার্ড */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((item) => (
              <article
                key={item.title}
                className="group rounded-[28px] border border-soft bg-page-primary p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-secondary text-3xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-4xl font-black text-primary">
                  {item.value}
                </h3>

                <p className="mt-2 text-lg font-black text-primary">
                  {item.title}
                </p>

                <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ফলাফল নোটিশ টেবিল */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[34px] border border-soft bg-page-primary p-5 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              প্রকাশিত ফলাফল নোটিশ
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary">
              প্রকাশিত ফলাফলসমূহ
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              নিয়োগ পরীক্ষার ফলাফল নোটিশ তালিকা থেকে প্রয়োজনীয় ফলাফল নোটিশ
              ডাউনলোড বা দেখা যাবে।
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse bg-page-primary text-left">
                <thead className="bg-color-primary text-inverse">
                  <tr>
                    <th className="px-5 py-4 text-sm font-black">শিরোনাম</th>
                    <th className="px-5 py-4 text-sm font-black">
                      বিজ্ঞপ্তি আইডি
                    </th>
                    <th className="px-5 py-4 text-sm font-black">
                      পরীক্ষার ধরন
                    </th>
                    <th className="px-5 py-4 text-sm font-black">
                      প্রকাশের তারিখ
                    </th>
                    <th className="px-5 py-4 text-sm font-black">অবস্থা</th>
                    <th className="px-5 py-4 text-sm font-black">ডাউনলোড</th>
                  </tr>
                </thead>

                <tbody>
                  {resultNotices.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`border-b border-soft ${
                        index % 2 === 0 ? "bg-page-primary" : "bg-page-secondary"
                      }`}
                    >
                      <td className="px-5 py-4 text-sm font-black text-primary">
                        {item.title}
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-brand-primary">
                        {item.circularId}
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-secondary">
                        {item.examType}
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-secondary">
                        {item.publishDate}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full border px-4 py-2 text-xs font-black ${statusStyle[item.status]}`}
                        >
                          {statusLabel[item.status]}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <Link
                          href={item.downloadUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                        >
                          <FaCloudArrowDown />
                          ডাউনলোড
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-soft bg-page-secondary p-5">
            <div className="flex items-start gap-3">
              <FaCircleInfo className="mt-1 shrink-0 text-brand-primary" />

              <p className="text-sm font-semibold leading-7 text-secondary">
                নোট: ডাউনলোড লিংকগুলো এখানে placeholder হিসেবে দেওয়া হয়েছে।
                অফিসিয়াল PDF/result file যুক্ত করতে `downloadUrl` field-এ actual
                PDF path বা file URL বসাতে হবে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* নির্বাচিত প্রার্থীর তালিকা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              প্রার্থীদের তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              নির্বাচিত ও উত্তীর্ণ প্রার্থীদের তালিকা
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              নিচের তালিকায় রোল নম্বর, প্রার্থীর নাম, পদবি এবং ফলাফলের অবস্থা
              দেখানো হয়েছে।
            </p>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
            <div className="overflow-hidden rounded-[24px] border border-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[950px] border-collapse text-left">
                  <thead className="bg-color-primary text-inverse">
                    <tr>
                      <th className="px-5 py-4 text-sm font-black">রোল</th>
                      <th className="px-5 py-4 text-sm font-black">
                        প্রার্থীর নাম
                      </th>
                      <th className="px-5 py-4 text-sm font-black">পদবি</th>
                      <th className="px-5 py-4 text-sm font-black">ফলাফল</th>
                      <th className="px-5 py-4 text-sm font-black">মন্তব্য</th>
                    </tr>
                  </thead>

                  <tbody>
                    {candidates.map((candidate, index) => (
                      <tr
                        key={candidate.id}
                        className={`border-b border-soft ${
                          index % 2 === 0
                            ? "bg-page-primary"
                            : "bg-page-secondary"
                        }`}
                      >
                        <td className="px-5 py-4 text-sm font-black text-brand-primary">
                          {candidate.roll}
                        </td>

                        <td className="px-5 py-4 text-sm font-semibold text-primary">
                          {candidate.name}
                        </td>

                        <td className="px-5 py-4 text-sm font-semibold text-secondary">
                          {candidate.post}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-4 py-2 text-xs font-black ${candidateStatusStyle[candidate.result]}`}
                          >
                            {candidateResultLabel[candidate.result]}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-sm font-semibold text-secondary">
                          {candidate.remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* নির্দেশনা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              গুরুত্বপূর্ণ নির্দেশনা
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary">
              প্রার্থীদের জন্য নির্দেশনা
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              নিয়োগ পরীক্ষার ফলাফল প্রকাশের পর প্রার্থীদের জন্য প্রয়োজনীয়
              নির্দেশনা।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {instructions.map((item) => (
              <article
                key={item.title}
                className="group rounded-[26px] border border-soft bg-page-secondary p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary hover:bg-page-primary hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-primary">
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

      {/* গুরুত্বপূর্ণ নোট */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-color-secondary text-2xl text-brand-primary">
              <FaCheck />
            </div>

            <h3 className="mt-5 text-2xl font-black text-primary">
              অফিসিয়াল ফলাফল
            </h3>

            <p className="mt-4 text-sm font-semibold leading-8 text-secondary">
              ওয়েবসাইটে প্রকাশিত নিয়োগ পরীক্ষার ফলাফল বিদ্যালয়ের অফিসিয়াল
              নোটিশ অনুযায়ী আপডেট করা হয়। কোনো অসঙ্গতি পাওয়া গেলে বিদ্যালয়
              অফিসে যোগাযোগ করতে হবে।
            </p>
          </div>

          <div className="rounded-[30px] border border-red-soft bg-red-soft p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-page-primary text-2xl text-red">
              <FaTriangleExclamation />
            </div>

            <h3 className="mt-5 text-2xl font-black text-primary">
              যাচাই নোটিশ
            </h3>

            <p className="mt-4 text-sm font-semibold leading-8 text-secondary">
              প্রার্থীদের ফলাফলের অবস্থা, রোল নম্বর এবং ডকুমেন্ট যাচাইয়ের
              সময়সূচি যাচাই করতে অফিসিয়াল নোটিশ অনুসরণ করতে হবে। ভুল তথ্য
              প্রদান করলে প্রার্থিতা বাতিল হতে পারে।
            </p>
          </div>
        </div>
      </section>

      {/* বার্তা */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaRegCalendarDays className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  নিয়োগ আপডেট
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                স্বচ্ছ নিয়োগ প্রক্রিয়া ও সময়মতো ফলাফল প্রকাশ
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের নিয়োগ কার্যক্রমে যোগ্যতা, স্বচ্ছতা এবং নিরপেক্ষতা
                বজায় রাখা হয়। প্রার্থীদের সকল ফলাফল ও নির্দেশনা নির্ধারিত সময়ে
                প্রকাশ করা হয়, যাতে সবাই সহজে প্রয়োজনীয় তথ্য জানতে পারেন।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaStar />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  ন্যায্য নির্বাচন
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  যোগ্যতা, স্বচ্ছতা ও নিরপেক্ষতার মাধ্যমে নিয়োগ কার্যক্রম
                  সম্পন্ন করা হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* অফিস যোগাযোগ */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-black text-primary">
                ফলাফল যাচাই প্রয়োজন?
              </h3>

              <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                নিয়োগ পরীক্ষার ফলাফল, ডকুমেন্ট যাচাই বা যোগদানের নির্দেশনা
                সম্পর্কে জানতে বিদ্যালয় অফিসে যোগাযোগ করুন।
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
            >
              অফিসে যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}