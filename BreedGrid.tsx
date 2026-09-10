import Link from "next/link";
import styles from "./BreedGrid.module.css";

const breeds = [
  "Siberian Husky", "Doberman Pinscher", "German Shepherd", "Australian Shepherd",
  "Golden Retriever", "Labrador Retriever", "Corgi", "French Bulldog",
  "Great Pyrenees", "Rottweiler", "Cane Corso", "Dachshund"
];

export function BreedGrid() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <p className="eyebrow">Breed library</p>
        <h2 className="sectionTitle">Find Your Breed</h2>
        <p className="sectionLead">
          From unmistakable expressions to the quirks only owners understand,
          explore collections inspired by the dogs themselves.
        </p>
        <div className={styles.grid}>
          {breeds.map((breed, i) => (
            <Link href="#" className={styles.breed} key={breed}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div className={styles.silhouette} aria-hidden="true">{breed[0]}</div>
              <h3>{breed}</h3>
            </Link>
          ))}
        </div>
        <Link href="#" className="textLink">View All Breeds</Link>
      </div>
    </section>
  );
}
