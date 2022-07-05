import returnButton from "../../assets/images/back-60.png";
import infoIcon from "../../assets/images/info.svg";
import "./Motivation.scss";

import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

// class Motivation extends Component {

function Motivation(props) {
  const [habit, setHabit] = useState(null);

  useEffect(() => {
    const getHabit = async () => {
      const id = props.match.params.id;
      const docRef = doc(db, "habits", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log(data);
        setHabit(data);
      }
    };
    getHabit();
  }, []);

  // getDoc(docRef).then((doc) => {
  //   console.log(doc.data(), doc.id);
  // });

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
            <h1 className="description__habit-id">{habit?.habit}</h1>
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
            <p className="description__text">{habit?.description}</p>
            <p className="description__text">{habit?.commitment}</p>
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

export default Motivation;
