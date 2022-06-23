import "./App.scss";
import "./styles/partials/_globals.scss";
import "./styles/partials/_mixins.scss";
import "./styles/partials/_variables.scss";
import "./styles/partials/_typography.scss";

import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import HabitPage from "./pages/HabitPage/HabitPage";
import TrackerPage from "./pages/TrackerPage/TrackerPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/habit" component={HabitPage} />
          <Route path="/:id" component={TrackerPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
