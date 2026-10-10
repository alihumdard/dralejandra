export default function Footer() {
  return (
    <footer id="contacto" className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__eyebrow">
              <span className="footer__eyebrow-line" />
              Medicina Familiar y de Precisión
            </p>
            <h2 className="footer__title">Dra. Alejandra Stivaletta</h2>
            <p className="footer__tagline">Tu salud no se entiende por partes.</p>
          </div>
          <a href="#contacto" className="pill footer__cta">Solicitar una valoración</a>
        </div>

        <div className="footer__divider" />

        <div className="footer__grid">
          <nav className="footer__col" aria-label="Navegación">
            <h3 className="footer__col-title">Navegación</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#metodo">El método</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Sígueme">
            <h3 className="footer__col-title">Sígueme</h3>
            <ul>
              <li><a href="#" aria-label="Instagram">Instagram <span className="footer__arrow">↗</span></a></li>
              <li><a href="#" aria-label="LinkedIn">LinkedIn <span className="footer__arrow">↗</span></a></li>
            </ul>
          </nav>

          <div className="footer__col" aria-label="Contacto">
            <h3 className="footer__col-title">Contacto</h3>
            <ul>
              <li><a href="mailto:hola@dominio.com">hola@dominio.com</a></li>
              <li><a href="tel:+00000000000">+00 000 000 000</a></li>
              <li>Ciudad, País</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Dra. Alejandra Stivaletta. Todos los derechos reservados.</p>
          <a href="#inicio" className="footer__back-top">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}