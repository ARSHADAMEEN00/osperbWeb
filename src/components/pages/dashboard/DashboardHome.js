import React, { Fragment, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import DbHeader from "./DbHeader";
import DbSidebar from "./DbSidebar";

//Backend Imports
import { Link } from "react-router-dom";
import MetaData from "../../layout/MetaData";
import Loader from "../../layout/Loader";

import { useDispatch, useSelector } from "react-redux";

import { getAdminProducts } from "../../../actions/productActions";
import { allUsers } from "../../../actions/userActions";
import { loadSettings } from "../../../actions/settingsActions";
import { getAdminEnquiries } from "../../../actions/enquiryActions";
import { getAdminComplaints } from "../../../actions/complaintActions";
import { getAdminBlogs } from "../../../actions/blogActions";

const DashboardHome = ({ history }) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  // const { users } = useSelector(state => state.allUsers)
  const { loading } = useSelector((state) => state.allOrders);
  // const { settings } = useSelector(state => state.settings);
  const { user } = useSelector((state) => state.auth);
  const { enquiries } = useSelector((state) => state.enquiries);
  const { complaints } = useSelector((state) => state.complaints);
  const { blogs } = useSelector((state) => state.blogs);

  
  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(allUsers());
    dispatch(getAdminEnquiries());
    dispatch(loadSettings());
    dispatch(getAdminComplaints());
    dispatch(getAdminBlogs());

      // window.location.reload(history.push("/login"));


  }, [dispatch]);


  return (
    <Fragment>
      <div className="db__home">
        <div className="db__sidebar_wrap">
          <DbSidebar dashboard />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={"Admin Dashboard"} />
            <div className="db__home_left">
              <DbHeader user={user} />
              {/* <div className="db_total__amount">
                            <div className='flex'>
                            <div className='mr-5 pr-5' style={{borderRight:'1px solid grey'}}>
                                <p>Total Amount</p>
                                <h1>{settings && settings.defaultCurrency} <b>{totalAmount && totalAmount.toFixed(2)}</b></h1>
                            </div>
                            
                            <div className='mr-5 pr-5' style={{borderRight:'1px solid grey'}}>
                                <p>Today</p>
                                <h1>{settings && settings.defaultCurrency} <b>{totalAmount && totalAmount.toFixed(2)}</b></h1>
                            </div>
                            </div>
                        </div> */}
              <div className="db__info_wrap">
                <div className="db__pro flex">
                  <p>Products</p>
                  <h1>{products?.length}</h1>
                  <Link to="/admin/products">
                    <button className="flex btn">
                      {" "}
                      View Details
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
                {/* <div className="db__pro flex">
                                <p>Orders <span style={{fontSize:'16px'}}>{`(${orders && orders.length})`}</span></p>
                                <h1>{newOrders && newOrders.length} <br/> <span style={{fontSize:'14px', color:'green'}}>{` new orders`}</span></h1> 
                                <Link to='/admin/orders'>
                                    <button className="btn flex"> View Details
                                    <IoIosArrowForward/>
                                    </button>
                                </Link>
                            </div> */}
                {/* <div className="db__pro flex">
                                <p> Users</p>
                                <h1>{users && users.length}</h1>
                                <Link to='/admin/users'>
                                    <button className="btn flex"> View Details
                                    <IoIosArrowForward/>
                                    </button>
                                </Link>
                            </div> */}
                <div className="db__pro flex">
                  <p>Enquiries</p>
                  <h1>{enquiries?.length}</h1>
                  <Link to="/admin/enquiries">
                    <button className="flex btn">
                      {" "}
                      View Details
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
                <div className="db__pro flex">
                  <p>Complaints</p>
                  <h1>{complaints?.length}</h1>
                  <Link to="/admin/complaints">
                    <button className="btn">
                      {" "}
                      View Details
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
                <div className="db__pro flex">
                  <p>Blogs</p>
                  <h1>{blogs?.length}</h1>
                  <Link to="/admin/blogs">
                    <button className="btn flex">
                      {" "}
                      View Details
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>

                {/* <div className="db__pro flex">
                                <p>Out of Stock</p>
                                <h1>{outOfStock}</h1>
                                <button className="btn flex" disabled> View Details
                                <IoIosArrowForward/>
                                </button>
                            </div> */}
              </div>
            </div>
          </Fragment>
        )}
      </div>
      <>
        <div className="flex displya_tyext">
          <h1
            style={{
              textAlign: "center",
              width: "80%",
              padding: "2rem",
            }}
          >
            This view is only supported for bigger displays
          </h1>
        </div>
      </>
    </Fragment>
  );
};

export default DashboardHome;
