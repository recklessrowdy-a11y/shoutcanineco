import Link from "next/link";
import styles from "./Footer.module.css";

const groups = {
  Shop: ["Shop All", "New Arrivals", "Shop by Breed", "Digital Resources"],
  Learn: ["Body Language", "Behavior", "Enrichment", "Breed Guides"],
  Professional: ["Forms & Templates", "Daycare", "Boarding", "Emergency Resources"],
  Company: ["Meet Shout", "Our Philosophy", "FAQ", "Contact"]
};

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.wordmark}>SHOUT</div>
            <p>For people who love dogs enough to learn from them.</p>
          </div>
          <div className={styles.links}>
            {Object.entries(groups).map(([group, items]) => (
              <div key={group}>
                <strong>{group}</strong>
                {items.map(item => <Link href="#" key={item}>{item}</Link>)}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Shout Canine Co</span>
          <div><Link href="#">Privacy</Link><Link href="#">Terms</Link><Link href="#">Shipping</Link><Link href="#">Returns</Link></div>
        </div>
      </div>
    </footer>
  );
}
