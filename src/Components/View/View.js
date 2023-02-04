import React,{useEffect,useState,useContext, useId}from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import {PostContext} from '../../store/PostContext'
import './View.css';
function View() {
  const [userDetails,setUserDeatils]=useState()
  const {postDetails}=useContext(PostContext)
const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const {userId}=postDetails
  firebase.firestore().collection('users').where('id','==',useId).get().then((res)=>{
    res.forEach(doc=>{
      setUserDeatils(doc.data())
    })
  })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
