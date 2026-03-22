"use client";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="rule-heavy mb-1" />
      <div className="flex items-baseline justify-between mb-16">
        <span
          className="font-display text-xs italic opacity-40"
          style={{ color: "var(--ink)" }}
        >
          01
        </span>
        <span
          className="font-mono text-xs tracking-widest uppercase opacity-40"
          style={{ color: "var(--ink)" }}
        >
          About
        </span>
      </div>

      {/* Magazine two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Pull quote / headline */}
        <div className="lg:col-span-5">
          <h2
            className="font-display leading-tight tracking-tighter"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--ink)",
            }}
          >
            Writing code is only
            <br />
            <span className="italic" style={{ color: "var(--accent2)" }}>
              half the story.
            </span>
          </h2>

          <div className="mt-10 space-y-1">
            {[
              ["Role", "Software Engineer II"],
              ["Focus", "Mobile & Web Development"],
              ["Location", "Philippines"],
              ["Stack", "React Native · Next.js · Supabase"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between py-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-mono text-xs tracking-wider uppercase opacity-50"
                  style={{ color: "var(--ink)" }}
                >
                  {label}
                </span>
                <span
                  className="font-body text-sm"
                  style={{ color: "var(--ink)" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Body text */}
        <div
          className="lg:col-span-7 lg:border-l pl-0 lg:pl-12"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="font-display text-xl italic leading-relaxed mb-8"
            style={{ color: "var(--ink)" }}
          >
            "I build the things people use every day — mobile apps, web
            platforms, and the invisible infrastructure that makes them run."
          </p>

          <div
            className="space-y-5 font-body text-sm leading-relaxed opacity-70"
            style={{ color: "var(--ink)" }}
          >
            <p>
              As a Software Engineer II at a startup, I ship production-grade
              React Native applications available on both Android and iOS. My
              day-to-day involves building features users love, optimizing
              performance, and keeping a Next.js website at the top of search
              results through dynamic metadata and SEO strategies.
            </p>
            <p>
              Outside of work, I'm constantly experimenting. Backend services
              with Supabase and Express.js, fullstack side projects that keep my
              skills sharp across the entire stack. I believe the best engineers
              understand the whole picture — from database schema to user
              interface.
            </p>
            <p>
              My background is broader than my current specialization: machine
              learning pipelines, AWS infrastructure, hardware programming with
              Arduino, and cross-platform apps in Flutter. I gravitate toward
              problems that are genuinely hard to solve.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "React Native",
              "Next.js",
              "Supabase",
              "Express.js",
              "PostgreSQL",
              "AWS",
              "React",
              "APIs",
            ].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
