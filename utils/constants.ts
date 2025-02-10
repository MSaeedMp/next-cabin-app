import { IoCalendarClearOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaReddit } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cabins", href: "/cabins" },
  { name: "Promotions", href: "/promotion" },
];

export const accountLinks = [
  { name: "My account", href: "/account", icon: IoKeyOutline },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: IoCalendarClearOutline,
  },
  {
    name: "Wishlist",
    href: "/account/wishlist",
    icon: MdFavoriteBorder,
  },
  { name: "Profile", href: "/account/profile", icon: IoPersonOutline },
];

export const quickAccessLinks = [
  {
    name: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  {
    name: "Cabins",
    href: "/cabins",
    icon: HiOutlineHomeModern,
  },
  {
    name: "Promotions",
    href: "/promotions",
    icon: IoPricetagsOutline,
  },
];

export const rewards = [
  {
    image: "/reward-1.png",
    title: "Save 10% on stays",
  },
  {
    image: "/reward-2.png",
    title: "Earn double points",
  },
  {
    image: "/reward-3.png",
    title: "Exclusive member discounts",
  },
  {
    image: "/reward-4.png",
    title: "Free room upgrades",
  },
  {
    image: "/reward-5.png",
    title: "Late check-out benefits",
  },
  {
    image: "/reward-6.png",
    title: "Early check-in options",
  },
  {
    image: "/reward-7.png",
    title: "Access to VIP lounges",
  },
  {
    image: "/reward-8.png",
    title: "Special birthday rewards",
  },
];

export const authSliderImages = [
  {
    image: "/auth-slider-1.jpg",
    alt: "Sign in image 1",
    text: "Your journey starts here. Sign in to explore exclusive deals!",
  },
  {
    image: "/auth-slider-2.jpg",
    alt: "Sign in image 2",
    text: "Enjoy seamless access to your account with just a few clicks.",
  },
  {
    image: "/auth-slider-3.jpg",
    alt: "Sign in image 3",
    text: "Sign up now and become part of a growing network of satisfied users.",
  },
  {
    image: "/auth-slider-4.jpg",
    alt: "Sign in image 4",
    text: "Easily manage your preferences, orders, and more.",
  },
];

export const socialLinks = [
  { href: "https://instagram.com", icon: FaInstagram },
  { href: "https://facebook.com", icon: FaFacebook },
  { href: "https://tiktok.com", icon: FaTiktok },
  { href: "https://reddit.com", icon: FaReddit },
  { href: "https://x.com", icon: FaXTwitter },
];

export const linksGroup = [
  {
    title: "Online store guide",
    subTitles: ["customer service after purchase", "Product support"],
  },
  {
    title: "Get in touch",
    subTitles: ["Store Locator", "Contact Us"],
  },
  {
    title: "Corporate",
    subTitles: ["Corporrate", "Information", "Sustainablity"],
  },
];
