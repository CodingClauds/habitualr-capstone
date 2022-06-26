import React from "react";
import "../TrackerPage/TrackerPage.scss";
import returnButton from "../../assets/images/back-60.png";
import infoIcon from "../../assets/images/info.svg";

export default function TrackerPage() {
  return (
    <>
      <section className="progress">
        <div className="progress__card">
          <div className="progress__banner">
            <a className="progress__return-link" href="/habit">
              <img
                className="progress__return-image"
                src={returnButton}
                alt="Arrow icon that links user back to homepage"
              />
            </a>
            {/* dynamic habit, depending on the users input */}
            <h1 className="progress__habit-id">Make my Bed</h1>
            {/* modal for details about the habit? || Display the description of the habit and how much to start with etc. */}
            <div className="progress__info">
              <img
                className="progress__info-image"
                src={infoIcon}
                alt="information icon"
              />
            </div>
          </div>

          {/* <h2 className="statement__subtitle">Let's Track your Progress!</h2> */}
          <div className="statement__content">
            <p className="statement__description">
              The theory is that just by making your bed, you've accomplished at
              least that one thing. So, the simple act of tidying up your covers
              lets you begin your morning with a small success that will
              encourage many more throughout the day. If you make your bed, you
              make your day!
            </p>
          </div>

          {/* This is where the calendar / tracker would go */}
        </div>
      </section>
    </>
  );
}
