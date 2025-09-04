import React from "react";
import { Home, Tag, Lock } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-3 px-6">
      <div className="max-w-screen-xxl mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Home className="w-5 h-5" />
            <span className="font-medium">Lekke Places</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Tag className="w-5 h-5" />
            <span className="font-medium">Lekke Prices</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Lock className="w-5 h-5" />
            <span className="font-medium">Lekke Secure</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-gray-600 text-sm md:text-base">
          The easiest way to find and book accommodation across South Africa!
        </div>
      </div>
    </header>
  );
}
