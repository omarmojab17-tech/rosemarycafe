import Link from "next/link";

function InstagramIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" /><circle cx="12" cy="12" r="4.1" /><circle className="icon-fill" cx="17.45" cy="6.7" r="1.05" /></svg>; }
function WhatsAppIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.4 11.8a8.3 8.3 0 0 1-12.3 7.3L3.8 20l.9-4.2a8.3 8.3 0 1 1 15.7-4Z" /><path d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.8 1.9c.1.3 0 .5-.1.7l-.6.8c-.2.2-.2.4 0 .7.6 1 1.4 1.8 2.4 2.4.3.2.5.2.7 0l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.5-1 2.1-.6.5-1.5.8-2.4.6-1-.2-2.3-.7-4-2.2-2-1.8-3.3-4-3.6-5.1-.2-.8 0-1.5.5-2Z" /></svg>; }
function MapIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z" /><circle cx="12" cy="9" r="2.4" /></svg>; }
function WazeIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 12.2c0 4-3.5 7.2-7.9 7.2-2.7 0-5.1-1.2-6.5-3.1H3.7c-.7 0-1.1-.8-.7-1.4l1.2-1.8a7 7 0 0 1-.1-1C4.1 8 7.6 4.6 12 4.6s8 3.4 8 7.6Z" /><circle cx="9" cy="12" r=".7" className="icon-fill"/><circle cx="15" cy="12" r=".7" className="icon-fill"/><path d="M9.2 15c1.7 1.1 3.9 1.1 5.6 0"/><circle cx="8" cy="19.2" r="1.3"/><circle cx="16.5" cy="18.7" r="1.3"/></svg>; }

const whatsapp = "https://wa.me/972597827725";
const waze = "https://waze.com/ul?ll=32.465329%2C35.290959&navigate=yes";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-lockup"><Link href="/" className="footer-brand">ROSEMARY</Link><p>CAFÉ · JENIN</p></div>
        <p className="footer-invite">Good coffee,<br />made for good company.</p>
      </div>
      <div className="container footer-grid">
        <nav className="footer-nav" aria-label="روابط سريعة">
          <Link href="/menu"><span>Menu</span></Link>
          <Link href="/story"><span>Our Story</span></Link>
          <Link href="/contact"><span>Location</span></Link>
        </nav>
        <div className="footer-location"><span>LOCATION</span><p lang="ar" dir="rtl">الزهراء، مقابل دائرة السير، جنين</p></div>
        <div className="footer-actions">
          <a className="icon-link" href={whatsapp} target="_blank" rel="noreferrer" aria-label="راسل روزماري على واتساب"><WhatsAppIcon /></a>
          <a className="icon-link" href="https://www.instagram.com/rosemary_palestine/" target="_blank" rel="noreferrer" aria-label="إنستغرام"><InstagramIcon /></a>
          <a className="icon-link" href={waze} target="_blank" rel="noreferrer" aria-label="افتح موقع روزماري في Waze"><WazeIcon /></a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Rosemary Café</span><span>Made for good coffee and good company.</span></div>
    </footer>
  );
}
