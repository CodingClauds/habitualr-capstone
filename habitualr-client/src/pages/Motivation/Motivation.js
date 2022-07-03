import returnButton from "../../assets/images/back-60.png";
import infoIcon from "../../assets/images/info.svg";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Motivation.scss";

class Motivation extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/calendar");
  };

  render() {
    return (
      <>
        <section className="description">
          <div className="description__card">
            <div className="description__banner">
              <Link to="/habit" className="description__return-link">
                <img
                  className="description__return-image"
                  src={returnButton}
                  alt="Arrow icon that links user back to homepage"
                />
              </Link>
              {/* dynamic habit, depending on the users input */}
              <h1 className="description__habit-id">Make my Bed</h1>
              {/* modal for details about the habit? || Display the description of the habit and how much time to dedicate towards or start with etc. */}
              <div className="description__info">
                <img
                  className="description__info-image"
                  src={infoIcon}
                  alt="information icon"
                />
              </div>
            </div>
            <div className="description__content">
              <p className="description__text">
                The theory is that just by making your bed, you've accomplished
                at least that one thing. So, the simple act of tidying up your
                covers lets you begin your morning with a small success that
                will encourage many more throughout the day. If you make your
                bed, you make your day!
              </p>
            </div>
            {/* this will take us to the calendar page */}
            <Link to="/calendar">
              <button className="description__calendar-btn" type="button">
                Let's Track your Progress!
              </button>
            </Link>
          </div>
        </section>
      </>
    );
  }
}

export default Motivation;
