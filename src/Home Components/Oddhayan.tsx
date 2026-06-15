import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaQuoteLeft, FaUserTie } from "react-icons/fa6";

const chairmanImage = "/assets/oddhayan imagea/Tanvir Ahmed.jpeg";
const principalImage = "/assets/oddhayan imagea/Mazeda Begum.png";

type ProfileCardProps = {
  image: string;
  name: string;
  designation: string;
};

const ProfileCard = ({ image, name, designation }: ProfileCardProps) => {
  return (
    <div className="group overflow-hidden rounded-[24px] border border-soft bg-page-primary p-4 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl">
      
      {/* Updated to match the beautiful responsive aspect-ratio setup from GoverningBody */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] border border-soft bg-page-secondary sm:aspect-[3/4] md:aspect-[4/5]">
        <Image
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          width={420}
          height={520}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
        />
      </div>

      <div className="px-2 py-5">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-color-secondary text-xl text-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
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
    <section className="relative overflow-hidden bg-page-secondary px-4 py-10 font-main text-primary sm:px-6 lg:px-8 lg:py-14">
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-color-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-16 h-80 w-80 rounded-full bg-color-secondary opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
            About Institution
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
            Viqarunnisa Noon School & College
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-16 rounded-full bg-color-primary" />
            <span className="h-1 w-7 rounded-full bg-color-secondary" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="h-full rounded-[28px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:p-8">
              <div className="rounded-[24px] border border-soft bg-page-secondary p-5 sm:p-7">
                <FaQuoteLeft className="mb-4 text-3xl text-brand-primary" />

                <p className="text-justify text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                  Viqarunnisa Noon School & College is an all-girls educational
                  institute in Baily Road, Dhaka, Bangladesh. It has 4 campuses
                  and around 25,000 students. Viqarunnisa Noon School & College
                  is one of the renowned educational institutes in Bangladesh.
                  We consider every child as unique and so we maintain inclusive
                  learning-teaching environment at every step in our great
                  set-up. It is a fact now that our results are getting better
                  in the public examinations every time. It has been made
                  possible through our extensive and effective care stretched out
                  to every individual student. Our students conglomerate here
                  from multifarious backgrounds; various strata of the society.
                  They enter the threshold of our strong and fortified home of
                  learning and come out bearing an all-round personality.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-soft bg-page-secondary p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-black text-primary">
                    Tanvir Ahmed
                  </p>

                  <p className="mt-1 text-sm font-semibold text-secondary">
                    Chairman, Viqarunnisa Noon School & College
                  </p>
                </div>

                <Link
                  href="/message-from-chairman"
                  className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-color-primary px-5 py-3 text-sm font-black text-inverse shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-color-secondary hover:text-primary hover:shadow-lg"
                >
                  Read Message
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ProfileCard
                image={chairmanImage}
                name="Tanvir Ahmed"
                designation="Chairman, Viqarunnisa Noon School & College"
              />

              <ProfileCard
                image={principalImage}
                name="Mazeda Begum"
                designation="Principal (Acting), Viqarunnisa Noon School & College"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oddhayan;