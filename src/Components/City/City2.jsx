import React from 'react';
import canada from '../../assets/cand.jpg';
import dubai from '../../assets/dubai.jpg';
import antalya from '../../assets/antalya.jpg';
import usa1 from '../../assets/usa1.jpg';
import europe2 from '../../assets/europe2.jpg';
import sharm from '../../assets/sharm.jpg';
import Card2 from '../Card/Card2';
import CitySlider from './CitySlider';

const ITEMS = [
    { city: 'city17', number: '234', image: canada },
    { city: 'city18', number: '234', image: dubai },
    { city: 'city19', number: '278', image: antalya },
    { city: 'city20', number: '128', image: usa1 },
    { city: 'city21', number: '486', image: europe2 },
    { city: 'city22', number: '355', image: sharm },
];

const City2 = () => (
    <CitySlider titleKey="city2" textKey="city3" Card={Card2} items={ITEMS} />
);

export default City2;