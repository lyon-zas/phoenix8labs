import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/contact/", "/privacy/"].map((path) => ({ url: `${site.url}${path}` }));
}
