import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPost/DisplayPosts';
import CreatePost from './Components/CreatePosts/CreatePost';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [posts,setPosts] = useState([{
    name: "Mitch Olson", body:"Hi",
  }])

  function addNewPost(post){
    let newPost = [...posts, post];

    setPosts(newPost);
  }
  return (
    <div>
      <NavBar/>
      <CreatePost addNewPost={addNewPost} />
      <DisplayPosts parentPosts = {posts}/>
     
    </div>
  );
}

export default App;
