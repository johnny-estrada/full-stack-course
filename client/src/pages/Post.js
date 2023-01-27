import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  const [postObject, setPostObject] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/posts/byId/${id}`).then((response) => {
    setPostObject(response.data);
  }).catch(e => {
    console.log(e)
  })
  }, [id])

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title">{postObject.title}</div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>

      <div className="rightSide">Comment Section</div>
    </div>
  ) 
}

export default Post;
