'use client';
import Image from 'next/image'; import Link from 'next/link'; import {ArrowRight} from 'lucide-react';
import {GUIDE_HREF,useBookVariant} from '../../lib/bookVariant';

// Variant A: dedicated homepage section after "What does your field need?"
export default function BookSection({title,cover}:{title:string;cover:string}){
  if(useBookVariant()!=='a')return null;
  return <section className="book-band" aria-labelledby="book-band-title"><div className="container book-band-inner">
    <div className="book-band-cover"><Image src={cover} alt={`${title} guide cover`} width={744} height={1024} sizes="160px"/></div>
    <div className="book-band-copy">
      <div className="eyebrow">FREE FIELD GUIDE</div>
      <h2 id="book-band-title" className="display">{title.toUpperCase()}.</h2>
      <p>The hidden decisions behind drainage, soil, grading and maintenance that determine how long an athletic field performs.</p>
    </div>
    <Link href={GUIDE_HREF} className="btn btn-guide book-focus">GET THE FREE GUIDE <ArrowRight size={16} aria-hidden="true"/></Link>
  </div></section>
}
