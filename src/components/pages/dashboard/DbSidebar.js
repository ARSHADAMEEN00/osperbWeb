import React from "react";
import "./dashboard.css";
import {  FaComments,  FaCommentAlt, FaUser, FaCubes } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdDashboard, MdSettings, MdWork} from "react-icons/md";
import { Link } from "react-router-dom";
import {AiFillExclamationCircle} from "react-icons/ai"

//sidebar imports
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const DbSidebar = ({


  dashboard,
  userReview,
  orders,
  products,
  enquiries,
  complaints,
  blogs,
  projects,

  allEnquiry,
  allComplaints,
  allPrtd,
  allBlg,
  allPrjs,
  createPrjs,
  CreatePtd,
  CreateEnquiry,
  NewEnquirie,
  DbCreateComplaint,
  createBlog,
  users,
  allOrders,
  staredOrders,
  allUsers,
  userCart,
  CancelledOrders,
  ReturnedOrders,
  testnomials,
  allTestnomials, 
  newTestnomial,
  categories,
  allCategories, 
  newCategory,
  settings,
  proceEnquirie,
  covertEnquirie,
  cancellEnquire
  
}) => {
  return (
    <div className="db__sidebar">
      <div className="db__logo text-center">
        <Link to='/'><img src="/images/logo/LOHA.png" alt="logo" /></Link>
        <h5 className='adminPanelText'>ADMIN PANEL</h5>
      </div>
      
      <div className="db__sup">

      <ProSidebar >
          <Menu iconShape="square">
            <MenuItem
              title="Dashboard"
              icon={<MdDashboard className="title_icon " />}
              className={`db_sd_title flex ${dashboard && "current"} `}
            >
             <Link to="/dashboard"> Dashboard</Link>
            </MenuItem>
          </Menu>

          <Menu iconShape="square" id={`${enquiries && "current"}`}>
            <SubMenu title="Enquiries" icon={<FaCommentAlt className="title__icon" />}>
              <MenuItem className={` ${allEnquiry && "active"}`} id="alpt">
              <Link to="/admin/enquiries"> All Enquiries</Link>
              </MenuItem>
                  <MenuItem className={`sub_menus ${NewEnquirie && "active"}`} id="alpt">
                  <Link to="/admin/enquiries/new">New</Link>
                  </MenuItem>
                  <MenuItem className={`sub_menus ${proceEnquirie && "active"}`} id="alpt">
                  <Link to="/admin/enquiries/processing">Processing</Link>
                  </MenuItem>
                  <MenuItem className={`sub_menus ${covertEnquirie && "active"}`} id="alpt">
                  <Link to="/admin/enquiries/converted">Converted</Link>
                  </MenuItem>
                  <MenuItem className={`sub_menus ${cancellEnquire && "active"}`} id="alpt">
                  <Link to="/admin/enquiries/cancelled">Cancelled</Link>
                  </MenuItem>
              <MenuItem className={`${CreateEnquiry && "active"}`} id="alpt">
              <Link to="/enquiry"> Create Enquiry</Link>
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu iconShape="square" id={`${complaints && "current"}`}>
            <SubMenu title="Complaints" icon={<AiFillExclamationCircle className="title__icon" />}>
              <MenuItem className={` ${allComplaints && "active"}`} id="alpt">
              <Link to="/admin/complaints"> All Complaints</Link>
              </MenuItem>
              <MenuItem className={`${DbCreateComplaint && "active"}`} id="alpt">
              <Link to="/admin/complaint"> New Complaint</Link>
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu iconShape="square" id={`${blogs && "current"}`}>
            <SubMenu title="Blogs" icon={<FaComments className="title__icon" />}>
              <MenuItem className={` ${allBlg && "active"}`} id="alpt">
              <Link to="/admin/blogs"> All Blogs</Link>
              </MenuItem>
              <MenuItem className={`${createBlog && "active"}`} id="alpt">
              <Link to="/admin/blog"> New Blog</Link>
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu iconShape="square" id={`${projects && "current"}`}>
            <SubMenu title="Projects" icon={<MdWork className="title__icon" />}>
              <MenuItem className={` ${allPrjs && "active"}`} id="alpt">
              <Link to="/admin/projects"> All Projects</Link>
              </MenuItem>
              <MenuItem className={`${createPrjs && "active"}`} id="alpt">
              <Link to="/admin/project"> New Project</Link>
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu iconShape="square" id={`${products && "current"}`}>
            <SubMenu title="Products" icon={<GiClothes className="title__icon" />}>
              <MenuItem className={` ${allPrtd && "active"}`} id="alpt">
              <Link to="/admin/products"> All Products</Link>
              </MenuItem>
              <MenuItem className={`${CreatePtd && "active"}`} id="alpt">
              <Link to="/admin/product"> New Product</Link>
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu iconShape="square" id={`${categories && "current"}`}>
            <SubMenu title="Categories" icon={<FaCubes className="title__icon" />}>
              <MenuItem className={`hihih ${allCategories && "active"}`} id="alpt">
              <Link to="/admin/categories">All Categories</Link>
              </MenuItem>
              <MenuItem className={`${newCategory && "active"}`} id="alpt">
              <Link to="/admin/category">New Category</Link>
                </MenuItem>
                
            </SubMenu>
          </Menu>
        

          <Menu iconShape="square" id={`${testnomials && "current"}`}>
            <SubMenu title="Testimonials" icon={<FaComments className="title__icon" />}>
              <MenuItem className={`hihih ${allTestnomials && "active"}`} id="alpt">
              <Link to="/admin/testimonials">All Testnomials</Link>
              </MenuItem>
              <MenuItem className={`${newTestnomial && "active"}`} id="alpt">
              <Link to="/admin/testimonial">New Testnomial</Link>
                </MenuItem>
                
            </SubMenu>
          </Menu>

          <Menu iconShape="square" id={`${settings && "current"}`}>
            <MenuItem
              className={`db_sd__title flex ${settings && "current"} `}
              icon={<MdSettings className="title_icon" />}
            >
              <Link to="/admin/settings"> Settings</Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="square" id={`${users && "current"}`}>
            <SubMenu title="Profile" icon={<FaUser className="title__icon" />}>
              <MenuItem className={`hihih ${allUsers && "active"}`} id="alpt">
              <Link to="/admin/users">View Profile</Link>
              </MenuItem>
    

            </SubMenu>
          </Menu>

        </ProSidebar>

      </div>

      <div className="osperb">
        <p>
          Developed by <a target='_blank' rel="noopener noreferrer"  href="https://www.osperb.com">osperb</a>
        </p>
      </div>
    </div>
  )
}

export default DbSidebar;
