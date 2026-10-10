"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#metodo", label: "El método" },
    { href: "#contacto", label: "Contacto" },
  ];

  const hamburgerLines = [
    <span key="1" className={`header__hamburger-line ${mobileOpen ? "header__hamburger-line--open-1" : ""}`} />,
    <span key="2" className={`header__hamburger-line ${mobileOpen ? "header__hamburger-line--open-2" : ""}`} />,
    <span key="3" className={`header__hamburger-line ${mobileOpen ? "header__hamburger-line--open-3" : ""}`} />,
  ];

  const drawerContent = (
    <>
      <div
        className="header__mobile-backdrop"
        onClick={closeMobile}
        aria-hidden="true"
      />
      <aside
        className="header__mobile-drawer"
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="header__drawer-header">
          <span className="header__drawer-logo">Dra. Alejandra Stivaletta</span>
          <button
            className="header__drawer-close"
            onClick={closeMobile}
            aria-label="Cerrar menú"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#8a8a55" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3 L19 19 M19 3 L3 19" />
            </svg>
          </button>
        </div>
        <nav className="header__drawer-nav">
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ transitionDelay: `${index * 80}ms` }}>
                <a
                  href={link.href}
                  className="header__drawer-link"
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contacto" className="pill header__drawer-cta" onClick={closeMobile}>
          Solicitar una valoración
        </a>
      </aside>
    </>
  );

  return (
    <>
      <header
        className={`header ${scrolled ? "header--scrolled" : ""}`}
        role="banner"
      >
        <a href="#inicio" className="header__logo">
          Dra. Alejandra Stivaletta
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contacto" className="pill header__cta">
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