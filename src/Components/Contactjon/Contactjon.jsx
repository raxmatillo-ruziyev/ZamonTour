import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import Wrap from '../Wrap/Wrap';
import './Contactjon.scss';

// Uchta takrorlangan <Wrap /> o'rniga bitta ro'yxat
const CONTACTS = [
    { title: 'wrapTitle', icon: 'fa-phone', href: 'tel:+998999999999', value: '+998 99 999 99 99' },
    {
        title: 'wrapTitle2',
        icon: 'fa-envelope',
        href: 'mailto:zamonbiznestour@mail.ru',
        value: 'zamonbiznestour@mail.ru',
    },
    {
        title: 'wrapTitle3',
        icon: 'fa-map-marker',
        href: 'https://www.google.com/maps/place/15/25,+Chilanzar+-+9,+Tashkent+city',
        value: '15/25, Chilanzar - 9',
    },
];

const Contactjon = () => {
    const { t } = useTranslation();

    return (
        <section className="contactjon" id="contact">
            <div className="contactjon__inner">
                <h2 className="contactjon__title">{t('contactjon-title')}</h2>

                {/* Tugma endi pastdagi buyurtma formasiga olib boradi (avval o'z bo'limiga havola edi) */}
                <div className="contactjon__cta">
                    <Button name={t('button2')} href="#booking" />
                </div>

                <ul className="contactjon__list">
                    {CONTACTS.map(({ title, icon, href, value }) => (
                        <li className="contactjon__item" key={title}>
                            <Wrap
                                wrapTitle={t(title)}
                                imagess={<i className={`fa ${icon}`} />}
                                h={href}
                                data={value}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Contactjon;