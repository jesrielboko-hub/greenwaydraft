'use client';
import {useEffect,useRef} from 'react';

// Browsers only allow muted autoplay; play while on screen, pause when scrolled away.
export default function PromoVideo({src,poster}:{src:string;poster:string}){
  const ref=useRef<HTMLVideoElement>(null);
  useEffect(()=>{
    const v=ref.current; if(!v)return;
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting)v.play().catch(()=>{});else v.pause();},{threshold:.4});
    io.observe(v); return ()=>io.disconnect();
  },[]);
  return <video ref={ref} controls muted loop playsInline preload="none" poster={poster}><source src={src} type="video/mp4"/>Your browser does not support embedded video.</video>
}
