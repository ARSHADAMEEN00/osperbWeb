import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { productsReducer, categoryProductsReducer, newProductReducer, productReducer, productDetailsReducer, matchingProductDetailsReducer } from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer, verifyUserReducer, shippingInfoReducer, updateShippingInfoReducer } from './reducers/userReducers'
import { enquiriesReducer, enquiryDetailsReducer, enquiryReducer, newAdminEnquiryReducer, newEnquiryReducer } from './reducers/enquiryReducers'
import { complaintsReducer, complaintDetailsReducer, complaintReducer, newComplaintReducer } from './reducers/complaintReducers'
import { blogDetailsReducer, blogReducer, blogsReducer, newBlogReducer } from './reducers/blogReducers';
import { newProjectReducer, projectDetailsReducer, projectReducer, projectsReducer } from './reducers/projectReducers'
import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer } from './reducers/orderReducers'
import { newReviewReducer, reviewReducer, reviewDetailsReducer, reviewsReducer } from './reducers/reviewReducers'
import { testimonialsReducer, testimonialDetailsReducer, newTestimonialReducer, testimonialReducer, } from './reducers/testimonialReducers'
import { categoriesReducer, categoryDetailsReducer, newCategoryReducer, categoryReducer, } from './reducers/categoryReducers'
import { settingsReducer, updateSettingsReducer, createSettingsReducer } from './reducers/settingsReducers'


const reducer = combineReducers({

    //product
    products: productsReducer,
    categoryProducts: categoryProductsReducer,
    productDetails: productDetailsReducer,
    matchingProductDetails : matchingProductDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,

    //auth
    auth: authReducer,
    user: userReducer,
    verifyUser: verifyUserReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,

 

    //enquiry
    enquiries: enquiriesReducer,
    newAdminEnquiry: newAdminEnquiryReducer,
    enquiryDetails:enquiryDetailsReducer,
    enquiry: enquiryReducer,
    newEnquiry: newEnquiryReducer,

    //complaint
    newComplaint: newComplaintReducer,
    complaint: complaintReducer,
    complaints: complaintsReducer,
    complaintDetails: complaintDetailsReducer,

    //blog
    newBlog: newBlogReducer,
    blogs: blogsReducer,
    blog: blogReducer,
    blogDetails: blogDetailsReducer,

    //project
    newProject: newProjectReducer,
    projectDetails: projectDetailsReducer,
    projects: projectsReducer,
    project: projectReducer,

    //order
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    allOrders: allOrdersReducer,
    orderDetails: orderDetailsReducer,
    order: orderReducer,

    //shippingInfo
    shippingInfo: shippingInfoReducer,
    updateShippingInfo: updateShippingInfoReducer,

    //review
    newReview: newReviewReducer,
    reviews: reviewsReducer,
    reviewDetails: reviewDetailsReducer,
    review: reviewReducer,

    //testimonial
    testimonials: testimonialsReducer,
    testimonialDetails: testimonialDetailsReducer,
    newTestimonial: newTestimonialReducer,
    testimonial: testimonialReducer,

    //category
    categories: categoriesReducer,
    categoryDetails: categoryDetailsReducer,
    newCategory: newCategoryReducer,
    category: categoryReducer,

    //settings
    settings: settingsReducer,
    updateSettings: updateSettingsReducer,
    createSettings: createSettingsReducer,
})




const middlware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlware)))

export default store;