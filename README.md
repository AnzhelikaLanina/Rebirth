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
- 🔑 **Переходы в личный кабинет** — регистрация и авторизация на основном сайте.
- 💬 **Переход в Discord-сообщество сервера.**
- 🌍 **Мультиязычность RU/EN** — локализации в проекте + контекст + кастомный хук.
- 🔝 **Scroll-to-top** при повторном выборе текущего раздела.
- 📱 **Полностью адаптивный UI** — поддержка мобильных устройств.
- ⚙️ **Редактируемый config.js без деплоя** — ссылки на скачивание не требуют пересборки.

---

## 🔧 Конфигурация скачиваний

Ссылки выносятся из билда и могут изменяться прямо на сервере:

```js
window.__REBIRTH_CONFIG__ = {
  downloadLinks: {
    gameClient: { google: "", yandex: "" },
    gamePatch:  { mediafire: "", yandex: "" },
    updater:    { google: "", yandex: "" }
  }
};
```
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
http://localhost:5173
````

---

## 🌐 Демо-версия (UI Showcase)

> ⚠️ В демо-версии ссылки на скачивание отключены.

🔗 https://anzhelikalanina.github.io/Rebirth/

---

## 🎨 Макет

🔗 https://www.figma.com/design/kLofcV4nCzerl0OQRpBI4/Rebirth

---

## 🔗 Связанные ресурсы

- 🌐 Сайт: https://l2rebirth.net/
- 💬 Discord: https://discord.com/invite/Z5dzMbdg35

---