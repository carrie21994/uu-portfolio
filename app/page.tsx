import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Workflow from "@/components/Workflow";
import Playground from "@/components/Playground";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Workflow />
        <Playground />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
