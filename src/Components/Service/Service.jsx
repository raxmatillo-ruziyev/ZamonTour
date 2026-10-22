import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '../Box/Box';
import dubai from '../../assets/dubai2.jpg';
import antalya from '../../assets/country-02.jpg';
import sharm from '../../assets/sharm2.jpg';
import istanbul from '../../assets/istanbul3.jpg';
import './Service.scss';

const makeStats = (aholi, area, price) => [
    { icon: 'fa-users', value: aholi },
    { icon: 'fa-map-o', value: area },
    { icon: 'fa-tag', value: price },
];

// DIQQAT: eski Box ichida bu uchta qiymat hamma xizmat uchun bir xil qattiq yozilgan edi
// (8.66 M, 4.114 km2, $1.100.200). Shuning uchun hozircha o'shalarni qo'ydim.
// Har bir xizmat uchun o'zining haqiqiy qiymatlarini shu yerda yozing.
const ITEMS = [
    { image: dubai, text: 'textjon', city: 'shahar', country: 'davlat', stats: makeStats('8.66 M', '4.114 km2', '$1.100.200') },
    { image: antalya, text: 'textjon4', city: 'shahar4', country: 'davlat4', stats: makeStats('8.66 M', '4.114 km2', '$1.100.200') },
    { image: sharm, text: 'textjon5', city: 'shahar5', country: 'davlat5', stats: makeStats('8.66 M', '4.114 km2', '$1.100.200') },
    { image: istanbul, text: 'textjon6', city: 'shahar6', country: 'davlat6', stats: makeStats('8.66 M', '4.114 km2', '$1.100.200') },
];

const Service = () => {
    const { t } = useTranslation();

    return (
        <section className="service" id="service">
            <div className="service__inner">
                <header className="service__head">
                    <h2 className="service__title">{t('serviceTitle')}</h2>
                    <p className="service__lead">{t('serviceText')}</p>
                </header>

                {ITEMS.map(({ image, text, city, country, stats }, i) => (
                    <Box
                        key={city}
                        imgg={image}
                        textjon={t(text)}
                        shahar={t(city)}
                        davlat={t(country)}
                        stats={stats}
                        extraCta="button4"
                        reverse={i % 2 === 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default Service;