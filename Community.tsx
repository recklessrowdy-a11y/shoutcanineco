import styles from "./Community.module.css";

export function Community() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <p className="eyebrow">The Shout Pack</p>
        <h2 className="sectionTitle">Dogs worth knowing.</h2>
        <p className="sectionLead">
          A community gallery celebrating customer dogs, their breeds, their personalities,
          and the things their people think everyone should know about them.
        </p>
        <div className={styles.marquee} aria-label="Example Shout Pack community members">
          {["Nova · Siberian Husky", "Milo · Corgi", "Rhea · Doberman", "Bear · Great Pyrenees", "June · Labrador"].map(x => (
            <div key={x}>{x}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
