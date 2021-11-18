import React, { Fragment, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

//Backend Imports
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../../../layout/MetaData'
import Loader from '../../../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, deleteProduct, clearErrors } from '../../../../actions/productActions'
import { DELETE_PRODUCT_RESET } from '../../../../constants/productConstants'
import { FaTrash } from 'react-icons/fa';
import { getCategories } from '../../../../actions/categoryActions';


const DbProducts = ({ history }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(state => state.products);
  const { error: deleteError, isDeleted } = useSelector(state => state.product)
  const { user } = useSelector(state => state.auth)

  const { categories } = useSelector((state) => state.categories);

  const Windows = categories[0]?._id;

  useEffect(() => {
        
    dispatch(getAdminProducts());
    dispatch(getCategories());


    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (deleteError) {
        alert.error(deleteError);
        dispatch(clearErrors())
    }

    if (isDeleted) {
        alert.success('Product deleted successfully');
        history.push('/admin/products');
        dispatch({ type: DELETE_PRODUCT_RESET })
    }

  }, [dispatch, alert, error, deleteError, isDeleted, history])

  const setProducts = () => {
    const data = {
        columns: [
          {
            label: 'Product Id',
            field: 'cid',
            sort: 'asc'
          },
          {
            label: 'Category',
            field: 'catId',
            sort: 'asc'
        },
   
            {
                label: 'Name',
                field: 'name',
                sort: 'asc'
            },
          //   {
          //     label: 'Price',
          //     field: 'price',
          //     sort: 'asc'
          // },
         
            {
                label: 'Actions',
                field: 'actions',
            },
        ],
        rows: []
    }

    products.forEach(product => {
        data.rows.push({
            cid: product.customID,
            name: product.name,
            catId: `${product.category === Windows ? "Windows" : "Doors"}`,
            // price:product && product.priceTypes[0] && product.priceTypes[0].unitPrice ,
            actions: <Fragment>
                <Link to={`/admin/product/${product._id}`} className="btn py-1 px-2">
                    <i className="fa fa-pencil"></i>
                </Link>
                <button className="btn flex  py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                    <FaTrash className="fa-trash"/>
                </button>
            </Fragment>
        })
    })

    return data;
  }

  const deleteProductHandler = (id) => {
      dispatch(deleteProduct(id))
  }

  return (

    <Fragment>
      <MetaData title={'All Products'} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar products allPrtd/>
        </div>
        <div className="db__home_left">
        <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>All Products</h1>

            <div className="db__table">

              {loading ? <Loader /> : (
                <MDBDataTable
                responsive

                exportToCSV
                  data={setProducts()}
                  className="px-3"
                  bordered
                  // striped
                  hover
                  
                />
              )}

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbProducts;
