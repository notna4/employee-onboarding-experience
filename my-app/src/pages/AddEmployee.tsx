import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc, Timestamp } from 'firebase/firestore/lite';
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

const AddEmployee = () => {
    const [info, setInfo] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [date, setDate] = useState("");
    const key = window.location.href.split("?")[1];
    // console.log(key);

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
        let yearE: any = date.split('-')[0];
        let monthE: any = date.split('-')[1];
        let dayE: any = date.split('-')[1];

        let today = new Date();
        let dd: any = String(today.getDate()).padStart(2, '0');
        let mm: any = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let diffYear = yyyy - yearE;
        // console.log(diffYear);

        let diffDay = dd - dayE;
        // console.log(diffDay);

        let diffMonth = mm - monthE;
        // console.log(diffMonth);

        let exp = diffYear * 365 + diffMonth * 31 + diffDay;

        if (diffYear >= 1) {
            const docData = {
                user: info,
                password: "test",
                mentorPentru: [],
                email: email,
                date: Timestamp.fromDate(new Date(date)),
                position: position,
                experience: exp,
                login: 0
            };
            // await setDoc(doc(db, "buddy"), docData);
            const ref = doc(collection(db, "buddy"));
            await setDoc(ref, docData);
        }
        else {
            const docData = {
                user: info,
                password: "test",
                mentor: "",
                email: email,
                date: Timestamp.fromDate(new Date(date)),
                position: position,
                experience: exp,
                login: 0
            };
            // await setDoc(doc(db, "employee"), docData);
            const ref = doc(collection(db, "employees"));
            await setDoc(ref, docData);
        }

        window.location.href = "/admin?" + key;

    }

    return (
        <div className='admin-page'>
            <div className='view-main'>
                <button className='back' onClick={() => window.location.href = "/admin?" + key}>Back</button>
                <h1>
                    Add employee
                </h1>
                <div className='add-forms'>
                    <input type="text" placeholder='Info' onChange={event => setInfo(event.target.value)} />
                    <input type="text" placeholder='Email' onChange={event => setEmail(event.target.value)} />
                    <input type="text" placeholder='Position' onChange={event => setPosition(event.target.value)} />
                    <input type="date" placeholder='Date' onChange={event => setDate(event.target.value)} />
                </div>
                <div className='add-div'>
                    <button className='add' onClick={addTheEmployee}>Add employee</button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;