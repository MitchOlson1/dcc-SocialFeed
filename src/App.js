import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPost/DisplayPosts';
import CreatePost from './Components/CreatePosts/CreatePost';



function App() {

  const [posts] = useState([{}])
  return (
    <div>
     <DisplayPosts parentPosts = {posts}/>
     <CreatePost />
    </div>
  );
}

export default App;
