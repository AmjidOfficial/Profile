"use client";
import {useEffect,useRef} from "react";
import gsap from "gsap";
export function LoadingScreen(){
  const root=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const ctx=gsap.context(()=>{
      gsap.fromTo(".load-ring",{rotation:0,scale:.72,opacity:.35},{rotation:360,scale:1,opacity:1,duration:1.6,ease:"power3.out"});
      gsap.fromTo(".load-mark",{y:18,opacity:0},{y:0,opacity:1,duration:.8,delay:.35,ease:"power3.out"});
      gsap.to(".load-bar",{scaleX:1,duration:1.45,delay:.15,ease:"power2.inOut",onComplete:()=>gsap.to(root.current,{autoAlpha:0,duration:.55,delay:.1,pointerEvents:"none"})});
    },root);
    return()=>ctx.revert();
  },[]);
  return <div ref={root} className="loading-screen"><div className="load-orbit load-ring"/><div className="load-orbit load-ring ring-2"/><div className="load-core"><span>MUHAMMAD AMJID</span></div><div className="load-meta">SALES · DATA · TRANSFORMATION</div><div className="load-track"><i className="load-bar"/></div></div>;
}