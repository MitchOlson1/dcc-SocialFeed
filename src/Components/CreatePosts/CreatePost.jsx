import React, { useState } from 'react';

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        let newEntry = {
            name:name,
            body:post
        }
        console.log(newEntry)
        props.addNewPost(newEntry)

    }
    
    
    return (
        // <form onSubmit={handleSubmit}>
        //     <label>Name</label>
        //     <input type="" value={Name} onChange={(event) => setName(event.target.value)}/> 
        //     <label>Post</label>
        //     <input type="" value={Post} onChange={(event) => setPost(event.target.value)}/>
        //     <button type='submit'>Post</button>
        // </form>
       
      
      <form onSubmit={handleSubmit}>
        <div class="row">    
          <div class="col-25">    
            <label for="Name">Name</label>    
          </div>    
          <div class="col-75">    
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name.."/>    
          </div>    
        </div>    
        <div class="row">    
          <div class="col-25">    
            <label for="post">Post</label>    
          </div>    
          <div class="col-75">    
            <input type="text" value={post} onChange={(event) => setPost(event.target.value)} name="subject" placeholder="Write something.." />    
          </div>    
        </div>    
        <div class="row">    
          <input type="submit" value="Submit"/>    
        </div>    
      </form>    
    );
}


export default CreatePost;