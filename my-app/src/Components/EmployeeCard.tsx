import React from 'react';

type props = {
    info: string,
    position: string,
    email: string
}

const EmployeeCard = ({ info, position, email }: props) => {
    console.log(info);
    console.log(position);
    console.log(email);
    return (
        <div className='employee-card'>
            <h1>{info}</h1>
            <h1>{position}</h1>
            <h1>{email}</h1>
        </div>
    )
}

export default EmployeeCard;