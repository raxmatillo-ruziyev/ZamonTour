import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import './City.scss';

// Sozlamalar komponentdan tashqarida: har renderda qayta yaratilmaydi
const SETTINGS = {
    arrows: false, // o'zimizning tugmalarimiz bor
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 600,
    responsive: [
        { breakpoint: 1100, settings: { slidesToShow: 2 } },
        { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
};

/**
 * City va City2 bo'limlari uchun bitta umumiy slider.
 *
 *   id        - bo'lim id si (navbar havolasi uchun, masalan "tour")
 *   titleKey  - sarlavha tarjima kaliti
 *   textKey   - tavsif tarjima kaliti
 *   Card      - ishlatiladigan karta komponenti (Card yoki Card2)
 *   items     - [{ city: 'tarjima-kaliti', number: '438', image }]
 */
const CitySlider = ({ id, titleKey, textKey, Card, items }) => {
    const { t } = useTranslation();
    const sliderRef = useRef(null);

    return (
        <section className="city" id={id}>
            <div className="city__inner">
                <h2 className="city__title">{t(titleKey)}</h2>
                <p className="city__text">{t(textKey)}</p>

                <Slider ref={sliderRef} {...SETTINGS}>
                    {items.map(({ city, number, image }) => (
                        <div className="city__slide" key={city}>
                            <Card city={t(city)} number={number} images={image} />
                        </div>
                    ))}
                </Slider>

                <div className="city__controls">
                    <button
                        type="button"
                        className="city__nav"
                        aria-label="Previous"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <i className="fa fa-angle-left" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="city__nav"
                        aria-label="Next"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <i className="fa fa-angle-right" aria-hidden="true" />
                    </button>
                </div>

                <hr className="city__divider" />
            </div>
        </section>
    );
};

export default CitySlider;