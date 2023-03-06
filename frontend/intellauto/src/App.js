import Frontpage from "./components/Frontpage";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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
