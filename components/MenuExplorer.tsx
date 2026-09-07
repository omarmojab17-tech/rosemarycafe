"use client";

import { useMemo, useState } from "react";
import type { MenuCategory } from "@/lib/menu";

function SearchIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.4 15.4 5 5" /></svg>;
}

export function MenuExplorer({ categories, initialCategory = "all" }: { categories: MenuCategory[]; initialCategory?: string }) {
  const validInitialCategory = initialCategory === "drinks" || categories.some((category) => category.id === initialCategory);
  const [active, setActive] = useState(validInitialCategory ? initialCategory : "all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return categories
      .filter((category) => active === "all" || (active === "drinks" ? category.id !== "desserts" && category.id !== "shisha" : category.id === active))
      .map((category) => ({
        ...category,
        items: category.items.filter((menuItem) => !normalizedQuery || `${menuItem.nameAr} ${menuItem.nameEn}`.toLowerCase().includes(normalizedQuery)),
      }))
      .filter((category) => category.items.length);
  }, [active, categories, query]);

  const setFilter = (value: string) => {
    setActive(value);
    window.requestAnimationFrame(() => document.querySelector(".menu-sections")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <section className="menu-browser">
      <div className="menu-tools" aria-label="Filter menu categories">
        <div className="menu-tabs">
          <button className={active === "all" ? "active" : ""} type="button" onClick={() => setFilter("all")}><span>All Items</span></button>
          <button className={active === "drinks" ? "active" : ""} type="button" onClick={() => setFilter("drinks")}><span>Drinks</span></button>
          <button className={active === "matcha" ? "active" : ""} type="button" onClick={() => setFilter("matcha")}><span>Matcha</span></button>
          <button className={active === "iced-coffee" ? "active" : ""} type="button" onClick={() => setFilter("iced-coffee")}><span>Iced Coffee</span></button>
          <button className={active === "hot-drinks" ? "active" : ""} type="button" onClick={() => setFilter("hot-drinks")}><span>Hot Coffee</span></button>
          <button className={active === "desserts" ? "active" : ""} type="button" onClick={() => setFilter("desserts")}><span>Desserts</span></button>
          <button className={active === "shisha" ? "active" : ""} type="button" onClick={() => setFilter("shisha")}><span>Shisha</span></button>
        </div>
        <label className="menu-search">
          <SearchIcon />
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search coffee, desserts..." aria-label="Search the menu" />
        </label>
      </div>

      <div className="menu-sections">
        {visible.map((category, categoryIndex) => (
          <section className={`menu-category menu-category-${category.id}`} id={category.id} key={category.id}>
            <header className="menu-category-heading">
              <span className="menu-category-number">{String(categoryIndex + 1).padStart(2, "0")}</span>
              <div>
                <p>{category.nameAr}</p>
                <h2>{category.nameEn}</h2>
                {category.subtitleEn && <small>{category.subtitleEn}</small>}
              </div>
            </header>
            <div className="menu-items">
              {category.items.map((menuItem) => (
                <article className="menu-item" key={`${category.id}-${menuItem.nameEn}`}>
                  <div className="menu-item-name">
                    <div className="menu-item-title-row">
                      <h3>{menuItem.nameEn}</h3>
                      {menuItem.featured && <span className="rosemary-badge">Rosemary Pick</span>}
                    </div>
                    <p>{menuItem.nameAr}</p>
                  </div>
                  <strong aria-label={`Price: ${menuItem.price} Shekels`}>
                    <b>{menuItem.price}</b>
                    <small>₪</small>
                  </strong>
                </article>
              ))}
            </div>
          </section>
        ))}
        {!visible.length && (
          <div className="empty-menu">
            <strong>No matches found for "{query}"</strong>
            <p>Try searching for another item or select a different category above.</p>
          </div>
        )}
      </div>
    </section>
  );
}
