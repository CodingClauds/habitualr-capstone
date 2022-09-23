import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import returnButton from "../../assets/images/back-60.png";
import "./HabitPage.scss";

import { db, storage } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

// import Swal from "sweetalert2";
// const Swal = require("sweetalert2");

function HabitPage() {
  // Implement this successful upload modal once the upload section is complete.

  // Swal.fire({
  //   position: "center",
  //   icon: "success",
  //   title: "Your Habit has been Uploaded!",
  //   showConfirmButton: false,
  //   timer: 5000,
  // });

  const [habits, setHabits] = useState([]);
  const habitsCollection = collection(db, "habits");

  const [newHabit, setNewHabit] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCommitment, setNewCommitment] = useState("");

  const createNewHabit = async () => {
    await addDoc(habitsCollection, {
      habit: newHabit,
      description: newDescription,
      commitment: newCommitment,
    });
  };

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  useEffect(() => {
    const getHabits = async () => {
      const data = await getDocs(habitsCollection);
      setHabits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getHabits();
  }, []);

  return (
    <>
      <section className="habit">
        {/* The Upload will need 4 parameters, the user chosen habit, commitment, image. The last one is a Universally unique identifier UUID */}

        {/* Write a Habit and Durartion ARE WORKING. WRITES DATA TO FIREBASE! */}
        <div className="habit__form">
          <input
            className="habit__userHabit"
            type="text"
            name=""
            id=""
            placeholder="Write a Habit"
            onChange={(event) => {
              setNewHabit(event.target.value);
            }}
          />

          <input
            className="habit__userCommitment"
            type="text"
            name=""
            id=""
            placeholder="Duration"
            onChange={(event) => {
              setNewCommitment(event.target.value);
            }}
          />
          <div className="habit__btn-container">
            <button
              typeof="submit"
              className="habit__btn-upload"
              onClick={createNewHabit}
            >
              Upload
            </button>
          </div>
        </div>
        {/* <textarea
            className="habit__userDescription"
            // resize: vertical;
            type="text"
            name=""
            id=""
            placeholder="Description"
            onChange={(event) => {
              setNewDescription(event.target.value);
            }}
          /> */}

        {/* <input
          className="habit__imageUpload"
          type="file"
          name=""
          id=""
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button className="habit__btn-upload" onClick={uploadImage}>
          Upload Image
        </button> */}

        {/* {imageList.map((url) => {
            return <img src={url} />;
          })} */}

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
              <Link
                key={habit.id}
                to={`/motivation/${habit.id}`}
                className="habit__chosen"
              >
                <img className="habit__icon" src={habit.url} alt="icon" />
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
