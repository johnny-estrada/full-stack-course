import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5001/posts/byId/${id}`).then((response) => {
    setPostObject(response.data);
  }).catch(e => {
    console.log(e)
  })
  })

  return (
    <div>{postObject.title}</div>
  ) 
}

export default Post;
