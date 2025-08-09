import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurVignette } from '@/components/custom/blur-vignette';
import { TextEffect } from '@/components/custom/text-effect';
import TextPressure from '@/components/custom/text-pressure';
import { SearchCommand } from '@/components/layout/search';
import { Button } from '@/components/ui/button';
import Flag from '@/public/rwanda-flag.png';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="-z-10 relative w-full">
        <BlurVignette
          blur="10px"
          className="rounded-none"
          inset="5px"
          radius="10px"
          switchView={false}
          transitionLength="50px"
        >
          <video
            autoPlay={true}
            className="h-screen w-screen object-cover transition-all "
            content="true"
            loop
            muted
          >
            <source
              src="https://2g6pisfu5n.ufs.sh/f/o9OoIPmdr0OAjnu62kPPFHDGCXs4IlUVkBb89NArOmf7yRt3"
              type="video/mp4"
            />
          </video>
        </BlurVignette>
      </div>

      {/* put this in the center */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="absolute top-0 z-10 w-full">
          <div className="flex items-center justify-between px-6 py-4">
            <Link className="flex items-center gap-1" href="/">
              <Image alt="Rwanda Flag" height={30} src={Flag} width={30} />
              <TextEffect
                className="hidden font-medium text-white text-xl tracking-tighter md:flex lg:text-2xl"
                per="char"
                preset="fade"
              >
                Rwanda Connect
              </TextEffect>
            </Link>
            <div>
              <Button className="text-white" variant={'ghost'}>
                Sign in
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-10 text-center text-white lg:max-w-[50rem]">
          <div className="relative w-full">
            <TextPressure
              alpha={false}
              flex={true}
              italic={true}
              minFontSize={36}
              stroke={false}
              strokeColor="#ff0000"
              text="Welcome!"
              textColor="#ffffff"
              weight={true}
              width={true}
            />
          </div>

          <p className="mx-auto inline-block text-balance align-top font-normal text-white text-xl">
            <span className="font-medium text-blue-300">Visiting Rwanda</span>{' '}
            or making it home?{' '}
            <StarIcon className="inline size-3 fill-yellow-300 text-yellow-300" />{' '}
            We help make your{' '}
            <span className="font-medium text-yellow-300">journey easier</span>.
            Find trusted services and{' '}
            <span className="font-medium text-green-300">
              connect with communities
            </span>
            .
          </p>

          <SearchCommand />
        </div>
      </div>
    </section>
  );
}
