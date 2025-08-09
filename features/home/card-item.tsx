import Link from 'next/link';
import { ImageSlider } from '@/components/custom/image-slider';
import type { forYou } from '@/config/root';

export default function CardItem({ item }: { item: (typeof forYou)[0] }) {
  return (
    <Link
      className="group relative w-full space-y-3 py-3 md:px-2.5"
      href="/"
      key={item.title}
    >
      <div className="relative w-full rounded-lg pt-[96.39%]">
        <ImageSlider height={379} images={item.images} width={393} />
      </div>
      <div className="">
        <div className="flex gap-2 text-muted-foreground">
          <p className="font-medium tracking-tighter ">{item.provider}</p>
        </div>
        <div className="mb-1 flex items-center gap-2 font-medium">
          <span className="truncate" title={item.title}>
            {item.title}
          </span>
        </div>
        <div className="flex items-center justify-between space-x-0.5">
          <div className="flex items-center gap-1 whitespace-nowrap text-muted-foreground">
            {item.categoryIcon && <item.categoryIcon className="size-4" />}
            <p className="text-muted-foreground text-sm">{item.category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
