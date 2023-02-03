import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';
import { useHistory } from 'react-router-dom';



export default function Signup() {
const [username,setUsernaem]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
const [password,setPasssword]=useState('')
const history=useHistory()

const {firebase}= useContext(FirebaseContext)

const submitHandler=(e)=>{
  e.preventDefault()
firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
  result.user.updateProfile({displayName:username}).then(()=>{
    firebase.firestore().collection('user').add({
      idL:result.user.uid,
      username:username,
      phone:phone
    }).then(()=>{
      history.push('/login')

    })
  })
})

  }
  
  return (
    <div >
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitHandler}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
             onChange={(e)=>setUsernaem(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>setEmail(e.target.value)}
            
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e)=>setPhone(e.target.value)}
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>setPasssword(e.target.value)}
            

          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}