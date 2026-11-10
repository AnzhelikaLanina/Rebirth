# ⚛️ Rebirth — веб-платформа проекта

Веб-платформа **Rebirth**, реализованная на **React + TypeScript**.  
Содержит информацию о проекте, Wiki-раздел, загрузку файлов, мультиязычность и адаптивный интерфейс.

---

### 🏷️ Используемые технологии

![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-6.26.2-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Helmet](https://img.shields.io/badge/React%20Helmet%20Async-2.0.5-6f42c1?style=for-the-badge)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-styles-blue?style=for-the-badge&logo=css3&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-11.1.14-6332F6?style=for-the-badge&logo=swiper&logoColor=white)

---

## 🎯 Возможности

- ℹ️ **Информация о проекте** — дата открытия, особенности, описание по разделам.
- 📚 **Wiki-навигация** — переключение категорий, автопрокрутка к выбранному блоку, подъезд к заголовку.
- 📥 **Скачивание файлов** — модальное окно (клиент, патч, апдейтер).
- 🎁 **Промокоды** — модальное окно со списком актуальных промокодов из конфига.
- 🔑 **Переходы в личный кабинет** — регистрация и авторизация на основном сайте.
- 💬 **Переход в Discord-сообщество сервера.**
- 🌍 **Мультиязычность RU/EN** — локализации в проекте + контекст + кастомный хук.
- 🔝 **Scroll-to-top** при повторном выборе текущего раздела.
- 📱 **Полностью адаптивный UI** — поддержка мобильных устройств.
- ⚙️ **Редактируемый config.json без деплоя** — ссылки на скачивание не требуют пересборки.

---

## 🔧 Конфигурация

Настройки вынесены из билда в файл `public/config.json` и подгружаются в рантайме
через `fetch` при старте приложения. Их можно менять **прямо на сервере** без пересборки —
достаточно отредактировать развёрнутый `config.json` и обновить страницу.

```json
{
  "chronicleUpdateName": "Celestial Destiny",
  "discord": "",
  "downloadLinks": {
    "gameClient": { "mediafire": "", "yandex": "" },
    "gamePatch":  { "mediafire": "", "yandex": "" },
    "updater":    { "mediafire": "", "yandex": "" }
  },
  "promoCodes": {
    "noWipeServer": [],
    "newRebirth": []
  }
}
```

- `chronicleUpdateName` — название обновления хроник (подставляется в тексты).
- `discord` — ссылка на Discord-сообщество.
- `downloadLinks` — ссылки на скачивание клиента, патча и апдейтера.
- `promoCodes` — промокоды двумя группами: `noWipeServer` (блок «ПРОМОКОДЫ NO WIPE SERVER») и
  `newRebirth` (блок «ПРОМОКОДЫ NEW REBIRTH»). Пустая группа не выводится, если обе пусты —
  в окне показывается «Нет доступных промокодов».

Если файл отсутствует или содержит невалидный JSON, приложение использует пустой
фолбэк-конфиг: кнопки скачивания скрываются, вместо них показывается заглушка
«Файлы скоро будут доступны».

---

## 🖥️ Установка и запуск

````md
git clone https://github.com/AnzhelikaLanina/Rebirth.git
cd Rebirth
npm install
npm run dev
````

После запуска приложение доступно по адресу:

````md
http://localhost:3000/Rebirth/
````

---

## 📜 Скрипты

| Команда | Действие |
|---|---|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Продакшн-сборка в `dist/` |
| `npm run preview` | Локальный просмотр собранного билда |
| `npm run lint` | Проверка ESLint |
| `npm run lint:fix` | Автоисправление ESLint |
| `npm run format` | Форматирование Prettier |
| `npm run deploy` | Публикация на GitHub Pages (`gh-pages -d dist`) |

---

## 🌐 Демо-версия (UI Showcase)

> ⚠️ В демо-версии ссылки на скачивание и Discord отключены.

🔗 https://anzhelikalanina.github.io/Rebirth/

---

## 🚀 Деплой

Проект публикуется на GitHub Pages командой:

````md
npm run deploy
````

`predeploy` автоматически собирает проект (`npm run build`), после чего содержимое
`dist/` пушится в ветку `gh-pages`. Базовый путь задан в `vite.config.ts` (`base: '/Rebirth/'`).

---

## 🎨 Макет

🔗 https://www.figma.com/design/kLofcV4nCzerl0OQRpBI4/Rebirth

---

## 🔗 Связанные ресурсы

- 🌐 Сайт: https://l2rebirth.net/

---