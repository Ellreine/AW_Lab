import { createRoot } from "react-dom/client";
import "../index.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Pill from "../components/ui/Pill.jsx";
import data from "../data/olympiads/olympiads.json";

/* ---------- utils ---------- */
const typeLabel = (t) =>
  t === "hackathon"
    ? "хакатон"
    : t === "olympiad"
    ? "олимпиада"
    : t === "grant"
    ? "грант"
    : t === "platform"
    ? "платформа"
    : "событие";

const fmt = (d) => {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${day}.${m}.${y}`;
};

const fmtRange = (dates) => {
  if (!dates?.start && !dates?.end) return "даты уточняются";
  if (dates?.start && dates?.end)
    return `${fmt(dates.start)} — ${fmt(dates.end)}`;
  return dates?.start ? `c ${fmt(dates.start)}` : `до ${fmt(dates.end)}`;
};

const fmtMoney = (n, curr = "RUB") =>
  typeof n === "number"
    ? new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: curr,
        maximumFractionDigits: 0,
      }).format(n)
    : null;

const teamLabel = (team) => {
  if (!team) return "формат команды: уточняется";
  if (team.min && team.max && team.min === team.max)
    return `команда: ${team.min} чел.`;
  if (team.min && team.max) return `команда: ${team.min}-${team.max} чел.`;
  if (team.min && !team.max) return `команда: от ${team.min}`;
  if (!team.min && team.max) return `команда: до ${team.max}`;
  if (team.allow_solo) return "индивидуально";
  return "формат команды: уточняется";
};

function EventCard({ item }) {
  const prize = item.prize?.has_prize
    ? fmtMoney(item.prize.fund, item.prize.currency || "RUB")
    : null;

  return (
    <div
      className={`
        flex h-full flex-col rounded-2xl p-5 transition
        bg-neutral-900/60 border border-emerald-400/60
        border-l-4 border-l-emerald-400/60
        hover:ring-1 hover:ring-emerald-400/30
        hover:shadow-[0_0_0_1px_rgba(52,211,153,0.2)]
      `}
      style={{ paddingLeft: "1.25rem" }}
    >
      <div className="flex items-start justify-between gap-4">
        <Pill className="border-emerald-400/50 bg-emerald-900/30 text-emerald-200">
          {typeLabel(item.type)}
        </Pill>
        {prize && (
          <Pill className="border-emerald-400/50 bg-emerald-900/30 text-emerald-200">
            приз: {prize}
          </Pill>
        )}
      </div>

      <a
        className="mt-3 block text-lg font-semibold text-neutral-50 hover:underline"
        href={item.url || item.registration_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.title}
      </a>

      {item.organizer && (
        <div className="mt-1 text-sm text-neutral-400">
          Организатор: {item.organizer}
        </div>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
        <div>
          период:{" "}
          <span className="text-emerald-300">{fmtRange(item.dates)}</span>
        </div>
        {item.application_deadline && (
          <div>
            дедлайн:{" "}
            <span className="text-emerald-300">
              {fmt(item.application_deadline)}
            </span>
          </div>
        )}
        <div>{teamLabel(item.team)}</div>
        {item.eligibility?.who && <div>участники: {item.eligibility.who}</div>}
      </div>

      {item.notes && (
        <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
          {item.notes}
        </p>
      )}

      <div className="mt-4 flex items-center justify-between text-sm text-neutral-300">
        <a
          href={item.registration_url || item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-100"
        >
          Перейти →
        </a>
        {item.source && (
          <a
            href={item.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-300"
            title="первичный источник"
          >
            источник
          </a>
        )}
      </div>
    </div>
  );
}

function Page() {
  const items = Array.isArray(data?.items) ? data.items : [];

  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold">Олимпиады и конкурсы</h1>
        <p className="mt-3 text-neutral-400">
          Подборка актуальных олимпиад, хакатонов и конкурсов по IT, VR/AR и
          геймдеву.
        </p>

        <div className="mt-6 text-sm text-neutral-500">
          Всего мероприятий: {items.length}{" "}
          {data?.updated_at && (
            <span className="ml-2">обновлено: {data.updated_at}</span>
          )}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {items.length ? (
            items.map((item) => <EventCard key={item.slug} item={item} />)
          ) : (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-neutral-400">
              Пока пусто. Добавь записи в{" "}
              <code>data/olympiads/olympiads.json</code>.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Page />);
