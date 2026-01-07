"use client";

export default function Header() {
  const toggleMenu = (e) => {
    const button = e.currentTarget;
    const menu = button.nextElementSibling;

    button.classList.toggle("active");
    menu?.classList.toggle("active");

    const expanded = menu?.classList.contains("active");
    button.setAttribute("aria-expanded", expanded);
  };

  const closeMenu = (e) => {
    const menu = e.currentTarget.closest(".navbar-menu");
    const button = menu?.previousElementSibling;

    menu?.classList.remove("active");
    button?.classList.remove("active");
    button?.setAttribute("aria-expanded", "false");
  };

  return (
    <>
      <style jsx global>{`
        /* ================= HEADER ================= */
        .header {
          background: #fff;
          position: relative;
          z-index: 1000;
        }

        .header .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ================= MENU ================= */
        .header .navbar-menu {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .header .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .header .nav-link {
          color: #989898;
          text-decoration: none;
          font-size: 15.5px;
          transition: color 0.3s;
        }

        .header .nav-link:hover {
          color: #1e3a52;
        }

        /* ================= CTA ================= */
        .header .cta-button {
          background: linear-gradient(135deg, #5fc4c4, #53b8b8);
          color: #fff;
          border: none;
          padding: 0.95rem 2.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 12.5px;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .header .cta-button:hover {
          transform: translateY(-2px);
        }

        /* ================= TOGGLER ================= */
        .header .navbar-toggler {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .navbar-toggler-icon {
          width: 30px;
          height: 3px;
          background: #1e3a52;
          position: relative;
          transition: all 0.3s ease;
        }

        .navbar-toggler-icon::before,
        .navbar-toggler-icon::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 3px;
          background: #1e3a52;
          transition: all 0.3s ease;
          left: 0;
        }

        .navbar-toggler-icon::before {
          top: -8px;
        }

        .navbar-toggler-icon::after {
          top: 8px;
        }

        /* 🔥 HAMBURGER → X ANIMATION */
        .navbar-toggler.active .navbar-toggler-icon {
          background: transparent;
        }

        .navbar-toggler.active .navbar-toggler-icon::before {
          transform: rotate(45deg);
          top: 0;
        }

        .navbar-toggler.active .navbar-toggler-icon::after {
          transform: rotate(-45deg);
          top: 0;
        }

        /* ================= MOBILE ================= */
        @media (max-width: 991px) {
          .header .navbar-toggler {
            display: block;
          }
          .header .navbar-menu {
            display: none;
            flex-direction: column;
            width: 100%;
            background: #fff;
            padding-top: 1.5rem;
            border-top: 1px solid #eee;
            gap: 1.5rem;
          }
          .header .navbar-menu.active {
            display: flex;
          }
          .header .nav-links {
            flex-direction: column;
            width: 100%;
          }
          .header .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <header className="header">
        <nav className="navbar">
          <div className="container">
            {/* LOGO */}
            <a href="/">
              <img src="/img/logo.svg" alt="Logo" height="70" />
            </a>

            {/* TOGGLER */}
            <button
              className="navbar-toggler"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* MENU */}
            <div className="navbar-menu">
              <ul className="nav-links">
                <li>
                  <a className="nav-link" href="#property" onClick={closeMenu}>
                    Property Solutions
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#investment" onClick={closeMenu}>
                    Investment Opportunities
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#services" onClick={closeMenu}>
                    Services
                  </a>
                </li>
              </ul>
              <button className="cta-button">
                LET&apos;S TALK ABOUT YOUR PROPERTY →
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
