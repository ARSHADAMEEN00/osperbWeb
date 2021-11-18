import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./animation.css";

function LohaLogo() {
  const [show, setShow] = useState(false);
  if (setShow) {
  }

  const [variant, setVariant] = useState({
    hidden: {
      opacity: 0,
      x: -50,
      y: 100,
      color: "#111",
      border: "none",
    },
    visible: {
      border: "0px solid #333",
      color: "#fff",
      background: "#fff",
      borderRadius: "10%",
      opacity: 1,
      zIndex: 20,
      height: "31px",
      width: "30px",

      scale: 1,
      x: 0,
      y: 0,

      transition: {
        type: "spring",
        mass: 5,
        stiffness: 150,
        damping: 35,
        ease: "easeInOut",
      },
    },
    hover: {},
  });

  useEffect(() => {
    let myScroll = () => {
      if (window.scrollY >= 0 && window.scrollY < 36) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x:
                document.querySelector(".layamer_logo img")?.offsetLeft +
                  document.querySelector(".layamer_logo img")?.offsetWidth /
                    5.8 || 0,
              y:
                document.querySelector(".layamer_logo img")?.offsetTop +
                  document.querySelector(".layamer_logo img")?.offsetWidth *
                    0.92 || 0,

              width: 30,
              height: 31,
              zIndex: 26,
              borderRadius: "40%",
              scale: 1,
              border: "8px solid #a83a32",
              background: "#FFFFFF",
              opacity: 1,
            },
            constrain: {
              left: 10,
              right: 32,
              top: 20,

              bottom: 20,
            },
          };
        });
      }
      if (window.scrollY === 36.3636360168457) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              // x: document.querySelector('.layamer_logo img')?.offsetLeft + document.querySelector('.layamer_logo img')?.offsetWidth / 5.8 || 0,
              // y: document.querySelector('.layamer_logo img')?.offsetTop + document.querySelector('.layamer_logo img')?.offsetWidth * 0.92 || 0,
              // x: 109.7931,
              // y: 150.6,
              x:
                document.querySelector(".layamer_logo img")?.offsetLeft +
                  document.querySelector(".layamer_logo img")?.offsetWidth /
                    2 || 0,
              y:
                document.querySelector(".layamer_logo img")?.offsetTop +
                  document.querySelector(".layamer_logo img")?.offsetWidth *
                    1.8 || 0,
              width: 30,
              height: 31,
              zIndex: 26,
              borderRadius: "40%",
              scale: 1,
              border: "8px solid #a83a32",
              background: "#FFFFFF",
              opacity: 1,
            },
          };
        });
      } else if (window.scrollY > 39 && window.scrollY < 80) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: 180,
              y: 240,
              width: 30,
              height: 30,
              borderRadius: "40%",
              opacity: 0.7,
              scale: 1,
              border: "0px solid #fff",
              background: "#a83a32",
              zIndex: -10,
            },
          };
        });
      } else if (window.scrollY > 79 && window.scrollY < 100) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: 250,
              y: 300,
              width: 30,
              height: 30,
              borderRadius: "40%",
              opacity: 0.4,
              scale: 8,
              border: "0px solid #fff",
              background: "#a83a32",
              zIndex: -10,
            },
          };
        });
      } else if (window.scrollY > 99 && window.scrollY < 200) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              // x: 320,
              // y: 480,
              x:
                document.querySelector(".hero_text ")?.offsetLeft +
                  document.querySelector(".hero_text ")?.offsetWidth * 0.6 || 0,
              y:
                document.querySelector(".hero_text ")?.offsetTop +
                  document.querySelector(".hero_text ")?.offsetWidth * 0.5 || 0,
              width: 30,
              height: 30,
              borderRadius: "40%",
              opacity: 0.3,
              border: "0px solid #fff",
              scale: 6,
              background: "#a83a32",
              zIndex: -10,
            },
          };
        });
      } else if (window.scrollY > 199 && window.scrollY < 250) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: 320,
              y: 580,
              width: 30,
              height: 30,
              borderRadius: "40%",
              opacity: 0.3,
              scale: 5,
              border: "0px solid #fff",
              background: "#a83a32",
              zIndex: 20,
            },
          };
        });
      } else if (window.scrollY > 249 && window.scrollY < 300) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: 320,
              y: 680,
              width: 30,
              height: 30,
              borderRadius: "40%",
              opacity: 0.3,
              scale: 4,
              border: "0px solid #fff",
              background: "#a83a32",
              zIndex: 20,
            },
          };
        });
      } else if (window.scrollY > 299 && window.scrollY < 350) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: 320,
              y: 780,
              width: 30,
              height: 30,
              borderRadius: "40%",
              opacity: 0.4,
              scale: 4,
              background: "#a83a32",
              border: "0px solid #fff",
              zIndex: 20,
            },
          };
        });
      } else if (window.scrollY > 349 && window.scrollY < 650) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x:
                document.querySelector(".hidden_o")?.offsetLeft +
                  document.querySelector(".hidden_o")?.offsetWidth / 2.7 || 0,
              y:
                document.querySelector(".hidden_o")?.offsetTop +
                  document.querySelector(".hidden_o")?.offsetHeight -
                  5 || 0,
              // height: 28,
              // width: 25,
              height: document.querySelector(".hidden_o")?.offsetHeight / 6.3,
              width: document.querySelector(".hidden_o")?.offsetWidth / 6,
              borderRadius: "35%",
              opacity: 1,
              scale: 4.3,
              background: "#fff",
              border: "6px solid #b62e28",
              zIndex: 20,
            },
          };
        });
      } else if (window.scrollY > 779 && window.scrollY < 1050) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: 280,
              y: 1200,
              width: 30,
              height: 30,
              borderRadius: "40%",
              opacity: 0.3,
              scale: 4,
              background: "#a83a32",
              border: "0px solid #fff",
              zIndex: 20,
            },
          };
        });
      } else if (window.scrollY > 1049 && window.scrollY < 1150) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,

              x: document.querySelector(".circle_btn")?.offsetLeft || 0,
              y:
                document.querySelector(".circle_btn")?.offsetTop +
                  document.querySelector(".circle_btn")?.offsetHeight * 2.8 ||
                0,
              width: document.querySelector(".circle_door")?.offsetWidth,
              height: document.querySelector(".circle_door")?.offsetHeight,
              borderRadius: "50%",
              opacity: 0.5,
              scale: 1,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: -10,
            },
          };
        });
      } else if (window.scrollY > 1200 && window.scrollY < 1300) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,

              x: document.querySelector(".circle_btn")?.offsetLeft || 0,
              y:
                document.querySelector(".circle_btn")?.offsetTop +
                  document.querySelector(".circle_btn")?.offsetHeight * 2.8 ||
                0,
              width: document.querySelector(".circle_door")?.offsetWidth,
              height: document.querySelector(".circle_door")?.offsetHeight,
              borderRadius: "50%",
              opacity: 0.5,
              scale: 1,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: -10,
            },
          };
        });
      } else if (window.scrollY > 1300 && window.scrollY < 1400) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: 260,
              y: 1650,
              width: 30,
              height: 30,
              borderRadius: "40%",
              opacity: 0.2,
              scale: 2,
              background: "#a83a32",
              border: "0px solid #fff",
              zIndex: 20,
            },
          };
        });
      } else if (window.scrollY > 1400 && window.scrollY < 1500) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,

              x: document.querySelector(".item.two")?.offsetWidth / 1.5,
              y: document.querySelector(".item.two").offsetTop + 60,
              width: document.querySelector(".circle_door")?.offsetWidth,
              height: document.querySelector(".circle_door")?.offsetHeight,
              borderRadius: "40%",
              opacity: 0.2,
              scale: 2,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: 20,
            },
          };
        });
      } else if (window.scrollY > 1500 && window.scrollY < 1600) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,

              x: document.querySelector(".item.two")?.offsetWidth / 1.5,
              y: document.querySelector(".item.two").offsetTop * 1.13,
              width: document.querySelector(".circle_door")?.offsetWidth,
              height: document.querySelector(".circle_door")?.offsetHeight,
              borderRadius: "40%",
              opacity: 0.2,
              scale: 3,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: 20,
            },
          };
        });
      } else if (window.scrollY > 1600 && window.scrollY < 1700) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              // x: 280,
              // y: 2050,
              x: document.querySelector(".circle_btn_two")?.offsetLeft,
              y:
                document.querySelector(".circle_btn_two")?.offsetTop +
                document.querySelector(".circle_btn_two")?.offsetHeight * 2.8,
              width: document.querySelector(".circle_door")?.offsetWidth,
              height: document.querySelector(".circle_door")?.offsetHeight,
              borderRadius: "50%",
              opacity: 0.5,
              scale: 1,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: -10,
            },
          };
        });
      } else if (window.scrollY > 1700 && window.scrollY < 1800) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              // x: 280,
              // y: 2050,
              x: document.querySelector(".circle_btn_two")?.offsetLeft,
              y:
                document.querySelector(".circle_btn_two")?.offsetTop +
                document.querySelector(".circle_btn_two")?.offsetHeight * 2.8,
              width: document.querySelector(".circle_door")?.offsetWidth,
              height: document.querySelector(".circle_door")?.offsetHeight,
              borderRadius: "50%",
              opacity: 0.5,
              scale: 1,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: -10,
            },
          };
        });
      } else if (window.scrollY > 1800 && window.scrollY < 1900) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              // x: 280,
              // y: 2050,
              x: document.querySelector(".circle_btn_two")?.offsetLeft,
              y:
                document.querySelector(".circle_btn_two")?.offsetTop +
                document.querySelector(".circle_btn_two")?.offsetHeight * 4,
              width: document.querySelector(".circle_door")?.offsetWidth,
              height: document.querySelector(".circle_door")?.offsetHeight,
              borderRadius: "50%",
              opacity: 0.5,
              scale: 1,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: -10,
            },
          };
        });
      } else if (window.scrollY > 1900 && window.scrollY < 2100) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: document.querySelector(".details_card")?.offsetLeft,
              y:
                document.querySelector(".details_card")?.offsetTop +
                document.querySelector(".details_card")?.offsetHeight * 0.229,
              // x: document.querySelector(".dt_card_content")?.offsetLeft,
              // y:
              //   document.querySelector(".dt_card_content")?.offsetTop +
              //   document.querySelector(".dt_card_content")?.offsetHeight * 2.8,
              width: document.querySelector(".security_box")?.offsetWidth - 50,
              height:
                document.querySelector(".security_box")?.offsetHeight -
                document.querySelector(".security_box")?.offsetHeight / 6,
              borderRadius: "50px",
              opacity: 1,
              scale: 1,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: 0,
            },
          };
        });
      } else if (window.scrollY > 2200) {
        setVariant((variant) => {
          return {
            ...variant,
            visible: {
              ...variant.visible,
              x: document.querySelector(".details_card")?.offsetLeft,
              y:
                document.querySelector(".details_card")?.offsetTop +
                document.querySelector(".details_card")?.offsetHeight * 0.229,
              // x: document.querySelector(".dt_card_content")?.offsetLeft,
              // y:
              //   document.querySelector(".dt_card_content")?.offsetTop +
              //   document.querySelector(".dt_card_content")?.offsetHeight * 2.8,
              width: document.querySelector(".security_box")?.offsetWidth - 50,
              height:
                document.querySelector(".security_box")?.offsetHeight -
                document.querySelector(".security_box")?.offsetHeight / 6,
              borderRadius: "50px",
              opacity: 1,
              scale: 1,
              background: "#082442",
              border: "0px solid #fff",
              zIndex: 0,
            },
          };
        });
      }
    };
    window.addEventListener("scroll", myScroll);

    return () => {
      window.removeEventListener("scroll", myScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`ball ${show && "active"} `}
        variants={variant}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        dragConstraints={{
          left: 10,
          right: 320,
          top: 200,
          bottom: 2000,
        }}
        drag
        dragElastic={1}
        whileDrag={{
          scale: 3.2,
          opacity: 0.8,
        }}
        delay={0}
      ></motion.div>
    </>
  );
}

export default LohaLogo;
