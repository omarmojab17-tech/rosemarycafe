"use client";

import Link from "next/link";
import { useRef } from "react";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle className="icon-fill" cx="17.45" cy="6.7" r="1.05" />
    </svg>
  );
}

function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.4 11.8a8.3 8.3 0 0 1-12.3 7.3L3.8 20l.9-4.2a8.3 8.3 0 1 1 15.7-4Z" /><path d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.8 1.9c.1.3 0 .5-.1.7l-.6.8c-.2.2-.2.4 0 .7.6 1 1.4 1.8 2.4 2.4.3.2.5.2.7 0l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.5-1 2.1-.6.5-1.5.8-2.4.6-1-.2-2.3-.7-4-2.2-2-1.8-3.3-4-3.6-5.1-.2-.8 0-1.5.5-2Z" /></svg>;
}

function WazeIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 12.2c0 4-3.5 7.2-7.9 7.2-2.7 0-5.1-1.2-6.5-3.1H3.7c-.7 0-1.1-.8-.7-1.4l1.2-1.8a7 7 0 0 1-.1-1C4.1 8 7.6 4.6 12 4.6s8 3.4 8 7.6Z" /><circle cx="9" cy="12" r=".7" className="icon-fill"/><circle cx="15" cy="12" r=".7" className="icon-fill"/><path d="M9.2 15c1.7 1.1 3.9 1.1 5.6 0"/><circle cx="8" cy="19.2" r="1.3"/><circle cx="16.5" cy="18.7" r="1.3"/></svg>;
}

const whatsapp = "https://wa.me/972597827725";
const instagram = "https://www.instagram.com/rosemary_palestine/";
const waze = "https://waze.com/ul?ll=32.465329%2C35.290959&navigate=yes";

const links = [
  { href: "/", en: "Home" },
  { href: "/menu", en: "Menu" },
  { href: "/story", en: "Our Story" },
  { href: "/contact", en: "Location" },
];

export function Header() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => mobileMenuRef.current?.removeAttribute("open");

  return (
    <header className="site-header">
      <div className="header-inner container">
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link href={link.href} key={link.href}><span>{link.en}</span></Link>)}
        </nav>
        <Link className="brand" href="/" aria-label="Rosemary Café — home">
          <span className="brand-main">ROSEMARY</span>
          <span className="brand-sub">روزماري كافيه</span>
        </Link>
        <div className="header-socials" aria-label="Rosemary quick links">
          <a className="icon-link" href={whatsapp} target="_blank" rel="noreferrer" aria-label="راسل روزماري على واتساب"><WhatsAppIcon /></a>
          <a className="icon-link" href={instagram} target="_blank" rel="noreferrer" aria-label="روزماري كافيه على إنستغرام"><InstagramIcon /></a>
          <a className="icon-link" href={waze} target="_blank" rel="noreferrer" aria-label="افتح موقع روزماري في Waze"><WazeIcon /></a>
        </div>
        <details className="mobile-menu" ref={mobileMenuRef}>
          <summary aria-label="Open menu"><span /><span /></summary>
          <nav>
            {links.map((link) => <Link href={link.href} key={link.href} onClick={closeMobileMenu}><span>{link.en}</span></Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
