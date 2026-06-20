"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaCalendarDays,
  FaCheck,
  FaCircleInfo,
  FaClock,
  FaGraduationCap,
  FaLayerGroup,
  FaSchoolFlag,
  FaStar,
  FaUsers,
  FaXmark,
} from "react-icons/fa6";

type CourseItem = {
  id: number;
  className: string;
  title: string;
  image: string;
  duration: string;
  level: string;
  subjects: string[];
  features: string[];
  description: string;
  suitableFor: string;
};

type CourseCardProps = {
  course: CourseItem;
  onDetailsClick: (course: CourseItem) => void;
};

type CourseDetailsModalProps = {
  course: CourseItem | null;
  onClose: () => void;
};

const toBanglaNumber = (value: string | number) =>
  value.toString().replace(/\d/g, (digit) => "০১২৩৪۵۶۷۸۹"[Number(digit)]);

const courses: CourseItem[] = [
  {
    id: 1,
    className: "প্রথম শ্রেণি",
    title: "প্রথম শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-1.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "প্রাথমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "পরিবেশ পরিচিতি", "চারু ও কারুকলা"],
    features: [
      "বর্ণ ও শব্দ শেখা",
      "সংখ্যা ও গণনার ভিত্তি",
      "গল্পভিত্তিক শেখার পদ্ধতি",
      "শিশুবান্ধব শ্রেণিকক্ষ কার্যক্রম",
    ],
    description:
      "প্রথম শ্রেণির কোর্সটি শিশুদের ভাষা, সংখ্যা, আচরণ, সৃজনশীলতা এবং প্রাথমিক শেখার অভ্যাস গঠনের জন্য সাজানো হয়েছে।",
    suitableFor:
      "নতুন শিক্ষার্থী যারা প্রাথমিক শিক্ষার প্রথম ধাপে সুন্দরভাবে এগিয়ে যেতে চায়।",
  },
  {
    id: 2,
    className: "দ্বিতীয় শ্রেণি",
    title: "দ্বিতীয় শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-2.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "প্রাথমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "পরিবেশ পরিচিতি", "ধর্ম শিক্ষা"],
    features: [
      "পঠন ও লেখার দক্ষতা বৃদ্ধি",
      "সহজ যোগ-বিয়োগ অনুশীলন",
      "পরিবেশ ও সমাজ সম্পর্কে ধারণা",
      "নিয়মিত শ্রেণি মূল্যায়ন",
    ],
    description:
      "দ্বিতীয় শ্রেণির কোর্সে শিক্ষার্থীর ভাষাগত দক্ষতা, গণিতের ভিত্তি এবং দৈনন্দিন জীবন সম্পর্কে সচেতনতা উন্নত করা হয়।",
    suitableFor:
      "যারা প্রাথমিক ভিত্তি আরও শক্তিশালী করে পরবর্তী শ্রেণির জন্য প্রস্তুত হতে চায়।",
  },
  {
    id: 3,
    className: "তৃতীয় শ্রেণি",
    title: "তৃতীয় শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-3.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "প্রাথমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বাংলাদেশ ও বিশ্বপরিচয়", "বিজ্ঞান"],
    features: [
      "অনুচ্ছেদ ও গল্প বুঝে পড়া",
      "গুণ ও ভাগের ধারণা",
      "বিজ্ঞানভিত্তিক সহজ পর্যবেক্ষণ",
      "দলীয় কাজ ও উপস্থাপনা",
    ],
    description:
      "তৃতীয় শ্রেণির কোর্সে শিক্ষার্থীর বিশ্লেষণ ক্ষমতা, ভাষা ব্যবহার, গণিত চর্চা এবং বিজ্ঞানভিত্তিক চিন্তা গড়ে তোলা হয়।",
    suitableFor:
      "যারা প্রাথমিক শিক্ষার মাঝামাঝি পর্যায়ে আত্মবিশ্বাসী শেখার অভ্যাস গঠন করতে চায়।",
  },
  {
    id: 4,
    className: "চতুর্থ শ্রেণি",
    title: "চতুর্থ শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-1.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "প্রাথমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "বাংলাদেশ ও বিশ্বপরিচয়"],
    features: [
      "ব্যাকরণ ও রচনা চর্চা",
      "ভগ্নাংশ ও জ্যামিতির ভিত্তি",
      "বিজ্ঞান পরীক্ষণ ও পর্যবেক্ষণ",
      "সৃজনশীল প্রশ্ন অনুশীলন",
    ],
    description:
      "চতুর্থ শ্রেণির কোর্সে শিক্ষার্থীদের বিষয়ভিত্তিক ধারণা স্পষ্ট করা, সমস্যা সমাধানের দক্ষতা বৃদ্ধি এবং পরীক্ষার প্রস্তুতি শুরু করা হয়।",
    suitableFor:
      "যারা পঞ্চম শ্রেণি ও প্রাথমিক সমাপনী প্রস্তুতির জন্য শক্ত ভিত্তি তৈরি করতে চায়।",
  },
  {
    id: 5,
    className: "পঞ্চম শ্রেণি",
    title: "পঞ্চম শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-2.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "প্রাথমিক সমাপনী প্রস্তুতি",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "বাংলাদেশ ও বিশ্বপরিচয়"],
    features: [
      "সমাপনী পরীক্ষার প্রস্তুতি",
      "মডেল টেস্ট ও অধ্যায়ভিত্তিক মূল্যায়ন",
      "গুরুত্বপূর্ণ প্রশ্ন অনুশীলন",
      "দুর্বলতা নির্ণয় ও বিশেষ সহায়তা",
    ],
    description:
      "পঞ্চম শ্রেণির কোর্সটি প্রাথমিক স্তরের গুরুত্বপূর্ণ প্রস্তুতির জন্য সাজানো হয়েছে, যেখানে নিয়মিত পরীক্ষা, অনুশীলন এবং পুনরাবৃত্তির মাধ্যমে শিক্ষার্থীকে প্রস্তুত করা হয়।",
    suitableFor:
      "যারা প্রাথমিক স্তর সফলভাবে শেষ করে মাধ্যমিক স্তরের জন্য প্রস্তুত হতে চায়।",
  },
  {
    id: 6,
    className: "ষষ্ঠ শ্রেণি",
    title: "ষষ্ঠ শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-3.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "নিম্ন মাধ্যমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস ও সামাজিক বিজ্ঞান"],
    features: [
      "নতুন শিক্ষাক্রম অনুযায়ী পাঠদান",
      "অভিজ্ঞতাভিত্তিক শেখা",
      "দলীয় কার্যক্রম ও প্রকল্প",
      "ধারাবাহিক মূল্যায়ন",
    ],
    description:
      "ষষ্ঠ শ্রেণির কোর্সে নতুন শিক্ষাক্রমের আলোকে বাস্তব অভিজ্ঞতা, দলীয় কাজ এবং বিষয়ভিত্তিক ধারণা গঠনে গুরুত্ব দেওয়া হয়।",
    suitableFor:
      "যারা প্রাথমিক স্তর শেষে নতুন শিক্ষাক্রমে আত্মবিশ্বাসের সঙ্গে এগিয়ে যেতে চায়।",
  },
  {
    id: 7,
    className: "সপ্তম শ্রেণি",
    title: "সপ্তম শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-1.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "নিম্ন মাধ্যমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ডিজিটাল প্রযুক্তি"],
    features: [
      "বিষয়ভিত্তিক গভীর ধারণা",
      "সমস্যা সমাধান অনুশীলন",
      "প্রকল্পভিত্তিক কাজ",
      "নিয়মিত অগ্রগতি মূল্যায়ন",
    ],
    description:
      "সপ্তম শ্রেণির কোর্সে শিক্ষার্থীদের বিশ্লেষণ, যুক্তি, যোগাযোগ ও প্রযুক্তিগত দক্ষতা উন্নয়নে বিশেষ গুরুত্ব দেওয়া হয়।",
    suitableFor:
      "যারা নিম্ন মাধ্যমিক স্তরে বিষয়ভিত্তিক জ্ঞান আরও শক্তিশালী করতে চায়।",
  },
  {
    id: 8,
    className: "অষ্টম শ্রেণি",
    title: "অষ্টম শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-2.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "নিম্ন মাধ্যমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস ও সামাজিক বিজ্ঞান"],
    features: [
      "অধ্যায়ভিত্তিক প্রস্তুতি",
      "সৃজনশীল প্রশ্ন অনুশীলন",
      "দলীয় আলোচনা",
      "পরীক্ষাভিত্তিক প্রস্তুতি",
    ],
    description:
      "অষ্টম শ্রেণির কোর্স শিক্ষার্থীদের মাধ্যমিক পর্যায়ের শক্ত ভিত্তি তৈরিতে সহায়তা করে এবং পরবর্তী শ্রেণির জন্য প্রস্তুত করে।",
    suitableFor:
      "যারা মাধ্যমিক পর্যায়ের আগে বিষয়ভিত্তিক দক্ষতা ও আত্মবিশ্বাস বাড়াতে চায়।",
  },
  {
    id: 9,
    className: "নবম শ্রেণি",
    title: "নবম শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-3.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "মাধ্যমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "মানবিক", "ব্যবসায় শিক্ষা"],
    features: [
      "বিভাগভিত্তিক বিষয় প্রস্তুতি",
      "বোর্ড পরীক্ষার ভিত্তি তৈরি",
      "নিয়মিত ক্লাস টেস্ট",
      "অধ্যায়ভিত্তিক দুর্বলতা সমাধান",
    ],
    description:
      "নবম শ্রেণির কোর্সে শিক্ষার্থীর নির্বাচিত বিভাগ অনুযায়ী বিষয়ভিত্তিক পাঠদান, পরীক্ষা প্রস্তুতি এবং ধারণাভিত্তিক শেখায় গুরুত্ব দেওয়া হয়।",
    suitableFor:
      "যারা এসএসসি পরীক্ষার ভিত্তি নবম শ্রেণি থেকেই শক্ত করতে চায়।",
  },
  {
    id: 10,
    className: "দশম শ্রেণি",
    title: "দশম শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-1.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "এসএসসি প্রস্তুতি",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "মানবিক", "ব্যবসায় শিক্ষা"],
    features: [
      "এসএসসি বোর্ড পরীক্ষার প্রস্তুতি",
      "মডেল টেস্ট ও সাজেশন",
      "সৃজনশীল ও বহুনির্বাচনী অনুশীলন",
      "সময় ব্যবস্থাপনা ও পুনরাবৃত্তি",
    ],
    description:
      "দশম শ্রেণির কোর্সটি এসএসসি পরীক্ষার পূর্ণাঙ্গ প্রস্তুতির জন্য তৈরি, যেখানে বিষয়ভিত্তিক পাঠ, অনুশীলন, পরীক্ষা ও ফলাফল বিশ্লেষণ করা হয়।",
    suitableFor:
      "যারা এসএসসি পরীক্ষায় ভালো ফলাফল অর্জনের জন্য পরিকল্পিত প্রস্তুতি নিতে চায়।",
  },
  {
    id: 11,
    className: "একাদশ শ্রেণি",
    title: "একাদশ শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-2.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "উচ্চ মাধ্যমিক",
    subjects: ["বাংলা", "ইংরেজি", "বিজ্ঞান", "মানবিক", "ব্যবসায় শিক্ষা", "তথ্য ও যোগাযোগ প্রযুক্তি"],
    features: [
      "উচ্চ মাধ্যমিক বিষয়ের ভিত্তি তৈরি",
      "বিভাগভিত্তিক গভীর পাঠদান",
      "নিয়মিত পরীক্ষা ও বিশ্লেষণ",
      "ধারণা পরিষ্কার করার বিশেষ ক্লাস",
    ],
    description:
      "একাদশ শ্রেণির কোর্সে উচ্চ মাধ্যমিক স্তরের বিষয়ভিত্তিক ভিত্তি গড়ে তোলা হয়, যাতে শিক্ষার্থী দ্বাদশ শ্রেণি ও বোর্ড পরীক্ষার জন্য প্রস্তুত হতে পারে।",
    suitableFor:
      "যারা উচ্চ মাধ্যমিক স্তরের শুরু থেকেই শক্ত প্রস্তুতি নিতে চায়।",
  },
  {
    id: 12,
    className: "দ্বাদশ শ্রেণি",
    title: "দ্বাদশ শ্রেণির পূর্ণাঙ্গ কোর্স",
    image: "/assets/Courses images/book-3.png",
    duration: "১ শিক্ষাবর্ষ",
    level: "এইচএসসি প্রস্তুতি",
    subjects: ["বাংলা", "ইংরেজি", "বিজ্ঞান", "মানবিক", "ব্যবসায় শিক্ষা", "তথ্য ও যোগাযোগ প্রযুক্তি"],
    features: [
      "এইচএসসি বোর্ড পরীক্ষার পূর্ণ প্রস্তুতি",
      "মডেল টেস্ট ও অধ্যায়ভিত্তিক অনুশীলন",
      "গুরুত্বপূর্ণ প্রশ্ন সমাধান",
      "বিশ্ববিদ্যালয় প্রস্তুতির প্রাথমিক দিকনির্দেশনা",
    ],
    description:
      "দ্বাদশ শ্রেণির কোর্সটি এইচএসসি পরীক্ষার জন্য পরিকল্পিতভাবে তৈরি। নিয়মিত ক্লাস, পরীক্ষা, পুনরাবৃত্তি এবং ফলাফল বিশ্লেষণের মাধ্যমে শিক্ষার্থীকে চূড়ান্ত প্রস্তুতি দেওয়া হয়।",
    suitableFor:
      "যারা এইচএসসি পরীক্ষায় ভালো ফলাফল এবং উচ্চশিক্ষার জন্য শক্ত ভিত্তি তৈরি করতে চায়।",
  },
];

function CourseCard({ course, onDetailsClick }: CourseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-soft bg-page-primary shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative flex h-[210px] items-center justify-center overflow-hidden bg-color-primary p-6">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-color-secondary opacity-30 blur-2xl transition-all duration-700 group-hover:scale-150" />
        <div className="pointer-events-none absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-page-primary opacity-10 blur-2xl" />

        <Image
          src={course.image}
          alt={course.title}
          width={160}
          height={160}
          className="relative z-10 h-[120px] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-color-secondary px-4 py-2 text-xs font-black text-brand-primary shadow-sm">
          {course.className}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-black leading-snug text-primary">
          {course.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm font-semibold leading-7 text-secondary">
          {course.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-page-secondary p-4">
            <div className="flex items-center gap-2 text-brand-primary">
              <FaClock className="text-sm" />
              <span className="text-xs font-black">সময়কাল</span>
            </div>

            <p className="mt-2 text-sm font-black text-primary">
              {course.duration}
            </p>
          </div>

          <div className="rounded-2xl bg-page-secondary p-4">
            <div className="flex items-center gap-2 text-brand-primary">
              <FaLayerGroup className="text-sm" />
              <span className="text-xs font-black">স্তর</span>
            </div>

            <p className="mt-2 text-sm font-black text-primary">
              {course.level}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onDetailsClick(course)}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-color-primary px-6 py-3 text-sm font-black text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
        >
          বিস্তারিত দেখুন
        </button>
      </div>
    </article>
  );
}

function CourseDetailsModal({ course, onClose }: CourseDetailsModalProps) {
  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] border border-soft bg-page-primary shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="বন্ধ করুন"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-color-primary text-xl text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
        >
          <FaXmark />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-color-primary p-8 lg:col-span-5">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-color-secondary opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-page-primary opacity-10 blur-3xl" />

            <Image
              src={course.image}
              alt={course.title}
              width={280}
              height={280}
              className="relative z-10 h-[220px] w-auto object-contain"
              priority
            />

            <span className="absolute bottom-6 left-6 rounded-full bg-color-secondary px-5 py-2 text-xs font-black text-brand-primary shadow-sm">
              {course.className}
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-primary">
              কোর্সের বিস্তারিত তথ্য
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-primary sm:text-4xl">
              {course.title}
            </h2>

            <div className="mt-4 h-1 w-24 rounded-full bg-color-primary" />

            <p className="mt-5 text-sm font-semibold leading-8 text-secondary sm:text-base">
              {course.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-soft bg-page-secondary p-5">
                <FaCalendarDays className="text-2xl text-brand-primary" />
                <p className="mt-3 text-xs font-black text-brand-primary">
                  সময়কাল
                </p>
                <p className="mt-1 text-base font-black text-primary">
                  {course.duration}
                </p>
              </div>

              <div className="rounded-2xl border border-soft bg-page-secondary p-5">
                <FaLayerGroup className="text-2xl text-brand-primary" />
                <p className="mt-3 text-xs font-black text-brand-primary">
                  শিক্ষার স্তর
                </p>
                <p className="mt-1 text-base font-black text-primary">
                  {course.level}
                </p>
              </div>

              <div className="rounded-2xl border border-soft bg-page-secondary p-5">
                <FaUsers className="text-2xl text-brand-primary" />
                <p className="mt-3 text-xs font-black text-brand-primary">
                  উপযোগী
                </p>
                <p className="mt-1 text-base font-black text-primary">
                  শিক্ষার্থী
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-soft bg-page-secondary p-5">
              <div className="flex items-center gap-3">
                <FaBookOpen className="text-xl text-brand-primary" />
                <h3 className="text-lg font-black text-primary">
                  অন্তর্ভুক্ত বিষয়সমূহ
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {course.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-color-secondary px-4 py-2 text-sm font-black text-brand-primary"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-soft bg-page-secondary p-5">
              <div className="flex items-center gap-3">
                <FaStar className="text-xl text-brand-primary" />
                <h3 className="text-lg font-black text-primary">
                  কোর্সের বৈশিষ্ট্য
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl bg-page-primary p-4"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-color-primary text-[10px] text-inverse">
                      <FaCheck />
                    </span>

                    <p className="text-sm font-semibold leading-6 text-secondary">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-soft bg-color-secondary p-5">
              <div className="flex items-center gap-3">
                <FaCircleInfo className="text-xl text-brand-primary" />
                <h3 className="text-lg font-black text-primary">
                  যাদের জন্য উপযোগী
                </h3>
              </div>

              <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                {course.suitableFor}
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-color-primary px-6 py-3 text-sm font-black text-inverse shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
              >
                ভর্তি তথ্য জানতে যোগাযোগ করুন
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-soft bg-page-secondary px-6 py-3 text-sm font-black text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-color-secondary"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const closeModal = () => {
    setSelectedCourse(null);
  };

  useEffect(() => {
    if (!selectedCourse) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCourse]);

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-brand-primary sm:text-sm">
            একাডেমিক কোর্সসমূহ
          </p>

          <h1 className="mt-7 text-[40px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            প্রথম শ্রেণি থেকে দ্বাদশ শ্রেণি
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থীদের বয়স, শ্রেণি, বিষয়ভিত্তিক চাহিদা এবং পরীক্ষার প্রস্তুতি
            বিবেচনা করে আমাদের কোর্সগুলো সাজানো হয়েছে। প্রতিটি কোর্সে
            বিষয়ভিত্তিক পাঠদান, মূল্যায়ন, অনুশীলন এবং উন্নয়ন সহায়তা দেওয়া হয়।
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
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-inverse">
                  <FaGraduationCap />
                  পূর্ণাঙ্গ একাডেমিক প্রস্তুতি
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  প্রতিটি শ্রেণির জন্য আলাদা কোর্স পরিকল্পনা
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  প্রথম শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত প্রতিটি কোর্সে
                  শিক্ষার্থীর শেখার ধাপ, পাঠ্যবিষয়, মূল্যায়ন এবং পরীক্ষার
                  প্রস্তুতি আলাদাভাবে সাজানো হয়েছে।
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 bg-color-secondary p-6 sm:grid-cols-2 sm:p-8 lg:col-span-4 lg:p-10">
                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaBookOpen />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    {toBanglaNumber(courses.length)}
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    মোট কোর্স
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaSchoolFlag />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    ১-১২
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    শ্রেণি
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
                কোর্স তালিকা
              </p>

              <h2 className="mt-2 text-3xl font-black text-primary">
                সব শ্রেণির কোর্স
              </h2>

              <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-secondary">
                প্রতিটি কোর্সের বিস্তারিত জানতে কার্ডের নিচের বাটনে ক্লিক করুন।
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-color-secondary px-5 py-3 text-sm font-black text-brand-primary">
              <span>{toBanglaNumber(courses.length)}</span>
              <span>টি কোর্স</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onDetailsClick={setSelectedCourse}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaSchoolFlag className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  শিক্ষার অঙ্গীকার
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                প্রতিটি শিক্ষার্থীর জন্য পরিকল্পিত শেখার পথ
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীকে তার শ্রেণি, সামর্থ্য এবং
                ভবিষ্যৎ লক্ষ্যের সঙ্গে মিল রেখে সঠিক একাডেমিক সহায়তা দেওয়া।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaGraduationCap />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  একাডেমিক সহায়তা
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  নিয়মিত পাঠদান, অনুশীলন, মূল্যায়ন এবং ফলাফল বিশ্লেষণের মাধ্যমে
                  শিক্ষার্থীদের এগিয়ে নেওয়া হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CourseDetailsModal course={selectedCourse} onClose={closeModal} />
    </main>
  );
}