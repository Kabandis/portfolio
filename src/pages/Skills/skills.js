import React, { useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel'

import html from "../../assets/img/skills/html5.png";
import css from "../../assets/img/skills/css3.png";
import js from "../../assets/img/skills/js.png";
import react from "../../assets/img/skills/react.png";
import bootstrap from "../../assets/img/skills/bootstrap.png";
import reactBootstrap from "../../assets/img/skills/react-bootstrap.png";
import yarn from "../../assets/img/skills/yarn.png";
import npm from "../../assets/img/skills/npm.png";
import sass from "../../assets/img/skills/sass.png";
import webpack from "../../assets/img/skills/webpack.png";
import git from "../../assets/img/skills/git.png";

const Skills = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="wrapper">
            <div className="skills_wrapper">
                <div className="skills_container">
                    <div className="skills_list">
                        <h2 className="skills_header">Основне</h2>
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
                                        <p>Основи HTML та HTML5</p>
                                        <p>Прикладний візуальний дизайн</p>
                                        <p>Прикладна доступність</p>
                                        <p>Принципи адаптивного веб-дизайну</p>
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
                                        <p>Основи CSS</p>
                                        <p>Медіа-запити</p>
                                        <p>Анімація</p>
                                        <p>CSS Flexbox</p>
                                        <p>CSS Grid</p>
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
                                        <p>Основи JavaScript</p>
                                        <p>ES6</p>
                                        <p>Регулярні вирази</p>
                                        <p>Дебагінг</p>
                                        <p>Базову структури даних</p>
                                        <p>Базове написання алгоритмів</p>
                                        <p>Об'єктно-орієнтоване програмування</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <h2 className="skills_header">Фреймворки</h2>
                        <Carousel 
                            interval={2000} 
                            slide={true}
                            indicators={false}
                            pause="hover"
                            controls={false}
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
                                        <p>Основи React</p>
                                        <p>Робота з JSX</p>
                                        <p>React Hooks</p>
                                        <p>Redux</p>
                                        <p>Роути</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <h2 className="skills_header">Бібліотеки</h2>
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
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <h2 id="skill" className="skills_header">Менеджери пакетів</h2>
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
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        
                        <h2 className="skills_header">Інше</h2>
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