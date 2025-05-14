import Image from "next/image";

import './style.css';

export default function FixedBanner({img, alt}: {img: string, alt: string}) {
  return (
    <div className="fixed-banner-container">
      <Image src={img} alt={alt} fill objectFit="cover" />
    </div>
  );
}