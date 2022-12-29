import React, { Component } from 'react';
// import Slider from './sliders';


class SliderIndex extends Component {
    render() {
        return (
            <section className="slider slider-total">
                <div className="slider__container container">
                    <img src={require("../assets/chevron-left-regular-24.png")} className="slider__arrow" id="before" alt="" />
                    <section className="slider__body slider__body--show" data-id="1">
                        <div className="slider__texts">
                            <h2 className="subtitle">Jonathan Avilez</h2>
                            <p className="slider__review">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quam expedita, dolorem aspernatur
                                ipsum deleniti ab sed recusandae rem ratione nemo accusantium quod possimus, sit nesciunt porro
                                officia saepe illum.
                            </p>
                        </div>
                        <figure className="slider__picture">
                            <img src={require("../assets/jona.jpeg")} className="slider__img" alt="Foto de Jonathan Avilez" />
                            <div>
                                <a href="https://www.linkedin.com/in/jonathan-avilez-229137258/img src="><img
                                    src={require("../assets/linkedin-icon.png")} alt="linkedin" className="linkedin" /></a>
                                <a href="https://github.com/joonaAaa"><img src={require("../assets/github-icon.png")}
                                    alt="github-logo" className="github" /></a>
                            </div>
                        </figure>

                    </section>

                    <section className="slider__body" data-id="2">
                        <div className="slider__texts">
                            <h2 className="subtitle">Atenas Pérez</h2>
                            <p className="slider__review">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quam expedita, dolorem aspernatur
                                ipsum deleniti ab sed recusandae rem ratione nemo accusantium quod possimus, sit nesciunt porro
                                officia saepe illum.
                            </p>
                        </div>
                        <figure className="slider__picture">
                            <img src={require("../assets/atenas.jfif")} className="slider__img" alt="Foto de Atenas Pérez" />
                        </figure>
                    </section>


                    <section className="slider__body" data-id="3">
                        <div className="slider__texts">
                            <h2 className="subtitle">Camilo Rivera</h2>
                            <p className="slider__review">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quam expedita, dolorem aspernatur
                                ipsum deleniti ab sed recusandae rem ratione nemo accusantium quod possimus, sit nesciunt porro
                                officia saepe illum.
                            </p>
                        </div>
                        <figure className="slider__picture">
                            <img src={require("../assets/camilo.jpeg")} className="slider__img" alt="Foto de Camilo Rivera" />
                        </figure>
                    </section>


                    <section className="slider__body" data-id="4">
                        <div className="slider__texts">
                            <h2 className="subtitle">Luisa Morales</h2>
                            <p className="slider__review">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quam expedita, dolorem aspernatur
                                ipsum deleniti ab sed recusandae rem ratione nemo accusantium quod possimus, sit nesciunt porro
                                officia saepe illum.
                            </p>
                        </div>
                        <figure className="slider__picture">
                            <img src={require("../assets/luisa.jfif")} className="slider__img" alt="Foto de Luisa Morales" />
                        </figure>
                    </section>
                    <img src={require("../assets/chevron-right-regular-24.png")} className="slider__arrow prueba-slider" id="next" alt="" />
                </div>
                {/* <script><Slider/></script> */}
            </section>
        );
    }
}

export default SliderIndex;