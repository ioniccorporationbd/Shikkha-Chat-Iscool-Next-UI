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
    title: "Welcome to Our School",
    subtitle: "A modern learning environment for every student.",
  },
  {
    id: 2,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "Annual program",
    title: "Annual Cultural Program",
    subtitle: "Celebrating talent, creativity and student achievement.",
  },
  {
    id: 3,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "School parade",
    title: "Discipline & Leadership",
    subtitle: "Building confidence, values and future-ready citizens.",
  },
];

const buttons: NoticeCategory[] = ["ALL", "PSC", "JSC", "SSC", "HSC"];

const notices: NoticeItem[] = [
  {
    id: 1,
    day: "05",
    month: "oct",
    title: "ফটোকপি মেশিন সরবরাহ কাজের দরপত্র",
    category: "PSC",
    href: "#",
  },
  {
    id: 2,
    day: "05",
    month: "oct",
    title: "পরীক্ষাসহ শ্রেণি কার্যক্রম বন্ধ প্রসঙ্গে",
    category: "JSC",
    href: "#",
  },
  {
    id: 3,
    day: "05",
    month: "oct",
    title: "বুদ্ধ পূর্ণিমার ছুটির নোটিশ",
    category: "SSC",
    href: "#",
  },
  {
    id: 4,
    day: "05",
    month: "oct",
    title: "রমজান মাসের সময়সূচী",
    category: "HSC",
    href: "#",
  },
  {
    id: 5,
    day: "05",
    month: "oct",
    title: "ফটোকপি মেশিন সরবরাহ কাজের দরপত্র",
    category: "SSC",
    href: "#",
  },
];

const NoticeCard = ({ notice }: { notice: NoticeItem }) => {
  return (
    <Link
      href={notice.href}
      className="group flex min-h-[86px] gap-3 rounded-[18px] border border-soft bg-page-primary p-3 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-lg"
    >
      <div className="w-[66px] shrink-0 overflow-hidden rounded-[14px] border border-soft bg-page-secondary">
        <p className="bg-color-primary py-1.5 text-center text-base font-black text-inverse transition-colors duration-500 group-hover:bg-color-secondary group-hover:text-primary">
          {notice.day}
        </p>

        <p className="py-1.5 text-center text-sm font-black uppercase text-secondary transition-colors duration-500 group-hover:text-inverse">
          {notice.month}
        </p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="line-clamp-2 text-sm font-black leading-6 text-primary transition-colors duration-500 group-hover:text-inverse sm:text-base">
          {notice.title}
        </p>

        <p className="mt-1 flex items-center gap-2 text-xs font-bold text-brand-primary transition-all duration-500 group-hover:translate-x-1 group-hover:text-inverse">
          View Notice
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
    <section className="relative overflow-hidden bg-page-secondary px-4 py-8 font-main text-primary sm:px-6 lg:px-8 lg:py-12">
      <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-color-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-color-secondary opacity-25 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Left Image Slider */}
        <div className="xl:col-span-7">
          <div className="group relative h-full overflow-hidden rounded-[30px] border border-soft bg-page-primary p-2 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl">
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
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="slider-one-swiper h-full w-full overflow-hidden rounded-[24px]"
            >
              {sliders.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-[310px] w-full overflow-hidden bg-page-secondary sm:h-[430px] lg:h-[560px] xl:h-[620px]">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1280px) 100vw, 900px"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-color-primary/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-90" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-inverse backdrop-blur-md sm:left-6 sm:top-6">
                      <FaGraduationCap />
                      School Campus
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-9">
                      <h2 className="max-w-2xl text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                        {slide.title}
                      </h2>

                      <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-inverse/90 sm:text-base">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
              className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-inverse shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-color-secondary hover:text-primary active:scale-95 sm:h-12 sm:w-12"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
              className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-inverse shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-color-secondary hover:text-primary active:scale-95 sm:h-12 sm:w-12"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right Notice Board */}
        <div className="xl:col-span-5">
          <div className="h-full rounded-[30px] border border-soft bg-page-primary p-4 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-5 lg:p-6">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-secondary px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-color-secondary" />
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">
                    Latest Update
                  </p>
                </div>

                <h2 className="mt-4 text-3xl font-black leading-tight text-primary sm:text-4xl">
                  Notice Board
                </h2>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1 w-16 rounded-full bg-color-primary" />
                  <span className="h-1 w-7 rounded-full bg-color-secondary" />
                </div>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-primary">
                <FaBullhorn />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="mb-5 flex flex-wrap gap-2">
              {buttons.map((button) => {
                const isActive = selected === button;

                return (
                  <button
                    type="button"
                    onClick={() => setSelected(button)}
                    key={button}
                    className={`rounded-full border px-4 py-2 text-sm font-black transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-color-primary hover:text-inverse hover:shadow-md ${
                      isActive
                        ? "border-color-primary bg-color-primary text-inverse shadow-sm"
                        : "border-soft bg-page-secondary text-primary"
                    }`}
                  >
                    {button}
                  </button>
                );
              })}
            </div>

            {/* Notice Vertical Slider */}
            <div className="rounded-[24px] border border-soft bg-page-secondary p-3">
              <Swiper
                direction="vertical"
                spaceBetween={12}
                slidesPerView={3}
                loop={filteredNotices.length > 3}
                speed={800}
                grabCursor={true}
                mousewheel={{
                  forceToAxis: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 12,
                  },
                }}
                modules={[Autoplay, Pagination, Mousewheel]}
                className="notice-board-swiper h-[310px] sm:h-[335px] lg:h-[420px]"
              >
                {filteredNotices.map((notice) => (
                  <SwiperSlide key={`${notice.id}-${selected}`}>
                    <NoticeCard notice={notice} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Only Notice Button */}
            <Link
              href="#"
              className="group mt-5 flex items-center justify-between rounded-[18px] border border-soft bg-color-primary p-4 text-inverse transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <FaBarsStaggered />
                <span className="text-sm font-black">সকল নোটিশ দেখুন</span>
              </div>

              <FaArrowRight className="text-xs transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNoticeSection;