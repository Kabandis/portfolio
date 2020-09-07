import React from "react"
import Carousel from 'react-bootstrap/Carousel'

import html from "../../../assets/img/skills/html5.png";
import css from "../../../assets/img/skills/css3.png";
import js from "../../../assets/img/skills/js.png";
import react from "../../../assets/img/skills/react.png";
import bootstrap from "../../../assets/img/skills/bootstrap.png";
import reactBootstrap from "../../../assets/img/skills/react-bootstrap.png";
import yarn from "../../../assets/img/skills/yarn.png";
import npm from "../../../assets/img/skills/npm.png";
import sass from "../../../assets/img/skills/sass.png";
import webpack from "../../../assets/img/skills/webpack.png";
import git from "../../../assets/img/skills/git.png";

const Skills = () => {
    return (
        <div className="wrapper">
            <div className="skills_wrapper">
                <div className="skills_container">
                    <div className="skills_list">
                        <h1 className="skills_header">Основне</h1>
                        <Carousel 
                            interval={2000} 
                            slide={true}
                            indicators={false}
                            pause="hover"
                        >
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={html}
                                        alt="1 slide"
                                    />
                                    <div className="carousel_text" >
                                        <h3>HTML5</h3>
                                        <p className="carousel_text_desc">
                                            Основи HTML та HTML5<br/>
                                            Прикладний візуальний дизайн<br/>
                                            Прикладна доступність<br/>
                                            Принципи адаптивного веб-дизайну<br/>
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={css}
                                        alt="2 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>CSS3</h3>
                                        <p className="carousel_text_desc">
                                            Основи CSS<br/>
                                            Медіа-запити<br/>
                                            Анімація<br/>
                                            CSS Flexbox<br/>
                                            CSS Grid<br/>
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={js}
                                        alt="3 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>JavaScript</h3>
                                        <p className="carousel_text_desc">
                                            Основи JavaScript<br/>
                                            ES6<br/>
                                            Регулярні вирази<br/>
                                            Дебагінг<br/>
                                            Базову структури даних<br/>
                                            Базове написання алгоритмів<br/>
                                            Об'єктно-орієнтоване програмування<br/>
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <h1 className="skills_header">Фреймворки</h1>
                        <Carousel 
                            interval={2000} 
                            slide={true}
                            indicators={false}
                            pause="hover"
                        >
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={react}
                                        alt="4 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>React</h3>
                                        <p className="carousel_text_desc">
                                            Основи React<br />
                                            Робота з JSX<br />
                                            React Hooks<br />
                                            Redux<br />
                                            Роути<br />
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <h1 className="skills_header">Бібліотеки</h1>
                        <Carousel 
                            interval={2000} 
                            slide={true}
                            indicators={false}
                            pause="hover"
                        >
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={bootstrap}
                                        alt="1 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>Bootstrap</h3>
                                        <p className="carousel_text_desc">
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={reactBootstrap}
                                        alt="2 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>React Bootstrap</h3>
                                        <p className="carousel_text_desc">
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <h1 className="skills_header">Менеджери пакетів</h1>
                        <Carousel 
                            interval={2000} 
                            slide={true}
                            indicators={false}
                            pause="hover"
                        >
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={npm}
                                        alt="1 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>Npm</h3>
                                        <p className="carousel_text_desc"></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={yarn}
                                        alt="2 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>Yarn</h3>
                                        <p className="carousel_text_desc"></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        
                        <h1 className="skills_header">Інше</h1>
                        <Carousel 
                            interval={2000} 
                            slide={true}
                            indicators={false}
                            pause="hover"
                        >
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={sass}
                                        alt="1 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>Sass</h3>
                                        <p className="carousel_text_desc"></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={webpack}
                                        alt="2 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>Webpack</h3>
                                        <p className="carousel_text_desc"></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="block_skill">
                                    <img
                                        className="skills_img"
                                        src={git}
                                        alt="2 slide"
                                    />
                                    <div className="carousel_text">
                                        <h3>Git</h3>
                                        <p className="carousel_text_desc"></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills