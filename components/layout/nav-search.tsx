'use client';

import type { DialogProps } from '@radix-ui/react-dialog';
import { Laptop, MapPinIcon, Moon, SearchIcon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import React from 'react';
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

const placeholders = [
  'Search places in Rwanda...',
  'Find a service provider...',
  'Book a service...',
  'Explore Rwanda...',
];

export function NavSearchCommand({ ...props }: DialogProps) {
  const router = useRouter();
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
        className="rounded-full text-muted-foreground"
        onClick={() => setOpen(true)}
        size={'icon'}
        variant="outline"
        {...props}
      >
        <SearchIcon className="size-4" />
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
