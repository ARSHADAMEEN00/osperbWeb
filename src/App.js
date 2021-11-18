//react default pkg
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

//css
import "./App.css";
import "./components/pages/homePage/homeNew.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/layout/navbar.css";
import "./components/pages/allCategoryPage/categoryPage.css";
import "./components/pages/productPage/singleProduct.css";
import "./components/pages/staticPages/static.css";
import "./components/pages/singlePages.css";
import "./components/layout/footer.css";
import "./components/layout/PreLoader/preloader.css";
import "./components/pages/ContactFrom/contactForm.css";


//supports
import ProtectedRoute from "./components/route/ProtectedRoute";
import { AppContext } from "./AppContext";
import PreLoader from "./components/layout/PreLoader/PreLoader";
import ScrollTop from "./components/layout/Scroll/scrollTop";
import asyncComponent from "./asyncComponent";

import { MobileDev, SoftwearDev, WebsitesDev } from "./components/pages/service/Services"

import { DbCreateEnquiry } from "./components/pages/dashboard/enquiry/DbCreateEnquiry"
import { DbCreateComplaint } from "./components/pages/dashboard/complaints/DbCreateComplaint"


const HomeNew = asyncComponent(() =>
  import("./components/pages/homePage/HomeNew").then((module) => module.default)
);

const SingleProduct = asyncComponent(() =>
  import("./components/pages/productPage/SingleProduct").then(
    (module) => module.default
  )
);
const Windows = asyncComponent(() =>
  import("./components/pages/allCategoryPage/Windows").then(
    (module) => module.default
  )
);
const Doors = asyncComponent(() =>
  import("./components/pages/allCategoryPage/Doors").then(
    (module) => module.default
  )
);

const VerifyAccount = asyncComponent(() =>
  import("./components/pages/verifyPage/VerifyAccount").then(
    (module) => module.default
  )
);

const ForgotPassword = asyncComponent(() =>
  import("./components/pages/forgotPasswordPage/ForgotPassword").then(
    (module) => module.default
  )
);

const ResetPassword = asyncComponent(() =>
  import("./components/pages/resetPasswordPage/ResetPassword").then(
    (module) => module.default
  )
);

const DashboardHome = asyncComponent(() =>
  import("./components/pages/dashboard/DashboardHome").then(
    (module) => module.default
  )
);

const DbProducts = asyncComponent(() =>
  import("./components/pages/dashboard/products/DbProducts").then(
    (module) => module.default
  )
);
const DbCreateProduct = asyncComponent(() =>
  import("./components/pages/dashboard/products/DbCreateProduct").then(
    (module) => module.default
  )
);
const DbUpdateProduct = asyncComponent(() =>
  import("./components/pages/dashboard/products/DbUpdateProduct").then(
    (module) => module.default
  )
);

const DbUsers = asyncComponent(() =>
  import("./components/pages/dashboard/users/DbUsers").then(
    (module) => module.default
  )
);
const DbUpdateUser = asyncComponent(() =>
  import("./components/pages/dashboard/users/DbUpdateUser").then(
    (module) => module.default
  )
);
const ReviewPage = asyncComponent(() =>
  import("./components/pages/reviewPage/ReviewPage").then(
    (module) => module.default
  )
);
const DbReviews = asyncComponent(() =>
  import("./components/pages/dashboard/reviews/DbReviews").then(
    (module) => module.default
  )
);
const DbReviewInfo = asyncComponent(() =>
  import("./components/pages/dashboard/reviews/DbReviewInfo").then(
    (module) => module.default
  )
);
const DbTestimonials = asyncComponent(() =>
  import("./components/pages/dashboard/testimonials/DbTestimonials").then(
    (module) => module.default
  )
);
const DbCreateTestimonial = asyncComponent(() =>
  import("./components/pages/dashboard/testimonials/DbCreateTestimonial").then(
    (module) => module.default
  )
);
const DbUpdateTestimonial = asyncComponent(() =>
  import("./components/pages/dashboard/testimonials/DbUpdateTestimonial").then(
    (module) => module.default
  )
);
const AboutUs = asyncComponent(() =>
  import("./components/pages/staticPages/AboutUs").then(
    (module) => module.default
  )
);

const DbCategories = asyncComponent(() =>
  import("./components/pages/dashboard/categories/DbCategories").then(
    (module) => module.default
  )
);
const DbCreateCategory = asyncComponent(() =>
  import("./components/pages/dashboard/categories/DbCreateCategory").then(
    (module) => module.default
  )
);
const DbUpdateCategory = asyncComponent(() =>
  import("./components/pages/dashboard/categories/DbUpdateCategory").then(
    (module) => module.default
  )
);

const DbSettings = asyncComponent(() =>
  import("./components/pages/dashboard/settings/DbSettings").then(
    (module) => module.default
  )
);
const DbCreateSettings = asyncComponent(() =>
  import("./components/pages/dashboard/settings/DbCreateSettings").then(
    (module) => module.default
  )
);
const DbUpdateSettings = asyncComponent(() =>
  import("./components/pages/dashboard/settings/DbUpdateSettings").then(
    (module) => module.default
  )
);
const DbUpdateEnquiry = asyncComponent(() =>
  import("./components/pages/dashboard/enquiry/DbUpdateEnquiry").then(
    (module) => module.default
  )
);
const SingleBlog = asyncComponent(() =>
  import("./components/pages/Blogs/SingleBlog").then((module) => module.default)
);
const LoginPage = asyncComponent(() =>
  import("./components/pages/Login/LoginPage").then((module) => module.default)
);
const DbCreateBlog = asyncComponent(() =>
  import("./components/pages/dashboard/blog/DbCreateBlog").then(
    (module) => module.default
  )
);
const DbEnquiries = asyncComponent(() =>
  import("./components/pages/dashboard/enquiry/DbEnquiries").then(
    (module) => module.default
  )
);
const DbUpdateComplaint = asyncComponent(() =>
  import("./components/pages/dashboard/complaints/DbUpdateComplaint").then(
    (module) => module.default
  )
);
const DbUpdateBlog = asyncComponent(() =>
  import("./components/pages/dashboard/blog/DbUpdateBlog").then(
    (module) => module.default
  )
);
const DbBlogs = asyncComponent(() =>
  import("./components/pages/dashboard/blog/DbBlogs").then(
    (module) => module.default
  )
);
const DbNewEnquiries = asyncComponent(() =>
  import("./components/pages/dashboard/enquiry/DbNewEnquiries").then(
    (module) => module.default
  )
);

const SingleProject = asyncComponent(() =>
  import("./components/pages/projects/SingleProject").then(
    (module) => module.default
  )
);
const DbConvertedEnquiries = asyncComponent(() =>
  import("./components/pages/dashboard/enquiry/DbConvertedEnquiry").then(
    (module) => module.default
  )
);
const DbProcessingEnquiries = asyncComponent(() =>
  import("./components/pages/dashboard/enquiry/DbProcessingEnquiries").then(
    (module) => module.default
  )
);
const DbProjects = asyncComponent(() =>
  import("./components/pages/dashboard/project/DbProjects").then(
    (module) => module.default
  )
);
const DbCancelledEnquiries = asyncComponent(() =>
  import("./components/pages/dashboard/enquiry/DbCancelledEnquiries").then(
    (module) => module.default
  )
);
const DbUpdateProject = asyncComponent(() =>
  import("./components/pages/dashboard/project/DbUpdateProject").then(
    (module) => module.default
  )
);
const DbCreateProject = asyncComponent(() =>
  import("./components/pages/dashboard/project/DbCreateProject").then(
    (module) => module.default
  )
);
const DbComplaints = asyncComponent(() =>
  import("./components/pages/dashboard/complaints/DbComplaints").then(
    (module) => module.default
  )
);

const Technologies = asyncComponent(() =>
  import("./components/pages/technology/Technologies").then(
    (module) => module.default
  )
);

const NodeTechno = asyncComponent(() =>
  import("./components/pages/technology/NodeTechno").then(
    (module) => module.default
  )
);
const PythonTechno = asyncComponent(() =>
  import("./components/pages/technology/PythonTechno").then(
    (module) => module.default
  )
);
const DjangoTechno = asyncComponent(() =>
  import("./components/pages/technology/DjangoTechno").then(
    (module) => module.default
  )
);
const ExpressTechno = asyncComponent(() =>
  import("./components/pages/technology/ExpressTechno").then(
    (module) => module.default
  )
);
const ReactJsTechno = asyncComponent(() =>
  import("./components/pages/technology/ReactJsTechno").then(
    (module) => module.default
  )
);
const ReactNativeTechno = asyncComponent(() =>
  import("./components/pages/technology/ReactNativeTechno").then(
    (module) => module.default
  )
);
const NotFound = asyncComponent(() =>
  import("./components/layout/noteFound/NotFound").then(
    (module) => module.default
  )
);


function App() {
  const [loginState, setLoginState] = useState(false);

  return (
    <>
      <Router>
        <AppContext.Provider
          value={{ loginState: loginState, setLoginState: setLoginState }}
        >
          <div className="App">
            <ScrollTop>
              <PreLoader />
              <Switch>
                <Route path="/" component={HomeNew} exact />
                <Route path="/product/:id" component={SingleProduct} />
                <Route path="/category/windows" component={Windows} />
                <Route path="/category/doors" component={Doors} />
                <Route path="/review/new" component={ReviewPage} />
                <Route path="/blog/:subtitle" component={SingleBlog} />
                <Route path="/projects" component={SingleProject} />

                <Route path="/services/website" component={WebsitesDev} />
                <Route path="/service/softwear" component={SoftwearDev} />
                <Route path="/service/mobileapp" component={MobileDev} />



                <Route path="/technologies" exact component={Technologies} />
                <Route path="/technologies/node" component={NodeTechno} />
                <Route path="/technologies/python" component={PythonTechno} />
                <Route path="/technologies/django" component={DjangoTechno} />
                <Route path="/technologies/express" component={ExpressTechno} />
                <Route path="/technologies/react" component={ReactJsTechno} />
                <Route path="/technologies/reactnative" component={ReactNativeTechno} />
                {/* Static Routes */}
                <Route path="/about" component={AboutUs} />

                {/* Auth Routes */}
                <Route path="/login" component={LoginPage} />
                <Route path="/verify/:token" component={VerifyAccount} />
                <Route path="/password/forgot" component={ForgotPassword} />
                <Route
                  path="/password/reset/:token"
                  component={ResetPassword}
                />

                {/* Admin Routes */}

                <ProtectedRoute
                  path="/dashboard"
                  isAdmin={true}
                  component={DashboardHome}
                  exact
                />

                {/* Products */}
                <ProtectedRoute
                  path="/admin/products"
                  isAdmin={true}
                  component={DbProducts}
                  exact
                />
                <ProtectedRoute
                  path="/admin/product"
                  isAdmin={true}
                  component={DbCreateProduct}
                  exact
                />
                <ProtectedRoute
                  path="/admin/product/:id"
                  isAdmin={true}
                  component={DbUpdateProduct}
                  exact
                />

                {/* Enquiries */}
                <ProtectedRoute
                  path="/admin/enquiries"
                  isAdmin={true}
                  component={DbEnquiries}
                  exact
                />
                <ProtectedRoute
                  path="/enquiry"
                  component={DbCreateEnquiry}
                  exact
                />
                <ProtectedRoute
                  path="/admin/enquiry/:id"
                  isAdmin={true}
                  component={DbUpdateEnquiry}
                  exact
                />
                <ProtectedRoute
                  path="/admin/enquiries/new"
                  isAdmin={true}
                  component={DbNewEnquiries}
                  exact
                />
                <ProtectedRoute
                  path="/admin/enquiries/processing"
                  isAdmin={true}
                  component={DbProcessingEnquiries}
                  exact
                />
                <ProtectedRoute
                  path="/admin/enquiries/converted"
                  isAdmin={true}
                  component={DbConvertedEnquiries}
                  exact
                />
                <ProtectedRoute
                  path="/admin/enquiries/cancelled"
                  isAdmin={true}
                  component={DbCancelledEnquiries}
                  exact
                />

                {/* Complaints */}
                <ProtectedRoute
                  path="/admin/complaint"
                  isAdmin={true}
                  component={DbCreateComplaint}
                  exact
                />
                <ProtectedRoute
                  path="/admin/complaints"
                  isAdmin={true}
                  component={DbComplaints}
                  exact
                />
                <ProtectedRoute
                  path="/admin/complaint/:id"
                  isAdmin={true}
                  component={DbUpdateComplaint}
                  exact
                />

                {/* Blogs */}
                <ProtectedRoute
                  path="/admin/blogs"
                  isAdmin={true}
                  component={DbBlogs}
                  exact
                />
                <ProtectedRoute
                  path="/admin/blog"
                  isAdmin={true}
                  component={DbCreateBlog}
                  exact
                />
                <ProtectedRoute
                  path="/admin/blog/:id"
                  isAdmin={true}
                  component={DbUpdateBlog}
                  exact
                />

                {/* Projects */}
                <ProtectedRoute
                  path="/admin/projects"
                  isAdmin={true}
                  component={DbProjects}
                  exact
                />
                <ProtectedRoute
                  path="/admin/project"
                  isAdmin={true}
                  component={DbCreateProject}
                  exact
                />
                <ProtectedRoute
                  path="/admin/project/:id"
                  isAdmin={true}
                  component={DbUpdateProject}
                  exact
                />

                {/* Users */}
                <ProtectedRoute
                  path="/admin/users"
                  isAdmin={true}
                  component={DbUsers}
                  exact
                />
                <ProtectedRoute
                  path="/admin/user/:id"
                  isAdmin={true}
                  component={DbUpdateUser}
                  exact
                />

                {/* Reviews */}
                <ProtectedRoute
                  path="/admin/reviews"
                  isAdmin={true}
                  component={DbReviews}
                  exact
                />
                <ProtectedRoute
                  path="/admin/review/:id"
                  isAdmin={true}
                  component={DbReviewInfo}
                  exact
                />

                {/* Testimonials */}
                <ProtectedRoute
                  path="/admin/testimonials"
                  isAdmin={true}
                  component={DbTestimonials}
                  exact
                />
                <ProtectedRoute
                  path="/admin/testimonial"
                  isAdmin={true}
                  component={DbCreateTestimonial}
                  exact
                />
                <ProtectedRoute
                  path="/admin/testimonial/:id"
                  isAdmin={true}
                  component={DbUpdateTestimonial}
                  exact
                />

                {/* Categories */}
                <ProtectedRoute
                  path="/admin/categories"
                  isAdmin={true}
                  component={DbCategories}
                  exact
                />
                <ProtectedRoute
                  path="/admin/category"
                  isAdmin={true}
                  component={DbCreateCategory}
                  exact
                />
                <ProtectedRoute
                  path="/admin/category/:id"
                  isAdmin={true}
                  component={DbUpdateCategory}
                  exact
                />

                {/* Settings */}
                <ProtectedRoute
                  path="/admin/settings"
                  isAdmin={true}
                  component={DbSettings}
                  exact
                />
                <ProtectedRoute
                  path="/admin/settings/create"
                  isAdmin={true}
                  component={DbCreateSettings}
                  exact
                />
                <ProtectedRoute
                  path="/admin/settings/update"
                  isAdmin={true}
                  component={DbUpdateSettings}
                  exact
                />
                <Route path="/404" component={NotFound} />
                <Route render={() => <Redirect to={{ pathname: "/404" }} />} />
              </Switch>
            </ScrollTop>
          </div>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
