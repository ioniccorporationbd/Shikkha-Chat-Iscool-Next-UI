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
    alt: "Building",
  },
  {
    id: 2,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "Annual",
  },
  {
    id: 3,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "Parade",
  },
  {
    id: 4,
    image: "/assets/Slider1 images/building.jpg",
    alt: "Building",
  },
  {
    id: 5,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "Annual",
  },
  {
    id: 6,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "Parade",
  },
];

const SliderGallery = () => {
  return (
    <section className="relative overflow-hidden bg-page-secondary px-4 py-12 font-main text-primary sm:px-6 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-color-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-color-secondary opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-primary px-4 py-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-color-secondary text-primary">
              <FaImages className="text-sm" />
            </span>

            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">
              Campus Moments
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight text-primary sm:text-4xl">
            Photo Gallery
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-secondary sm:text-base">
            Explore memorable moments, campus life and institutional activities
            through our gallery.
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-16 rounded-full bg-color-primary" />
            <span className="h-1 w-7 rounded-full bg-color-secondary" />
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-soft bg-page-primary p-3 shadow-sm sm:p-4 lg:p-5">
          <Swiper
            freeMode={true}
            loop={true}
            speed={900}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 18,
              },
              1024: {
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
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="gallery-swiper"
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative overflow-hidden rounded-[26px] border border-soft bg-page-secondary shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-[260px] w-full overflow-hidden sm:h-[300px] lg:h-[340px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-color-primary/10 transition-all duration-700 group-hover:bg-color-primary/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-90" />

                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-inverse opacity-0 backdrop-blur-md transition-all duration-700 group-hover:opacity-100">
                      <FaCameraRetro />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 translate-y-5 rounded-[18px] border border-white/20 bg-white/10 p-4 opacity-0 backdrop-blur-md transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-black text-inverse">
                        {item.alt}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-inverse/80">
                        Viqarunnisa Noon School & College
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