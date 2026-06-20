"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FaCircleInfo,
  FaPhotoFilm,
  FaPlay,
  FaSchoolFlag,
  FaVideo,
  FaXmark,
} from "react-icons/fa6";

type VideoGalleryItem = {
  id: string | number;
  title: string;
  slug: string;
  description: string;
  youtubeEmbedUrl: string;
};

type SelectedVideo = {
  title: string;
  youtubeEmbedUrl: string;
};

type VideoCardProps = {
  item: VideoGalleryItem;
  index: number;
  onClick: () => void;
};

const toBanglaNumber = (value: string | number) =>
  value.toString().replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

const videoGallery: VideoGalleryItem[] = [
  {
    id: 1,
    title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান",
    slug: "annual-cultural-program",
    youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "বিদ্যালয়ের বার্ষিক সাংস্কৃতিক অনুষ্ঠানের স্মরণীয় মুহূর্ত ও শিক্ষার্থীদের পরিবেশনা।",
  },
  {
    id: 2,
    title: "বার্ষিক ক্রীড়া দিবসের বিশেষ মুহূর্ত",
    slug: "sports-day-highlights",
    youtubeEmbedUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    description:
      "বার্ষিক ক্রীড়া প্রতিযোগিতা, পুরস্কার বিতরণ এবং শিক্ষার্থীদের অংশগ্রহণের মুহূর্ত।",
  },
  {
    id: 3,
    title: "বিজ্ঞান মেলা উপস্থাপনা",
    slug: "science-fair-presentation",
    youtubeEmbedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    description:
      "বিজ্ঞান মেলা, শিক্ষার্থীদের প্রজেক্ট প্রদর্শনী এবং সৃজনশীল উপস্থাপনা।",
  },
  {
    id: 4,
    title: "ক্যাম্পাস কার্যক্রমের ভিডিও",
    slug: "campus-activity-video",
    youtubeEmbedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    description:
      "ক্যাম্পাস কার্যক্রম, দৈনন্দিন শিক্ষা পরিবেশ এবং বিদ্যালয়ের সুন্দর মুহূর্ত।",
  },
  {
    id: 5,
    title: "শ্রেণিকক্ষের শেখার মুহূর্ত",
    slug: "classroom-learning-moments",
    youtubeEmbedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    description:
      "শ্রেণিকক্ষের পাঠদান, দলীয় কার্যক্রম এবং শিক্ষার্থীদের শেখার অভিজ্ঞতা।",
  },
  {
    id: 6,
    title: "শিক্ষার্থী অর্জন অনুষ্ঠান",
    slug: "student-achievement-program",
    youtubeEmbedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    description:
      "শিক্ষার্থীদের অর্জন, সম্মাননা, পুরস্কার বিতরণ এবং অনুপ্রেরণামূলক মুহূর্ত।",
  },
];

function VideoCard({ item, index, onClick }: VideoCardProps) {
  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onClick();
        }
      }}
      className="group h-full cursor-pointer overflow-hidden rounded-[28px] border border-soft bg-page-primary shadow-sm outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-xl focus:ring-2 focus:ring-[color:var(--color-primary)]/30"
    >
      <div className="relative h-[260px] w-full overflow-hidden bg-page-secondary sm:h-[300px] lg:h-[330px]">
        <iframe
          src={`${item.youtubeEmbedUrl}?rel=0&modestbranding=1`}
          title={item.title}
          className="h-full w-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-color-secondary text-xl text-brand-primary shadow-xl transition duration-300 group-hover:scale-110">
            <FaPlay />
          </div>
        </div>

        <div className="pointer-events-none absolute left-5 top-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-color-secondary px-4 py-2 text-xs font-black text-brand-primary shadow-md">
            <FaVideo />
            ভিডিও {toBanglaNumber(index + 1)}
          </span>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-black leading-snug text-inverse">
            {item.title}
          </h3>

          <p className="mt-2 text-sm font-semibold text-inverse opacity-85">
            ভিডিও চালাতে ক্লিক করুন
          </p>
        </div>
      </div>
    </article>
  );
}

export default function VideoFilteredPage() {
  const params = useParams<{ slug?: string }>();
  const slug = decodeURIComponent(params.slug ?? "");

  const filteredVideos = useMemo(() => {
    return videoGallery.filter((item) => item.slug === slug);
  }, [slug]);

  const currentAlbumTitle = filteredVideos[0]?.title || "ভিডিও গ্যালারী";

  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(
    null
  );

  const openModal = (youtubeEmbedUrl: string, title: string) => {
    setSelectedVideo({ youtubeEmbedUrl, title });
  };

  const closeModal = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  useEffect(() => {
    if (!selectedVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscClose);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [selectedVideo, closeModal]);

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* উপরের হিরো অংশ */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            ভিডিও গ্যালারী
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            ভিডিও গ্যালারী
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            নির্বাচিত ভিডিও গ্যালারী অ্যালবামের অনুষ্ঠান ও কার্যক্রম এখানে
            সরাসরি ইউটিউব আইফ্রেম ভিডিও হিসেবে দেখানো হচ্ছে। প্রতিটি ভিডিও
            কার্ডে ক্লিক করলে বড় প্লেয়ার খুলবে।
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
            >
              গ্যালারীতে ফিরে যান
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-soft bg-color-secondary px-8 py-4 text-sm font-black text-brand-primary shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          {/* হাইলাইট বক্স */}
          <div className="mb-10 overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-inverse">
                  <FaPhotoFilm />
                  ভিডিও আর্কাইভ
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  {currentAlbumTitle}
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  এই পেজে থাম্বনেইল ছবির জায়গায় সরাসরি ইউটিউব আইফ্রেম ভিডিও
                  ব্যবহার করা হয়েছে। কার্ডে ক্লিক করলে বড় ভিডিও প্লেয়ার খুলবে
                  এবং এস্কেপ কী চাপলে বন্ধ হবে।
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "সরাসরি ইউটিউব ভিডিও",
                    "আইফ্রেম প্লেয়ার",
                    "বড় প্লেয়ার",
                    "একই কার্ড স্টাইল",
                    "এস্কেপে বন্ধ",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-inverse"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 bg-color-secondary p-6 sm:grid-cols-2 sm:p-8 lg:col-span-4 lg:p-10">
                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaVideo />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    {toBanglaNumber(filteredVideos.length)}
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    মোট ভিডিও
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaPlay />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    চালু করুন
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    ইউটিউব ভিডিও
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ভিডিও কার্ড */}
          {filteredVideos.length > 0 ? (
            <div className="rounded-[30px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex flex-col gap-4 border-b border-soft pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
                    নির্বাচিত অ্যালবাম
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-primary">
                    ভিডিও সমূহ
                  </h2>

                  <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                    নির্বাচিত ভিডিও অ্যালবামের সরাসরি ইউটিউব আইফ্রেম ভিডিও
                    এখানে কার্ড লেআউটে দেখা যাবে।
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-color-secondary px-5 py-3 text-sm font-black text-brand-primary">
                  <span>{toBanglaNumber(filteredVideos.length)}</span>
                  <span>টি ভিডিও</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredVideos.map((item, index) => (
                  <VideoCard
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={() => openModal(item.youtubeEmbedUrl, item.title)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-[30px] border border-soft bg-page-primary p-8 text-center shadow-sm sm:p-12 lg:p-20">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-color-secondary text-4xl text-brand-primary shadow-sm">
                <FaVideo />
              </div>

              <h2 className="mt-6 text-2xl font-black text-primary sm:text-3xl">
                কোনো ভিডিও পাওয়া যায়নি
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-secondary sm:text-base">
                এই ভিডিও অ্যালবামের জন্য কোনো ভিডিও পাওয়া যায়নি। অন্য গ্যালারী
                দেখতে গ্যালারীতে ফিরে যান।
              </p>

              <Link
                href="/gallery"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
              >
                গ্যালারীতে ফিরে যান
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* সমাপনী অংশ */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaSchoolFlag className="text-sm" />

                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  ভিডিও গ্যালারী বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                ভিডিওতে বিদ্যালয়ের কার্যক্রম আরও প্রাণবন্ত
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের অনুষ্ঠান, শিক্ষা কার্যক্রম, সাংস্কৃতিক আয়োজন এবং
                শিক্ষার্থীদের অর্জন ভিডিও গ্যালারীর মাধ্যমে আরও সুন্দরভাবে
                উপস্থাপন করা হয়। এই গ্যালারী শিক্ষার্থী, অভিভাবক ও দর্শনার্থীদের
                জন্য বিদ্যালয়ের কার্যক্রম জানার একটি সহজ মাধ্যম।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaPhotoFilm />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  ভিডিও আর্কাইভ
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  ইউটিউব ভিডিও প্লেয়ার দিয়ে বিদ্যালয়ের স্মরণীয় মুহূর্তগুলো আরও
                  সুন্দরভাবে দেখুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* টেকনিক্যাল নোট */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] rounded-[24px] border border-soft bg-page-primary p-5">
          <div className="flex items-start gap-3">
            <FaCircleInfo className="mt-1 shrink-0 text-brand-primary" />

            <p className="text-sm font-semibold leading-7 text-secondary">
              টিপস: নিজের ভিডিও দিতে চাইলে `youtubeEmbedUrl` ফিল্ডে ইউটিউব
              এমবেড লিংক বসান। উদাহরণ:
              `https://www.youtube.com/embed/YOUR_VIDEO_ID`
            </p>
          </div>
        </div>
      </section>

      {/* ইউটিউব ভিডিও মডাল */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 p-4"
          onClick={closeModal}
        >
          <div
            className="absolute left-4 right-4 top-4 z-50 flex flex-col gap-3 sm:left-5 sm:right-5 sm:flex-row sm:items-center sm:justify-between"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-black text-inverse backdrop-blur-sm">
              {selectedVideo.title}
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-color-primary text-xl text-inverse transition hover:opacity-90"
              aria-label="বন্ধ করুন"
            >
              <FaXmark />
            </button>
          </div>

          <div
            className="flex h-full w-full items-center justify-center overflow-hidden pt-24"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="aspect-video w-full max-w-[1100px] overflow-hidden rounded-[28px] border border-white/15 bg-black shadow-2xl">
              <iframe
                src={`${selectedVideo.youtubeEmbedUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}