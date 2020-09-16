import React, { useEffect } from "react"

import photo from "../../assets/img/bio/about-me.png"
import education from "../../assets/img/bio/education.png"
import skills from "../../assets/img/bio/skills.png"
import work from "../../assets/img/bio/work.png"
import contacts from "../../assets/img/bio/contacts.png"

const Bio = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="background">
            <div className="wrapper">
                <div className="bio_wrapper">

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h2>
                                    Про мене
                                </h2>
                            </div>
                        </div>
                        <div className="bio_info">
                            <img 
                                className="bio_photo" 
                                src={photo} 
                                alt="Me" 
                            />
                            <div className="bio_text">
                                <p className="text">
                                    Привіт. Мене звати Тарас. Мені 23 роки. Проживаю недалеко від Івано-Франківська. 
                                    Вперше зустрівся з веб-програмуванням літом 2019 року, а вже самостійно почав вивчати 
                                    Front-end з січня 2020 року. В даному напрямі знайшов себе і бажаю в подальшому 
                                    рости та розвивати свої навики саме в цій сфері.
                                </p>
                                <p className="text">
                                    В даний момент позиціоную себе як Junior. Хотілося б знайти роботу за даним 
                                    напрямком і досягнути рівня Senior. Готовий навчатися новому і удосконалювати знання
                                    в уже вивченому.
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h2>
                                    Освіта
                                </h2>
                            </div>
                        </div>
                        <div className="bio_info">
                            <div className="bio_text">
                                <p className="text">
                                    В 2014 році почав навчання на бакалавра у Івано-Франківський національний технічний університет нафти і газу 
                                    за спеціальність "Автомобільний транспорт".
                                </p>
                                <p className="text">
                                    В 2018 році продовжив навчання на цьому ж напрямі за освітнім ступенем магістра. Успішно
                                    завершив його з червоним дипломом під кінець 2019 року.
                                </p>
                            </div>
                            <img 
                                className="bio_photo" 
                                src={education} 
                                alt="Education" 
                            />
                        </div>
                    </div>

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h2>
                                    Додаткові навички
                                </h2>
                            </div>
                        </div>
                        <div className="bio_info">
                            <img 
                                className="bio_photo" 
                                src={skills} 
                                alt="Me" 
                            />
                            <div className="bio_text">
                                <p className="text">
                                    Впевнений користувач ПК. Маю навички роботи з Adobe Photoshop, Figma, Word, Exel, 
                                    Google Sheets.
                                </p>
                                <p className="text">
                                    Проходив курс веб-дизайну в Adobe Photoshop. Тривалість - 3 місяці.
                                </p>
                                <p className="text">
                                    Проходив курс 3D дизайну в 3Ds Max. Тривалість - 1 місяць.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h2>
                                    Досвід роботи
                                </h2>
                            </div>
                        </div>
                        <div className="bio_info">
                            <p className="bio_text">
                                Досвіду роботи ще немає.
                            </p>
                            <img 
                                className="bio_photo" 
                                src={work} 
                                alt="Work" 
                            />
                        </div>
                    </div>

                    <div className="bio_container">
                        <div className="bio_container_header">
                            <div className="bio_header">
                                <h2>
                                    Контакти
                                </h2>
                            </div>
                        </div>
                        <div className="bio_info">
                            <img 
                                className="bio_photo" 
                                src={contacts} 
                                alt="Contacts" 
                            />
                            <div className="contact_list">
                                <div className="contact_item">
                                    <a 
                                        className="contact_link email" 
                                        href="mailto:kabandis97@gmail.com"
                                    >
                                        kabandis97@gmail.com
                                    </a>
                                </div>
                                <div className="contact_item">
                                    <a 
                                        className="contact_link phone" 
                                        href="tel:+0958215333"
                                    >
                                        +0958215333
                                    </a> 
                                </div>
                                <div className="contact_item">
                                    <a 
                                        className="contact_link skype" 
                                        href="skype:live:.cid.e5dec8e0d2508890?call"
                                    >
                                        Лисенко Тарас
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Bio