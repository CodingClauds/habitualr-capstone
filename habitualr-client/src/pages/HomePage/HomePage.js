import React from "react";
import { Component } from "react";
import "../HomePage/HomePage.scss";

class HomePage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/habit");
  };

  render() {
    return (
      <>
        <div className="homepage">
          <form className="homepage__form" onSubmit={this.handleSubmit}>
            <button className="homepage__submit">Let's Get Started</button>
          </form>
        </div>
      </>
    );
  }
}

export default HomePage;
