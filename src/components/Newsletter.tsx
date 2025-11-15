"use client";

import { HiArrowRight } from "react-icons/hi2";

export default function Newsletter() {
  return (
    <section className="mx-auto bg-gradient-to-b from-darker/90 via-dark/20 to-transparent px-0 ">
      <div className="bg-gradient-to-r from-btt/80 to-btt/30 overflow-hidden">
        <div className="relative md:px-16 py-16  px-10  md:py-15">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left content */}
            <div className="text-white max-w-lg text-center md:text-left">
              <h2 className=" mb-4 text-lighter title">
                Stay Inspired, Stay Connected
              </h2>
              <p className="text-light paragraph">
                Join our exclusive community and receive curated insights,
                retreat updates, and inspiration delivered directly to your
                inbox.
              </p>
            </div>
            {/* Right content */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-lighter text-darker sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 focus:outline-none"
              />
              <button className="w-full sm:w-auto cursor-pointer btn-squared flex items-center gap-2">
                <span>Connect</span>
                <HiArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
