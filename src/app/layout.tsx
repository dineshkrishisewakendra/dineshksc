import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bright Horizons Academy | Excellence in Education",
  description:
    "Bright Horizons Academy is a premier educational institution committed to nurturing future leaders through innovative teaching, world-class facilities, and holistic development programs.",
  keywords: [
    "school",
    "academy",
    "education",
    "learning",
    "private school",
    "academic excellence",
  ],
  openGraph: {
    title: "Bright Horizons Academy | Excellence in Education",
    description:
      "Premier educational institution committed to nurturing future leaders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
