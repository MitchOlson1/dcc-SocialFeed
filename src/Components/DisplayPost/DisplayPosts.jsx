
const DisplayPosts = (props) => {
    return (   
      <table>
        <thead>
          <tr>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
        {props.parentPosts.map((posts, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{posts.Posts}</td>
            </tr>
            );
        })}
        </tbody>
      </table> 
   
    );
} 


 
export default DisplayPosts;