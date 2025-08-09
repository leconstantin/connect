import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { footerLinks } from '@/config/root';
import { ModeSwitcher } from '../ui/mode-switcher';
import SubscribeForm from './subscribe-form';

export function SiteFooter() {
  return (
    <footer className="border-grid border-t bg-background">
      <div className="container-wrapper sm:px-6 lg:px-2">
        <div className="container flex flex-col items-center gap-2 py-8 md:py-16 lg:py-20 xl:gap-4">
          <div className="grid grid-cols-2 gap-6 gap-y-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-16">
            {footerLinks.map((link) => (
              <div className="space-y-4 text-sm lg:col-span-2" key={link.title}>
                <span className="block font-medium">{link.title}</span>
                <ul className="space-y-3">
                  {link.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        {...(item.external
                          ? {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            }
                          : {})}
                        className="flex items-center gap-0.5 text-muted-foreground text-sm leading-5 duration-150 hover:text-primary"
                      >
                        {item.name}
                        {item.external && (
                          <ArrowUpRightIcon className="size-4" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 space-y-4 text-sm lg:col-span-3">
              <span className="block font-medium">
                Subscribe to our newsletter
              </span>
              <div>
                <p className="text-balance text-muted-foreground text-sm leading-5">
                  Stay updated on new releases and features, guides, and case
                  studies.
                </p>
              </div>
              <SubscribeForm />
            </div>
          </div>
          <div className="mt-12 flex w-full items-center justify-between gap-5">
            <p className="text-balance text-muted-foreground text-sm leading-5">
              © {new Date().getFullYear()} Rwanda connect.
            </p>
            <div>
              <a
                className="flex items-center gap-0.5 text-muted-foreground text-sm leading-5 duration-150 hover:text-primary"
                href="https://rathon.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Powered by rathon
              </a>
            </div>
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
