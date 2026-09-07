import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MenuExplorer } from "@/components/MenuExplorer";
import { menuCategories } from "@/lib/menu";

export const metadata: Metadata = { title: "Rosemary Menu", description: "The Rosemary Café menu in Jenin." };

export default async function MenuPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  return (
    <><Header /><main className="menu-main">
      <section className="menu-hero menu-hero-clean">
        <div className="menu-hero-copy">
          <p className="micro-label">ROSEMARY CAFÉ · JENIN</p>
          <h1>Menu</h1>
          <div className="menu-size-key"><b>Medium · M</b><b>Large · L</b></div>
        </div>
      </section>
      <div className="menu-page container"><MenuExplorer categories={menuCategories} initialCategory={category} /></div>
    </main><Footer /></>
  );
}
