"use client";

import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

type CourseItem = {
  id: number;
  title: string;
  image: string;
};

type ActivityItem = {
  id: number;
  title: string;
  image: string;
};

const sectionBgImage = "/assets/Courses images/courses-bg.jpg";

const courses: CourseItem[] = [
  {
    id: 1,
    title: "PSC",
    image: "/assets/Courses images/book-1.png",
  },
  {
    id: 2,
    title: "Class 6",
    image: "/assets/Courses images/book-2.png",
  },
  {
    id: 3,
    title: "Class 7",
    image: "/assets/Courses images/book-3.png",
  },
  {
    id: 4,
    title: "JSC",
    image: "/assets/Courses images/book-2.png",
  },
  {
    id: 5,
    title: "SSC",
    image: "/assets/Courses images/book-1.png",
  },
  {
    id: 6,
    title: "HSC",
    image: "/assets/Courses images/book-3.png",
  },
];

const activities: ActivityItem[] = [
  {
    id: 1,
    title: "Cultural Department",
    image: "/assets/Courses images/Cultural .png",
  },
  {
    id: 2,
    title: "Ict Department",
    image: "/assets/Courses images/Ict Department.png",
  },
  {
    id: 3,
    title: "Student Development",
    image: "/assets/Courses images/Student Development.png",
  },
  {
    id: 4,
    title: "Higher Education",
    image: "/assets/Courses images/Higher Education.png",
  },
  {
    id: 5,
    title: "Blood Bank",
    image: "/assets/Courses images/Blood Bank.png",
  },
  {
    id: 6,
    title: "Our Achievement",
    image: "/assets/Courses images/Our Achievement.png",
  },
];

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="mb-8 text-center font-main">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
        Explore
      </p>

      <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-secondary sm:text-base">
          {subtitle}
        </p>
      )}

      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-1 w-16 rounded-full bg-color-primary" />
        <span className="h-1 w-7 rounded-full bg-color-secondary" />
      </div>
    </div>
  );
};

const CourseCard = ({ course }: { course: CourseItem }) => {
  return (
    <div className="group relative h-[285px] overflow-hidden rounded-[26px] border border-soft bg-color-primary p-4 text-center font-main shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-color-secondary opacity-30 blur-2xl transition-all duration-700 group-hover:scale-150" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-page-primary opacity-10 blur-2xl" />

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="pt-2 text-3xl font-black leading-none text-inverse">
          {course.title}
        </h3>

        <button
          type="button"
          className="mx-auto mt-5 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-black text-inverse backdrop-blur-md transition-all duration-500 hover:bg-color-secondary hover:text-primary"
        >
          বিস্তারিত
        </button>

        <div className="mt-auto flex h-[145px] w-full items-center justify-center rounded-[22px] border border-white/20 bg-color-secondary p-5 transition-all duration-700 group-hover:bg-page-primary">
          <Image
            src={course.image}
            alt={course.title}
            width={150}
            height={150}
            className="h-[100px] w-auto object-contain transition-transform duration-700 group-hover:scale-110"
            priority={course.id <= 4}
          />
        </div>
      </div>
    </div>
  );
};

const ActivityCard = ({ activity }: { activity: ActivityItem }) => {
  return (
    <div className="group relative flex min-h-[190px] w-full flex-col items-center justify-center overflow-hidden rounded-[24px] border border-soft bg-page-primary p-5 text-center font-main shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:bg-color-primary hover:text-inverse hover:shadow-xl">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-color-secondary opacity-20 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-30" />

      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[22px] bg-page-secondary p-4 transition-all duration-700 group-hover:bg-color-secondary">
        <Image
          src={activity.image}
          alt={activity.title}
          width={80}
          height={80}
          className="h-14 w-14 object-contain transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <h3 className="relative z-10 mt-5 text-lg font-black leading-tight text-primary transition-colors duration-700 group-hover:text-inverse sm:text-xl">
        {activity.title}
      </h3>
    </div>
  );
};

const Courses = () => {
  return (
    <section className="relative w-full overflow-hidden bg-page-secondary px-4 py-12 font-main text-primary sm:px-6 lg:px-8 lg:py-16">
      <Image
        src={sectionBgImage}
        alt="Courses background"
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-10"
      />

      <div className="absolute inset-0 bg-page-secondary/90" />
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-color-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-color-secondary opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <SectionHeading
          title="Our Courses for Students"
          subtitle="Explore our academic programs designed for students at every important learning stage."
        />

        <div className="rounded-[32px] border border-soft bg-page-primary/80 p-4 shadow-sm backdrop-blur-md sm:p-5 lg:p-6">
          <Swiper
            freeMode={true}
            loop={true}
            speed={850}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
            }}
            modules={[Autoplay, FreeMode]}
            className="courses-swiper"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-14">
          <SectionHeading
            title="Others Activities"
            subtitle="Our activities support student creativity, confidence, leadership and social responsibility."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;