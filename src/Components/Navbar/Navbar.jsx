import React, { useState } from 'react';
import { Button, Drawer, Modal, Select, Space } from 'antd';
import './Navbar.scss';
import logo from '../../assets/zamon.svg';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (value) => {
        i18n.changeLanguage(value);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="navbar" >
            <div className="container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to={''} className="navbar-link">
                            <img src={logo} alt="Logo" className='logo' width={180} />
                        </Link>
                    </li>
                    
                    <li className="navbar-item-one">
                        <a   className='navbar-link' href="#home">{t('home')}</a>
                        <a   className='navbar-link' href="#about">{t('about')}</a>
                        <a   className='navbar-link' href="#tour">{t('tour')}</a>
                        <a   className='navbar-link' href="#contact">{t('contact')}</a>
                    </li>
                    <li className="navbar-item-two">
                      
                        <select 
                        className='navbar-select'
                        defaultValue={'uz'}
                        onChange={(e) => handleLanguageChange(e.target.value)}>
                            <option value="uz">UZ</option>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                        <Link to={'https://t.me/zamonbiznestour'} className='navbar-link' href="#"><i id='icon' className='fa fa-telegram'></i></Link>
                        <Link to={'https://www.instagram.com/zamontour'} className='navbar-link' href="#"><i id='icon' className='fa fa-instagram'></i></Link>
                    </li>
                    <li className='navbar-item-three'>
                        <button className='navbar-btn' onClick={showModal}>
                            <i className='fa fa-align-justify'></i>
                        </button>
                        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                            footer={null}
                            width={600}
                            style={{
                                alignItems: 'center',
                                textAlign: 'center',


                            }}>

                            <a  className='navbar-link-next' href="#home">{t('home')}</a>
                            <hr className='navbar-hr' />
                            <a  className='navbar-link-next' href="#about">{t('about')}</a>
                            <hr className='navbar-hr' />
                            <a  className='navbar-link-next' href="#tour">{t('tour')}</a>
                            <hr className='navbar-hr' />
                            <a  className='navbar-link-next' href="#contact">{t('contact')}</a>
                            <hr className='navbar-hr' />
                            <select   className='navbar-select'
                        defaultValue={'uz'}
                        onChange={(e) => handleLanguageChange(e.target.value)}>
                            <option value="uz">UZ</option>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                            <hr className='navbar-hr' />
                            <Link to={'https://t.me/zamonbiznestour'} className='navbar-link' href="#"><i id='icon-two' className='fa fa-telegram'></i></Link>
                            <hr className='navbar-hr' />
                            <Link to={'https://www.instagram.com/zamontour'} className='navbar-link' href="#"><i id='icon-two' className='fa fa-instagram'></i></Link>

                        </Modal>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;