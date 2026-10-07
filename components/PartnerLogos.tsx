import Image from 'next/image';

const partners:[string,string,number,number][]=[
  ['ct-recreation-parks','Connecticut Recreation & Parks Association',352,116],
  ['sports-turf-managers','Sports Turf Managers Association',309,97],
  ['landscape-industry-certified','Landscape Industry Certified',281,110],
  ['csbga','CSBGA Safe Clean Healthy Schools',204,146],
  ['nalp','National Association of Landscape Professionals',233,123],
  ['sfma','Sports Field Management Association',253,148],
  ['nys-school-facilities','New York State School Facilities Association',712,116],
  ['ifma','International Facility Management Association',219,81],
  ['nystla','New York State Turf & Landscape Association',271,133],
  ['nys-turfgrass','New York State Turfgrass Association',152,146],
  ['boma-westchester','BOMA Westchester County',158,160]
];

export default function PartnerLogos(){
  return <ul className="partner-logos">{partners.map(([file,name,w,h])=><li key={file}><Image src={`/assets/partners/${file}.png`} alt={name} title={name} width={w} height={h}/></li>)}</ul>
}
