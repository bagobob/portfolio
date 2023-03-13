import { useState } from "react";
import "./service.css";

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Frontend <br /> Developer </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More<i className="uil
                uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Frontend Developer</h3>
                        <p className="services__modal-description">
                        With 2 years of experience, I have carried out projects in companies and on a personal basis
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I develop web pages.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I develop web components.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Use React JS, Stencil JS, Next JS or Tailwind.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Use Visual Studio Code or Webstorm.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    {/* <i className="uil uil-arrow services__icon"></i> */}
                    <i class="uil uil-brackets-curly services__icon"></i>
                    <h3 className="services__title">Backend <br /> Developer </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil
                uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Backend Developer</h3>
                        <p className="services__modal-description">
                        Several projects realized in company and several personal projects.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I develop REST APIs.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Use Node JS, Python or Motoko.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I develop back end applications on Web2 and Web3.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Use SQL or NoSQL.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    
                    <i class="uil uil-cloud services__icon"></i>
                    <h3 className="services__title">DevOps & Cloud<br /> Engineer </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil
                uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">DevOps & Cloud Engineer</h3>
                        <p className="services__modal-description">
                        I have 6 months of experience on the AWS cloud in a company and I continue to train through several courses
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I deploy applications in the cloud.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Implement Full CI/CD pipeline
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Use Docker, Jenkins, Kubernetes, Terraform and Git.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I Use AWS and Azure.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Services