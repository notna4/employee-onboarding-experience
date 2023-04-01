import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EmployeeCard from '../Components/EmployeeCard';
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

let once = 0;

let employeesList: any[] = [];
let employeesListBuddy: any[] = [];
const EmployeeList = () => {
    useEffect(() => {
        // Update the document title using the browser API
        if (once === 0) {
            setInterval(loadEmployees, 1000);
            setInterval(loadBuddies, 1100);
            once = 1;
        }
    });

    const [list, setList] = useState<any>([]);
    const [listBuddy, setListBuddy] = useState<any>([]);

    const loadEmployees = async () => {
        const members = collection(db, 'employees');
        const queryy = query(members, orderBy("experience", "asc")); // replace 'name' with the name of the field you want to order by
        const membersSnap = await getDocs(queryy);
        const membersList = membersSnap.docs.map(doc => doc.data());
        // console.log(membersList);

        // console.log(membersList[0].id);
        for (let i = 0; i < membersList.length; i++) {
            employeesList.push([membersList[i].user, membersList[i].position, membersList[i].email, membersList[i].experience, membersList[i].key]);
            // return (
            //     <EmployeeCard info={membersList[i].info} date={membersList[i].date} position={membersList[i].position} email={membersList[i].email} />
            // )
        }
        setList(employeesList);
    }

    const loadBuddies = async () => {
        const members = collection(db, 'buddy');
        const queryy = query(members, orderBy("experience", "asc")); // replace 'name' with the name of the field you want to order by
        const membersSnap = await getDocs(queryy);
        const membersList = membersSnap.docs.map(doc => doc.data());
        // console.log(membersList);

        // console.log(membersList[0].id);
        for (let i = 0; i < membersList.length; i++) {
            employeesList.push([membersList[i].user, membersList[i].position, membersList[i].email, membersList[i].experience, membersList[i].key]);
            // return (
            //     <EmployeeCard info={membersList[i].info} date={membersList[i].date} position={membersList[i].position} email={membersList[i].email} />
            // )
        }
        setListBuddy(employeesListBuddy);
    }




    // loadEmployees();

    return (
        <div>
            <ul>
                {
                    list.map((item: any, i: any) => <li key={i}>
                        <EmployeeCard info={item[0]} position={item[1]} email={item[2]} exp={item[3]} id={item[4]} />
                    </li>)
                }
            </ul>
            <ul>
                {
                    listBuddy.map((item: any, i: any) => <li key={i}>
                        <EmployeeCard info={item[0]} position={item[1]} email={item[2]} exp={item[3]} id={item[4]} />
                    </li>)
                }
            </ul>
        </div>
    )
}

export default EmployeeList;