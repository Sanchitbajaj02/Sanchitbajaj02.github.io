import Navbar from "@/components/navbar";
import Contactus from "@/app/contact/index";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Navbar />

      <Contactus />
    </main>
  );
}
