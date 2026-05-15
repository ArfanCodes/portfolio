'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { ImageOff } from 'lucide-react';

type ImageFrameProps = Omit<ImageProps, 'onLoad' | 'onError'> & {
  /** Optional className applied to the <Image> element */
  imageClassName?: string;
  /** Fallback label shown if image fails to load */
  fallbackLabel?: string;
};

/**
 * Image with a premium shimmer skeleton while loading and an
 * elegant fallback state if the source fails.
 *
 * Once the image loads, the shimmer is removed from the DOM entirely
 * so its keyframe animation can stop (avoids unnecessary repaint work).
 */
export function ImageFrame({
  imageClassName,
  fallbackLabel = 'Preview unavailable',
  alt,
  ...imageProps
}: ImageFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#FAF1E2] via-[#F5E7D2] to-[#EFDFC4] text-[#7A5A3F]">
        <div className="w-12 h-12 rounded-full bg-white/80 border border-white flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(70,45,25,0.18)]">
          <ImageOff size={18} strokeWidth={1.8} />
        </div>
        <span className="text-[11.5px] font-semibold tracking-[0.16em] uppercase font-sora">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <>
      {/* Shimmer skeleton — removed from DOM once loaded so the keyframe stops */}
      {!isLoaded && (
        <div className="skeleton-shimmer absolute inset-0" aria-hidden="true" />
      )}
      <Image
        {...imageProps}
        alt={alt}
        className={`${imageClassName ?? ''} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </>
  );
}
