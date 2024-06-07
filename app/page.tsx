'use client';

import Image from "next/image";
import Spline from "@splinetool/react-spline"

export default function Home() {
  return (
    <main className="flex flex-col justify-evenly md:flex-row">

      <div className="flex flex-col justify-center md:m-2 p-4 md:w-1/2 text-center text-[white] md:relative md:left-12">
        <h1 className="text-8xl">Welcome</h1>
        <p className="text-lg">To a long time ago in a galaxy far, far away...</p>
      </div>

      {/* adding a cool Spline design to website */}
      <div className="">
        <Spline scene="https://prod.spline.design/LuO7AJB7onW4yTmT/scene.splinecode" />
      </div>
      
    </main>
  );
}
