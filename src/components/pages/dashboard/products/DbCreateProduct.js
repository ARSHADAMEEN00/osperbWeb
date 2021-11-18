import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";
import { VscFileMedia } from "react-icons/vsc";
import { BiPlusCircle } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../../../actions/productActions'
import { getCategories } from '../../../../actions/categoryActions'
import { NEW_PRODUCT_RESET } from '../../../../constants/productConstants'


const DbCreateProduct = ({ history }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState();
    const [stock, setStock] = useState('100');
    const [isFeatured, setIsFeatured] = useState(false);
    const [isSuggested, setIsSuggested] = useState(false);
    const [isPopular, setIsPopular] = useState(false);
    const [customID, setCustomID] = useState('');

    // const [priceTypes, setPriceTypes] = useState([{unitPrice: '0'}])
    const [specs, setSpecs] = useState([])
    
    const [imagesPreview, setImagesPreview] = useState([])

    const [imageList] = useState([]);


    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newProduct);
    const { error:productError } = useSelector(state => state.products)
    const {error:categoryError, categories } = useSelector(state => state.categories)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {

      // dispatch(getProducts());
      dispatch(getCategories());

      if(productError){
          return alert.error(productError)
      }

      if(categoryError){
        return alert.error(categoryError)
      }

      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (success) {
          history.push('/admin/products');
          alert.success('Product created successfully');
          dispatch({ type: NEW_PRODUCT_RESET })
      }


  }, [dispatch, alert, error, productError, success, history,categoryError])

  const submitHandler = (e) => {
    e.preventDefault();

    const product = {
        'name': name,
        'description': description,
        'category': category,
        'stock': stock,
        'images' : imageList,
        'isFeatured': isFeatured,
        'isSuggested': isSuggested,
        'isPopular': isPopular,
        'customID' : customID,
        'priceTypes': 0,
        'specs': specs,
    }


   dispatch(newProduct(product))
}

const onChange = e => {
    const files = Array.from(e.target.files)

    setImagesPreview([]); 

    for (const file of files){
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
    }
}


  

  return (
    <Fragment>
      <MetaData title={'New Product'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar products CreatePtd />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1 className="newPtd">New Product</h1>

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
                  <div className="freeSpace new"></div>

                  <div className="db__column">
                    <label htmlFor="customID_field">ID</label>
                    <input
                      type="number"
                      id="customID_field"
                      className="form-control"
                      value={customID}
                      onChange={(e) => setCustomID(e.target.value)}
                    />
                  </div>
                </div>
                <div className="db__column">
                    <label htmlFor="stock_field">Stock</label>
                    <input
                      type="number"
                      id="stock_field"
                      className="form-control"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                    />
                  </div>

                <div className="Category_wrap">
                  <div className="db__column">
                    <label htmlFor="category_field">Category</label>
                    <select 
                      style={{
                        height: "35px",
                        padding: "0",
                        paddingLeft: "10px",
                      }} className="form-control" id="category_field" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Select a category...</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id} >{category.name}</option>
                        ))}
                    </select>
                  </div>

                 
                  
                </div>

                {/* <p>Price Types: 
                  <button className="btn flex" onClick={(e) => { 
                    e.preventDefault();  
                    setPriceTypes(currentPriceType => [...currentPriceType, {
                      value:'', 
                      unit: '', 
                      unitPrice: ''
                    }])
                  }}> <BiPlusCircle size='25'/></button>
                  </p>
                   */}
                {/* <div className="db_price_sheet" style={{border: priceTypes.length > 0 && '1px solid #8080802b', borderRadius:'10px', backgroundColor: priceTypes.length > 0 && '#8080802b'}}> */}
                  
                {/* {priceTypes.map((p,index) => {
                  return (
                    <div key={index}>
                      <div className="db__prdt_name_price">
                        <div className="db__column">
                          <input type='Number' value={p.value} placeholder='value' 
                          onChange={(e) => {
                            const value = e.target.value;
                            setPriceTypes((currentPriceType) => currentPriceType.map(x => x === p ? {...x, value} : x))
                          }} 
                          />
                        </div>
                          <div className="freeSpace new"></div>

                        <div className="db__column">
                          <input type='text' value={p.unit} placeholder='unit' 
                          onChange={(e) => {
                            const unit = e.target.value;
                            setPriceTypes((currentPriceType) => currentPriceType.map(x => x === p ? {...x, unit } : x))
                          }} 
                          />
                        </div>
                        <div className="freeSpace new"></div>

                        <div className="db__column">
                          <input type='Number' value={p.unitPrice} placeholder='price' 
                          onChange={(e) => {
                            const unitPrice = e.target.value;
                            setPriceTypes((currentPriceType) => currentPriceType.map(x => x === p ? {...x, unitPrice } : x))
                            // produce(currentPriceType, v => {
                            //   v[index].unitPrice = unitPrice;
                            // })
                          }} 
                          />
                        </div>
                        <div className="db__column db_sheet_btn">
                          <button className='btn flex' onClick={(e) => {
                            e.preventDefault(); 
                            setPriceTypes((currentPriceType) => currentPriceType.filter(x => x !== p ))
                          }}><MdDeleteForever size='30'/>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  )
                })}
                </div> */}

                <p>Specifications: 
                  <button className="btn flex " onClick={(e) => { 
                    e.preventDefault(); 
                    setSpecs(currentSpec => [...currentSpec, {
                      title:'', 
                      details: ''
                    }])
                  }}> <BiPlusCircle size='25'/></button>
                </p>

                <div className="db_price_sheet" style={{border: specs.length > 0 && '1px solid #8080802b', borderRadius:'10px', backgroundColor: specs.length > 0 && '#8080802b'}}>
                {specs.map((s,index) => {
                  return (
                    <div key={index}>
                      <div className="db__prdt_name_price">
                        <div className="db__column">
                          <input type='text' value={s.title} placeholder='title' 
                          onChange={(e) => {
                            const title = e.target.value;
                            setSpecs((currentSpec) => currentSpec.map(x => x === s ? {...x, title} : x))
                          }} 
                          />
                        </div>
                        <div className="freeSpace new"></div>

                        <div className="db__column">
                          <input type='text' value={s.details} placeholder='details' 
                          onChange={(e) => {
                            const details = e.target.value;
                            setSpecs((currentPriceType) => currentPriceType.map(x => x === s ? {...x, details } : x))
                          }} 
                          />
                        </div>

                        <div className="db__column db_sheet_btn">
                          <button className='btn flex' onClick={(e) => {
                            e.preventDefault(); 
                            setSpecs((currentSpec) => currentSpec.filter(x => x !== s ))
                          }}><MdDeleteForever size='30'/>
                          </button>
                        </div>

                      </div>
                    </div>
                  )
                })}
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

                <div className="db__column">
                  <div className="input__radio_wrap db_rdio">
                    <label className="radio__cod">
                      <p>Featured product</p>
                      <input
                        type="checkbox"
                        id="checkbox_field1"
                        checked={isFeatured}
                        onChange={(e) => setIsFeatured(!isFeatured)}
                      />
                      <span className="checkmark" ></span>
                    </label>
                    <label className="radio__cod">
                      <p>Suggested product</p>
                      <input
                        type="checkbox"
                        id="checkbox_field2"
                        checked={isSuggested}
                        onChange={(e) => setIsSuggested(!isSuggested)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio__cod">
                      <p>Popular product</p>
                      <input
                        type="checkbox"
                        id="checkbox_field3"
                        checked={isPopular}
                        onChange={(e) => setIsPopular(!isPopular)}
                      />
                      <span className="checkmark"></span>
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
                      multiple
                    />
                  </div>

                 
                  {imagesPreview.map((img,key) => (
                    <img src={img} key={key} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                  ))}

                </div>
                
                <div className="db_btn__add">
                  <button 
                    className="btn add__prdt flex"
                    type="submit"
                    disabled={loading ? true : false}
                  >Create Product</button>
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
        </div>
      </div>
    </Fragment>
  );
};

export default DbCreateProduct;

