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
import aImg from "@/public/users/a.jpeg";
import bImg from "@/public/users/b.jpeg";
import cImg from "@/public/users/c.jpeg";
import dImg from "@/public/users/d.png";
import eImg from "@/public/users/e.png";
import type { ImageItem, Tservices } from "@/types";
export const avatars = [
  {
    imageUrl: aImg,
    alt: "person 1",
  },
  {
    imageUrl: bImg,
    alt: "person 2",
  },
  {
    imageUrl: cImg,
    alt: "person 3",
  },
  {
    imageUrl: dImg,
    alt: "person 4",
  },
  {
    imageUrl: eImg,
    alt: "person 5",
  },
];

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

export const navItems = [
  {
    label: "Overview",
    link: "/author",
  },
  {
    label: "Editor",
    link: "/author/editor",
  },
  {
    label: "Media",
    link: "/author/media",
  },
  {
    label: "Activity",
    link: "/author/activity",
  },
  {
    label: "Chat",
    link: "/author/chat",
  },
  {
    label: "Analytics",
    link: "/author/analytics",
  },
  {
    label: "Support",
    link: "/author/support",
  },
  {
    label: "Settings",
    link: "/author/settings",
  },
];
