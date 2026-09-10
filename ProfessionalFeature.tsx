import Link from "next/link";
import styles from "./ProfessionalFeature.module.css";

const resources = ["Dog Daycare Intake", "Behavior Evaluation", "Trial Day Report", "Medication Log", "Incident Report", "Group Play Observation"];

export function ProfessionalFeature() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container split">
        <div className={styles.preview}>
          {resources.map((item, i) => (
            <div key={item}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
              <em>Printable + digital</em>
            </div>
          ))}
        </div>
        <div>
          <p className="eyebrow">For people who work with dogs</p>
          <h2 className="sectionTitle">Built around the realities of canine care.</h2>
          <p className="sectionLead">
            Forms, logs, evaluation tools, behavior references, and educational materials
            for daycare, boarding, grooming, training, rescue, and pet-care teams.
          </p>
          <Link href="#" className="textLink">Explore Professional Resources</Link>
        </div>
      </div>
    </section>
  );
}
