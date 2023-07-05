import "./globals.css";
import { Poppins } from "next/font/google";
import NextThemeProvider from "@/themes/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sanchit Bajaj | Portfolio",
  description: "Portfolio for Sanchit Bajaj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#FBFCFE] dark:bg-[#161C27]`}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
