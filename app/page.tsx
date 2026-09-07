import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { PageMotion } from "@/components/PageMotion";

const menuLinks = [
  { label: "Shisha", href: "/menu?category=shisha" },
  { label: "Hot Coffee", href: "/menu?category=hot-drinks" },
  { label: "Iced Coffee", href: "/menu?category=iced-coffee" },
  { label: "Desserts", href: "/menu?category=desserts" },
];

const rosemaryReasons = [
  { title: "Coffee made right", text: "Consistent recipes and a flavour you know from the first sip." },
  { title: "Cold favourites", text: "Matcha, mojitos, smoothies and properly chilled drinks." },
  { title: "Something sweet", text: "Cheesecake and desserts made to complete the order." },
  { title: "A comfortable seat", text: "A calm, tidy place to talk, work or take your time." },
  { title: "Solo or together", text: "A quick stop or a long evening—the space is yours." },
  { title: "In the heart of Jenin", text: "Al-Zahra neighbourhood, opposite the Traffic Department." },
];

export default function Home() {
  return (
    <><Header /><main className="home-page">
      <PageMotion />
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="micro-label">ROSEMARY CAFÉ · JENIN</p>
          <h1>Good coffee.<br />Better company.</h1>
          <p className="hero-english">مكان دافئ، مشروب معمول صح، ووقت إلك.</p>
          <div className="hero-actions">
            <Link className="button-solid" href="/menu"><span>View the menu</span></Link>
            <Link className="text-link" href="/contact"><span>Location</span></Link>
          </div>
        </div>
        <HeroSlideshow />
      </section>

      <nav className="category-rail" aria-label="أقسام قائمة روزماري">
        <div className="container category-rail-inner">
          {menuLinks.map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
        </div>
      </nav>

      <section className="brand-statement">
        <div className="brand-statement-copy" data-reveal>
          <p className="micro-label">THE ROSEMARY FEELING</p>
          <h2>A good cup.<br />A place to unwind.</h2>
          <p>Every order is made with care, in a space that feels easy—whether you are stopping for a quick coffee or staying with friends.</p>
          <Link className="text-link" href="/story"><span>Our story</span></Link>
        </div>
      </section>

      <section className="why-rosemary">
        <figure className="why-rosemary-image image-hover" data-reveal="image"><Image unoptimized src="/images/interior-tables.jpeg" alt="قعدة روزماري في جنين" fill sizes="(max-width: 820px) 100vw, 42vw" /></figure>
        <div className="why-rosemary-copy">
          <header data-reveal>
            <p className="micro-label">WHY ROSEMARY?</p>
            <h2>Everything a good<br />café should feel like.</h2>
          </header>
          <div className="why-rosemary-grid">
            {rosemaryReasons.map((reason, index) => (
              <article key={reason.title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{reason.title}</h3><p>{reason.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-panel"><div data-reveal><p className="micro-label">ROSEMARY CAFÉ</p><h2>Your table is waiting.</h2><Link className="button-solid" href="/contact"><span>Location & contact</span></Link></div></section>
    </main><Footer /></>
  );
}
