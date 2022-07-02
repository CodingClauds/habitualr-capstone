import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import HabitPage from "./pages/HabitPage/HabitPage";
import TrackerPage from "./pages/TrackerPage/TrackerPage";
import AboutUs from "./pages/AboutUs/AboutUs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/habit" component={HabitPage} />
          <Route path="/motivation" component={HabitPage} />
          <Route path="/tracker" component={TrackerPage} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
