# abc-age

Тестовый адаптивный фронтенд интернет-магазина детских игрушек. Переведён на **Vite 8** и **Vue 3**.

## Стек технологий

- **Vue 3** (Composition & Options API)
- **Vite 8**
- **Vue Router 4**
- **Vuex 4**
- **Pug**
- **Sass / SCSS**
- **Swiper 8**

## Разработка

### Установка зависимостей

```bash
npm install
```

### Запуск локального сервера разработки (HMR)

```bash
npm run dev
```

### Сборка проекта для продакшена

```bash
npm run build
```

### Предпросмотр продакшен-сборки

```bash
npm run preview
```

## CI/CD и деплой

Настроен автоматический CI/CD через **GitHub Actions** (`.github/workflows/deploy.yml`). При пуше в ветку `master` проект автоматически собирается и публикуется на **GitHub Pages**.
