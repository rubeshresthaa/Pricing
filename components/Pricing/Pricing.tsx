"use client";
import { Switch } from "@/components/ui/switch";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AiFillMoon } from "react-icons/ai";
import { MdOutlineWbSunny } from "react-icons/md";


const Pricing = () => {
  const [isDark, setIsDark] = useState<boolean | undefined>(false);
  const [isYearly, setIsYearly] = useState<boolean | undefined>(false);

  const handleThemeToggle = () => {
    setIsDark((prev) => !prev);
  };

  const handlePricingToggle = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen py-10 transition-colors duration-300 space-y-6 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-center items-center gap-6">
        <h1 className="text-center text-4xl lg:text-5xl font-bold font-sans">Pricing      
        </h1>
        <div onClick={handleThemeToggle} className="cursor-pointer hover:scale-90 mt-3">
        {isDark ? <MdOutlineWbSunny   className="text-white text-2xl lg:text-3xl" /> : <AiFillMoon className="text-black text-2xl lg:text-3xl" /> }
        </div>
       
        {/* Toggle Pricing Mode */}
       

        {/* Theme Toggle */}
        {/* <div className="flex justify-center items-center mt-4 cursor-pointer">
          <Switch checked={isDark} onCheckedChange={handleThemeToggle} />
        </div> */}
      </div>
      <div className="flex justify-center items-center gap-2 cursor-pointer m-2 font-sans">
          <span className="text-lg">Months</span>
          <Switch checked={isYearly} onCheckedChange={handlePricingToggle} />
          <span className="text-lg">Years</span>
        </div>

      <div className="flex flex-wrap justify-center items-center gap-10 font-serif">
        {/* Simple Plan */}
        <div
          className={`w-96 h-[30rem] lg:h-[35rem] p-5 lg:p-10 py-12 lg:py-24 space-y-3 rounded-2xl drop-shadow-xl ${
            isDark ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h1>Simple</h1>
          <h1 className="font-bold text-3xl">
            Free
          </h1>
          <h2>{isYearly ? "Yearly Plan for all users." : "Free Plan for all users."}</h2>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Store up to 20 businesses
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> 2 collaboration
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Unlimited collaboration
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> End-to-end encryption
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Mac, PC, Android, iOS and Browser
          </p>
          <Button className="bg-black text-white hover:animate-bounce">
            Get Started Free
          </Button>
        </div>

        {/* Efficient Plan */}
        <div
          className={`w-96 h-[30rem] lg:h-[38rem] p-5 lg:p-10 py-12 lg:py-24 space-y-3 rounded-2xl drop-shadow-xl ${
            isDark ? "bg-[#F7AD3D]" : "bg-[#F7AD3D]"
          }`}
        >
          <h1>Efficient</h1>
          <h1 className="font-bold">
            <span className="text-3xl">
              {isYearly ? "Rs.19200" : "Rs.2000"}
            </span>
            {isYearly ? "/year" : "/month"}
          </h1>
          <h2>Ideal for individual creators.</h2>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Everything in Simple
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> 512GB of business storage
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Unlimited management
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Unlimited Collaboration
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Linked with password protection
          </p>
          <Button className="bg-black text-white hover:animate-bounce">
            Get Efficient Plan
          </Button>
        </div>

        {/* Team Plan */}
        <div
          className={`w-96 h-[30rem] lg:h-[35rem] p-5 lg:p-10 py-10 lg:py-24 space-y-3 rounded-2xl drop-shadow-xl ${
            isDark ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h1>Team</h1>
          <h1 className="font-bold">
            <span className="text-3xl">
              {isYearly ? "Rs.48000" : "Rs.5000"}
            </span>
            /{isYearly ? "year" : "month"}
          </h1>
          <h2>Small Teams with up to 10 users.</h2>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Everything in Efficient
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Unlimited team members
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> Custom Storage plans
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> White-label branding
          </p>
          <p className="flex items-baseline gap-2">
            <FaCheckCircle /> 5000 SMS credit
          </p>
          <Button className="bg-black text-white hover:animate-bounce">
            Get Team Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

