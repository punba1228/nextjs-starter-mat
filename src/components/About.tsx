const skills = [
  { label: "Recording", value: 95 },
  { label: "Mixing", value: 90 },
  { label: "Mastering", value: 85 },
  { label: "Live PA", value: 88 },
  { label: "Arrangement", value: 80 },
];

const stats = [
  { number: "15+", label: "年の経験" },
  { number: "500+", label: "制作楽曲数" },
  { number: "200+", label: "ライブ対応数" },
  { number: "50+", label: "リリース作品" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="section-divider" />
          <p className="text-xs tracking-[0.4em] text-[var(--gold)] uppercase mb-2">About</p>
          <h2 className="text-3xl sm:text-4xl font-thin tracking-wider text-white">
            Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center max-w-sm mx-auto lg:mx-0">
              <div className="text-center text-[var(--muted)]">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-xs tracking-widest">PHOTO</p>
              </div>
            </div>
            {/* Decorative gold corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[var(--gold)] hidden lg:block" />
          </div>

          {/* Text content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-white mb-1 tracking-wide">
                渡部 秀典
              </h3>
              <p className="text-sm tracking-widest text-[var(--gold)]">Watabe Hidenori</p>
            </div>

            <p className="text-[var(--muted)] leading-relaxed">
              音楽プロデューサー・サウンドエンジニアとして15年以上のキャリアを持つ。
              レコーディングスタジオでのエンジニア経験を経て、現在はフリーランスとして
              アーティストのレコーディング、ミキシング、マスタリングを手がけるほか、
              ライブイベントの音響オペレーション、作曲・編曲も幅広く対応。
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              ジャンルを問わずJ-Pop、ロック、ジャズ、クラシックまで対応可能。
              アーティストの「鳴らしたい音」を徹底的に追求し、
              独自の視点と経験から最高のサウンドを作り上げることを信条としている。
            </p>

            {/* Skills */}
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="tracking-wider text-[var(--muted)]">{skill.label}</span>
                    <span className="text-[var(--gold)]">{skill.value}%</span>
                  </div>
                  <div className="h-px bg-[var(--surface-2)] relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-[var(--border)] pt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-thin gold-text mb-1">{stat.number}</p>
              <p className="text-xs tracking-widest text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
