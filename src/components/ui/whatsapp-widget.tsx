"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const WA_MESSAGE = `🚀 *New Project Inquiry — EDENZATECH*
━━━━━━━━━━━━━━━━━━

👋 Hello Edenzatech Team,

I came across your portfolio and I'm interested in discussing a project.

📋 *Project Details*
• *Type:* _(Web App / Mobile App / SaaS / Other)_
• *Description:* _(Brief idea of what you want to build)_
• *Timeline:* _(Expected start & deadline)_
• *Budget Range:* _(Approximate budget in USD/INR)_

👤 *My Details*
• *Name:* 
• *Company / Brand:* 
• *Country:* 

💬 Looking forward to connecting with your team!
━━━━━━━━━━━━━━━━━━`;

const WA_URL = `https://wa.me/917045475587?text=${encodeURIComponent(WA_MESSAGE)}`;

const WA_ICON = (
  <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.004 3C9.374 3 4 8.373 4 15.002c0 2.178.575 4.22 1.573 5.99L4 29l8.236-1.545a12.03 12.03 0 0 0 3.768.6c6.628 0 12.002-5.373 12.002-12.002C28.006 9.374 22.633 3 16.004 3zm0 21.94a9.916 9.916 0 0 1-3.53-.644l-.252-.1-5.262.987 1.004-4.973-.165-.26A9.9 9.9 0 0 1 6.11 15c0-5.455 4.44-9.895 9.895-9.895 5.454 0 9.895 4.44 9.895 9.895 0 5.454-4.44 9.895-9.895 9.895l-.001.046zm5.42-7.407c-.297-.148-1.754-.866-2.026-.964-.27-.099-.467-.148-.664.148-.197.297-.764.965-.937 1.162-.172.197-.345.222-.641.074-.297-.148-1.253-.461-2.386-1.472-.882-.786-1.477-1.756-1.651-2.053-.173-.297-.018-.457.13-.604.133-.133.297-.347.445-.52.149-.174.198-.297.297-.495.099-.197.05-.371-.025-.52-.074-.148-.663-1.6-.908-2.19-.239-.574-.482-.496-.663-.505l-.566-.01c-.197 0-.52.074-.793.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.073.149.197 2.095 3.2 5.076 4.487.71.307 1.263.49 1.695.627.712.226 1.36.194 1.872.118.571-.085 1.754-.717 2.002-1.41.247-.692.247-1.285.173-1.41-.074-.122-.27-.197-.567-.346z" />
  </svg>
);

function WidgetContent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes wa-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Chat Card Popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "88px",
            right: "24px",
            zIndex: 2147483647,
            width: "min(340px, calc(100vw - 2rem))",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
            animation: "wa-slide-up 0.25s ease-out both",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg,#075E54 0%,#128C7E 100%)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                position: "relative",
                height: 44,
                width: 44,
                flexShrink: 0,
                borderRadius: "50%",
                overflow: "hidden",
                background: "white",
                boxShadow: "0 0 0 2px rgba(255,255,255,0.3)",
              }}
            >
              <Image src="/edenza-favicon.png" alt="Edenzatech" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontWeight: 700, color: "#fff", fontSize: 14, lineHeight: 1.3 }}>
                Edenzatech
              </p>
              <p style={{ margin: "3px 0 0", fontSize: 11, color: "#25D366", fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ display: "inline-block", height: 7, width: 7, borderRadius: "50%", background: "#25D366" }} />
                Typically replies in minutes
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: 28, height: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div style={{ background: "#ECE5DD", padding: "16px", display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ margin: 0, textAlign: "center", fontSize: 10, color: "#999" }}>Today</p>

            <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
              <div style={{ position: "relative", height: 32, width: 32, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: "white" }}>
                <Image src="/edenza-favicon.png" alt="Edenzatech" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ maxWidth: "80%" }}>
                <div style={{ background: "#fff", borderRadius: "16px 16px 16px 4px", padding: "10px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 6 }}>
                  <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 11, color: "#075E54" }}>EDENZATECH 👋</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#333", lineHeight: 1.5 }}>
                    Hello! Looking to build a <strong>web app, mobile app</strong> or <strong>SaaS product</strong>?
                  </p>
                </div>
                <div style={{ background: "#fff", borderRadius: "16px 16px 16px 4px", padding: "10px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                  <p style={{ margin: 0, fontSize: 12, color: "#333", lineHeight: 1.5 }}>
                    Our team is ready — <strong>reply within 4 hours</strong> guaranteed. 🚀
                  </p>
                </div>
                <p style={{ margin: "4px 0 0 4px", fontSize: 10, color: "#aaa" }}>
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>

            {/* Quick reply chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 4 }}>
              {[
                {
                  label: "💻 Web App",
                  msg: `🌐 *Web App Inquiry — EDENZATECH*\n━━━━━━━━━━━━━━━━━━\n\n👋 Hello! I want to build a *Web Application*.\n\n📋 *Details*\n• *Type:* Web App / Web Platform\n• *Features needed:* _(List key features)_\n• *Tech preference:* _(React / Next.js / Other?)_\n• *Timeline:* \n• *Budget:* \n\n👤 *My Name:*\n━━━━━━━━━━━━━━━━━━`,
                },
                {
                  label: "📱 Mobile App",
                  msg: `📱 *Mobile App Inquiry — EDENZATECH*\n━━━━━━━━━━━━━━━━━━\n\n👋 Hello! I want to build a *Mobile Application*.\n\n📋 *Details*\n• *Platform:* iOS / Android / Both\n• *Type:* _(e.g. e-commerce, booking, social)_\n• *Key features:* _(List main features)_\n• *Timeline:* \n• *Budget:* \n\n👤 *My Name:*\n━━━━━━━━━━━━━━━━━━`,
                },
                {
                  label: "☁️ SaaS Product",
                  msg: `☁️ *SaaS Product Inquiry — EDENZATECH*\n━━━━━━━━━━━━━━━━━━\n\n👋 Hello! I want to build a *SaaS Platform*.\n\n📋 *Details*\n• *Niche / Industry:* \n• *Target users:* \n• *Core modules:* _(e.g. dashboard, billing, CRM)_\n• *Timeline:* \n• *Budget:* \n\n👤 *My Name:*\n━━━━━━━━━━━━━━━━━━`,
                },
                {
                  label: "💡 Get a Quote",
                  msg: `💰 *Quote Request — EDENZATECH*\n━━━━━━━━━━━━━━━━━━\n\n👋 Hello! I'd like to get a *project quote*.\n\n📋 *Project Summary*\n• *Project type:* \n• *Short description:* \n• *Estimated scope:* _(Small / Medium / Large)_\n• *Start date:* \n• *Budget range:* \n\n👤 *My Name:*\n🏢 *Company:*\n━━━━━━━━━━━━━━━━━━`,
                },
              ].map(({ label, msg }) => (
                <a
                  key={label}
                  href={`https://wa.me/917045475587?text=${encodeURIComponent(msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#fff", border: "1px solid rgba(18,140,126,0.2)", borderRadius: 999, padding: "4px 12px", fontSize: 10, fontWeight: 700, color: "#075E54", textDecoration: "none" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#25D366", padding: "14px", fontSize: 11, fontWeight: 800, color: "#fff", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            <svg viewBox="0 0 32 32" style={{ height: 16, width: 16, fill: "#fff" }} xmlns="http://www.w3.org/2000/svg">
              <path d="M16.004 3C9.374 3 4 8.373 4 15.002c0 2.178.575 4.22 1.573 5.99L4 29l8.236-1.545a12.03 12.03 0 0 0 3.768.6c6.628 0 12.002-5.373 12.002-12.002C28.006 9.374 22.633 3 16.004 3zm0 21.94a9.916 9.916 0 0 1-3.53-.644l-.252-.1-5.262.987 1.004-4.973-.165-.26A9.9 9.9 0 0 1 6.11 15c0-5.455 4.44-9.895 9.895-9.895 5.454 0 9.895 4.44 9.895 9.895 0 5.454-4.44 9.895-9.895 9.895l-.001.046zm5.42-7.407c-.297-.148-1.754-.866-2.026-.964-.27-.099-.467-.148-.664.148-.197.297-.764.965-.937 1.162-.172.197-.345.222-.641.074-.297-.148-1.253-.461-2.386-1.472-.882-.786-1.477-1.756-1.651-2.053-.173-.297-.018-.457.13-.604.133-.133.297-.347.445-.52.149-.174.198-.297.297-.495.099-.197.05-.371-.025-.52-.074-.148-.663-1.6-.908-2.19-.239-.574-.482-.496-.663-.505l-.566-.01c-.197 0-.52.074-.793.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.073.149.197 2.095 3.2 5.076 4.487.71.307 1.263.49 1.695.627.712.226 1.36.194 1.872.118.571-.085 1.754-.717 2.002-1.41.247-.692.247-1.285.173-1.41-.074-.122-.27-.197-.567-.346z" />
            </svg>
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Trigger FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 2147483647,
          height: 56,
          width: 56,
          borderRadius: "50%",
          background: "#25D366",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.12)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          WA_ICON
        )}

        {/* Red notification badge */}
        {!open && (
          <span style={{
            position: "absolute",
            top: -2,
            right: -2,
            height: 18,
            width: 18,
            borderRadius: "50%",
            background: "#ef4444",
            color: "#fff",
            fontSize: 9,
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 0 2px white",
          }}>
            1
          </span>
        )}
      </button>
    </>
  );
}

export function WhatsAppWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Portal renders directly into document.body — no parent overflow/transform can clip it
  return createPortal(<WidgetContent />, document.body);
}
