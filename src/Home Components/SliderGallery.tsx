"use client";

import Image from "next/image";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCameraRetro, FaImages } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

type GalleryItem = {
  id: number;
  image: string;
  alt: string;
};

const galleryImages: GalleryItem[] = [
  {
    id: 1,
    image: "/assets/Slider1 images/building.jpg",
    alt: "আমাদের ক্যাম্পাস ভবন",
  },
  {
    id: 2,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
  },
  {
    id: 3,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "কুচকাওয়াজ ও শৃঙ্খলা প্রদর্শন",
  },
  {
    id: 4,
    image: "/assets/Slider1 images/building.jpg",
    alt: "আধুনিক বিজ্ঞান ল্যাব",
  },
  {
    id: 5,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "সাংস্কৃতিক অনুষ্ঠানমঞ্চ",
  },
  {
    id: 6,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "স্কাউট সমাবেশ ও প্যারেড",
  },
];

const SliderGallery = () => {
  return (
    <section className="relative overflow-hidden bg-page-secondary px-4 py-12 font-main text-primary sm:px-6 lg:px-8 lg:py-16">
      {/* Background Decorative Blur Gradients */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-color-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-color-secondary opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        
        {/* Header Heading Container */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-primary px-4 py-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-color-secondary text-primary shadow-sm">
              <FaImages className="text-sm" />
            </span>

            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">
              ক্যাম্পাস মুহূর্তসমূহ
            </p>
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-primary sm:text-3xl md:text-4xl">
            ফটো গ্যালারি
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-secondary sm:text-base">
            আমাদের গ্যালারির মাধ্যমে ক্যাম্পাসের রঙিন জীবন, চমৎকার মুহূর্ত এবং প্রাতিষ্ঠানিক বিভিন্ন কার্যক্রমের স্মৃতিগুলো দেখে নিন।
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-16 rounded-full bg-color-primary" />
            <span className="h-1 w-7 rounded-full bg-color-secondary" />
          </div>
        </div>

        {/* Carousel Slider Card Canvas */}
        <div className="overflow-hidden rounded-[32px] border border-soft bg-page-primary p-3 shadow-sm sm:p-4 lg:p-5">
          <Swiper
            freeMode={true}
            loop={true}
            speed={900}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1.15, // Allows minor peek exposure of next slide on mobile viewports
                slidesPerGroup: 1,
                spaceBetween: 14,
              },
              480: {
                slidesPerView: 1.4,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 18,
              },
              960: {
                slidesPerView: 2.5,
                slidesPerGroup: 1,
                spaceBetween: 18,
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="gallery-swiper"
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item.id} className="pb-10"> {/* Extra padding prevents dot layout overlap */}
                <div className="group relative overflow-hidden rounded-[26px] border border-soft bg-page-secondary shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-[250px] w-full overflow-hidden sm:h-[280px] md:h-[310px] lg:h-[340px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />

                    {/* Dark Mask Overlays */}
                    <div className="absolute inset-0 bg-color-primary/10 transition-all duration-500 group-hover:bg-color-primary/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Action Icon Pill */}
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-inverse opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                      <FaCameraRetro className="text-sm" />
                    </div>

                    {/* Meta Slide Details Box */}
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 rounded-[18px] border border-white/20 bg-white/10 p-4 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-black text-inverse leading-tight">
                        {item.alt}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-inverse/85">
                        ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default SliderGallery;