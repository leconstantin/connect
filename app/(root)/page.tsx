import CardsList from '@/features/home/cards-list';
import CategoriesSection from '@/features/home/categories';
import HeroSection from '@/features/home/hero';
import TestimonialsSection from '@/features/home/testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="relative min-h-screen">
        <CategoriesSection />
        <CardsList />
      </main>
      <TestimonialsSection />
    </>
  );
}
