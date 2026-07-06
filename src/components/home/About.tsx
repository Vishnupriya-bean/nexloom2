import { aboutContent } from "@/data/content";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div style={{ maxWidth: "62ch" }}>
          <h2>{aboutContent.title}</h2>
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="lead">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
