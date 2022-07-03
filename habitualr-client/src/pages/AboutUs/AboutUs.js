import React from "react";
import "../AboutUs/AboutUs.scss";

function AboutUs() {
  return (
    <>
      <section className="aboutus__body">
        <h1 className="aboutus__title">Our Mission Statement</h1>

        <div className="aboutus__container">
          <div className="aboutus__definition">
            <h2 className="aboutus__define-title">hab·it</h2>
            <span className="aboutus__noun">noun</span>
            <p className="aboutus__define-text">
              1. A habit is a routine of behavior that is repeated regularly and
              tends to occur subconsciously. The American Journal of Psychology
              defined a "habit, from the standpoint of psychology, [as] a more
              or less fixed way of thinking, willing, or feeling acquired
              through previous repetition of a mental experience."
            </p>
          </div>

          <div className="aboutus__card">
            <p className="aboutus__para-one">
              Our Goal at <span className="italic">Sproutr</span> is to create
              habits that matter most to people and be able to track them. We
              want to show how these habits can really impact our lives and make
              us more engaged in our day to day.
            </p>
            <p className="aboutus__para-two">
              Our mission is to empower every person and every organization to
              achieve more. It is no different than planting a seed and tending
              to it, habits need to be monitored. You will see the progress made
              and appreciate watching the habits you set in place grow and
              become natural over time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
