import React, { useState } from 'react';

const CreatePost = (props) => {
    const [Name, setName] = useState('');
    const [Post, setPost] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="" value={Name} onChange={(event) => setName(event.target.value)}/> 
            <label>Post</label>
            <input type="" value={Post} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'>Post</button>
        </form>
       
        
           
        
    );
}


export default CreatePost;