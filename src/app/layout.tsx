import "@/styles/globals.css";
import "@/styles/style.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MainGridLayout from "@/components/layouts/MainGridLayout";
import AmbientSound from "@/components/AmbientSound";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Sanchit Bajaj — Full-Stack Developer | React · Next.js · Node.js",
  description:
    "Sanchit Bajaj is a Full-Stack Software Engineer based in Delhi, India, with 2+ years of experience building scalable web and mobile applications using React, Next.js, and Node.js. Open to new opportunities.",
  keywords: [
    "Sanchit Bajaj",
    "Sanchit Bajaj developer",
    "sanchitbajaj02",
    "full stack developer India",
    "full stack developer Delhi",
    "React developer India",
    "Next.js developer",
    "Node.js developer",
    "MERN stack developer",
    "software engineer portfolio India",
    "hire full stack developer India",
    "React Next.js developer Delhi",
    "JavaScript developer India",
    "TypeScript developer",
    "solitrix02",
  ],
  applicationName: "Sanchit Bajaj",
  authors: {
    name: "Sanchit Bajaj",
    url: "https://sanchitbajaj02.github.io",
  },
  metadataBase: new URL("https://sanchitbajaj02.github.io"),
  themeColor: "#1e1e2e",
  appleWebApp: {
    title: "Sanchit Bajaj",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [{ url: "favicon.ico", type: "image/x-icon" }],
    apple: "/assets/images/profile-pic.png",
  },
  openGraph: {
    type: "website",
    url: "https://sanchitbajaj02.github.io",
    siteName: "Sanchit Bajaj",
    title: "Sanchit Bajaj — Full-Stack Developer | React · Next.js · Node.js",
    description:
      "Full-Stack Software Engineer from Delhi, India. 2+ years building scalable web & mobile apps with React, Next.js, Node.js, and Express.js. Open to new opportunities.",
    images: [
      {
        url: "/assets/images/profile-pic.png",
        width: 250,
        height: 250,
        alt: "Sanchit Bajaj — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@solitrix02",
    creator: "@solitrix02",
    title: "Sanchit Bajaj — Full-Stack Developer | React · Next.js · Node.js",
    description:
      "Full-Stack Software Engineer from Delhi, India. React, Next.js, Node.js, Express.js. Open to new opportunities.",
    images: ["/assets/images/profile-pic.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sanchit Bajaj",
  jobTitle: "Full-Stack Software Engineer",
  email: "sanchitbajaj02@gmail.com",
  url: "https://sanchitbajaj02.github.io",
  image: "https://sanchitbajaj02.github.io/assets/images/profile-pic.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/sanchitbajaj02",
    "https://github.com/sanchitbajaj02",
    "https://x.com/solitrix02",
    "https://solitrix02.hashnode.dev",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Manav Rachna University",
  },
  worksFor: {
    "@type": "Organization",
    name: "Infozech Software Pvt Ltd",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "React Native",
    "PostgreSQL",
    "MongoDB",
    "System Design",
    "Full-Stack Development",
    "Blockchain Development",
  ],
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`antialiased ${font.className}`}>
        {/* Ambient sound toggle (bottom-right corner) */}
        <AmbientSound />
        {/* Cinematic vault entry — once per session */}
        <LoadingScreen>
          {/* Main layout (Sidebar + page content with transitions) */}
          <MainGridLayout>{children}</MainGridLayout>
        </LoadingScreen>
      </body>
    </html>
  );
}
