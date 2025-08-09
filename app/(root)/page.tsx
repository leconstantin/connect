import { ThemeToggleButton } from '@/components/theme/theme-toggle-button';
import CategoriesSection from '@/features/home/categories';
import HeroSection from '@/features/home/hero';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-screen">
        <CategoriesSection />
        <ThemeToggleButton />
      </div>
    </>
  );
}
