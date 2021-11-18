import React, { Fragment, useEffect } from 'react'
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

//Backend Imports
import { Link } from 'react-router-dom'
import MetaData from '../../../layout/MetaData'
import Loader from '../../../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { loadSettings, clearErrors } from '../../../../actions/settingsActions'  

const DbSettings = ({ history }) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, settings, settingsCount } = useSelector(state => state.settings);
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
        
    dispatch(loadSettings());

    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

  }, [dispatch, alert, error, history])


  return (

    <Fragment>
      <MetaData title={'Settings'} />

      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar settings/>
        </div>
        <div className="db__home_left">
        <DbHeader user={user} />
          <div className="db__reviews db__orders db__seting">
            <h1 className="db_sett">Settings</h1>

            <div className="db__table bd__tb-new">

              {loading ? <Loader /> : (
                <>
                  {settingsCount === 0  ? <Fragment> 
                      <p>No Setting Found! Create it now.</p>
                      <Link to='/admin/settings/create'>
                        <button className='btn flex btn-success'>Create settings</button>
                      </Link>
                    </Fragment>
                  : <> 
                      
                      <p>Default Currency : <span className="bd_tb_span">{settings && settings.defaultCurrency}</span></p>
                      {/* <p>Free Shipping Threshold : <span className="bd_tb_span">{settings && settings.defaultCurrency} {settings && settings.freeShippingThreshold}</span></p> */}
                      {/* <p>Return expiry : <span className="bd_tb_span">{settings && settings.returnExpiry} Days </span></p> */}
                      {/* <p>Payment Type : <span className="bd_tb_span">{settings && settings.paymentType}</span></p> */}

                      <Link to='/admin/settings/update'>
                        <button className='btn btn-success flex suc-btn'>Update settings</button>
                      </Link>
                    </>
                  }
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbSettings;
