import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) {
    return;
  }

  const navbarOffset = 80;
  const targetTop = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}
