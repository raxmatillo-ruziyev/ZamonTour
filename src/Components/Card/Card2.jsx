import React from 'react';
import TourCard from './TourCard';

const META = ['card-title'];
const FEATURES = [
    { icon: 'fa-tags', text: 'card-text6' },
    { icon: 'fa-clock-o', text: 'card-text7' },
    { icon: 'fa-check', text: 'card-text8' },
];

const Card2 = ({ city, number, images }) => (
    <TourCard
        city={city}
        number={number}
        images={images}
        meta={META}
        subtitle="card-subtitle2"
        features={FEATURES}
    />
);

export default Card2;