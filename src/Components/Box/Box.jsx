import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './Box.scss';

/**
 * Rasm + matn qatori. "Biz haqimizda" va "Xizmatlar" bo'limlari shu komponentni ishlatadi.
 *
 *   imgg, shahar, davlat, textjon  - rasm va (tarjima qilingan) matnlar, avvalgidek
 *   reverse   - true bo'lsa rasm o'ng tomonda
 *   stats     - ixtiyoriy: [{ icon: 'fa-users', value: '8.66 M' }]
 *   extraCta  - ixtiyoriy: ikkinchi (chiziqli) tugma uchun tarjima kaliti, masalan 'button4'
 */
const Box = ({ imgg, shahar, davlat, textjon, reverse = false, stats, extraCta }) => {
    const { t } = useTranslation();

    return (
        <article className={`infobox${reverse ? ' infobox--reverse' : ''}`}>
            <div className="infobox__media">
                <img
                    className="infobox__img"
                    src={imgg}
                    alt={shahar}
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className="infobox__body">
                <p className="infobox__country">{davlat}</p>
                <h3 className="infobox__city">{shahar}</h3>
                <p className="infobox__text">{textjon}</p>

                {stats && (
                    <ul className="infobox__stats">
                        {stats.map(({ icon, value }) => (
                            <li className="infobox__stat" key={icon}>
                                <span className="infobox__icon" aria-hidden="true">
                                    <i className={`fa ${icon}`} />
                                </span>
                                {value}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="infobox__actions">
                    <Button name={t('button2')} />
                    {extraCta && <Button name={t(extraCta)} variant="ghost" />}
                </div>
            </div>
        </article>
    );
};

export default Box;