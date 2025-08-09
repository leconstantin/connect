import { forYou } from '@/config/root';
import CardItem from './card-item';

export default function CardsList() {
  return (
    <section className="px-4 py-10 sm:px-5">
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {forYou.map((item) => (
          <CardItem item={item} key={item.title} />
        ))}
        {forYou.map((item) => (
          <CardItem item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
