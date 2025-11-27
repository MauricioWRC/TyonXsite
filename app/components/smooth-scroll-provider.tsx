"use client";

import { useEffect } from "react";

function smoothScrollTo(targetY: number, duration = 800) {
  const startY = window.scrollY || window.pageYOffset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function SmoothScrollProvider() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      event.preventDefault();

      const rect = el.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY;

      const header = document.querySelector("header") as HTMLElement | null;
      const headerOffset = header ? header.offsetHeight + 12 : 0; // 12px folga

      const targetY = absoluteTop - headerOffset;

      smoothScrollTo(targetY, 900); // aumenta esse valor se quiser ainda mais lento
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
