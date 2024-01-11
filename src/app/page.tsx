"use client"
import Image from 'next/image'
import { useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import bgGrid from "@/assets/images/background-grid.webp"

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // gsap code here...
    gsap.to(".box", {rotation: 180}); // <-- automatically reverted

  }, { scope: container }) // <-- scope for selector text (optional)

  return (
    <main className="">
      <div className="absolute bottom-0 h-96 inset-x-0 select-none">
        <Image src={bgGrid} alt="" className="h-full w-auto mx-auto opacity-50 pointer-events-none" width="1920" height="1080"
                        style={{color:"transparent"}}>

        </Image>
      </div>
      
      <div className='loader'>
        <div className='counter'>0</div>
      </div>

      <nav>
        <div className='logo-container'>
          <div className="logo">
            <h1>Ulrich</h1>
          </div>
          <div className="logo-name">
            <p>Forntend developer ///////</p>
          </div>
        </div>
        <div className="nav-buttons">
          <div className="btn">
            <button>Projets</button>
          </div>
          <div className="btn">
            <button>About</button>
          </div>
        </div>
      </nav>

      <div className="sub-nav">
        <p className="intro">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eveniet error corrupti cumque, aut a et, architecto quos reiciendis illo corporis alias dignissimos facilis beatae doloremque quia ullam accusamus vitae?
        </p>
        <p className="primary">
          Portfolio 2024
        </p>
      </div>

      <div className="hero-img">
        <div className="mask"></div>
        <div className="mask"></div>
        <div className="mask"></div>
        <div className="mask"></div>
        <div className="mask"></div>
        <div className="mask"></div>
        <div className="mask"></div>
        <div className="mask"></div>
        <div className="mask"></div>
      </div>
      
      <footer>
        <div className="slide-copy">
          <div className="slide-index">p / 03</div>
          <div className="slide-name">Ulrich Zangue</div>
          <button>Visit</button>
        </div>
        <div className="slide-info">
          <div className="year">
            <p>Year</p>
            <p>2024</p>
          </div>
          <div className="agency">
            <p>Agency</p>
            <p>n / a</p>
          </div>
          <div className="role">
            <p>Role</p>
            <p>Front End Developer</p>
          </div>
          <div className="awards">
            <p>Awards</p>
            <p>Award name</p>
            <p>Award name</p>
            <p>Award name</p>
            <p>Award name</p>
            <p>Award name</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
