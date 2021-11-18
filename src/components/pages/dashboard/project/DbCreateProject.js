import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProject, clearErrors, getProjects } from '../../../../actions/projectActions'
import { NEW_PROJECT_RESET } from '../../../../constants/projectConstants'

const DbCreateProject = ({ history }) => {

    const [title, setTitle] = useState('');
    const [videoId, setVideoId] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [isFeatured, setIsFeatured] = useState(false);
    
    // const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

    const [imageList] = useState([]);

    // image upload test
    // const [newImage, setNewImage] = useState();


    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newProject);
    const { user } = useSelector(state => state.auth)

    useEffect(() => {

      dispatch(getProjects());


      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (success) {
          history.push('/admin/projects');
          alert.success('Project created successfully');
          dispatch({ type: NEW_PROJECT_RESET })
      }


  }, [dispatch, alert, error, success, history])

  const submitHandler = (e) => {
    e.preventDefault();

    const project = {
        'title': title,
        'videoId': videoId,
        'description': description,
        'images' : imageList,
        'date' : date,
        'isFeatured': isFeatured,
    }


   dispatch(newProject(project))
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
      <MetaData title={'Create Project'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar projects />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Create Project</h1>

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
                    <label htmlFor="video_field">VideoId</label>
                    <input
                    type="text" 
                    className="form-control"
                    id="video_field" 
                    value={videoId} 
                    onChange={(e) => setVideoId(e.target.value)}
                    />
                </div>

                <div className="db__column ">
                    <label htmlFor="new_date">Date</label>
                    <input
                    type="date" 
                  
                    className="form-control"
                    id="new_date " 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="note_field">Description</label>
                    <textarea 
                    className="form-control"
                    id="note_field"
                    rows="4" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}>
                  </textarea>
                  </div>
                </div>

                <div className="db__column">
                  <div className="input__radio_wrap db_rdio">
                    <label className="radio__cod">
                      <p>Featured Project</p>
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
                    className="btn flex add__prdt"
                    type="submit"
                    disabled={loading ? true : false}
                  >Create Project</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
    )
}
export default DbCreateProject;