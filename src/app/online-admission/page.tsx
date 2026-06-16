"use client";

import Image from "next/image";
import Link from "next/link";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaCheck,
  FaCircleInfo,
  FaClipboardCheck,
  FaCloudArrowDown,
  FaFileLines,
  FaGraduationCap,
  FaIdCard,
  FaImage,
  FaMoneyBillWave,
  FaPeopleGroup,
  FaPenToSquare,
  FaSchoolFlag,
  FaShieldHalved,
  FaTrash,
  FaTriangleExclamation,
  FaUpload,
  FaUserGraduate,
} from "react-icons/fa6";

type OverviewItem = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

type AdmissionClass = {
  title: string;
  age: string;
  fee: string;
  documents: string;
  status: string;
  description: string;
  icon: ReactNode;
};

type ProcessItem = {
  title: string;
  description: string;
};

type DocumentCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

type GuidelineSection = {
  title: string;
  icon: ReactNode;
  points: string[];
};

type StudentData = {
  studentFullName: string;
  studentBanglaName: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  religion: string;
  nationality: string;
  birthRegistrationNumber: string;
  selectedClass: string;
  previousSchool: string;
  previousClass: string;
  presentAddress: string;
  permanentAddress: string;
};

type GuardianData = {
  fatherName: string;
  fatherOccupation: string;
  fatherNid: string;
  fatherPhone: string;
  motherName: string;
  motherOccupation: string;
  motherNid: string;
  motherPhone: string;
  guardianName: string;
  guardianRelation: string;
  guardianPhone: string;
  guardianEmail: string;
  emergencyContact: string;
  guardianPresentAddress: string;
};

type SubmittedApplication = {
  applicationId: string;
  student: StudentData;
  guardian: GuardianData;
  studentPhotoName: string;
  guardianPhotoName: string;
  documentCount: number;
  totalDocumentSize: string;
};

const overviewItems: OverviewItem[] = [
  {
    title: "আবেদন চলছে",
    value: "২০২৬",
    description: "নতুন শিক্ষাবর্ষে অনলাইন ভর্তি আবেদন গ্রহণ করা হচ্ছে।",
    icon: <FaCalendarCheck />,
  },
  {
    title: "অনলাইন ফরম",
    value: "২টি",
    description: "শিক্ষার্থী ও অভিভাবকের জন্য আলাদা তথ্য ফরম রয়েছে।",
    icon: <FaPenToSquare />,
  },
  {
    title: "ছবি ও ডকুমেন্ট",
    value: "Upload",
    description: "ছবি preview এবং একাধিক document list browser-এ দেখা যাবে।",
    icon: <FaUpload />,
  },
  {
    title: "ভর্তি সহায়তা",
    value: "Office",
    description: "ভর্তি সংক্রান্ত সহায়তার জন্য বিদ্যালয় অফিসে যোগাযোগ করুন।",
    icon: <FaPeopleGroup />,
  },
];

const admissionClasses: AdmissionClass[] = [
  {
    title: "Play Group",
    age: "৪+ বছর",
    fee: "৳৫০০",
    documents: "জন্ম নিবন্ধন, শিক্ষার্থীর ছবি",
    status: "Open",
    description:
      "শিশুর ভাষা, আচরণ, সামাজিকতা এবং আনন্দময় শেখার ভিত্তি তৈরির জন্য উপযোগী শ্রেণি।",
    icon: <FaUserGraduate />,
  },
  {
    title: "Nursery",
    age: "৫+ বছর",
    fee: "৳৬০০",
    documents: "জন্ম নিবন্ধন, ছবি, অভিভাবকের পরিচয়পত্র",
    status: "Open",
    description:
      "বাংলা, ইংরেজি, গণিত, সৃজনশীল কাজ এবং নিয়মিত শ্রেণি অভ্যাস গড়ে তোলা হয়।",
    icon: <FaBookOpen />,
  },
  {
    title: "Primary Section",
    age: "৬+ বছর",
    fee: "৳৭০০",
    documents: "জন্ম নিবন্ধন, ছবি, পূর্ববর্তী ফলাফল",
    status: "Open",
    description:
      "প্রাথমিক পর্যায়ে শিক্ষার্থীদের মৌলিক জ্ঞান, পাঠাভ্যাস ও আত্মবিশ্বাস উন্নত করা হয়।",
    icon: <FaGraduationCap />,
  },
  {
    title: "Secondary Section",
    age: "শ্রেণিভিত্তিক",
    fee: "৳৮০০",
    documents: "পূর্ববর্তী ফলাফল, জন্ম নিবন্ধন, ছবি, TC",
    status: "Limited",
    description:
      "মাধ্যমিক পর্যায়ে বিষয়ভিত্তিক পাঠদান, পরীক্ষা প্রস্তুতি এবং সহশিক্ষা কার্যক্রমে গুরুত্ব দেওয়া হয়।",
    icon: <FaSchoolFlag />,
  },
];

const processItems: ProcessItem[] = [
  {
    title: "ভর্তি নোটিশ পড়ুন",
    description:
      "আবেদন শুরুর আগে ভর্তি নোটিশ, শ্রেণিভিত্তিক যোগ্যতা, সময়সীমা ও প্রয়োজনীয় নির্দেশনা পড়ুন।",
  },
  {
    title: "শিক্ষার্থীর তথ্য পূরণ করুন",
    description:
      "শিক্ষার্থীর নাম, জন্ম তারিখ, শ্রেণি, ঠিকানা ও পূর্ববর্তী শিক্ষাগত তথ্য সঠিকভাবে পূরণ করুন।",
  },
  {
    title: "অভিভাবকের তথ্য পূরণ করুন",
    description:
      "পিতা, মাতা ও অভিভাবকের মোবাইল নম্বর, NID, পেশা এবং জরুরি যোগাযোগের তথ্য দিন।",
  },
  {
    title: "ছবি ও ডকুমেন্ট আপলোড করুন",
    description:
      "শিক্ষার্থীর ছবি, অভিভাবকের ছবি এবং প্রয়োজনীয় একাধিক ডকুমেন্ট নির্বাচন করুন।",
  },
  {
    title: "তথ্য যাচাই করুন",
    description:
      "লাইভ summary দেখে নাম, শ্রেণি, ফোন নম্বর, ছবি ও ডকুমেন্ট ঠিক আছে কিনা যাচাই করুন।",
  },
  {
    title: "আবেদন জমা দিন",
    description:
      "সব তথ্য সঠিক হলে final submit করুন। Browser-এ local application ID তৈরি হবে।",
  },
  {
    title: "আবেদন কপি সংরক্ষণ করুন",
    description:
      "সফল submission-এর application ID এবং summary ভবিষ্যতের জন্য সংরক্ষণ করুন।",
  },
];

const requiredDocuments: DocumentCard[] = [
  {
    title: "জন্ম নিবন্ধন",
    description:
      "শিক্ষার্থীর বয়স ও পরিচয় যাচাইয়ের জন্য জন্ম নিবন্ধনের কপি প্রয়োজন।",
    icon: <FaIdCard />,
  },
  {
    title: "শিক্ষার্থীর ছবি",
    description:
      "ভর্তি ফরম, আইডি কার্ড ও অফিস রেকর্ডের জন্য সাম্প্রতিক ছবি প্রয়োজন।",
    icon: <FaImage />,
  },
  {
    title: "অভিভাবকের পরিচয়পত্র",
    description:
      "যোগাযোগ ও যাচাইয়ের জন্য পিতা, মাতা বা অভিভাবকের পরিচয়পত্র প্রয়োজন।",
    icon: <FaPeopleGroup />,
  },
  {
    title: "পূর্ববর্তী ফলাফল",
    description:
      "প্রযোজ্য শ্রেণির জন্য পূর্ববর্তী বিদ্যালয়ের ফলাফল বা প্রগ্রেস রিপোর্ট জমা দিতে হবে।",
    icon: <FaClipboardCheck />,
  },
  {
    title: "পেমেন্ট রশিদ",
    description:
      "আবেদন ফি পরিশোধের রশিদ বা ট্রানজেকশন আইডি সংরক্ষণ করতে হবে।",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "ট্রান্সফার সার্টিফিকেট",
    description:
      "উচ্চ শ্রেণিতে ভর্তি বা বিদ্যালয় পরিবর্তনের ক্ষেত্রে TC প্রয়োজন হতে পারে।",
    icon: <FaFileLines />,
  },
];

const guidelineSections: GuidelineSection[] = [
  {
    title: "শিক্ষার্থীদের নির্দেশনা",
    icon: <FaUserGraduate />,
    points: [
      "ভর্তি পরীক্ষার জন্য শ্রেণিভিত্তিক মৌলিক পাঠ ভালোভাবে প্রস্তুত করতে হবে।",
      "সাক্ষাৎকার বা যাচাইয়ের দিনে সময়মতো বিদ্যালয়ে উপস্থিত থাকতে হবে।",
      "আবেদন কপি, ছবি এবং প্রয়োজনীয় ডকুমেন্ট অভিভাবকের সঙ্গে প্রস্তুত রাখতে হবে।",
      "বিদ্যালয়ের নিয়মনীতি ও আচরণবিধি শুরু থেকেই অনুসরণ করার মানসিকতা রাখতে হবে।",
    ],
  },
  {
    title: "অভিভাবকদের নির্দেশনা",
    icon: <FaPeopleGroup />,
    points: [
      "ফরম পূরণের আগে সন্তানের নাম, জন্ম তারিখ, শ্রেণি ও ডকুমেন্ট যাচাই করুন।",
      "সঠিক মোবাইল নম্বর ও ইমেইল ব্যবহার করুন, যাতে বিদ্যালয় সহজে যোগাযোগ করতে পারে।",
      "আবেদন ফি পরিশোধের রশিদ বা ট্রানজেকশন আইডি সংরক্ষণ করুন।",
      "ভর্তি নোটিশ, সময়সীমা, পরীক্ষা ও সাক্ষাৎকারের তারিখ নিয়মিত অনুসরণ করুন।",
    ],
  },
];

const initialStudentData: StudentData = {
  studentFullName: "",
  studentBanglaName: "",
  dateOfBirth: "",
  gender: "",
  bloodGroup: "",
  religion: "",
  nationality: "Bangladeshi",
  birthRegistrationNumber: "",
  selectedClass: "",
  previousSchool: "",
  previousClass: "",
  presentAddress: "",
  permanentAddress: "",
};

const initialGuardianData: GuardianData = {
  fatherName: "",
  fatherOccupation: "",
  fatherNid: "",
  fatherPhone: "",
  motherName: "",
  motherOccupation: "",
  motherNid: "",
  motherPhone: "",
  guardianName: "",
  guardianRelation: "",
  guardianPhone: "",
  guardianEmail: "",
  emergencyContact: "",
  guardianPresentAddress: "",
};

const formatFileSize = (fileSize: number) => {
  if (fileSize < 1024) {
    return `${fileSize} B`;
  }

  if (fileSize < 1024 * 1024) {
    return `${(fileSize / 1024).toFixed(1)} KB`;
  }

  return `${(fileSize / (1024 * 1024)).toFixed(2)} MB`;
};

const generateApplicationId = () => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `ADM-2026-${randomNumber}`;
};

const inputClassName =
  "rounded-2xl border border-soft bg-page-primary p-4 text-sm font-semibold text-primary outline-none placeholder:text-primary focus:border-brand-primary";

const selectClassName =
  "rounded-2xl border border-soft bg-page-primary p-4 text-sm font-semibold text-primary outline-none focus:border-brand-primary";

const OnlineAdmissionPage = () => {
  const [studentData, setStudentData] =
    useState<StudentData>(initialStudentData);
  const [guardianData, setGuardianData] =
    useState<GuardianData>(initialGuardianData);

  const [studentPhoto, setStudentPhoto] = useState<File | null>(null);
  const [guardianPhoto, setGuardianPhoto] = useState<File | null>(null);
  const [studentPhotoPreview, setStudentPhotoPreview] = useState("");
  const [guardianPhotoPreview, setGuardianPhotoPreview] = useState("");

  const [documents, setDocuments] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [submittedApplication, setSubmittedApplication] =
    useState<SubmittedApplication | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);

  const selectedClassInfo = useMemo(
    () =>
      admissionClasses.find((item) => item.title === studentData.selectedClass),
    [studentData.selectedClass]
  );

  const totalDocumentSize = useMemo(
    () => documents.reduce((total, file) => total + file.size, 0),
    [documents]
  );

  const isApplicationReady = Boolean(
    studentData.studentFullName.trim() &&
      studentData.dateOfBirth &&
      studentData.selectedClass &&
      guardianData.guardianName.trim() &&
      guardianData.guardianPhone.trim() &&
      studentPhoto &&
      guardianPhoto &&
      documents.length > 0
  );

  useEffect(() => {
    return () => {
      if (studentPhotoPreview) {
        URL.revokeObjectURL(studentPhotoPreview);
      }

      if (guardianPhotoPreview) {
        URL.revokeObjectURL(guardianPhotoPreview);
      }
    };
  }, [studentPhotoPreview, guardianPhotoPreview]);

  const handleStudentChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setStudentData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleGuardianChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setGuardianData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleStudentPhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setError("শিক্ষার্থীর ছবির জন্য শুধু image file নির্বাচন করুন।");
      return;
    }

    if (studentPhotoPreview) {
      URL.revokeObjectURL(studentPhotoPreview);
    }

    setStudentPhoto(selectedFile);
    setStudentPhotoPreview(URL.createObjectURL(selectedFile));
    setError("");
    setSuccess("");
  };

  const handleGuardianPhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setError("অভিভাবকের ছবির জন্য শুধু image file নির্বাচন করুন।");
      return;
    }

    if (guardianPhotoPreview) {
      URL.revokeObjectURL(guardianPhotoPreview);
    }

    setGuardianPhoto(selectedFile);
    setGuardianPhotoPreview(URL.createObjectURL(selectedFile));
    setError("");
    setSuccess("");
  };

  const handleDocumentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (!selectedFiles.length) {
      return;
    }

    setDocuments((currentDocuments) => {
      const mergedFiles = [...currentDocuments];

      selectedFiles.forEach((file) => {
        const alreadyExists = mergedFiles.some(
          (existingFile) =>
            existingFile.name === file.name && existingFile.size === file.size
        );

        if (!alreadyExists) {
          mergedFiles.push(file);
        }
      });

      return mergedFiles;
    });

    setError("");
    setSuccess("");
    setFileInputKey((current) => current + 1);
  };

  const removeDocument = (index: number) => {
    setDocuments((currentDocuments) =>
      currentDocuments.filter((_, documentIndex) => documentIndex !== index)
    );

    setError("");
    setSuccess("");
  };

  const clearDocuments = () => {
    setDocuments([]);
    setFileInputKey((current) => current + 1);
    setError("");
    setSuccess("");
  };

  const removeStudentPhoto = () => {
    if (studentPhotoPreview) {
      URL.revokeObjectURL(studentPhotoPreview);
    }

    setStudentPhoto(null);
    setStudentPhotoPreview("");
    setError("");
    setSuccess("");
  };

  const removeGuardianPhoto = () => {
    if (guardianPhotoPreview) {
      URL.revokeObjectURL(guardianPhotoPreview);
    }

    setGuardianPhoto(null);
    setGuardianPhotoPreview("");
    setError("");
    setSuccess("");
  };

  const validateApplication = () => {
    if (!studentData.studentFullName.trim()) {
      return "শিক্ষার্থীর পূর্ণ নাম আবশ্যক।";
    }

    if (!studentData.dateOfBirth) {
      return "শিক্ষার্থীর জন্ম তারিখ আবশ্যক।";
    }

    if (!studentData.selectedClass) {
      return "ভর্তির শ্রেণি নির্বাচন করা আবশ্যক।";
    }

    if (!guardianData.guardianName.trim()) {
      return "অভিভাবকের নাম আবশ্যক।";
    }

    if (!guardianData.guardianPhone.trim() && !guardianData.fatherPhone.trim()) {
      return "অভিভাবক বা পিতার মোবাইল নম্বর আবশ্যক।";
    }

    if (!guardianData.guardianPhone.trim()) {
      return "প্রধান অভিভাবকের মোবাইল নম্বর আবশ্যক।";
    }

    if (!studentPhoto) {
      return "শিক্ষার্থীর ছবি আপলোড করা আবশ্যক।";
    }

    if (!guardianPhoto) {
      return "অভিভাবকের ছবি আপলোড করা আবশ্যক।";
    }

    if (!documents.length) {
      return "কমপক্ষে একটি প্রয়োজনীয় ডকুমেন্ট আপলোড করা আবশ্যক।";
    }

    return "";
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateApplication();

    if (validationError) {
      setError(validationError);
      setSuccess("");
      setApplicationId("");
      setSubmittedApplication(null);
      return;
    }

    const newApplicationId = generateApplicationId();

    setApplicationId(newApplicationId);
    setSuccess(
      "আপনার ভর্তি আবেদন তথ্য সফলভাবে local browser-এ প্রস্তুত হয়েছে। Backend/API ছাড়া এটি demo submission হিসেবে দেখানো হচ্ছে।"
    );
    setError("");

    setSubmittedApplication({
      applicationId: newApplicationId,
      student: studentData,
      guardian: guardianData,
      studentPhotoName: studentPhoto?.name ?? "",
      guardianPhotoName: guardianPhoto?.name ?? "",
      documentCount: documents.length,
      totalDocumentSize: formatFileSize(totalDocumentSize),
    });
  };

  const handleReset = () => {
    if (studentPhotoPreview) {
      URL.revokeObjectURL(studentPhotoPreview);
    }

    if (guardianPhotoPreview) {
      URL.revokeObjectURL(guardianPhotoPreview);
    }

    setStudentData(initialStudentData);
    setGuardianData(initialGuardianData);
    setStudentPhoto(null);
    setGuardianPhoto(null);
    setStudentPhotoPreview("");
    setGuardianPhotoPreview("");
    setDocuments([]);
    setError("");
    setSuccess("");
    setApplicationId("");
    setSubmittedApplication(null);
    setFileInputKey((current) => current + 1);
  };

  return (
    <main className="min-h-screen bg-page-secondary font-main text-primary">
      {/* Top Hero */}
      <section className="relative overflow-hidden border-b border-soft bg-page-primary px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-color-secondary opacity-70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="font-english text-xs font-black uppercase tracking-[0.55em] text-brand-primary sm:text-sm">
            Online Admission
          </p>

          <h1 className="mt-7 text-[42px] font-black leading-tight text-primary sm:text-6xl lg:text-7xl">
            অনলাইন ভর্তি
          </h1>

          <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-color-primary" />

          <p className="mx-auto mt-9 max-w-3xl text-sm font-semibold leading-8 text-secondary sm:text-base">
            নতুন শিক্ষাবর্ষে অনলাইন ভর্তি আবেদন, শিক্ষার্থী ও অভিভাবকের তথ্য,
            প্রয়োজনীয় ডকুমেন্ট, ছবি আপলোড, আবেদন ধাপ এবং ভর্তি নির্দেশনা এখানে
            উপস্থাপন করা হয়।
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-lg transition-all duration-500 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl"
            >
              Back to Home
            </Link>

            <a
              href="#online-admission-form"
              className="inline-flex items-center justify-center rounded-full border border-soft bg-color-secondary px-8 py-4 text-sm font-black text-brand-primary shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              Apply Online
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {overviewItems.map((item) => (
            <article
              key={item.title}
              className="group rounded-[28px] border border-soft bg-page-primary p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                {item.icon}
              </div>

              <p className="mt-5 text-3xl font-black text-primary">
                {item.value}
              </p>

              <h3 className="mt-2 text-lg font-black text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                ভর্তি প্রক্রিয়ার পরিচিতি
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl lg:text-5xl">
                শিক্ষার্থী ও অভিভাবকের তথ্যসহ পূর্ণাঙ্গ অনলাইন ভর্তি আবেদন
              </h2>

              <p className="mt-6 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                এই অনলাইন ভর্তি পেজে শিক্ষার্থীর তথ্য, অভিভাবকের তথ্য, ছবি
                আপলোড, একাধিক ডকুমেন্ট নির্বাচন, live application summary,
                validation এবং local receipt preview অন্তর্ভুক্ত করা হয়েছে।
                সবকিছু browser state-এর মাধ্যমে কাজ করবে, কোনো backend বা API
                ব্যবহার করা হয়নি।
              </p>

              <p className="mt-4 text-sm font-semibold leading-8 text-secondary sm:text-base sm:leading-9">
                আবেদন করার সময় সঠিক নাম, জন্ম তারিখ, শ্রেণি, অভিভাবকের মোবাইল
                নম্বর, ছবি এবং প্রয়োজনীয় ডকুমেন্ট নির্বাচন করা গুরুত্বপূর্ণ।
                Submit করলে একটি local application ID তৈরি হবে, যা demo receipt
                হিসেবে দেখা যাবে।
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-5">
                <Image
                  src="/assets/3.jpg"
                  alt="Online admission"
                  width={900}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[360px] w-full rounded-[24px] object-cover"
                />

                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">Easy Apply</p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      শিক্ষার্থী ও অভিভাবকের তথ্য আলাদাভাবে পূরণ করুন।
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-soft bg-page-primary p-4">
                    <p className="font-black text-brand-primary">
                      Local Preview
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                      ছবি ও ডকুমেন্ট browser-এ local preview হিসেবে দেখুন।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Highlight */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[36px] border border-soft bg-color-primary shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 text-inverse sm:p-8 lg:col-span-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <FaTriangleExclamation className="text-sm" />
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  Admission Highlight
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-inverse sm:text-4xl lg:text-5xl">
                নতুন শিক্ষাবর্ষে অনলাইন ভর্তি আবেদন চলছে
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                এই page-এ student form, guardian form, photo upload, multiple
                document upload, validation, reset, live summary এবং local
                application receipt সব feature frontend-এ কাজ করবে।
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Student Form",
                  "Guardian Form",
                  "Image Upload",
                  "Multiple Documents",
                  "Local Preview",
                  "Validation",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-inverse"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaPenToSquare />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  Fully Local
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  API ছাড়া browser state দিয়ে form, preview ও receipt কাজ করবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ভর্তি শ্রেণি
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              Admission Programs / Classes
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              শ্রেণিভিত্তিক বয়স, আবেদন ফি এবং প্রয়োজনীয় ডকুমেন্ট দেখে আবেদন
              করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {admissionClasses.map((item) => (
              <article
                key={item.title}
                className="group rounded-[26px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary transition-all duration-500 group-hover:bg-color-primary group-hover:text-inverse">
                  {item.icon}
                </div>

                <p className="mt-5 text-sm font-black text-brand-primary">
                  {item.age} · {item.status}
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight text-primary">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-black text-brand-primary">
                  Application Fee: {item.fee}
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Functional Forms */}
      <section id="online-admission-form" className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              Online Application Form
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              শিক্ষার্থী ও অভিভাবকের পূর্ণাঙ্গ ভর্তি ফরম
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-secondary">
              এই ফরমটি frontend-only functional demo। ছবি ও ডকুমেন্ট local
              browser preview হিসেবে দেখাবে, server-এ upload করবে না।
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-2xl border border-red-soft bg-red-soft p-4 text-sm font-black text-red">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 rounded-2xl border border-soft bg-color-secondary p-4 text-sm font-black text-brand-primary">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              {/* Student Form */}
              <section className="rounded-[30px] border border-soft bg-page-secondary p-5 sm:p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                    <FaUserGraduate />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      Form 01
                    </p>
                    <h3 className="text-2xl font-black text-primary">
                      Student Information Form
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <input
                    name="studentFullName"
                    value={studentData.studentFullName}
                    onChange={handleStudentChange}
                    placeholder="Student Full Name *"
                    className={inputClassName}
                  />

                  <input
                    name="studentBanglaName"
                    value={studentData.studentBanglaName}
                    onChange={handleStudentChange}
                    placeholder="Bangla Name"
                    className={inputClassName}
                  />

                  <input
                    type="date"
                    name="dateOfBirth"
                    value={studentData.dateOfBirth}
                    onChange={handleStudentChange}
                    className={inputClassName}
                  />

                  <select
                    name="gender"
                    value={studentData.gender}
                    onChange={handleStudentChange}
                    className={selectClassName}
                  >
                    <option className="bg-page-primary text-primary" value="">
                      Select Gender
                    </option>
                    <option className="bg-page-primary text-primary" value="Male">
                      Male
                    </option>
                    <option className="bg-page-primary text-primary" value="Female">
                      Female
                    </option>
                    <option className="bg-page-primary text-primary" value="Other">
                      Other
                    </option>
                  </select>

                  <select
                    name="bloodGroup"
                    value={studentData.bloodGroup}
                    onChange={handleStudentChange}
                    className={selectClassName}
                  >
                    <option className="bg-page-primary text-primary" value="">
                      Blood Group
                    </option>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                      (group) => (
                        <option
                          key={group}
                          value={group}
                          className="bg-page-primary text-primary"
                        >
                          {group}
                        </option>
                      )
                    )}
                  </select>

                  <input
                    name="religion"
                    value={studentData.religion}
                    onChange={handleStudentChange}
                    placeholder="Religion"
                    className={inputClassName}
                  />

                  <input
                    name="nationality"
                    value={studentData.nationality}
                    onChange={handleStudentChange}
                    placeholder="Nationality"
                    className={inputClassName}
                  />

                  <input
                    name="birthRegistrationNumber"
                    value={studentData.birthRegistrationNumber}
                    onChange={handleStudentChange}
                    placeholder="Birth Registration Number"
                    className={inputClassName}
                  />

                  <select
                    name="selectedClass"
                    value={studentData.selectedClass}
                    onChange={handleStudentChange}
                    className={selectClassName}
                  >
                    <option className="bg-page-primary text-primary" value="">
                      Select Class *
                    </option>
                    {admissionClasses.map((item) => (
                      <option
                        key={item.title}
                        value={item.title}
                        className="bg-page-primary text-primary"
                      >
                        {item.title}
                      </option>
                    ))}
                  </select>

                  <input
                    name="previousSchool"
                    value={studentData.previousSchool}
                    onChange={handleStudentChange}
                    placeholder="Previous School"
                    className={inputClassName}
                  />

                  <input
                    name="previousClass"
                    value={studentData.previousClass}
                    onChange={handleStudentChange}
                    placeholder="Previous Class"
                    className={inputClassName}
                  />

                  <div className="rounded-2xl border border-soft bg-page-primary p-4">
                    <label className="text-sm font-black text-primary">
                      Student Photo *
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleStudentPhotoChange}
                      className="mt-3 w-full text-sm font-semibold text-primary file:mr-4 file:rounded-full file:border-0 file:bg-color-secondary file:px-4 file:py-2 file:text-sm file:font-black file:text-brand-primary"
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <textarea
                    name="presentAddress"
                    value={studentData.presentAddress}
                    onChange={handleStudentChange}
                    rows={4}
                    placeholder="Present Address"
                    className={inputClassName}
                  />

                  <textarea
                    name="permanentAddress"
                    value={studentData.permanentAddress}
                    onChange={handleStudentChange}
                    rows={4}
                    placeholder="Permanent Address"
                    className={inputClassName}
                  />
                </div>

                {studentPhoto && (
                  <div className="mt-5 rounded-[24px] border border-soft bg-page-primary p-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr] sm:items-center">
                      {studentPhotoPreview && (
                        <img
                          src={studentPhotoPreview}
                          alt="Student preview"
                          className="h-40 w-40 rounded-[20px] object-cover"
                        />
                      )}

                      <div>
                        <p className="font-black text-primary">
                          {studentPhoto.name}
                        </p>
                        <p className="mt-1 text-sm font-bold text-secondary">
                          {formatFileSize(studentPhoto.size)}
                        </p>

                        <button
                          type="button"
                          onClick={removeStudentPhoto}
                          className="mt-4 inline-flex items-center gap-2 rounded-full bg-color-primary px-5 py-3 text-sm font-black text-inverse"
                        >
                          Remove Photo
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Guardian Form */}
              <section className="rounded-[30px] border border-soft bg-page-secondary p-5 sm:p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                    <FaPeopleGroup />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      Form 02
                    </p>
                    <h3 className="text-2xl font-black text-primary">
                      Guardian Information Form
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {[
                    ["fatherName", "Father Name"],
                    ["fatherOccupation", "Father Occupation"],
                    ["fatherNid", "Father NID"],
                    ["fatherPhone", "Father Phone"],
                    ["motherName", "Mother Name"],
                    ["motherOccupation", "Mother Occupation"],
                    ["motherNid", "Mother NID"],
                    ["motherPhone", "Mother Phone"],
                    ["guardianName", "Guardian Name *"],
                    ["guardianRelation", "Guardian Relation"],
                    ["guardianPhone", "Guardian Phone *"],
                    ["guardianEmail", "Guardian Email"],
                    ["emergencyContact", "Emergency Contact"],
                  ].map(([name, placeholder]) => (
                    <input
                      key={name}
                      type={name === "guardianEmail" ? "email" : "text"}
                      name={name}
                      value={guardianData[name as keyof GuardianData]}
                      onChange={handleGuardianChange}
                      placeholder={placeholder}
                      className={inputClassName}
                    />
                  ))}

                  <div className="rounded-2xl border border-soft bg-page-primary p-4">
                    <label className="text-sm font-black text-primary">
                      Guardian Photo *
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleGuardianPhotoChange}
                      className="mt-3 w-full text-sm font-semibold text-primary file:mr-4 file:rounded-full file:border-0 file:bg-color-secondary file:px-4 file:py-2 file:text-sm file:font-black file:text-brand-primary"
                    />
                  </div>
                </div>

                <textarea
                  name="guardianPresentAddress"
                  value={guardianData.guardianPresentAddress}
                  onChange={handleGuardianChange}
                  rows={4}
                  placeholder="Guardian Present Address"
                  className={`mt-5 w-full ${inputClassName}`}
                />

                {guardianPhoto && (
                  <div className="mt-5 rounded-[24px] border border-soft bg-page-primary p-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr] sm:items-center">
                      {guardianPhotoPreview && (
                        <img
                          src={guardianPhotoPreview}
                          alt="Guardian preview"
                          className="h-40 w-40 rounded-[20px] object-cover"
                        />
                      )}

                      <div>
                        <p className="font-black text-primary">
                          {guardianPhoto.name}
                        </p>
                        <p className="mt-1 text-sm font-bold text-secondary">
                          {formatFileSize(guardianPhoto.size)}
                        </p>

                        <button
                          type="button"
                          onClick={removeGuardianPhoto}
                          className="mt-4 inline-flex items-center gap-2 rounded-full bg-color-primary px-5 py-3 text-sm font-black text-inverse"
                        >
                          Remove Photo
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Documents */}
              <section className="rounded-[30px] border border-soft bg-page-secondary p-5 sm:p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                    <FaFileLines />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      Upload Area
                    </p>
                    <h3 className="text-2xl font-black text-primary">
                      Multiple Document Upload
                    </h3>
                  </div>
                </div>

                <div className="rounded-[24px] border border-dashed border-soft bg-page-primary p-5">
                  <input
                    key={fileInputKey}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleDocumentChange}
                    className="w-full text-sm font-semibold text-primary file:mr-4 file:rounded-full file:border-0 file:bg-color-secondary file:px-4 file:py-2 file:text-sm file:font-black file:text-brand-primary"
                  />

                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                    PDF, DOC, DOCX, JPG, JPEG, PNG file নির্বাচন করা যাবে। একই
                    নাম ও একই size-এর duplicate file add হবে না।
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-3 rounded-[20px] border border-soft bg-page-primary p-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-black text-primary">
                    Total Documents: {documents.length}
                  </p>
                  <p className="text-sm font-black text-brand-primary">
                    Total Size: {formatFileSize(totalDocumentSize)}
                  </p>

                  {documents.length > 0 && (
                    <button
                      type="button"
                      onClick={clearDocuments}
                      className="rounded-full bg-color-primary px-5 py-3 text-sm font-black text-inverse"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                <div className="mt-5 space-y-3">
                  {documents.map((file, index) => (
                    <div
                      key={`${file.name}-${file.size}-${index}`}
                      className="flex flex-col gap-3 rounded-[18px] border border-soft bg-page-primary p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-black text-primary">{file.name}</p>
                        <p className="mt-1 text-sm font-bold text-secondary">
                          {formatFileSize(file.size)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeDocument(index)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-color-primary px-5 py-3 text-sm font-black text-inverse"
                      >
                        Remove
                        <FaTrash />
                      </button>
                    </div>
                  ))}

                  {!documents.length && (
                    <div className="rounded-[18px] border border-soft bg-page-primary p-4 text-sm font-semibold text-secondary">
                      এখনো কোনো document নির্বাচন করা হয়নি।
                    </div>
                  )}
                </div>
              </section>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-color-primary px-8 py-4 text-sm font-black text-inverse shadow-md transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl sm:w-auto"
                >
                  Submit Application
                  <FaCheck />
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-soft bg-page-primary px-8 py-4 text-sm font-black text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto"
                >
                  Reset Everything
                </button>
              </div>
            </div>

            {/* Live Summary */}
            <aside className="lg:col-span-4">
              <div className="sticky top-6 rounded-[30px] border border-soft bg-page-secondary p-5 sm:p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-color-secondary text-3xl text-brand-primary">
                  <FaClipboardCheck />
                </div>

                <h3 className="mt-5 text-2xl font-black text-primary">
                  Live Application Summary
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    ["Student", studentData.studentFullName || "Not provided"],
                    ["Bangla Name", studentData.studentBanglaName || "Not provided"],
                    ["Date of Birth", studentData.dateOfBirth || "Not selected"],
                    ["Class", studentData.selectedClass || "Not selected"],
                    ["Guardian", guardianData.guardianName || "Not provided"],
                    ["Guardian Phone", guardianData.guardianPhone || "Not provided"],
                    ["Student Photo", studentPhoto ? "Uploaded" : "Missing"],
                    ["Guardian Photo", guardianPhoto ? "Uploaded" : "Missing"],
                    ["Documents", `${documents.length} file(s)`],
                    ["Application Fee", selectedClassInfo?.fee || "Select class first"],
                    ["Required Docs", selectedClassInfo?.documents || "Select class first"],
                    ["Readiness", isApplicationReady ? "Ready" : "Incomplete"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-soft bg-page-primary p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-bold leading-7 text-secondary">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {applicationId && (
                  <div className="mt-5 rounded-[22px] border border-soft bg-color-secondary p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                      Generated ID
                    </p>
                    <p className="mt-2 text-2xl font-black text-primary">
                      {applicationId}
                    </p>
                  </div>
                )}
              </div>
            </aside>
          </form>

          {submittedApplication && (
            <section className="mt-8 rounded-[30px] border border-soft bg-color-secondary p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-color-primary text-2xl text-inverse">
                  <FaCheck />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                    Submitted Local Receipt
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-primary">
                    Application ID: {submittedApplication.applicationId}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                    Student: {submittedApplication.student.studentFullName} ·
                    Class: {submittedApplication.student.selectedClass} ·
                    Guardian: {submittedApplication.guardian.guardianName} ·
                    Documents: {submittedApplication.documentCount} · Total Size:{" "}
                    {submittedApplication.totalDocumentSize}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-7 text-secondary">
                    Student Photo: {submittedApplication.studentPhotoName} ·
                    Guardian Photo: {submittedApplication.guardianPhotoName}
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-soft bg-page-secondary p-4">
              <Image
                src="/assets/4.jpg"
                alt="Admission process"
                width={900}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[360px] w-full rounded-[24px] object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
                আবেদন প্রক্রিয়া
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                ধাপে ধাপে অনলাইন ভর্তি আবেদন সম্পন্ন করুন
              </h2>

              <div className="mt-6 space-y-3">
                {processItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-[18px] border border-soft bg-page-secondary p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-color-primary text-xs font-black text-inverse">
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="text-sm font-black text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold leading-7 text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[34px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              প্রয়োজনীয় ডকুমেন্ট
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              Required Documents
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {requiredDocuments.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-soft bg-page-secondary p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
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

      {/* Admission Table */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-primary">
              ভর্তি তথ্য তালিকা
            </p>

            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              Admission Information Table
            </h2>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-soft bg-page-primary shadow-sm">
            <div className="hidden lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-soft bg-page-secondary">
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      শ্রেণি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      বয়স / যোগ্যতা
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      আবেদন ফি
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      প্রয়োজনীয় ডকুমেন্ট
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-black text-primary">
                      অবস্থা
                    </th>
                    <th className="px-5 py-4 text-right text-sm font-black text-primary">
                      ফাইল
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {admissionClasses.map((item) => (
                    <tr
                      key={item.title}
                      className="border-b border-soft transition-all duration-500 hover:bg-page-secondary"
                    >
                      <td className="px-5 py-5 text-sm font-black text-primary">
                        {item.title}
                      </td>
                      <td className="px-5 py-5 text-sm font-bold text-secondary">
                        {item.age}
                      </td>
                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-color-secondary px-3 py-2 text-xs font-black text-brand-primary">
                          {item.fee}
                        </span>
                      </td>
                      <td className="px-5 py-5 text-sm font-semibold leading-7 text-secondary">
                        {item.documents}
                      </td>
                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-color-primary px-3 py-2 text-xs font-black text-inverse">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-5 py-5 text-right">
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 rounded-full bg-color-primary px-4 py-2 text-xs font-black text-inverse transition-all duration-500 hover:-translate-y-1 hover:opacity-90"
                        >
                          Download
                          <FaCloudArrowDown />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
              {admissionClasses.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-soft bg-page-secondary p-4"
                >
                  <h3 className="text-xl font-black text-primary">
                    {item.title}
                  </h3>
                  <div className="mt-4 space-y-2 text-sm font-semibold leading-7 text-secondary">
                    <p>
                      <span className="font-black text-primary">বয়স:</span>{" "}
                      {item.age}
                    </p>
                    <p>
                      <span className="font-black text-primary">ফি:</span>{" "}
                      {item.fee}
                    </p>
                    <p>
                      <span className="font-black text-primary">ডকুমেন্ট:</span>{" "}
                      {item.documents}
                    </p>
                    <p>
                      <span className="font-black text-primary">অবস্থা:</span>{" "}
                      {item.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 lg:grid-cols-2">
          {guidelineSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[30px] border border-soft bg-page-primary p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-color-secondary text-2xl text-brand-primary">
                  {section.icon}
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-primary">
                    নির্দেশনা
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-primary">
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {section.points.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-[18px] border border-soft bg-page-secondary p-4"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-color-primary text-[10px] text-inverse">
                      <FaCheck />
                    </span>

                    <p className="text-sm font-semibold leading-7 text-secondary">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
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
                সঠিক তথ্য দিয়ে সময়মতো অনলাইন ভর্তি আবেদন সম্পন্ন করুন
              </h2>

              <p className="mt-5 text-sm font-semibold leading-8 text-inverse opacity-90 sm:text-base sm:leading-9">
                ভর্তি আবেদন শিক্ষার্থীর নতুন শিক্ষাযাত্রার প্রথম ধাপ। তাই
                শিক্ষার্থীর তথ্য, অভিভাবকের তথ্য, ছবি, ডকুমেন্ট এবং শ্রেণি
                নির্বাচন সঠিকভাবে সম্পন্ন করুন।
              </p>
            </div>

            <div className="flex items-center justify-center bg-color-secondary p-6 lg:col-span-4 lg:p-10">
              <div className="w-full rounded-[30px] border border-soft bg-page-primary p-6 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-color-primary text-4xl text-inverse">
                  <FaShieldHalved />
                </div>

                <p className="mt-6 text-3xl font-black text-primary">
                  Admission Ready
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-secondary">
                  Browser-only demo form হিসেবে সব feature local state দিয়ে কাজ
                  করবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Technical Note */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] rounded-[24px] border border-soft bg-page-primary p-5">
          <div className="flex items-start gap-3">
            <FaCircleInfo className="mt-1 shrink-0 text-brand-primary" />
            <p className="text-sm font-semibold leading-7 text-secondary">
              Note: এই page কোনো backend/API ছাড়া কাজ করে। তাই selected image
              ও document browser memory-তে local preview/list হিসেবে থাকবে। Real
              admission submission করার জন্য পরবর্তীতে API/server action/database
              যুক্ত করতে হবে।
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnlineAdmissionPage;