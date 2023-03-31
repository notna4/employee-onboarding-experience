import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EmployeeCard from '../Components/EmployeeCard';
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

let employeesList: any[] = [];
const EmployeeList = () => {
    useEffect(() => {
        // Update the document title using the browser API
        if (once === 0) {
            setInterval(loadEmployees, 1000);
            once = 1;
        }
    });

    const [list, setList] = useState<any>([]);

    const loadEmployees = async () => {
        const members = collection(db, 'employees');
        const queryy = query(members, orderBy('dateExample', 'desc')); // replace 'name' with the name of the field you want to order by
        const membersSnap = await getDocs(queryy);
        const membersList = membersSnap.docs.map(doc => doc.data());
        // console.log(membersList);

        for (let i = 0; i < membersList.length; i++) {
            employeesList.push([membersList[i].info, membersList[i].position, membersList[i].email]);
            // return (
            //     <EmployeeCard info={membersList[i].info} date={membersList[i].date} position={membersList[i].position} email={membersList[i].email} />
            // )
        }
        setList(employeesList);
    }




    // loadEmployees();

    return (
        <div>
            <ul>
                {
                    list.map((item: any, i: any) => <li key={i}>
                        <EmployeeCard info={item[0]} position={item[1]} email={item[2]} />
                    </li>)
                }
            </ul>
        </div>
    )
}

export default EmployeeList;