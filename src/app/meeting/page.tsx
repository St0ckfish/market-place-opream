/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { IoMdLink } from "react-icons/io";
import { FaExpand } from "react-icons/fa6";
import { BsRecordCircle } from "react-icons/bs";
import { RiVoiceprintFill } from "react-icons/ri";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import { RiUserForbidLine } from "react-icons/ri";


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

  return (
    <Container>
      <Box>
        <div className="flex gap-2">
          <div className="w-2/3">
            {/* Meeting Details */}
            <div className="flex items-center justify-between">
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
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary2/10 text-center text-xl font-medium text-primary2">
                      +{photos.length - 4}
                    </div>
                  )}
                </div>
                {/* Link */}
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary2/10 px-6">
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
            <div className="relative h-[600px] w-full p-4">
              <img
                src="/images/meeting.jpg"
                alt="meeting photo"
                className="h-full w-full rounded-xl object-cover"
              />

              {/* <div className="absolute left-8 top-8 w-[200px]">
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-white opacity-25">
                  <BsRecordCircle className="text-error" size={""} />
                  <Text className="pl-2 font-bold text-white">24:01:45</Text>
                </div>
              </div> */}

              <div className="absolute left-8 top-8 w-[200px]">
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white opacity-25"></div>
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
                  <BsRecordCircle size={25} className="text-error" />
                  <Text font={"semiBold"} className="pl-2 text-white">
                    24:01:45
                  </Text>
                </div>
              </div>

              <div className="absolute right-8 top-8 w-[50px]">
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-white opacity-25"></div>
                <FaExpand
                  size={25}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                />
              </div>

              <div className="absolute bottom-8 right-8 w-[50px]">
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-white opacity-25"></div>
                <RiVoiceprintFill
                  size={25}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                />
              </div>
              <div className="absolute bottom-8 left-8 w-[200px]">
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white opacity-25"></div>
                <Text
                  font={"semiBold"}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                >
                  Adam Joseph
                </Text>
              </div>

              {/* <div className="absolute bottom-8 left-8 w-[200px]">
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-white opacity-25">
                  <Text className="font-bold text-white">Adam Joseph</Text>
                </div>
              </div> */}
            </div>
            <div className="flex w-full gap-4 overflow-x-auto rounded-lg p-4">
              {photosMeeting.map((photo, index) => (
                <div key={index} className="min-[150px] relative w-1/4">
                  {/* Image */}
                  <img
                    src={photo}
                    alt={`meeting photo ${index + 1}`}
                    className="min-[150px] w-full rounded-xl"
                  />

                  {/* Icon */}
                  {index % 2 == 0 ? (
                    <CiMicrophoneOff
                      size={35}
                      className="absolute bottom-4 right-4 rounded-full bg-error p-1 text-xl text-white"
                    />
                  ) : (
                    <CiMicrophoneOn
                      size={35}
                      className="absolute bottom-2 right-4 rounded-full bg-primary2 p-1 text-xl text-white"
                    />
                  )}

                  {/* Text */}
                  <Text
                    font={"semiBold"}
                    className="absolute bottom-2 left-1/3 -translate-x-1/2 transform rounded-full bg-black/25 px-3 py-1 text-white"
                  >
                    Adam Joseph
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3">
          <div className="flex items-center justify-between">
              <div className="p-2">
                <Text font={"bold"} size={"2xl"}>
                Participants
                </Text>
              </div>

              {/* Photos Section */}
                {/* Link */}
                <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary2/10 px-6">
                  <Text
                    color={"primary2"}
                    className="font-bold"
                  >
                    Add Participant
                  </Text>
                  <RiUserForbidLine size={30} className="text-primary2" />

                </div>
            </div>
          </div>
        </div>
        {/* <div>
            <img src="/public/images/meeting.jpg" alt="meeting" />
          </div> */}
      </Box>
    </Container>
  );
}

export default Meeting;
