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
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li className="footer__list">
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li className="footer__list">
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li className="footer__list">
                    <a href="#certifications" className="footer__link">Certifications</a>
                </li>
            
        
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/boris-tibago-b88879185/" className="footer__social-link" target="_blank" rel='noreferrer'>
                <i class='bx bxl-linkedin' ></i> <span hidden>linkedin</span>
            </a>

            <a href="https://twitter.com/boher_bago" className="footer__social-link" target="_blank" rel='noreferrer'>
                <i className="bx bxl-twitter"></i> <span hidden>twitter</span>
            </a>

            <a href="https://github.com/bagobob" className="footer__social-link" target="_blank" rel='noreferrer'>
                <i className="bx bxl-github"></i> <span hidden>github</span>
            </a>
            </div>
            <span className="footer__copy">&#169; boristibago. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer