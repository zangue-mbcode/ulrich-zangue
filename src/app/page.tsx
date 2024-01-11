"use client"
import Image from 'next/image'
import { useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // gsap code here...
    gsap.to(".box", {rotation: 180}); // <-- automatically reverted

  }, { scope: container }) // <-- scope for selector text (optional)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div ref={container} className="app">
        <div className="box">Hello</div>
      </div>
    </main>
  )
}
