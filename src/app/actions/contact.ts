"use server";

import { Resend } from "resend";
import { env } from "@/lib/zod/env";

const resend = new Resend(env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

export type ContactResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactEmail(data: ContactFormData): Promise<ContactResult> {
  const { error } = await resend.emails.send({
    from: "お問い合わせフォーム <onboarding@resend.dev>",
    to: env.CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `【お問い合わせ】${data.service} - ${data.name} 様`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="border-bottom: 2px solid #c9a84c; padding-bottom: 8px;">お問い合わせが届きました</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
          <tr>
            <th style="text-align: left; padding: 10px; background: #f5f5f5; width: 140px; font-weight: normal; color: #666;">お名前</th>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 10px; background: #f5f5f5; font-weight: normal; color: #666;">メールアドレス</th>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 10px; background: #f5f5f5; font-weight: normal; color: #666;">ご希望のサービス</th>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.service}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 10px; background: #f5f5f5; font-weight: normal; color: #666;">おおよその予算</th>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.budget || "未定 / わからない"}</td>
          </tr>
          <tr>
            <th style="text-align: left; padding: 10px; background: #f5f5f5; font-weight: normal; color: #666; vertical-align: top;">ご依頼内容</th>
            <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">このメールは自動送信されています。</p>
      </div>
    `,
  });

  if (error) {
    return { success: false, error: "メールの送信に失敗しました。しばらく経ってから再度お試しください。" };
  }

  return { success: true };
}
