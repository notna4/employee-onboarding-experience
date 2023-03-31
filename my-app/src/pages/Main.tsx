import React, { useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/style.css";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4hFoPFcGFtRh_4ASWgs1XTXvb5aA4wX4",
    authDomain: "onboarding-640be.firebaseapp.com",
    projectId: "onboarding-640be",
    storageBucket: "onboarding-640be.appspot.com",
    messagingSenderId: "581271955433",
    appId: "1:581271955433:web:8d788b4dc89ec9b9a28d78"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const Main = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const verifyAdmin = async () => {
        console.log(user);
        console.log(password);

        const members = collection(db, 'managers');
        const membersSnap = await getDocs(members);
        const membersList = membersSnap.docs.map(doc => doc.data());
        // console.log(membersList[0].id);

        for (let i = 0; i < membersList.length; i++) {
            if (membersList[i].user === user && membersList[i].password === password) {
                // console.log("BRAVO");
                navigate("/admin?" + membersList[i].key);
            }
            else {
                // console.log("nup");
            }
        }
    }


    return (
        <div className='app'>
            <div className='welcome-card'>
                Welcome
            </div>
            <div className='form-card'>
                <div className='user-card'>
                    <input type="text" placeholder='User' onChange={event => setUser(event.target.value)} />
                    <input type="text" placeholder='Password' onChange={event => setPassword(event.target.value)} />
                    <button onClick={verifyAdmin}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Main;