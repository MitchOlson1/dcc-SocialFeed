import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import React, { useState } from 'react';

const ShowPost = (props) => {
    
const [likeButton, setLikeButton] = useState(false);
const [dislikeButton, setDislikeButton] = useState(false);
const today = new Date();

function lButton(){
  if (likeButton){
    setLikeButton(false)
  } else{
    setLikeButton(true)
    if(dislikeButton){
      setDislikeButton(false)
    }
  }
}

function dButton(){
  if (dislikeButton){
    setDislikeButton(false)
  } else{
    setDislikeButton(true)
    if(likeButton){
      setLikeButton(false)
    }
  }
}
    
    
    return (  
    <tr>
        <td>
        <div>
            <h1 className="col">{props.post.name}</h1>
            <p className="col">{props.post.body}</p>
            <p><small>{today.toDateString()}</small></p>
            <div className='Toggles'>
            <button className={[lButton ? 'btn btn-outline-success btn-lg': 'btn btn-lg' ].join('')} onClick={lButton}>
            <FaThumbsUp />
            </button>
            <button className={[dButton ? 'btn btn-outline-danger btn-lg': 'btn btn-lg' ].join('')} onClick={dButton} >
            <FaThumbsDown />
            </button>
            </div>
          </div>
        </td>
      </tr>
    );
  };
    

 
export default ShowPost;