import Link from "next/link";
import styles from "./JournalGrid.module.css";

const articles = [
  ["BODY LANGUAGE", "What Does Whale Eye Mean in Dogs?", "Context matters more than a single signal."],
  ["DOG PLAY", "How Can You Tell If Dog Play Is Becoming Too Rough?", "Look for reciprocity, pauses, loose movement, and escape opportunities."],
  ["BREED GUIDES", "Why Does My Husky Talk So Much?", "Vocal behavior can be expressive, social, learned, and individual."]
];

export function JournalGrid() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">The Shout Journal</p>
        <h2 className="sectionTitle">Useful answers to real dog questions.</h2>
        <div className={`grid3 ${styles.grid}`}>
          {articles.map(([category, title, copy]) => (
            <Link href="#" className={styles.article} key={title}>
              <div className={styles.image}>{title[0]}</div>
              <div className={styles.body}>
                <span>{category}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
