import keywords from "../meta/keywords.json";
import { z } from "zod";

const SEOMetaTagsSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.string(),
  author: z.string(),
  robots: z.string(),
  viewport: z.string(),
  ogTitle: z.string(),
  ogDescription: z.string(),
  ogType: z.string(),
  ogUrl: z.string(),
  ogImage: z.string(),
  twitterCard: z.string(),
  twitterCreator: z.string(),
  canonical: z.string(),
  language: z.string(),
  geoRegion: z.string(),
  geoPlacename: z.string(),
});



const Metatags = {
    title: "KaziByte - Empowering Digital Solutions for a Connected World",
    description:
      "KaziByte is a student-run, non-profit, student-led, and student-run organization.",
  };
  
  const SEOMetaTags: z.infer<typeof SEOMetaTagsSchema> = {
    title: Metatags.title,
    description: Metatags.description,
    keywords: keywords.keywordData.join(", "),
    author: "zobaiudlkazi",
    robots: "index,follow",
    viewport: "width=device-width, initial-scale=1.0",
    ogTitle: Metatags.title,
    ogDescription: Metatags.description,
    ogType: "website",
    ogUrl: "https://example.com",
    ogImage: "https://example.com/image.jpg",
    twitterCard: "summary_large_image",
    twitterCreator: "@YourTwitterHandle",
    canonical: "https://example.com",
    language: "en-US",
    geoRegion: "US",
    geoPlacename: "Bangladesh",
  };
  

  export default SEOMetaTags;