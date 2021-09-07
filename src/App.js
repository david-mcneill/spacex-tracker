import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rocket from "./pages/Rocket";
import Ship from "./pages/Ship";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main role="main">
                    <Switch>
                        <Route path="/rocket/:id">
                            <Rocket />
                        </Route>

                        <Route path="/ship/:id">
                            <Ship />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
