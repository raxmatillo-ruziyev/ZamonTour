import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import dubai from '../../assets/dubai.jpg';
import antalya from '../../assets/antalya.jpg';
import istanbul from '../../assets/istanbul.jpg';
import sharm from '../../assets/sharm.jpg';
import paris from '../../assets/images.png';
import './Crousel.scss';

// Beshta takrorlangan blok o'rniga bitta ro'yxat.
// nameKey - boshqa bo'limlarda ishlatilgan shahar nomining tarjima kaliti (uch tilda chiqadi).
// Paris uchun tarjima kaliti noma'lum bo'lgani uchun oddiy matn qoldirildi (fallback).
const PANELS = [
    { id: 'dubai', image: dubai, nameKey: 'city12', population: '2M' },
    { id: 'antalya', image: antalya, nameKey: 'city13', population: '3.5M' },
    { id: 'istanbul', image: istanbul, nameKey: 'city23', population: '4.1M' },
    { id: 'sharm', image: sharm, nameKey: 'city14', population: '4M' },
    { id: 'paris', image: paris, fallback: 'Paris', population: '3M' },
];

const Crousel = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(0);

    // "Aholi:" -> "Aholi" (ikki nuqtasiz)
    const populationLabel = t('aholi').replace(/:\s*$/, '');

    return (
        <section className="gallery">
            <div className="gallery__inner">
                <div className="gallery__track">
                    {PANELS.map(({ id, image, nameKey, fallback, population }, i) => {
                        const name = nameKey ? t(nameKey) : fallback;
                        const isActive = i === active;

                        return (
                            <button
                                key={id}
                                type="button"
                                className={`gallery__panel${isActive ? ' is-active' : ''}`}
                                aria-expanded={isActive}
                                onClick={() => setActive(i)}
                            >
                                <img
                                    className="gallery__img"
                                    src={image}
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                />

                                {/* Yopiq panelda ko'rinadigan vertikal nom (ekran o'qiydiganlar uchun takror emas) */}
                                <span className="gallery__label" aria-hidden="true">
                                    {name}
                                </span>

                                {/* Ochiq panelda ko'rinadigan ma'lumot */}
                                <span className="gallery__info">
                                    <span className="gallery__icon" aria-hidden="true">
                                        <i className="fa fa-users" />
                                    </span>
                                    <span>
                                        <strong className="gallery__name">{name}</strong>
                                        <span className="gallery__meta">
                                            {populationLabel}: {population}
                                        </span>
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Crousel;