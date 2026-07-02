import Header from "./components/Header";
import Initial from "./components/Initial";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Initial />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
