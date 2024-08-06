import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/project.css";
import data from "../data.json";
import DETAIL from "./Detail.js";

function Project(pdata) {
  const [wList, setwList] = useState([]);
  const pList = useRef();
  const [projectdata, setprojectdata] = useState(0);

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = (e) => {
    // console.log(pList.current.children);
    pList.current.style.filter = "blur(20px)";

    if (showPopup === false) {
      setShowPopup(true);
      document.body.style = "overflow:hidden;";
    } else {
      setShowPopup(false);
      pList.current.style.filter = "";
      document.body.style = "overflow:auto;";
    }
  };

  const click = (e) => {
    // console.log(e.target);
    // console.log(e)
    setprojectdata(e);
  };
  AOS.init({
    once: true,
    duration: 1000,
  });

  useEffect(() => {
    setwList(data.work);
  });

  return (
    <>
      <div className="project">
        <div className="project-title">
          <h2>PROJECT</h2>
        </div>

        <div className="project_section" value="false" onClick={togglePopup}>
          {showPopup ? (
            <div className="popup">
              <div className="popup_inner">
                {/* <button className="close" >
                                    X
                                </button> */}
                {<DETAIL pdata={projectdata} />}
              </div>
            </div>
          ) : null}

          <div className="project_list">
            <ul className="project_ul" ref={pList}>
              {wList?.map(function (v, k) {
                return (
                  <li
                    className="project_li"
                    key={k}
                    data-num={k}
                    data-aos={v.dataaos}
                    onClick={() => {
                      click(k);
                    }}
                  >
                    <img className="project_section_img" src={v.img} />
                    <figcaption>
                      <div className="title_section">
                        <h3 className="title1">{v.title1}</h3>
                        <h3 className="title2">{v.title2}</h3>
                      </div>
                      <div className="title_section2">
                        <h2 className="title3">{v.title2}</h2>
                      </div>
                    </figcaption>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <footer>
        <div className="contact" data-aos="fade-up">
          <h2>CONTACT</h2>
          <div className="contact_line">
            <p className="p1">
              <span className="highlight1">
                {" "}
                E-MAIL : robins2424@kakao.com{" "}
              </span>{" "}
              <br />{" "}
            </p>
            <p className="p2">
              <span className="highlight2">
                {" "}
                Github : robins2424@kakao.com{" "}
              </span>{" "}
              <br />{" "}
            </p>
            <p className="p3">
              <span className="highlight3"> Phone : 010 - 9173 - 9021 </span>{" "}
              <br />{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Project;
