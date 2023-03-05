import Frontpage from "./components/Frontpage";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Frontpage />
            <About />
            <Services />
            <CallToAction />
            <Contact />
        </div>
    );
}

export default App;
