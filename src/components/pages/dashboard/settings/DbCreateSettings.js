import React, { Fragment, useState, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

// Backend Imports
import MetaData from '../../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { loadSettings, createSettings, clearErrors } from '../../../../actions/settingsActions'
import { NEW_SETTINGS_RESET } from '../../../../constants/settingsConstants'

const DbCreateSettings = ({ history }) => {

    const [defaultCurrency, setDefaultCurrency] = useState('₹');
    // const [shipping, setShipping] = useState([]);
    const [paymentType, setPaymentType] = useState('Cash on Delivery');
    const [freeShippingThreshold, setFreeShippingThreshold] = useState();
    const [returnExpiry] = useState();

    const paymentTypes = [
      'Cash on Delivery',
      'Online Payment',
      'Both'
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.createSettings);
    const { settingsCount } = useSelector(state => state.settings);
    const { user } = useSelector(state => state.auth)

    useEffect(() => {

      dispatch(loadSettings());

      if(settingsCount && settingsCount !== 0){
        history.push('/admin/settings');
      }

      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (success) {
          history.push('/admin/settings');
          alert.success('Settings created successfully');
          dispatch({ type: NEW_SETTINGS_RESET })
      }

  }, [dispatch, alert, error, success, history, settingsCount])

  const submitHandler = (e) => {
    e.preventDefault();

    const settings = {
        'defaultCurrency': defaultCurrency,
        'paymentType': paymentType,
        'freeShippingThreshold': freeShippingThreshold,
        'returnExpiry': returnExpiry
    }

   dispatch(createSettings(settings))
  }

  return (
    <Fragment>
      <MetaData title={'Create Settings'} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar settings />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders">
            <h1>Create Settings</h1>

            <form className="db_product_form" onSubmit={submitHandler}>
              <div className="db__new_prdt">
                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="defaultCurrency_field">Default Currency</label>
                    <input
                      type="text"
                      id="defaultCurrency_field"
                      className="form-control"
                      value={defaultCurrency}
                      onChange={(e) => setDefaultCurrency(e.target.value)}
                    />
                  </div>
                  <div className="db__column">
                    <label htmlFor="freeShippingThreshold_field">Free Shipping Threshold</label>
                    <input
                      type="text"
                      id="freeShippingThreshold_field"
                      className="form-control"
                      value={freeShippingThreshold}
                      onChange={(e) => setFreeShippingThreshold(e.target.value)}
                    />
                  </div>
                </div>
                

                <label>Payment Type:</label>
                <div className="db__prdt_name_price">
                  
                  <div className="db__column_link">
                    <select disabled className="form-control" id="category_field" value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>  
                        {paymentTypes.map(type => (
                            <option key={type} value={type} >{type}</option>
                        ))}
                    </select>
                  </div>
                  
                </div> 
              
                <div className="db_btn__add">
                  <button 
                    className="btn add__prdt flex"
                    type="submit"
                    disabled={loading ? true : false}
                  >Create Settings</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbCreateSettings;
