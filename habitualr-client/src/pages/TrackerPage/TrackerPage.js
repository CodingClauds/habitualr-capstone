import React from "react";
import { Link } from "react-router-dom";
import "../TrackerPage/TrackerPage.scss";
import Calendar from "../../components/Calendar/Calendar";
import returnIcon from "../../assets/images/back-60.png";

function TrackerPage() {
  return (
    <>
      <section className="progress">
        <div className="progress__banner">
          <Link to="/habit">
            <img
              className="progress__return"
              src={returnIcon}
              alt="return icon"
            />
          </Link>
          <h2 className="progress__title">Let's Start Tracking!</h2>
        </div>
        <div className="progress__calendar">
          <Calendar />
        </div>
      </section>
    </>
  );
}

export default TrackerPage;
