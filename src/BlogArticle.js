import React, { Component } from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Context from '@ckeditor/ckeditor5-core/src/context';

import { Link } from "react-router-dom";
import axios from "axios";


class BlogArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formState: false,
      role:""
    };
  }

  render() {
  return (
  <div className="App">
      <CKEditorContext context={ Context }>
      <h2>Using the CKeditor 5 context feature in React</h2>
      <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Hello from the first editor working with the context!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor1 is ready to use!', editor );
                        } }
                    />
      </CKEditorContext>
  </div>
  );
  }
}

export default BlogArticle;
