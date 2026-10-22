import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import logo from '../../assets/logojon.svg';
import { CONTACTS, SOCIALS } from '../../Components/Footer/Contacts';
import './Footer.scss';

// Navbardagi bilan bir xil bo'limlar
const NAV = ['home', 'about', 'tour', 'contact'];

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            {/* ---------- Yuqori qism: chaqiriq kartasi (pastki qismi qoramtir blok ustiga chiqib turadi) ---------- */}
            <div className="footer__inner">
                <div className="footer__cta">
                    {/* Bezak: logodagi kabi nuqtali parvoz yo'li */}
                    <svg
                        className="footer__route"
                        viewBox="0 0 260 130"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path
                            d="M6 118C70 20 170 0 246 34"
                            fill="none"
                            stroke="#F4B942"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="1 10"
                        />
                        <path
                            d="M0 0L-18 -8L-12 0L-18 8Z"
                            fill="#F4B942"
                            transform="translate(246 34) rotate(24)"
                        />
                    </svg>

                    <div className="footer__cta-text">
                        <h2 className="footer__cta-title">{t('footerTitle')}</h2>
                        <p className="footer__cta-lead">{t('footerText')}</p>
                    </div>

                    <Button name={t('button5')} href="#booking" />
                </div>
            </div>

            {/* ---------- Asosiy qism ---------- */}
            <div className="footer__main">
                <div className="footer__inner">
                    <div className="footer__grid">
                        <div className="footer__brand-col">
                            <Link to="/" className="footer__brand">
                                <img src={logo} alt="" width={48} height={48} />
                                <span>Zamon Tour</span>
                            </Link>

                            <div className="footer__socials">
                                {SOCIALS.map(({ href, icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="footer__social"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                    >
                                        <i className={`fa ${icon}`} aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <nav className="footer__col" aria-label="Footer">
                            <h3 className="footer__heading">{t('footerMenu', "Bo'limlar")}</h3>
                            <ul className="footer__list">
                                {NAV.map((id) => (
                                    <li key={id}>
                                        <a className="footer__link" href={`#${id}`}>
                                            {t(id)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="footer__col">
                            <h3 className="footer__heading">{t('contact')}</h3>
                            <ul className="footer__list">
                                {CONTACTS.map(({ title, icon, href, value }) => (
                                    <li className="footer__contact" key={title}>
                                        <span className="footer__contact-icon" aria-hidden="true">
                                            <i className={`fa ${icon}`} />
                                        </span>
                                        <span>
                                            <span className="footer__label">{t(title)}</span>
                                            <a
                                                className="footer__link"
                                                href={href}
                                                {...(/^https?:/.test(href)
                                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                                    : {})}
                                            >
                                                {value}
                                            </a>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p className="footer__credit">
                            <i className="fa fa-code" aria-hidden="true" />
                            {t('footerDev')}
                        </p>

                        <a className="footer__top" href="#home" aria-label="Back to top">
                            <i className="fa fa-angle-up" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;