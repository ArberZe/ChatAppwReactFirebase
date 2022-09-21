import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }

  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>ChatApp</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Emri' />
          <input type='email' placeholder='E-mail' />
          <input type='password' placeholder='Password' />
          <input type='file' style={{ display: "none" }} id="registerPhoto" />
          <label htmlFor="registerPhoto">
            <i className="fa-regular fa-image fa-lg"></i>
            <span>Shto Foto</span>
          </label>
          <button type="submit">Regjistrohu</button>
          {loading && "Duke u ngarkuar... Ju lutem prisni"}
          {err && <span>Something went wrong</span>}
        </form>
        <p><Link to="/login">Kyqu këtu</Link></p>
      </div>
    </div>
  )
}
