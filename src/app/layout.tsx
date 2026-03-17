import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Krishi Seva Kendra | Quality Seeds & Fertilizers in Trishuli Belwadamar",
  description:
    "Your trusted partner in Trishuli Belwadamar, Chhattisgarh for high-yield paddy & vegetable seeds, organic bio-insecticides, chemical fertilizers, and modern farming equipment. Empowering farmers since establishment.",
  keywords: [
    "Krishi Seva Kendra",
    "Dinesh Krishi",
    "seeds Trishuli Belwadamar",
    "fertilizers Chhattisgarh",
    "bio insecticides",
    "farming equipment",
    "Surguja agriculture",
  ],
  openGraph: {
    title: "Dinesh Krishi Seva Kendra",
    description: "Empowering Farmers with Quality Seeds & Fertilizers in Trishuli Belwadamar, Chhattisgarh",
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
