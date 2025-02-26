import Hero from "./components/main/sections/Hero/Hero";
import About from "./components/main/sections/About/About";
import Skills from "./components/main/sections/Skills/Skills";
import Encryption from "./components/main/Encryption";
import Works from "./components/main/sections/Works/Works";
import Wrapper from "./components/main/Wrap";
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
          <Works />
          <Contact />
          <Footer />
          {/* <Encryption /> */}
        </Wrapper>
      </div>
    </main>
  );
}
