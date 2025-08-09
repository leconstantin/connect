import CardsList from '@/features/home/cards-list';
import CategoriesSection from '@/features/home/categories';
import HeroSection from '@/features/home/hero';

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="relative min-h-screen">
        <CategoriesSection />
        <CardsList />
      </main>
      <div className="h-screen">jdhjfdhjf</div>
    </>
  );
}
