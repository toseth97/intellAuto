import Frontpage from "./components/Frontpage";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Services from "./components/Services";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Frontpage />
            <About />
            <Services />
        </div>
    );
}

export default App;
