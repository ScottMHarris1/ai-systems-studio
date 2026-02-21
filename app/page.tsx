'use client';

import React from "react";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "48px 20px",
        }}
      >

        {/* HERO */}
        <section style={{ padding: "32px 0 24px 0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            <div style={{ fontSize: 14, opacity: 0.7 }}>
              AI Transformation • Revenue Architecture • Agentic AI Enablement
            </div>

            <h1
              style={{
                fontSize: 44,
                lineHeight: 1.1,
                margin: 0,
                fontWeight: 700,
              }}
            >
              I design and deploy AI-powered revenue and operating systems for enterprise GTM teams.
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.5,
                opacity: 0.9,
                maxWidth: 820,
              }}
            >
              I help enterprise teams deploy practical agentic AI workflows — including knowledge copilots, RFP automation, lifecycle intelligence, and revenue operating systems — that improve speed, quality, and visibility across GTM.
            </p>

            <div style={{ fontSize: 13, opacity: 0.6 }}>
              Background: Google • McKinsey • Amazon • Enterprise AI Transformation
            </div>

          </div>
        </section>


        {/* PROOF */}
        <section style={{ padding: "28px 0" }}>

          <h2 style={{ fontSize: 22, marginBottom: 16 }}>
            Selected Transformation Impact
          </h2>

          <ul
            style={{
              paddingLeft: 20,
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >

            <li>
              Delivered <strong>$750M+</strong> cumulative enterprise value across Google, Amazon, Kraft Foods, McKinsey, and AI deployments
            </li>

            <li>
              Led global GTM transformation supporting <strong>14,000+ sellers</strong>; increased adoption <strong>39% → 83%</strong>
            </li>

            <li>
              Founded Kraft Foods Pricing Center of Excellence generating <strong>$253M enterprise value</strong>
            </li>

            <li>
              Grew SmartThink billings by <strong>$57M</strong> and improved ROAS <strong>4.2x</strong>
            </li>

            <li>
              Generated <strong>$35M+</strong> incremental Amazon revenue; grew category <strong>42% YoY</strong>
            </li>

            <li>
              Deployed agentic AI workflows improving conversion rates <strong>12–22%</strong> and reducing manual work <strong>40%+</strong>
            </li>

          </ul>

        </section>


        {/* SERVICES */}
        <section style={{ padding: "28px 0" }}>

          <h2 style={{ fontSize: 22, marginBottom: 16 }}>
            Core Engagement Models
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 14,
            }}
          >

            <div style={card}>
              <div style={cardTitle}>
                AI Sales Enablement Copilot
              </div>

              <ul style={cardList}>
                <li>Knowledge copilots over internal GTM data</li>
                <li>RFP and proposal automation</li>
                <li>Search-to-answer acceleration</li>
              </ul>
            </div>


            <div style={card}>
              <div style={cardTitle}>
                Agentic Revenue Workflows
              </div>

              <ul style={cardList}>
                <li>Automated account research and outreach</li>
                <li>Proposal assembly and lifecycle tracking</li>
                <li>CRM-integrated revenue intelligence</li>
              </ul>
            </div>


            <div style={card}>
              <div style={cardTitle}>
                Fractional Revenue & AI Leadership
              </div>

              <ul style={cardList}>
                <li>Fractional CRO / VP Sales</li>
                <li>AI GTM architecture leadership</li>
                <li>Revenue operating system design</li>
              </ul>
            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section style={{ padding: "36px 0" }}>

          <h2 style={{ fontSize: 22, marginBottom: 16 }}>
            Contact
          </h2>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 14,
              padding: 20,
              maxWidth: 540,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >

            <div>
              Email:{" "}
              <strong>
                Scott.M.Harris.1@gmail.com
              </strong>
            </div>

            <div>
              LinkedIn:{" "}
              <strong>
                linkedin.com/in/mrscottharris
              </strong>
            </div>


            {/* CALENDLY BUTTON */}
            <a
              href="https://calendly.com/scott-m-harris-1/15min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 10,
                padding: "14px 18px",
                borderRadius: 10,
                background: "#fff",
                color: "#000",
                textDecoration: "none",
                fontWeight: 600,
                textAlign: "center",
                display: "inline-block",
              }}
            >
              Schedule Executive Intro Call
            </a>

          </div>

        </section>


        {/* FOOTER */}
        <footer
          style={{
            marginTop: 40,
            fontSize: 12,
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} Scott Michael Harris — AI Transformation & Revenue Architecture
        </footer>


      </div>
    </main>
  );
}


/* CARD STYLES */

const card: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 14,
  padding: 16,
};

const cardTitle: React.CSSProperties = {
  fontWeight: 700,
  marginBottom: 10,
};

const cardList: React.CSSProperties = {
  paddingLeft: 18,
  lineHeight: 1.6,
};