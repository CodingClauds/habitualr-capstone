import React from "react";
import { Component } from "react";
import "../HabitPage/HabitPage.scss";
import returnButton from "../../assets/images/back-60.png";
import bookIcon from "../../assets/images/book-96.png";
import sleepIcon from "../../assets/images/sleep-100.png";
import screenIcon from "../../assets/images/screen-64.png";
import drinkIcon from "../../assets/images/glass-60.png";
import exerciseIcon from "../../assets/images/dumbbell-64.png";
import bedIcon from "../../assets/images/bed-96.png";
import waterIcon from "../../assets/images/water-bottle-58.png";
import freetimeIcon from "../../assets/images/leisure-64.png";
import sunIcon from "../../assets/images/sun-64.png";
import chatIcon from "../../assets/images/chat-100.png";

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
            <button
              className="habit__chosen habit__image--one"
              onClick={this.onClick}
            >
              <img className="habit__icon" src={bookIcon} alt="book icon" />
              <span className="habit__btn-text">Read a Book</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--two"
              onClick={this.onClick}
            >
              <img className="habit__icon" src={sleepIcon} alt="sleep icon" />
              <span className="habit__btn-text">Sleep</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--three"
              onClick={this.onClick}
            >
              <img className="habit__icon" src={screenIcon} alt="screen icon" />
              <span className="habit__btn-text">Screen-Time</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--four"
              onClick={this.onClick}
            >
              <img className="habit__icon" src={drinkIcon} alt="glass icon" />
              <span className="habit__btn-text">Alcohol Intake</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--eight"
              onClick={this.onClick}
            >
              <img className="habit__icon" src={sunIcon} alt="sun icon" />
              <span className="habit__btn-text">Get Outside!</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--five"
              onClick={this.onClick}
            >
              <img
                className="habit__icon"
                src={exerciseIcon}
                alt="dumbell icon"
              />
              <span className="habit__btn-text">Exercise</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--six"
              onClick={this.onClick}
            >
              <img className="habit__icon" src={bedIcon} alt="bed icon" />
              <span className="habit__btn-text">Make my Bed</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--seven"
              onClick={this.onClick}
            >
              <img
                className="habit__icon"
                src={waterIcon}
                alt="water bottle icon"
              />
              <span className="habit__btn-text">Water Intake</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--eight"
              onClick={this.onClick}
            >
              <img className="habit__icon" src={chatIcon} alt="chat icon" />
              <span className="habit__btn-text">Socialize</span>
              <div className="habit__btnbox"></div>
            </button>

            <button
              className="habit__chosen habit__image--eight"
              onClick={this.onClick}
            >
              <img
                className="habit__icon"
                src={freetimeIcon}
                alt="free time icon"
              />
              <span className="habit__btn-text">Free Time</span>
              <div className="habit__btnbox"></div>
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default HabitPage;
