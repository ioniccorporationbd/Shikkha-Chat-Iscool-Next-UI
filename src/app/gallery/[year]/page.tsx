"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
  type WheelEvent,
} from "react";
import {
  FaCameraRetro,
  FaCircleInfo,
  FaImages,
  FaMagnifyingGlassMinus,
  FaMagnifyingGlassPlus,
  FaPhotoFilm,
  FaRotateRight,
  FaSchoolFlag,
  FaXmark,
} from "react-icons/fa6";

type PhotoGalleryImage = {
  id: string | number;
  year: string;
  image: string;
  title: string;
  description: string;
};

type SelectedImage = {
  image: string;
  title: string;
};

type GalleryCardProps = {
  item: PhotoGalleryImage;
  index: number;
  onClick: () => void;
};

const toBanglaNumber = (value: string | number) =>
  value.toString().replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

const photoGalleryImages: PhotoGalleryImage[] = [
  {
    id: 1,
    year: "2026",
    image: "/assets/3.jpg",
    title: "বার্ষিক অনুষ্ঠান ২০২৬",
    description:
      "বার্ষিক অনুষ্ঠান, শিক্ষার্থীদের পরিবেশনা এবং বিদ্যালয়ের স্মরণীয় মুহূর্ত।",
  },
  {
    id: 2,
    year: "2026",
    image: "/assets/4.jpg",
    title: "ক্যাম্পাস কার্যক্রম ২০২৬",
    description:
      "ক্যাম্পাস কার্যক্রম, শ্রেণিকক্ষের পরিবেশ এবং শিক্ষার্থীদের অংশগ্রহণ।",
  },
  {
    id: 3,
    year: "2026",
    image: "/assets/5.jpg",
    title: "অর্জন অনুষ্ঠান ২০২৬",
    description:
      "শিক্ষার্থীদের অর্জন, পুরস্কার বিতরণ এবং সম্মাননা অনুষ্ঠানের ছবি।",
  },
  {
    id: 4,
    year: "2025",
    image: "/assets/3.jpg",
    title: "সাংস্কৃতিক অনুষ্ঠান ২০২৫",
    description:
      "সাংস্কৃতিক অনুষ্ঠান এবং শিক্ষার্থীদের সৃজনশীল পরিবেশনার মুহূর্ত।",
  },
  {
    id: 5,
    year: "2025",
    image: "/assets/4.jpg",
    title: "ক্রীড়া দিবস ২০২৫",
    description:
      "ক্রীড়া প্রতিযোগিতা, দলীয় কার্যক্রম এবং পুরস্কার বিতরণ অনুষ্ঠান।",
  },
  {
    id: 6,
    year: "2025",
    image: "/assets/5.jpg",
    title: "বিজ্ঞান মেলা ২০২৫",
    description:
      "বিজ্ঞান মেলা, প্রজেক্ট প্রদর্শনী এবং শিক্ষার্থীদের উদ্ভাবনী কাজ।",
  },
  {
    id: 7,
    year: "2024",
    image: "/assets/3.jpg",
    title: "শ্রেণিকক্ষের মুহূর্ত ২০২৪",
    description:
      "শ্রেণিকক্ষের পাঠদান, দলীয় কার্যক্রম এবং শেখার সুন্দর পরিবেশ।",
  },
  {
    id: 8,
    year: "2024",
    image: "/assets/4.jpg",
    title: "লাইব্রেরি কার্যক্রম ২০২৪",
    description:
      "লাইব্রেরি কার্যক্রম, পাঠাভ্যাস এবং শিক্ষার্থীদের জ্ঞানচর্চার মুহূর্ত।",
  },
  {
    id: 9,
    year: "2024",
    image: "/assets/5.jpg",
    title: "বিদ্যালয়ের অনুষ্ঠান ২০২৪",
    description:
      "বিদ্যালয়ের বিশেষ অনুষ্ঠান, অভিভাবক উপস্থিতি এবং আনন্দঘন পরিবেশ।",
  },
  {
    id: 10,
    year: "2023",
    image: "/assets/3.jpg",
    title: "ক্যাম্পাস প্রোগ্রাম ২০২৩",
    description:
      "ক্যাম্পাসের অনুষ্ঠান, শিক্ষার্থীদের অংশগ্রহণ এবং বিদ্যালয়ের কার্যক্রম।",
  },
  {
    id: 11,
    year: "2023",
    image: "/assets/4.jpg",
    title: "শিক্ষার্থী কার্যক্রম ২০২৩",
    description:
      "শিক্ষার্থীদের দলীয় কাজ, সহশিক্ষা কার্যক্রম এবং অংশগ্রহণমূলক শিক্ষা।",
  },
  {
    id: 12,
    year: "2023",
    image: "/assets/5.jpg",
    title: "পুরস্কার বিতরণ ২০২৩",
    description:
      "পুরস্কার বিতরণ, সম্মাননা এবং শিক্ষার্থীদের সাফল্যের মুহূর্ত।",
  },
  {
    id: 13,
    year: "2022",
    image: "/assets/3.jpg",
    title: "বিদ্যালয়ের স্মৃতি ২০২২",
    description:
      "বিদ্যালয়ের কার্যক্রম, অনুষ্ঠান এবং শিক্ষার্থীদের স্মরণীয় মুহূর্ত।",
  },
  {
    id: 14,
    year: "2022",
    image: "/assets/4.jpg",
    title: "একাডেমিক অনুষ্ঠান ২০২২",
    description:
      "একাডেমিক অনুষ্ঠান, পাঠ কার্যক্রম এবং শিক্ষক-শিক্ষার্থীদের অংশগ্রহণ।",
  },
  {
    id: 15,
    year: "2021",
    image: "/assets/5.jpg",
    title: "গ্যালারী আর্কাইভ ২০২১",
    description:
      "পুরোনো অ্যালবামের ছবি, বিদ্যালয়ের পরিবেশ এবং স্মৃতিময় মুহূর্ত।",
  },
];

function GalleryCard({ item, index, onClick }: GalleryCardProps) {
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
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-color-secondary px-4 py-2 text-xs font-black text-brand-primary shadow-md">
            <FaCameraRetro />
            ছবি {toBanglaNumber(index + 1)}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-black leading-snug text-inverse">
            {item.title}
          </h3>

          <p className="mt-2 text-sm font-semibold text-inverse opacity-85">
            ছবি বড় করে দেখতে ক্লিক করুন
          </p>
        </div>
      </div>
    </article>
  );
}

export default function GalleryYearPage() {
  const params = useParams<{ year?: string }>();
  const year = decodeURIComponent(params.year ?? "");
  const displayYear = toBanglaNumber(year);

  const filteredImages = useMemo(() => {
    return photoGalleryImages.filter((item) => String(item.year) === year);
  }, [year]);

  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [zoom, setZoom] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [dragging, setDragging] = useState<boolean>(false);

  const dragStart = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const resetPreview = useCallback(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setDragging(false);
  }, []);

  const openModal = (image: string, title: string) => {
    setSelectedImage({ image, title });
    resetPreview();
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    resetPreview();
  }, [resetPreview]);

  const handleZoomIn = () => {
    setZoom((currentZoom) => Math.min(currentZoom + 0.25, 4));
  };

  const handleZoomOut = () => {
    setZoom((currentZoom) => {
      const nextZoom = Math.max(currentZoom - 0.25, 1);

      if (nextZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }

      return nextZoom;
    });
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    const scaleFactor = event.deltaY < 0 ? 1.15 : 0.85;
    const nextZoom = Math.min(Math.max(zoom * scaleFactor, 1), 4);

    if (nextZoom === 1) {
      setPosition({ x: 0, y: 0 });
    }

    setZoom(nextZoom);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;

    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);

    dragStart.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging || zoom <= 1) return;

    setPosition({
      x: event.clientX - dragStart.current.x,
      y: event.clientY - dragStart.current.y,
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  useEffect(() => {
    if (!selectedImage) return;

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
  }, [selectedImage, closeModal]);

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* উপরের হিরো অংশ */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            ফটো গ্যালারী
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            {displayYear} সালের গ্যালারী
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            এই পেজে {displayYear} সালের বিদ্যালয়ের ছবি, অনুষ্ঠান, ক্যাম্পাস
            কার্যক্রম এবং স্মরণীয় মুহূর্তের গ্যালারী দেখানো হচ্ছে। প্রতিটি
            ছবিতে ক্লিক করলে বড় প্রিভিউ দেখা যাবে।
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
                  গ্যালারী আর্কাইভ
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                  {displayYear} সালের ফটো অ্যালবাম
                </h2>

                <p className="mt-5 max-w-4xl text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                  প্রতিটি ছবিতে ক্লিক করলে বড় প্রিভিউ দেখা যাবে। প্রিভিউ মোডে
                  বড় করা, ছোট করা, মাউস হুইল দিয়ে জুম এবং টেনে ছবি দেখা যাবে।
                  এস্কেপ কী চাপলে প্রিভিউ বন্ধ হবে।
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "ছবির প্রিভিউ",
                    "বড় / ছোট করুন",
                    "মাউস হুইল জুম",
                    "টেনে দেখুন",
                    "এস্কেপে বন্ধ করুন",
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
                    <FaSchoolFlag />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    {displayYear || "বছর"}
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    গ্যালারীর বছর
                  </p>
                </div>

                <div className="rounded-[26px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaImages />
                  </div>

                  <h3 className="mt-5 text-4xl font-black text-primary">
                    {toBanglaNumber(filteredImages.length)}
                  </h3>

                  <p className="mt-2 text-sm font-black text-brand-primary">
                    মোট ছবি
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* গ্যালারীর ছবি */}
          {filteredImages.length > 0 ? (
            <div className="rounded-[30px] border border-soft bg-page-primary p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex flex-col gap-4 border-b border-soft pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary">
                    {displayYear} গ্যালারী
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-primary">
                    ছবি সমূহ
                  </h2>

                  <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                    বিদ্যালয়ের {displayYear} সালের কার্যক্রম, অনুষ্ঠান এবং
                    স্মরণীয় মুহূর্তের ছবিগুলো এখানে দেখতে পারবেন।
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-color-secondary px-5 py-3 text-sm font-black text-brand-primary">
                  <span>{toBanglaNumber(filteredImages.length)}</span>
                  <span>টি ছবি</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredImages.map((item, index) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={() => openModal(item.image, item.title)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-[30px] border border-soft bg-page-primary p-8 text-center shadow-sm sm:p-12 lg:p-20">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-color-secondary text-4xl text-brand-primary shadow-sm">
                <FaCameraRetro />
              </div>

              <h2 className="mt-6 text-2xl font-black text-primary sm:text-3xl">
                কোনো ছবি পাওয়া যায়নি
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-secondary sm:text-base">
                {displayYear} সালের জন্য কোনো গ্যালারী ছবি পাওয়া যায়নি। অন্য
                বছরের গ্যালারী দেখতে গ্যালারীতে ফিরে যান।
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
                  গ্যালারী বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                স্মৃতিময় মুহূর্ত সংরক্ষণে আমাদের ফটো গ্যালারী
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের প্রতিটি অনুষ্ঠান, শিক্ষা কার্যক্রম, সাংস্কৃতিক আয়োজন
                এবং শিক্ষার্থীদের অর্জন আমাদের গ্যালারীতে সংরক্ষণ করা হয়। এই
                গ্যালারী শিক্ষার্থী, অভিভাবক ও দর্শনার্থীদের জন্য বিদ্যালয়ের
                কার্যক্রম জানার একটি সুন্দর মাধ্যম।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaPhotoFilm />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  ফটো আর্কাইভ
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  প্রতিটি ছবির মাধ্যমে বিদ্যালয়ের স্মরণীয় মুহূর্তগুলো আরও
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
              টিপস: ছবির প্রিভিউ মোডে মাউস হুইল দিয়ে জুম, বাটন দিয়ে বড় বা ছোট
              করা, জুম করার পর টেনে দেখা, রিসেট এবং এস্কেপ কী দিয়ে বন্ধ করা
              যাবে।
            </p>
          </div>
        </div>
      </section>

      {/* লাইটবক্স মডাল */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 p-4"
          onClick={closeModal}
        >
          <div
            className="absolute left-4 right-4 top-4 z-50 flex flex-col gap-3 sm:left-5 sm:right-5 sm:flex-row sm:items-center sm:justify-between"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-black text-inverse backdrop-blur-sm">
              {selectedImage.title}
            </div>

            <div className="flex w-fit gap-3 rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur-sm">
              <button
                type="button"
                onClick={handleZoomIn}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-page-primary text-xl text-brand-primary transition hover:bg-color-secondary"
                aria-label="বড় করুন"
              >
                <FaMagnifyingGlassPlus />
              </button>

              <button
                type="button"
                onClick={handleZoomOut}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-page-primary text-xl text-brand-primary transition hover:bg-color-secondary"
                aria-label="ছোট করুন"
              >
                <FaMagnifyingGlassMinus />
              </button>

              <button
                type="button"
                onClick={resetPreview}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-page-primary text-xl text-brand-primary transition hover:bg-color-secondary"
                aria-label="প্রিভিউ রিসেট করুন"
              >
                <FaRotateRight />
              </button>

              <button
                type="button"
                onClick={closeModal}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-color-primary text-xl text-inverse transition hover:opacity-90"
                aria-label="বন্ধ করুন"
              >
                <FaXmark />
              </button>
            </div>
          </div>

          <div
            className={`flex h-full w-full items-center justify-center overflow-hidden pt-28 sm:pt-20 ${
              zoom > 1
                ? "cursor-grab touch-none active:cursor-grabbing"
                : "cursor-zoom-in"
            }`}
            onClick={(event) => event.stopPropagation()}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1200}
              height={800}
              draggable={false}
              className="h-auto max-h-[78vh] w-auto max-w-[92vw] select-none rounded-2xl object-contain shadow-2xl"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                transition: dragging ? "none" : "transform 0.15s ease-out",
              }}
            />
          </div>

          <div
            className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold text-inverse opacity-90 backdrop-blur-sm"
            onClick={(event) => event.stopPropagation()}
          >
            জুম: {toBanglaNumber(Math.round(zoom * 100))}%
          </div>
        </div>
      )}
    </main>
  );
}