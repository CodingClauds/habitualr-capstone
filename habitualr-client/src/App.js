import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import HabitPage from "./pages/HabitPage/HabitPage";
import Motivation from "./pages/Motivation/Motivation";
import Calendar from "./pages/TrackerPage/TrackerPage";
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
          <Route path="/motivation" component={Motivation} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
