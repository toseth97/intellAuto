import Navigation from "./components/Navigation";
import Frontpage from "./components/Frontpage";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./globals.css";

export default function Home() {
    return (
        <main>
            <Navigation />
            <Frontpage />
            <About />
            <Services />
            <CallToAction />
            <Contact />
            <Footer />
        </main>
    );
}
