import About from "./components/home-items/about/about";
import Modalities from "./components/home-items/modalities/modalities";
import Swimming from "./components/home-items/swimming/swimming";

export default function Home() {
  return (
    <main>
      <Modalities />
      <About />
      <Swimming />
    </main>
    );
}
