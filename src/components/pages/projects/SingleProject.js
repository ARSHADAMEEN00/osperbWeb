import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import MetaData from "../../layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import {
  getProjects,
} from "../../../actions/projectActions";

import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";

import Modal from "react-modal";
import Loader from "../../layout/Loader";
import { Fragment } from "react";

const customStyles = {
  content: {
    width: "70%",
    top: "50%",
    left: "50%",
    height: "80vh",
    marginTop: "2rem",
    transform: "translate(-50%, -50%)",
  },
};

const SingleProject = ({ history }) => {
  const [modalIsOpen, setIsOpen] = useState("close");


  function openModal(projectKey) {
    setIsOpen(projectKey);
  }

  function closeModal() {
    setIsOpen("close");

  }

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.products);

  const { projects } = useSelector((state) => state.projects);

  const { loading } = useSelector((state) => state.projectDetails);

  useEffect(() => {
    dispatch(getProjects());

    if (error) {
      return alert.error(error);
    }
  }, [dispatch, alert, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="projects" />
          <NavBar BrownTheme />

          <section className="product__scarf" id="project_modal">
            <section className="mail_section alptd flex">
              <img
                alt="Heavy duty mezzanine storage shelvings in warehouse"
                src="/images/Loha/steel-doors-and-windows.jpg"
                style={{
                  objectPosition: "center"
                }}
              />

              <div className="fade__bg fade__bg_product">
                <label htmlFor="">
                  <h4>Projects</h4>
                </label>
              </div>
            </section>
            <div className="product_list">
              {/* product cards section start */}
              <section className="scraf__section" id="project_section">
                <div className="card__contianer center_align">
                  <div className="row col-lg-12">
                    {projects?.map((project, index) => (
                      <Fragment key={index}>
                        <div className="project_slider" >
                          <div className="project_img">
                            <div  
                           onClick={()=>openModal(index)}
                            >
                              <img
                                src={`${process.env.REACT_APP_BASE_URL}${project.images[0].url}`}
                                alt={project.name}
                              />
                            </div>
                            <div className="img_title">
                              <h1
                                onClick={()=>openModal(index)}
                                className="project_titlnew"
                              >
                                {project.title}
                              </h1>
                              <p>{project.description.substr(0, 100)}</p>

                              <span
                                onClick={()=>openModal(index)}
                                className=" btn button_text_door readMoreBtn"
                              >
                                Read more
                              </span>
                            </div>
                          </div>
                        </div>

                        <Modal
                          isOpen={modalIsOpen === index ? true : false }
                          onRequestClose={closeModal}
                          style={customStyles}
                          ariaHideApp={false}

                        >
                          <div className="project_wrapperN">
                            <AiOutlineClose
                              className="clase_new"
                              onClick={closeModal}
                            />
                            <h1>{project.title}</h1>
                            <div className="project_new_img">
                              <img
                                src={`${process.env.REACT_APP_BASE_URL}${project.images[0]?.url}`}
                                alt={project.title}
                              />
                            </div>
                            <p>{project.description}</p>
                          </div>
                        </Modal>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </section>

              {/* product cards section end */}
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default SingleProject;
