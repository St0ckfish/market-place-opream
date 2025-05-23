/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { LuSearch } from "react-icons/lu";
import Box from "~/_components/Box";
import { VscSettings } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import translations from "./translations";

const Education = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const router = useRouter();
  const [search, setSearch] = useState("");
  const cardsData = [
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Passed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Failed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Missed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Passed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Failed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Missed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Passed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Failed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Missed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Passed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Failed",
    },
    {
      title: "Articulate structure of C++ and Java in Semester I",
      subject: "Network Engineering",
      date: "3-01-2023",
      passingPercentage: "70%",
      scoredPercentage: "75%",
      status: "Missed",
    },
  ];

  const getStatusClass = (status: any) => {
    switch (status) {
      case "Passed":
        return "text-success bg-success/10";
      case "Failed":
        return "text-softRed bg-softRed/10";
      case "Missed":
        return "text-warning bg-warning/10";
      default:
        return "text-textSecondary bg-bgSecondary";
    }
  };

  return (
    <>
      <Container mr={false}>
        <div className="flex gap-5">
          <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="mb-2 hidden min-w-[250px] md:block">
                <Text font={"bold"} className="text-2xl md:text-3xl">
                  {t.education}
                </Text>
              </div>
            </div>
            <div className="gap-2 pr-2 pt-2">
              <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
                <div className="mb-3 hidden md:block">
                  <label htmlFor="icon" className="sr-only">
                    {t.searchPlaceholder}
                  </label>
                  <div className="relative min-w-[150px]">
                    <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                      <LuSearch size={20} className="text-textSecondary" />
                    </div>
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      id="icon"
                      name="icon"
                      className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      placeholder={t.searchPlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => router.push("/education")}
              >
                <img src="/images/home.png" alt="Home" className="w-[25px]" />
                <Text font={"bold"}>{t.home}</Text>
              </div>
              <div
                className={`mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => router.push("/education/grades")}
              >
                <img src="/images/Grade.png" alt="Grade" className="w-[25px]" />
                <Text font={"bold"}>{t.grade}</Text>
              </div>
              <div
                className={`mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => router.push("/education/courses")}
              >
                <img
                  src="/images/Courses.png"
                  alt="Service"
                  className="w-[25px]"
                />
                <Text font={"bold"}>{t.courses}</Text>
              </div>
            </div>
          </div>
          <div>
            <Box padding="0">
              <div className="mx-6 flex justify-between space-x-4 md:hidden">
                {/* Home Button */}
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-bgPrimary px-4 py-2 transition hover:bg-bgSecondary"
                  onClick={() => router.push("/education")}
                >
                  <img src="/images/home.png" alt="Home" className="h-6 w-6" />
                  <Text font="bold">{t.home}</Text>
                </div>

                {/* Grade Button */}
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-bgSecondary px-4 py-2 transition hover:bg-bgSecondary"
                  onClick={() => router.push("/education/grades")}
                >
                  <img
                    src="/images/Grade.png"
                    alt="Grade"
                    className="h-6 w-6"
                  />
                  <Text font="bold">{t.grade}</Text>
                </div>

                {/* Courses Button */}
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-bgPrimary px-4 py-2 transition hover:bg-bgSecondary"
                  onClick={() => router.push("/education/courses")}
                >
                  <img
                    src="/images/Courses.png"
                    alt="Courses"
                    className="h-6 w-6"
                  />
                  <Text font="bold">{t.courses}</Text>
                </div>
              </div>
              <div className="mx-6 flex justify-between pt-8">
                <Text font={"bold"} className="hidden md:block" size={"2xl"}>
                  {t.myGrades}
                </Text>
                <div className="relative flex w-full md:w-1/3">
                  <div className="relative w-full">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      id="icon"
                      name="icon"
                      className="block w-full rounded-lg border border-borderPrimary px-8 py-[14px] pl-10 text-sm outline-none focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50" // Add `pl-10` for padding to the left
                      placeholder={t.searchPlaceholder}
                    />
                    <LuSearch
                      className="absolute left-3 top-[26px] -translate-y-1/2 text-textSecondary"
                      size={20}
                    />
                  </div>
                  <VscSettings
                    className={`rounded-lg border border-borderPrimary p-2 ${language == "ar" ? "mr-2" : "ml-2"} cursor-pointer text-textSecondary`}
                    size={50}
                  />
                </div>
              </div>
              <div className="p-6">
                <h1 className="mb-8 text-2xl font-bold text-textPrimary">
                  {t.learningJavascript}
                </h1>
                <div className="grid grid-cols-1 gap-6 pb-40 lg:grid-cols-2 xl:grid-cols-4">
                  {cardsData.map((card, index) => (
                    <div
                      key={index}
                      className="relative rounded-xl border bg-white p-4 pt-8 shadow-md transition-shadow hover:shadow-lg"
                    >
                      {/* Status */}
                      <div
                        className={`absolute right-0 top-0 mb-2 rounded-bl-3xl p-2 text-sm font-semibold ${getStatusClass(card.status)}`}
                      >
                        {card.status}
                      </div>

                      {/* Title */}
                      <h2 className="mb-2 text-lg font-semibold text-textPrimary">
                        {card.title}
                      </h2>

                      {/* Subject */}
                      <p className="text-testSecondary mb-4 text-sm">
                        {t.subject}: {card.subject}
                      </p>

                      {/* Date */}
                      <div className="text-testSecondary mb-4 flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {card.date}
                      </div>

                      {/* Percentages */}
                      <p className="mb-1 text-sm text-gray-600">
                        {t.passingPercentage}:{" "}
                        <span className="text-primary2">
                          {card.passingPercentage}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600">
                        {t.scoredPercentage}:{" "}
                        <span className="text-success">
                          {card.scoredPercentage}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Education;
