import Link from "next/link";
import styles from "./FeaturedCollections.module.css";

const collections = [
  ["The Working Dog Collection", "Guard. Pull. Protect. Rescue. Work.", "01"],
  ["Halloween Collection", "Dark canine artwork and atmospheric breed designs.", "02"],
  ["Breed Backpacks", "Wearable breed artwork for dog obsession on the move.", "03"],
  ["Handler Resources", "Practical tools for people responsible for dogs.", "04"]
];

export function FeaturedCollections() {
  return (
    <section id="collections" className="section">
      <div className="container">
        <p className="eyebrow">Shop the world</p>
        <h2 className="sectionTitle">Collections with a point of view.</h2>
        <div className={styles.grid}>
          {collections.map(([title, copy, n], idx) => (
            <Link href="#" className={`${styles.card} ${idx === 0 ? styles.large : ""}`} key={title}>
              <div className={styles.number}>{n}</div>
              <div className={styles.art}>{title.slice(0,1)}</div>
              <div className={styles.copy}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>Explore collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
