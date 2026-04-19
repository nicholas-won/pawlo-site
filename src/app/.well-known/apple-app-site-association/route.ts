import { NextResponse } from "next/server";

export async function GET() {
  const aasa = {
    applinks: {
      details: [
        {
          appIDs: ["B3NS238NQB.com.pawlo.app"],
          components: [
            // --- Excluded web-only pages ---
            // These paths should open in the browser, not the app
            { "/": "/privacy", exclude: true, comment: "Privacy policy - web only" },
            { "/": "/terms", exclude: true, comment: "Terms of service - web only" },
            { "/": "/support", exclude: true, comment: "Support page - web only" },
            { "/": "/support/*", exclude: true, comment: "Support sub-pages - web only" },
            { "/": "/creators", exclude: true, comment: "Creators page - web only" },
            { "/": "/creators/*", exclude: true, comment: "Creators sub-pages - web only" },
            { "/": "/launch", exclude: true, comment: "Launch page - web only" },
            { "/": "/prelaunch", exclude: true, comment: "Prelaunch page - web only" },

            // --- App deep link paths ---
            // Add specific patterns here as the app grows, e.g.:
            // { "/": "/invite/*", comment: "Household invite links" },
            // { "/": "/pet/*", comment: "Pet profile deep links" },

            // Catch-all for any other paths
            { "/": "/*", comment: "Match all remaining paths" },
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
