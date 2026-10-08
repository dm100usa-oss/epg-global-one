import type { MetadataRoute } from "next";

// Поисковики и ИИ-помощники: всем открыт весь сайт, кроме служебной отправки заявок.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "CCBot",
  "Bytespider",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
  "YouBot",
  "Diffbot",
];
const searchBots = ["Googlebot", "Bingbot", "YandexBot", "Applebot", "DuckDuckBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...[...searchBots, ...aiBots].map((userAgent) => ({ userAgent, allow: "/", disallow: "/api/" })),
      { userAgent: "*", allow: "/", disallow: "/api/" },
    ],
    sitemap: "https://www.epgglobalone.com/sitemap.xml",
    host: "https://www.epgglobalone.com",
  };
}
