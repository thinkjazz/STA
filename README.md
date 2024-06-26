# SEO Transliteration App

## Описание

SEO Transliteration App - это веб-приложение, которое позволяет транслитерировать текст с кириллицы на латиницу и генерировать SEO-дружественные URL. Приложение также поддерживает переключение между дневной и ночной темами.

## Функциональность

- Транслитерация текста с кириллицы на латиницу.
- Генерация SEO-дружественных URL.
- Переключение между дневной и ночной темами.
- Копирование результата в буфер обмена с уведомлением.

## Технологии

- React
- Vite
- Tailwind CSS

## Структура
```
seo-transliteration-app/
├── index.html
├── package.json
├── src/
│ ├── App.jsx
│ ├── components/
│ │ ├── Component.jsx
│ │ ├── Notification.jsx
│ │ └── ThemeToggle.jsx
│ └── index.css
│ └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

## Компоненты
`App.jsx`
Основной компонент приложения, который управляет состояниями темы и уведомлений. Включает в себя компоненты ThemeToggle, Component и Notification.

`Component.jsx`
Компонент для транслитерации текста. Включает текстовое поле для ввода текста на кириллице, кнопку для транслитерации, кнопку для копирования результата и текстовое поле для отображения результата.

`ThemeToggle.jsx`
Компонент для переключения между дневной и ночной темами.

`Notification.jsx`
Компонент для отображения уведомлений. Показывает сообщение в нижнем правом углу экрана.

## Использование
Введите текст на кириллице в текстовое поле.
Нажмите кнопку "Перевести", чтобы получить транслитерированный текст.
Нажмите кнопку "Скопировать", чтобы скопировать результат в буфер обмена.
Используйте кнопку переключения тем в верхнем правом углу для смены темы.

## Установка и запуск

### 1. Клонирование репозитория

```sh
git clone https://github.com/<USERNAME>/<REPOSITORY>.git
cd <REPOSITORY>

