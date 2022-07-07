import React from "react";
import { Component } from "react";
import "./HomePage.scss";
import sproutLogo from "../../assets/images/sprout-tree.svg";

class HomePage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/sign-up");
  };

  render() {
    return (
      <>
        <div className="homepage">
          <div className="homepage__content">
            <div className="homepage__brand">
              <h2 className="homepage__brand-statement">
                Build &amp; Track the Habits that matter
              </h2>

              <div className="homepage__blurb">
                <p className="homepage__blurb-text">
                  Bad news is that time flies, the good news is that your the
                  pilot! Habits don't sprout if you dont plant them. Start
                  making those changes and watch them grow.
                </p>
              </div>
              <div className="homepage__logo-content">
                <img
                  className="homepage__brand-logo"
                  src={sproutLogo}
                  alt="brand logo"
                />
                <form className="homepage__form" onSubmit={this.handleSubmit}>
                  <button className="homepage__submit">
                    Let's Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
