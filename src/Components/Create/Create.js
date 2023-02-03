import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import Context, { FirebaseContext } from '../../store/FirebaseContext';
import { AuthContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';
const Create = () => {
  const history=useHistory()

const {firebase}= useContext(FirebaseContext)
const {user} = useContext(AuthContext)
let [name,setName]=useState('')
let [category,setCategory]=useState('')
let [price,setPrice]=useState('')
let [image,setImg]=useState(null)
const date=new Date()
const fileSubmitHandler=()=>{
  firebase.storage().ref( `/image/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
      console.log(url)
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt:date.toDateString()
      })
      history.push('/')
    })
  })

}


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e)=>setName(e.target.value)}
              name="Name"
  
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
         
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number" id="fname"
             onChange={(e)=>setPrice(e.target.value)}
              name="Price" />
            <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):""}></img>
    
            <br />
            <input onChange={(e)=>{
              setImg(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={fileSubmitHandler} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
