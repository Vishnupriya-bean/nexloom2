import { problemContent } from "@/data/content";

export default function Problem() {
  return (
    <section className="alt">
      <div className="wrap">
        <h2>
          {problemContent.title1}
          <span className="grad-text">{problemContent.titleGradient}</span>
          {problemContent.title2}
        </h2>
        {problemContent.paragraphs.map((p, i) => (
          <p key={i} className="lead">{p}</p>
        ))}
      </div>
    </section>
  );
}
