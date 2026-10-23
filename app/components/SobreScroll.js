'use client';
import { useEffect } from 'react';

export default function SobreScroll() {
  useEffect(() => {
    const img = document.getElementById('sobreImg');
    if (!img) return;
    const blocks = document.querySelectorAll('[data-sobre-img]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const src = e.target.getAttribute('data-sobre-img');
          if (img.getAttribute('src') !== src) {
            img.style.opacity = '0';
            setTimeout(() => {
              img.setAttribute('src', src);
              img.style.opacity = '1';
            }, 300);
          }
        }
      });
    }, { threshold: 0.4 });
    blocks.forEach((b) => obs.observe(b));
    return () => obs.disconnect();
  }, []);

  return null;
}
