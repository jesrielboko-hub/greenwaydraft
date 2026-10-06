import fs from 'node:fs';
import path from 'node:path';
import {randomUUID} from 'node:crypto';

const file=path.join(process.env.GREENWAY_DATA_DIR || path.join(process.cwd(),'data'),'leads.json');

export function clean(body:any,max=2000){
  const out:Record<string,string>={};
  for(const [k,v] of Object.entries(body||{})){
    if(k==='type'||typeof v!=='string') continue;
    out[k.slice(0,60)]=v.trim().slice(0,max);
  }
  return out;
}

export function saveLead(type:'assessment'|'guide',data:Record<string,string>){
  const lead={id:randomUUID(),type,createdAt:new Date().toISOString(),data};
  fs.mkdirSync(path.dirname(file),{recursive:true});
  let list:any[]=[];
  try { list=JSON.parse(fs.readFileSync(file,'utf8')); if(!Array.isArray(list)) list=[]; } catch {}
  list.unshift(lead);
  fs.writeFileSync(file,JSON.stringify(list,null,2),'utf8');
  return lead;
}
