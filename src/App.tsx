import CallToAction from "./components/CallToAction/CallToAction.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Information from "./components/Information/Information.tsx";
import Testimonial from "./components/Testimonial/Testimonial.tsx";

function App() {
  return (
    <main>
      <h1 className="sr-only">Landing Page</h1>
      <Header />
      <Hero />
      <Information />
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;
