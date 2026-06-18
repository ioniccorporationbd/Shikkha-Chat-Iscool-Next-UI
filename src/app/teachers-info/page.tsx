import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaAward,
  FaBookOpen,
  FaEnvelope,
  FaGraduationCap,
  FaIdCard,
  FaPeopleGroup,
  FaPhone,
  FaSchoolFlag,
  FaStar,
  FaUserGraduate,
  FaUsersGear,
} from "react-icons/fa6";

type Teacher = {
  id: number;
  name: string;
  banglaName: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  phone: string;
  email: string;
  image: string;
};

type StatCard = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

const teachers: Teacher[] = [
  {
    id: 1,
    name: "মোঃ হাসান মাহমুদ",
    banglaName: "মোঃ হাসান মাহমুদ",
    designation: "প্রধান শিক্ষক",
    department: "প্রশাসন",
    qualification: "এম.এ, বি.এড",
    experience: "১৮ বছর",
    phone: "০১৮৬৭২৬৮৪২২",
    email: "principal@shikkhachat.edu.bd",
    image: "/assets/3.jpg",
  },
  {
    id: 2,
    name: "নুসরাত জাহান",
    banglaName: "নুসরাত জাহান",
    designation: "সিনিয়র শিক্ষক",
    department: "বাংলা",
    qualification: "বাংলায় এম.এ, বি.এড",
    experience: "১২ বছর",
    phone: "০১৮৬৬৭৮৫১৮৩",
    email: "bangla@shikkhachat.edu.bd",
    image: "/assets/4.jpg",
  },
  {
    id: 3,
    name: "মোঃ আরিফ হোসেন",
    banglaName: "মোঃ আরিফ হোসেন",
    designation: "সহকারী শিক্ষক",
    department: "গণিত",
    qualification: "গণিতে এম.এসসি",
    experience: "১০ বছর",
    phone: "০১৮৬৬৭৮৫১৮৪",
    email: "math@shikkhachat.edu.bd",
    image: "/assets/5.jpg",
  },
  {
    id: 4,
    name: "ফারহানা আক্তার",
    banglaName: "ফারহানা আক্তার",
    designation: "সহকারী শিক্ষক",
    department: "ইংরেজি",
    qualification: "ইংরেজিতে এম.এ, বি.এড",
    experience: "৯ বছর",
    phone: "০১৮৬৭২৬৮৪২৩",
    email: "english@shikkhachat.edu.bd",
    image: "/assets/3.jpg",
  },
  {
    id: 5,
    name: "সাব্বির রহমান",
    banglaName: "সাব্বির রহমান",
    designation: "সহকারী শিক্ষক",
    department: "বিজ্ঞান",
    qualification: "পদার্থবিজ্ঞানে এম.এসসি",
    experience: "৮ বছর",
    phone: "০১৮৬৭২৬৮৪২৪",
    email: "science@shikkhachat.edu.bd",
    image: "/assets/4.jpg",
  },
  {
    id: 6,
    name: "মোছাঃ জান্নাতুল ফেরদৌস",
    banglaName: "মোছাঃ জান্নাতুল ফেরদৌস",
    designation: "সহকারী শিক্ষক",
    department: "আইসিটি",
    qualification: "সিএসই-তে বি.এসসি",
    experience: "৭ বছর",
    phone: "০১৮৬৭২৬৮৪২৫",
    email: "ict@shikkhachat.edu.bd",
    image: "/assets/5.jpg",
  },
  {
    id: 7,
    name: "মোঃ রাকিবুল ইসলাম",
    banglaName: "মোঃ রাকিবুল ইসলাম",
    designation: "সহকারী শিক্ষক",
    department: "ইসলাম শিক্ষা",
    qualification: "ইসলাম শিক্ষায় এম.এ",
    experience: "১১ বছর",
    phone: "০১৮৬৭২৬৮৪২৬",
    email: "islamic@shikkhachat.edu.bd",
    image: "/assets/3.jpg",
  },
  {
    id: 8,
    name: "শারমিন সুলতানা",
    banglaName: "শারমিন সুলতানা",
    designation: "সহকারী শিক্ষক",
    department: "সমাজবিজ্ঞান",
    qualification: "এম.এস.এস, বি.এড",
    experience: "৬ বছর",
    phone: "০১৮৬৭২৬৮৪২৭",
    email: "social@shikkhachat.edu.bd",
    image: "/assets/4.jpg",
  },
];

const stats: StatCard[] = [
  {
    title: "মোট শিক্ষক",
    value: "৩৫+",
    description: "অভিজ্ঞ একাডেমিক শিক্ষক",
    icon: <FaPeopleGroup />,
  },
  {
    title: "বিভাগসমূহ",
    value: "০৮",
    description: "বিষয়ভিত্তিক বিভাগ",
    icon: <FaBookOpen />,
  },
  {
    title: "সিনিয়র শিক্ষক",
    value: "১২+",
    description: "অভিজ্ঞ পরামর্শদাতা",
    icon: <FaAward />,
  },
  {
    title: "অভিজ্ঞতা",
    value: "১৫+",
    description: "গড় উৎকর্ষের বছর",
    icon: <FaStar />,
  },
];

const departments = [
  "প্রশাসন",
  "বাংলা",
  "ইংরেজি",
  "গণিত",
  "বিজ্ঞান",
  "আইসিটি",
  "ইসলাম শিক্ষা",
  "সমাজবিজ্ঞান",
];

export default function TeachersInfoPage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* হিরো */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            শিক্ষকবৃন্দের তথ্য
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            শিক্ষকবৃন্দের তথ্য
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            আমাদের বিদ্যালয়ের শিক্ষকবৃন্দ শিক্ষার্থীদের নৈতিকতা, জ্ঞান,
            সৃজনশীলতা এবং ভবিষ্যৎ নেতৃত্ব তৈরিতে গুরুত্বপূর্ণ ভূমিকা পালন
            করেন।
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
                  একাডেমিক উৎকর্ষ
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  অভিজ্ঞ শিক্ষক, উন্নত শিক্ষা ও যত্নশীল দিকনির্দেশনা
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  আমাদের শিক্ষকবৃন্দ নিয়মিত পাঠদান, মূল্যায়ন, সহশিক্ষা
                  কার্যক্রম এবং শিক্ষার্থীদের ব্যক্তিগত উন্নয়নে নিবেদিত। প্রতিটি
                  শিক্ষক শিক্ষার্থীদের জন্য একটি অনুপ্রেরণামূলক শেখার পরিবেশ
                  তৈরি করেন।
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 bg-color-secondary p-6 sm:grid-cols-2 sm:p-8 lg:col-span-4 lg:p-10">
                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaUserGraduate />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    ৩৫+
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    নিবেদিত শিক্ষক
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaGraduationCap />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    ০৮
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    বিভাগসমূহ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* পরিসংখ্যান */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
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

      {/* বিভাগের তালিকা */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-7 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              বিভাগসমূহ
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary">
              বিভাগসমূহ
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              বিষয়ভিত্তিক বিভাগ অনুযায়ী শিক্ষকবৃন্দ শিক্ষার্থীদের পাঠদান ও
              একাডেমিক দিকনির্দেশনা প্রদান করেন।
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {departments.map((department) => (
              <div
                key={department}
                className="rounded-[20px] border border-soft bg-page-secondary px-4 py-4 text-center text-sm font-black text-primary transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:bg-color-secondary hover:text-brand-primary"
              >
                {department}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* শিক্ষকদের তালিকা */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-primary">
              শিক্ষকদের প্রোফাইল
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              আমাদের শিক্ষকবৃন্দ
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              বিদ্যালয়ের প্রতিটি শিক্ষক শিক্ষার্থীদের উন্নত শিক্ষা, নৈতিকতা ও
              সফল ভবিষ্যৎ গঠনে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {teachers.map((teacher) => (
              <article
                key={teacher.id}
                className="group overflow-hidden rounded-[30px] border border-soft bg-page-primary shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary hover:shadow-xl"
              >
                <div className="relative h-[280px] overflow-hidden bg-page-secondary">
                  <Image
                    src={teacher.image}
                    alt={teacher.banglaName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/10 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-color-secondary px-4 py-2 text-xs font-black text-brand-primary shadow-md">
                      <FaIdCard />
                      {teacher.department}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-2xl font-black text-inverse">
                      {teacher.banglaName}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-inverse opacity-90">
                      {teacher.designation}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-black text-primary">
                    {teacher.name}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-brand-primary">
                    {teacher.qualification}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-soft pt-4 text-sm font-semibold text-secondary">
                    <p className="flex items-center gap-3">
                      <FaBookOpen className="shrink-0 text-brand-primary" />
                      {teacher.department}
                    </p>

                    <p className="flex items-center gap-3">
                      <FaAward className="shrink-0 text-brand-primary" />
                      {teacher.experience}
                    </p>

                    <p className="flex items-center gap-3">
                      <FaPhone className="shrink-0 text-brand-primary" />
                      {teacher.phone}
                    </p>

                    <p className="flex items-center gap-3 break-all">
                      <FaEnvelope className="shrink-0 text-brand-primary" />
                      {teacher.email}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* বার্তা */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaUsersGear className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  শিক্ষকদের বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                শিক্ষকই শিক্ষার্থীর সফল ভবিষ্যতের পথপ্রদর্শক
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                আমাদের শিক্ষকবৃন্দ পাঠ্যক্রমের পাশাপাশি শিক্ষার্থীদের মূল্যবোধ,
                শৃঙ্খলা, নেতৃত্ব ও আত্মবিশ্বাস গড়ে তুলতে কাজ করেন। প্রতিটি
                শিক্ষার্থীর প্রতিভা বিকাশে শিক্ষকরা সর্বোচ্চ যত্ন ও দিকনির্দেশনা
                প্রদান করেন।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaGraduationCap />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  মানসম্মত শিক্ষা
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  অভিজ্ঞ শিক্ষক, উন্নত শিক্ষা এবং শিক্ষার্থীবান্ধব পরিবেশ।
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
                শিক্ষকবৃন্দ সম্পর্কিত তথ্য প্রয়োজন?
              </h3>

              <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                শিক্ষকবৃন্দ সম্পর্কিত বিস্তারিত তথ্যের জন্য বিদ্যালয়ের অফিসে
                যোগাযোগ করুন।
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