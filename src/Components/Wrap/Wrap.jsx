import React from 'react';
import './Wrap.scss';

// Aloqa kartasi: ikonka, sarlavha va havola.
// Props nomlari o'zgarmagan: imagess, h, data, wrapTitle.
const Wrap = ({ imagess, h, data, wrapTitle }) => {
    // Tashqi saytlar (masalan, xarita) yangi oynada ochiladi, tel: va mailto: esa odatdagidek
    const external = /^https?:/.test(h);

    return (
        <div className="contact-card">
            <span className="contact-card__icon" aria-hidden="true">
                {imagess}
            </span>
            <h3 className="contact-card__title">{wrapTitle}</h3>
            <a
                className="contact-card__link"
                href={h}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                {data}
            </a>
        </div>
    );
};

export default Wrap;