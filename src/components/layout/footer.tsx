"use client"
import { cn } from '@/lib/utils';
import { NavStore } from '@/store/nav-store';
import Link from 'next/link';
import { useEffect } from 'react';

type NavItemType = {
  title: string;
  href: string;
  disabled?: boolean;
};

export const Footer = () => {
  const { currentSection, setCurrentSection } = NavStore()
  useEffect(() => {
    setCurrentSection("#Home")

  }, []);
  const items: NavItemType[] = [
    { title: "HOME", href: "#Home" },
    { title: "ABOUT", href: "#About" },
    { title: "WORK", href: "#Work" },
    { title: "CONTACT", href: "#Contact" },
  ];
  return (
    <section className='pt-3 w-full fixed bottom-0 left-0 right-0'>
        <div className="flex flex-row justify-center bg-black dark:bg-white backdrop-blur-2xl max-w-[350px] rounded-[25px] mb-10 py-1 px-2 m-auto gap-1">

        <nav className="hidden gap-4 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              onClick={() => setCurrentSection(item.href)}
              className={cn(
                "flex items-center text-lg rounded-[20px] font-medium transition-colors  sm:text-sm px-3 py-2",
                currentSection.includes(item.href)
                  ? "text-foreground bg-accent dark:bg-accent"
                  : "text-white dark:text-black",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        </div>
    </section>
  );
};
