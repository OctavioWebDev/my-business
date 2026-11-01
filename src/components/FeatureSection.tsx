import React from 'react';
import Image from 'next/image';

interface FeatureSectionProps {
  title: string;
  image: { src: string; alt: string; width: number; height: number };
  imageSide?: 'left' | 'right';
  /** Share of the row the text takes on desktop. */
  textWidth?: 'half' | 'twoThirds';
  /** 'down' fades to green at the bottom, 'up' starts green at the top. */
  gradient?: 'down' | 'up';
  /** Darken the image slightly. */
  dimImage?: boolean;
  children: React.ReactNode;
}

export default function FeatureSection({
  title,
  image,
  imageSide = 'right',
  textWidth = 'twoThirds',
  gradient = 'down',
  dimImage = false,
  children,
}: FeatureSectionProps) {
  const textCls = textWidth === 'half' ? 'md:w-1/2' : 'md:w-2/3';
  const imageCls = textWidth === 'half' ? 'md:w-1/2' : 'md:w-1/3';
  const bg = gradient === 'down' ? 'from-transparent to-emerald-950' : 'from-emerald-950 to-transparent';
  const imageFirst = imageSide === 'left';

  return (
    <section className={`relative overflow-hidden py-12 bg-gradient-to-b ${bg}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col items-start justify-between gap-8 ${imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          <div className={textCls}>
            <h2 className="font-eurostile text-center md:text-left text-2xl md:text-3xl lg:text-4xl mb-6">{title}</h2>
            {children}
          </div>
          <div className={`${imageCls} relative`}>
            {dimImage && <div className="absolute inset-0 bg-black opacity-20 rounded-lg" />}
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
