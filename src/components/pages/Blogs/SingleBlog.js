import React, {Fragment} from "react";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import { motion } from "framer-motion";
import {  useEffect, useRef } from "react";

//Backend Imports
import Loader from "../../layout/Loader";
import MetaData from "../../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import {
  getBlogDetails,
  getBlogs,
  clearErrors,
} from "../../../actions/blogActions";
import moment from "moment";
import { Link } from "react-router-dom";

const SingleBlog = ({ history, match }) => {

  const blogContent = useRef()
  const alert = useAlert();
  const dispatch = useDispatch();


  const { blog, loading, error } = useSelector((state) => state.blogDetails);
  const { blogs } = useSelector((state) => state.blogs);

  const blogId = match.params.subtitle;

  useEffect(() => {
    if (blogContent.current) {
      blogContent.current.innerHTML = blog?.content;
    }
    dispatch(getBlogs());

    if (blog && blog.subTitle !== blogId) {
      dispatch(getBlogDetails(blogId));
      dispatch(getBlogs());
    } 

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [alert, dispatch, blogId, blog, error]);

  const parentVar = {
    hidden: {
      y: 15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 8,
        delay: 0,
        mass: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
  };
  const childrenVar = {
    hidden: {
      y: 15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
   

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <MetaData  title={blog?.title}
         content={blog && blog.content && blog.content.substr(0 , 150)}
        />
          <NavBar BrownTheme />
          <div className="container-fluid flex blog-new">
          <div className="container blog_left">
              <motion.div
                key={blog._id}
                variants={parentVar}
                initial="hidden"
                animate="visible"
                className="blog_content"
              >
                <motion.p variants={childrenVar}>
               
                  {moment(blog?.date).format("DD-MM-YYYY")}
                </motion.p>
                <motion.h3 variants={childrenVar}>{blog?.title}</motion.h3>
                
                <motion.div variants={childrenVar} className="blog_single_img">
                  <img src={
                            blog && blog.images
                              ? `${process.env.REACT_APP_BASE_URL}${blog.images[0].url}`
                              : "/images/others/default_product.png"
                          } alt="" />
                 
                </motion.div>

                <motion.div variants={childrenVar} className="blog_text" ref={blogContent}>
                </motion.div>
              </motion.div>
            </div> 

            <div className="container blog_right" id="simple_blogs">
              {blogs?.map((blog, key) => (
                <Fragment key={key}>
                {blog && blog.subTitle !== match.params.subtitle ?
                <>
                  <Link to={`/blog/${blog.subTitle}`} className="blog_card flex">
                    <div className="blog__img">
                      <img src={blog && blog.images && `${process.env.REACT_APP_BASE_URL}${blog.images[0].url}`} alt="blogs" />
                    </div>
                    <div className="blog_card_data">
                      <h6 className="blog__header">
                      {moment(blog.date).format('DD-MM-YYYY')}
                      </h6>
                      <h1 className="blog__title">
                      {blog.title}
                      </h1>
                    </div>
                  </Link>
                </>
                  :
                  <></>}
                
                </Fragment>
              ))}


              <p id="top"></p>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default SingleBlog;
