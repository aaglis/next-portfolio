import Header from "./components/Header";
import Initial from "./components/Initial";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      <Header />
      <Initial />
      <About />
      <Experience />
    </div>
  );
}
