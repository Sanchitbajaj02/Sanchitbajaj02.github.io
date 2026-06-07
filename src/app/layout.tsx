import "@/styles/globals.css";
import "@/styles/style.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import MainGridLayout from "@/components/layouts/MainGridLayout";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Home - Sanchit Bajaj",
  description:
    "Your friendly neighborhood full-stack developer, making rocks talk — on my own rhythm.",
  keywords: [
    "Sanchit Bajaj",
    "Sanchit developer",
    "sanchitbajaj02",
    "solitrix02",
    "Sanchit dev",
  ],
  applicationName: "Home - Sanchit Bajaj",
  authors: {
    name: "Sanchit Bajaj",
  },
  appleWebApp: {
    title: "Home - Sanchit Bajaj",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const font = Poppins({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased ${font.className}`}>
        <SmoothScroll />
        <MainGridLayout>{children}</MainGridLayout>
      </body>
    </html>
  );
}
