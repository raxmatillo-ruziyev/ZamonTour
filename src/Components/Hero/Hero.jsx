import React from 'react';
import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
import Herojon from '../Herojon/Herojon';
import './Hero.scss';

// Slaydlar o'tish vaqti (millisekund). Faqat shu raqamni o'zgartirasiz.
const AUTOPLAY_MS = 6000;

// To'rtta takrorlanuvchi blok o'rniga bitta ma'lumotlar ro'yxati.
// Rasmlar Hero.scss da: .hero-slider__slide--<id>
const SLIDES = [
    { id: 'dubai', city: 'city12', aholi: '67.41 M', area: '551.500 KM2', price: '$425.600' },
    { id: 'antalya', city: 'city13', aholi: '8.66 M', area: '41.290 KM2', price: '$1.100.200' },
    { id: 'istanbul', city: 'city23', aholi: '44.48 M', area: '275.400 KM2', price: '$946.000' },
    { id: 'sharm', city: 'city14', aholi: '69.86 M', area: '513.120 KM2', price: '$165.450' },
];

const Hero = () => {
    const { t } = useTranslation();

    return (
        <Carousel
            className="hero-slider"
            autoplay
            autoplaySpeed={AUTOPLAY_MS}
            speed={900}
            pauseOnHover
            dots
        >
            {SLIDES.map(({ id, city, aholi, area, price }) => (
                <div key={id} className={`hero-slider__slide hero-slider__slide--${id}`}>
                    <Herojon city={t(city)} aholi={aholi} area={area} price={price} />
                </div>
            ))}
        </Carousel>
    );
};

export default Hero;