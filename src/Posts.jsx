import React, { useEffect, useState } from 'react'

 function Posts() {

    const [Posts, setPosts] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:3000/posts").
        then((data)=> data.json()).
        then((data=>setPosts(data))).
        catch((err => console.log(err)))

    },[]);

  return (
    <div className='d-flex justify-content-center'>
      {Posts.length > 0 ? (
        <div>
         {Posts.map((post)=>(
          <div className='my-3' key={post.id}>
           <div className='d-flex'>
              <img className='db rounded-circle' src={post.user.profile_Pic} alt="profile pic" />
              <h5>{post.user.username}</h5>
            </div>
            <img className='image'src={post.image} alt="post" />
            <div>
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
              </div>
                 <div>
                  <b>{post.likes} Likes</b>
              </div>
              <p>{post.caption}</p>
            </div>
         

         ))}
        </div>
      ):(
        <div>
          Loading Posts
        </div>
      ) }
    </div>
  )
}

export default Posts