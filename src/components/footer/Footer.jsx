import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Tibago</h1>
            <ul className="footer__list">
                <li className="footer__list">
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li className="footer__list">
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li className="footer__list">
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>

                <li className="footer__list">
                    <a href="" className="footer__link">About</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/" className="footer__social-link" target="_blank">
                <i class='bx bxl-linkedin' ></i>
            </a>

            <a href="https://twitter.com/" className="footer__social-link" target="_blank">
                <i className="bx bxl-twitter"></i>
            </a>

            <a href="https://github.com/" className="footer__social-link" target="_blank">
                <i className="bx bxl-github"></i>
            </a>
            </div>
            <span className="footer__copy">&#169; FreeThinker. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer