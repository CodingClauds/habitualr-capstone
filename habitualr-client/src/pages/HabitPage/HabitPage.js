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
//         <section className="habit">
//           <div className="habit__return">
//             <Link to="/" className="habit__return-link">
//               <img
//                 className="habit__return-image"
//                 src={returnButton}
//                 alt="Arrow icon that links user back to homepage"
//               />
//             </Link>

//             <h1 className="habit__title">Choose a Habit to focus on:</h1>
//           </div>

//           <div className="habit__content">
//             <button
//               className="habit__chosen habit__image--one"
//               onClick={this.onClick}
//             >
//               <img className="habit__icon" src={bookIcon} alt="book icon" />
//               <span className="habit__btn-text">Read a Book</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--two"
//               onClick={this.onClick}
//             >
//               <img className="habit__icon" src={sleepIcon} alt="sleep icon" />
//               <span className="habit__btn-text">Sleep</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--three"
//               onClick={this.onClick}
//             >
//               <img className="habit__icon" src={screenIcon} alt="screen icon" />
//               <span className="habit__btn-text">Screen-Time</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--four"
//               onClick={this.onClick}
//             >
//               <img className="habit__icon" src={drinkIcon} alt="glass icon" />
//               <span className="habit__btn-text">Alcohol Intake</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--eight"
//               onClick={this.onClick}
//             >
//               <img className="habit__icon" src={sunIcon} alt="sun icon" />
//               <span className="habit__btn-text">Get Outside!</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--five"
//               onClick={this.onClick}
//             >
//               <img
//                 className="habit__icon"
//                 src={exerciseIcon}
//                 alt="dumbell icon"
//               />
//               <span className="habit__btn-text">Exercise</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--six"
//               onClick={this.onClick}
//             >
//               <img className="habit__icon" src={bedIcon} alt="bed icon" />
//               <span className="habit__btn-text">Make my Bed</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--seven"
//               onClick={this.onClick}
//             >
//               <img
//                 className="habit__icon"
//                 src={waterIcon}
//                 alt="water bottle icon"
//               />
//               <span className="habit__btn-text">Water Intake</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--eight"
//               onClick={this.onClick}
//             >
//               <img className="habit__icon" src={chatIcon} alt="chat icon" />
//               <span className="habit__btn-text">Socialize</span>
//               <div className="habit__btnbox"></div>
//             </button>

//             <button
//               className="habit__chosen habit__image--eight"
//               onClick={this.onClick}
//             >
//               <img
//                 className="habit__icon"
//                 src={freetimeIcon}
//                 alt="free time icon"
//               />
//               <span className="habit__btn-text">Free Time</span>
//               <div className="habit__btnbox"></div>
//             </button>
//           </div>
//         </section>
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
          {habits.map((user) => {
            return (
              <button
                className="habit__chosen"
                // onClick={this.onClick}
              >
                <img
                  key={user.id}
                  className="habit__icon"
                  src={user.url}
                  alt="habit icon"
                />
                <span className="habit__btn-text">{user.habit}</span>
                <div className="habit__btnbox"></div>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default HabitPage;
