"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Users, Star, MessageSquare, Share2, Plus } from "lucide-react";
import Container from "~/_components/Container";
import { IoIosVideocam, IoMdSearch } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";
import { FaSmileBeam } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const ProfileCard = () => (
  <div className="bg-bgPrimary rounded-3xl p-4 lg:p-6 shadow-xl mb-4 lg:mb-8">
    <div className="relative">
      <img 
        src="/images/profile-cover.png" 
        alt="Cover"
        className="w-full h-24 lg:h-32 object-cover rounded-2xl"
      />
      <div className="absolute -bottom-6 left-4 lg:left-6">
        <img 
          src="/images/edit-profile.png" 
          alt="Profile"
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-bgPrimary"
        />
      </div>
    </div>
    <div className="mt-8">
      <h2 className="text-lg lg:text-xl font-bold">Ramy Muhamed</h2>
      <p className="text-gray-500 text-xs lg:text-sm">@ramymuha...</p>
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <p className="font-bold text-sm lg:text-base">250</p>
          <p className="text-gray-500 text-xs lg:text-sm">Post</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-sm lg:text-base">2022</p>
          <p className="text-gray-500 text-xs lg:text-sm">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-sm lg:text-base">590</p>
          <p className="text-gray-500 text-xs lg:text-sm">Following</p>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white font-medium rounded-lg py-2 mt-4 text-sm lg:text-base">
        My Profile
      </button>
    </div>
  </div>
);

const StoriesSection = () => {
  const stories = [
    {
      name: 'Create story',
      image: '/images/myStory.png',
      isCreate: true
    },
    {
      name: 'Aidan Mason',
      image: '/images/team2.jpeg',
      profilePic: '/images/edit-profile.png'
    },
    {
      name: 'Marion Welch',
      image: '/images/team.jpeg',
      profilePic: '/images/edit-profile.png'
    },
    {
      name: 'Imran Dennis',
      image: '/images/food.png',
      profilePic: '/images/edit-profile.png'
    }
  ];

  return (
    <div className="flex gap-2 lg:gap-4 mb-4 lg:mb-6 overflow-x-auto pb-2">
      {stories.map((story) => (
        <div key={story.name} className="flex-shrink-0">
          <div className="relative w-24 h-36 lg:w-32 lg:h-48 xl:w-[136px] xl:h-[216px] rounded-xl lg:rounded-2xl">
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
            />
            
            {story.isCreate ? (
              <>
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 lg:p-4 rounded-b-xl lg:rounded-b-2xl">
                  <p className="text-[10px] lg:text-xs text-center text-white">Create story</p>
                </div>
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <button className="bg-blue-500 rounded-full p-1 lg:p-2 mt-[100px] lg:mt-[150px]">
                    <Plus className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 rounded-xl lg:rounded-2xl" />
                <div className="absolute top-2 left-2">
                  <img
                    src={story.profilePic}
                    alt={`${story.name}'s profile`}
                    className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-blue-500"
                  />
                </div>
                <p className="absolute bottom-2 left-2 right-2 text-[10px] lg:text-xs text-white font-medium">
                  {story.name}
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const PostCreator = () => (
  <div className="bg-bgPrimary rounded-lg p-3 lg:p-4 mb-4 lg:mb-6">
    <div className="flex items-center gap-2 lg:gap-4 mb-3 lg:mb-4">
      <img 
        src="/images/edit-profile.png" 
        alt="User"
        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
      />
      <input 
        type="text"
        placeholder="What's on your mind, Eric?"
        className="outline-none rounded-full py-1.5 lg:py-2 px-3 lg:px-4 flex-grow text-sm lg:text-base"
      />
    </div>
    <div className="flex justify-between border-t pt-3 lg:pt-4 text-xs lg:text-sm font-semibold text-black">
      <button className="flex items-center gap-1 lg:gap-2">
        <IoIosVideocam size={16} className="lg:w-5 lg:h-5" />
        <span className="hidden sm:inline">Live video</span>
      </button>
      <button className="flex items-center gap-1 lg:gap-2">
        <MdPhotoLibrary size={16} className="lg:w-5 lg:h-5" />
        <span className="hidden sm:inline">Photo/video</span>
      </button>
      <button className="flex items-center gap-1 lg:gap-2">
        <FaSmileBeam size={16} className="lg:w-5 lg:h-5" />
        <span className="hidden sm:inline">Feeling/activity</span>
      </button>
    </div>
  </div>
);

const Post = () => (
  <div className="bg-bgPrimary rounded-lg p-3 lg:p-4">
    <div className="flex items-center gap-2 lg:gap-4 mb-3 lg:mb-4">
      <img 
        src="/images/postPub.png"
        alt="NYT"
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
      />
      <div>
        <h3 className="font-bold text-sm lg:text-base">The New York Times</h3>
        <p className="text-gray-500 text-xs lg:text-sm flex gap-2 items-center">5h. <FaEarthAmericas /></p>
      </div>
    </div>
    <p className="mb-3 lg:mb-4 text-sm lg:text-base">
      We consulted five design experts and tested gear in a 275-square-foot apartment to find the best multifunctional decor to maximize space in a tiny bedroom.
    </p>
    <img 
      src="/images/post.png"
      alt="Article"
      className="w-full rounded-lg mb-3 lg:mb-4"
    />
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-semibold">
        <Star className="text-blue-500 w-4 h-4 lg:w-5 lg:h-5" />
        <span>You & 1 other</span>
      </div>
      <div className="text-gray-600 text-xs lg:text-sm font-semibold">0 Comments</div>
    </div>
    <div className="flex justify-between border-t mt-3 lg:mt-4 pt-3 lg:pt-4 text-xs lg:text-sm">
      <button className="flex items-center gap-1 lg:gap-2">
        <Star className="w-4 h-4 lg:w-5 lg:h-5" />
        <span>Star</span>
      </button>
      <button className="flex items-center gap-1 lg:gap-2">
        <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5" />
        <span>Comment</span>
      </button>
      <button className="flex items-center gap-1 lg:gap-2">
        <Share2 className="w-4 h-4 lg:w-5 lg:h-5" />
        <span>Share</span>
      </button>
    </div>
  </div>
);

const Contacts = () => (
  <div className="bg-bgPrimary rounded-3xl p-3 lg:p-4 shadow-2xl">
    <div className="flex justify-between items-center mb-3 lg:mb-4">
      <h2 className="font-bold text-lg lg:text-xl">Events</h2>
    </div>
    <div className="flex justify-between items-center mb-3 lg:mb-4">
      <h2 className="font-bold text-lg lg:text-xl">Contacts</h2>
      <div className="flex gap-2">
        <button className="p-1.5 lg:p-2 hover:bg-gray-100 rounded-full">
          <IoMdSearch className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      </div>
    </div>
    {['Clara Cross', 'Stephany Dejesus', 'Rhea Chan', 'Aidan Mason', 'Herbert Frank', 'Imran Dennis'].map(name => (
      <div key={name} className="flex items-center gap-2 lg:gap-3 py-1.5 lg:py-2 hover:bg-gray-100 rounded-lg px-2 cursor-pointer">
        <img 
          src="/images/saving.png"
          alt={name}
          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
        />
        <span className="text-sm lg:text-base">{name}</span>
      </div>
    ))}
  </div>
);

const Saving = () => (
  <div className="bg-bgPrimary rounded-3xl p-3 lg:p-4 shadow-2xl">
    <div className="flex justify-between items-center mb-3 lg:mb-4">
      <h2 className="font-bold text-lg lg:text-xl">Your Saving</h2>
      <div className="flex gap-2">
        <button className="p-1.5 lg:p-2 hover:bg-gray-100 text-xs lg:text-sm font-semibold text-gray-500 rounded-full">
          See All
        </button>
      </div>
    </div>
    {['Art And Drawing', 'Courses', 'Favorite Posts', 'Development', 'Each'].map(name => (
      <div key={name} className="flex items-center gap-2 lg:gap-3 py-1.5 lg:py-2 hover:bg-gray-100 rounded-lg px-2 cursor-pointer">
        <img 
          src="/images/saving.png"
          alt={name}
          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
        />
        <span className="text-sm lg:text-base">{name}</span>
      </div>
    ))}
  </div>
);

function Social() {
  const [showSidebars, setShowSidebars] = useState(false);

  return (
    <Container>
      <div className="container mx-auto py-3 lg:py-6 px-2 lg:px-4">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden mb-4 p-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setShowSidebars(!showSidebars)}
        >
          Toggle Sidebars
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left Sidebar */}
          <div className={`${showSidebars ? 'block' : 'hidden'} lg:block lg:col-span-3`}>
            <ProfileCard />
            <Saving />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-6">
            <StoriesSection />
            <PostCreator />
            <Post />
          </div>
          
          {/* Right Sidebar */}
          <div className={`${showSidebars ? 'block' : 'hidden'} lg:block lg:col-span-3`}>
            <Contacts />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Social;