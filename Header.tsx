"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const menu = [
  ["SHOP", ["Shop All", "New Arrivals", "Best Sellers", "Shop by Breed", "Backpacks", "Blankets", "Apparel", "Accessories", "Home", "Artwork", "Digital Resources"]],
  ["LEARN", ["Body Language", "Behavior", "Enrichment", "Dog Learning", "Dog Play", "Breed Guides", "Health & Safety", "Puppies", "Senior Dogs"]],
  ["PROFESSIONAL", ["Daycare", "Boarding", "Grooming", "Training", "Rescue", "Forms & Templates", "Behavior Resources", "Emergency Resources"]],
  ["BREEDS", ["Browse A–Z", "Working Dogs", "Herding Dogs", "Sporting Dogs", "Hounds", "Terriers", "Toy Dogs", "Non-Sporting Dogs"]],
  ["ABOUT", ["Meet Shout", "Our Story", "Our Philosophy", "Contact", "FAQ"]]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Shout Canine Co home">
          SHOUT <span>CANINE CO</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {menu.map(([label, items]) => (
            <div
              key={label}
              className={styles.navGroup}
              onMouseEnter={() => setActive(label)}
              onMouseLeave={() => setActive(null)}
            >
              <button
                className={styles.navButton}
                aria-expanded={active === label}
                onClick={() => setActive(active === label ? null : label)}
              >
                {label}
              </button>
              {active === label && (
                <div className={styles.mega}>
                  <div>
                    <p className="eyebrow">{label}</p>
                    <h2>Explore {label.toLowerCase()}</h2>
                  </div>
                  <div className={styles.megaLinks}>
                    {items.map((item) => <Link href="#" key={item}>{item}</Link>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <button aria-label="Search">⌕</button>
          <button aria-label="Account">○</button>
          <button aria-label="Cart">Bag 0</button>
          <button
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className={styles.mobileNav} aria-label="Mobile navigation">
          {menu.map(([label, items]) => (
            <details key={label}>
              <summary>{label}</summary>
              <div>
                {items.map((item) => <Link href="#" key={item}>{item}</Link>)}
              </div>
            </details>
          ))}
        </nav>
      )}
    </header>
  );
}
