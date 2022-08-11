import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import HabitPage from "./pages/HabitPage/HabitPage";
import Motivation from "./pages/Motivation/Motivation";
import Calendar from "./pages/TrackerPage/TrackerPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sign-in" component={Signup} />
          <Route path="/habit" component={HabitPage} />
          <Route path="/motivation/:id" component={Motivation} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
