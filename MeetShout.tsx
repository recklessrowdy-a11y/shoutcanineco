import Link from "next/link";

export function MeetShout() {
  return (
    <section id="shout" className="section">
      <div className="container split">
        <div className="artPanel">
          <div className="artLabel">
            <span>THE DOG BEHIND THE BRAND</span>
            <strong>Independent. Expressive. Very opinionated.</strong>
          </div>
        </div>
        <div>
          <p className="eyebrow">Meet Shout</p>
          <h2 className="sectionTitle">The dog who changed the way we listened.</h2>
          <p className="sectionLead">
            Shout is the emotional anchor of the brand: a white Siberian Husky whose individuality,
            communication style, and refusal to fit neatly into expectations helped shape a philosophy
            centered on observing dogs as individuals.
          </p>
          <Link href="#" className="textLink">Read Shout's Story</Link>
        </div>
      </div>
    </section>
  );
}
