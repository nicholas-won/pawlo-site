import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Pawlo — the shared pet care app. Never wonder if someone fed the pet.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const jakartaExtraBold = await readFile(
    join(process.cwd(), "src/app/fonts/PlusJakartaSans-ExtraBold.ttf")
  );
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F5EFE4",
          fontFamily: "Plus Jakarta Sans",
          position: "relative",
        }}
      >
        {/* Warm corner washes */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "260px",
            background: "#E0B254",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-140px",
            width: "460px",
            height: "460px",
            borderRadius: "230px",
            background: "#D9603F",
            opacity: 0.18,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src={logoSrc}
            alt=""
            width={72}
            height={72}
            style={{ borderRadius: "18px" }}
          />
          <div
            style={{
              fontSize: "40px",
              fontWeight: 800,
              color: "#161A15",
              letterSpacing: "-1px",
            }}
          >
            Pawlo
          </div>
        </div>

        <div
          style={{
            marginTop: "48px",
            fontSize: "76px",
            fontWeight: 800,
            color: "#161A15",
            letterSpacing: "-3px",
            lineHeight: 1.05,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Never wonder if</span>
          <span style={{ color: "#C68829" }}>someone fed the pet.</span>
        </div>

        <div
          style={{
            marginTop: "40px",
            fontSize: "30px",
            fontWeight: 800,
            color: "#3A3F37",
          }}
        >
          The shared pet care app for couples, families & roommates
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: jakartaExtraBold,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
