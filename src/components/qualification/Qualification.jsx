import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
          "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Engineer IT</h3>
                <span className="qualification__subtitle">France - Sup Galilée</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">France - Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">France - Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
          "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Backend Developer</h3>
                <span className="qualification__subtitle">France - GRTgaz</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> February 2022 -  September 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">France - GRTgaz</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> November 2020 - January 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">France - Warren Walter</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> August 2020 - September 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
