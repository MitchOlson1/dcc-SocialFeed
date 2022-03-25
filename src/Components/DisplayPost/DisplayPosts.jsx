import React, { useState } from 'react';
import ShowPost from '../ShowPosts/ShowPost';

const DisplayPosts = (props) => {
    return (   
      <table>
        <thead>
          <tr>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
        {props.parentPosts.map((post, index) => {
          return (
          <ShowPost post={post} />
            );
        })}
        </tbody>
      </table> 
   
    );
} 

// post component
 
export default DisplayPosts;