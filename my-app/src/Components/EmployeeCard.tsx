import React from 'react';
import { useNavigate } from 'react-router-dom';

type props = {
    info: string,
    position: string,
    email: string,
    exp: number,
    id: string
}

const displayEmployee = (id: string) => {
    // console.log(id);
    const key = window.location.href.split("?")[1];
    window.location.href = "/view-employee/" + id + "/" + key;
}

const EmployeeCard = ({ info, position, email, exp, id }: props) => {
    const navigate = useNavigate();
    console.log(info);
    console.log(position);
    console.log(email);

    let profi = false;
    if (exp > 365) {
        profi = true;
    }
    else {
        profi = false;
    }

    const sign = "->";
    return (
        <div className='employee-card' style={profi ? { border: "2px solid gold" } : { border: "2px solid 3C3C3C" }} onClick={() => displayEmployee(id)}>
            <div className='employee-data'>
                {info}, {<i>{position}</i>}, {exp} days
            </div>
            <div className='asignee'>

            </div>
            <h1>{sign}</h1>
        </div>
    )
}

export default EmployeeCard;