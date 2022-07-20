import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  useEffect(() => {
    function callApi() {
      //Here you will call api through axios
      console.log(id);
    }

    callApi();
  }, []);

  return <h1> {id}</h1>;
}

export default Post;
