import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zewotir Desalegn Alemu - PR Strategist | Media Personality | Voice-Over Artist",
  description: "Professional portfolio of Zewotir Desalegn Alemu - PR Strategist, Media Personality, and Voice-Over Artist. Crafting narratives that connect people, purpose, and possibility.",
  keywords: "PR Strategist, Media Personality, Voice-Over Artist, TV Host, Professional MC, Communication Strategy",
  authors: [{ name: "Zewotir Desalegn Alemu" }],
  openGraph: {
    title: "Zewotir Desalegn Alemu - PR Strategist | Media Personality",
    description: "Professional portfolio showcasing expertise in PR strategy, media hosting, and voice-over artistry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
        suppressHydrationWarning={true}
        >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
