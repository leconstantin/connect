'use client';

import type { DialogProps } from '@radix-ui/react-dialog';
import { Laptop, MapPinIcon, Moon, Search, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import React from 'react';
import { TextLoop } from '@/components/custom/text-loop';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { citiesInRwanda } from '@/config/root';
import { useIsMac } from '@/hooks/use-is-mac';
import { cn } from '@/lib/utils';

const placeholders = [
  'Search places in Rwanda...',
  'Find a service provider...',
  'Book a service...',
  'Explore Rwanda...',
];

export function SearchCommand({ ...props }: DialogProps) {
  const router = useRouter();
  const isMac = useIsMac();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();
  const [placeholderIndex, setPlaceholderIndex] = React.useState(0);

  // Cycle placeholder every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((op) => !op);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        className="relative h-9 w-72 justify-start rounded-full border-0 bg-[0a0a0a]/40 text-sm text-white shadow-none backdrop-blur-sm hover:bg-transparent hover:text-white/90 supports-backdrop-blur:bg-[0a0a0a]/80 sm:min-w-sm lg:min-h-12 lg:min-w-md 2xl:h-14 2xl:min-w-2xl dark:border"
        onClick={() => setOpen(true)}
        variant="outline"
        {...props}
      >
        <Search className="size-4" />
        <TextLoop className="font-normal text-sm 2xl:text-xl">
          {placeholders.map((placeholder) => (
            <span key={placeholder}>{placeholder}</span>
          ))}
        </TextLoop>

        <div className="ml-auto hidden gap-1 sm:flex">
          <CommandMenuKbd className="bg-transparent text-white">
            {isMac ? '⌘' : 'Ctrl'}
          </CommandMenuKbd>
          <CommandMenuKbd className="aspect-square bg-transparent text-white">
            K
          </CommandMenuKbd>
        </div>
      </Button>
      <CommandDialog className="rounded-lg" onOpenChange={setOpen} open={open}>
        <CommandInput placeholder={placeholders[placeholderIndex]} />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {citiesInRwanda.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => {
                  runCommand(() => router.push(`${item.name}`));
                }}
                value={item.name}
              >
                <MapPinIcon />
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <Sun />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <Moon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <Laptop />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 select-none items-center justify-center gap-1 rounded border bg-background px-1 font-medium font-sans text-[0.7rem] text-muted-foreground [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}
