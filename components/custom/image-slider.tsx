'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ImageItem } from '@/types';

type Props = {
  images: ImageItem[];
  width?: number;
  height?: number;
  onImageChange?: (index: number) => void;
  showImageCounter?: boolean;
  showDotIndicator?: boolean;
  showThumbnailNavigator?: boolean;
  className?: string;
};

export function ImageSlider({
  images,
  width = 400,
  height = 300,
  onImageChange,
  showDotIndicator = true,
  showImageCounter = true,
  showThumbnailNavigator = true,
  className,
  ...restProps
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalImages = images.length;

  const handleImageChange = (index: number) => {
    if (isTransitioning || index === activeIndex) {
      return;
    }

    setIsTransitioning(true);
    setActiveIndex(index);
    onImageChange?.(index);

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isTransitioning) {
      return;
    }
    handleImageChange((activeIndex + 1) % totalImages);
  };

  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isTransitioning) {
      return;
    }
    handleImageChange((activeIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div
      className={cn(
        'absolute inset-0 h-full w-full cursor-pointer overflow-hidden',
        className
      )}
      {...restProps}
    >
      <div className="relative h-full w-full rounded-sm">
        {images.map((image, index) => {
          let transformValue = 'none';
          if (activeIndex !== index) {
            transformValue =
              index < activeIndex ? 'translateX(-100%)' : 'translateX(100%)';
          }

          return (
            <div
              className={cn(
                'absolute inset-0 h-full w-full transition-all duration-500 ease-out',
                activeIndex === index
                  ? 'z-10 transform-none opacity-100'
                  : 'z-0 scale-95 opacity-0'
              )}
              key={image.alt}
              style={{ transform: transformValue }}
            >
              <Image
                alt={image.alt}
                className="absolute inset-0 h-full w-full rounded-lg object-cover"
                draggable={false}
                height={height}
                src={image.url}
                style={{ objectPosition: index === 0 ? 'top' : 'center' }}
                width={width}
              />
            </div>
          );
        })}
      </div>

      {/* Nav Arrows */}
      {totalImages > 1 && (
        <>
          <Button
            className="-translate-y-1/2 absolute top-1/2 left-2 z-20 hidden size-8 rounded-full bg-black/40 text-white shadow-md hover:bg-black/60 group-hover:flex"
            disabled={isTransitioning}
            onClick={(e) => handlePrevious(e)}
            size="icon"
            variant="secondary"
          >
            <ChevronLeft size={16} />
            <span className="sr-only">Previous image</span>
          </Button>

          <Button
            className="-translate-y-1/2 absolute top-1/2 right-2 z-20 hidden size-8 rounded-full bg-black/40 text-white shadow-md hover:bg-black/60 group-hover:flex"
            disabled={isTransitioning}
            onClick={(e) => handleNext(e)}
            size="icon"
            variant="secondary"
          >
            <ChevronRight size={16} />
            <span className="sr-only">Next image</span>
          </Button>
        </>
      )}

      {/* Dots */}
      {totalImages > 1 && showDotIndicator && (
        <div className="-translate-x-1/2 absolute bottom-2 left-1/2 z-20 flex gap-1.5">
          {images.map((img, index) => (
            <button
              aria-label={`View image ${index + 1} of ${totalImages}`}
              className={cn(
                'size-1.5 cursor-pointer rounded-full transition-all duration-300',
                activeIndex === index
                  ? 'scale-110 bg-white ring-1 ring-white/50'
                  : 'bg-white/60 hover:bg-white/80'
              )}
              disabled={isTransitioning}
              key={img.alt}
              onClick={() => handleImageChange(index)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
