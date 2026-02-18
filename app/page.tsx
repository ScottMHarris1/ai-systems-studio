export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 20px" }}>
        {/* HERO */}
        <section style={{ padding: "32px 0 24px 0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 14, opacity: 0.8 }}>
              AI Transformation • Revenue Architecture • Agentic AI Enablement
            </div>

            <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0 }}>
  I design and deploy AI-powered revenue and operating systems for enterprise GTM teams.
</h1>


            <p style={{ fontSize: 18, lineHeight: 1.5, opacity: 0.9, maxWidth: 820 }}>
              I help enterprise teams deploy practical agentic AI workflows (RFP automation, knowledge copilots,
              lifecycle intelligence, and enablement) that improve speed, quality, and visibility across GTM.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
              <a
                href="#contact"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  textDecoration: "none",
                  border: "1px solid #111",
                  display: "inline-block",
                  fontWeight: 600,
                }}
              >
                Book a 15-min intro
              </a>
              <a
                href="#proof"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  textDecoration: "none",
                  border: "1px solid #ddd",
                  display: "inline-block",
                  fontWeight: 600,
                }}
              >
                See transformation impact
              </a>
            </div>

            <div style={{ fontSize: 13, opacity: 0.75, marginTop: 8 }}>
            Background: Google (Global Sales Strategy) • McKinsey • Amazon • Enterprise AI Transformation & Commercialization

            </div>
          </div>
        </section>

        {/* PROOF */}
        <section id="proof" style={{ padding: "28px 0" }}>
          <h2 style={{ fontSize: 22, margin: "0 0 12px 0" }}>Selected Transformation Impact</h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>
              Delivered <strong>$750M+</strong> cumulative enterprise value across Google, Amazon, Kraft Foods, McKinsey, and enterprise AI deployments
            </li>
            <li>
              Led global revenue and lifecycle transformation supporting <strong>14,000+</strong> enterprise sellers; increased product adoption{" "}
              <strong>39% → 83%</strong> and exceeded revenue targets by <strong>17%</strong>
            </li>
            <li>
              Founded Pricing Center of Excellence at Kraft Foods delivering <strong>$253M</strong> incremental enterprise value and{" "}
              <strong>$10.2M</strong> pricing uplift
            </li>
            <li>
              Grew SmartThink client billings by <strong>$57M</strong> and improved ROAS by <strong>4.2x</strong> through AI-driven
              segmentation, GTM architecture, and lifecycle optimization
            </li>
            <li>
              Generated <strong>$35M+</strong> incremental revenue at Amazon and grew category revenue <strong>42% YoY</strong> while reducing
              vendor service costs by <strong>34%</strong>
            </li>
            <li>
              Designed and deployed agentic AI GTM workflows improving conversion rates <strong>12.7%–22.4%</strong> and reducing manual workload{" "}
              by <strong>40%+</strong>
            </li>
          </ul>
        </section>

        {/* OFFERS */}
        <section style={{ padding: "28px 0" }}>
          <h2 style={{ fontSize: 22, margin: "0 0 12px 0" }}>How I help</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 12,
            }}
          >
            {[
              {
                title: "AI Sales Enablement Copilot (RAG)",
                desc:
                  "A secure knowledge assistant over your sales assets: playbooks, RFx library, battlecards, case studies — with citations and guardrails.",
                bullets: ["Search-to-answer uplift", "Time-to-first-draft reduction", "Role-based access + governance"],
              },
              {
                title: "RFP / Proposal Automation",
                desc:
                  "Generate high-quality first drafts for RFIs/RFPs with structured prompts, review checks, and content governance.",
                bullets: ["30%+ faster turnaround", "Consistency & compliance", "Reusable templates"],
              },
              {
                title: "AI Revenue Operating System (Agentic GTM)",
                desc:
                  "Multi-step workflows that research accounts, draft outreach, assemble proposals, and generate follow-ups — integrated with CRM for visibility.",
                bullets: ["Pipeline velocity", "Lifecycle intelligence", "Operational execution at scale"],
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  border: "1px solid #eee",
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 8 }}>{card.title}</div>
                <div style={{ opacity: 0.9, marginBottom: 10, lineHeight: 1.45 }}>{card.desc}</div>
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6, opacity: 0.9 }}>
                  {card.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "28px 0" }}>
          <h2 style={{ fontSize: 22, margin: "0 0 12px 0" }}>Contact</h2>
          <p style={{ marginTop: 0, opacity: 0.9 }}>
            If you’re scaling GTM and want AI systems that drive measurable outcomes, send a note:
          </p>

          <div
            style={{
              border: "1px solid #eee",
              borderRadius: 14,
              padding: 16,
              display: "grid",
              gap: 10,
              maxWidth: 520,
            }}
          >
            <div style={{ fontSize: 14, opacity: 0.85 }}>
              Email: <strong>Scott.M.Harris.1@gmail.com</strong>
            </div>
            <div style={{ fontSize: 14, opacity: 0.85 }}>
              LinkedIn: <strong>linkedin.com/in/mrscottharris</strong>
            </div>
            <div style={{ fontSize: 14, opacity: 0.75 }}>
              Next step: add a simple form + calendar link (we’ll do this next).
            </div>
          </div>
        </section>

        <footer style={{ padding: "36px 0 12px 0", fontSize: 12, opacity: 0.7 }}>
          © {new Date().getFullYear()} Scott Michael Harris — AI Transformation & Revenue Architecture
        </footer>
      </div>
    </main>
  );
}
