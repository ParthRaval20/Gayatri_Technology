import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Gayatri Technology | Custom Web Development & Enterprise Software Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #07170C 0%, #0D2615 50%, #07170C 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(71, 197, 110, 0.25) 0%, rgba(71, 197, 110, 0) 70%)",
          }}
        />

        {/* Header / Brand */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#47C56E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#091C0F",
                fontSize: "24px",
                fontWeight: "900",
              }}
            >
              GT
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px" }}>
                Gayatri Technology
              </span>
              <span style={{ color: "#47C56E", fontSize: "14px", fontWeight: "600", letterSpacing: "1px" }}>
                ENGINEERING EXCELLENCE
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(71, 197, 110, 0.4)",
              background: "rgba(71, 197, 110, 0.1)",
              color: "#86EFAC",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Rajkot, Gujarat • Worldwide Delivery
          </div>
        </div>

        {/* Main Headline & Value Proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "56px",
              fontWeight: "800",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Custom Web Development &amp;{" "}
            <span style={{ color: "#47C56E" }}>Enterprise Software</span>
          </h1>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "24px",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "960px",
            }}
          >
            Bespoke web applications, industrial ERP systems, and cloud architectures built with zero generic templates.
          </p>
        </div>

        {/* Footer badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            {["Next.js & React", "Industrial ERP", "Bespoke SaaS", "Cloud & APIs"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.06)",
                  color: "#E2E8F0",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <span style={{ color: "#64748B", fontSize: "16px", fontWeight: "600" }}>
            gayatritechnology.in
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
