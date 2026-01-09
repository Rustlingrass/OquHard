import * as React from "react";

interface EmailVerificationTemplateProps {
  name: string;
  verificationUrl: string;
  expirationHours?: number;
  supportEmail?: string;
}

export function EmailVerificationTemplate({
  name,
  verificationUrl,
  expirationHours = 24,
  supportEmail = "support@fluentflow.space",
}: EmailVerificationTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#00bc7d",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            BaseAlgo
          </div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#111827",
              margin: "0",
            }}
          >
            Verify Your Email
          </h1>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <p
            style={{
              fontSize: "16px",
              color: "#374151",
              lineHeight: "1.6",
              margin: "0 0 16px 0",
            }}
          >
            Hi {name},
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#374151",
              lineHeight: "1.6",
              margin: "0 0 16px 0",
            }}
          >
            Thanks for signing up for BaseAlgo! To complete your registration,
            please verify your email address by clicking the button below.
          </p>
        </div>

        <div style={{ textAlign: "center", margin: "32px 0" }}>
          <a
            href={verificationUrl}
            style={{
              display: "inline-block",
              backgroundColor: "#00bc7d",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.4)",
            }}
          >
            Verify Email Address
          </a>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              lineHeight: "1.6",
              margin: "0 0 16px 0",
            }}
          >
            This link will expire in {expirationHours} hours for security
            reasons.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              lineHeight: "1.6",
              margin: "0 0 8px 0",
            }}
          >
            If the button above doesn't work, you can copy and paste this link
            into your browser:
          </p>
          <a
            href={verificationUrl}
            style={{
              display: "block",
              wordBreak: "break-all",
              color: "#3b82f6",
              textDecoration: "underline",
              fontSize: "13px",
            }}
          >
            {verificationUrl}
          </a>
        </div>

        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: "24px",
            marginTop: "32px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              lineHeight: "1.6",
              margin: "0 0 8px 0",
            }}
          >
            If you didn't create an account with YourApp, you can safely ignore
            this email.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              lineHeight: "1.6",
              margin: "0",
            }}
          >
            Need help? Contact us at{" "}
            <a
              href={`mailto:${supportEmail}`}
              style={{ color: "#3b82f6", textDecoration: "underline" }}
            >
              {supportEmail}
            </a>
          </p>
        </div>
      </div>

      <div
        style={{ textAlign: "center", marginTop: "24px", padding: "0 20px" }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            lineHeight: "1.6",
            margin: "0 0 8px 0",
          }}
        >
          © 2025 BaseAlgo. All rights reserved.
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            lineHeight: "1.6",
            margin: "0",
          }}
        >
          This is an automated email, please do not reply.
        </p>
      </div>
    </div>
  );
}
