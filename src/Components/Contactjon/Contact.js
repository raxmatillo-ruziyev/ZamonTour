// Server funksiyasi: forma ma'lumotini qabul qilib, Telegramga yuboradi.
// Token va chat ID bu yerda, ENVIRONMENT VARIABLES da turadi, brauzerga hech qachon tushmaydi.
//
// Vercel uchun yozilgan (loyiha ildizida /api/contact.js). Netlify yoki Cloudflare ishlatsangiz,
// faqat funksiya imzosi biroz boshqacha bo'ladi, mantiq bir xil.
//
// Kerakli o'zgaruvchilar (hosting panelida kiritiladi, kodga yozilmaydi):
//   TELEGRAM_BOT_TOKEN  - @BotFather bergan YANGI token
//   TELEGRAM_CHAT_ID    - xabar boradigan chat

const MAX = 200;

// Boshqaruv belgilarini olib tashlaydi va uzunlikni cheklaydi
const clean = (value) =>
    String(value ?? '')
        .replace(/[\u0000-\u001F\u007F]/g, ' ')
        .trim()
        .slice(0, MAX);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false });
    }

    const body = req.body || {};

    // Spam tuzog'i: odam bu maydonni ko'rmaydi, bot to'ldiradi. Jim "muvaffaqiyat" qaytaramiz.
    if (body.website) {
        return res.status(200).json({ ok: true });
    }

    const data = {
        name: clean(body.name),
        phone: clean(body.phone),
        people: clean(body.people),
        date: clean(body.date),
        destination: clean(body.destination),
        country: clean(body.country),
    };

    if (Object.values(data).some((v) => !v)) {
        return res.status(400).json({ ok: false });
    }

    const text = [
        `Ism: ${data.name}`,
        `Telefon: ${data.phone}`,
        `Odamlar soni: ${data.people}`,
        `Sana: ${data.date}`,
        `Shahar/Davlat: ${data.destination}`,
        `Davlat/Shahar: ${data.country}`,
    ].join('\n');

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
            }
        );

        if (!response.ok) {
            return res.status(502).json({ ok: false });
        }
        return res.status(200).json({ ok: true });
    } catch (error) {
        return res.status(500).json({ ok: false });
    }
}