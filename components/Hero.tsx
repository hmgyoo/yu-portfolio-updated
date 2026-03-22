"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 max-w-7xl mx-auto">
      {/* Issue label */}
      <div className="flex items-center justify-between rule pb-4">
        <span
          className="font-mono text-xs tracking-widest uppercase opacity-40"
          style={{ color: "var(--ink)" }}
        >
          Vol. I — 2026
        </span>
        <span
          className="font-mono text-xs tracking-widest uppercase opacity-40"
          style={{ color: "var(--ink)" }}
        >
          Software Engineering
        </span>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col justify-center py-16">
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Big editorial headline */}
          <div className="col-span-12 lg:col-span-9">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-6 fade-init animate-fadeUp"
              style={{ color: "var(--accent2)" }}
            >
              — Software Developer II
            </p>
            <h1
              className="font-display leading-none tracking-tighter fade-init animate-fadeUp animate-delay-100"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                color: "var(--ink)",
              }}
            >
              Building
              <br />
              <span className="italic">things</span>
              <br />
              that last.
            </h1>
          </div>

          {/* Side descriptor */}
          <div className="col-span-12 lg:col-span-3 lg:pb-3">
            <div
              className="fade-init animate-fadeUp animate-delay-300 border-l-2 pl-4"
              style={{ borderColor: "var(--accent)" }}
            >
              <p
                className="font-body text-sm leading-relaxed opacity-60"
                style={{ color: "var(--ink)" }}
              >
                Specialized in React Native, Next.js, and fullstack development.
                Making mobile and web experiences that users love.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="rule pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="font-mono text-xs tracking-widest uppercase hover:opacity-100 opacity-50 transition-opacity"
            style={{ color: "var(--ink)" }}
          >
            See Work ↓
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase hover:opacity-100 opacity-50 transition-opacity"
            style={{ color: "var(--ink)" }}
          >
            Contact
          </a>
        </div>

        {/* Accent tag */}
        <div
          className="flex items-center gap-2 px-3 py-1.5"
          style={{ backgroundColor: "var(--accent)", color: "var(--ink)" }}
        >
          <span className="font-mono text-xs font-medium tracking-wider uppercase">
            Available for projects
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        </div>
      </div>
    </section>
  );
}
