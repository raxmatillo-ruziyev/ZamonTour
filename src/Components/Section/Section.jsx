import React from 'react';
import { useTranslation } from 'react-i18next';
import afr from '../../assets/afr.jpg';
import air from '../../assets/airplane.jpg';
import Box from '../Box/Box';
import './Section.scss';

const BLOCKS = [
    { image: afr, city: 'shaharjon1', country: 'davlatjon1', text: 'textjon1' },
    { image: air, city: 'shaharjon', country: 'davlatjon', text: 'textjon2' },
];

const Section = () => {
    const { t } = useTranslation();

    return (
        <section className="about" id="about">
            <div className="about__inner">
                <header className="about__head">
                    <h2 className="about__title">{t('sectionTitle')}</h2>
                    <p className="about__lead">{t('sectionText')}</p>
                </header>

                {BLOCKS.map(({ image, city, country, text }, i) => (
                    <Box
                        key={city}
                        imgg={image}
                        shahar={t(city)}
                        davlat={t(country)}
                        textjon={t(text)}
                        reverse={i % 2 === 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default Section;