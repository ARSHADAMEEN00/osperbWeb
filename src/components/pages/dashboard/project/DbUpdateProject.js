import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProject, getProjectDetails, clearErrors } from '../../../../actions/projectActions'
import { UPDATE_PROJECT_RESET } from '../../../../constants/projectConstants'

//inport moment for date
import moment from 'moment'

const DbUpdateComplaint = ({ match, history }) => {

    const [title, setTitle] = useState("");
    const [videoId, setVideoId] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [isFeatured, setIsFeatured] = useState('');

    // const [images, setImages] = useState([]);
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const [imageList] = useState([]);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, project } = useSelector(state => state.projectDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.project);
    const { user } = useSelector(state => state.auth)

    const projectId = match.params.id;

    

    useEffect(() => {


      if (project && project._id !== projectId) {
          dispatch(getProjectDetails(projectId));
      } else {
        setTitle(project.title);
        setVideoId(project.videoId);
        setDate(project.date);
        setDescription(project.description);
        setIsFeatured(project.isFeatured);

        setOldImages(project.images);
        setImages(project.images);
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
          alert.success('Project updated successfully');
          history.push('/admin/projects');
          dispatch({ type: UPDATE_PROJECT_RESET })
          // to refresh after updation
          // window.location.reload();
      }

  }, [dispatch, alert, error, isUpdated, history, updateError, project, projectId])

  const submitHandler = (e) => {
    e.preventDefault();

    const updateproject = {
        'title': title,
        'videoId': videoId,
        'date': moment(date).utc().format(),
        'images' : images,
        'description': description,
        'isFeatured': isFeatured, 
    }

    dispatch(updateProject(project._id, updateproject))

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
      <MetaData title={'Update Project'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar projects />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Update Project</h1>

            <form className="db_product_form" onSubmit={submitHandler}>
              <div className="db__new_prdt">
                  <div className="db__column">
                    <label htmlFor="name_field">title</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
              
                
                
                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="name_field">VideoID</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={videoId}
                      onChange={(e) => setVideoId(e.target.value)}
                    />
                  </div>
                  <div className="freeSpace new"></div>
                  <div className="db__column">
                    <label htmlFor="name_field">date</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={moment(date).utc().format()}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="db__column">
                    <label htmlFor="name_field">Description</label>
                    <textarea 
                    className="form-control"
                    id="note_field"
                    rows="4" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}>
                  </textarea>
                </div>
                
                <div className="db__column">
                    <label htmlFor="name_field">Featured</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.value)}
                    />
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
                  >Update Project</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbUpdateComplaint;