import {
  BriefcaseIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  LandmarkIcon,
  MapPinIcon,
  NewspaperIcon,
  ShoppingCartIcon,
  UserIcon,
  UtensilsIcon,
} from "lucide-react";
import type { ImageItem, TFooterLink, Tservices } from "@/types";

export const citiesInRwanda = [
  { name: "Kigali", province: "Kigali City" },
  { name: "Huye", province: "Southern Province" },
  { name: "Muhanga", province: "Southern Province" },
  { name: "Nyanza", province: "Southern Province" },
  { name: "Ruhango", province: "Southern Province" },
  { name: "Rubavu", province: "Western Province" },
  { name: "Rusizi", province: "Western Province" },
  { name: "Karongi", province: "Western Province" },
  { name: "Nyamasheke", province: "Western Province" },
  { name: "Musanze", province: "Northern Province" },
  { name: "Gicumbi", province: "Northern Province" },
  { name: "Burera", province: "Northern Province" },
  { name: "Rwamagana", province: "Eastern Province" },
  { name: "Kayonza", province: "Eastern Province" },
  { name: "Ngoma", province: "Eastern Province" },
  { name: "Bugesera", province: "Eastern Province" },
];
export const services: Tservices[] = [
  {
    label: "For you",
    link: "/",
    icon: UserIcon,
  },
  {
    label: "Government Services",
    link: "/government-services",
    icon: LandmarkIcon,
  },
  { label: "Tourism & Travel", link: "/tourism-travel", icon: MapPinIcon },
  {
    label: "Business Services",
    link: "/business-services",
    icon: BriefcaseIcon,
  },
  { label: "Healthcare", link: "/healthcare", icon: HeartPulseIcon },
  { label: "Education", link: "/education", icon: GraduationCapIcon },
  {
    label: "Restaurants & Food",
    link: "/restaurants-food",
    icon: UtensilsIcon,
  },
  { label: "Rwanda Media", link: "/rwanda-media", icon: NewspaperIcon },
  { label: "E-Commerce", link: "/e-commerce", icon: ShoppingCartIcon },
];

export const defaultImages: ImageItem[] = [
  {
    url: "/category/you/cloud.jpg",
    alt: "SHSF Work dashboard showing project analytics and team performance metrics",
  },
  {
    url: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=640&h=360&auto=format&fit=crop",
    alt: "SHSF Work collaboration hub with real-time document editing",
  },
  {
    url: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?q=80&w=640&h=360&auto=format&fit=crop",
    alt: "SHSF Work mobile experience with synchronized notifications",
  },
  {
    url: "https://images.unsplash.com/photo-1553484771-898ed465e931?q=80&w=640&h=360&auto=format&fit=crop",
    alt: "SHSF Work workflow automation builder interface",
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=640&h=360&auto=format&fit=crop",
    alt: "SHSF Work custom workspace configuration with module marketplace",
  },
];

export const forYou = [
  {
    images: [
      {
        url: "/category/you/id-1.jpg",
        alt: "id image",
      },
      {
        url: "/category/you/id-2.jpg",
        alt: "id image 2",
      },
    ],
    title: "Apply for your id card",
    category: "Government service",
    categoryIcon: LandmarkIcon,
    online: true,
    stars: 5,
    provider: "Irembo",
    link: "",
    location: {
      province: "",
      district: "",
      village: "",
    },
  },
  {
    images: [
      {
        url: "/category/you/business-1.jpg",
        alt: "id image",
      },
      {
        url: "/category/you/business-2.jpg",
        alt: "id image 2",
      },
    ],
    title: "Get nice website to promote your business",
    category: "Business service",
    categoryIcon: BriefcaseIcon,
    online: true,
    stars: 5,
    provider: "Rathon",
    link: "",
    location: {
      province: "",
      district: "",
      village: "",
    },
  },
  {
    images: [
      {
        url: "/category/you/cloud.jpg",
        alt: "id image",
      },
      {
        url: "/category/you/gorilla.jpg",
        alt: "id image 2",
      },
    ],
    title: "Apply for your id cards",
    category: "Tourism & Travel",
    categoryIcon: MapPinIcon,
    online: true,
    stars: 5,
    provider: "Visit Rwanda",
    link: "",
    location: {
      province: "",
      district: "",
      village: "",
    },
  },
  {
    images: [
      {
        url: "/category/you/health-1.jpg",
        alt: "id image",
      },
      {
        url: "/category/you/health-2.jpg",
        alt: "id image 2",
      },
    ],
    title: "Kigali Medical Center",
    category: "Healthcare",
    categoryIcon: HeartPulseIcon,
    provider: "KMC",
    link: "",
    location: {
      province: "",
      district: "",
      village: "",
    },
  },
  {
    images: [
      {
        url: "/category/you/food-2.jpg",
        alt: "id image",
      },
      {
        url: "/category/you/food-1.jpg",
        alt: "id image 2",
      },
    ],
    title: "Kigali Fried Chicken",
    category: "Restaurants & Food",
    categoryIcon: UtensilsIcon,

    provider: "KFC",
    link: "",
    location: {
      province: "",
      district: "",
      village: "",
    },
  },
  {
    images: [
      {
        url: "/category/you/shop-1.jpg",
        alt: "id image",
      },
      {
        url: "/category/you/shop-2.jpg",
        alt: "id image 2",
      },
    ],
    title: "Buy your favorite products",
    category: "Ecommerce",
    categoryIcon: ShoppingCartIcon,
    provider: "R.Shop",
    link: "",
    location: {
      province: "",
      district: "",
      village: "",
    },
  },
];

export const footerLinks: TFooterLink[] = [
  {
    title: "Newsroom",
    links: [
      { name: "Latest News", href: "/", external: false },
      { name: "Top Stories", href: "/", external: false },
      { name: "Editor's Picks", href: "/", external: false },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/", external: false },
      { name: "Careers", href: "/", external: false },
      { name: "Press", href: "/", external: false },
      { name: "Contact", href: "/", external: false },
    ],
  },
  {
    title: "For Business",
    links: [
      { name: "Advertise with Us", href: "/", external: false },
      { name: "Media Kit", href: "/", external: false },
      { name: "Partner with Us", href: "/", external: false },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Newsletter", href: "/", external: false },
      { name: "Mobile App", href: "/", external: false },
      { name: "RSS Feeds", href: "/", external: false },
      { name: "Help Center", href: "/", external: false },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { name: "Terms of Use", href: "/", external: false },
      { name: "Privacy Policy", href: "/", external: false },
      { name: "Cookie Policy", href: "/", external: false },
      { name: "Editorial Policy", href: "/", external: false },
    ],
  },
  {
    title: "Safety",
    links: [
      { name: "Fact-Checking", href: "/", external: false },
      { name: "Corrections", href: "/", external: false },
      { name: "Trust & Transparency", href: "/", external: false },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Facebook", href: "/", external: true },
      { name: "Twitter", href: "/", external: true },
      { name: "Instagram", href: "/", external: true },
      { name: "YouTube", href: "/", external: true },
    ],
  },
  {
    title: "Sections",
    links: [
      { name: "Politics", href: "/", external: false },
      { name: "Business", href: "/", external: false },
      { name: "Technology", href: "/", external: false },
      { name: "Health", href: "/", external: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Media Resources", href: "/", external: false },
      { name: "Author Guidelines", href: "/", external: false },
      { name: "News Archive", href: "/", external: false },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Events", href: "/", external: false },
      { name: "Reader Stories", href: "/", external: false },
      { name: "Submit News", href: "/", external: false },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "From the moment I arrived, everything was perfectly arranged. The warm welcome and local insights made my trip unforgettable.",
    name: "Sarah Chen",
    designation: "Visitor from Singapore",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Exploring Rwanda was a dream come true. The team made sure I felt safe, connected, and inspired every single day.",
    name: "Michael Rodriguez",
    designation: "Traveler from USA",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I discovered places I’d never find on my own. The local recommendations and cultural experiences were truly priceless.",
    name: "Emily Watson",
    designation: "Tourist from UK",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Every detail was taken care of — from airport pickup to the most breathtaking excursions. I felt at home in Rwanda.",
    name: "James Kim",
    designation: "Business Visitor from South Korea",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I was amazed by the hospitality and professionalism. Rwanda’s beauty and your guidance made this my best travel experience.",
    name: "Lisa Thompson",
    designation: "Traveler from Canada",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
