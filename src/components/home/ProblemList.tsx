import { problemListContent } from "@/data/content";

export default function ProblemList() {
  return (
    <section className="alt">
      <div className="wrap">
        <h2>{problemListContent.title}</h2>
        <p className="intro-line">{problemListContent.intro}</p>
        <div className="probs">
          {problemListContent.problems.map((prob, i) => (
            <div key={i} className="prob">
              <span className="dot"></span>
              <span>
                {prob.text}
                <b>{prob.bold}</b>
                {prob.suffix}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
