import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sanchit Bajaj - Portfolio",
  description: "Portfolio for Sanchit Bajaj",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Sanchit Bajaj" }],
  applicationName: "Sanchit Bajaj - Portfolio",
  robots: "all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
