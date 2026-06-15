import Image from "next/image";
import Link from "next/link";

const facilities: string[] = [
  "পরিকল্পিত, মনোরম ও প্রযুক্তিনির্ভর ক্যাম্পাস পরিবেশ",
  "আধুনিক ল্যাবরেটরি ও সমৃদ্ধ লাইব্রেরি সুবিধা",
  "মেধা অন্বেষণ ও সৃজনশীল সহ-শিক্ষা কার্যক্রম",
  "নৈতিকতা, শৃঙ্খলা ও মানবিক মূল্যবোধের চর্চা",
];

export default function ChairmanPage() {
  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      <section className="mx-auto w-full max-w-[1500px] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-14">
        {/* Page Header */}
        <header className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-brand-primary">
            Message
          </p>

          <h1 className="mt-3 text-[28px] font-black leading-tight text-primary sm:text-4xl md:text-5xl">
            চেয়ারম্যানের বাণী
          </h1>

          <div className="mx-auto mt-5 h-[4px] w-24 rounded-full bg-color-primary sm:w-28" />

          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-color-primary px-6 py-3 text-sm font-bold text-inverse shadow-md transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[rgba(22,66,60,0.18)] sm:px-8"
          >
            Back to Home
          </Link>
        </header>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[28px] border border-soft bg-page-primary shadow-[0_20px_70px_rgba(17,24,39,0.10)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Profile Area */}
            <aside className="bg-color-primary p-5 sm:p-7 md:p-8 lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <div className="group overflow-hidden rounded-[22px] border-4 border-[rgba(237,230,179,0.8)] bg-page-secondary shadow-2xl">
                  <Image
                    src="/assets/images/Rofiqil-Islam.avif"
                    alt="ড. মোহাম্মদ রফিকুল আমীন"
                    width={700}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="h-[390px] w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105 sm:h-[500px] lg:h-[680px]"
                  />
                </div>

                <div className="mt-6 rounded-[22px] border border-white/20 bg-white/10 p-5 text-center text-inverse shadow-sm backdrop-blur-sm sm:p-6">
                  <h2 className="text-xl font-black leading-snug sm:text-2xl">
                    ড. মোহাম্মদ রফিকুল আমীন
                  </h2>

                  <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-color-secondary" />

                  <p className="mt-4 text-sm font-bold leading-6 text-white/90 sm:text-base">
                    চেয়ারম্যান ও গভর্নিং বডি পরিচালক
                  </p>

                  <p className="mt-1 text-sm font-medium text-white/75">
                    আইডিয়াল মডেল স্কুল অ্যান্ড কলেজ
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Content Area */}
            <article className="p-5 sm:p-7 md:p-9 lg:col-span-7 lg:p-10 xl:p-12">
              {/* Quote Box */}
              <div className="mb-8 rounded-[24px] border border-soft bg-page-secondary p-5 sm:p-6 md:p-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-primary sm:text-sm">
                  চেয়ারম্যানের বাণী
                </p>

                <h2 className="mt-3 text-[24px] font-black leading-snug text-primary sm:text-3xl lg:text-4xl">
                  “মানসম্মত শিক্ষা ও সুনাগরিক গঠন — আমাদের মূল অঙ্গীকার”
                </h2>
              </div>

              <div className="space-y-5 text-justify text-[16px] font-medium leading-[1.9] text-primary sm:text-[17px] sm:leading-[1.95] md:text-lg md:leading-9">
                <p className="text-left font-bold text-primary">
                  প্রিয় অভিভাবক, শিক্ষার্থীবৃন্দ ও শুভানুধ্যায়ীগণ,
                </p>

                <p>
                  আমাদের এই শিক্ষা প্রতিষ্ঠান প্রতিষ্ঠার পেছনে রয়েছে একটি
                  সুদূরপ্রসারী সামাজিক দায়বদ্ধতা ও গুণগত শিক্ষার প্রসার
                  ঘটানোর সুদৃঢ় প্রত্যয়। আমরা বিশ্বাস করি, একটি আদর্শ শিক্ষা
                  প্রতিষ্ঠান শুধু পাঠদান করে না; বরং শিক্ষার্থীর চরিত্র, মেধা,
                  মনন, নেতৃত্ব, আত্মবিশ্বাস এবং মানবিক মূল্যবোধ গঠনে
                  গুরুত্বপূর্ণ ভূমিকা রাখে।
                </p>

                {/* Focus Card 1 */}
                <div className="rounded-[22px] border-l-4 border-brand-primary bg-page-secondary p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <p className="font-bold leading-8 text-brand-primary">
                    ক. দ্রুত পরিবর্তনশীল বিশ্বের চ্যালেঞ্জ মোকাবেলায় এবং
                    আমাদের ভবিষ্যৎ প্রজন্মকে যোগ্য করে গড়ে তুলতে মানসম্মত
                    শিক্ষার কোনো বিকল্প নেই। এই লক্ষ্য অর্জনে আমরা একটি
                    যুগান্তকারী মহাপরিকল্পনা হাতে নিয়েছি; আগামী এক দশকে
                    আন্তর্জাতিক মানের আধুনিক সুযোগ-সুবিধা সম্বলিত শিক্ষা
                    ক্যাম্পাস সম্প্রসারণের মাধ্যমে দেশজুড়ে ১০ লক্ষ শিক্ষার্থীর
                    আধুনিক ও নৈতিক শিক্ষার সুযোগ নিশ্চিতকরণ।
                  </p>
                </div>

                <p>
                  আমরা বিশ্বাস করি, প্রতিটি শিশুর সুপ্ত প্রতিভা বিকাশ করা এবং
                  তাদের সুনাগরিক হিসেবে গড়ে তোলা আমাদের মৌলিক দায়িত্ব। একটি
                  শিক্ষার্থী যখন সুশিক্ষা, শৃঙ্খলা ও নৈতিক মূল্যবোধ পায়, তখনই
                  সে পরিবার, সমাজ ও জাতি গঠনে কার্যকর অবদান রাখতে সক্ষম হয়।
                </p>

                <p>
                  আমাদের এই প্রতিষ্ঠান শুধুমাত্র একটি প্রাতিষ্ঠানিক রূপ নয়,
                  বরং এটি একটি আদর্শ মানুষ গড়ার সামাজিক আন্দোলন। আমরা গড়ে
                  তুলতে চাই এমন একটি আধুনিক ও শিক্ষার্থীবান্ধব পরিবেশ, যেখানে
                  প্রতিটি শিক্ষার্থী নিজের মেধা, মনন ও সৃজনশীলতা বিকাশের
                  পূর্ণ সুযোগ পাবে।
                </p>

                {/* Facilities */}
                <div className="rounded-[24px] border border-soft bg-page-secondary p-5 sm:p-6">
                  <p className="mb-4 text-left text-lg font-black text-primary sm:text-xl">
                    আমরা গড়ে তুলতে চাই এমন একটি আদর্শ শিক্ষার পরিবেশ, যেখানে
                    প্রতিটি শিক্ষার্থী পাবে:
                  </p>

                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {facilities.map((item, index) => (
                      <li
                        key={item}
                        className="group flex items-start gap-3 rounded-2xl border border-soft bg-page-primary p-4 font-bold leading-7 text-brand-primary shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-md"
                      >
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-color-primary text-sm font-black text-inverse transition-transform duration-500 group-hover:scale-110">
                          {index + 1}
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Focus Card 2 */}
                <div className="rounded-[22px] border-l-4 border-brand-primary bg-page-secondary p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <p className="font-bold leading-8 text-primary">
                    খ. এই শিক্ষামূলক কার্যক্রমকে আরও বেগবান করতে এবং তরুণ
                    শিক্ষিত সমাজের কর্মসংস্থানের সুযোগ সৃষ্টিতে আমরা দেশব্যাপী
                    মেধাবী, দক্ষ ও উদ্যমী শিক্ষক-শিক্ষিকা এবং শিক্ষা কর্মকর্তা
                    নিয়োগের উদ্যোগ নিয়েছি। যেখানে যোগ্যতার ভিত্তিতে আকর্ষণীয়
                    ও সন্তোষজনক ক্যারিয়ার গড়ার সুযোগ থাকবে।
                  </p>
                </div>

                <p>
                  আমাদের চূড়ান্ত লক্ষ্য হলো এমন একটি শিক্ষিত ও স্বাবলম্বী সমাজ
                  গড়ে তোলা, যেখানে প্রতিটি শিক্ষার্থী তার মেধা, যোগ্যতা ও
                  নৈতিকতার পূর্ণ বিকাশ ঘটিয়ে বিশ্বমঞ্চে দেশের গৌরব উজ্জ্বল
                  করতে পারে।
                </p>

                <p>
                  আমরা চাই আমাদের ভবিষ্যৎ প্রজন্ম যেন একটি সুন্দর, সুশৃঙ্খল,
                  নিরাপদ এবং জ্ঞানভিত্তিক পরিবেশে বিকশিত হতে পারে।
                </p>

                <p>
                  এই মহতী ও গৌরবময় যাত্রায় আমরা সকল অভিভাবক, শিক্ষক,
                  শিক্ষার্থী ও শুভাকাঙ্ক্ষীর আন্তরিক সহযোগিতা এবং সুদৃঢ় আস্থা
                  কামনা করছি।
                </p>

                <div className="rounded-[22px] bg-color-primary p-5 text-inverse shadow-md sm:p-6">
                  <p className="text-left font-black leading-8">
                    আসুন, আমরা সবাই মিলে আমাদের সন্তানদের জন্য এক নিরাপদ,
                    সমৃদ্ধ, সম্ভাবনাময় ও আলোকিত ভবিষ্যৎ গড়ে তুলি।
                  </p>
                </div>
              </div>

              {/* Signature */}
              <footer className="mt-10 rounded-[24px] border border-soft bg-page-secondary p-6 sm:p-7">
                <p className="text-xl font-black leading-snug text-primary sm:text-2xl">
                  চেয়ারম্যান ও গভর্নিং বডি পরিচালক
                </p>

                <p className="mt-2 text-sm font-semibold text-secondary sm:text-base">
                  আইডিয়াল মডেল স্কুল অ্যান্ড কলেজ
                </p>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}