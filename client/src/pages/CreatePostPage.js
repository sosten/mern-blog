import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/create.css';

const CreatePostPage = () => {
  return (
    <div className='create_form_container'>
      <div className="create_form_header">
        <h1>Create New Post</h1>
      </div>
      <form>
        <input type="title" placeholder='Title' />
        <input type="summary" placeholder='Summary' />
        <input type="file" />
        <ReactQuill />
        <input type="button" value="Create Post" />
      </form>
    </div>
  )
}

export default CreatePostPage
