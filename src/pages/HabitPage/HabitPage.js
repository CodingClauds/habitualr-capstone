import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import returnButton from "../../assets/images/back-60.png";
import placeholderImage from "../../assets/images/upload-logo.png";
import "./HabitPage.scss";

import { db, storage } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";

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

  // useEffect(() => {
  //   const getHabits = async () => {
  //     const data = await getDocs(habitsCollection);
  //     setHabits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getHabits();
  // }, [habitsCollection]);

  const [newHabit, setNewHabit] = useState("");
  const [newCommitment, setNewCommitment] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Create Document
  const createNewHabit = async () => {
    await addDoc(habitsCollection, {
      habit: newHabit,
      commitment: newCommitment,
      description: newDescription,
    });
  };

  // Update Document
  const updateHabit = async (id, habit) => {
    const userDoc = doc(db, "habit", id);
    // Find out what you want to update, the name of the document. Look on firebase when you have access.
    const newFields = {};
    await updateDoc(userDoc, newFields);
  };

  // Delete Document
  const deleteHabit = async (id, habit) => {
    const userDoc = doc(db, "habit", id);
    await deleteDoc(userDoc);
  };

  // // Initializing variables for our new habit image we want to add to our habit card.
  // // Expect: We want to ADD/CREATE to our collection.

  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageList, setImageList] = useState([]);

  // const imageListRef = ref(storage, "images/");

  // // Upload Image function that will allow user to pick an image, and upload it to the database.
  // const uploadImage = () => {
  //   if (imageUpload == null) return;

  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageList((prev) => [...prev, url]);
  //     });
  //   });
  // };

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <>
      <section className="habit">
        <div className="habit__form">
          <div className="habit__imageContainer">
            <img
              className="habit__image"
              src={placeholderImage}
              alt="placeholder"
            />
          </div>

          <div className="habit__userForm">
            <div className="habit__userInput">
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
            </div>

            <div className="habit__userInput">
              <input
                className="habit__userCommitment"
                type="text"
                id=""
                placeholder="Duration"
                onChange={(event) => {
                  setNewCommitment(event.target.value);
                }}
              />
            </div>

            <textarea
              className="habit__userDescription"
              type="text"
              name=""
              id=""
              placeholder="Description"
              onChange={(event) => {
                setNewDescription(event.target.value);
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
        </div>

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

          <h1 className="habit__title">Choose a Habit to focus on</h1>
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
