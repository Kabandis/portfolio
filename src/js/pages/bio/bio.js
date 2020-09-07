import React from "react"

import photo from "../../../assets/img/bio/about_me.png"
import education from "../../../assets/img/bio/education.png"
import skills from "../../../assets/img/bio/skills.png"
import work from "../../../assets/img/bio/work.png"
import contacts from "../../../assets/img/bio/contacts.png"
import email from "../../../assets/img/bio/mail.png"
import phone from "../../../assets/img/bio/telephone.png"

const Bio = () => {
    return (
        <div className="background">
            <div className="wrapper">
                <div className="bio_wrapper">
                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h1>
                                    Про мене
                                </h1>
                            </div>
                        </div>
                        <div className="bio_info">
                            <img className="bio_photo" src={photo} alt="Me" />
                            <p className="bio_text">
                                &emsp; Привіт. Мене звати Тарас. Мені 23 роки. Проживаю недалеко від Івано-Франківська. 
                                Вперше зустрівся з веб-програмуванням літом 2019 року, а вже самостійно почав вивчати 
                                Front-end з січня 2020 року. В даному напрямі знайшов себе і бажаю в подальшому 
                                рости та розвивати свої навики саме в цій сфері.<br />
                                &emsp; В даний момент позиціоную себе як Junior. Хотілося б знайти роботу за даним 
                                напрямком і досягнути рівня Senior. Готовий навчатися новому і удосконалювати знання
                                в уже вивченому.
                            </p>
                        </div>
                    </div>

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h1>
                                    Освіта
                                </h1>
                            </div>
                        </div>
                        <div className="bio_info">
                            <p className="bio_text">
                                &emsp;В 2014 році почав навчання на бакалавра у Івано-Франківський національний технічний університет нафти і газу 
                                за спеціальність "Автомобільний транспорт".<br />
                                &emsp;В 2018 році продовжив навчання на цьому ж напрямі за освітнім ступенем магістра. Успішно
                                завершив його з червоним дипломом під кінець 2019 року.
                            </p>
                            <img className="bio_photo" src={education} alt="Education" />
                        </div>
                    </div>

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h1>
                                    Додаткові навички
                                </h1>
                            </div>
                        </div>
                        <div className="bio_info">
                            <img className="bio_photo" src={skills} alt="Me" />
                            <p className="bio_text">
                                &emsp; Впевнений користувач ПК. Маю навички роботи з Adobe Photoshop, Figma, Word, Exel, 
                                Google Sheets.<br />
                                &emsp; Проходив курс веб-дизайну в Adobe Photoshop. Тривалість - 3 місяці.<br />
                                &emsp; Проходив курс 3D дизайну в 3Ds Max. Тривалість - 1 місяць.
                            </p>
                        </div>
                    </div>

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h1>
                                    Досвід роботи
                                </h1>
                            </div>
                        </div>
                        <div className="bio_info">
                            <p className="bio_text">
                                &emsp;Досвіду роботи ще немає.
                            </p>
                            <img className="bio_photo" src={work} alt="Education" />
                        </div>
                    </div>

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h1>
                                    Контакти
                                </h1>
                            </div>
                        </div>
                        <div className="bio_info">
                            <img className="bio_photo" src={contacts} alt="Me" />
                            <p className="bio_text">
                                &emsp; <img className="contacts" src={email} alt="email" /> kabandis97@gmail.com
                                &emsp; <img className="contacts" src={phone} alt="phone" /> +0958215333
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio