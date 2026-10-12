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
    "Your complete Void Runners wiki — working codes, ship builds, salvage routes, guardian boss strategies, co-op tips, tier lists and progression guides for the sci-fi void runner on Steam.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://void-runners.top",
  supportEmail: "support@void-runners.top",
  gameUrl: "https://store.steampowered.com/app/5334520/Void_Runners/",
  heroVideoId: "FnH86ToLs4A", // Void Runners gameplay showcase
  social: {
    discord: "https://steamcommunity.com/app/5334520",
    youtube: "https://www.youtube.com/watch?v=FnH86ToLs4A",
  },
  locales: ["en", "ja", "de", "es"],
  defaultLocale: "en",
};
