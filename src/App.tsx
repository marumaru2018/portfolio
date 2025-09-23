import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
