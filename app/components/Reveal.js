"use client";

import { useEffect } from "react";

/**
 * Adds a subtle fade-up to elements marked with .reveal as they scroll in.
 * Elements stay visible if JS or IntersectionObserver is unavailable —
 * the CSS only hides them once this component flags support.
 */
export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const observe = () => {
      document.querySelectorAll(".reveal:not(.reveal--in)").forEach((el) => io.observe(el));
    };

    observe();

    // Catch sections rendered or revealed after mount
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
