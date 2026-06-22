import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Casa Hogar Goyito A.C. — De la calle a casa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function dataUri(rel: string, mime: string) {
  const b64 = readFileSync(join(process.cwd(), rel)).toString("base64");
  return `data:${mime};base64,${b64}`;
}

export default async function OpengraphImage() {
  const logo = dataUri("public/images/logo-mark.png", "image/png");
  const photo = dataUri("public/images/real/photo-1.jpg", "image/jpeg");

  const stats: [string, string][] = [
    ["550", "rescates"],
    ["2,500+", "esterilizaciones"],
    ["350", "adopciones"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "sans-serif",
        }}
      >
        {/* Panel de texto */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 730,
            padding: "62px 64px",
            backgroundImage:
              "linear-gradient(135deg, #FAF6EF 0%, #F3ECDE 55%, #EFE3D0 100%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                width: 86,
                height: 86,
                borderRadius: 22,
                background: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 30px rgba(122,75,43,0.25)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} width={64} height={54} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 25, fontWeight: 700, color: "#2A2218" }}>
                Casa Hogar Goyito A.C.
              </span>
              <span style={{ fontSize: 18, color: "#7A4B2B" }}>
                Albergue canino · León, Gto.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 34,
            }}
          >
            <span style={{ fontSize: 86, fontWeight: 800, color: "#2A2218", lineHeight: 1 }}>
              De la calle
            </span>
            <span style={{ fontSize: 86, fontWeight: 800, color: "#E8722E", lineHeight: 1.05 }}>
              a casa
            </span>
          </div>

          <span style={{ fontSize: 25, color: "#5d3922", marginTop: 26, maxWidth: 560 }}>
            Rescatamos, rehabilitamos y damos en adopción a perritos en situación
            de calle.
          </span>

          <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
            {stats.map(([n, l]) => (
              <div
                key={l}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 18px",
                  background: "rgba(232,114,46,0.12)",
                  borderRadius: 16,
                }}
              >
                <span style={{ fontSize: 30, fontWeight: 800, color: "#2A2218" }}>
                  {n}
                </span>
                <span style={{ fontSize: 15, color: "#7c6f5d" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Foto real */}
        <div style={{ display: "flex", width: 470, position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt=""
            width={470}
            height={630}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(90deg, rgba(56,32,20,0.35) 0%, rgba(56,32,20,0) 30%)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
