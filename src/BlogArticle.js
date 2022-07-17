import React, { Component } from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

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
      

  </div>
  );
  }
}

export default BlogArticle;
