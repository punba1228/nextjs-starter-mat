"use client";

import { useState } from "react";

type Tip = {
  number: string;
  title: string;
  body: string;
};

const tips: Tip[] = [
  {
    number: "01",
    title: "録音前に必ずチューニングを確認する",
    body: "ギター・ベース・ピアノなど、録音前のチューニングは必須です。弦楽器は温度変化で狂いやすいため、スタジオ入り後に十分温まってからチューニングしましょう。クロマチックチューナーを使い、0.1cent以内の精度を目指すと後のミックスが格段に楽になります。",
  },
  {
    number: "02",
    title: "マイクの距離と角度が音を決める",
    body: "マイクをスピーカーやアンプに近づけすぎると「近接効果」で低音が強調されます。逆に離すと部屋の反響が入りやすくなります。スタジオでは「まず30cmから試して、エンジニアと相談しながら調整する」のが定番の流れです。",
  },
  {
    number: "03",
    title: "録音レベルは「少し余裕がある」くらいが正解",
    body: "デジタル録音では0dBFSを超えるとクリップ（歪み）が発生し、取り返しがつきません。目安は最大音量で-6〜-12dBFS程度。「ヘッドルーム（余裕）」を意識して録音することで、後のミックスで自由に加工できます。",
  },
  {
    number: "04",
    title: "テイクを重ねすぎない",
    body: "「もう一回」を繰り返すと演奏者が疲弊し、フレッシュな感情が失われます。だいたい3〜5テイクで最良のものが出ることが多いです。判断が難しいときは「コンプ（コンポジット）」といって、複数テイクの良い部分をつなぐ手法もあります。エンジニアに相談してみてください。",
  },
  {
    number: "05",
    title: "モニタースピーカーとヘッドフォンの両方で確認する",
    body: "ミックスは必ず複数の環境で聴き直してください。スタジオのモニタースピーカーで良くても、カーステレオやイヤフォンで聴くと全然違って聞こえることがあります。「翻訳の効くミックス」を目指すことが重要です。",
  },
  {
    number: "06",
    title: "リファレンスを用意する",
    body: "自分の楽曲と「こんな音にしたい」と思うリファレンス曲（プロのリリース曲）を事前に用意してエンジニアに共有しましょう。言葉だけで「もっと太い音に」と伝えるより、具体的な曲を参考にする方がイメージの共有がスムーズです。",
  },
  {
    number: "07",
    title: "マスタリングとミキシングは別物",
    body: "ミキシングは各トラックのバランスを整える作業、マスタリングは完成したステレオミックスを各メディア（CD・配信）向けに最終調整する工程です。予算を抑えたい場合でも、マスタリングだけはプロに依頼することを強くおすすめします。",
  },
  {
    number: "08",
    title: "データのバックアップを怠らない",
    body: "録音・制作データは必ず複数箇所にバックアップを取りましょう。外付けHDDとクラウドストレージの両方に保存するのが理想。「録音したけどデータが消えた」は最も避けたい事態です。スタジオでも納品時にはファイル形式・サンプルレートを確認してください。",
  },
];

function TipItem({ tip, isOpen, onToggle }: { tip: Tip; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 py-6 text-left hover:bg-[var(--surface-2)] px-4 -mx-4 transition-colors"
      >
        <span className="text-2xl font-thin text-[var(--gold)] shrink-0 w-10">{tip.number}</span>
        <span className="flex-1 text-sm sm:text-base font-light text-white tracking-wide">
          {tip.title}
        </span>
        <span
          className={`shrink-0 w-5 h-5 border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] text-xs transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="pb-6 pl-16 pr-4">
          <p className="text-sm text-[var(--muted)] leading-relaxed">{tip.body}</p>
        </div>
      )}
    </div>
  );
}

export default function TipsGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="tips" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="section-divider" />
          <p className="text-xs tracking-[0.4em] text-[var(--gold)] uppercase mb-2">
            Recording Guide
          </p>
          <h2 className="text-3xl sm:text-4xl font-thin tracking-wider text-white mb-4">
            レコーディング虎の巻
          </h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            初めてスタジオ録音に挑戦するアーティストへ。
            プロエンジニアの視点から、知っておくと役立つポイントをまとめました。
          </p>
        </div>

        {/* Accordion */}
        <div>
          {tips.map((tip, index) => (
            <TipItem
              key={tip.number}
              tip={tip}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 border border-[var(--border)] bg-[var(--surface)] text-center">
          <p className="text-sm text-[var(--muted)] mb-2">疑問点や不安なことがあれば</p>
          <p className="text-white font-light mb-6">
            録音前の無料相談も承っています。お気軽にどうぞ。
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[var(--gold)] text-black text-sm tracking-widest font-semibold hover:bg-[var(--gold-light)] transition-colors"
          >
            無料相談する
          </a>
        </div>
      </div>
    </section>
  );
}
