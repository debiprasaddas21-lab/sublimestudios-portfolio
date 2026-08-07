import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Service from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Services />

    </>
  );
}