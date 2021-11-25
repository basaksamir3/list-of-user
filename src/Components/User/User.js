import React from 'react';
import { useState } from 'react/cjs/react.development';
import'./User.css'

const User = (props) => {
    const {name,email,picture,phone} = props.user;
    const addUsers = props.addUsers;

     const[mobile,setMobile] = useState('');
     const showPhone = ()=>setMobile(phone);
     const hidePhone = ()=>setMobile('');

     const fullName = name.first + ' ' + name.last;
     
    return (
        <div className="user-style">
            <div className = "user-img">
                <img src={picture.large} alt="" />
            </div>
            <div className = "user-info">
            <h1>Name: {fullName}</h1>
            <p>Email: {email}</p>
            <p>Phone: {mobile}</p>
            <button onClick={showPhone} >Show Phone Number</button><br/>
            <button onClick={hidePhone} >Hide Phone Number</button><br/>
            <button onClick = {() => addUsers(fullName)} >Add Me</button>

        </div>
        </div>
        
    );
};

export default User;