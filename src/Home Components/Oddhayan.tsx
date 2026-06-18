import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaQuoteLeft, FaUserTie } from "react-icons/fa6";

const chairmanImage = "/assets/images/managing-director.avif";
const principalImage = "/assets/images/managing-director.avif";

type ProfileCardProps = {
  image: string;
  name: string;
  designation: string;
};

const ProfileCard = ({ image, name, designation }: ProfileCardProps) => {
  return (
    <div className="group h-full overflow-hidden rounded-[28px] border border-soft bg-page-primary p-4 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl sm:p-5">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] border border-soft bg-page-secondary">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="px-2 py-5">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-color-secondary text-xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
          <FaUserTie />
        </div>

        <h3 className="text-xl font-black leading-tight text-primary">
          {name}
        </h3>

        <div className="mx-auto my-3 h-[3px] w-12 rounded-full bg-color-secondary transition-all duration-500 group-hover:w-20 group-hover:bg-color-primary" />

        <p className="text-sm font-semibold leading-6 text-secondary">
          {designation}
        </p>
      </div>
    </div>
  );
};

const Oddhayan = () => {
  return (
    <section className="relative overflow-hidden bg-page-secondary px-4 py-10 font-main text-primary sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-color-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-16 h-80 w-80 rounded-full bg-color-secondary opacity-40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
            প্রতিষ্ঠান পরিচিতি
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl lg:text-5xl">
            ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-16 rounded-full bg-color-primary" />
            <span className="h-1 w-7 rounded-full bg-color-secondary" />
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-semibold leading-7 text-secondary sm:text-base">
            মানসম্মত শিক্ষা, শৃঙ্খলা, মূল্যবোধ ও শিক্ষার্থীদের সামগ্রিক বিকাশে
            আমাদের প্রতিষ্ঠান প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="h-full rounded-[30px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:p-8">
              <div className="rounded-[26px] border border-soft bg-page-secondary p-5 sm:p-7">
                <FaQuoteLeft className="mb-4 text-3xl text-brand-primary" />

                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ বাংলাদেশের ঢাকার বেইলি
                  রোডে অবস্থিত একটি স্বনামধন্য শিক্ষাপ্রতিষ্ঠান। প্রতিষ্ঠানটি
                  দীর্ঘদিন ধরে মানসম্মত শিক্ষা, শৃঙ্খলা, নৈতিকতা এবং
                  শিক্ষার্থীদের বহুমাত্রিক বিকাশে গুরুত্বপূর্ণ ভূমিকা পালন করে
                  আসছে। প্রতিটি শিক্ষার্থীকে আমরা আলাদা প্রতিভা ও সম্ভাবনার
                  অধিকারী হিসেবে বিবেচনা করি। তাই শ্রেণিকক্ষের পাঠদান,
                  সহশিক্ষা কার্যক্রম, মূল্যায়ন ও ব্যক্তিত্ব গঠনের প্রতিটি ধাপে
                  আমরা শিক্ষার্থীবান্ধব পরিবেশ নিশ্চিত করার চেষ্টা করি।
                  শিক্ষকদের আন্তরিক দিকনির্দেশনা, অভিভাবকদের সহযোগিতা এবং
                  শিক্ষার্থীদের অধ্যবসায়ের মাধ্যমে প্রতিষ্ঠানটি ধারাবাহিকভাবে
                  সফলতার পথে এগিয়ে যাচ্ছে।
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 rounded-[24px] border border-soft bg-page-secondary p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-black text-primary">
                    তানভীর আহমেদ
                  </p>

                  <p className="mt-1 text-sm font-semibold text-secondary">
                    চেয়ারম্যান, ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ
                  </p>
                </div>

                <Link
                  href="/message-from-chairman"
                  className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-color-primary px-5 py-3 text-sm font-black text-inverse shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-lg"
                >
                  বাণী পড়ুন
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ProfileCard
                image={chairmanImage}
                name="তানভীর আহমেদ"
                designation="চেয়ারম্যান, ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ"
              />

              <ProfileCard
                image={principalImage}
                name="মাজেদা বেগম"
                designation="অধ্যক্ষ (ভারপ্রাপ্ত), ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oddhayan;