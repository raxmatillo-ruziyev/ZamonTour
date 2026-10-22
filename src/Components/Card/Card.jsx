import React from 'react';
import TourCard from './TourCard';

const META = ['card-title2', 'card-title1'];
const FEATURES = [
    { icon: 'fa-taxi', text: 'card-text1' },
    { icon: 'fa-plane', text: 'card-text2' },
    { icon: 'fa-building', text: 'card-text3' },
];

const Card = ({ city, number, images }) => (
    <TourCard
        city={city}
        number={number}
        images={images}
        meta={META}
        subtitle="card-subtitle"
        features={FEATURES}
    />
);

export default Card;