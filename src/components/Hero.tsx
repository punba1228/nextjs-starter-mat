export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--gold-dim)] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="animate-fade-in-up opacity-0 animate-delay-100 text-xs tracking-[0.5em] text-[var(--gold)] uppercase mb-6">
          Sound Engineer
        </p>

        {/* Name */}
        <h1 className="animate-fade-in-up opacity-0 animate-delay-200 mb-4">
          <span className="block text-6xl sm:text-8xl font-thin tracking-[0.1em] text-white">
            WATABE
          </span>
          <span className="block text-6xl sm:text-8xl font-thin tracking-[0.1em] gold-text">
            HIDENORI
          </span>
        </h1>

        {/* Japanese name */}
        <p className="animate-fade-in-up opacity-0 animate-delay-300 text-lg tracking-[0.4em] text-[var(--muted)] mb-10">
          渡部 秀典
        </p>

        {/* Tagline */}
        <p className="animate-fade-in-up opacity-0 animate-delay-400 max-w-xl mx-auto text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-14">
          音と向き合い、音楽の本質を引き出す。
          <br />
          レコーディングからライブまで、プロの音響をあなたの作品へ。
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up opacity-0 animate-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-[var(--gold)] text-black text-sm tracking-widest font-semibold hover:bg-[var(--gold-light)] transition-colors duration-200"
          >
            お問い合わせ
          </a>
          <a
            href="#services"
            className="px-8 py-3 border border-[var(--border)] text-sm tracking-widest text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
          >
            サービスを見る
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase">Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
