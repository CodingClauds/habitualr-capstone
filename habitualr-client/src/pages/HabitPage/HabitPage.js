import React from "react";
import returnButton from "../../assets/images/back-60.png";
import "../HabitPage/HabitPage.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

// class HabitPage extends Component {
//   onClick = (e) => {
//     e.preventDefault();
//     this.props.history.push("/motivation");
//   };

//   render() {
//     return (
//       <>
//       </>
//     );
//   }
// }

// onclick to specific habit with the habit title / habit descrpition and effort.
// LINK to page? or just make its own habit description page?

function HabitPage() {
  // onClick = (e) => {
  //   e.preventDefault();
  //   this.props.history.push("/motivation");
  // };

  const [habits, setHabits] = useState([]);
  const habitsCollection = collection(db, "habits");

  // Get all documents/habits in db.
  useEffect(() => {
    const getHabits = async () => {
      const data = await getDocs(habitsCollection);
      console.log(data);
      setHabits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getHabits();
  }, []);
  return (
    <>
      <section className="habit">
        <div className="habit__return">
          <Link to="/" className="habit__return-link">
            <img
              className="habit__return-image"
              src={returnButton}
              alt="Arrow icon that links user back to homepage"
            />
          </Link>

          <h1 className="habit__title">Choose a Habit to focus on:</h1>
        </div>

        <div className="habit__content">
          {habits.map((habit) => {
            return (
              <Link to={`/motivation/${habit.id}`} className="habit__chosen">
                <img
                  key={habit.id}
                  className="habit__icon"
                  src={habit.url}
                  alt="habit icon"
                />
                <span className="habit__btn-text">{habit.habit}</span>
                <div className="habit__btnbox"></div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default HabitPage;
