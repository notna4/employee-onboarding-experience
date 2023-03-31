import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc, Timestamp } from 'firebase/firestore/lite';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4hFoPFcGFtRh_4ASWgs1XTXvb5aA4wX4",
    authDomain: "onboarding-640be.firebaseapp.com",
    projectId: "onboarding-640be",
    storageBucket: "onboarding-640be.appspot.com",
    messagingSenderId: "581271955433",
    appId: "1:581271955433:web:8d788b4dc89ec9b9a28d78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AddEmployee = () => {
    const [info, setInfo] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [date, setDate] = useState("");
    const key = window.location.href.split("?")[1];
    console.log(key);

    const navigate = useNavigate();
    const verifyAdmin = async () => {

        const adminKey = window.location.href.split("?")[1];

        const members = collection(db, 'managers');
        const membersSnap = await getDocs(members);
        const membersList = membersSnap.docs.map(doc => doc.data());
        // console.log(membersList[0].key);

        if (membersList[0].key !== window.location.href.split("?")[1]) {
            navigate("/");
        }

    }

    verifyAdmin();

    const addTheEmployee = async () => {
        console.log(date);
        const docData = {
            info: info,
            email: email,
            dateExample: Timestamp.fromDate(new Date(date)),
            position: position
        };
        // await setDoc(doc(db, "employees", "da"), docData);
        // Add a new document with a generated id
        const ref = doc(collection(db, "employees"));

        // later...
        await setDoc(ref, docData);

        window.location.href = "/admin?" + key;

    }

    return (
        <div className='admin-page'>
            <div className='admin-main'>
                <div>
                    Add employee
                </div>
                <div className='forms'>
                    <input type="text" placeholder='Info' onChange={event => setInfo(event.target.value)} />
                    <input type="text" placeholder='Email' onChange={event => setEmail(event.target.value)} />
                    <input type="text" placeholder='Position' onChange={event => setPosition(event.target.value)} />
                    <input type="date" placeholder='Date' onChange={event => setDate(event.target.value)} />
                </div>
                <button onClick={addTheEmployee}>Add employee</button>
                <button onClick={() => window.location.href = "/admin?" + key}>Back</button>
            </div>
        </div>
    )
}

export default AddEmployee;