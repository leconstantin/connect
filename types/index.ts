import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export type ImageItem = {
  url: string;
  alt: string;
};
export type Tservices = {
  label: string;
  link: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export type TFooterLink = {
  title: string;
  links: { name: string; href: string; external: boolean }[];
};
