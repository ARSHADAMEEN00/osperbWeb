import React, { Fragment, useState, useEffect } from "react";
import DbHeader from "../DbHeader";
import DbSidebar from "../DbSidebar";

// Backend Imports
import MetaData from "../../../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSettings,
  loadSettings,
  clearErrors,
} from "../../../../actions/settingsActions";
import { UPDATE_SETTINGS_RESET } from "../../../../constants/settingsConstants";

const DbUpdateSettings = ({ history }) => {
  const [defaultCurrency, setDefaultCurrency] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [freeShippingThreshold, setFreeShippingThreshold] = useState();
  const [returnExpiry, setReturnExpiry] = useState();


  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, settings } = useSelector((state) => state.settings);
  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.updateSettings);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!settings) {
      dispatch(loadSettings());
    } else {
      setDefaultCurrency(settings.defaultCurrency);
      setPaymentType(settings.paymentType);
      setFreeShippingThreshold(settings.freeShippingThreshold);
      setReturnExpiry(settings.returnExpiry);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      history.push("/admin/settings");
      alert.success("Settings updated successfully");
      dispatch({ type: UPDATE_SETTINGS_RESET });
    }
  }, [dispatch, alert, error, isUpdated, history, updateError, settings]);

  const submitHandler = (e) => {
    e.preventDefault();

    const settings = {
      defaultCurrency: defaultCurrency,
      paymentType: paymentType,
      freeShippingThreshold: freeShippingThreshold,
      returnExpiry: returnExpiry,
    };

    dispatch(updateSettings(settings));
  };

  return (
    <Fragment>
      <MetaData title={"Update Settings"} />
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar settings />
        </div>
        <div className="db__home_left">
          <DbHeader user={user} />
          <div className="db__reviews db__orders db__seting">
            <h1>Update Settings</h1>

            <form className="db_product_form" onSubmit={submitHandler}>
              <div
                className="db__new_prdt"
                style={{
                  width: "50%",
                }}
              >
                <div className="db__prdt_name_price">
                  <div className="db__column">
                    <label htmlFor="defaultCurrency_field">
                      Default Currency
                    </label>
                    <input
                      style={{ height: "30px", fontSize: "20px" }}
                      type="text"
                      id="defaultCurrency_field"
                      className="form-control"
                      value={defaultCurrency}
                      onChange={(e) => setDefaultCurrency(e.target.value)}
                    />
                  </div>
                  {/* <div className="db__column">
                    <label htmlFor="freeShippingThreshold_field">Free Shipping Threshold</label>
                    <input
                      type="text"
                      id="freeShippingThreshold_field"
                      className="form-control"
                      value={freeShippingThreshold}
                      onChange={(e) => setFreeShippingThreshold(e.target.value)}
                    />
                  </div> */}
                </div>

                <div className="db__prdt_name_price">
                  {/* <div className="db__column">
                    <label htmlFor="returnExpiry_field">Return Expiry (Days)</label>
                    <input
                      type="text"
                      id="returnExpiry_field"
                      className="form-control"
                      value={returnExpiry}
                      onChange={(e) => setReturnExpiry(e.target.value)}
                    />
                  </div> */}
                </div>

                {/* <label>Payment Type:</label>
                <div className="db__prdt_name_price">
                  
                  <div className="db__column_link">
                    <select disabled className="form-control" id="category_field" value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>  
                        {paymentTypes.map(type => (
                            <option key={type} value={type} >{type}</option>
                        ))}
                    </select>
                  </div>
                  
                </div>  */}

                <div className="db_btn__add">
                  <button
                    className="btn flex add__prdt btn-success"
                    type="submit"
                    disabled={updateLoading ? true : false}
                  >
                    Update Settings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DbUpdateSettings;
