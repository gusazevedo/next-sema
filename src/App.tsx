import About from "./components/home-items/about/about"
import Banner from "./components/home-items/banner/banner"
import Location from "./components/home-items/location/location"
import Modalities from "./components/home-items/modalities/modalities"
import Swimming from "./components/home-items/swimming/swimming"
import Footer from './components/footer/footer';

import './App.css';

function App() {

  return (
    <main>
      <Banner />
      <Modalities />
      <About />
      <Swimming />
      <Location />
      <Footer />
    </main>
  )
}

export default App
