import React from 'react';
import './Button.scss';

/**
 * Eski ishlatilishi o'zgarmaydi: <Button name={t('button1')} />  ->  #contact ga havola.
 *
 * Yangi imkoniyatlar:
 *   <Button name="..." href="#tour" />          boshqa joyga havola
 *   <Button name="..." variant="dark" />        'primary' (standart) | 'dark' | 'ghost'
 *   <Button name="..." href={null} onClick={}/> havolasiz oddiy <button> (forma, onClick uchun)
 */
const Button = ({ name, children, href = '#contact', variant = 'primary', className = '', ...rest }) => {
    const classes = `ui-btn ui-btn--${variant}${className ? ` ${className}` : ''}`;
    const label = children ?? name;

    if (href === null) {
        return (
            <button type="button" className={classes} {...rest}>
                {label}
            </button>
        );
    }

    return (
        <a href={href} className={classes} {...rest}>
            {label}
        </a>
    );
};

export default Button;