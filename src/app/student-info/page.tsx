
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaBookOpen,
  FaCalendarCheck,
  FaChartSimple,
  FaCheck,
  FaClipboardCheck,
  FaGraduationCap,
  FaIdCard,
  FaPeopleGroup,
  FaRegCalendarDays,
  FaSchoolFlag,
  FaShieldHalved,
  FaStar,
  FaTriangleExclamation,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa6";

type StudentStat = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type ClassInfo = {
  className: string;
  sections: string;
  boys: number;
  girls: number;
  total: number;
  classTeacher: string;
};

type StudentRecord = {
  id: string;
  name: string;
  banglaName: string;
  className: string;
  section: string;
  roll: string;
  status: "Active" | "Merit" | "Regular";
};

type Guideline = {
  title: string;
  description: string;
  icon: ReactNode;
};

const overviewStats: StudentStat[] = [
  {
    title: "Total Students",
    value: "1,250+",
    description: "Currently enrolled students",
    icon: <FaUsers />,
  },
  {
    title: "Academic Classes",
    value: "10",
    description: "From primary to secondary level",
    icon: <FaBookOpen />,
  },
  {
    title: "Sections",
    value: "24",
    description: "Class-wise organized sections",
    icon: <FaPeopleGroup />,
  },
  {
    title: "Activities",
    value: "35+",
    description: "Academic and co-curricular activities",
    icon: <FaAward />,
  },
];

const classWiseInfo: ClassInfo[] = [
  {
    className: "Class One",
    sections: "A, B",
    boys: 42,
    girls: 38,
    total: 80,
    classTeacher: "Nusrat Jahan",
  },
  {
    className: "Class Two",
    sections: "A, B",
    boys: 45,
    girls: 40,
    total: 85,
    classTeacher: "Farhana Akter",
  },
  {
    className: "Class Three",
    sections: "A, B, C",
    boys: 58,
    girls: 52,
    total: 110,
    classTeacher: "Md. Arif Hossain",
  },
  {
    className: "Class Four",
    sections: "A, B, C",
    boys: 60,
    girls: 55,
    total: 115,
    classTeacher: "Sharmin Sultana",
  },
  {
    className: "Class Five",
    sections: "A, B, C",
    boys: 65,
    girls: 60,
    total: 125,
    classTeacher: "Sabbir Rahman",
  },
  {
    className: "Class Six",
    sections: "A, B, C",
    boys: 72,
    girls: 68,
    total: 140,
    classTeacher: "Mst. Jannatul Ferdous",
  },
  {
    className: "Class Seven",
    sections: "A, B, C",
    boys: 75,
    girls: 70,
    total: 145,
    classTeacher: "Md. Rakibul Islam",
  },
  {
    className: "Class Eight",
    sections: "A, B, C",
    boys: 78,
    girls: 72,
    total: 150,
    classTeacher: "Md. Hasan Mahmud",
  },
];

const studentRecords: StudentRecord[] = [
  {
    id: "STD-2026-001",
    name: "Arafat Rahman",
    banglaName: "আরাফাত রহমান",
    className: "Class Six",
    section: "A",
    roll: "01",
    status: "Merit",
  },
  {
    id: "STD-2026-002",
    name: "Nusrat Jahan Mim",
    banglaName: "নুসরাত জাহান মিম",
    className: "Class Six",
    section: "A",
    roll: "02",
    status: "Active",
  },
  {
    id: "STD-2026-003",
    name: "Tanvir Ahmed",
    banglaName: "তানভীর আহমেদ",
    className: "Class Seven",
    section: "B",
    roll: "04",
    status: "Regular",
  },
  {
    id: "STD-2026-004",
    name: "Sumaiya Akter",
    banglaName: "সুমাইয়া আক্তার",
    className: "Class Eight",
    section: "A",
    roll: "03",
    status: "Merit",
  },
  {
    id: "STD-2026-005",
    name: "Rakibul Islam",
    banglaName: "রাকিবুল ইসলাম",
    className: "Class Five",
    section: "C",
    roll: "07",
    status: "Active",
  },
  {
    id: "STD-2026-006",
    name: "Jannatul Ferdous",
    banglaName: "জান্নাতুল ফেরদৌস",
    className: "Class Four",
    section: "B",
    roll: "05",
    status: "Regular",
  },
];

const guidelines: Guideline[] = [
  {
    title: "Regular Attendance",
    description:
      "প্রতিটি শিক্ষার্থীর নিয়মিত উপস্থিতি নিশ্চিত করতে অভিভাবকদের সহযোগিতা প্রয়োজন।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Discipline",
    description:
      "বিদ্যালয়ের নিয়ম-শৃঙ্খলা মেনে চলা প্রতিটি শিক্ষার্থীর জন্য বাধ্যতামূলক।",
    icon: <FaShieldHalved />,
  },
  {
    title: "Uniform",
    description:
      "নির্ধারিত পোশাক ও পরিচ্ছন্নতা শিক্ষার্থীদের জন্য অত্যন্ত গুরুত্বপূর্ণ।",
    icon: <FaIdCard />,
  },
  {
    title: "Examination",
    description:
      "পরীক্ষা, class test এবং মূল্যায়ন কার্যক্রমে নিয়মিত অংশগ্রহণ করতে হবে।",
    icon: <FaClipboardCheck />,
  },
];

const statusStyle: Record<StudentRecord["status"], string> = {
  Active: "bg-blue-soft text-blue border-blue-soft",
  Merit: "bg-color-secondary text-brand-primary border-brand-primary-soft",
  Regular: "bg-page-secondary text-secondary border-soft",
};

export default function StudentInfoPage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            Student Info
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            শিক্ষার্থীদের তথ্য
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থীদের একাডেমিক তথ্য, শ্রেণিভিত্তিক সংখ্যা, উপস্থিতি,
            শৃঙ্খলা, মূল্যায়ন এবং বিদ্যালয় সম্পর্কিত গুরুত্বপূর্ণ নির্দেশনা
            এখানে উপস্থাপন করা হয়েছে।
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
                  Student Information System
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  শিক্ষার্থীদের তথ্য, অগ্রগতি ও একাডেমিক কার্যক্রম
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  বিদ্যালয়ের শিক্ষার্থীদের শ্রেণি, শাখা, রোল, উপস্থিতি, ফলাফল
                  এবং সামগ্রিক উন্নয়ন পর্যবেক্ষণের জন্য তথ্যগুলো সুশৃঙ্খলভাবে
                  উপস্থাপন করা হয়েছে। এটি অভিভাবক, শিক্ষক এবং প্রশাসনের জন্য
                  সহায়ক।
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 bg-color-secondary p-6 sm:grid-cols-2 sm:p-8 lg:col-span-4 lg:p-10">
                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaUserGraduate />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    1,250+
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    Enrolled Students
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaGraduationCap />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">24</h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    Active Sections
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {overviewStats.map((item) => (
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

      {/* Class Wise Statistics */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[34px] border border-soft bg-page-primary p-5 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              Class Wise Statistics
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary">
              শ্রেণিভিত্তিক শিক্ষার্থী সংখ্যা
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              প্রতিটি শ্রেণির section, ছাত্র-ছাত্রী সংখ্যা এবং class teacher
              তথ্য এখানে দেখানো হয়েছে।
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse bg-page-primary text-left">
                <thead className="bg-color-primary text-inverse">
                  <tr>
                    <th className="px-5 py-4 text-sm font-black">Class</th>
                    <th className="px-5 py-4 text-sm font-black">Sections</th>
                    <th className="px-5 py-4 text-sm font-black">Boys</th>
                    <th className="px-5 py-4 text-sm font-black">Girls</th>
                    <th className="px-5 py-4 text-sm font-black">Total</th>
                    <th className="px-5 py-4 text-sm font-black">
                      Class Teacher
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {classWiseInfo.map((item, index) => (
                    <tr
                      key={item.className}
                      className={`border-b border-soft ${
                        index % 2 === 0 ? "bg-page-primary" : "bg-page-secondary"
                      }`}
                    >
                      <td className="px-5 py-4 text-sm font-black text-primary">
                        {item.className}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-secondary">
                        {item.sections}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-secondary">
                        {item.boys}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-secondary">
                        {item.girls}
                      </td>
                      <td className="px-5 py-4 text-sm font-black text-brand-primary">
                        {item.total}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-secondary">
                        {item.classTeacher}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-soft bg-page-secondary p-5">
            <div className="flex items-start gap-3">
              <FaChartSimple className="mt-1 shrink-0 text-brand-primary" />

              <p className="text-sm font-semibold leading-7 text-secondary">
                Note: শ্রেণিভিত্তিক শিক্ষার্থী সংখ্যা নমুনা হিসেবে দেখানো হয়েছে।
                প্রকৃত official record বিদ্যালয় অফিস থেকে সংগ্রহ করতে হবে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Records */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              Student Records
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              শিক্ষার্থীদের নমুনা তালিকা
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              শিক্ষার্থীদের ID, নাম, শ্রেণি, section, roll এবং status সহজভাবে
              দেখানোর জন্য এই তালিকা তৈরি করা হয়েছে।
            </p>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
            <div className="overflow-hidden rounded-[24px] border border-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[950px] border-collapse text-left">
                  <thead className="bg-color-primary text-inverse">
                    <tr>
                      <th className="px-5 py-4 text-sm font-black">
                        Student ID
                      </th>
                      <th className="px-5 py-4 text-sm font-black">Name</th>
                      <th className="px-5 py-4 text-sm font-black">
                        Bangla Name
                      </th>
                      <th className="px-5 py-4 text-sm font-black">Class</th>
                      <th className="px-5 py-4 text-sm font-black">Section</th>
                      <th className="px-5 py-4 text-sm font-black">Roll</th>
                      <th className="px-5 py-4 text-sm font-black">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {studentRecords.map((student, index) => (
                      <tr
                        key={student.id}
                        className={`border-b border-soft ${
                          index % 2 === 0
                            ? "bg-page-primary"
                            : "bg-page-secondary"
                        }`}
                      >
                        <td className="px-5 py-4 text-sm font-black text-brand-primary">
                          {student.id}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-primary">
                          {student.name}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-primary">
                          {student.banglaName}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-secondary">
                          {student.className}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-secondary">
                          {student.section}
                        </td>
                        <td className="px-5 py-4 text-sm font-black text-primary">
                          {student.roll}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-4 py-2 text-xs font-black ${statusStyle[student.status]}`}
                          >
                            {student.status}
                          </span>
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

      {/* Guidelines */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              Student Guidelines
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary">
              শিক্ষার্থীদের জন্য নির্দেশনা
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              বিদ্যালয়ের নিয়ম-শৃঙ্খলা, উপস্থিতি, পরীক্ষা এবং অভিভাবক যোগাযোগের
              ক্ষেত্রে শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ নির্দেশনা।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {guidelines.map((item) => (
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
              Official Record
            </h3>

            <p className="mt-4 text-sm font-semibold leading-8 text-secondary">
              শিক্ষার্থীদের official record, transcript, transfer certificate,
              attendance report এবং guardian information বিদ্যালয়ের office
              record অনুযায়ী সংরক্ষণ করা হয়।
            </p>
          </div>

          <div className="rounded-[30px] border border-red-soft bg-red-soft p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-page-primary text-2xl text-red">
              <FaTriangleExclamation />
            </div>

            <h3 className="mt-5 text-2xl font-black text-primary">
              Data Privacy
            </h3>

            <p className="mt-4 text-sm font-semibold leading-8 text-secondary">
              শিক্ষার্থীদের ব্যক্তিগত তথ্য গোপনীয়। অভিভাবক, শিক্ষক বা অনুমোদিত
              প্রশাসনিক কর্মকর্তা ছাড়া কোনো তথ্য প্রকাশ করা যাবে না।
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
                  Student Development
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                শিক্ষার্থীর অগ্রগতি, শৃঙ্খলা ও সুন্দর ভবিষ্যৎ
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                শিক্ষার্থীদের একাডেমিক সাফল্য, নিয়মিত উপস্থিতি, নৈতিক মূল্যবোধ
                এবং সহশিক্ষা কার্যক্রমের মাধ্যমে একটি সুন্দর ভবিষ্যৎ গড়ে তোলা
                আমাদের লক্ষ্য। বিদ্যালয়, শিক্ষক ও অভিভাবকদের সম্মিলিত
                সহযোগিতায় প্রতিটি শিক্ষার্থী এগিয়ে যাবে।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaStar />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  Student Success
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  জ্ঞান, শৃঙ্খলা ও আত্মবিশ্বাসের মাধ্যমে শিক্ষার্থীদের উন্নত
                  ভবিষ্যৎ গড়ে তোলা।
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
                Need official student information?
              </h3>

              <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                শিক্ষার্থীদের official record বা বিস্তারিত তথ্যের জন্য বিদ্যালয়
                অফিসে যোগাযোগ করুন।
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

