"use client"
import Image from 'next/image'
import { useEffect, useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import bgGrid from "@/assets/images/background-grid.webp"

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    
  }, []); // Le tableau de dépendances est vide, donc cela s'exécutera une seule fois après le montage du composant



  useGSAP(() => {
    // window.addEventListener("DOMContentLoader", contentLoader)
    const counter = document.querySelector(".counter");
    const loader = document.querySelector(".loader");
    const elementsToAnimate = document.querySelectorAll("p:not(.intro), .logo h1");
    const introTag = document.querySelector(".intro");
    let animationsInitialized = false;
    
    const shuffleText = (finalText: any, duration: any, callback: any) => {
      let i = 0;
      const shuffleInterval = setInterval(() => {
        if (i < duration) {
          // counter!.innerHTML = Math.random().toString(36).substring(2, 8);
          i++;
        } else {
          clearInterval(shuffleInterval);
          counter!.innerHTML = finalText;
          if (callback) callback()
        }
      }, 50)
    }

    const removeLetters = () => {
      let text = counter!.innerHTML;
      const removeInterval = setInterval(() => {
        if (text.length > 0) {
          text = text.substring(0, text.length - 1);
          counter!.innerHTML = text;
        } else {
          clearInterval(removeInterval);
          if (!animationsInitialized) {
            animateElements();
            animateIntroTag();
          }
          fadeOutLoader();
        }
      }, 100)
    }

    const animateElements = () => {
      if (animationsInitialized) return;
      animationsInitialized = true;

      elementsToAnimate.forEach((element) => {
        let originalText = element.textContent;
        let index = 0;

        const shuffleInterval = setInterval(() => {
          if (index < originalText!.length) {
            let shuffledText = "";
            for (let i = 0; i <= index ; i++) {
              shuffledText += 
                i < index ? originalText![i] : Math.random().toString(36)[2]
                console.log("originalText", originalText)
                console.log("shuffledText", shuffledText)
                console.log("originalText![i]", originalText![i])
                console.log("Math.random().toString(36)[2]", Math.random().toString(36)[2])
            }
            element.textContent = shuffledText + originalText!.substring(index + 1);
            index++
          } else {
            clearInterval(shuffleInterval);
            counter!.textContent = originalText;
            element!.textContent = originalText;
          }
        }, 100);


      })
    }

    const animateIntroTag = () => {
      let originalText = introTag?.textContent;
      let currentText = "";
      let index = 0;

      const revealText = setInterval(() => {
        if (index < originalText!.length) {
          currentText += originalText![index]
          introTag!.textContent = currentText;
          index++;
        } else {
          clearInterval(revealText)
        }
      }, 25);
    }

    const animateMasks = () => {
      const masks = document.querySelectorAll('.hero-img .mask')
      const clipPathValues = [
        "polygon(10% 0, 0% 0, 10%, 100%, 10% 100%)",
        "polygon(20% 0, 10% 0, 10%, 100%, 20% 100%)",
        "polygon(30% 0, 20% 0, 20%, 100%, 30% 100%)",
        "polygon(40% 0, 30% 0, 30%, 100%, 40% 100%)",
        "polygon(50% 0, 40% 0, 40%, 100%, 50% 100%)",
        "polygon(60% 0, 50% 0, 50%, 100%, 60% 100%)",
        "polygon(70% 0, 60% 0, 60%, 100%, 70% 100%)",
        "polygon(80% 0, 70% 0, 70%, 100%, 80% 100%)",
        "polygon(90% 0, 80% 0, 80%, 100%, 90% 100%)",
        "polygon(100% 0, 90% 0, 90%, 100%, 100% 100%)",
      ];

      setTimeout(() => {
        masks.forEach((mask, index) => {
          gsap.to(mask, {
            clipPath: clipPathValues[index % clipPathValues.length],
            duration: 1,
            delay: index * 0.1,
          });
        });
      });
    }

    gsap.to(counter, {
      innerHTML: 100 + "%",
      duration: 3,
      snap: "innerHTML",
      ease: "none",
      onComplete: () => {
        setTimeout(
          () => 
          shuffleText("UZ DEV", 20, () => {
            setTimeout(removeLetters, 500)
          })
        )
      }
    })

    const fadeOutLoader = () => {
      gsap.to(loader, {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        onComplete: () => {
          animateMasks();
        }
      })
    }
    
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
            <h1>Ulrich Zangue</h1>
          </div>
          <div className="logo-name">
            <p>Frontend developer ///////</p>
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
          <div className="role">
            <p>Role</p>
            <p>Front End Developer</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
