import React, { useState, useEffect } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EmployeeCard from '../Components/EmployeeCard';
import EmployeeList from '../Components/EmployeeList';
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
let once = 0;
const Admin = () => {
    useEffect(() => {
        // Update the document title using the browser API
        if (once === 0) {
            once = 1;
        }
    });
    const navigate = useNavigate()
    const key = window.location.href.split("?")[1];

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

    const addEmployee = () => {
        navigate("/add?" + key);
    }

    const LogOut = () => {
        window.location.href = "/";
    }


    return (
        <div className='admin-page'>
            <div className='admin-main'>
                <div className='admin-head'>
                    <div className='admin-head-1'>
                        <h3>Hello, there</h3>
                        <div className='admin-head-2'>
                            <button onClick={addEmployee}>Add employee</button>
                            <button onClick={LogOut}>Log Out</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>All employees</h2>
                </div>
                <div className='admin-employees'>
                    <EmployeeList />
                </div>
            </div>
        </div >
    )
}

export default Admin;