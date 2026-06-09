const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#tips", label: "虎の巻" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="text-[10px] tracking-[0.4em] text-[var(--muted)] uppercase mb-1">
              Sound Engineer
            </p>
            <p className="text-lg tracking-widest text-[var(--gold)] mb-4">WATABE HIDENORI</p>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              音楽と向き合い、音楽の本質を引き出す。
              <br />
              レコーディング・ミキシング・マスタリング・
              <br />
              ライブPA・作曲編曲のご依頼を承ります。
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] tracking-[0.4em] text-[var(--muted)] uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--gold)] transition-colors tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[10px] tracking-[0.4em] text-[var(--muted)] uppercase mb-4">
              Contact
            </p>
            <div className="space-y-3 text-sm text-[var(--muted)]">
              <p>
                <span className="text-[var(--gold)] text-xs tracking-widest block mb-0.5">
                  Email
                </span>
                info@watabe-sound.com
              </p>
              <p>
                <span className="text-[var(--gold)] text-xs tracking-widest block mb-0.5">
                  Response
                </span>
                2営業日以内にご返信
              </p>
              <p>
                <span className="text-[var(--gold)] text-xs tracking-widest block mb-0.5">
                  Location
                </span>
                Tokyo, Japan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-widest text-[var(--muted)]">
            © 2024 Watabe Hidenori. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            <span className="text-[10px] tracking-widest text-[var(--muted)]">
              Sound Engineer · Tokyo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
