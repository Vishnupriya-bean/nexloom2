export default function BookACallPage() {
  return (
    <>
      <section className="head">
        <div className="wrap">
          <div className="eyebrow">Discovery call · 45 minutes · complimentary</div>
          <h1>Let's find what's <span className="grad-text">slowing you down.</span></h1>
          <p>A short call, no pitch. Bring your most annoying technology problem. We'll tell you what we'd look at first, whether we're the right fit, and what it would take. Pick a time below.</p>
        </div>
      </section>

      <section className="embed-wrap">
        <div className="wrap">
          <div className="cal-card">
            <div id="cal-inline" style={{ width: "100%", height: "680px", overflow: "hidden", borderRadius: "12px" }}>
              <iframe
                src="https://cal.com/stevefowler/book-an-call-discovery-a-complimentary-call-45-min?embed=true"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Book a Call with Nexloom"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
