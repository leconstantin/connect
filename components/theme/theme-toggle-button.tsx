'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

import { Button } from '@/components/ui/button';

import {
  type AnimationStart,
  type AnimationVariant,
  createAnimation,
} from './theme-animations';

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant;
  start?: AnimationStart;
  showLabel?: boolean;
  url?: string;
}

export function ThemeToggleButton({
  variant = 'circle-blur',
  start = 'top-left',
  showLabel = false,
  url = '',
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme();

  const styleId = 'theme-transition-styles';

  const updateStyles = React.useCallback((css: string, name: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = React.useCallback(() => {
    const animation = createAnimation(variant, start, url);

    updateStyles(animation.css, animation.name);

    if (typeof window === 'undefined') {
      return;
    }

    const switchTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [theme, setTheme, variant, start, url, updateStyles]);

  return (
    <Button
      className="group relative h-9 w-9 p-0"
      name="Theme Toggle Button"
      onClick={toggleTheme}
      size="icon"
      variant="ghost"
    >
      <SunIcon className="dark:-rotate-90 size-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Theme Toggle </span>
      {showLabel && (
        <>
          <span className="-top-10 absolute hidden rounded-full border px-2 group-hover:block">
            {' '}
            variant = {variant}
          </span>
          <span className="-bottom-10 absolute hidden rounded-full border px-2 group-hover:block">
            {' '}
            start = {start}
          </span>
        </>
      )}
    </Button>
  );
}
