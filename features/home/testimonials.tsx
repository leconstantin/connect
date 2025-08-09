import { AnimatedTestimonials } from '@/components/custom/animated-testimonials';
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/custom/page-header';
import { testimonials } from '@/config/root';

export default function TestimonialsSection() {
  return (
    <section className="border-grid" id="services">
      <div className="flex flex-col items-center gap-6 py-8 text-center md:py-16 lg:py-20">
        <PageHeaderHeading className="font-mono text-3xl lg:text-4xl">
          What Our Guests Say
        </PageHeaderHeading>
        <PageHeaderDescription className="text-foreground/80 tracking-tight">
          Hear from travelers and locals who&apos;ve experienced Rwanda with us,
          their stories speak for themselves.
        </PageHeaderDescription>

        <AnimatedTestimonials
          className="text-left"
          testimonials={testimonials}
        />
      </div>
    </section>
  );
}
