"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const AREAS_ITEMS = [
  { href: "/medicina-de-precision", label: "Medicina de Precisión" },
  { href: "/salud-digestiva-y-microbiota", label: "Salud digestiva y microbiota" },
  { href: "/medicina-predictiva", label: "Medicina predictiva" },
  { href: "/longevidad", label: "Longevidad" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const areasRef = useRef(null);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const p = onHome ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (areasRef.current && !areasRef.current.contains(e.target)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { href: `${p}#metodo`, label: "El método" },
    { href: `${p}#para-quien`, label: "Para quién" },
  ];

  const postLinks = [
    { href: "/programa", label: "Programa" },
    { href: "/alejandra", label: "Dra. Alejandra" },
  ];

  const drawerExtraTop = [
    { href: onHome ? "#inicio" : "/", label: "Inicio" },
  ];

  const drawerExtraBottom = [
    { href: "/recursos", label: "Recursos" },
  ];

  const drawerContent = (
    <>
      <div className="header__mobile-backdrop" onClick={closeMobile} aria-hidden="true" />
      <aside className="header__mobile-drawer" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú de navegación">
        <div className="header__drawer-header">
          <img className="header__drawer-logo" src="/images/logo-mark.png" alt="Dra. Alejandra Stivaletta" />
          <button className="header__drawer-close" onClick={closeMobile} aria-label="Cerrar menú">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#848152" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3 L19 19 M19 3 L3 19" />
            </svg>
          </button>
        </div>
        <nav className="header__drawer-nav" aria-label="Navegación móvil">
          <ul>
            {drawerExtraTop.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__drawer-link" onClick={closeMobile}>{link.label}</a>
              </li>
            ))}
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ transitionDelay: `${(index + 1) * 80}ms` }}>
                <a href={link.href} className="header__drawer-link" onClick={closeMobile}>{link.label}</a>
              </li>
            ))}
            <li>
              <button
                className="header__drawer-link header__drawer-areas-btn"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              >
                Áreas
                <svg className={`header__dropdown-arrow ${mobileAreasOpen ? "header__dropdown-arrow--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M2 4 L6 8 L10 4" />
                </svg>
              </button>
              {mobileAreasOpen && (
                <ul className="header__drawer-subnav">
                  {AREAS_ITEMS.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="header__drawer-sublink" onClick={closeMobile}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {postLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__drawer-link" onClick={closeMobile}>{link.label}</a>
              </li>
            ))}
            {drawerExtraBottom.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__drawer-link" onClick={closeMobile}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="/solicitar-valoracion" className="pill header__drawer-cta" onClick={closeMobile}>
          Solicitar una valoración
        </a>
      </aside>
    </>
  );

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`} role="banner">
        <a href="/" className="header__logo" aria-label="Dra. Alejandra Stivaletta — inicio">
          <img src="/images/logo-mark.png" alt="Dra. Alejandra Stivaletta" />
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            <li ref={areasRef} className="header__nav-item header__nav-item--dropdown">
              <button
                className="header__nav-link header__nav-dropdown-btn"
                onClick={() => setAreasOpen(!areasOpen)}
                aria-expanded={areasOpen}
              >
                Áreas
                <svg className={`header__dropdown-arrow ${areasOpen ? "header__dropdown-arrow--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M2 4 L6 8 L10 4" />
                </svg>
              </button>
              {areasOpen && (
                <ul className="header__dropdown">
                  {AREAS_ITEMS.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="header__dropdown-link" onClick={() => setAreasOpen(false)}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navLinks.map((link) => (
              <li key={link.href} className="header__nav-item">
                <a href={link.href} className="header__nav-link">{link.label}</a>
              </li>
            ))}
            {postLinks.map((link) => (
              <li key={link.href} className="header__nav-item">
                <a href={link.href} className="header__nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/solicitar-valoracion" className="pill header__cta">
          Solicitar una valoración
        </a>

        <button
          className={`header__hamburger ${mobileOpen ? "header__hamburger--hidden" : ""}`}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="header__hamburger-line" />
          <span className="header__hamburger-line" />
          <span className="header__hamburger-line" />
        </button>
      </header>

      {mobileOpen && createPortal(drawerContent, document.body)}
    </>
  );
}
