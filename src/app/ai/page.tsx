"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Search, Mic, Smile, Paperclip } from "lucide-react";
import Container from "~/_components/Container";
import { IoIosArrowRoundForward, IoIosVideocam } from "react-icons/io";
import { FaFigma, FaPhone } from "react-icons/fa6";
import { HiOutlineDotsHorizontal, HiOutlineDotsVertical } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { FaHeartbeat } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { TbSend } from "react-icons/tb";
const AIChat = () => {
    return (
        <Container className="flex h-[800px]">
            {/* Sidebar */}
            <div className="w-80 bg-bgPrimary">
                <div className="p-4">
                    <div className="flex items-center w-full  py-4">
                        <button className=" flex items-center w-full py-3 px-3 gap-2 font-medium shadow-lg rounded-lg bg-primary text-white"><FiPlus color="white" size={20} /> Start a new chat</button>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-4 mb-4 font-semibold text-sm">
                        <button className="text-xl font-semibold">History</button>
                    </div>

                    {/* Chat list */}
                    <div className="space-y-2">

                        <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <div className="w-10 h-10 mr-3">
                                <img src="/images/chatProf.png" className="rounded-full w-10 h-10" alt="#" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <span className="font-medium">Hello</span>
                                    <span className="text-xs text-gray-500"><HiOutlineDotsHorizontal size={17} className="" /></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Main chat area */}
            <div className="flex-1 flex flex-col ">

                {/* Messages area */}
                <div className="grid items-center h-full p-4 overflow-y-auto bg-bgPrimary bg-cover bg-fixed">
                    {/* Header Section */}
                    <div className="text-center ">
                        <h1 className="text-[48px] font-semibold text-gray-800 mb-2">
                            Welcome to <span className="border-l-2 p-3 border-primary bg-gradient-to-r from-[#9BCCEC] via-[#C6E1E4] to-white">Ai Assistant</span>
                        </h1>
                        <p className="text-black text-sm font-medium sm:text-base">
                            The power of AI at your service &mdash; Tame the knowledge!
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                        {/* Buttons Section */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-bgPrimary px-6 py-3 rounded-lg shadow transition duration-200 w-[250px] h-[170px] grid">
                                <img src="/images/mic.svg" alt="#" />
                                <p className="flex items-center w-full justify-between">
                                    Chat with Ai Bot <IoIosArrowRoundForward size={20} />
                                </p>
                            </button>
                            <button className="bg-bgPrimary px-6 py-3 rounded-lg shadow transition duration-200 w-[250px] h-[170px] grid">
                                <img src="/images/msg.svg" alt="#" />
                                <p className="flex items-center w-full justify-between">
                                    Talk with Ai Bot <IoIosArrowRoundForward size={20} />
                                </p>
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center bg-bgSecondary rounded-2xl w-[800px] px-4 py-3 max-w-md">
                            <input
                                type="text"
                                placeholder="Type Something..."
                                className="flex-grow focus:outline-none px-4 py-1 rounded-2xl bg-bgSecondary"
                            />
                            <button className="text-blue-500 ml-2 hover:text-blue-600 transition duration-200">
                            <TbSend size={22} />
                            </button>
                        </div>
                    </div>

                    {/* Categories Footer */}
                    <footer className="flex justify-center space-x-12 py-6">
                        {/* Example of 4 category items */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#FFB341] shadow-xl shadow-[#FFB341]/50 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                            <FaHeartbeat />
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-700">Health</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-[#3EE358] shadow-xl shadow-[#3EE358]/50 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                            <IoCloudDoneSharp />
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-700">Daily Life</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-[#3BC6F2] shadow-xl shadow-[#3BC6F2]/50 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                            <FaFigma />
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-700">Design</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-[#8941FF] shadow-xl shadow-[#8941FF]/50 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                            <MdOutlineLightMode />
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-700">Business</span>
                        </div>
                    </footer>
                </div>

            </div>
        </Container>
    );
}

export default AIChat;