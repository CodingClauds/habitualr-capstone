import React from "react";
import returnButton from "../../assets/images/back-60.png";
import "./HabitPage.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function HabitPage() {
  const [habits, setHabits] = useState([]);
  const habitsCollection = collection(db, "habits");

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
