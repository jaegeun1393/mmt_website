import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { blogDetail } from "./blog";


function Post() {
  const { id } = useParams();

  useEffect(() => {
    function callApi() {
      //Here you will call api through axios
      console.log(id);
    }

    callApi();
  }, []);

  return( 
  <div> 
    {id}
    <div
        className="article"
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: "100px",
        }}
      >
        <div className="title font-medium leading-tight text-5xl mt-0 mb-2 text-blue-800 text-center">
          This is the title
        </div>
        <hr className="mt-6" />
        <div class="article_info">
          <div className="date float-left mr-10">Date: 2020-03-04</div>
          <div className="Subject float-right">Author: Jaegeun Oh</div>
          <div className="Author">Subject: Main Blog</div>
        </div>
        <hr />
        <CKEditor
          disabled={true}
          editor={DecoupledEditor}
          data={blogDetail}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
  </div>);
}

export default Post;
