import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logojon.svg';
import './Navbar.scss';

// Komponentdan tashqarida: har renderda qayta yaratilmaydi
const SECTIONS = ['home', 'about', 'tour', 'contact'];
// Aylanish tartibi: uz -> ru -> en -> uz
const LANGUAGES = [
    { code: 'uz', label: "O'zbekcha" },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
];

const Flag = ({ code }) => {
    if (code === 'uz') {
        return (
            <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
                <rect width="36" height="36" fill="#1EB53A" />
                <rect width="36" height="22" fill="#fff" />
                <rect y="22" width="36" height="1.2" fill="#CE1126" />
                <rect width="36" height="13" fill="#0099B5" />
                <rect y="13" width="36" height="1.2" fill="#CE1126" />
                <circle cx="12" cy="6.5" r="3.4" fill="#fff" />
                <circle cx="13.4" cy="6.5" r="2.9" fill="#0099B5" />
                <g fill="#fff">
                    <circle cx="18.5" cy="4.2" r="0.8" />
                    <circle cx="22" cy="4.2" r="0.8" />
                    <circle cx="18.5" cy="7.4" r="0.8" />
                    <circle cx="22" cy="7.4" r="0.8" />
                </g>
            </svg>
        );
    }
    if (code === 'ru') {
        return (
            <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
                <rect width="36" height="12" fill="#fff" />
                <rect y="12" width="36" height="12" fill="#0039A6" />
                <rect y="24" width="36" height="12" fill="#D52B1E" />
            </svg>
        );
    }
    return (
        <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
            <rect width="36" height="36" fill="#012169" />
            <path d="M0 0L36 36M36 0L0 36" stroke="#fff" strokeWidth="7" />
            <path d="M0 0L36 36M36 0L0 36" stroke="#C8102E" strokeWidth="2.4" />
            <path d="M18 0V36M0 18H36" stroke="#fff" strokeWidth="10" />
            <path d="M18 0V36M0 18H36" stroke="#C8102E" strokeWidth="6" />
        </svg>
    );
};

const SOCIALS = [
    { href: 'https://t.me/zamonbiznestour', icon: 'fa-telegram', label: 'Telegram' },
    { href: 'https://www.instagram.com/zamontour', icon: 'fa-instagram', label: 'Instagram' },
];

const LangSwitch = ({ current, onChange }) => {
    const [touched, setTouched] = useState(false);
    const index = Math.max(0, LANGUAGES.findIndex((l) => l.code === current));

    const select = (code) => {
        setTouched(true); // animatsiya faqat bosilgandan keyin ishlaydi
        onChange(code);
    };

    return (
        <div
            className={`flagswitch${touched ? ' flagswitch--animated' : ''}`}
            role="group"
            aria-label="Language"
        >
            {LANGUAGES.map(({ code, label }, i) => {
                // 0 = hozirgi (chapda), 1 = keyingisi (o'ngda), 2 = navbat kutyapti (yashirin)
                const offset = (i - index + LANGUAGES.length) % LANGUAGES.length;
                const isCurrent = offset === 0;
                const isHidden = offset === 2;

                return (
                    <button
                        key={code}
                        type="button"
                        className={`flagswitch__flag flagswitch__flag--${offset}`}
                        title={label}
                        aria-label={label}
                        aria-pressed={isCurrent}
                        aria-hidden={isHidden || undefined}
                        tabIndex={isHidden ? -1 : 0}
                        onClick={() => !isCurrent && select(code)}
                    >
                        <Flag code={code} />
                    </button>
                );
            })}
        </div>
    );
};

const Socials = () => (
    <div className="navbar__socials">
        {SOCIALS.map(({ href, icon, label }) => (
            <a
                key={label}
                href={href}
                className="navbar__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
            >
                <i className={`fa ${icon}`} aria-hidden="true" />
            </a>
        ))}
    </div>
);

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');

    // "en-US" kabi qiymatlar kelsa ham to'g'ri ishlaydi
    const currentLang = (i18n.resolvedLanguage || i18n.language || 'uz').slice(0, 2);

    const closeMenu = useCallback(() => setIsOpen(false), []);
    const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);
    const changeLanguage = useCallback((lng) => i18n.changeLanguage(lng), [i18n]);

    // Scroll qilinganda soya paydo bo'ladi
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Ko'rinib turgan bo'limni belgilaydi
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Menyu ochiq: Escape bilan yopish va sahifa scrollini qulflash
    useEffect(() => {
        if (!isOpen) return undefined;
        const onKey = (e) => e.key === 'Escape' && closeMenu();
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen, closeMenu]);

    // Ekran kengayganda mobil menyu o'zi yopiladi
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 921px)');
        const onChange = (e) => e.matches && closeMenu();
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, [closeMenu]);

    const renderLinks = () =>
        SECTIONS.map((id) => (
            <a
                key={id}
                href={`#${id}`}
                className={`navbar__link${active === id ? ' is-active' : ''}`}
                aria-current={active === id ? 'location' : undefined}
                onClick={closeMenu}
            >
                {t(id)}
            </a>
        ));

    return (
        <header
            className={`navbar${scrolled ? ' navbar--scrolled' : ''}${isOpen ? ' navbar--open' : ''}`}
        >
            <div className="navbar__inner">
                <Link to="/" className="navbar__brand" onClick={closeMenu}>
                    <img src={logo} alt="" className="navbar__logo" width={48} height={48} />
                    <span className="navbar__wordmark">Zamon Tour</span>
                </Link>

                {/* Desktop */}
                <nav className="navbar__nav" aria-label="Main">
                    {renderLinks()}
                </nav>
                <div className="navbar__actions">
                    <LangSwitch current={currentLang} onChange={changeLanguage} />
                    <Socials />
                </div>

                {/* Mobil */}
                <button
                    type="button"
                    className="navbar__toggle"
                    aria-label="Menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    onClick={toggleMenu}
                >
                    <span className="navbar__bar" />
                    <span className="navbar__bar" />
                    <span className="navbar__bar" />
                </button>
            </div>

            <button
                type="button"
                className="navbar__backdrop"
                tabIndex={-1}
                aria-hidden="true"
                onClick={closeMenu}
            />
            <div id="mobile-menu" className="navbar__panel">
                <nav className="navbar__panel-nav" aria-label="Mobile">
                    {renderLinks()}
                </nav>
                <div className="navbar__panel-footer">
                    <LangSwitch current={currentLang} onChange={changeLanguage} />
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Navbar;