import Header from "./components/Header";
import Initial from "./components/Initial";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Initial />
      <About />
      <Experience />
    </main>
  );
}
