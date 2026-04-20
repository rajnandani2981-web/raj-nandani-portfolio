import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raj Nandani — Marketing Portfolio",
  description: "MSc Management & International Business | Brand Storyteller | Digital Marketing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
