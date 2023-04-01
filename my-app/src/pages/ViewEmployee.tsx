import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
//Use one which works fine for you 

import * as firebase from "firebase/app";
import 'firebase/firestore';

//Now import this 
import 'firebase/firestore';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore/lite';
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
let employeesList: any[] = [];
let once = 0;
let buddy = 0;

const ViewEmployee = () => {

    const [info, setInfo] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");


    useEffect(() => {
        // Update the document title using the browser API
        if (once === 0) {
            setInterval(viewEmployee, 1000);
            setInterval(viewEmployeeBuddy, 1000);
            once = 1;
        }
    });

    const [list, setList] = useState<any>([]);
    const key = window.location.href.split("/")[4];
    // console.log(key);

    const viewEmployee = async () => {
        const members = collection(db, 'employees');
        const membersSnap = await getDocs(members);
        const membersList = membersSnap.docs.map(doc => doc.data());
        let find = 0;
        for (let i = 0; i < membersList.length; i++) {
            if (membersList[i].key === key) {
                find = 1;
                employeesList.push(membersList[i].info, membersList[i].experience, membersList[i].position, membersList[i].email);
                // setInfo(membersList[i].info);
                // setDate(membersList[i].experience);
                // setPosition(membersList[i].position);
                // setEmail(membersList[i].email);
            }
        }

        if (find === 1) {
            setList(employeesList);
        }

    }

    const viewEmployeeBuddy = async () => {
        const members = collection(db, 'buddy');
        const membersSnap = await getDocs(members);
        const membersList = membersSnap.docs.map(doc => doc.data());

        for (let i = 0; i < membersList.length; i++) {
            if (membersList[i].key === key) {
                buddy = 1;
                employeesList.push(membersList[i].info, membersList[i].experience, membersList[i].position, membersList[i].email);
            }
        }

        setList(employeesList);

    }

    const updateEmployee = async () => {

        if (buddy) {
            if (info) {
                const docData = {
                    info: info,
                };
                // await setDoc(doc(db, "employee"), docData);
                const ref = doc(collection(db, "buddy"), key);
                await updateDoc(ref, docData);
            }

            if (position) {
                const docData = {
                    position: position,
                };
                // await setDoc(doc(db, "employee"), docData);
                const ref = doc(collection(db, "buddy"), key);
                await updateDoc(ref, docData);
            }

            if (email) {
                const docData = {
                    email: email,
                };
                // await setDoc(doc(db, "employee"), docData);
                const ref = doc(collection(db, "buddy"), key);
                await updateDoc(ref, docData);
            }
        }
        else {
            if (info) {
                const docData = {
                    info: info,
                };
                // await setDoc(doc(db, "employee"), docData);
                const ref = doc(collection(db, "employees"), key);
                await updateDoc(ref, docData);
            }

            if (position) {
                const docData = {
                    position: position,
                };
                // await setDoc(doc(db, "employee"), docData);
                const ref = doc(collection(db, "employees"), key);
                await updateDoc(ref, docData);
            }

            if (email) {
                const docData = {
                    email: email,
                };
                // await setDoc(doc(db, "employee"), docData);
                const ref = doc(collection(db, "employees"), key);
                await updateDoc(ref, docData);
            }
        }

        const keyM = window.location.href.split("/")[5];
        window.location.href = "/view-employee/" + key + "/" + keyM;
    }

    const backToAdmin = () => {
        const key = window.location.href.split("/")[5];
        console.log(key);
        if (key !== undefined) {
            // window.location.href = "/admin?" + key;
            console.log("e u")
        }
        else {
            const keyy = window.location.href.split("/")[4];
            console.log(keyy);
            // window.location.href = "/employee?" + keyy;
        }
    }

    const sign = "<-";

    return (
        <div className='admin-page'>
            <div className='view-main'>
                <div className='view-head'>
                    <button className='back' onClick={backToAdmin}>{sign} Back</button>
                    <div className='view-form'>
                        <button className='update' onClick={updateEmployee}>Update</button>
                        <div className='user-card'>
                            <input type="text" placeholder={list[0]} onChange={event => setInfo(event.target.value)} />
                            <input type="text" placeholder={list[2]} onChange={event => setPosition(event.target.value)} />
                            <input type="text" placeholder={list[3]} onChange={event => setEmail(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='mid'>
                    <div className='buddy'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee;