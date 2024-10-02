import Sidebar from "@/components/Sidebar";
// import MainContent from "@/components/MainContent";
import { Navbar } from "@/components/Navbar";

export default function MainGridLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Sidebar />

      <section className="main-content">
        <Navbar />

        {children}
      </section>
    </main>
  );
}
