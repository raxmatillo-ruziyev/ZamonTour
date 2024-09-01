import React, { useState } from 'react';
import { Modal } from 'antd';
import './Navbar.scss';
import logo from '../../assets/logojon.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const  languages = localStorage.getItem('i18nextLng')

    const handleLanguageChange = (value) => {
        i18n.changeLanguage(value);
        handleCancel(); // Modal yopilishi
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="navbar">
            <div className="container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to={''} className="navbar-link" onClick={handleCancel}>
                            <img src={logo} alt="Logo" className='logo' width={180} />
                        </Link>
                    </li>
                    
                    <li className="navbar-item-one">
                        <a href="#home" className='navbar-link' onClick={handleCancel}>{t('home')}</a>
                        <a href="#about" className='navbar-link' onClick={handleCancel}>{t('about')}</a>
                        <a href="#tour" className='navbar-link' onClick={handleCancel}>{t('tour')}</a>
                        <a href="#contact" className='navbar-link' onClick={handleCancel}>{t('contact')}</a>
                    </li>
                    <li className="navbar-item-two">
                        <select 
                        value={languages}
                            className='navbar-select'
                            defaultValue={'uz'}
                            onChange={(e) => handleLanguageChange(e.target.value)}>
                            <option value="uz">UZ</option>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                        <a href="https://t.me/zamonbiznestour" className='navbar-link' onClick={handleCancel}><i id='icon' className='fa fa-telegram'></i></a>
                        <a href="https://www.instagram.com/zamontour" className='navbar-link' onClick={handleCancel}><i id='icon' className='fa fa-instagram'></i></a>
                    </li>
                    <li className='navbar-item-three'>
                        <button className='navbar-btn' onClick={showModal}>
                            <i className='fa fa-align-justify'></i>
                        </button>
                        <Modal  
                            visible={isModalOpen} 
                            onCancel={handleCancel} 
                            footer={null}
                            width={600}
                            style={{
                                alignItems: 'center',
                                textAlign: 'center',
                            }}>
                            <a href="#home" className='navbar-link-next' onClick={handleCancel}>{t('home')}</a>
                            <hr className='navbar-hr' />
                            <a href="#about" className='navbar-link-next' onClick={handleCancel}>{t('about')}</a>
                            <hr className='navbar-hr' />
                            <a href="#tour" className='navbar-link-next' onClick={handleCancel}>{t('tour')}</a>
                            <hr className='navbar-hr' />
                            <a href="#contact" className='navbar-link-next' onClick={handleCancel}>{t('contact')}</a>
                            <hr className='navbar-hr' />
                            <select 
                            value={languages}
                                className='navbar-select'
                                defaultValue={'uz'}
                                onChange={(e) => handleLanguageChange(e.target.value)}>
                                <option value="uz">UZ</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                            <hr className='navbar-hr' />
                            <a href="https://t.me/zamonbiznestour" className='navbar-link' onClick={handleCancel}><i id='icon-two' className='fa fa-telegram'></i></a>
                            <hr className='navbar-hr' />
                            <a href="https://www.instagram.com/zamontour" className='navbar-link' onClick={handleCancel}><i id='icon-two' className='fa fa-instagram'></i></a>
                        </Modal>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
