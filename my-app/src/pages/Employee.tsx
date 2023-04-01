import React, { useState } from "react";
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

const LogOut = () => {
    window.location.href = "/";
}



const Employee = () => {
    const navigate = useNavigate();
    let key = window.location.href.split("/")[4];

    const [name, setName] = useState("");

    const Edit = () => {
        window.location.href = "/view-employee/" + key;
    }

    const checkFirstTimeLogin = async () => {
        const members = collection(db, 'employees');
        const membersSnap = await getDocs(members);
        const membersList = membersSnap.docs.map(doc => doc.data());
        for (let i = 0; i < membersList.length; i++) {
            if (membersList[i].key === key) {
                setName(membersList[i].user);
                if (membersList[i].login === 0) {
                    navigate('/reset/' + membersList[i].key);
                }
            }
        }
    }
    checkFirstTimeLogin();

    const checkFirstTimeLogin2 = async () => {
        console.log("budddddy");
        const members = collection(db, 'buddy');
        const membersSnap = await getDocs(members);
        const membersList = membersSnap.docs.map(doc => doc.data());
        for (let i = 0; i < membersList.length; i++) {
            if (membersList[i].key === key) {
                setName(membersList[i].user);
                if (membersList[i].login === 0) {
                    navigate('/reset/' + membersList[i].key);
                }
            }
        }
    }
    checkFirstTimeLogin2();

    return (
        <div className='admin-page'>
            <div className='admin-main'>
                <div className='admin-head'>
                    <div className='admin-head-1'>
                        <h3>Hello, {name}!</h3>
                        <div className="admin-head-2">
                            <button className='add' onClick={Edit}>Edit</button>
                            <button className='logout' onClick={LogOut}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Employee;