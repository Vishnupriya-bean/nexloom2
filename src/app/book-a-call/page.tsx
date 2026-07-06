"use client";

import { useEffect } from "react";

export default function BookACallPage() {
  useEffect(() => {
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          let script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script); 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window as any, "https://app.cal.com/embed/embed.js", "init");
    
    const Cal = (window as any).Cal;
    Cal("init", "discovery", {origin:"https://cal.com"});
    Cal.ns.discovery("inline", {
      elementOrSelector:"#cal-inline",
      config: {"layout":"month_view"},
      calLink: "stevefowler/book-an-call-discovery-a-complimentary-call-45-min"
    });
    Cal.ns.discovery("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  }, []);

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
            <div id="cal-inline">
              <div className="embed-fallback">
                Loading the calendar… if it doesn't appear,
                <a className="grad-text" style={{ fontWeight: 600 }} href="https://cal.com/stevefowler/book-an-call-discovery-a-complimentary-call-45-min" target="_blank" rel="noopener noreferrer"> open the booking page directly →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
