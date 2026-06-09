"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const serviceOptions = [
  "レコーディング",
  "ミキシング",
  "マスタリング",
  "ライブPA",
  "作曲・編曲",
  "複数サービス / その他",
];

const budgetOptions = [
  "〜¥30,000",
  "¥30,000〜¥100,000",
  "¥100,000〜¥300,000",
  "¥300,000以上",
  "要相談",
];

const inputClass =
  "w-full bg-[var(--surface-2)] border border-[var(--border)] text-white text-sm px-4 py-3 focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[var(--muted)]";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email API (e.g. Resend, SendGrid)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[var(--surface)] grid-bg">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="section-divider mx-auto" />
          <p className="text-xs tracking-[0.4em] text-[var(--gold)] uppercase mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-thin tracking-wider text-white mb-4">
            お問い合わせ
          </h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            ご依頼・ご相談・お見積もりはフォームよりお気軽にどうぞ。
            <br />
            通常2営業日以内にご返信いたします。
          </p>
        </div>

        {submitted ? (
          <div className="border border-[var(--gold)] bg-[var(--gold-dim)] p-12 text-center">
            <div className="text-4xl text-[var(--gold)] mb-4">✓</div>
            <h3 className="text-white font-light text-xl mb-2">送信が完了しました</h3>
            <p className="text-sm text-[var(--muted)]">
              お問い合わせいただきありがとうございます。
              <br />
              2営業日以内にご返信いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest text-[var(--muted)] mb-2">
                  お名前 <span className="text-[var(--gold)]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="山田 太郎"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-[var(--muted)] mb-2">
                  メールアドレス <span className="text-[var(--gold)]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@mail.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest text-[var(--muted)] mb-2">
                  ご希望のサービス <span className="text-[var(--gold)]">*</span>
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest text-[var(--muted)] mb-2">
                  おおよその予算
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="">未定 / わからない</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest text-[var(--muted)] mb-2">
                ご依頼内容・ご質問 <span className="text-[var(--gold)]">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="楽曲の概要、スケジュール、ご要望などをお気軽にご記載ください。"
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-12 py-4 bg-[var(--gold)] text-black text-sm tracking-widest font-semibold hover:bg-[var(--gold-light)] transition-colors duration-200 disabled:opacity-50"
              >
                送信する
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
