import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc, Timestamp, updateDoc } from 'firebase/firestore/lite';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIAR9XhVSM0r84qksckem1zviqKJnw8J8",
    authDomain: "onboard-153ee.firebaseapp.com",
    projectId: "onboard-153ee",
    storageBucket: "onboard-153ee.appspot.com",
    messagingSenderId: "799923062129",
    appId: "1:799923062129:web:631339f72dc1ee4e0e62d0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ResetPassword = () => {
    const [pass, setPass] = useState("");

    let key = window.location.href.split("/")[4];

    const changePassword = async () => {
        const docData = {
            password: pass,
            login: 1
        };
        // await setDoc(doc(db, "employee"), docData);
        const ref = doc(collection(db, "employees"), key);
        await updateDoc(ref, docData);

        window.location.href = "/skills/" + key;
    }

    return (
        <div className="app">
            <div className="reset-head">
                <h1>You have to change your password</h1>
            </div>
            <div className="pass-form">
                <input type="password" onChange={event => setPass(event.target.value)} />
                <button onClick={changePassword}>Reset</button>
            </div>
        </div>
    )
}

export default ResetPassword;