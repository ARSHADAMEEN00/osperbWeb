import React, { Fragment, useState, useEffect } from 'react'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../../App.css';
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";


// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newBlog, clearErrors } from '../../../../actions/blogActions'
import { NEW_BLOG_RESET } from '../../../../constants/blogConstants'

const DbCreateBlog = ({ history }) => {

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setContent(currentContentAsHTML)
  }
  

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [content, setContent] = useState();
    const [isFeatured, setIsFeatured] = useState(false);
    
    const [imagesPreview, setImagesPreview] = useState([])
    const [imageList] = useState([]);

    const alert = useAlert();
    const dispatch = useDispatch();

    const {  error, success } = useSelector(state => state.newBlog);
    const { user } = useSelector(state => state.auth)

    useEffect(() => {

      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (success) {
          history.push('/admin/blogs');
          alert.success('Blog created successfully');
          dispatch({ type: NEW_BLOG_RESET })
      }


  }, [dispatch, alert, error, success, history])

  const submitHandler = (e) => {
    e.preventDefault();

    const blog = {
        'title': title,
        'subTitle': subTitle,
        'content': content,
        'images' : imageList,
        'isFeatured': isFeatured,
    }
   dispatch(newBlog(blog))
}


const onChange = e => {

    const files = Array.from(e.target.files)

    setImagesPreview([]); 

    files.forEach(file => {
        const reader = new FileReader();
        
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview(oldArray => [...oldArray, reader.result])

                // set images properties for each file
                imageList.push({
                    filename: file.name,
                    contentType: file.type,
                    imageBase64: reader.result.substr(reader.result.lastIndexOf(',')+1)
                })
            }
        }
        reader.readAsDataURL(file)
    })
}

  

  return (
    <Fragment>
      <MetaData title={'New Blog'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar blogs Old/>
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1 className="newblg">New Blog</h1>

            <form className="db_product_form" onSubmit={submitHandler}>
              <div className="db__new_prdt">
                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="name_field">Title</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>

                <div className="db__prdt_name_price">

                <div className="db__column">
                    <label htmlFor="name_field">Sub Title</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={subTitle}
                      onChange={(e) => setSubTitle(e.target.value)}
                    />
                </div>
                
                </div>
                <div className="db__column">
                  <label htmlFor="description_field">Content</label>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    value={content}
                  />
                </div>

                

                <div className="db__column">
                  <div className="input__radio_wrap db_rdio">
                    <label className="radio__cod">
                      <p>Featured Blog</p>
                      <input
                        type="checkbox"
                        id="checkbox_field1"
                        checked={isFeatured}
                        onChange={(e) => setIsFeatured(!isFeatured)}
                      />
                      <span className="checkmark" ></span>
                    </label>
                    
                  </div>
                </div>

                

                <div className="Seller_wrap">
                  <div className="db__column img">
                    <label htmlFor="">Images</label>
                    <label className="img__upload" htmlFor='customFile'>
                      Choose Images
                      <VscFileMedia className="media__icon" />
                    </label>
                    <input
                      type='file'
                      name='product_images'
                      className='custom-file-input'
                      id='customFile'
                      onChange={onChange}
                    />
                  </div>

                 
                  {imagesPreview.map(img => (
                    <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                  ))}

                </div>
                
                <div className="db_btn__add">
                  <button 
                    className="btn add__prdt flex"
                    type="submit"
                    // disabled={loading ? true : false}
                  >Create Blog</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbCreateBlog;

