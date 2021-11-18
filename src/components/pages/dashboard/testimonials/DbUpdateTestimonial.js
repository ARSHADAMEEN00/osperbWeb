import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateTestimonial, getTestimonialDetails, clearErrors } from '../../../../actions/testimonialActions'
import { UPDATE_TESTIMONIAL_RESET } from '../../../../constants/testimonialConstants'

const DbUpdateTestimonial = ({ match, history }) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [images, setImages] = useState([]);

    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const [imageList] = useState([]);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, testimonial } = useSelector(state => state.testimonialDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.testimonial);

    const { user } = useSelector(state => state.auth)
    const testimonialId = match.params.id;

    useEffect(() => {

      if (testimonial && testimonial._id !== testimonialId) {
          dispatch(getTestimonialDetails(testimonialId));
      } else {
          setName(testimonial.name);
          setMessage(testimonial.message);
          setOldImages(testimonial.images);
          setImages(testimonial.images);
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
          history.push('/admin/testimonials');
          alert.success('Testimonial updated successfully');
          dispatch({ type: UPDATE_TESTIMONIAL_RESET })
          // to refresh after updation
          // window.location.reload();
      }

  }, [dispatch, alert, error, isUpdated, history, updateError, testimonial, testimonialId])

  const submitHandler = (e) => {
    e.preventDefault();

    const updatetestimonial = {
        'name': name,
        'message': message,
        'images': images,
    }

    dispatch(updateTestimonial(testimonial._id, updatetestimonial))

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
      <MetaData title={'Update Testimonials'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar testnomials />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Update Testimonial</h1>

            <form className="db_product_form" onSubmit={submitHandler}>
              <div className="db__new_prdt">
                <div className="db__prdt_name_price">
                  <div className="db__column">
                  <label htmlFor="name_field">Name</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                </div>
                

                <div className="db__column">
                  <label htmlFor="message_field">Message</label>
                  <textarea 
                    className="form-control"
                    id="message_field" 
                    rows="8" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}>
                  </textarea>
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

                  {oldImages && oldImages.slice(0,1).map(img => (
                    <img key={img} 
                    src={`${process.env.REACT_APP_BASE_URL}${img.url}`} 
                    alt={img.filename} className="mt-3 mr-2" width="55" height="52" />
                  ))}

                  {imagesPreview.slice(0,1).map(img => (
                    <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                  ))}

                </div>

                <div className="db_btn__add">
                  <button 
                    className="btn flex add__prdt"
                    type="submit"
                    disabled={loading ? true : false}
                  >Update Testimonial</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbUpdateTestimonial;