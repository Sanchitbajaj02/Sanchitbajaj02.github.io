import Sidebar from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import PageTransitionWrapper from "@/components/animations/PageTransitionWrapper";
import ParticleBackground from "@/components/ParticleBackground";

export default function MainGridLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      {/* Ambient particle field — canvas sits behind everything */}
      <ParticleBackground />

      <Sidebar />

      <section className="main-content">
        <Navbar />
        {/* Page transitions + scroll progress bar */}
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
      </section>
    </main>
  );
}
