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
import { getAdminCategories, deleteCategory, clearErrors } from '../../../../actions/categoryActions'
import { DELETE_CATEGORY_RESET } from '../../../../constants/categoryConstants'

const DbCategories = ({ history }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, categories } = useSelector(state => state.categories);
  const { error: deleteError, isDeleted } = useSelector(state => state.category)
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
        
    dispatch(getAdminCategories());

    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (deleteError) {
        alert.error(deleteError);
        dispatch(clearErrors())
    }

    if (isDeleted) {
        alert.success('Category deleted successfully');
        history.push('/admin/categories');
        dispatch({ type: DELETE_CATEGORY_RESET })
    }

  }, [dispatch, alert, error, deleteError, isDeleted, history])

  const setCategories = () => {
    const data = {
        columns: [

            {
                label: 'Name',
                field: 'col2',
                sort: 'asc'
            },
            {
                label: 'Image',
                field: 'col3',
                sort: 'asc'
            },
            {
                label: 'Actions',
                field: 'actions',
            },
        ],
        rows: []
    }

    categories.forEach(category => {
        data.rows.push({
            col2: category.name,
            col3: <img 
                    src={category.images[0] 
                      ? `${process.env.REACT_APP_BASE_URL}${category.images[0].url }` 
                      : "/images/others/default_product.png" } 
                    alt={category.name} style={{ width:'55px', height:'52px'}}/>,
            actions: <Fragment>
                <Link to={`/admin/category/${category._id}`} className="btn py-1 px-2">
                    <i className="fa fa-pencil"></i>
                </Link>
                <button className="btn flex py-1 px-2 ml-2" onClick={() => deleteCategoryHandler(category._id)}>
                    <i className="fa fa-trash"></i>
                </button>
            </Fragment>
        })
    })

    return data;
  }

  const deleteCategoryHandler = (id) => {
      dispatch(deleteCategory(id))
  }

  return (

    <Fragment>
      <MetaData title={'All Categories'} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar categories allCategories/>
        </div>
        <div className="db__home_left">
        <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>All Categories</h1>

            <div className="db__table">

              {loading ? <Loader /> : (
                <MDBDataTable
                responsive

                  data={setCategories()}
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

export default DbCategories;
