import Header from "./components/Header";
import Initial from "./components/Initial";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      <Header />
      <Initial />
      <About />
    </div>
  );
}
