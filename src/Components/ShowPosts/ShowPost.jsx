const ShowPost = (props) => {
    return (  
    <tr>
        <td>
        <div>
          <h1 className="col">{props.post.name}</h1>
          <p className="col">{props.post.body}</p>
          </div>
        </td>
      </tr>
    );
  };
    

 
export default ShowPost;