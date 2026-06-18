import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

type SocialLinks = {
  facebook?: string;
  linkedin?: string;
  whatsapp?: string;
};

type GoverningMember = {
  name: string;
  designation: string;
  image: string;
  alt: string;
  socials?: SocialLinks;
};

type PaymentMethod = {
  name: string;
  image: string;
};

const governingMembers: GoverningMember[] = [
  {
    name: "Siddiqui Nasir Uddin",
    designation: "অভিভাবক প্রতিনিধি (কলেজ)",
    image: "/assets/body%20images/Siddique%20Nasir.jpg",
    alt: "Siddiqui Nasir Uddin",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "Md. Ohaduj Zaman Montu",
    designation: "অভিভাবক প্রতিনিধি (কলেজ)",
    image: "/assets/body%20images/Md.%20Ohaduj%20Zaman.jpg",
    alt: "Md. Ohaduj Zaman Montu",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "Dr. Tajul Islam",
    designation: "অভিভাবক প্রতিনিধি (মাধ্যমিক)",
    image: "/assets/body%20images/Dr.%20Tajul%20Islam.png",
    alt: "Dr. Tajul Islam",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "Anwar Kabir Bhuiya (Pulok)",
    designation: "অভিভাবক প্রতিনিধি (কলেজ)",
    image: "/assets/body%20images/Anower%20Kabir.jpg",
    alt: "Anwar Kabir Bhuiya Pulok",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "Ghulam Benazir Polash",
    designation: "অভিভাবক প্রতিনিধি (প্রাথমিক)",
    image: "/assets/body%20images/Golam%20Benzir.jpg",
    alt: "Ghulam Benazir Polash",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "Mausumi Khan",
    designation: "অভিভাবক প্রতিনিধি (সংরক্ষিত মহিলা)",
    image: "/assets/body%20images/Moushmi%20Khan.jpg",
    alt: "Mausumi Khan",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "Md. Abdur Razzaque Akando",
    designation: "শিক্ষক প্রতিনিধি (বিদ্যালয়)",
    image: "/assets/body%20images/Abdur%20Razzak.jpg",
    alt: "Md. Abdur Razzaque Akando",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
  {
    name: "Chand Sultana",
    designation: "শিক্ষক প্রতিনিধি (সংরক্ষিত মহিলা)",
    image: "/assets/body%20images/Chaad%20Sultana.jpg",
    alt: "Chand Sultana",
    socials: { facebook: "#", linkedin: "#", whatsapp: "#" },
  },
];

const paymentMethods: PaymentMethod[] = [
  { name: "bKash", image: "/assets/images/bkash.png" },
  { name: "Rocket", image: "/assets/images/rocket%20.png" },
  { name: "DBBL", image: "/assets/images/dbbl%20.jpg" },
  { name: "Sonali Bank", image: "/assets/images/Sonali-Bank-logo-.png" },
];

const mobile = "/assets/images/mobileNexus%20.png";
const odhayanLogo = "/assets/images/logo-mane.png";

function SocialIcon({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href || "#"}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-soft bg-page-secondary text-sm text-brand-primary shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-md"
    >
      {children}
    </Link>
  );
}

function GoverningMemberCard({ member }: { member: GoverningMember }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-soft bg-page-primary shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
      {/* Dynamic colored top accent border */}
      <div className="absolute left-0 top-0 h-[5px] w-full bg-color-primary transition-all duration-500 group-hover:bg-color-secondary z-20" />

      {/* Image container with refined fluid constraints */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-page-secondary">
        <Image
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          src={member.image}
          alt={member.alt}
          width={400}
          height={500}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority
        />

        {/* Hover overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-[var(--color-primary)]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Floating Social Panel */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <SocialIcon href={member.socials?.facebook} label="Facebook">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href={member.socials?.linkedin} label="LinkedIn">
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon href={member.socials?.whatsapp} label="WhatsApp">
            <FaWhatsapp />
          </SocialIcon>
        </div>
      </div>

      {/* Card Information Context */}
      <div className="flex flex-grow flex-col justify-between p-5 text-center">
        <div>
          <h3 className="text-lg font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-brand-primary">
            {member.name}
          </h3>
          <div className="mx-auto my-3 h-[3px] w-10 rounded-full bg-color-secondary transition-all duration-500 group-hover:w-20 group-hover:bg-color-primary" />
        </div>
        <p className="text-sm font-medium leading-relaxed text-secondary min-h-[40px] flex items-center justify-center">
          {member.designation}
        </p>
      </div>
    </div>
  );
}

function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <div className="group flex h-[100px] items-center justify-center rounded-xl border border-soft bg-page-primary p-4 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-primary hover:shadow-lg">
      <div className="relative h-full w-full max-w-[160px] transition-transform duration-500 group-hover:scale-105">
        <Image
          className="object-contain"
          src={method.image}
          alt={method.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
        />
      </div>
    </div>
  );
}

export default function GoverningBody() {
  return (
    <main className="bg-page-secondary font-main text-primary antialiased selection:bg-color-primary selection:text-inverse">
      
      {/* Governing Body Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 xl:py-24">
        {/* Soft Background Blur Ambiences */}
        <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-color-primary opacity-[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-color-secondary opacity-20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Section Header */}
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl md:text-4xl">
              পরিচালনা পর্ষদ
            </h2>
            <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-color-primary sm:mx-0" />
          </div>

          {/* Fully Fluid Members Display Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {governingMembers.map((member) => (
              <GoverningMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Procedure Section */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 xl:pb-24">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl border border-soft bg-page-primary shadow-md transition-shadow duration-500 hover:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
            
            {/* Left Payment Logos Column */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-5 xl:p-12">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {paymentMethods.map((method) => (
                  <PaymentCard key={method.name} method={method} />
                ))}
              </div>
            </div>

            {/* Right Information Feature Banner */}
            <div className="relative flex flex-col justify-center overflow-hidden bg-color-primary p-8 sm:p-12 lg:col-span-7 xl:p-16">
              {/* Internal Dynamic Blurs */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-color-secondary opacity-25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-page-primary opacity-15 blur-3xl" />

              <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                
                {/* Visual Phone Asset with responsive ordering */}
                <div className="order-2 flex justify-center md:order-1 md:col-span-5">
                  <div className="inline-block rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src={mobile}
                      alt="Mobile Nexus"
                      width={260}
                      height={480}
                      className="h-auto max-h-[380px] w-auto object-contain xl:max-h-[440px]"
                    />
                  </div>
                </div>

                {/* Content Area */}
                <div className="order-1 text-center md:order-2 md:col-span-7 md:text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-color-secondary">
                    প্যারেন্টস পোর্টাল
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-inverse sm:text-3xl xl:text-4xl">
                    প্যারেন্টস পোর্টালের মাধ্যমে যেকোনো ফি প্রদান করুন
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-relaxed text-inverse/80">
                    একটিমাত্র ডিজিটাল প্ল্যাটফর্ম থেকেই ফি প্রদান, শিক্ষার্থীর তথ্য এবং প্রাতিষ্ঠানিক সকল সেবা সহজেই উপভোগ করুন।
                  </p>

                  <div className="mt-6 inline-flex rounded-2xl bg-page-primary p-3 shadow-inner">
                    <Image
                      src={odhayanLogo}
                      alt="Oddhoyan Logo"
                      width={160}
                      height={80}
                      className="h-auto w-[150px] object-contain"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl bg-color-secondary px-6 py-3.5 text-sm font-bold text-primary shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-page-primary hover:shadow-xl active:translate-y-0"
                    >
                      বিস্তারিত দেখুন
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}