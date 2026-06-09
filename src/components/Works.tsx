type Work = {
  title: string;
  artist: string;
  year: string;
  roles: string[];
  genre: string;
};

const works: Work[] = [
  {
    title: "Ephemeral",
    artist: "Aoi Nakamura",
    year: "2024",
    roles: ["Recording", "Mixing", "Mastering"],
    genre: "J-Pop",
  },
  {
    title: "Deep Blue",
    artist: "The Midnight Groove",
    year: "2024",
    roles: ["Recording", "Mixing"],
    genre: "Jazz / Fusion",
  },
  {
    title: "Resonance EP",
    artist: "SORA",
    year: "2023",
    roles: ["Mixing", "Mastering"],
    genre: "Indie Rock",
  },
  {
    title: "Homecoming",
    artist: "Kenji Mori",
    year: "2023",
    roles: ["Arrangement", "Recording", "Mixing"],
    genre: "Singer-Songwriter",
  },
  {
    title: "Neon Lights",
    artist: "FLUX",
    year: "2023",
    roles: ["Mastering"],
    genre: "Electronic",
  },
  {
    title: "Sakura Waltz",
    artist: "Haruki Ensemble",
    year: "2022",
    roles: ["Recording", "Mixing"],
    genre: "Classical / Crossover",
  },
  {
    title: "Tokyo Nights",
    artist: "Various Artists",
    year: "2022",
    roles: ["Mixing", "Mastering"],
    genre: "Compilation",
  },
  {
    title: "Shizuku",
    artist: "Yuki Asano",
    year: "2021",
    roles: ["Arrangement", "Recording", "Mixing", "Mastering"],
    genre: "J-Pop",
  },
];

const roleColors: Record<string, string> = {
  Recording: "border-blue-500/40 text-blue-400",
  Mixing: "border-purple-500/40 text-purple-400",
  Mastering: "border-[var(--gold)] text-[var(--gold)]",
  Arrangement: "border-green-500/40 text-green-400",
};

export default function Works() {
  return (
    <section id="works" className="py-28 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="section-divider" />
          <p className="text-xs tracking-[0.4em] text-[var(--gold)] uppercase mb-2">Works</p>
          <h2 className="text-3xl sm:text-4xl font-thin tracking-wider text-white">
            制作実績
          </h2>
        </div>

        {/* Works grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {works.map((work) => (
            <div
              key={`${work.title}-${work.artist}`}
              className="bg-[var(--surface)] p-6 hover:bg-[var(--surface-2)] transition-colors group"
            >
              {/* Album art placeholder */}
              <div className="aspect-square bg-[var(--surface-2)] mb-4 flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--gold)]/30 transition-colors relative overflow-hidden">
                <svg
                  className="w-10 h-10 text-[var(--muted)] opacity-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
                <span className="absolute bottom-2 right-2 text-[10px] tracking-widest text-[var(--muted)]">
                  {work.year}
                </span>
              </div>

              <p className="text-xs tracking-widest text-[var(--muted)] mb-1">{work.genre}</p>
              <h4 className="text-white font-light mb-0.5 truncate">{work.title}</h4>
              <p className="text-xs text-[var(--muted)] mb-3">{work.artist}</p>

              <div className="flex flex-wrap gap-1">
                {work.roles.map((role) => (
                  <span
                    key={role}
                    className={`text-[10px] tracking-wider px-1.5 py-0.5 border ${roleColors[role] ?? "border-white/20 text-white/40"}`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--muted)] tracking-wider">
          ※ 上記はサンプルクレジットです。実際の掲載作品はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
