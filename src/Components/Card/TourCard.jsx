import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './TourCard.scss';

/**
 * Poster uslubidagi karta: rasm butun karta bo'ylab, ma'lumot pastdagi shisha panelda.
 * Card va Card2 faqat ma'lumotlari bilan farq qilgani uchun ikkalasi ham shuni chaqiradi.
 *
 *   meta      - raqamdan keyin chiqadigan tarjima kalitlari
 *   subtitle  - panel sarlavhasi (tarjima kaliti), kerak bo'lmasa bo'sh qoldiring
 *   features  - [{ icon: 'fa-...', text: 'tarjima-kaliti' }]
 */
const TourCard = ({ city, number, images, meta = [], subtitle, features = [], cta = 'button3' }) => {
    const { t } = useTranslation();

    return (
        <article className="tour-card">
            <img
                className="tour-card__img"
                src={images}
                alt={city}
                loading="lazy"
                decoding="async"
            />

            <span className="tour-card__chip">
                <i className="fa fa-users" aria-hidden="true" />
                {[number, ...meta.map((key) => t(key))].join(' ')}
            </span>

            <div className="tour-card__panel">
                <h3 className="tour-card__title">{city}</h3>
                {subtitle && <p className="tour-card__subtitle">{t(subtitle)}</p>}

                <ul className="tour-card__features">
                    {features.map(({ icon, text }) => (
                        <li className="tour-card__feature" key={text}>
                            <span className="tour-card__icon" aria-hidden="true">
                                <i className={`fa ${icon}`} />
                            </span>
                            {t(text)}
                        </li>
                    ))}
                </ul>

                <Button className="tour-card__cta">
                    {t(cta)}
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                </Button>
            </div>
        </article>
    );
};

export default TourCard;