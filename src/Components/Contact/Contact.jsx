import React, { useRef, useState } from 'react';
import './Contact.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        people: '',
        date: '',
        selectName: '',
        selectTitle: ''
    });

    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const peopleRef = useRef(null);
    const dateRef = useRef(null);
    const selectNameRef = useRef(null);
    const selectTitleRef = useRef(null);

    const sendTelegramMessage = (message) => {
        const token = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y';
        const chatId = '6771255129';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    };

    const handleSubmit = () => {
        const name = nameRef.current.value.trim();
        const phone = phoneRef.current.value.trim();
        const people = peopleRef.current.value.trim();
        const date = dateRef.current.value.trim();
        const selectName = selectNameRef.current.value;
        const selectTitle = selectTitleRef.current.value;

        if (name === '' || phone === '' || people === '' || date === '' || selectName === '' || selectTitle === '') {
            alert(t('fill-all-fields'));
            return;
        }

        const message = `Ism: ${name}\nTelefon: ${phone}\nOdamlar soni: ${people}\nSana: ${date}\nShahar/Davlat: ${selectName}\nDavlat/Shahar: ${selectTitle}`;
        sendTelegramMessage(message);
        alert(t('message-sent'));
        
        // Clear form inputs after submission
        setFormData({
            name: '',
            phone: '',
            people: '',
            date: '',
            selectName: '',
            selectTitle: ''
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="contact">
            <div className="container">
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.701620204455!2d-0.1253355847567295!3d51.50832098497764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a5d6d5e9a1f%3A0x4e8a9b1e0b2c7b6!2sLondon%20Eye!5e0!3m2!1sen!2sng!4v1662648200244!5m2!1sen!2sng"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: 5 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contact-info">
                    <h1 className='contact-title'>{t("contact-title")}</h1>
                    <ul className="contact-list">
                        <li className="contact-item">
                            <div className='contact-item-box'>
                                <div className='nimadir'>
                                    <label className='contact-label'>{t("label-name")} <br />
                                        <input
                                            className='contact-input'
                                            ref={nameRef}
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            type="text"
                                            placeholder={t("name")}
                                        />
                                    </label>
                                </div>
                                <div className='nimadir'>
                                    <label className='contact-label'>{t("label-phone")} <br />
                                        <input
                                            className='contact-input'
                                            ref={phoneRef}
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            type="tel"
                                            placeholder={t("phone")}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className='contact-item-box'>
                                <div className='nimadir'>
                                    <label className='contact-label'>{t("label-people")} <br />
                                        <input
                                            className='contact-input'
                                            ref={peopleRef}
                                            name="people"
                                            value={formData.people}
                                            onChange={handleInputChange}
                                            required
                                            type="number"
                                            placeholder={t("people")}
                                        />
                                    </label>
                                </div>
                                <div className='nimadir'>
                                    <label className='contact-label'>{t("label-data")} <br />
                                        <input
                                            className='contact-input'
                                            ref={dateRef}
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            required
                                            type='date'
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <label style={{
                        fontFamily: 'sans-serif',
                        fontSize: 18,
                        opacity: 0.5
                    }}>{t("select-name")} <br />
                        <select
                            ref={selectNameRef}
                            name="selectName"
                            value={formData.selectName}
                            onChange={handleInputChange}
                            required
                            style={{
                                fontFamily: 'sans-serif',
                                width: "100%",
                                fontSize: 18,
                                textAlign: "center",
                                padding: "13px 5px",
                                borderRadius: "50px"
                            }}
                        >
                            <option value={t("shahar4")}>{t("shahar4")}</option>
                            <option value={t("shahar")}>{t("shahar")}</option>
                            <option value={t("shahar5")}>{t("shahar5")}</option>
                            <option value={t("shahar6")}>{t("shahar6")}</option>
                            <option value={t("davlat")}>{t("davlat")}</option>
                            <option value={t("davlat4")}>{t("davlat4")}</option>
                            <option value={t("davlat5")}>{t("davlat5")}</option>
                            <option value={t("davlat6")}>{t("davlat6")}</option>
                        </select>
                    </label> <br /> <br />
                    <label style={{
                        fontFamily: 'sans-serif',
                        fontSize: 18,
                        opacity: 0.5
                    }}>
                        {t("select-title")} <br />
                        <select
                            ref={selectTitleRef}
                            name="selectTitle"
                            value={formData.selectTitle}
                            onChange={handleInputChange}
                            required
                            style={{
                                fontFamily: 'sans-serif',
                                width: "100%",
                                fontSize: 18,
                                textAlign: "center",
                                padding: "13px 5px",
                                borderRadius: "50px",
                            }}
                        >
                            <option value={t("davlat")}>{t("davlat")}</option>
                            <option value={t("davlat4")}>{t("davlat4")}</option>
                            <option value={t("davlat5")}>{t("davlat5")}</option>
                            <option value={t("davlat6")}>{t("davlat6")}</option>
                            <option value={t("shahar4")}>{t("shahar4")}</option>
                            <option value={t("shahar")}>{t("shahar")}</option>
                            <option value={t("shahar5")}>{t("shahar5")}</option>
                            <option value={t("shahar6")}>{t("shahar6")}</option>
                        </select>
                    </label> <br /> <br />
                    <button className='contact-btn' onClick={handleSubmit}>{t("button6")}</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
