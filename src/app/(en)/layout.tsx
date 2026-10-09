import type { Metadata, Viewport } from "next";
import "../globals.css";
import fs from "node:fs";
import path from "node:path";
import { siteIcons, siteViewport } from "../site-config";

const org = fs.readFileSync(path.join(process.cwd(), "src/content/en/org.json"), "utf8");

export const metadata: Metadata = {
  metadataBase: new URL("https://www.epgglobalone.com"),
  title: "EPG Global ONE - Customer Trust in Website Score",
  description:
    "EPG Global ONE helps companies stop losing customers because of website errors: it conducts an independent website audit through the eyes of the customer and calculates the Customer Trust in Website Score (CTWS).",
  ...siteIcons,
};

export const viewport: Viewport = siteViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,500;7..72,600&family=IBM+Plex+Sans:wght@400;500;600&family=Lora:ital,wght@1,400&display=swap"
        />
        <script src="/js/menu.js" defer></script>
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON.parse(org)) }} />
        {children}
      </body>
    </html>
  );
}
