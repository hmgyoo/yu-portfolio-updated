"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="rule-heavy mb-1" />
      <div className="flex items-baseline justify-between mb-16">
        <span
          className="font-display text-xs italic opacity-40"
          style={{ color: "var(--ink)" }}
        >
          05
        </span>
        <span
          className="font-mono text-xs tracking-widest uppercase opacity-40"
          style={{ color: "var(--ink)" }}
        >
          Contact
        </span>
      </div>

      {/* Large editorial CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <h2
            className="font-display tracking-tighter leading-none mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--ink)",
            }}
          >
            Let's build
            <br />
            <span className="italic" style={{ color: "var(--accent2)" }}>
              something
            </span>
            <br />
            together.
          </h2>

          <p
            className="font-body text-sm leading-relaxed opacity-60 max-w-md mb-10"
            style={{ color: "var(--ink)" }}
          >
            Whether it's a new project, a collaboration, or just a conversation
            about tech — my inbox is open.
          </p>

          {/* Email link */}
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 font-display text-lg italic group"
            style={{ color: "var(--ink)" }}
          >
            <span
              className="border-b-2 group-hover:opacity-60 transition-opacity"
              style={{ borderColor: "var(--accent)" }}
            >
              ernogarydaniel@gmail.com
            </span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        <div className="lg:col-span-4">
          <div className="space-y-0">
            {[
              {
                label: "GitHub",
                href: "https://github.com/hmgyoo",
                value: "github.com/hmgyoo",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/gary-daniel-erno/",
                value: "linkedin.com/in/gary-daniel-erno/",
              },
            ].map(({ label, href, value }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-4 border-b group"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-mono text-xs tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--ink)" }}
                >
                  {label}
                </span>
                <span
                  className="font-body text-sm opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--ink)" }}
                >
                  {value} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
