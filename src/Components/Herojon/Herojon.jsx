import React from 'react';
import { useTranslation } from 'react-i18next';
import './Herojon.scss';

const Herojon = ({ city, aholi, area, price }) => {
    const { t } = useTranslation();

    // Takrorlanuvchi qismlar bitta massivdan chiqadi
    const stats = [
        { icon: 'fa-users', label: t('aholi'), value: aholi },
        { icon: 'fa-map-o', label: t('area'), value: area },
        { icon: 'fa-tag', label: t('price'), value: price },
    ];

    return (
        <section className="herojon" id="home">
            <div className="herojon__inner">
                <p className="herojon__eyebrow" style={{ '--i': 0 }}>
                    {t('hero')}
                </p>

                <h1 className="herojon__title" style={{ '--i': 1 }}>
                    {city}
                </h1>

                <div className="herojon__actions" style={{ '--i': 2 }}>
                    <a href="#contact" className="herojon__btn herojon__btn--primary">
                        {t('button1')}
                        <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                </div>

                <div className="herojon__card" style={{ '--i': 3 }}>
                    <ul className="herojon__stats">
                        {stats.map(({ icon, label, value }) => (
                            <li className="herojon__stat" key={icon}>
                                <span className="herojon__icon" aria-hidden="true">
                                    <i className={`fa ${icon}`} />
                                </span>
                                <div className="herojon__text">
                                    <span className="herojon__label">{label.replace(/:\s*$/, '')}</span>
                                    <strong className="herojon__value">{value}</strong>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="herojon__btn herojon__btn--dark">
                        {t('button2')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Herojon;