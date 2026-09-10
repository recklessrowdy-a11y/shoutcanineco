import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Shout Canine Co | Dog-Inspired Goods & Canine Education",
    template: "%s | Shout Canine Co"
  },
  description:
    "Dog-inspired goods, breed-focused collections, practical canine education, and resources for people who want to understand dogs as much as they love them.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Shout Canine Co",
    description:
      "Understand the dog. Respect the dog. Celebrate the dog.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
