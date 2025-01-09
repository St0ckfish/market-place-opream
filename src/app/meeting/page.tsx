"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { IoMdLink } from "react-icons/io";
import { FaExpand } from "react-icons/fa6";
import { RiVoiceprintFill } from "react-icons/ri";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import { RiUserForbidLine } from "react-icons/ri";
import { CiVideoOff, CiVideoOn } from "react-icons/ci";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { BsThreeDots } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import Input from "~/_components/Input";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { BsRecordCircle } from "react-icons/bs";
import { LuShare } from "react-icons/lu";
import { IoMdMic } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHandPaper } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa6";

function Meeting() {
  const photos = [
    "images/Ellipse 7.png",
    "images/Ellipse 8.png",
    "images/Ellipse 7.png",
    "images/Ellipse 8.png",
    "images/Ellipse 8.png",
    "images/Ellipse 8.png",
  ];

  const photosMeeting = [
    "/images/meeting.jpg",
    "/images/meeting.jpg",
    "/images/meeting.jpg",
    "/images/meeting.jpg",
  ];

  const [selectedOption, setSelectedOption] = useState("Groups");

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  return (
    <>
      <Container>
        <Box className="-mt-10 md:m-0">
          <div className="flex gap-2">
            <div className="w-full md:w-2/3">
              {/* Meeting Details */}
              <div className="hidden items-center justify-between md:flex">
                <div className="p-2">
                  <Text font={"bold"} size={"2xl"}>
                    OPream Meeting
                  </Text>
                  <Text color={"gray"}>June 12th, 2024 | 11:00 AM</Text>
                </div>

                {/* Photos Section */}
                <div className="flex items-center space-x-2">
                  <div className="flex flex-wrap items-center -space-x-4">
                    {photos.slice(0, 4).map((photo, index) => (
                      <div
                        key={index}
                        className="relative h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-white"
                      >
                        <img
                          src={photo}
                          alt={`Profile Photo ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    {photos.length > 4 && (
                      <div className="bg-bgFourth flex h-[50px] w-[50px] items-center justify-center rounded-full text-center text-xl font-medium text-primary2">
                        +{photos.length - 4}
                      </div>
                    )}
                  </div>
                  {/* Link */}
                  <div className="bg-bgFourth flex h-12 items-center justify-center gap-2 rounded-full px-6">
                    <IoMdLink size={30} className="text-primary2" />
                    <Text
                      color={"primary2"}
                      className="border-l-2 border-primary2 pl-2 font-bold"
                    >
                      cem-jnmt-hsu
                    </Text>
                  </div>
                </div>
              </div>
              <div className="relative h-[350px] w-full p-4 md:h-[450px]">
                <img
                  src="/images/meeting.jpg"
                  alt="meeting photo"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute left-8 top-8 hidden w-[200px] md:block">
                  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white opacity-25"></div>
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
                    <BsRecordCircle size={25} className="text-error" />
                    <Text font={"semiBold"} className="pl-2 text-white">
                      24:01:45
                    </Text>
                  </div>
                </div>

                <div className="absolute right-8 top-8 hidden w-[50px] md:block">
                  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-white opacity-25"></div>
                  <FaExpand
                    size={25}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                  />
                </div>

                <div className="absolute bottom-8 right-8 hidden w-[50px] md:block">
                  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-white opacity-25"></div>
                  <RiVoiceprintFill
                    size={25}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                  />
                </div>
                <div className="absolute left-8 top-8 w-[200px] md:bottom-8 md:top-auto">
                  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white opacity-25"></div>
                  <Text
                    font={"semiBold"}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                  >
                    Adam Joseph
                  </Text>
                </div>
                {/* <div className="absolute bottom-8 left-8 md:right-8 md:left-auto w-[50px]">
              </div> */}
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white opacity-25 md:hidden"></div>
                <CiMicrophoneOff
                  size={40}
                  className="absolute bottom-8 left-8 block rounded-full bg-primary p-1 text-white md:bottom-4 md:top-auto md:hidden md:bg-primary2"
                />
              </div>
              <div className="grid w-full grid-cols-2 gap-4 overflow-x-auto rounded-lg p-4 md:grid-cols-4">
                {photosMeeting.map((photo, index) => (
                  <div
                    key={index}
                    className="relative h-[180px] w-full md:h-[200px] md:w-full"
                  >
                    {/* Image */}
                    <img
                      src={photo}
                      alt={`Meeting photo ${index + 1}`}
                      className="h-full w-full rounded-xl object-cover"
                    />

                    {/* Icon */}
                    {index % 2 === 0 ? (
                      <CiMicrophoneOff
                        size={35}
                        className="absolute right-4 top-4 rounded-full bg-error p-1 text-white md:bottom-4 md:top-auto"
                      />
                    ) : (
                      <CiMicrophoneOn
                        size={35}
                        className="absolute right-4 top-4 rounded-full bg-primary p-1 text-white md:bottom-4 md:top-auto md:bg-primary2"
                      />
                    )}

                    {/* Text */}
                    <Text
                      font={"semiBold"}
                      className="absolute bottom-4 left-16 -translate-x-1/2 transform rounded-lg bg-black/50 px-3 py-1 text-xs text-white md:text-sm"
                    >
                      Adam Joseph
                    </Text>
                  </div>
                ))}
              </div>

              <div className="flex h-20 items-center justify-center p-4">
                <div className="hidden w-4/5 items-center justify-between md:flex">
                  <IoVolumeMediumSharp
                    className="cursor-pointer rounded-full bg-bgSecondary p-2 text-textSecondary"
                    size={40}
                  />
                  <div className="flex gap-8">
                    <BsRecordCircle
                      className="cursor-pointer rounded-full bg-bgSecondary p-2 text-textSecondary"
                      size={40}
                    />
                    <LuShare
                      className="cursor-pointer rounded-full bg-bgSecondary p-2 text-textSecondary"
                      size={40}
                    />
                    <IoMdMic
                      className="cursor-pointer rounded-full bg-bgSecondary p-2 text-textSecondary"
                      size={40}
                    />
                    <ImPhoneHangUp
                      className="cursor-pointer rounded-full bg-primary2 p-2 text-white"
                      size={50}
                    />
                    <FaVideo
                      className="cursor-pointer rounded-full bg-bgSecondary p-2 text-textSecondary"
                      size={40}
                    />
                    <IoSettingsSharp
                      className="cursor-pointer rounded-full bg-bgSecondary p-2 text-textSecondary"
                      size={40}
                    />
                    <FaHandPaper
                      className="cursor-pointer rounded-full bg-bgSecondary p-2 text-textSecondary"
                      size={40}
                    />
                  </div>
                  <FaExpand
                    className="cursor-pointer rounded-full bg-bgSecondary p-2 text-textSecondary"
                    size={40}
                  />
                </div>
              </div>
            </div>
            <div className="hidden w-1/3 md:block">
              <div className="flex items-center justify-between">
                <div className="p-2">
                  <Text font={"bold"} size={"2xl"}>
                    Participants
                  </Text>
                </div>

                {/* Photos Section */}
                {/* Link */}
                <div className="bg-bgFourth flex h-12 items-center justify-center gap-2 rounded-full px-6">
                  <Text color={"primary2"} className="font-bold">
                    Add Participant
                  </Text>
                  <RiUserForbidLine size={30} className="text-primary2" />
                </div>
              </div>

              <div className="mt-4 max-h-[250px] gap-4 overflow-y-auto">
                <div className="flex h-20 w-full items-center justify-between px-4">
                  {/* Rounded Photo */}
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                    <img
                      src="/images/Rectangle 68.png"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                    text
                  </div>

                  {/* Icons on the Right */}
                  <div className="flex gap-4">
                    <CiMicrophoneOff
                      size={35}
                      color="red"
                      className="rounded-full p-1 text-xl text-white"
                    />
                    <CiVideoOff
                      color="red"
                      size={35}
                      className="rounded-full p-1 text-xl text-white"
                    />
                  </div>
                </div>
                <div className="flex h-20 w-full items-center justify-between px-4">
                  {/* Rounded Photo */}
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                    <img
                      src="/images/Rectangle 68.png"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                    text
                  </div>

                  {/* Icons on the Right */}
                  <div className="flex gap-4">
                    <CiMicrophoneOn
                      size={35}
                      color="blue"
                      className="rounded-full p-1 text-xl text-white"
                    />
                    <CiVideoOff
                      color="red"
                      size={35}
                      className="rounded-full p-1 text-xl text-white"
                    />
                  </div>
                </div>
                <div className="flex h-20 w-full items-center justify-between px-4">
                  {/* Rounded Photo */}
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                    <img
                      src="/images/Rectangle 68.png"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                    text
                  </div>

                  {/* Icons on the Right */}
                  <div className="flex gap-4">
                    <CiMicrophoneOff
                      size={35}
                      color="red"
                      className="rounded-full p-1 text-xl text-white"
                    />
                    <CiVideoOn
                      color="blue"
                      size={35}
                      className="rounded-full p-1 text-xl text-white"
                    />
                  </div>
                </div>
                <div className="flex h-20 w-full items-center justify-between px-4">
                  {/* Rounded Photo */}
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                    <img
                      src="/images/Rectangle 68.png"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                    text
                  </div>

                  {/* Icons on the Right */}
                  <div className="flex gap-4">
                    <CiMicrophoneOff
                      size={35}
                      color="red"
                      className="rounded-full p-1 text-xl text-white"
                    />
                    <CiVideoOn
                      color="blue"
                      size={35}
                      className="rounded-full p-1 text-xl text-white"
                    />
                  </div>
                </div>
                <div className="flex h-20 w-full items-center justify-between px-4">
                  {/* Rounded Photo */}
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                    <img
                      src="/images/Rectangle 68.png"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                    text
                  </div>

                  {/* Icons on the Right */}
                  <div className="flex gap-4">
                    <CiMicrophoneOn
                      size={35}
                      color="blue"
                      className="rounded-full p-1 text-xl text-white"
                    />
                    <CiVideoOn
                      color="blue"
                      size={35}
                      className="rounded-full p-1 text-xl text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-6">
                <Text size={"2xl"} font={"bold"}>
                  Chats
                </Text>
                <RadioGroup.Root
                  className="bg-bgFourth flex w-1/2 rounded-full p-2"
                  value={selectedOption}
                  onValueChange={handleOptionChange}
                  aria-labelledby="groups-label"
                >
                  <RadioGroup.Item
                    key={1}
                    value="Groups"
                    className="group flex h-12 w-1/2 flex-col items-center justify-center rounded-full bg-transparent px-4 text-center text-textPrimary transition hover:border-primary2 hover:text-primary2 focus-visible:ring focus-visible:ring-blue-200 focus-visible:ring-opacity-75 data-[state=checked]:border-primary data-[state=checked]:bg-primary2"
                    aria-labelledby={`1-label`}
                  >
                    <span
                      id="groups-label"
                      className="text-xl font-semibold group-data-[state=checked]:text-white"
                    >
                      Groups
                    </span>
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    key={2}
                    value="Personal"
                    className="group flex h-12 w-1/2 flex-col items-center justify-center rounded-full bg-transparent px-4 text-center text-textPrimary transition hover:border-primary2 hover:text-primary2 focus-visible:ring focus-visible:ring-blue-200 focus-visible:ring-opacity-75 data-[state=checked]:border-primary data-[state=checked]:bg-primary2"
                    aria-labelledby="personal-label"
                  >
                    <span
                      id="personal-label"
                      className="text-xl font-semibold group-data-[state=checked]:text-white"
                    >
                      Personal
                    </span>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              </div>
              <div className="mt-4 max-h-[250px] gap-4 overflow-y-auto scrollbar-hide">
                {selectedOption === "Groups" ? (
                  <>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message that can vary in length depending on the
                          content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message that can vary in length depending on the
                          content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message that can vary in length depending on the
                          content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message that can vary in length depending on the
                          content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message that can vary in length depending on the
                          content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message that can vary in length depending on the
                          content.
                        </Text>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message in personal that can vary in length depending
                          on the content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message in personal that can vary in length depending
                          on the content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message in personal that can vary in length depending
                          on the content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message in personal that can vary in length depending
                          on the content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message in personal that can vary in length depending
                          on the content.
                        </Text>
                      </div>
                    </div>
                    <div className="mt-4 flex w-full items-start gap-4 px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <Text size={"sm"} color={"gray"}>
                            Kathryn Murphy
                          </Text>
                          <Text size={"sm"} color={"gray"}>
                            11:02 AM
                          </Text>
                        </div>
                        <Text
                          size={"xl"}
                          font={"semiBold"}
                          className="break-words"
                        >
                          Good afternoon, everyone. This is an example of a chat
                          message in personal that can vary in length depending
                          on the content.
                        </Text>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-2 flex justify-center">
                <BsThreeDots className="text-textSecondary" size={30} />
              </div>
              <div className="flex justify-center">
                <div className="my-4 flex h-16 w-4/5 items-center justify-between rounded-full bg-bgSecondary p-4">
                  <div className="flex gap-4">
                    <FiLink className="text-textSecondary" size={30} />
                  </div>
                  <Input placeholder="Type your message" border="none" />
                  <FiSend
                    className="rounded-full bg-primary2 p-2 text-white"
                    size={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
      <div className="fixed bottom-0 right-0 z-[2001] block h-24 w-full bg-bgPrimary shadow-[0_-4px_6px_rgba(0,0,0,0.1)] drop-shadow-md md:hidden">
        <div className="flex h-24 w-full items-center justify-between px-4 md:hidden">
          <ImPhoneHangUp
            className="cursor-pointer rounded-full bg-error p-2 text-white"
            size={50}
          />
          <IoMdMic
            className="cursor-pointer rounded-full text-textSecondary"
            size={30}
          />
          <FaVideo
            className="cursor-pointer rounded-full text-textSecondary"
            size={30}
          />
          <FaUsers
            className="cursor-pointer rounded-full text-textSecondary"
            size={30}
          />
          <BiSolidMessageDetail
            className="cursor-pointer rounded-full text-textSecondary"
            size={30}
          />
          <FaArrowUp
            className="cursor-pointer rounded-md bg-textSecondary p-1 text-white"
            size={25}
          />
        </div>
      </div>
    </>
  );
}

export default Meeting;
