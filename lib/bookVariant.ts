'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';

// Preview-only switch for comparing book/guide placements: ?book=a|b|c.
// The choice is kept in sessionStorage so it survives internal navigation;
// ?book=off clears it. No param and nothing stored = default site.
export type BookVariant='a'|'b'|'c';
export const GUIDE_HREF='/resources#get-the-guide';
const KEY='gw-book-variant';
const isVariant=(v:unknown):v is BookVariant=>v==='a'||v==='b'||v==='c';

function readVariant():BookVariant|null{
  const param=new URLSearchParams(window.location.search).get('book')?.toLowerCase();
  try{
    if(isVariant(param)){sessionStorage.setItem(KEY,param);return param}
    if(param==='off'){sessionStorage.removeItem(KEY);return null}
    const stored=sessionStorage.getItem(KEY);
    return isVariant(stored)?stored:null;
  }catch{
    return isVariant(param)?param:null;
  }
}

export function useBookVariant(){
  const pathname=usePathname();
  const [variant,setVariant]=useState<BookVariant|null>(null);
  useEffect(()=>{setVariant(readVariant())},[pathname]);
  return variant;
}
