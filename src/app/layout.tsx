import "@/styles/globals.css";
import "@/styles/style.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import MainGridLayout from "@/components/layouts/MainGridLayout";

export const metadata: Metadata = {
  title: "Sanchit Bajaj - Portfolio",
  description:
    "Your friendly neighborhood full stack developer, making rocks talk — on my Rhythm.",

  applicationName: "Sanchit Bajaj - Portfolio",
  authors: {
    name: "Sanchit Bajaj",
  },
  appleWebApp: {
    title: "Sanchit Bajaj - Portfolio",
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
