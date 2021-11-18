import React, { Fragment, useState, useEffect } from 'react'
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML, convertFromHTML } from 'draft-convert';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../../App.css';
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, updateBlog, getAdminBlogDetails, clearErrors } from '../../../../actions/blogActions'
import { UPDATE_BLOG_RESET } from '../../../../constants/blogConstants'

import Loader from '../../../layout/Loader';

const DbUpdateBlog = ({ history, match }) => {

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
    

    const [title, setTitle] = useState();
    const [subTitle, setSubTitle] = useState();
    const [content, setContent] = useState();
    const [isFeatured, setIsFeatured] = useState(false);

    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const [imageList] = useState([]);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, blog } = useSelector(state => state.blogDetails)
    const {  error: updateError, isUpdated } = useSelector(state => state.blog);

    const { user } = useSelector(state => state.auth)
    const blogId = match.params.id;

    useEffect(() => {
      
        dispatch(getBlogs());
  
        if (blog && blog._id !== blogId) {
            dispatch(getAdminBlogDetails(blogId));
        } else {
            setTitle(blog?.title);
            setSubTitle(blog?.subTitle);
            setContent(blog?.content);
            setEditorState(() => EditorState.createWithContent(convertFromHTML(blog?.content)))
            setIsFeatured(blog?.isFeatured);
  
            setOldImages(blog?.images);
            setImages(blog?.images);
        }
  
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
  
        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }
  
        if (isUpdated) {
            dispatch(getAdminBlogDetails(blogId));
            history.push('/admin/blogs');
            alert.success('Blog updated successfully');
            dispatch({ type: UPDATE_BLOG_RESET })
            // to refresh after updation
        }
  
    }, [dispatch, alert, error, isUpdated, history, updateError,blog, blogId])
    
    const submitHandler = (e) => {
        e.preventDefault();
    
        const updateblog = {
          'title': title,
          'subTitle': subTitle,
          'content': content,
          'images' : images,
          'isFeatured': isFeatured
        }
    
        dispatch(updateBlog(blog._id, updateblog))
    
    }

    const onChange = e => {

        const files = Array.from(e.target.files)
    
        setImagesPreview([]);
        setOldImages([]);
    
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
        setImages(imageList);
    }

    return (
        
        <Fragment>
            <MetaData title={'Update Blog'} />
            <div className="db__home">
                <div className="db__sidebar_wrap">
                <DbSidebar blogs />
                </div>
                <div className="db__home_left">
                <DbHeader user={user} />
                {loading ? <Loader /> : (
                <div className="db__reviews db__orders">
                    <h1 className="newPtd">Update Blog</h1>

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
                        <div className="db__column">
                        <label htmlFor="description_field">Content</label>
                        <Editor
                            // defaultContentState={contentState}
                            // onContentStateChange={setContentState}
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

                            {oldImages && oldImages.map(img => (
                                <img key={img} 
                                // src={`${process.env.REACT_APP_BASE_URL}${img.url}`} 
                                src={`${process.env.REACT_APP_BASE_URL}${img.url}`} 
                                
                                alt={img.filename} className="mt-3 mr-2" width="55" height="52" />
                            ))}

                            {imagesPreview.map(img => (
                                <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                            ))}

                        </div>
                        
                        <div className="db_btn__add">
                        <button 
                            className="btn add__prdt flex"
                            type="submit"
                            disabled={loading ? true : false}
                        >Update Blog</button>
                        </div>
                    </div>
                    </form>

                    {/* <label htmlFor="">File upload image test:</label>
                        <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="imageData"
                        onChange={uploadImage}
                        // onChange={handlePhoto}
                    /> */}

                    {/* <button onClick={(e) => uploadImage(e)}>upload</button> */}

                    </div>
                    )}
                </div>
                
            </div>
        </Fragment>
    )
}

export default DbUpdateBlog
