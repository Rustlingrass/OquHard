import { Resend } from "resend";
import { EmailVerificationTemplate } from "@/components/email-templates/verification-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailDomain = process.env.EMAIL_DOMAIN;

interface SendVerificationEmailParams {
  email: string;
  name: string;
  verificationUrl: string;
}

export async function sendVerificationEmail({
  email,
  name,
  verificationUrl,
}: SendVerificationEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Margs <onboarding@${emailDomain as string}>`,
      to: email,
      subject: "Verify Your Email Address",
      react: EmailVerificationTemplate({
        name,
        verificationUrl,
      }),
    });
    if (error) {
      console.error("Failed to send verification email:", error);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (error) {
    console.error("Error sending verification email:", error);
    return { success: false, error };
  }
}
