import Link from "next/link";
import styles from "./ChoosePath.module.css";

const paths = [
  ["01", "I Want to Shop", "Breed-inspired goods, artwork, accessories, gifts, and handmade products."],
  ["02", "I Want to Understand My Dog", "Behavior, body language, enrichment, learning, and practical problem-solving resources."],
  ["03", "I Work With Dogs", "Forms, logs, evaluation tools, emergency references, and professional resources."],
  ["04", "I Love My Breed", "Explore breed traits, products, artwork, care considerations, and educational guides."]
];

export function ChoosePath() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Start here</p>
        <h2 className="sectionTitle">What brought you here today?</h2>
        <div className={`grid4 ${styles.grid}`}>
          {paths.map(([n, title, copy]) => (
            <Link href="#" className={styles.path} key={title}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b>Explore →</b>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
