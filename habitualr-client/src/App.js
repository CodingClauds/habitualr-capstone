import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import HabitPage from "./pages/HabitPage/HabitPage";
import TrackerPage from "./pages/TrackerPage/TrackerPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/habit" component={HabitPage} />
          <Route path="/tracker" component={TrackerPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
