"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaArrowRight,
  FaBarsStaggered,
  FaBullhorn,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
} from "react-icons/fa6";

type SliderItem = {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
};

type NoticeCategory = "ALL" | "PSC" | "JSC" | "SSC" | "HSC";

type NoticeItem = {
  id: number;
  day: string;
  month: string;
  title: string;
  category: Exclude<NoticeCategory, "ALL">;
  href: string;
};

const sliders: SliderItem[] = [
  {
    id: 1,
    image: "/assets/Slider1 images/building.jpg",
    alt: "School building",
    title: "আমাদের বিদ্যালয়ে আপনাকে স্বাগতম",
    subtitle: "প্রত্যেক শিক্ষার্থীর জন্য একটি আধুনিক ও যুগোপযোগী শিক্ষার পরিবেশ।",
  },
  {
    id: 2,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "Annual program",
    title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান",
    subtitle: "শিক্ষার্থীদের মেধা, সৃজনশীলতা ও অনন্য অর্জনের একটি আনন্দঘন উদযাপন।",
  },
  {
    id: 3,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "School parade",
    title: "শৃঙ্খলা ও নেতৃত্ব গঠন",
    subtitle: "আত্মবিশ্বাস, নৈতিক মূল্যবোধ এবং ভবিষ্যৎ বিনির্মাণের কারিগর।",
  },
];

const buttons: NoticeCategory[] = ["ALL", "PSC", "JSC", "SSC", "HSC"];

// Transformed month indicators into local Bengali syntax labels
const notices: NoticeItem[] = [
  {
    id: 1,
    day: "০৫",
    month: "অক্টো",
    title: "ফটোকপি মেশিন সরবরাহ কাজের দরপত্র",
    category: "PSC",
    href: "#",
  },
  {
    id: 2,
    day: "০৫",
    month: "অক্টো",
    title: "পরীক্ষাসহ শ্রেণি কার্যক্রম বন্ধ প্রসঙ্গে",
    category: "JSC",
    href: "#",
  },
  {
    id: 3,
    day: "০৫",
    month: "অক্টো",
    title: "বুদ্ধ পূর্ণিমার ছুটির নোটিশ",
    category: "SSC",
    href: "#",
  },
  {
    id: 4,
    day: "০৫",
    month: "অক্টো",
    title: "রমজান মাসের সময়সূচী",
    category: "HSC",
    href: "#",
  },
  {
    id: 5,
    day: "০৫",
    month: "অক্টো",
    title: "ফটোকপি মেশিন সরবরাহ কাজের দরপত্র",
    category: "SSC",
    href: "#",
  },
];

const NoticeCard = ({ notice }: { notice: NoticeItem }) => {
  return (
    <Link
      href={notice.href}
      className="group flex items-center gap-4 rounded-2xl border border-soft bg-page-primary p-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-color-primary hover:border-color-primary hover:shadow-md"
    >
      {/* Refined Calendar Block */}
      <div className="w-[68px] shrink-0 overflow-hidden rounded-xl border border-soft bg-page-secondary shadow-inner">
        <p className="bg-color-primary py-1 text-center text-base font-extrabold text-inverse transition-colors duration-300 group-hover:bg-color-secondary group-hover:text-primary">
          {notice.day}
        </p>
        <p className="py-1 text-center text-xs font-bold text-secondary transition-colors duration-300 group-hover:text-inverse/90">
          {notice.month}
        </p>
      </div>

      {/* Notice Title Content */}
      <div className="flex min-w-0 flex-1 flex-col pr-1">
        <p className="line-clamp-2 text-sm font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-inverse sm:text-base">
          {notice.title}
        </p>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary transition-all duration-300 group-hover:translate-x-1 group-hover:text-inverse/90">
          নোটিশটি দেখুন
          <FaArrowRight className="text-[10px]" />
        </p>
      </div>
    </Link>
  );
};

const HeroNoticeSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selected, setSelected] = useState<NoticeCategory>("ALL");

  const filteredNotices = useMemo(() => {
    if (selected === "ALL") return notices;
    return notices.filter((notice) => notice.category === selected);
  }, [selected]);

  return (
    <section className="relative overflow-hidden bg-page-secondary px-4 py-8 font-main text-primary sm:px-6 lg:px-8 lg:py-16">
      {/* Decorative Blur Background Graphics */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-color-primary opacity-[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-color-secondary opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 gap-8 xl:grid-cols-12">
        
        {/* Left Hero Image Carousel Section */}
        <div className="xl:col-span-7">
          <div className="group relative h-full overflow-hidden rounded-[2rem] border border-soft bg-page-primary p-2 shadow-sm transition-shadow duration-500 hover:shadow-xl">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={0}
              centeredSlides={true}
              loop={true}
              speed={1000}
              grabCursor={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Autoplay, Pagination]}
              className="slider-one-swiper h-full w-full overflow-hidden rounded-[1.75rem]"
            >
              {sliders.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-[340px] w-full overflow-hidden bg-page-secondary sm:h-[460px] md:h-[520px] lg:h-[580px] xl:h-[640px]">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1280px) 100vw, 900px"
                      className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />

                    {/* Gradient Screen Masks */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/20 to-transparent" />

                    {/* Floating Info Tag */}
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-inverse backdrop-blur-md">
                      <FaGraduationCap className="text-sm" />
                      স্কুল ক্যাম্পাস
                    </div>

                    {/* Captions Text Elements Container */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 pb-12 sm:pb-14">
                      <h2 className="max-w-3xl text-2xl font-extrabold leading-tight text-inverse sm:text-4xl lg:text-5xl">
                        {slide.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-inverse/85 sm:text-base">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Micro Nav Controls (Hidden gracefully on small layouts) */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
              className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-inverse opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:scale-105 hover:bg-color-secondary hover:text-primary md:flex h-12 w-12"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
              className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-inverse opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:scale-105 hover:bg-color-secondary hover:text-primary md:flex h-12 w-12"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right Dynamic Notice Board Component */}
        <div className="xl:col-span-5">
          <div className="flex h-full flex-col justify-between rounded-[2rem] border border-soft bg-page-primary p-5 shadow-sm transition-shadow duration-500 hover:shadow-xl sm:p-6 lg:p-8">
            <div>
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-secondary px-4 py-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-color-secondary"></span>
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
                      সর্বশেষ আপডেট
                    </p>
                  </div>

                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                    নোটিশ বোর্ড
                  </h2>

                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="h-[4px] w-14 rounded-full bg-color-primary" />
                    <span className="h-[4px] w-5 rounded-full bg-color-secondary" />
                  </div>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-color-secondary text-2xl text-primary shadow-md">
                  <FaBullhorn />
                </div>
              </div>

              {/* Categorization Controls Grid */}
              <div className="mb-6 flex flex-wrap gap-2">
                {buttons.map((button) => {
                  const isActive = selected === button;
                  
                  // Friendly local language representation logic
                  const labelMap: Record<NoticeCategory, string> = {
                    ALL: "সব নোটিশ",
                    PSC: "পিএসসি",
                    JSC: "জেএসসি",
                    SSC: "এসএসসি",
                    HSC: "এইচএসসি"
                  };

                  return (
                    <button
                      type="button"
                      onClick={() => setSelected(button)}
                      key={button}
                      className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 ease-out hover:bg-color-primary hover:text-inverse ${
                        isActive
                          ? "border-color-primary bg-color-primary text-inverse shadow-sm"
                          : "border-soft bg-page-secondary text-primary"
                      }`}
                    >
                      {labelMap[button]}
                    </button>
                  );
                })}
              </div>

              {/* Swiper Swapping Canvas Container */}
              <div className="rounded-2xl border border-soft bg-page-secondary p-3">
                <Swiper
                  direction="vertical"
                  spaceBetween={10}
                  slidesPerView={3}
                  loop={filteredNotices.length > 3}
                  speed={600}
                  grabCursor={true}
                  mousewheel={{ forceToAxis: true }}
                  autoplay={{
                    delay: 3800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 3, spaceBetween: 10 },
                    1024: { slidesPerView: 4, spaceBetween: 10 },
                  }}
                  modules={[Autoplay, Pagination, Mousewheel]}
                  className="notice-board-swiper h-[320px] sm:h-[340px] md:h-[360px] lg:h-[400px] xl:h-[420px]"
                >
                  {filteredNotices.map((notice) => (
                    <SwiperSlide key={`${notice.id}-${selected}`}>
                      <NoticeCard notice={notice} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Master Action Directory Link */}
            <Link
              href="#"
              className="group mt-6 flex items-center justify-between rounded-2xl border border-soft bg-color-primary p-4.5 text-inverse transition-all duration-300 hover:bg-color-secondary hover:text-primary hover:shadow-md"
            >
           <Link href="/notices">
  <div className="flex items-center gap-3 transition hover:text-brand-primary">
    <FaBarsStaggered className="text-sm" />
    <span className="text-sm font-bold">সকল নোটিশ দেখুন</span>
  </div>
</Link>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroNoticeSection;