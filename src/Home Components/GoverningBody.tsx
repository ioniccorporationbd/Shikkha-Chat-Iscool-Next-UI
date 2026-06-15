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
    designation: "Guardians’ Representative (College)",
    image: "/assets/body%20images/Siddique%20Nasir.jpg",
    alt: "Siddiqui Nasir Uddin",
    socials: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Md. Ohaduj Zaman Montu",
    designation: "Guardians’ Representative (College)",
    image: "/assets/body%20images/Md.%20Ohaduj%20Zaman.jpg",
    alt: "Md. Ohaduj Zaman Montu",
    socials: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Dr. Tajul Islam",
    designation: "Guardians’ Representative (Secondary)",
    image: "/assets/body%20images/Dr.%20Tajul%20Islam.png",
    alt: "Dr. Tajul Islam",
    socials: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Anwar Kabir Bhuiya (Pulok)",
    designation: "Guardians’ Representative (College)",
    image: "/assets/body%20images/Anower%20Kabir.jpg",
    alt: "Anwar Kabir Bhuiya Pulok",
    socials: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Ghulam Benazir Polash",
    designation: "Guardians’ Representative (Primary)",
    image: "/assets/body%20images/Golam%20Benzir.jpg",
    alt: "Ghulam Benazir Polash",
    socials: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Mausumi Khan",
    designation: "Guardians’ Representative (Reserved Female)",
    image: "/assets/body%20images/Moushmi%20Khan.jpg",
    alt: "Mausumi Khan",
    socials: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Md. Abdur Razzaque Akando",
    designation: "Teachers’ Representative (School)",
    image: "/assets/body%20images/Abdur%20Razzak.jpg",
    alt: "Md. Abdur Razzaque Akando",
    socials: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Chand Sultana",
    designation: "Teachers’ Representative (Reserved Female)",
    image: "/assets/body%20images/Chaad%20Sultana.jpg",
    alt: "Chand Sultana",
    socials: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    name: "bKash",
    image: "/assets/images/bkash.png",
  },
  {
    name: "Rocket",
    image: "/assets/images/rocket%20.png",
  },
  {
    name: "DBBL",
    image: "/assets/images/dbbl%20.jpg",
  },
  {
    name: "Sonali Bank",
    image: "/assets/images/Sonali-Bank-logo-.png",
  },
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
      className="flex h-8 w-8 items-center justify-center rounded-full border border-soft bg-page-secondary text-xs text-brand-primary transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-md"
    >
      {children}
    </Link>
  );
}

function GoverningMemberCard({ member }: { member: GoverningMember }) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-soft bg-page-primary shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl">
      <div className="absolute left-0 top-0 h-1 w-full bg-color-primary" />

      <div className="relative aspect-[4/5] w-full overflow-hidden bg-page-secondary sm:aspect-[3/4] md:aspect-[4/5]">
        <Image
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
          src={member.image}
          alt={member.alt}
          width={420}
          height={520}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
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

      <div className="p-5 text-center">
        <h3 className="text-base font-black leading-snug text-primary transition-colors duration-500 group-hover:text-brand-primary">
          {member.name}
        </h3>

        <div className="mx-auto my-3 h-[3px] w-12 rounded-full bg-color-secondary transition-all duration-500 group-hover:w-20 group-hover:bg-color-primary" />

        <p className="min-h-[44px] text-sm font-semibold leading-6 text-secondary">
          {member.designation}
        </p>
      </div>
    </div>
  );
}

function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <div className="group flex h-[120px] items-center justify-center rounded-[22px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-brand-primary hover:shadow-xl">
      <Image
        className="max-h-[72px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
        src={method.image}
        alt={method.name}
        width={220}
        height={100}
      />
    </div>
  );
}

export default function GoverningBody() {
  return (
    <main className="bg-page-secondary font-main text-primary">
      {/* Governing Body Section */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-color-primary opacity-10 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-color-secondary opacity-30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          
          {/* Normal Sized Custom Title Block without Count Box */}
          <div className="mb-8">
            <h2 className="text-2xl font-black tracking-tight text-primary sm:text-3xl">
              Governing Bodies
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-color-primary" />
          </div>

          {/* Members Display Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governingMembers.map((member) => (
              <GoverningMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Procedure Section */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[32px] border border-soft bg-page-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            <div className="p-6 sm:p-8 lg:col-span-6 lg:p-10">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {paymentMethods.map((method) => (
                  <PaymentCard key={method.name} method={method} />
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-color-primary p-6 sm:p-8 lg:col-span-6 lg:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-color-secondary opacity-30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-page-primary opacity-10 blur-3xl" />

              <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="flex justify-center">
                  <div className="rounded-[34px] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
                    <Image
                      src={mobile}
                      alt="Mobile Nexus"
                      width={320}
                      height={500}
                      className="h-auto max-h-[500px] w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-color-secondary">
                    Parents Portal
                  </p>

                  <h3 className="mt-4 text-3xl font-black leading-tight text-inverse sm:text-4xl">
                    Pay any fee through Parents Portal
                  </h3>

                  <p className="mt-4 text-sm font-semibold leading-7 text-inverse/80">
                    Access fee payment, student information and institutional
                    services from one digital platform.
                  </p>

                  <div className="mt-7 inline-flex rounded-[22px] bg-page-primary p-4">
                    <Image
                      src={odhayanLogo}
                      alt="Oddhoyan Logo"
                      width={200}
                      height={100}
                      className="h-auto w-[180px] object-contain"
                    />
                  </div>

                  <div className="mt-7">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-[14px] bg-color-secondary px-6 py-3 text-sm font-black text-primary shadow-md transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-page-primary hover:shadow-xl"
                    >
                      View Details
                      <FaArrowRight className="text-xs" />
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