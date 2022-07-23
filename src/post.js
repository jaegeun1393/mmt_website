import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { blogDetail } from "./blog";
import axios from "axios";
import { CLIENT_URL } from "./util";


function Post() {
  const [title, settitle] = useState('')
  const [titleimg, settitleimg] = useState('')
  const [date, setdate] = useState('')
  const [author, setauthor] = useState('')
  const [context, setcontext] = useState('')
  const [subject, setsubject] = useState('')
  const { id } = useParams();

  useEffect(() => {
    function callApi() {
      var data = {
        aid: id
      }
      axios.post("http://127.0.0.1:5000/blog/get/article", data)
      .then(function (response) {
        settitle(response.data.title);
        setdate(response.data.created_date);
        setsubject(response.data.subject);
        setauthor(response.data.author_id);
        setcontext(response.data.context);
      })
      .catch(function (error) {
        alert(error);
      });
    }

    callApi();
  }, []);

  return( 
  <div> 
    <div
        className="article"
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: "100px",
        }}
      >
        <div className="title font-medium leading-tight text-5xl mt-0 mb-2 text-blue-800 text-center">
          {title}
        </div>
        <hr className="mt-6" />
        <div class="article_info">
          <div className="date float-left mr-10">Date: {date}</div>
          <div className="Subject float-right">Author: {author}</div>
          <div className="Author">Subject: {subject}</div>
        </div>
        <hr />
        <CKEditor
          disabled={true}
          editor={DecoupledEditor}
          data={context}
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
