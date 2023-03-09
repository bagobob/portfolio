import React from 'react';
import "./scrollUp.css";

const ScrollUp = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollUp");
        // when the scroll is higher than 560 viewport height, add the
        // show-scroll class to a tag with the scroll-top class
        if(this.scrollY > 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })
  return (
    <span  className="scrollUp">
        <i className="uil uil-arrow-up scrollUp__icon"></i>
    </span>
  )
}

export default ScrollUp