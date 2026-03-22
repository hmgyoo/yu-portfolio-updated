export default function Footer() {
  return (
    <footer className="px-6 py-8 max-w-7xl mx-auto">
      <div className="rule-heavy mb-6" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span
          className="font-mono text-xs opacity-30 tracking-wider"
          style={{ color: "var(--ink)" }}
        >
          © {new Date().getFullYear()} — y u
        </span>
        <span
          className="font-display text-xs italic opacity-30"
          style={{ color: "var(--ink)" }}
        >
          Crafted with Next.js & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
