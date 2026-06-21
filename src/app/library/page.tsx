"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBook,
  FaBookOpen,
  FaCalendarDays,
  FaCheck,
  FaCircleInfo,
  FaClock,
  FaDownload,
  FaGraduationCap,
  FaMagnifyingGlass,
  FaSchoolFlag,
  FaStar,
  FaUsers,
} from "react-icons/fa6";

type BookItem = {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: "available" | "borrowed";
  classLevel: string;
  shelf: string;
};

type LibraryStat = {
  id: number;
  title: string;
  value: string;
  icon: React.ReactNode;
};

type LibraryRule = {
  id: number;
  title: string;
  description: string;
};

const toBanglaNumber = (value: string | number) =>
  value.toString().replace(/\d/g, (digit) => "০১২৩৪৫৬۷۸۹"[Number(digit)]);

const libraryImage = "/assets/3.jpg";

const books: BookItem[] = [
  {
    id: 1,
    title: "বাংলা সাহিত্য পাঠ",
    author: "বিদ্যালয় গ্রন্থাগার",
    category: "বাংলা",
    image: "/assets/Courses images/book-1.png",
    status: "available",
    classLevel: "ষষ্ঠ থেকে অষ্টম শ্রেণি",
    shelf: "শেলফ-০১",
  },
  {
    id: 2,
    title: "ইংরেজি ভাষা চর্চা",
    author: "বিদ্যালয় গ্রন্থাগার",
    category: "ইংরেজি",
    image: "/assets/Courses images/book-2.png",
    status: "available",
    classLevel: "ষষ্ঠ থেকে দশম শ্রেণি",
    shelf: "শেলফ-০২",
  },
  {
    id: 3,
    title: "গণিত অনুশীলন",
    author: "বিদ্যালয় গ্রন্থাগার",
    category: "গণিত",
    image: "/assets/Courses images/book-3.png",
    status: "borrowed",
    classLevel: "পঞ্চম থেকে দশম শ্রেণি",
    shelf: "শেলফ-০৩",
  },
  {
    id: 4,
    title: "সাধারণ বিজ্ঞান",
    author: "বিদ্যালয় গ্রন্থাগার",
    category: "বিজ্ঞান",
    image: "/assets/Courses images/book-1.png",
    status: "available",
    classLevel: "ষষ্ঠ থেকে দশম শ্রেণি",
    shelf: "শেলফ-০৪",
  },
  {
    id: 5,
    title: "বাংলাদেশ ও বিশ্বপরিচয়",
    author: "বিদ্যালয় গ্রন্থাগার",
    category: "সামাজিক বিজ্ঞান",
    image: "/assets/Courses images/book-2.png",
    status: "available",
    classLevel: "তৃতীয় থেকে অষ্টম শ্রেণি",
    shelf: "শেলফ-০৫",
  },
  {
    id: 6,
    title: "তথ্য ও যোগাযোগ প্রযুক্তি",
    author: "বিদ্যালয় গ্রন্থাগার",
    category: "প্রযুক্তি",
    image: "/assets/Courses images/book-3.png",
    status: "borrowed",
    classLevel: "ষষ্ঠ থেকে দ্বাদশ শ্রেণি",
    shelf: "শেলফ-০৬",
  },
];

const categories = [
  "সব বই",
  "বাংলা",
  "ইংরেজি",
  "গণিত",
  "বিজ্ঞান",
  "সামাজিক বিজ্ঞান",
  "প্রযুক্তি",
];

const libraryStats: LibraryStat[] = [
  {
    id: 1,
    title: "মোট বই",
    value: "৫,০০০+",
    icon: <FaBook />,
  },
  {
    id: 2,
    title: "দৈনিক পাঠক",
    value: "৩০০+",
    icon: <FaUsers />,
  },
  {
    id: 3,
    title: "বিষয়ভিত্তিক বিভাগ",
    value: "২৫+",
    icon: <FaGraduationCap />,
  },
  {
    id: 4,
    title: "পাঠাগার সময়",
    value: "৮ ঘণ্টা",
    icon: <FaClock />,
  },
];

const libraryRules: LibraryRule[] = [
  {
    id: 1,
    title: "লাইব্রেরি কার্ড ব্যবহার",
    description:
      "বই ধার নেওয়ার জন্য শিক্ষার্থীদের লাইব্রেরি কার্ড ব্যবহার করতে হবে।",
  },
  {
    id: 2,
    title: "সময়মতো বই ফেরত",
    description:
      "নির্ধারিত সময়ের মধ্যে বই ফেরত দেওয়া শিক্ষার্থীর দায়িত্ব।",
  },
  {
    id: 3,
    title: "বই পরিষ্কার রাখা",
    description:
      "বইয়ে দাগ দেওয়া, পৃষ্ঠা ভাঁজ করা বা বই ক্ষতিগ্রস্ত করা যাবে না।",
  },
  {
    id: 4,
    title: "নীরব পরিবেশ বজায় রাখা",
    description:
      "লাইব্রেরিতে পড়ার উপযোগী শান্ত ও শৃঙ্খলাপূর্ণ পরিবেশ বজায় রাখতে হবে।",
  },
];

function BookCard({ book }: { book: BookItem }) {
  const available = book.status === "available";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-soft bg-page-primary shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-color-primary p-6">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-color-secondary opacity-30 blur-2xl transition-all duration-700 group-hover:scale-150" />
        <div className="pointer-events-none absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-page-primary opacity-10 blur-2xl" />

        <Image
          src={book.image}
          alt={book.title}
          width={170}
          height={170}
          className="relative z-10 h-32.5 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <span
          className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-black shadow-sm ${
            available
              ? "bg-color-secondary text-brand-primary"
              : "bg-white/15 text-inverse"
          }`}
        >
          {available ? "উপলব্ধ" : "ধার দেওয়া হয়েছে"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="w-fit rounded-full bg-color-secondary px-4 py-2 text-xs font-black text-brand-primary">
          {book.category}
        </p>

        <h3 className="mt-4 text-xl font-black leading-snug text-primary">
          {book.title}
        </h3>

        <p className="mt-2 text-sm font-semibold text-secondary">
          লেখক / উৎস: {book.author}
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3">
          <div className="rounded-2xl bg-page-secondary p-4">
            <div className="flex items-center gap-2 text-brand-primary">
              <FaGraduationCap className="text-sm" />
              <span className="text-xs font-black">উপযোগী শ্রেণি</span>
            </div>

            <p className="mt-2 text-sm font-black text-primary">
              {book.classLevel}
            </p>
          </div>

          <div className="rounded-2xl bg-page-secondary p-4">
            <div className="flex items-center gap-2 text-brand-primary">
              <FaBookOpen className="text-sm" />
              <span className="text-xs font-black">বইয়ের অবস্থান</span>
            </div>

            <p className="mt-2 text-sm font-black text-primary">
              {book.shelf}
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-6 py-3 text-sm font-black text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
        >
          বই সম্পর্কে জানতে চান
          <FaArrowRight />
        </Link>
      </div>
    </article>
  );
}

export default function LibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("সব বই");
  const [searchText, setSearchText] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesCategory =
        selectedCategory === "সব বই" || book.category === selectedCategory;

      const matchesSearch =
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase()) ||
        book.category.toLowerCase().includes(searchText.toLowerCase()) ||
        book.classLevel.toLowerCase().includes(searchText.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchText]);

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-300 text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-brand-primary sm:text-sm">
            বিদ্যালয় লাইব্রেরি
          </p>

          <h1 className="mt-7 text-[40px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            জ্ঞানচর্চার উন্মুক্ত পাঠাগার
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            আমাদের লাইব্রেরি শিক্ষার্থীদের পাঠাভ্যাস, সৃজনশীল চিন্তা,
            গবেষণামূলক মনোভাব এবং জ্ঞানচর্চার আগ্রহ বাড়াতে সহায়ক একটি সুন্দর
            পরিবেশ।
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
            >
              হোমে ফিরে যান
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-soft bg-color-secondary px-8 py-4 text-sm font-black text-brand-primary shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-400">
          <div className="mb-10 overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative min-h-80 overflow-hidden lg:col-span-5">
                <Image
                  src={libraryImage}
                  alt="বিদ্যালয় লাইব্রেরি"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-color-secondary px-5 py-2 text-xs font-black text-brand-primary shadow-md">
                    <FaBookOpen />
                    লাইব্রেরি কর্নার
                  </span>
                </div>
              </div>

              <div className="p-6 text-inverse sm:p-8 lg:col-span-7 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-inverse">
                  <FaSchoolFlag />
                  পাঠাভ্যাস উন্নয়ন
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  বই, জ্ঞান ও গবেষণার সমন্বিত পরিবেশ
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  লাইব্রেরিতে রয়েছে পাঠ্যবই, সহায়ক বই, সাহিত্য, বিজ্ঞান,
                  প্রযুক্তি, ইতিহাস, সাধারণ জ্ঞান এবং শিক্ষার্থীদের বয়সভিত্তিক
                  উপযোগী বিভিন্ন বই। শিক্ষার্থীরা নিয়মিত পাঠচর্চার মাধ্যমে
                  নিজের জ্ঞান ও সৃজনশীলতা বৃদ্ধি করতে পারে।
                </p>

                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {libraryStats.map((stat) => (
                    <div
                      key={stat.id}
                      className="rounded-3xl border border-white/15 bg-white/10 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-color-secondary text-xl text-brand-primary">
                          {stat.icon}
                        </div>

                        <div>
                          <p className="text-2xl font-black text-inverse">
                            {stat.value}
                          </p>
                          <p className="text-sm font-bold text-inverse opacity-80">
                            {stat.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 rounded-[30px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
                  বই অনুসন্ধান
                </p>

                <h2 className="mt-2 text-2xl font-black text-primary">
                  লাইব্রেরির বই খুঁজুন
                </h2>
              </div>

              <div className="lg:col-span-7">
                <div className="relative">
                  <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary" />

                  <input
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="বইয়ের নাম, বিষয় বা শ্রেণি লিখুন"
                    className="w-full rounded-full border border-soft bg-page-secondary py-4 pl-12 pr-5 text-sm font-semibold text-primary outline-none transition focus:border-brand-primary focus:bg-page-primary"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-color-primary text-inverse shadow-lg"
                      : "bg-color-secondary text-brand-primary hover:bg-color-primary hover:text-inverse"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
                বইয়ের তালিকা
              </p>

              <h2 className="mt-2 text-3xl font-black text-primary">
                নির্বাচিত বইসমূহ
              </h2>

              <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-secondary">
                এখানে লাইব্রেরির গুরুত্বপূর্ণ বইগুলো শ্রেণি ও বিষয়ের ভিত্তিতে
                দেখানো হয়েছে।
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-color-secondary px-5 py-3 text-sm font-black text-brand-primary">
              <span>{toBanglaNumber(filteredBooks.length)}</span>
              <span>টি বই</span>
            </div>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="rounded-[30px] border border-soft bg-page-primary p-8 text-center shadow-sm sm:p-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-secondary text-3xl text-brand-primary">
                <FaBook />
              </div>

              <h3 className="mt-5 text-2xl font-black text-primary">
                কোনো বই পাওয়া যায়নি
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-secondary">
                আপনার অনুসন্ধান বা নির্বাচিত বিষয়ের সঙ্গে মিল পাওয়া যায়নি। অন্য
                শব্দ দিয়ে আবার চেষ্টা করুন।
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-400">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
              লাইব্রেরি নিয়মাবলি
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              বই ব্যবহার ও পাঠাগার শৃঙ্খলা
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-secondary">
              লাইব্রেরির সুন্দর পরিবেশ বজায় রাখতে শিক্ষার্থীদের কিছু নিয়ম
              অনুসরণ করতে হবে।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {libraryRules.map((rule) => (
              <article
                key={rule.id}
                className="group rounded-[26px] border border-soft bg-page-primary p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-color-secondary text-xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  <FaCheck />
                </div>

                <h3 className="mt-5 text-xl font-black text-primary">
                  {rule.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {rule.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-400 overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaCircleInfo className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  পাঠাগার বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                নিয়মিত বই পড়া শিক্ষার্থীর চিন্তাশক্তি বাড়ায়
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বই পড়ার মাধ্যমে শিক্ষার্থীরা ভাষা, কল্পনাশক্তি, বিশ্লেষণ
                ক্ষমতা, মনোযোগ এবং আত্মবিশ্বাস বাড়াতে পারে। তাই লাইব্রেরি
                ব্যবহারকে আমরা শিক্ষার গুরুত্বপূর্ণ অংশ হিসেবে দেখি।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaStar />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  পাঠাভ্যাস গঠন
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  প্রতিদিন নিয়মিত বই পড়ার মাধ্যমে শিক্ষার্থীরা আরও আত্মবিশ্বাসী
                  ও জ্ঞানসমৃদ্ধ হয়ে ওঠে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-400 rounded-3xl border border-soft bg-page-primary p-5">
          <div className="flex items-start gap-3">
            <FaDownload className="mt-1 shrink-0 text-brand-primary" />

            <p className="text-sm font-semibold leading-7 text-secondary">
              নোট: লাইব্রেরি কার্ড, বই ধার নেওয়া এবং বই ফেরত দেওয়ার সময়সূচি
              সম্পর্কে বিস্তারিত জানতে বিদ্যালয় অফিসে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}




