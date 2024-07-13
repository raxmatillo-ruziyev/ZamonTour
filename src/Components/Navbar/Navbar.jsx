import React, { useState } from 'react';
import { Button, Drawer, Modal, Select, Space } from 'antd';
import './Navbar.scss';
import logo from '../../assets/zamon.svg';
import { Link } from 'react-router-dom';
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
        <div className="navbar">
            <div className="container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to={''} className="navbar-link">
                            <img src={logo} alt="Logo" className='logo' width={180} />
                        </Link>
                    </li>
                    <li className="navbar-item-one">
                        <Link to={'/'} className='navbar-link' href="#home">{t('home')}</Link>
                        <Link to={'/'} className='navbar-link' href="#about">{t('about')}</Link>
                        <Link to={'/'} className='navbar-link' href="#tour">{t('tour')}</Link>
                        <Link to={'/'} className='navbar-link' href="#contact">{t('contact')}</Link>
                    </li>
                    <li className="navbar-item-two">
                        <Space wrap>
                            <Select
                                defaultValue="UZ"
                                style={{
                                    width: 80,
                                    height: 30,
                                    fontSize: '14px'

                                }}
                                onChange={handleLanguageChange}
                                options={[
                                    {
                                        value: 'uz',
                                        label: 'UZ',
                                    },
                                    {
                                        value: 'en',
                                        label: 'EN',
                                    },
                                    {
                                        value: 'ru',
                                        label: 'RU',
                                    },
                                ]}
                            />
                        </Space>
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

                            <Link to={'/'} className='navbar-link-next' href="#home">{t('home')}</Link>
                            <hr className='navbar-hr' />
                            <Link to={'/'} className='navbar-link-next' href="#about">{t('about')}</Link>
                            <hr className='navbar-hr' />
                            <Link to={'/'} className='navbar-link-next' href="#tour">{t('tour')}</Link>
                            <hr className='navbar-hr' />
                            <Link to={'/'} className='navbar-link-next' href="#contact">{t('contact')}</Link>
                            <hr className='navbar-hr' />
                            <Space wrap>
                                <Select
                                    defaultValue="uz"
                                    style={{
                                        width: 120,
                                        height: 30,
                                        fontSize: '12px', // Adjust the font size here
                                    }}
                                    onChange={handleLanguageChange}
                                    options={[
                                        {
                                            value: 'uz',
                                            label: 'uz',
                                        },
                                        {
                                            value: 'en',
                                            label: 'en',
                                        },
                                        {
                                            value: 'ru',
                                            label: 'ru',
                                        },
                                    ]}
                                />

                            </Space>
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