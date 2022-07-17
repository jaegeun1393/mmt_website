import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import { Link } from "react-router-dom";
import axios from "axios";

class BlogWriting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      title_img: "",
      context: "",
      subject: ""
    };
    this.uploadAdapter = this.uploadAdapter.bind(this)
  }

  uploadAdapter(loader) {
    const data = new FormData();
    data.append("imgurl", loader.file);

    console.log("== ", data);
        axios.post('http://127.0.0.1:5000/uploadblogimage', data)
        .then(function(response){
          return response
        })
        .catch(function(error){
          alert(error);
        });
  }

  render() {
  return (
  <div>

  <div className="grid grid-cols-2 divide-x divide-none">

  <div className="relative rounded-lg border border-dashed border-gray-500 relative m-8" style={{width: "300px"}}>
    <input type="file" multiple className="cursor-pointer relative block opacity-0 p-20 z-20" />
    <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
        <h4>
            Drop files anywhere to upload
            <br/>or
        </h4>
        <p className="">Select Files</p>
    </div>
  </div>

  <div className='border-t mt-12'>
    <div>
      <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Title</label>
      <input type="search" className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" 
        placeholder="Title..." required />
    </div>

    <div>
      <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a subject</label>
        <select id="countries" className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300">
        <option defaultValue>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        </select>
    </div>
</div>

</div>

<CKEditor
  editor={ ClassicEditor }
  data="<p>Hello from CKEditor 5!</p>"
  onReady={ editor => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return this.uploadAdapter(loader);
    };
    console.log( 'Editor is ready to use!', editor );
  } }

  onChange={ ( event, editor ) => {
    const data = editor.getData();
    console.log( { event, editor, data } );
  } }
                    
  onBlur={ ( event, editor ) => {
    console.log( 'Blur.', editor );
  } }
                    
  onFocus={ ( event, editor ) => {
    console.log( 'Focus.', editor );
  } }
/>

<button className="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max">
  Post</button>

    </div>
  );
  }
}

export default BlogWriting;
