"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaCameraRetro,
  FaImages,
  FaPhotoFilm,
  FaPlay,
  FaRegImages,
  FaSchoolFlag,
  FaVideo,
} from "react-icons/fa6";

type GalleryTab = "ফটোগ্যালারী" | "ভিডিও গ্যালারী";

type GalleryMenuItem = {
  name: GalleryTab;
  subtitle: string;
  icon: "photo" | "video";
};

type PhotoGalleryYear = {
  year: string;
  image: string;
};

type VideoGalleryItem = {
  id: number;
  image: string;
  title: string;
  slug: string;
};

type GalleryCardData = {
  id: string | number;
  image: string;
  title: string;
  alt: string;
  href: string;
  type: GalleryTab;
};

type GalleryCardProps = {
  item: GalleryCardData;
};

const toBanglaNumber = (value: string | number) =>
  value.toString().replace(/\d/g, (digit) => "০১২۳۴۵۶۷۸۹"[Number(digit)]);

const photoGalleryYears: PhotoGalleryYear[] = [
  { year: "2026", image: "/assets/3.jpg" },
  { year: "2025", image: "/assets/4.jpg" },
  { year: "2024", image: "/assets/5.jpg" },
  { year: "2023", image: "/assets/3.jpg" },
  { year: "2022", image: "/assets/4.jpg" },
  { year: "2021", image: "/assets/5.jpg" },
];

const videoGallery: VideoGalleryItem[] = [
  {
    id: 1,
    title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান",
    slug: "annual-cultural-program",
    image: "/assets/3.jpg",
  },
  {
    id: 2,
    title: "বার্ষিক ক্রীড়া দিবসের বিশেষ মুহূর্ত",
    slug: "sports-day-highlights",
    image: "/assets/4.jpg",
  },
  {
    id: 3,
    title: "বিজ্ঞান মেলা উপস্থাপনা",
    slug: "science-fair-presentation",
    image: "/assets/5.jpg",
  },
  {
    id: 4,
    title: "ক্যাম্পাস কার্যক্রমের ভিডিও",
    slug: "campus-activity-video",
    image: "/assets/3.jpg",
  },
  {
    id: 5,
    title: "শ্রেণিকক্ষের শেখার মুহূর্ত",
    slug: "classroom-learning-moments",
    image: "/assets/4.jpg",
  },
  {
    id: 6,
    title: "শিক্ষার্থী অর্জন অনুষ্ঠান",
    slug: "student-achievement-program",
    image: "/assets/5.jpg",
  },
];

const galleryTabs: GalleryMenuItem[] = [
  {
    name: "ফটোগ্যালারী",
    subtitle: "বছরভিত্তিক ছবির অ্যালবাম",
    icon: "photo",
  },
  {
    name: "ভিডিও গ্যালারী",
    subtitle: "অনুষ্ঠান ও কার্যক্রমের ভিডিও",
    icon: "video",
  },
];

function GalleryCard({ item }: GalleryCardProps) {
  const isVideo = item.type === "ভিডিও গ্যালারী";

  return (
    <Link href={item.href} className="block h-full">
      <article className="group h-full overflow-hidden rounded-[28px] border border-soft bg-page-primary shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative h-[260px] w-full overflow-hidden bg-page-secondary sm:h-[300px] lg:h-[330px]">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-color-secondary text-xl text-brand-primary shadow-xl transition duration-300 group-hover:scale-110">
                <FaPlay />
              </div>
            </div>
          )}

          <div className="absolute left-5 top-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-color-secondary px-4 py-2 text-xs font-black text-brand-primary shadow-md">
              {isVideo ? <FaVideo /> : <FaCameraRetro />}
              {isVideo ? "ভিডিও" : "ছবি"}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-2xl font-black text-inverse">{item.title}</h3>

            <p className="mt-2 text-sm font-semibold text-inverse opacity-85">
              গ্যালারী দেখতে ক্লিক করুন
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function GalleryPage() {
  const [selected, setSelected] = useState<GalleryTab>("ফটোগ্যালারী");

  const galleryCards = useMemo<GalleryCardData[]>(() => {
    if (selected === "ফটোগ্যালারী") {
      return photoGalleryYears.map((item) => {
        const displayYear = toBanglaNumber(item.year);

        return {
          id: item.year,
          image: item.image,
          title: displayYear,
          alt: `ফটো গ্যালারী ${displayYear}`,
          href: `/gallery/${item.year}`,
          type: "ফটোগ্যালারী",
        };
      });
    }

    return videoGallery.map((item) => ({
      id: item.id,
      image: item.image,
      title: item.title,
      alt: item.title,
      href: `/gallery/video/${item.slug}`,
      type: "ভিডিও গ্যালারী",
    }));
  }, [selected]);

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            মিডিয়া গ্যালারী
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            মিডিয়া গ্যালারী
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            বিদ্যালয়ের শিক্ষা কার্যক্রম, অনুষ্ঠান, ক্যাম্পাস, সহশিক্ষা কার্যক্রম
            এবং স্মরণীয় মুহূর্তের ছবি ও ভিডিও গ্যালারী এখানে সুন্দরভাবে
            উপস্থাপন করা হয়েছে।
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-inverse">
                  <FaPhotoFilm />
                  গ্যালারী আর্কাইভ
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  ছবি ও ভিডিওতে আমাদের বিদ্যালয়ের কার্যক্রম
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  এখানে বছরভিত্তিক ফটোগ্যালারী এবং ভিডিও গ্যালারী সুন্দরভাবে
                  সাজানো হয়েছে, যাতে শিক্ষার্থী, অভিভাবক ও দর্শনার্থীরা সহজে
                  বিদ্যালয়ের গুরুত্বপূর্ণ অনুষ্ঠান, কার্যক্রম এবং স্মরণীয় মুহূর্ত
                  দেখতে পারেন।
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 bg-color-secondary p-6 sm:grid-cols-2 sm:p-8 lg:col-span-4 lg:p-10">
                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaRegImages />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    {toBanglaNumber(photoGalleryYears.length)}
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    ফটো অ্যালবাম
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaVideo />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    {toBanglaNumber(videoGallery.length)}
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    ভিডিও অ্যালবাম
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-24 rounded-[30px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-color-secondary px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                    <FaImages />
                    গ্যালারী নির্বাচন করুন
                  </span>

                  <h2 className="mt-4 text-2xl font-black text-primary">
                    ছবি ও ভিডিও গ্যালারী
                  </h2>

                  <div className="mt-4 h-1 w-20 rounded-full bg-color-primary" />

                  <p className="mt-4 text-sm font-semibold leading-7 text-secondary">
                    প্রয়োজন অনুযায়ী ফটো অ্যালবাম অথবা ভিডিও গ্যালারী নির্বাচন
                    করুন।
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {galleryTabs.map((item) => {
                    const isActive = selected === item.name;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setSelected(item.name)}
                        className={`group rounded-[22px] border p-4 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                          isActive
                            ? "border-brand-primary bg-color-primary text-inverse shadow-lg"
                            : "border-soft bg-page-secondary text-primary"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-500 ${
                              isActive
                                ? "bg-color-secondary text-brand-primary"
                                : "bg-color-secondary text-brand-primary group-hover:bg-color-primary group-hover:text-inverse"
                            }`}
                          >
                            {item.icon === "photo" ? (
                              <FaCameraRetro />
                            ) : (
                              <FaVideo />
                            )}
                          </div>

                          <div>
                            <p
                              className={`font-black ${
                                isActive ? "text-inverse" : "text-primary"
                              }`}
                            >
                              {item.name}
                            </p>

                            <p
                              className={`mt-1 text-sm font-semibold leading-5 ${
                                isActive
                                  ? "text-inverse opacity-85"
                                  : "text-secondary"
                              }`}
                            >
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <section className="lg:col-span-9">
              <div className="rounded-[30px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
                <div className="mb-6 flex flex-col gap-4 border-b border-soft pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
                      {selected}
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-primary">
                      {selected === "ফটোগ্যালারী"
                        ? "বছরভিত্তিক ফটো অ্যালবাম"
                        : "ভিডিও অ্যালবাম"}
                    </h2>

                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      {selected === "ফটোগ্যালারী"
                        ? "বিদ্যালয়ের বছরভিত্তিক ছবি অ্যালবামগুলো এখানে দেখা যাবে।"
                        : "বিদ্যালয়ের অনুষ্ঠান ও কার্যক্রমের ভিডিও অ্যালবাম এখানে পাওয়া যাবে।"}
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-color-secondary px-5 py-3 text-sm font-black text-brand-primary">
                    <span>{toBanglaNumber(galleryCards.length)}</span>
                    <span>টি আইটেম</span>
                  </div>
                </div>

                {galleryCards.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {galleryCards.map((item) => (
                      <GalleryCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[28px] border border-soft bg-page-secondary p-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-secondary text-3xl text-brand-primary">
                      <FaImages />
                    </div>

                    <h3 className="mt-5 text-2xl font-black text-primary">
                      কোনো গ্যালারী পাওয়া যায়নি
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-secondary">
                      এই ক্যাটাগরির জন্য এখনো কোনো গ্যালারী যুক্ত করা হয়নি।
                    </p>
                  </div>
                )}
              </div>
            </section>
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
                  গ্যালারী বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                স্মৃতিময় মুহূর্ত সংরক্ষণে আমাদের মিডিয়া গ্যালারী
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের প্রতিটি অনুষ্ঠান, শিক্ষা কার্যক্রম, সাংস্কৃতিক আয়োজন
                এবং শিক্ষার্থীদের অর্জন আমাদের গ্যালারীতে সংরক্ষণ করা হয়।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaPhotoFilm />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  মিডিয়া আর্কাইভ
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  ছবি ও ভিডিওর মাধ্যমে বিদ্যালয়ের কার্যক্রমকে আরও প্রাণবন্তভাবে
                  দেখুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}