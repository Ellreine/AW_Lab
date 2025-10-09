import { createRoot } from "react-dom/client";
import "../../../../index.css";
import Header from "../../../../components/Header.jsx";
import Footer from "../../../../components/Footer.jsx";
import Pill from "../../../../components/ui/Pill.jsx";

const BASE = import.meta.env.BASE_URL || "/";

/* ---------- UI ---------- */
function Section({ title, children, aside }) {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {aside}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Tip({ children }) {
  return (
    <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-4 text-neutral-300">
      <div className="text-xs uppercase tracking-wide text-neutral-500">
        подсказка
      </div>
      <div className="mt-2 leading-relaxed">{children}</div>
    </div>
  );
}

function Checklist({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 shrink-0" />
          <span className="text-neutral-300">{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- PAGE ---------- */
function Page() {
  // Сроки по двум группам (уточнённые)
  const schedules = [
    { group: "8Д51", start: "20.10.2025", due: "03.11.2025" },
    { group: "8Д52", start: "27.10.2025", due: "10.11.2025" },
  ];

  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Хлебные крошки */}
        <nav className="text-sm text-neutral-400">
          <a href={`${BASE}`}>Главная</a>
          <span className="px-2">/</span>
          <a href={`${BASE}courses/intro-it/`}>Введение в IT</a>
          <span className="px-2">/</span>
          <span className="text-neutral-300">
            Лабораторная работа №4 — Брендбук и шаблон презентации
          </span>
        </nav>

        {/* Заголовок + мета */}
        <div className="mt-8 border-b border-neutral-800 pb-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-emerald-400 uppercase tracking-wide mb-2">
                Лабораторная работа №4
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-50 leading-tight">
                Брендбук и универсальный шаблон презентации (Figma)
              </h1>
            </div>

            {/* Сроки по группам */}
            <div className="flex flex-col items-start sm:items-end gap-2">
              {schedules.map((s) => (
                <div
                  key={s.group}
                  className="flex flex-wrap items-center gap-2"
                >
                  <Pill>{s.group}</Pill>
                  <Pill>старт: {s.start}</Pill>
                  <Pill className="border-red-500/50 bg-red-900/40 text-red-300">
                    дедлайн: {s.due}
                  </Pill>
                </div>
              ))}
              <Pill>⏱ 2 недели</Pill>
            </div>
          </div>
        </div>

        {/* Цель */}
        <Section title="Цель работы">
          <p className="text-neutral-300 leading-relaxed">
            Создать в Figma структурированный брендбук проекта (анализ,
            визуальные константы, модульная сетка, типографика, фирменные формы
            или паттерны) и на его основе подготовить универсальный шаблон
            слайда для будущих презентаций курса.
          </p>
        </Section>

        {/* Задание */}
        <Section
          title="Задание"
          aside={
            <span className="text-sm text-neutral-500">5 блоков работы</span>
          }
        >
          {/* Шаг 1 — Анализ и концепция */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                1
              </span>
              Шаг&nbsp;1
            </div>
            <h3 className="mt-3 text-xl font-semibold text-neutral-50 tracking-tight">
              Анализ и концепция
            </h3>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Соберите визуальную и смысловую основу бренда.
            </p>
            <div className="mt-5">
              <Checklist
                items={[
                  "Название проекта / команды.",
                  "3–5 ключевых слов о характере (настроение, тон, атмосфера).",
                  "2–3 визуальных референса (бренды/игры/постеры/скриншоты).",
                  "Короткая метафора/ассоциация (например: «цифровой лес»).",
                  "Краткий абзац: зачем такой стиль и где будете применять.",
                ]}
              />
            </div>
            <Tip>
              Оформите этот шаг отдельным фреймом с аккуратной раскладкой и
              подписями — это уже часть визуальной культуры.
            </Tip>
          </div>

          {/* Шаг 2 — Визуальные константы */}
          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                2
              </span>
              Шаг&nbsp;2
            </div>
            <h3 className="mt-3 text-xl font-semibold text-neutral-50 tracking-tight">
              Визуальные константы
            </h3>
            <div className="mt-5">
              <Checklist
                items={[
                  "Логотип: основной и упрощённый (можно типографический).",
                  "Цветовая палитра 3–5 цветов (основной, акцентный, фон/нейтральный).",
                  "Иконки/графические акценты (простые повторяемые формы).",
                  "Сохраните Color Styles и компоненты (logo/icon) как стили.",
                ]}
              />
            </div>
            <Tip>
              Сделайте отдельные фреймы: <b>Logo</b>, <b>Colors</b>,{" "}
              <b>Elements</b>. Для палитры используйте Color Styles с названиями
              вроде <i>Primary / Accent / Background</i>.
            </Tip>
          </div>

          {/* Шаг 3 — Модульная сетка */}
          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                3
              </span>
              Шаг&nbsp;3
            </div>
            <h3 className="mt-3 text-xl font-semibold text-neutral-50 tracking-tight">
              Модульная сетка
            </h3>
            <div className="mt-5">
              <Checklist
                items={[
                  "Формат кадра: 1920×1080 px (16:9) для презентаций.",
                  "Сетка: например, 12 колонок, поля 80–120 px, межколонник 24 px.",
                  "Определите зоны: заголовок, контент, изображения, подписи.",
                  "Сохраните Layout Grid как стиль и продемонстрируйте применение.",
                ]}
              />
            </div>
            <Tip>
              Сделайте демонстрационный фрейм: покажите сетку и рядом — пример
              слайда, собранный по ней (до/после).
            </Tip>
          </div>

          {/* Шаг 4 — Типографика */}
          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                4
              </span>
              Шаг&nbsp;4
            </div>
            <h3 className="mt-3 text-xl font-semibold text-neutral-50 tracking-tight">
              Типографика
            </h3>
            <div className="mt-5">
              <Checklist
                items={[
                  "H1 / H2 для заголовков (кегли и межстрочные интервалы).",
                  "Body для основного текста (размер, интерлиньяж, ширина строки).",
                  "Подписи/примечания (Caption) — по желанию.",
                  "Сохраните Text Styles (H1/H2/Body/Caption) и примеры на слайдах.",
                ]}
              />
            </div>
            <Tip>
              Рекомендуется взять шрифты из Google Fonts. Для презентаций
              держите контраст: крупные заголовки, комфортный Body (16–20 pt в
              пересчёте на экран, проверяйте читаемость).
            </Tip>
          </div>

          {/* Шаг 5 — Фирменные формы/паттерны */}
          <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-neutral-900/70 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                5
              </span>
              Шаг&nbsp;5
            </div>
            <h3 className="mt-3 text-xl font-semibold text-neutral-50 tracking-tight">
              Фирменные формы или паттерны
            </h3>
            <div className="mt-5">
              <Checklist
                items={[
                  "1–2 отличительных элемента (паттерн/фигура/линия/рамка).",
                  "Совместимость с палитрой и сеткой (не перегружать слайд).",
                  "Компоненты с вариантами (вариации цвета/прозрачности).",
                  "Примеры применения на макетах слайдов.",
                ]}
              />
            </div>
            <Tip>
              Подумайте о «подписи бренда»: повторяемая форма, которую зритель
              узнает даже без логотипа.
            </Tip>
          </div>
        </Section>

        {/* Итог и защита */}
        <Section title="Итог и презентация">
          <p className="text-neutral-300 leading-relaxed">
            Соберите единый{" "}
            <span className="text-neutral-100">итоговый фрейм</span> брендбука
            (мини-плакат) со сводкой всех разделов и одним тестовым слайдом,
            оформленным по правилам сетки/типографики.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-neutral-400 text-sm">
                Содержание итогового фрейма
              </div>
              <Checklist
                items={[
                  "Название проекта/команды и краткая концепция.",
                  "Логотип(ы) и палитра.",
                  "Модульная сетка (превью и параметры).",
                  "Типографика (пример H1/H2/Body).",
                  "Фирменные формы/паттерны.",
                  "Тестовый слайд в вашем стиле.",
                ]}
              />
            </div>
            <div>
              <div className="text-neutral-400 text-sm">Защита (3–5 минут)</div>
              <Checklist
                items={[
                  "Обоснуйте выбор стиля и палитры.",
                  "Покажите, как сетка дисциплинирует макеты.",
                  "Объясните роли паттернов/форм в единстве стиля.",
                ]}
              />
            </div>
          </div>
        </Section>

        {/* Что сдаём */}
        <Section title="Что сдаём">
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
              <div className="text-xs text-neutral-500">ссылка</div>
              <div className="mt-2 text-neutral-300 leading-relaxed">
                Figma-файл с брендбуком (доступ по ссылке) + компоненты и стили
                (Color/Text/Layout).
              </div>
            </li>
            <li className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
              <div className="text-xs text-neutral-500">файл</div>
              <div className="mt-2 text-neutral-300 leading-relaxed">
                PDF/PNG экспорт итогового фрейма (мини-плакат) + один тестовый
                слайд.
              </div>
            </li>
          </ul>
        </Section>

        {/* Материалы */}
        <Section
          title="Материалы"
          aside={
            <span className="text-sm text-neutral-500">полезные ресурсы</span>
          }
        >
          <ul className="space-y-3 text-neutral-300">
            {/* Google Fonts */}
            <li className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
              <div className="text-sm text-neutral-400">Google Fonts</div>
              <a
                href="https://fonts.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 text-emerald-300 hover:text-emerald-200"
              >
                Подбор шрифтов →
              </a>
            </li>

            {/*Цветовая схема*/}
            <li className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
              <div className="text-sm text-neutral-400">Цветовая схема</div>
              <a
                href="https://colorscheme.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 text-emerald-300 hover:text-emerald-200"
              >
                Подобрать цветовую палитру →
              </a>
            </li>
          </ul>
        </Section>

        {/* Навигация */}
        <div className="mt-12">
          <a
            href={`${BASE}courses/intro-it/`}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-4 py-2 hover:bg-neutral-900"
          >
            ← К курсу «Введение в IT»
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Page />);
