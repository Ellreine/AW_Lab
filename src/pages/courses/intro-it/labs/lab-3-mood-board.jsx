import { createRoot } from "react-dom/client";
import "../../../../index.css";
import Header from "../../../../components/Header.jsx";
import Footer from "../../../../components/Footer.jsx";
import Pill from "../../../../components/ui/Pill.jsx";
import course from "../../../../data/courses/intro-it.json"; // берём расписания из JSON

const BASE = import.meta.env.BASE_URL || "/";

/* ---------- Small UI helpers ---------- */
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
          <span
            className="text-neutral-300"
            dangerouslySetInnerHTML={{ __html: t }}
          />
        </li>
      ))}
    </ul>
  );
}

/* ---------- Page ---------- */
function Page() {
  // 1) Лаба и данные из JSON
  const LAB_SLUG = "lab-3-mood-board";
  const lab = course?.labs?.items?.find((i) => i.slug === LAB_SLUG);

  // 2) ISO -> DD.MM.YYYY
  const formatDate = (iso) => {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}.${m}.${y}`;
  };

  // 3) Сроки
  const schedules = (lab?.schedules || []).map((s) => ({
    group: s.group,
    start: formatDate(s.start),
    due: formatDate(s.due),
  }));

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
            Лабораторная работа №3 — Мудборд + референсы
          </span>
        </nav>

        {/* Заголовок + мета */}
        <div className="mt-8 border-b border-neutral-800 pb-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-emerald-400 uppercase tracking-wide mb-2">
                Лабораторная работа №3
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-50 leading-tight">
                Мудборд локации + поиск/генерация референсов
              </h1>
              <p className="mt-3 text-neutral-300">
                Соберите собственный набор референсов и сформируйте мудборд для
                ключевой локации вашей игры. Дополните исследования сравнением
                результатов AI-генераций (минимум 3 нейросети × 5 вариантов
                каждая). Защита проходит{" "}
                <span className="text-neutral-100">целиком в Figma</span> — без
                отдельного «питча».
              </p>
            </div>

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
              {schedules.length > 0 && <Pill>⏱ 2 недели</Pill>}
            </div>
          </div>
        </div>

        {/* Цель */}
        <Section title="Цель работы">
          <p className="text-neutral-300 leading-relaxed">
            Научиться собирать и структурировать референсы под задачу проекта,
            создавать осмысленный мудборд локации и критически сравнивать
            результаты генерации изображений в разных нейросетях — всё это в
            одном Figma-файле.
          </p>
        </Section>

        {/* Что получится */}
        <Section title="Что получится в итоге">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
              <div className="text-neutral-400 text-sm">Фреймы в Figma</div>
              <Checklist
                items={[
                  "Мудборд локации (16–30 изображений) с группировкой по подтемам.",
                  "Фрейм с референсами интерфейса/UX-паттернов.",
                  "Фрейм «AI-генерации»: выбрать минимум 3 нейронки и сделать по 5 изображений в каждой.",
                  "Фрейм «Сравнение и выводы»: таблица/матрица + краткие тезисы по результатам генераций.",
                ]}
              />
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
              <div className="text-neutral-400 text-sm">
                К переходу к брендбуку (лаба №4)
              </div>
              <Checklist
                items={[
                  "Черновая палитра (3–5 цветов) из референсов/AI.",
                  "Черновой набор форм/паттернов (идеи фирменных элементов).",
                  "Ориентир по сетке 16:9 (черновой каркас будущего шаблона).",
                ]}
              />
            </div>
          </div>
        </Section>

        {/* Задание */}
        <Section
          title="Задание"
          aside={<span className="text-sm text-neutral-500">4 шага</span>}
        >
          {/* Шаг 1 — Мудборд локации */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                1
              </span>
              Шаг&nbsp;1 — Мудборд ключевой локации
            </div>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Выберите <span className="text-neutral-100">главную локацию</span>{" "}
              проекта (например, «стартовый город», «лес-платформер», «интерьер
              базы», «космическая станция») и соберите 16–30 изображений под
              неё. Сгруппируйте: «свет/атмосфера», «материал/текстура»,
              «архитектура/формы», «цвет», «композиция».
            </p>
            <Checklist
              items={[
                "К каждой группе — 2–3 тезиса: что берём и почему.",
                "Единый ритм/поля, подписи одного стиля.",
              ]}
            />
            <Tip>
              Стройте фрейм как «мини-издание»: заголовки секций, ритм колонок,
              короткие подписи.
            </Tip>
          </div>

          {/* Шаг 2 — Собственные референсы (любой медиа-тип, фрагменты допустимы) */}
          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                2
              </span>
              Шаг&nbsp;2 — Поиск собственных референсов (визуал и UX)
            </div>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Подберите 8–15 референсов из <b>любого медиа</b> и даже их{" "}
              <b>отдельных фрагментов</b>: кадры из фильмов/сериалов,
              иллюстрации и страницы книг, архитектурные детали, обложки и
              настроение музыки, фотографии природы/технологий и т. п. Это не
              обязательно игры.
            </p>
            <Checklist
              items={[
                "Пример фрагмента: «башня Ока Саурона (LOTR) — силуэт, вертикаль, чувство угрозы»; можно брать <i>силуэт/форму/палитру/композицию</i> как идею.",
                "Под каждой карточкой подпишите: <i>что именно</i> берём (цвет, форма, ритм, композиция, материал, типографика) и <i>где применим</i> (UI, окружение, иконография и т.д.).",
                "Источники обязательны: название, автор/студия (если есть), ссылка/описание происхождения.",
              ]}
            />
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <div className="text-neutral-400 text-sm">
                  Визуальные аспекты
                </div>
                <Checklist
                  items={[
                    "Цвет/свет: доминирующий тон, акцент, контраст.",
                    "Форма/ритм: повторяемые геометрии, силуэт, масштаб.",
                    "Материал/текстура: как читается поверхность и износ.",
                  ]}
                />
              </div>
              <div>
                <div className="text-neutral-400 text-sm">UX-паттерны</div>
                <Checklist
                  items={[
                    "Навигация/подсказки: как вести взгляд и игрока.",
                    "Иерархия информации: заголовки, подзаголовки, карточки.",
                    "Состояния UI: активные, фокус, ошибки, таймеры/кулдауны.",
                  ]}
                />
              </div>
            </div>
            <Tip>
              Главная идея шага — <b>собственный отбор</b> и <b>обоснование</b>.
              Избегайте формулировок «нравится/не нравится».
            </Tip>
          </div>

          {/* Шаг 3 — AI-генерации и сравнение (ссылки на нейронки) */}
          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                3
              </span>
              Шаг&nbsp;3 — Генерации в нейросетях и сравнение результатов
            </div>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Сгенерируйте изображения локации минимум в{" "}
              <span className="text-neutral-100">трёх</span> моделях. В каждой —
              минимум <span className="text-neutral-100">5 вариантов</span>{" "}
              (итого ≥15).
            </p>
            <Checklist
              items={[
                'Выберите любые 3+: <a class="text-emerald-300 hover:text-emerald-200" target="_blank" rel="noopener noreferrer" href="https://www.midjourney.com/">Midjourney</a>, <a class="text-emerald-300 hover:text-emerald-200" target="_blank" rel="noopener noreferrer" href="https://openai.com/dall-e">DALL·E</a>, <a class="text-emerald-300 hover:text-emerald-200" target="_blank" rel="noopener noreferrer" href="https://stability.ai/">Stable Diffusion</a>, <a class="text-emerald-300 hover:text-emerald-200" target="_blank" rel="noopener noreferrer" href="https://ideogram.ai/">Ideogram</a>, <a class="text-emerald-300 hover:text-emerald-200" target="_blank" rel="noopener noreferrer" href="https://leonardo.ai/">Leonardo</a>, <a class="text-emerald-300 hover:text-emerald-200" target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/products/firefly.html">Adobe Firefly</a> и др.',
                "Фиксируйте: промпт, (негативный промпт/seed/CFG/степень стилизации — если есть), краткую цель.",
                "Сравнительная матрица по критериям: стиль, читаемость, соответствие референсам, вариативность, артефакты.",
                "Выводы: какую модель для каких задач (фон/объекты/паттерны), какие настройки эффективнее.",
              ]}
            />
            <Tip>
              AI — это дополнение к референсам. Покажите, где генерации помогли,
              а где — нет.
            </Tip>
          </div>

          {/* Шаг 4 — Фрейм «Сравнение и выводы» (вместо питча) */}
          <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-neutral-900/70 px-6 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400/90">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs">
                4
              </span>
              Шаг&nbsp;4 — Фрейм «Сравнение и выводы» (в Figma)
            </div>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Итог — не презентация, а{" "}
              <span className="text-neutral-100">фрейм-компаратор</span> в
              Figma: таблица/матрица с критериями, миниатюры лучших вариантов и
              короткие тезисы «что берём и зачем».
            </p>
            <Checklist
              items={[
                "3–5 визуальных принципов (цвет, контраст, форма, ритм).",
                "2–3 UX-паттерна (иерархия, подсказки, состояния).",
                "Черновая палитра (3–5 цветов) и эскиз сетки 16:9 (зоны заголовка/контента).",
              ]}
            />
          </div>
        </Section>

        {/* Формат защиты */}
        <Section title="Формат защиты">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
            <Checklist
              items={[
                "Защита проходит <b>внутри Figma-файла</b>: вы открываете фреймы и кратко комментируете решения.",
                "Демонстрация фрейма «Сравнение и выводы»: почему выбранные референсы/AI-результаты подходят.",
              ]}
            />
          </div>
          <Tip>
            Проверьте доступ по ссылке (можно ли открыть без запроса) и
            аккуратные названия фреймов.
          </Tip>
        </Section>

        {/* Что сдаём */}
        <Section title="Что сдаём">
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
              <div className="text-xs text-neutral-500">ссылка</div>
              <div className="mt-2 text-neutral-300 leading-relaxed">
                Figma-файл с фреймами: мудборд локации, собственные референсы
                (любой медиа-тип, фрагменты допустимы), AI-генерации (3×5),
                «Сравнение и выводы», «Sineus: Prompt & Notes». Фреймы
                подписаны; источники и параметры генераций указаны.
              </div>
            </li>
            <li className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
              <div className="text-xs text-neutral-500">доступ</div>
              <div className="mt-2 text-neutral-300 leading-relaxed">
                Включите доступ по ссылке для просмотра/комментирования. Экспорт
                файлов не обязателен.
              </div>
            </li>
          </ul>
        </Section>

        {/* Критерии оценки */}
        <Section title="Критерии оценки">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
              <div className="text-neutral-400 text-sm">Содержательные</div>
              <Checklist
                items={[
                  "Релевантность и оригинальность источников (без готовых списков).",
                  "Осмысленные подписи: что берём и как применим.",
                  "Корректное сравнение AI-моделей и аргументированные выводы.",
                ]}
              />
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
              <div className="text-neutral-400 text-sm">Оформление</div>
              <Checklist
                items={[
                  "Структура фреймов, аккуратная сетка и выравнивания.",
                  "Читабельность: контраст, размер шрифта, краткость.",
                  "Единый стиль аннотаций и навигации по документу.",
                ]}
              />
            </div>
          </div>
        </Section>

        {/* ---------- Секция: Гайд стиля и промптов ---------- */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">Гайд стиля и промптов</h2>
            <span className="text-sm text-neutral-500">
              универсальные правила оформления
            </span>
          </div>

          {/* ---------- Пояснение перед гайдом ---------- */}
          <section className="mt-12">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-6 text-neutral-300 leading-relaxed">
              <p>
                В игровой разработке гайд стиля помогает команде выработать{" "}
                <b>единый визуальный язык</b> — определить, как выглядит мир,
                какие формы, цвета и свет задают атмосферу, и как это связано с
                эмоциями и механиками игрока.
              </p>
              <p className="mt-3">
                Он нужен не только художникам, но и{" "}
                <b>геймдизайнерам, программистам, и теххудам</b> — чтобы
                понимать, почему сцена выглядит именно так, и какие визуальные
                решения поддерживают геймплей.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm border border-neutral-700 border-collapse">
                  <thead className="bg-neutral-950/60 text-neutral-400 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="border border-neutral-700 px-3 py-2 text-left">
                        Цель
                      </th>
                      <th className="border border-neutral-700 px-3 py-2 text-left">
                        Что даёт
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    <tr className="bg-neutral-900/60">
                      <td className="px-3 py-2">
                        Формирование визуального языка
                      </td>
                      <td className="px-3 py-2 text-neutral-300">
                        Целостный облик мира и атмосферы.
                      </td>
                    </tr>
                    <tr className="bg-neutral-900/40">
                      <td className="px-3 py-2">Командная коммуникация</td>
                      <td className="px-3 py-2 text-neutral-300">
                        Все участники говорят на одном языке — меньше
                        расхождений в понимании.
                      </td>
                    </tr>
                    <tr className="bg-neutral-900/60">
                      <td className="px-3 py-2">
                        AI-генерации и визуальный препродакшн
                      </td>
                      <td className="px-3 py-2 text-neutral-300">
                        Стабильные и воспроизводимые результаты при генерации
                        изображений.
                      </td>
                    </tr>
                    <tr className="bg-neutral-900/40">
                      <td className="px-3 py-2">Связь с механиками</td>
                      <td className="px-3 py-2 text-neutral-300">
                        Визуальные принципы подчинены эмоциям и UX-логике игры.
                      </td>
                    </tr>
                    <tr className="bg-neutral-900/60">
                      <td className="px-3 py-2">Документация</td>
                      <td className="px-3 py-2 text-neutral-300">
                        Можно воспроизводить решения, обучать новых участников и
                        создавать маркетинг в едином стиле.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-8 shadow-lg">
            <div className="space-y-8 text-neutral-300 leading-relaxed">
              {/* 1. Базовые правила */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  1. Базовые правила (язык формы)
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <b>Форма:</b> простая / сложная, геометричная / органичная,
                    уровень детализации — низкий / средний / высокий.
                  </li>
                  <li>
                    <b>Среда:</b> единый объединяющий эффект — туман, дымка,
                    пыль, дождь, отражения и т.п.
                  </li>
                  <li>
                    <b>Свет:</b> жёсткий или мягкий; где источник света;
                    контраст свет/тень.
                  </li>
                  <li>
                    <b>Фокус:</b> что в резкости, что уходит в мягкость или шум.
                    Один главный объект — всё остальное подчинено.
                  </li>
                </ul>
              </div>

              {/* 2. Цвет */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  2. Цвет
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>База (2–3 тона): ________________________________</li>
                  <li>Акцент (1 в кадре): _______________________________</li>
                  <li>Эмоции/ассоциации акцента: _______________________</li>
                  <li>
                    Правило цвета: например — один акцентный цвет + приглушённый
                    фон.
                  </li>
                </ul>
                <div className="mt-2 text-sm text-neutral-500">
                  💡 Цветовая логика должна быть понятна и воспроизводима —
                  одинаковая структура в разных кадрах.
                </div>
              </div>

              {/* 3. Эффекты и фактура */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  3. Эффекты и фактура
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Атмосфера: туман, дымка, пыль, частицы, блики.</li>
                  <li>
                    Текстуры: камень, металл, органика, износ, зернистость.
                  </li>
                  <li>
                    Дополнительно: лёгкий плёночный шум, хроматическая
                    аберрация, виньетка.
                  </li>
                  <li>
                    Принцип: эффект объединяет картинку, не спорит с
                    композицией.
                  </li>
                </ul>
              </div>

              {/* 4. Композиция */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  4. Композиция
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Слои: передний / средний (главный) / фон.</li>
                  <li>
                    Путь взгляда: тропа, луч света, линия, контраст — всё, что
                    ведёт внутрь сцены.
                  </li>
                  <li>
                    Воздух: оставляйте пространство, не перегружайте деталями.
                  </li>
                  <li>Главный объект: один, остальные — подчинённые.</li>
                </ul>
              </div>

              {/* 5. Шаблон промпта */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  5. Шаблон промпта
                </h3>
                <p>
                  Структура, которая помогает описывать сцену и использовать её
                  при генерациях:
                </p>
                <pre className="mt-3 whitespace-pre-wrap rounded-lg border border-neutral-800 bg-neutral-950/60 p-4 text-sm text-neutral-200">
                  {`[сцена / архетип] + [главный объект] + [эмоция / состояние] +
[свет / направление] + [эффекты / атмосфера] +
[уровень детализации] + [стиль / жанр]`}
                </pre>
                <div className="mt-3 text-sm text-neutral-400">Примеры:</div>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>
                    <i>
                      stone monolith emitting soft vertical light, sacred calm
                      mood, backlight through mist, subtle particles, medium
                      detail, cinematic
                    </i>
                  </li>
                  <li>
                    <i>
                      ancient forest gateway, hopeful tone, warm godrays, light
                      dust in air, simplified shapes, illustrative style
                    </i>
                  </li>
                </ul>
              </div>

              {/* 6. Что генерим */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  6. Что генерим (модули по выбору)
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Обложка: главный объект + цитата / ключевая мысль.</li>
                  <li>Диптих «до/после»: фокус рождает объект.</li>
                  <li>
                    Триптих «угасание»: активное → менее активное →
                    исчезновение.
                  </li>
                  <li>
                    Матрица состояний или стихий: 4 кадра (A → B → C → D).
                  </li>
                  <li>
                    Переход / портал / маркер пути: свет, контраст, частицы.
                  </li>
                  <li>
                    Архетипические сцены: дерево, кристаллы, мост, лестница и
                    др.
                  </li>
                  <li>
                    UX как часть мира: оверлей, подсказка, UI-элемент в
                    композиции.
                  </li>
                  <li>
                    След вмешательства: зона в 3 стадиях (до, во время, после).
                  </li>
                  <li>
                    Аудио / шёпот: визуальная метафора звука, текста, волны.
                  </li>
                  <li>Команда: портреты в едином акценте и атмосфере.</li>
                </ul>
              </div>

              {/* 7. Анти-правила */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  7. Анти-правила
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-red-300/90">
                  <li>Случайные палитры без логики.</li>
                  <li>Перегрузка деталями и мелкий шум.</li>
                  <li>Несколько равных акцентов в одной сцене.</li>
                  <li>Безатмосферный фон или стерильная картинка.</li>
                  <li>Копирование чужого стиля без переосмысления.</li>
                </ul>
              </div>

              {/* ---------- 8. Карта моделей (для сравнения) ---------- */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  8. Карта моделей (для сравнения). Пример.
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Используйте таблицу, чтобы сравнить результаты генерации одной
                  сцены в разных нейросетях. Укажите параметры, цели и сделайте
                  короткие выводы по каждой модели.
                </p>

                <div className="overflow-x-auto text-sm">
                  <table className="w-full border border-neutral-800 border-collapse text-neutral-300">
                    <thead className="bg-neutral-900/70 text-neutral-400 uppercase text-xs tracking-wide">
                      <tr>
                        <th className="border border-neutral-800 px-3 py-2 text-left">
                          Модель
                        </th>
                        <th className="border border-neutral-800 px-3 py-2 text-left">
                          Промпт
                        </th>
                        <th className="border border-neutral-800 px-3 py-2 text-left">
                          Негативный промпт
                        </th>
                        <th className="border border-neutral-800 px-3 py-2 text-left">
                          Параметры (Seed / CFG / стиль)
                        </th>
                        <th className="border border-neutral-800 px-3 py-2 text-left">
                          Цель генерации
                        </th>
                        <th className="border border-neutral-800 px-3 py-2 text-left">
                          Результат / заметки
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Midjourney",
                        "DALL·E",
                        "Stable Diffusion",
                        "Ideogram",
                        "Kandinsky 3.1",
                        "Firefly / Leonardo / др.",
                      ].map((model, idx) => (
                        <tr
                          key={model}
                          className={
                            idx % 2 === 0
                              ? "bg-neutral-950/40"
                              : "bg-neutral-900/50"
                          }
                        >
                          <td className="border border-neutral-800 px-3 py-2 font-medium text-neutral-100">
                            {model}
                          </td>
                          <td className="border border-neutral-800 px-3 py-2 text-neutral-400"></td>
                          <td className="border border-neutral-800 px-3 py-2 text-neutral-400"></td>
                          <td className="border border-neutral-800 px-3 py-2 text-neutral-400"></td>
                          <td className="border border-neutral-800 px-3 py-2 text-neutral-400"></td>
                          <td className="border border-neutral-800 px-3 py-2 text-neutral-400"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-sm text-neutral-500 leading-relaxed">
                  💡 Сравните выразительность, стабильность и наличие
                  артефактов. Отметьте, какая модель лучше подходит для{" "}
                  <span className="text-neutral-300">фоновых сцен</span>,{" "}
                  <span className="text-neutral-300">объектов</span> или{" "}
                  <span className="text-neutral-300">атмосферы</span>.
                </div>
              </div>

              {/* 9. Вопросы */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  9. Вопросы для самопроверки
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>С первого взгляда читается главный акцент?</li>
                  <li>Достаточно ли контраста для UI и интерактивов?</li>
                  <li>
                    Соответствует ли результат выбранной палитре и формам?
                  </li>
                  <li>Где генерация помогла, а где — мешает, и почему?</li>
                  <li>Что берём в продакшн, что требует доработки?</li>
                </ul>
              </div>

              {/* 10. Выводы */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                  10. Выводы / Следующие шаги
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Берём в проект: ______________________________</li>
                  <li>Требует доработки: ____________________________</li>
                  <li>План следующей итерации: _____________________</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-800 pt-4 text-sm text-neutral-500">
              💡 Совет: держите этот гайд синхронно с разделами брендбука —
              <span className="text-neutral-300"> Палитра</span>,{" "}
              <span className="text-neutral-300">Типографика</span>,{" "}
              <span className="text-neutral-300">Сетка</span>,{" "}
              <span className="text-neutral-300">Фирменные формы</span>. Так он
              станет вашим «единым источником визуальной правды».
            </div>
          </div>
        </section>

        {/* Материалы */}
        <Section
          title="Материалы"
          aside={
            <span className="text-sm text-neutral-500">полезные ссылки</span>
          }
        >
          <ul className="space-y-3 text-neutral-300">
            {/* Pinterest */}
            <li className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
              <div className="text-sm text-neutral-400">Pinterest</div>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 text-emerald-300 hover:text-emerald-200"
              >
                Поиск визуальных референсов →
              </a>
            </li>

            {/* AI-платформы */}
            <li className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
              <div className="text-sm text-neutral-400">
                AI-платформы для генерации
              </div>

              <div className="mt-2 grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm leading-relaxed">
                <a
                  href="https://openai.com/dall-e-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  DALL-E →
                </a>
                <a
                  href="https://seaart.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Sea-Art →
                </a>
                <a
                  href="https://shvederum.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Шедеврум →
                </a>
                <a
                  href="https://fusionbrain.ai/diffusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Kandinsky 3.1 →
                </a>
                <a
                  href="https://stability.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Stable Diffusion 3.5 →
                </a>
                <a
                  href="https://scribblediffusion.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Scribble Diffusion →
                </a>
                <a
                  href="https://craiyon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Craiyon →
                </a>
                <a
                  href="https://dream.ai/create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Dream by Wombo →
                </a>
                <a
                  href="https://www.bing.com/create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Image Creator (Bing) →
                </a>
                <a
                  href="https://www.starryai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  StarryAI →
                </a>
                <a
                  href="https://lexica.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Lexica →
                </a>
                <a
                  href="https://easy-peasy.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Easy-Peasy.AI →
                </a>
                <a
                  href="https://aibanner.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  AI Banner →
                </a>
                <a
                  href="https://playground.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Playground →
                </a>
              </div>

              <div className="mt-3 text-neutral-500 text-sm">
                Выберите минимум три платформы и сделайте по 5 генераций в
                каждой.
              </div>
            </li>
          </ul>
        </Section>

        {/* Навигация */}
        <div className="mt-12 flex flex-wrap gap-3">
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
