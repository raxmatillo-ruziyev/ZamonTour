import React from 'react';
import canada from '../../assets/cand.jpg';
import dubai from '../../assets/dubai.jpg';
import antalya from '../../assets/antalya.jpg';
import usa1 from '../../assets/usa1.jpg';
import europe2 from '../../assets/europe2.jpg';
import sharm from '../../assets/sharm.jpg';
import Card from '../Card/Card';
import CitySlider from './CitySlider';

const ITEMS = [
    { city: 'city11', number: '438', image: canada },
    { city: 'city12', number: '385', image: dubai },
    { city: 'city13', number: '278', image: antalya },
    { city: 'city15', number: '128', image: usa1 },
    { city: 'city16', number: '486', image: europe2 },
    { city: 'city14', number: '355', image: sharm },
];

const City = () => (
    <CitySlider id="tour" titleKey="city-title" textKey="city-text" Card={Card} items={ITEMS} />
);

export default City;