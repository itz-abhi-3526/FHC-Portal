import React, { useState } from 'react';
import './Landing.css';

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="18" height="2" rx="1"></rect>
      <rect x="3" y="11" width="18" height="2" rx="1"></rect>
      <rect x="3" y="16" width="18" height="2" rx="1"></rect>
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
      <path d="M6 6L18 18M6 18L18 6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
    </svg>
  );
}

function IconInfo() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M11 10h1v6h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="12" cy="7" r="0.6" fill="currentColor" />
    </svg>
  );
}
function IconPortal() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"></rect>
      <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"></rect>
    </svg>
  );
}
function IconSocials() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.1" fill="none"></circle>
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"></path>
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path>
      <path d="M4 20a8 8 0 0 1 16 0" fill="currentColor" opacity="0.95"></path>
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header" role="banner">
      <div className="header-left">
        <h1 className="head">FISAT HORIZON CLUB</h1>
      </div>

      <nav className="nav-links" aria-label="Primary Navigation">
        <a href="#about" className="nav-item"><span className="nav-ic"><IconInfo /></span> About FHC</a>
        <a href="#portal" className="nav-item"><span className="nav-ic"><IconPortal /></span> FHC Portal</a>
        <a href="#socials" className="nav-item"><span className="nav-ic"><IconSocials /></span> Socials</a>
      </nav>

      <div className="header-actions">
        <button className="auth" title="Access Portal">
          <span className="auth-ic"><IconUser /></span>
          <span>Get Started</span>
        </button>

        <button className="hamburger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <span className="hamburger-inner" aria-hidden="true">
            {open ? <IconClose /> : <IconMenu />}
          </span>
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <a href="#about" className="mobile-link" onClick={closeMenu}><IconInfo /> <span>About FHC</span></a>
        <a href="#portal" className="mobile-link" onClick={closeMenu}><IconPortal /> <span>FHC Portal</span></a>
        <a href="#socials" className="mobile-link" onClick={closeMenu}><IconSocials /> <span>Socials</span></a>
        <div className="mobile-cta-wrap">
          <button className="auth mobile-auth" onClick={closeMenu}><IconUser /> <span>Get Started</span></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
