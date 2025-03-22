import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Sanchit Bajaj",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
