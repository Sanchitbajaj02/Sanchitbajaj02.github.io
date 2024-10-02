import "@/styles/globals.css";
import "@/styles/style.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import MainGridLayout from "@/components/layouts/MainGridLayout";

export const metadata: Metadata = {
  title: "Sanchit Bajaj",
  description: "Generated by create next app",
};

const font = Roboto_Slab({
  weight: ["400", "500", "600", "800"],
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
