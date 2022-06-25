import React from "react";
import { Component } from "react";
import "../HabitPage/HabitPage.scss";

class HabitPage extends Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.history.push("/tracker");
  };

  render() {
    return (
      <>
        <section className="habit">
          <h1 className="habit__title">Choose one Habit to focus on:</h1>
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
