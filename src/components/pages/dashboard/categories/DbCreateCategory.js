import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newCategory, clearErrors } from '../../../../actions/categoryActions'
import { NEW_CATEGORY_RESET } from '../../../../constants/categoryConstants'
import { getProducts } from '../../../../actions/productActions'

const DbCreateCategory = ({ history }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [imagesPreview, setImagesPreview] = useState([])
    const [imageList] = useState([]);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newCategory);
    const { error:productError } = useSelector(state => state.products)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {

      dispatch(getProducts());

      if(productError){
        return alert.error(error)
      }

      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (success) {
          history.push('/admin/categories');
          alert.success('Category created successfully');
          dispatch({ type: NEW_CATEGORY_RESET })
      }

  }, [dispatch, alert, error, productError, success, history])

  const submitHandler = (e) => {
    e.preventDefault();

    const category = {
        'name': name,
        'description': description,
        'images' : imageList,
    }

   dispatch(newCategory(category))
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
      <MetaData title={'New Category'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar categories newCategory/>
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1 className="newPtd">New Category</h1>

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

                  {imagesPreview.map(img => (
                    <img src={`${process.env.REACT_APP_BASE_URL}${img}`} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                  ))}
                </div>
                
                <div className="db_btn__add">
                  <button 
                    className="btn flex add__prdt"
                    type="submit"
                    disabled={loading ? true : false}
                  >Create Category</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbCreateCategory;
