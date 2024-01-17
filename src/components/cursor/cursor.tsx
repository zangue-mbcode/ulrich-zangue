"use client"

import React, { useRef, useState, useEffect } from "react"
import gsap from "gsap"


const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
    }),
    gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.9,
    })
  }

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll('a');
    const cursorText = document.querySelector<HTMLDivElement>('cursor-text');

    const onMouseMove = (event: any) => {
      const {clientX, clientY} = event;
      gsap.to(cursor, {x: clientX, y: clientY})
    }

    const onMouseEnterLink = (event: any) => {
      const link = event.target;
      if (link.classList.contain('view')) {
        gsap.to(cursor, {scale: 4});
        cursorText!.style!.display = 'block';
      } else {
        gsap.to(cursor, {scale: 4});
      }
    }

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {scale: 1})
      cursorText!.style!.display = 'none';
    }


    document.addEventListener('mousemove', onMouseMove);
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

  }, []);
  
  return (
    <div >
      <div ref={cursorRef} id="custom-cursor" className="custom-cursor"></div>
      <div ref={followerRef} className="cursor-text"></div>
    </div>
  )
}
export default Cursor;
