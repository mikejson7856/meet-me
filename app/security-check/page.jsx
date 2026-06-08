
"use client";

function SecurityCheckPage() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center gap-4">
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

      <p className="text-3xl text-white font-semibold">
        Connecting...
      </p>
    </div>
  );
}

export default SecurityCheckPage;
