import styles from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.box}>
          <div>
            <p className="eyebrow">Learn something useful every week</p>
            <h2>Better dog knowledge. No discount-wheel nonsense.</h2>
            <p>
              Canine behavior insights, breed guides, enrichment ideas,
              new resources, and Shout Canine Co releases.
            </p>
          </div>
          <form className={styles.form}>
            <label htmlFor="email">Email address</label>
            <div>
              <input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
              <button type="submit">Join the Pack</button>
            </div>
            <small>Educational content only. Unsubscribe anytime.</small>
          </form>
        </div>
      </div>
    </section>
  );
}
