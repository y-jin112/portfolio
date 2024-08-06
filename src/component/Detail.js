import data from "../data.json";
import "../css/detail.scss";
import React, { useRef, useState, useEffect } from "react";

function Detail(props) {
  const [wList, setwList] = useState([]);
  // console.log(wList)
  useEffect(() => {
    setwList(data.work[props.pdata]);
  });

  return (
    <>
      <div className="p_section">
        <div className="wrap" data-aos="fade-up" data-aos-duration="2000">
          <img className="detail_img" src={wList.img2} />
          <div className="title">{wList.title2}</div>

          <div className="sub_section">
            <div className="date">
              <p>제작기간</p> <p>{wList.date}</p>
            </div>

            <div className="contribution">
              <p>제작 기여도</p> <p>{wList.contribution}</p>
            </div>
            <div className="skillimg">
              <p className="useskill">use skill</p>
              <img src={wList.useskill}></img>
              <img src={wList.useskill2}></img>
              <img src={wList.useskill3}></img>
              <img src={wList.useskill4}></img>
            </div>
            <div className="avatar">
              <p>{wList.avatar}</p>
              <p>{wList.avatar2}</p>
              <p>{wList.avatar3}</p>
            </div>
            <div className="adress">
              <a className="website" href={wList.adress} target="_blank">
                {" "}
                Go website{" "}
              </a>
            </div>
            {/* <div className="github_adress">
              <a href="https://github.com/y-jin112">
                <img src={wList.github}></img>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail;
