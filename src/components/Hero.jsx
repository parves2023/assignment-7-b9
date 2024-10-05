import React from "react";
import BgImg from "../assets/Rectangle1.png";

function Hero() {
  return (
    <div>
      <div
        className="hero min-h-screen container mx-auto rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(21, 11, 43, .4), rgba(21, 11, 43, .1)), url(${BgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="hero-overlay bg-transparent"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[70%]">
            <h1 className="mb-5 text-5xl font-bold text-white leading-relaxed">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex gap-3 justify-center mt-4">
              <button className="btn btn-success bg-green-500 text-xl font-bold px-9  rounded-3xl">
              Explore Now
              </button>
              <button className="btn btn-outline btn-success text-xl font-bold px-9  rounded-3xl">
              Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
