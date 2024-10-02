import "@/styles/globals.css";
import "@/styles/style.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import MainGridLayout from "@/components/layouts/MainGridLayout";

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

const font = Roboto_Slab({
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
        <MainGridLayout>{children}</MainGridLayout>
      </body>
    </html>
  );
}
