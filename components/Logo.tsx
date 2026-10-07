import Image from 'next/image';
import Link from 'next/link';

export default function Logo(){
  return <Link href="/" className="brand-logo" aria-label="Greenway Athletic Field Services">
    <Image src="/assets/greenway-afs-logo.png" alt="Greenway Athletic Field Services" width={266} height={75} priority />
  </Link>
}
