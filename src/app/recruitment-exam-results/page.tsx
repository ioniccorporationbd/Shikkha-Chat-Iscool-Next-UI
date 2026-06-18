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
    title: "Published Results",
    value: "08",
    description: "Recruitment results published",
    icon: <FaFileLines />,
  },
  {
    title: "Written Exam",
    value: "04",
    description: "Written exam result notices",
    icon: <FaPenToSquare />,
  },
  {
    title: "Viva Result",
    value: "03",
    description: "Viva and practical exam results",
    icon: <FaPeopleGroup />,
  },
  {
    title: "Final Selection",
    value: "01",
    description: "Final selected candidate list",
    icon: <FaAward />,
  },
];

const resultNotices: ResultNotice[] = [
  {
    id: 1,
    title: "Assistant Teacher Recruitment Final Result 2026",
    circularId: "REC-2026-01",
    examType: "Final Selection",
    publishDate: "15 March 2026",
    status: "Final",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Assistant Teacher Viva Result 2026",
    circularId: "REC-2026-01",
    examType: "Viva Result",
    publishDate: "10 March 2026",
    status: "Viva",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Office Assistant Written Exam Result",
    circularId: "REC-2026-02",
    examType: "Written Exam",
    publishDate: "05 March 2026",
    status: "Written",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Computer Operator Recruitment Result",
    circularId: "REC-2026-03",
    examType: "Practical & Viva",
    publishDate: "28 February 2026",
    status: "Published",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Account Assistant Written Exam Result",
    circularId: "REC-2026-04",
    examType: "Written Exam",
    publishDate: "20 February 2026",
    status: "Written",
    downloadUrl: "#",
  },
];

const candidates: Candidate[] = [
  {
    id: 1,
    roll: "20260101",
    name: "Md. Hasan Mahmud",
    post: "Assistant Teacher - Mathematics",
    result: "Selected",
    remarks: "Final selected",
  },
  {
    id: 2,
    roll: "20260108",
    name: "Nusrat Jahan",
    post: "Assistant Teacher - Bangla",
    result: "Selected",
    remarks: "Final selected",
  },
  {
    id: 3,
    roll: "20260115",
    name: "Farhana Akter",
    post: "Assistant Teacher - English",
    result: "Qualified",
    remarks: "Qualified for viva",
  },
  {
    id: 4,
    roll: "20260122",
    name: "Md. Arif Hossain",
    post: "Computer Operator",
    result: "Selected",
    remarks: "Practical passed",
  },
  {
    id: 5,
    roll: "20260129",
    name: "Sharmin Sultana",
    post: "Office Assistant",
    result: "Waiting",
    remarks: "Waiting list",
  },
  {
    id: 6,
    roll: "20260136",
    name: "Rakibul Islam",
    post: "Account Assistant",
    result: "Qualified",
    remarks: "Written passed",
  },
];

const instructions: Instruction[] = [
  {
    title: "Document Verification",
    description:
      "নির্বাচিত প্রার্থীদের নির্ধারিত তারিখে মূল সনদ, জাতীয় পরিচয়পত্র এবং প্রয়োজনীয় কাগজপত্রসহ উপস্থিত হতে হবে।",
    icon: <FaIdCard />,
  },
  {
    title: "Viva Schedule",
    description:
      "লিখিত পরীক্ষায় উত্তীর্ণ প্রার্থীদের viva schedule notice board এবং website-এ প্রকাশ করা হবে।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Joining Instruction",
    description:
      "চূড়ান্তভাবে নির্বাচিত প্রার্থীদের joining letter সংগ্রহের জন্য বিদ্যালয় অফিসে যোগাযোগ করতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Official Verification",
    description:
      "ফলাফল যাচাইয়ের ক্ষেত্রে বিদ্যালয়ের official notice এবং অফিসের তথ্যই চূড়ান্ত বলে গণ্য হবে।",
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

export default function RecruitmentExamResultsPage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            Recruitment Exam Results
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            নিয়োগ পরীক্ষার ফলাফল
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের নিয়োগ পরীক্ষার লিখিত, viva, practical এবং final selection
            ফলাফল এখানে প্রকাশ করা হয়। প্রার্থীদের official notice অনুসরণ করার
            জন্য অনুরোধ করা হলো।
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-inverse">
                  <FaSchoolFlag />
                  Recruitment Result Notice
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  নিয়োগ পরীক্ষার ফলাফল, viva schedule ও final selection notice
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  নিয়োগ প্রক্রিয়ার স্বচ্ছতা নিশ্চিত করতে লিখিত পরীক্ষা, viva,
                  practical এবং final selection-এর ফলাফল ধাপে ধাপে প্রকাশ করা
                  হয়। প্রার্থীদের নির্ধারিত সময়ের মধ্যে প্রয়োজনীয় নির্দেশনা
                  অনুসরণ করতে হবে।
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 bg-color-secondary p-6 sm:grid-cols-2 sm:p-8 lg:col-span-4 lg:p-10">
                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaClipboardCheck />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">08</h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    Result Notices
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaUserGraduate />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">06</h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    Sample Candidates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
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

      {/* Result Notice Table */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[34px] border border-soft bg-page-primary p-5 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              Published Result Notices
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary">
              প্রকাশিত ফলাফলসমূহ
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              নিয়োগ পরীক্ষার ফলাফল notice list থেকে প্রয়োজনীয় result notice
              download বা view করা যাবে।
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse bg-page-primary text-left">
                <thead className="bg-color-primary text-inverse">
                  <tr>
                    <th className="px-5 py-4 text-sm font-black">Title</th>
                    <th className="px-5 py-4 text-sm font-black">
                      Circular ID
                    </th>
                    <th className="px-5 py-4 text-sm font-black">
                      Exam Type
                    </th>
                    <th className="px-5 py-4 text-sm font-black">
                      Publish Date
                    </th>
                    <th className="px-5 py-4 text-sm font-black">Status</th>
                    <th className="px-5 py-4 text-sm font-black">Download</th>
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
                          {item.status}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <Link
                          href={item.downloadUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                        >
                          <FaCloudArrowDown />
                          Download
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
                Note: Download links এখানে placeholder হিসেবে দেওয়া হয়েছে।
                Official PDF/result file যুক্ত করতে `downloadUrl` field-এ actual
                PDF path বা file URL বসাতে হবে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Candidate List */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              Candidate List
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              নির্বাচিত ও উত্তীর্ণ প্রার্থীদের তালিকা
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              নিচের তালিকায় roll number, candidate name, post name এবং result
              status দেখানো হয়েছে।
            </p>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
            <div className="overflow-hidden rounded-[24px] border border-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[950px] border-collapse text-left">
                  <thead className="bg-color-primary text-inverse">
                    <tr>
                      <th className="px-5 py-4 text-sm font-black">Roll</th>
                      <th className="px-5 py-4 text-sm font-black">
                        Candidate Name
                      </th>
                      <th className="px-5 py-4 text-sm font-black">Post</th>
                      <th className="px-5 py-4 text-sm font-black">Result</th>
                      <th className="px-5 py-4 text-sm font-black">Remarks</th>
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
                            {candidate.result}
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

      {/* Instructions */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              Important Instructions
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

      {/* Important Notes */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-color-secondary text-2xl text-brand-primary">
              <FaCheck />
            </div>

            <h3 className="mt-5 text-2xl font-black text-primary">
              Official Result
            </h3>

            <p className="mt-4 text-sm font-semibold leading-8 text-secondary">
              ওয়েবসাইটে প্রকাশিত নিয়োগ পরীক্ষার ফলাফল বিদ্যালয়ের official notice
              অনুযায়ী আপডেট করা হয়। কোনো অসঙ্গতি পাওয়া গেলে বিদ্যালয় অফিসে
              যোগাযোগ করতে হবে।
            </p>
          </div>

          <div className="rounded-[30px] border border-red-soft bg-red-soft p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-page-primary text-2xl text-red">
              <FaTriangleExclamation />
            </div>

            <h3 className="mt-5 text-2xl font-black text-primary">
              Verification Notice
            </h3>

            <p className="mt-4 text-sm font-semibold leading-8 text-secondary">
              প্রার্থীদের result status, roll number এবং document verification
              schedule যাচাই করতে official notice অনুসরণ করতে হবে। ভুল তথ্য
              প্রদান করলে candidature বাতিল হতে পারে।
            </p>
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaRegCalendarDays className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  Recruitment Update
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
                  Fair Selection
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

      {/* Office Contact */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-black text-primary">
                Need result verification?
              </h3>

              <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                নিয়োগ পরীক্ষার ফলাফল, document verification বা joining
                instruction সম্পর্কে জানতে বিদ্যালয় অফিসে যোগাযোগ করুন।
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-color-primary px-7 py-3 text-sm font-black text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}