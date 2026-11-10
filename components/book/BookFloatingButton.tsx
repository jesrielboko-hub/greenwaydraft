'use client';
import Link from 'next/link'; import {usePathname} from 'next/navigation'; import {useEffect,useState} from 'react'; import {BookOpen,X} from 'lucide-react';
import {GUIDE_HREF,useBookVariant} from '../../lib/bookVariant';

const DISMISS_KEY='gw-book-fab-dismissed';

// Variant B: small floating "Free Guide" button, dismissible for the session.
export default function BookFloatingButton(){
  const variant=useBookVariant(); const pathname=usePathname();
  const [dismissed,setDismissed]=useState(true);
  useEffect(()=>{try{setDismissed(sessionStorage.getItem(DISMISS_KEY)==='1')}catch{setDismissed(false)}},[]);
  // Hidden where the guide form already is, and in the admin console.
  if(variant!=='b'||dismissed||pathname.startsWith('/resources')||pathname.startsWith('/admin'))return null;
  const dismiss=()=>{setDismissed(true);try{sessionStorage.setItem(DISMISS_KEY,'1')}catch{}};
  return <aside className="book-fab" aria-label="Free guide">
    <Link href={GUIDE_HREF} className="book-fab-link book-focus"><BookOpen size={17} aria-hidden="true"/>FREE GUIDE</Link>
    <button type="button" className="book-fab-close book-focus" onClick={dismiss} aria-label="Dismiss free guide button"><X size={14} aria-hidden="true"/></button>
  </aside>
}
