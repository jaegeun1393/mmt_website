import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { blogDetail } from "./blog";

class BlogArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: false,
      role: "",
    };
  }

  render() {
    return (
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
    );
  }
}

export default BlogArticle;
