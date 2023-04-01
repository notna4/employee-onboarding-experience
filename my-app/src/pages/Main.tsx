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
    apiKey: "AIzaSyBIAR9XhVSM0r84qksckem1zviqKJnw8J8",
    authDomain: "onboard-153ee.firebaseapp.com",
    projectId: "onboard-153ee",
    storageBucket: "onboard-153ee.appspot.com",
    messagingSenderId: "799923062129",
    appId: "1:799923062129:web:631339f72dc1ee4e0e62d0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const Main = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [type, setType] = useState("Manager");

    const checkType = () => {
        console.log(type);
        if (type === "New") {
            verifyNew();
        }
        else if (type === "Regular") {
            verifyReg();
        }
        else {
            verifyAdmin();
        }
    }

    const verifyAdmin = async () => {
        // console.log(user);
        // console.log(password);

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

    const verifyNew = async () => {
        const members = collection(db, 'employees');
        const membersSnap = await getDocs(members);
        const membersList = membersSnap.docs.map(doc => doc.data());
        // console.log(membersList[0].id);

        console.log(membersList);

        for (let i = 0; i < membersList.length; i++) {
            if (membersList[i].user === user && membersList[i].password === password) {
                // console.log("BRAVO");
                // console.log(membersList[i].key);
                navigate("/employee/" + membersList[i].key);
            }
            else {
                // console.log("nup");
            }
        }
    }

    const verifyReg = async () => {
        const members = collection(db, 'buddy');
        const membersSnap = await getDocs(members);
        const membersList = membersSnap.docs.map(doc => doc.data());
        // console.log(membersList[0].id);

        for (let i = 0; i < membersList.length; i++) {
            if (membersList[i].user === user && membersList[i].password === password) {
                // console.log("BRAVO");
                navigate("/buddy?" + membersList[i].key);
            }
            else {
                // console.log("nup");
            }
        }
    }


    return (
        <div className='app'>
            <div className='welcome-card'>
                Welcome to AccessBuddy
            </div>
            <div className='form-card'>
                <p>What employee are you?</p>
                <div className='radio-div-div'>
                    <input type="radio" name="type" id='man' value="Manager" onChange={event => setType(event.target.value)} defaultChecked /><label>Manager</label>
                    <input type="radio" name="type" value="New" onChange={event => setType(event.target.value)} /><label>New</label>
                    <input type="radio" name="type" value="Regular" onChange={event => setType(event.target.value)} /><label>Regular</label>
                </div>
                <div className='user-card'>
                    <input type="text" placeholder='User' onChange={event => setUser(event.target.value)} />
                    <input type="password" placeholder='Password' onChange={event => setPassword(event.target.value)} />
                    <button onClick={checkType}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Main;