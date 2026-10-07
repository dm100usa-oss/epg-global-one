// Прием заявок со всех форм сайта (все языки) и отправка письма через Resend.
// Нужные настройки в Vercel: RESEND_API_KEY (ключ Resend).
// Необязательные: MAIL_TO (куда слать, по умолчанию epg.global.one@gmail.com),
// MAIL_FROM (от кого, по умолчанию адрес на домене epgglobalone.com).

const KINDS: Record<string, string> = {
  request: "Заявка на проверку сайта",
  full: "Заявка на полную проверку",
  quick: "Заявка на быструю бесплатную проверку",
  partner: "Заявка веб-агентства (партнер)",
  pilot: "Пилот: клиент перешел к оплате 180 $ (проверьте оплату в Stripe)",
};

const LABELS: Record<string, string> = {
  site: "Сайт",
  email: "Почта",
  name: "Имя и должность",
  studio: "Агентство",
  need: "Что нужно",
  version: "Что проверять",
  lang: "Язык страницы",
  page: "Страница",
};

function clean(v: unknown, max = 500): string {
  return String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Скрытое поле-ловушка: человек его не видит и не заполняет, программы-спамеры заполняют.
  if (clean(data.company_website)) return Response.json({ ok: true });

  const email = clean(data.email, 200);
  const site = clean(data.site, 300);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !site) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ ok: false }, { status: 500 });

  const kind = KINDS[clean(data.kind, 20)] ?? "Заявка с сайта";
  const lines = Object.keys(LABELS)
    .filter((k) => clean(data[k]))
    .map((k) => `${LABELS[k]}: ${clean(data[k])}`);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || "EPG Global ONE <zayavki@epgglobalone.com>",
      to: [process.env.MAIL_TO || "epg.global.one@gmail.com"],
      reply_to: email,
      subject: `${kind}: ${site}`,
      text: `${kind}\n\n${lines.join("\n")}\n\nЧтобы ответить клиенту, нажмите «Ответить».`,
    }),
  });

  return Response.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
