import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  {ThemeProvider} from "@/components/common/ThemeProvider";
import BgGradient from "@/components/common/BgGradient";
import SEOMetaTags from "../contexts/meta/SEOTags";


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
          <div className="text-black dark:text-white"> {children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
