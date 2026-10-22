import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './Contact.scss';

// Forma ma'lumotlari SERVERGA yuboriladi. Telegram tokeni brauzerda emas, serverda turadi.
// Manzilni .env faylida VITE_CONTACT_ENDPOINT bilan o'zgartirish mumkin, bo'lmasa /api/contact.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';

// Xarita: sizning manzilingiz (oldingi kodda London Eye turgan edi)
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
    '15/25 Chilanzar-9, Tashkent'
)}&z=15&output=embed`;

const INITIAL = {
    name: '',
    phone: '',
    people: '',
    date: '',
    destination: '',
    country: '',
    website: '', // spam tuzog'i: odam to'ldirmaydi
};

const CITIES = ['shahar4', 'shahar', 'shahar5', 'shahar6'];
const COUNTRIES = ['davlat', 'davlat4', 'davlat5', 'davlat6'];
const CITY_FIRST = [...CITIES, ...COUNTRIES];
const COUNTRY_FIRST = [...COUNTRIES, ...CITIES];

const REQUIRED = ['name', 'phone', 'people', 'date', 'destination', 'country'];

const Field = ({ label, children }) => (
    <label className="contact__field">
        <span className="contact__label">{label}</span>
        {children}
    </label>
);

const Select = ({ name, value, onChange, keys, t }) => (
    <select className="contact__control" name={name} value={value} onChange={onChange} required>
        <option value="" disabled>
            —
        </option>
        {keys.map((key) => (
            <option key={key} value={t(key)}>
                {t(key)}
            </option>
        ))}
    </select>
);

const Contact = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState(INITIAL);
    const [status, setStatus] = useState(null); // { type: 'ok' | 'error', text }
    const [loading, setLoading] = useState(false);

    const today = new Date().toISOString().slice(0, 10);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (REQUIRED.some((key) => !form[key].trim())) {
            setStatus({ type: 'error', text: t('xatolik') });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            setStatus({ type: 'ok', text: t("tog'ri") });
            setForm(INITIAL); // forma faqat muvaffaqiyatli yuborilganda tozalanadi
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({ type: 'error', text: t('xatolik1') });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact" id="booking">
            <div className="contact__inner">
                <div className="contact__map">
                    <iframe
                        title={t('wrapTitle3')}
                        src={MAP_SRC}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>

                <div className="contact__card">
                    <h2 className="contact__title">{t('contact-title')}</h2>

                    <form className="contact__form" onSubmit={handleSubmit} noValidate>
                        <div className="contact__row">
                            <Field label={t('label-name')}>
                                <input
                                    className="contact__control"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t('name')}
                                    required
                                />
                            </Field>
                            <Field label={t('label-phone')}>
                                <input
                                    className="contact__control"
                                    name="phone"
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder={t('phone')}
                                    required
                                />
                            </Field>
                        </div>

                        <div className="contact__row">
                            <Field label={t('label-people')}>
                                <input
                                    className="contact__control"
                                    name="people"
                                    type="number"
                                    inputMode="numeric"
                                    min="1"
                                    value={form.people}
                                    onChange={handleChange}
                                    placeholder={t('people')}
                                    required
                                />
                            </Field>
                            <Field label={t('label-data')}>
                                <input
                                    className="contact__control"
                                    name="date"
                                    type="date"
                                    min={today}
                                    value={form.date}
                                    onChange={handleChange}
                                    required
                                />
                            </Field>
                        </div>

                        <div className="contact__row">
                            <Field label={t('select-name')}>
                                <Select
                                    name="destination"
                                    value={form.destination}
                                    onChange={handleChange}
                                    keys={CITY_FIRST}
                                    t={t}
                                />
                            </Field>
                            <Field label={t('select-title')}>
                                <Select
                                    name="country"
                                    value={form.country}
                                    onChange={handleChange}
                                    keys={COUNTRY_FIRST}
                                    t={t}
                                />
                            </Field>
                        </div>

                        {/* Spam tuzog'i: ko'rinmaydi, odam to'ldirmaydi, bot to'ldiradi */}
                        <input
                            className="contact__trap"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            value={form.website}
                            onChange={handleChange}
                        />

                        {status && (
                            <p
                                className={`contact__status contact__status--${status.type}`}
                                role={status.type === 'error' ? 'alert' : 'status'}
                            >
                                {status.text}
                            </p>
                        )}

                        <Button
                            href={null}
                            type="submit"
                            className="contact__submit"
                            disabled={loading}
                            aria-busy={loading}
                        >
                            {t('button6')}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;