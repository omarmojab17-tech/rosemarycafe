"use client";

import Link from "next/link";

function MapIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M20.4 11.8a8.3 8.3 0 0 1-12.3 7.3L3.8 20l.9-4.2a8.3 8.3 0 1 1 15.7-4Z" />
      <path d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.8 1.9c.1.3 0 .5-.1.7l-.6.8c-.2.2-.2.4 0 .7.6 1 1.4 1.8 2.4 2.4.3.2.5.2.7 0l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.5-1 2.1-.6.5-1.5.8-2.4.6-1-.2-2.3-.7-4-2.2-2-1.8-3.3-4-3.6-5.1-.2-.8 0-1.5.5-2Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

const whatsapp = "https://wa.me/972597827725";
const waze = "https://waze.com/ul?ll=32.465329%2C35.290959&navigate=yes";

export function MobileQuickBar() {
  return (
    <aside className="mobile-quick-bar" aria-label="Quick action bar">
      <a href={waze} target="_blank" rel="noreferrer" className="quick-action-btn">
        <MapIcon />
        <span>Location</span>
      </a>
      <Link href="/menu" className="quick-action-btn primary">
        <MenuIcon />
        <span>Explore Menu</span>
      </Link>
      <a href={whatsapp} target="_blank" rel="noreferrer" className="quick-action-btn">
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
