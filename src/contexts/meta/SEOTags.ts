import keywords from "../meta/keywords.json";


const Metatags = {
    title: "KaziByte - Empowering Digital Solutions for a Connected World",
    description:
      "KaziByte is a student-run, non-profit, student-led, and student-run organization.",
  };
  
  const SEOMetaTags = {
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