import { howWeHelpContent } from "@/data/content";

export default function HowWeHelp() {
  return (
    <section id="how">
      <div className="wrap">
        <h2>{howWeHelpContent.title}</h2>
        <div className="steps">
          {howWeHelpContent.steps.map((step, i) => (
            <div key={i} className="step">
              <div className="num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
