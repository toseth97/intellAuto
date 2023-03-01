import Frontpage from "./components/Frontpage";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Frontpage />
            <About />
        </div>
    );
}

export default App;
