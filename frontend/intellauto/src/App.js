import Frontpage from "./components/Frontpage";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    AOS.init({
        offset: 100,
        duration: 450,
        easing: "ease-in-sine",
        delay: 150,
    });

    return (
        <div className="App">
            <Navigation />
            <Frontpage />
            <About />
            <Services />
            <CallToAction />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
