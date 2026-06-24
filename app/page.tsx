import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import ProjectsSection from '@/components/projects-section';
import DesignPortfolio from '@/components/design-portfolio';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsSection />
        <DesignPortfolio />
        <Experience />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
