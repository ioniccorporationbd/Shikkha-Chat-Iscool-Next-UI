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
  status: "সক্রিয়" | "মেধাবী" | "নিয়মিত";
};

type Guideline = {
  title: string;
  description: string;
  icon: ReactNode;
};

const overviewStats: StudentStat[] = [
  {
    title: "মোট শিক্ষার্থী",
    value: "১,২৫০+",
    description: "বর্তমানে ভর্তি থাকা শিক্ষার্থী",
    icon: <FaUsers />,
  },
  {
    title: "একাডেমিক শ্রেণি",
    value: "১০",
    description: "প্রাথমিক থেকে মাধ্যমিক স্তর পর্যন্ত",
    icon: <FaBookOpen />,
  },
  {
    title: "শাখা",
    value: "২৪",
    description: "শ্রেণিভিত্তিক সাজানো শাখা",
    icon: <FaPeopleGroup />,
  },
  {
    title: "কার্যক্রম",
    value: "৩৫+",
    description: "একাডেমিক ও সহশিক্ষা কার্যক্রম",
    icon: <FaAward />,
  },
];

const classWiseInfo: ClassInfo[] = [
  {
    className: "প্রথম শ্রেণি",
    sections: "ক, খ",
    boys: 42,
    girls: 38,
    total: 80,
    classTeacher: "নুসরাত জাহান",
  },
  {
    className: "দ্বিতীয় শ্রেণি",
    sections: "ক, খ",
    boys: 45,
    girls: 40,
    total: 85,
    classTeacher: "ফারহানা আক্তার",
  },
  {
    className: "তৃতীয় শ্রেণি",
    sections: "ক, খ, গ",
    boys: 58,
    girls: 52,
    total: 110,
    classTeacher: "মোঃ আরিফ হোসেন",
  },
  {
    className: "চতুর্থ শ্রেণি",
    sections: "ক, খ, গ",
    boys: 60,
    girls: 55,
    total: 115,
    classTeacher: "শারমিন সুলতানা",
  },
  {
    className: "পঞ্চম শ্রেণি",
    sections: "ক, খ, গ",
    boys: 65,
    girls: 60,
    total: 125,
    classTeacher: "সাব্বির রহমান",
  },
  {
    className: "ষষ্ঠ শ্রেণি",
    sections: "ক, খ, গ",
    boys: 72,
    girls: 68,
    total: 140,
    classTeacher: "মোছাঃ জান্নাতুল ফেরদৌস",
  },
  {
    className: "সপ্তম শ্রেণি",
    sections: "ক, খ, গ",
    boys: 75,
    girls: 70,
    total: 145,
    classTeacher: "মোঃ রাকিবুল ইসলাম",
  },
  {
    className: "অষ্টম শ্রেণি",
    sections: "ক, খ, গ",
    boys: 78,
    girls: 72,
    total: 150,
    classTeacher: "মোঃ হাসান মাহমুদ",
  },
];

const studentRecords: StudentRecord[] = [
  {
    id: "শিক্ষার্থী-২০২৬-০০১",
    name: "আরাফাত রহমান",
    banglaName: "আরাফাত রহমান",
    className: "ষষ্ঠ শ্রেণি",
    section: "ক",
    roll: "০১",
    status: "মেধাবী",
  },
  {
    id: "শিক্ষার্থী-২০২৬-০০২",
    name: "নুসরাত জাহান মিম",
    banglaName: "নুসরাত জাহান মিম",
    className: "ষষ্ঠ শ্রেণি",
    section: "ক",
    roll: "০২",
    status: "সক্রিয়",
  },
  {
    id: "শিক্ষার্থী-২০২৬-০০৩",
    name: "তানভীর আহমেদ",
    banglaName: "তানভীর আহমেদ",
    className: "সপ্তম শ্রেণি",
    section: "খ",
    roll: "০৪",
    status: "নিয়মিত",
  },
  {
    id: "শিক্ষার্থী-২০২৬-০০৪",
    name: "সুমাইয়া আক্তার",
    banglaName: "সুমাইয়া আক্তার",
    className: "অষ্টম শ্রেণি",
    section: "ক",
    roll: "০৩",
    status: "মেধাবী",
  },
  {
    id: "শিক্ষার্থী-২০২৬-০০৫",
    name: "রাকিবুল ইসলাম",
    banglaName: "রাকিবুল ইসলাম",
    className: "পঞ্চম শ্রেণি",
    section: "গ",
    roll: "০৭",
    status: "সক্রিয়",
  },
  {
    id: "শিক্ষার্থী-২০২৬-০০৬",
    name: "জান্নাতুল ফেরদৌস",
    banglaName: "জান্নাতুল ফেরদৌস",
    className: "চতুর্থ শ্রেণি",
    section: "খ",
    roll: "০৫",
    status: "নিয়মিত",
  },
];

const guidelines: Guideline[] = [
  {
    title: "নিয়মিত উপস্থিতি",
    description:
      "প্রতিটি শিক্ষার্থীর নিয়মিত উপস্থিতি নিশ্চিত করতে অভিভাবকদের সহযোগিতা প্রয়োজন।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "শৃঙ্খলা",
    description:
      "বিদ্যালয়ের নিয়ম-শৃঙ্খলা মেনে চলা প্রতিটি শিক্ষার্থীর জন্য বাধ্যতামূলক।",
    icon: <FaShieldHalved />,
  },
  {
    title: "নির্ধারিত পোশাক",
    description:
      "নির্ধারিত পোশাক ও পরিচ্ছন্নতা শিক্ষার্থীদের জন্য অত্যন্ত গুরুত্বপূর্ণ।",
    icon: <FaIdCard />,
  },
  {
    title: "পরীক্ষা",
    description:
      "পরীক্ষা, শ্রেণি পরীক্ষা এবং মূল্যায়ন কার্যক্রমে নিয়মিত অংশগ্রহণ করতে হবে।",
    icon: <FaClipboardCheck />,
  },
];

const statusStyle: Record<StudentRecord["status"], string> = {
  সক্রিয়: "bg-blue-soft text-blue border-blue-soft",
  মেধাবী: "bg-color-secondary text-brand-primary border-brand-primary-soft",
  নিয়মিত: "bg-page-secondary text-secondary border-soft",
};

export default function StudentInfoPage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* হিরো */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            শিক্ষার্থীদের তথ্য
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
                  শিক্ষার্থী তথ্য ব্যবস্থাপনা
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
                    ১,২৫০+
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    ভর্তি শিক্ষার্থী
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaGraduationCap />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">২৪</h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    সক্রিয় শাখা
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* পরিসংখ্যান */}
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

      {/* শ্রেণিভিত্তিক পরিসংখ্যান */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[34px] border border-soft bg-page-primary p-5 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              শ্রেণিভিত্তিক পরিসংখ্যান
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary">
              শ্রেণিভিত্তিক শিক্ষার্থী সংখ্যা
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              প্রতিটি শ্রেণির শাখা, ছাত্র-ছাত্রী সংখ্যা এবং শ্রেণি শিক্ষকের
              তথ্য এখানে দেখানো হয়েছে।
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse bg-page-primary text-left">
                <thead className="bg-color-primary text-inverse">
                  <tr>
                    <th className="px-5 py-4 text-sm font-black">শ্রেণি</th>
                    <th className="px-5 py-4 text-sm font-black">শাখা</th>
                    <th className="px-5 py-4 text-sm font-black">ছাত্র</th>
                    <th className="px-5 py-4 text-sm font-black">ছাত্রী</th>
                    <th className="px-5 py-4 text-sm font-black">মোট</th>
                    <th className="px-5 py-4 text-sm font-black">
                      শ্রেণি শিক্ষক
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
                নোট: শ্রেণিভিত্তিক শিক্ষার্থী সংখ্যা নমুনা হিসেবে দেখানো হয়েছে।
                প্রকৃত অফিসিয়াল তথ্য বিদ্যালয় অফিস থেকে সংগ্রহ করতে হবে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* শিক্ষার্থীদের রেকর্ড */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              শিক্ষার্থীদের রেকর্ড
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              শিক্ষার্থীদের নমুনা তালিকা
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              শিক্ষার্থীদের আইডি, নাম, শ্রেণি, শাখা, রোল এবং অবস্থা সহজভাবে
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
                        শিক্ষার্থী আইডি
                      </th>
                      <th className="px-5 py-4 text-sm font-black">নাম</th>
                      <th className="px-5 py-4 text-sm font-black">
                        বাংলা নাম
                      </th>
                      <th className="px-5 py-4 text-sm font-black">শ্রেণি</th>
                      <th className="px-5 py-4 text-sm font-black">শাখা</th>
                      <th className="px-5 py-4 text-sm font-black">রোল</th>
                      <th className="px-5 py-4 text-sm font-black">অবস্থা</th>
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

      {/* নির্দেশনা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              শিক্ষার্থীদের নির্দেশনা
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

      {/* গুরুত্বপূর্ণ নোট */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-color-secondary text-2xl text-brand-primary">
              <FaCheck />
            </div>

            <h3 className="mt-5 text-2xl font-black text-primary">
              অফিসিয়াল রেকর্ড
            </h3>

            <p className="mt-4 text-sm font-semibold leading-8 text-secondary">
              শিক্ষার্থীদের অফিসিয়াল রেকর্ড, ফলাফলের বিবরণী, ছাড়পত্র,
              উপস্থিতি প্রতিবেদন এবং অভিভাবক তথ্য বিদ্যালয়ের অফিস রেকর্ড
              অনুযায়ী সংরক্ষণ করা হয়।
            </p>
          </div>

          <div className="rounded-[30px] border border-red-soft bg-red-soft p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-page-primary text-2xl text-red">
              <FaTriangleExclamation />
            </div>

            <h3 className="mt-5 text-2xl font-black text-primary">
              তথ্যের গোপনীয়তা
            </h3>

            <p className="mt-4 text-sm font-semibold leading-8 text-secondary">
              শিক্ষার্থীদের ব্যক্তিগত তথ্য গোপনীয়। অভিভাবক, শিক্ষক বা অনুমোদিত
              প্রশাসনিক কর্মকর্তা ছাড়া কোনো তথ্য প্রকাশ করা যাবে না।
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
                  শিক্ষার্থীদের উন্নয়ন
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
                  শিক্ষার্থীদের সাফল্য
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

      {/* অফিস যোগাযোগ */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-black text-primary">
                শিক্ষার্থীদের অফিসিয়াল তথ্য প্রয়োজন?
              </h3>

              <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                শিক্ষার্থীদের অফিসিয়াল রেকর্ড বা বিস্তারিত তথ্যের জন্য বিদ্যালয়
                অফিসে যোগাযোগ করুন।
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