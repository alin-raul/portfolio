import Hero from "./components/main/sections/Hero/Hero";
import About from "./components/main/sections/About/About";
import Skills from "./components/main/sections/Skills/Skills";
import Encryption from "./components/main/Encryption";
import Portfolio from "./components/main/sections/Portfolio/Portfolio";
import Wrapper from "./components/main/Wrapper";
import Contact from "./components/main/sections/Contact/Contact";
import Footer from "./components/main/sections/Footer/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="gap-20">
        <Hero />
        <Wrapper>
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          {/* <Encryption /> */}
        </Wrapper>
        <Footer />
      </div>
    </main>
  );
}
