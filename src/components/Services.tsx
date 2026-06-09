type Plan = {
  name: string;
  price: string;
  unit: string;
  features: string[];
  recommended?: boolean;
};

type Service = {
  id: string;
  title: string;
  titleJa: string;
  description: string;
  plans: Plan[];
};

const services: Service[] = [
  {
    id: "recording",
    title: "Recording",
    titleJa: "レコーディング",
    description:
      "ボーカル・楽器・ナレーションなど、あらゆる収録に対応。理想の音を引き出すディレクションも含めてサポートします。",
    plans: [
      {
        name: "Basic",
        price: "¥15,000",
        unit: "/ 3時間",
        features: ["スタジオ手配サポート", "基本エンジニアリング", "データ納品（WAV）"],
      },
      {
        name: "Standard",
        price: "¥30,000",
        unit: "/ 6時間",
        features: [
          "スタジオ手配サポート",
          "フルエンジニアリング",
          "ディレクション",
          "データ納品（WAV / stems）",
        ],
        recommended: true,
      },
      {
        name: "Premium",
        price: "要相談",
        unit: "",
        features: [
          "フルエンジニアリング",
          "ディレクション",
          "アレンジメント提案",
          "マスタリングまで一括対応",
          "データ納品（全フォーマット）",
        ],
      },
    ],
  },
  {
    id: "mixing",
    title: "Mixing",
    titleJa: "ミキシング",
    description:
      "各トラックを整え、楽曲全体のバランスと立体感を作り込みます。ジャンルを問わず対応、リビジョン2回込み。",
    plans: [
      {
        name: "Basic",
        price: "¥20,000",
        unit: "/ 1曲",
        features: ["最大24trk", "リビジョン1回", "WAV納品"],
      },
      {
        name: "Standard",
        price: "¥35,000",
        unit: "/ 1曲",
        features: ["トラック数無制限", "リビジョン2回", "Stems分割納品"],
        recommended: true,
      },
      {
        name: "EP / Album",
        price: "¥60,000〜",
        unit: "/ EP",
        features: ["4〜8曲対応", "統一感ある音作り", "優先対応", "全フォーマット納品"],
      },
    ],
  },
  {
    id: "mastering",
    title: "Mastering",
    titleJa: "マスタリング",
    description:
      "ストリーミング・CD・配信など各メディアに最適化。音圧・音質を最終調整し、リリースクオリティに仕上げます。",
    plans: [
      {
        name: "Single",
        price: "¥8,000",
        unit: "/ 1曲",
        features: ["ストリーミング最適化", "リビジョン1回", "WAV / MP3納品"],
      },
      {
        name: "EP",
        price: "¥25,000",
        unit: "/ 4〜6曲",
        features: ["全曲統一マスタリング", "リビジョン2回", "全フォーマット納品"],
        recommended: true,
      },
      {
        name: "Album",
        price: "¥45,000",
        unit: "/ 7曲以上",
        features: ["全曲統一マスタリング", "DDP作成対応", "リビジョン無制限"],
      },
    ],
  },
  {
    id: "live-pa",
    title: "Live PA",
    titleJa: "ライブPA",
    description:
      "ライブハウス・ホール・野外イベントまで幅広く対応。機材手配から当日オペレーションまでサポートします。",
    plans: [
      {
        name: "Small",
        price: "¥30,000",
        unit: "/ 日",
        features: ["〜100名規模", "機器持込対応", "リハーサル込み"],
      },
      {
        name: "Medium",
        price: "¥60,000",
        unit: "/ 日",
        features: ["〜500名規模", "PA機材手配サポート", "リハーサル込み", "モニターオペ対応"],
        recommended: true,
      },
      {
        name: "Large",
        price: "要相談",
        unit: "",
        features: ["500名以上", "専任チーム編成", "音響設計から一括対応"],
      },
    ],
  },
  {
    id: "arrangement",
    title: "Composition / Arrangement",
    titleJa: "作曲・編曲",
    description:
      "オリジナル楽曲の制作から既存曲のアレンジまで対応。アーティストのビジョンを音楽として形にします。",
    plans: [
      {
        name: "Arrangement",
        price: "¥40,000",
        unit: "/ 1曲",
        features: ["既存メロディへのアレンジ", "デモ音源込み", "リビジョン2回"],
      },
      {
        name: "Composition",
        price: "¥60,000",
        unit: "/ 1曲",
        features: ["メロディ〜アレンジ一式", "歌詞サポート（希望時）", "レコーディング連携可"],
        recommended: true,
      },
      {
        name: "Full Production",
        price: "要相談",
        unit: "",
        features: ["作曲〜マスタリングまで一括", "アーティストプロデュース", "リリースサポート"],
      },
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border border-[var(--border)] bg-[var(--surface)] p-8">
      <div className="mb-8">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase mb-1">{service.title}</p>
        <h3 className="text-2xl font-light text-white mb-4">{service.titleJa}</h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed">{service.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {service.plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-5 border transition-colors ${
              plan.recommended
                ? "border-[var(--gold)] bg-[var(--gold-dim)]"
                : "border-[var(--border)] bg-[var(--surface-2)]"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-2.5 left-4 text-[10px] tracking-[0.2em] px-2 py-0.5 bg-[var(--gold)] text-black font-semibold">
                RECOMMENDED
              </span>
            )}
            <p className="text-sm tracking-wider text-[var(--muted)] mb-1">{plan.name}</p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-xl font-light text-white">{plan.price}</span>
              {plan.unit && (
                <span className="text-xs text-[var(--muted)]">{plan.unit}</span>
              )}
            </div>
            <ul className="space-y-1.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                  <span className="text-[var(--gold)] mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0a0a0a] grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="section-divider" />
          <p className="text-xs tracking-[0.4em] text-[var(--gold)] uppercase mb-2">Services</p>
          <h2 className="text-3xl sm:text-4xl font-thin tracking-wider text-white">
            料金プラン
          </h2>
          <p className="mt-4 text-sm text-[var(--muted)]">
            ※料金はすべて税抜き表示です。詳細・カスタム対応はお問い合わせください。
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[var(--muted)] mb-6">
            予算・スケジュール・ご要望に合わせて柔軟に対応します。まずはお気軽にご相談ください。
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-3 border border-[var(--gold)] text-sm tracking-widest text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-200"
          >
            無料相談・お見積もり
          </a>
        </div>
      </div>
    </section>
  );
}
