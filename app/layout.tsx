import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partichella Githoorn",
  description: "Singing studio",
  generator: "Triviturbo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
