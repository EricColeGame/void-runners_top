export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Void Runners Wiki",
  shortName: "Void Runners",
  logoText: "VR",
  tagline: "Codes, Gameplay Guides, Builds & Tier Lists",
  description:
    "Your complete Void Runners wiki — working codes, parkour and courier gameplay guides, salvage routes, builds, ships, tier lists and progression tips for the Roblox void courier game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://void-runners.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://void-runners.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/117457763354785/Void-Runners",
  heroVideoId: "FnH86ToLs4A", // Void Runners gameplay showcase
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
