import React from "react";
import { Component } from "react";
import "../HabitPage/HabitPage.scss";
import returnButton from "../../assets/images/back-arrow-100x100.png";

class HabitPage extends Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.history.push("/tracker");
  };

  render() {
    return (
      <>
        <section className="habit">
          <div className="habit__return">
            <a className="habit__return-link" href="/">
              <img
                className="habit__return-image"
                src={returnButton}
                alt="Arrow icon that links user back to homepage"
              />
            </a>
            <h1 className="habit__title">Choose a Habit to focus on:</h1>
          </div>

          <div className="habit__content">
            <button className="habit__chosen habit__one" onClick={this.onClick}>
              Make my Bed
            </button>
            <button className="habit__chosen habit__two" onClick={this.onClick}>
              Sleep Intake
            </button>
            <button
              className="habit__chosen habit__three"
              onClick={this.onClick}
            >
              Limit Screen-Time
            </button>
            <button
              className="habit__chosen habit__four"
              onClick={this.onClick}
            >
              Alcohol Intake
            </button>
            <button
              className="habit__chosen habit__five"
              onClick={this.onClick}
            >
              Exercise
            </button>
            <button className="habit__chosen habit__six" onClick={this.onClick}>
              Read a Book
            </button>
            <button
              className="habit__chosen habit__seven"
              onClick={this.onClick}
            >
              Water Intake
            </button>
            <button
              className="habit__chosen habit__eight"
              onClick={this.onClick}
            >
              Free Time
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default HabitPage;
