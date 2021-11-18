import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory, getCategoryDetails, clearErrors } from '../../../../actions/categoryActions'
import { UPDATE_CATEGORY_RESET } from '../../../../constants/categoryConstants'

const DbUpdateCategory = ({ match, history }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const [imageList] = useState([]);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, category } = useSelector(state => state.categoryDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.category);

    const { user } = useSelector(state => state.auth)
    const categoryId = match.params.id;

    useEffect(() => {

      if (category && category._id !== categoryId) {
          dispatch(getCategoryDetails(categoryId));
      } else {
          setName(category.name);
          setDescription(category.description);
          setOldImages(category.images);
          setImages(category.images);
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
          history.push('/admin/categories');
          alert.success('Category updated successfully');
          dispatch({ type: UPDATE_CATEGORY_RESET })
          // to refresh after updation
          // window.location.reload();
      }

  }, [dispatch, alert, error, isUpdated, history, updateError, category, categoryId])

  const submitHandler = (e) => {
    e.preventDefault();

    const updatecategory = {
        'name': name,
        'description': description,
        'images': images,
    }

    dispatch(updateCategory(category._id, updatecategory))

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
      <MetaData title={'Update Category'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar categories />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Update Category</h1>

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
                  <label htmlFor="description_field">Description</label>
                  <textarea 
                    className="form-control"
                    id="description_field" 
                    rows="4" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}>
                  </textarea>
                </div>
                
                <div className="Seller_wrap">
                  <div className="db__column img">
                    <label htmlFor="">Image</label>
                    <label className="img__upload" htmlFor='customFile'>
                      Choose Image
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
                    className="btn add__prdt flex"
                    type="submit"
                    disabled={loading ? true : false}
                  >Update Category</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbUpdateCategory;