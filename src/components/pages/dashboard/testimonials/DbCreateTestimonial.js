import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newTestimonial, clearErrors } from '../../../../actions/testimonialActions'
import { NEW_TESTIMONIAL_RESET } from '../../../../constants/testimonialConstants'

const DbCreateTestimonial = ({ history }) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    // const [images, setImages] = useState([]);

    const [imagesPreview, setImagesPreview] = useState([])
    const [imageList] = useState([]);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newTestimonial);
    const { user } = useSelector(state => state.auth)

    useEffect(() => {

      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (success) {
          history.push('/admin/testimonials');
          alert.success('Testimonial created successfully');
          dispatch({ type: NEW_TESTIMONIAL_RESET })
      }

  }, [dispatch, alert, error, success, history])

  const submitHandler = (e) => {
    e.preventDefault();

    const testimonial = {
        'name': name,
        'message': message,
        'images' : imageList,
    }

   dispatch(newTestimonial(testimonial))
}

const onChange = e => {

  const files = Array.from(e.target.files)

  setImagesPreview([]); 

  // let tempImageList = [];

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
      <MetaData title={'New Testimonial'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar testnomials newTestnomial />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1 className="newPtd">New Testimonial</h1>

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

                  {imagesPreview.map(img => (
                    <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                  ))}
                </div>

                <div className="db_btn__add">
                  <button 
                    className="btn add__prdt flex"
                    type="submit"
                    disabled={loading ? true : false}
                  >Create Testimonial</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbCreateTestimonial;
