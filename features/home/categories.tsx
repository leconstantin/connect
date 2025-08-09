'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavItem from '@/components/custom/nav-item';
import { NavSearchCommand } from '@/components/layout/nav-search';
import { ThemeToggleButton } from '@/components/theme/theme-toggle-button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { services } from '@/config/root';
import { cn } from '@/lib/utils';
import Flag from '@/public/rwanda-flag.png';

export default function CategoriesSection() {
  const pathname = usePathname();

  const [showLogo, setShowLogo] = useState(false);
  const [showSearch, setSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 260);
      setSearch(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'w-full gap-4 border-border border-b bg-transparent py-2',
        showLogo &&
          'bg-background/40 backdrop-blur-lg supports-backdrop-blur:bg-background/90'
      )}
    >
      <div className="flex items-center gap-2 px-4 transition-all duration-1000 ease-in sm:px-6">
        {showLogo && (
          <Link href="/">
            <Image
              alt="Rwanda Flag"
              className="object-cover"
              height={35}
              src={Flag}
              width={40}
            />
          </Link>
        )}
        <ScrollArea className="w-[100vw] overflow-hidden lg:w-full">
          <div className="mx-auto flex w-full items-center gap-1 md:gap-2">
            {services.map((item) => (
              <NavItem
                active={pathname === item.link}
                item={item}
                key={item.label}
              />
            ))}
          </div>
          <ScrollBar className="h-0 w-0" orientation="horizontal" />
        </ScrollArea>

        {showSearch && <NavSearchCommand />}
        <ThemeToggleButton className="hidden rounded-full md:block" />
      </div>
    </nav>
  );
}
