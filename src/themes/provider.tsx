"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const themeLight = {
  name: "light",

  colorBackground: "#FBFCFE",
  colorAccent: "#5785e0",
  colorTertiary: "#5785e0",
  colorAlt: "#4370cb",
  textNormal: "#232529",
  textLight: "#6a707c",
};

const themeDark = {
  name: "dark",

  colorBackground: "#161C27",
  colorAccent: "#0E121B",
  colorTertiary: "#5785e0",
  colorAlt: "#4370cb",
  textNormal: "#F1F2F3",
  textLight: "#babec4",
};

export default function NextThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
