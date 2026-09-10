import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Understand. Respect. Celebrate.</p>
          <h1>Made for People Who See Dogs Differently.</h1>
          <p>
            Dog-inspired goods, breed-focused collections, educational resources,
            and practical tools for people who want to understand dogs as much as they love them.
          </p>
          <div className="buttonRow">
            <Link className="button" href="#collections">Shop the Collection</Link>
            <Link className="buttonGhost" href="#learn">Explore Canine Education</Link>
          </div>
          <Link className="textLink" href="#shout">Meet Shout</Link>
        </div>

        <div className={styles.visual} aria-label="Editorial Shout Canine Co brand artwork">
          <div className={styles.orbit} />
          <div className={styles.dogMark}>S</div>
          <div className={styles.caption}>
            <span>01 / BRAND DOG</span>
            <strong>Shout</strong>
            <p>White Siberian Husky. Muse, critic, negotiator.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
