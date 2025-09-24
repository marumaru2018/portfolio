import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Header />
      {/* Hero */}
      <div>Hero</div>
      <Hero />
      {/* About */}
      <div>About</div>
      <About />
      <Portfolio />
      <Social />
      <Footer />
    </>
  );
}

export default App;
