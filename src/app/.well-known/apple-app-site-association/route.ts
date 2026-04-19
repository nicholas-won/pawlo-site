import { NextResponse } from "next/server";

export async function GET() {
  const aasa = {
    applinks: {
      details: [
        {
          appIDs: ["B3NS238NQB.com.pawlo.app"],
          components: [
            {
              "/": "/*",
              comment: "Match all paths",
            },
          ],
        },
      ],
    },
    webcredentials: {
      apps: ["B3NS238NQB.com.pawlo.app"],
    },
  };

  return NextResponse.json(aasa, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
