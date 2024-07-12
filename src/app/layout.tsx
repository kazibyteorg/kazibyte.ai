import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import keywords from "../contexts/meta/keywords.json";
import SEOMetaTags from "../contexts/meta/SEOTags";
import  {ThemeProvider} from "@/components/common/ThemeProvider";
import BgGradient from "@/components/common/BgGradient";


export const revalidate = 0;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SEOMetaTags.title,
  description: SEOMetaTags.description,
  keywords: SEOMetaTags.keywords,
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <BgGradient />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
