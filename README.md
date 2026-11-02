# abc-age

Тестовый адаптивный фронтенд интернет-магазина детских игрушек. Переведён на **Vite 8**, **Vue 3** и **TypeScript**.

## Стек технологий

- **Vue 3** (Composition API `<script setup lang="ts">`)
- **TypeScript**
- **Vite 8**
- **Vue Router 5**
- **Pinia 4**
- **Pug**
- **Sass / SCSS**
- **Swiper 8**

## Разработка

### Установка зависимостей

```bash
npm install
```

### Проверка типов

```bash
npm run type-check
```

### Запуск локального сервера разработки (HMR)

```bash
npm run dev
```

### Сборка проекта для продакшена (с проверкой типов)

```bash
npm run build
```

### Предпросмотр продакшен-сборки

```bash
npm run preview
```

## CI/CD и деплой

Настроен автоматический CI/CD через **GitHub Actions** (`.github/workflows/deploy.yml`). При пуше в ветку `master` проект автоматически проходит проверку типов, собирается и публикуется на **GitHub Pages**.
