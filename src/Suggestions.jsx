import axios from 'axios';
import React, { useEffect, useState } from 'react'

 function Suggestions() {
  
  const[profile,setprofile] =useState(null);
  const [Suggestions, setSuggestions] =useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/profile')
    .then(data => data.json())
    .then(data => setprofile(data))
    .catch(err => console.log(err))

     fetch('http://localhost:3000/Suggestions')
    .then(data => data.json())
    .then(data => setSuggestions(data))
    .catch(err => console.log(err))
  },[]);

  const handleFollow = async (id, username) => {
    axios.post('http://localhost:3000/followers',{"id":id, "username": username})
    .then(alert('followed'))
    .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='Suggestions w-75 m-4 ' >
         {profile ? 
         <div className='d-flex'>
              <img className='db rounded-circle' src={profile.profile_Pic} alt="profile pic" />
              <h5>{profile.username}</h5>
              <p className='ms-auto text-primary'>Switch</p>
            </div>
            : <p>Loading</p>}  
            <div className='d-flex'>
              <p>Suggested for you</p>
              <b className='ms-auto'>See All</b>
            </div>
      {Suggestions.length > 0 ? (
        <div>
         {Suggestions.map((Suggestions)=>(
          <div className='' key={Suggestions.id}>
           <div className='d-flex'>
              <img className='db rounded-circle' src={Suggestions.profile_Pic} alt="profile pic" />
              <h5>{Suggestions.username}</h5>
              <a className='text-primary ms-auto' onClick={()=>handleFollow(Suggestions.id.username)}>Follow</a>
           </div>
        </div>
         ))}
        </div>
      ):(
        <div>
          Loading 
        </div>
      ) }

    </div>
    </div>
  )
}

export default Suggestions