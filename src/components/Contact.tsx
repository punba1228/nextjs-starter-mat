"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

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
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const result = await sendContactEmail(form);

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMsg(result.error);
    }
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
                  disabled={loading}
                  placeholder="山田 太郎"
                  className={`${inputClass} disabled:opacity-40 disabled:cursor-not-allowed`}
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
                  disabled={loading}
                  placeholder="example@mail.com"
                  className={`${inputClass} disabled:opacity-40 disabled:cursor-not-allowed`}
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
                  disabled={loading}
                  className={`${inputClass} appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed`}
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
                  disabled={loading}
                  className={`${inputClass} appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed`}
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
                disabled={loading}
                rows={6}
                placeholder="楽曲の概要、スケジュール、ご要望などをお気軽にご記載ください。"
                className={`${inputClass} resize-none disabled:opacity-40 disabled:cursor-not-allowed`}
              />
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="px-12 py-4 bg-[var(--gold)] text-black text-sm tracking-widest font-semibold hover:bg-[var(--gold-light)] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg
                      className="animate-mail-fly"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>
                      送信中<span className="animate-dots" />
                    </span>
                  </span>
                ) : (
                  "送信する"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
