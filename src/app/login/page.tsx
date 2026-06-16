"use client";

import Image from "next/image";
import Link from "next/link";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  FaCheck,
  FaCircleInfo,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaHouseUser,
  FaIdCard,
  FaKey,
  FaLock,
  FaPeopleGroup,
  FaPersonChalkboard,
  FaRegCircleQuestion,
  FaSchoolFlag,
  FaShieldHalved,
  FaTriangleExclamation,
  FaUserGear,
  FaUserGraduate,
} from "react-icons/fa6";

type LoginRole = {
  title: string;
  role: string;
  description: string;
  icon: ReactNode;
};

type SecurityItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type SupportItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type LoginFormData = {
  role: string;
  userId: string;
  password: string;
  rememberMe: boolean;
};

const loginRoles: LoginRole[] = [
  {
    title: "Student Login",
    role: "Student",
    description:
      "শিক্ষার্থীরা ক্লাস রুটিন, নোটিশ, ফলাফল, অ্যাসাইনমেন্ট ও একাডেমিক তথ্য দেখতে পারবে।",
    icon: <FaUserGraduate />,
  },
  {
    title: "Guardian Login",
    role: "Guardian",
    description:
      "অভিভাবকরা সন্তানের একাডেমিক অগ্রগতি, ফি, নোটিশ ও উপস্থিতির তথ্য দেখতে পারবেন।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "Teacher Login",
    role: "Teacher",
    description:
      "শিক্ষকরা ক্লাস, শিক্ষার্থী তথ্য, পাঠ পরিকল্পনা, নোটিশ ও একাডেমিক কার্যক্রম পরিচালনা করতে পারবেন।",
    icon: <FaPersonChalkboard />,
  },
  {
    title: "Admin Login",
    role: "Admin",
    description:
      "প্রশাসনিক ব্যবহারকারীরা বিদ্যালয়ের নোটিশ, ভর্তি, একাডেমিক ও অফিস কার্যক্রম পরিচালনা করতে পারবেন।",
    icon: <FaUserGear />,
  },
];

const securityItems: SecurityItem[] = [
  {
    title: "নিরাপদ পাসওয়ার্ড",
    description:
      "পাসওয়ার্ড কাউকে জানাবেন না এবং সহজে অনুমানযোগ্য পাসওয়ার্ড ব্যবহার করা থেকে বিরত থাকুন।",
    icon: <FaKey />,
  },
  {
    title: "ব্যক্তিগত তথ্য সুরক্ষা",
    description:
      "নিজের আইডি, মোবাইল নম্বর, ইমেইল ও একাডেমিক তথ্য নিরাপদ রাখতে সতর্ক থাকুন।",
    icon: <FaShieldHalved />,
  },
  {
    title: "Shared Device Reminder",
    description:
      "অন্যের কম্পিউটার বা মোবাইল ব্যবহার করলে কাজ শেষে অবশ্যই logout করুন।",
    icon: <FaLock />,
  },
];

const supportItems: SupportItem[] = [
  {
    title: "Forgot Password",
    description:
      "পাসওয়ার্ড ভুলে গেলে বিদ্যালয় অফিস অথবা নির্ধারিত IT support team-এর সঙ্গে যোগাযোগ করুন।",
    icon: <FaRegCircleQuestion />,
  },
  {
    title: "Account Issue",
    description:
      "Login ID, role বা account access সমস্যা হলে আপনার শ্রেণি শিক্ষক বা অফিসে জানান।",
    icon: <FaIdCard />,
  },
  {
    title: "Office Support",
    description:
      "অফিস সময়ের মধ্যে প্রয়োজনীয় তথ্য ও login সহায়তার জন্য বিদ্যালয়ে যোগাযোগ করুন।",
    icon: <FaHouseUser />,
  },
];

const initialFormData: LoginFormData = {
  role: "",
  userId: "",
  password: "",
  rememberMe: false,
};

const inputClassName =
  "w-full rounded-2xl border border-soft bg-page-primary p-4 text-sm font-semibold text-primary outline-none placeholder:text-primary transition-all duration-300 focus:border-brand-primary";

const LoginPage = () => {
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const selectedRole = useMemo(
    () => loginRoles.find((item) => item.role === formData.role),
    [formData.role]
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    const checked =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : false;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.role) {
      setError("Please select your login role.");
      setSuccess("");
      return;
    }

    if (!formData.userId.trim()) {
      setError("Email / ID field is required.");
      setSuccess("");
      return;
    }

    if (!formData.password.trim()) {
      setError("Password field is required.");
      setSuccess("");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters for demo validation.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess(
      `${formData.role} demo login successful. This is frontend-only validation.`
    );
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setShowPassword(false);
    setError("");
    setSuccess("");
  };

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Hero Section */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            Login
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            লগইন
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            শিক্ষার্থী, অভিভাবক, শিক্ষক ও প্রশাসনিক ব্যবহারকারীরা নিরাপদভাবে
            নিজ নিজ অ্যাকাউন্টে প্রবেশ করতে পারবেন।
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
            >
              Back to Home
            </Link>

            <a
              href="#login-form"
              className="inline-flex items-center justify-center rounded-full border border-soft bg-color-secondary px-8 py-4 text-sm font-black text-brand-primary shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              Login Now
            </a>
          </div>
        </div>
      </section>

      {/* Login Type Cards */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              Login Access
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              ব্যবহারকারী ধরন নির্বাচন করুন
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              বিদ্যালয়ের ভিন্ন ভিন্ন ব্যবহারকারীর জন্য আলাদা access system
              রাখা হয়েছে।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {loginRoles.map((item) => (
              <button
                key={item.role}
                type="button"
                onClick={() =>
                  setFormData((current) => ({
                    ...current,
                    role: item.role,
                  }))
                }
                className={`group rounded-[28px] border p-6 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  formData.role === item.role
                    ? "border-brand-primary bg-color-secondary"
                    : "border-soft bg-page-primary"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {item.icon}
                </div>

                <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-brand-primary">
                  {item.role}
                </p>

                <h3 className="mt-2 text-xl font-black text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {item.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Login Form + Visual */}
      <section id="login-form" className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-5">
                <Image
                  src="/assets/3.jpg"
                  alt="School login"
                  width={900}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[360px] w-full rounded-[24px] object-cover"
                />

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">
                      Secure Access
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      Role based login access for school users.
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">
                      Demo Validation
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      Frontend-only login validation with success message.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[30px] border border-soft bg-page-secondary p-5 sm:p-6 lg:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-primary text-3xl text-inverse">
                    <FaLock />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      Account Login
                    </p>
                    <h2 className="mt-1 text-3xl font-black text-primary">
                      নিরাপদ লগইন ফরম
                    </h2>
                  </div>
                </div>

                {error && (
                  <div className="mb-5 flex gap-3 rounded-2xl border border-red-soft bg-red-soft p-4 text-sm font-black text-red">
                    <FaTriangleExclamation className="mt-1 shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                {success && (
                  <div className="mb-5 flex gap-3 rounded-2xl border border-soft bg-color-secondary p-4 text-sm font-black text-brand-primary">
                    <FaCheck className="mt-1 shrink-0" />
                    <p>{success}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-black text-primary">
                      User Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={inputClassName}
                    >
                      <option className="bg-page-primary text-primary" value="">
                        Select Login Role
                      </option>
                      {loginRoles.map((item) => (
                        <option
                          key={item.role}
                          className="bg-page-primary text-primary"
                          value={item.role}
                        >
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-primary">
                      Email / ID
                    </label>
                    <input
                      type="text"
                      name="userId"
                      value={formData.userId}
                      onChange={handleChange}
                      placeholder="Enter your email or user ID"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-primary">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        className={`${inputClassName} pr-14`}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-primary"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 rounded-2xl border border-soft bg-page-primary p-4 sm:flex-row sm:items-center sm:justify-between">
                    <label className="flex items-center gap-3 text-sm font-bold text-secondary">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="h-4 w-4 accent-[color:var(--color-primary)]"
                      />
                      Remember me on this device
                    </label>

                    <Link
                      href="#support"
                      className="text-sm font-black text-brand-primary"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {selectedRole && (
                    <div className="rounded-2xl border border-soft bg-page-primary p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        Selected Role
                      </p>
                      <p className="mt-2 text-sm font-bold leading-7 text-secondary">
                        {selectedRole.title}: {selectedRole.description}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-md transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl sm:w-auto"
                    >
                      Login
                      <FaLock />
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-soft bg-page-primary px-8 py-4 text-sm font-black text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Information */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              Security Information
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              নিরাপদ অ্যাকাউন্ট ব্যবহারের নির্দেশনা
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              অ্যাকাউন্টের নিরাপত্তা বজায় রাখতে নিচের নির্দেশনাগুলো অনুসরণ
              করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {securityItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-soft bg-page-secondary p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Help / Support */}
      <section id="support" className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              Help & Support
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              লগইন সমস্যায় সহায়তা
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {supportItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-soft bg-page-secondary p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaSchoolFlag className="text-sm" />
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  সমাপনী বার্তা
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                নিরাপদভাবে লগইন করুন এবং প্রয়োজন শেষে logout করুন
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                বিদ্যালয়ের digital service ব্যবহার করার সময় নিজের account
                information নিরাপদ রাখুন। Public device ব্যবহার করলে কাজ শেষে
                অবশ্যই logout করুন।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaGraduationCap />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  Smart Access
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  শিক্ষার্থী, অভিভাবক, শিক্ষক ও admin সবার জন্য সহজ login
                  system।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Note */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[24px] border border-soft bg-page-primary p-5">
          <div className="flex items-start gap-3">
            <FaCircleInfo className="mt-1 shrink-0 text-brand-primary" />
            <p className="text-sm font-semibold leading-7 text-secondary">
              Note: এই login page frontend-only demo validation ব্যবহার করে।
              Real login করার জন্য পরবর্তীতে authentication API, database,
              session/token system এবং role-based dashboard route যুক্ত করতে
              হবে।
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;