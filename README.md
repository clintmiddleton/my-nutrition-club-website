# MyNutritionClub Website

A Vue.js marketing website for MyNutritionClub, designed to promote the SaaS business and attract nutrition professionals.

## 🚀 Features

- **Vue.js 3** with JavaScript (no TypeScript)
- **Tailwind CSS** for styling with custom primary color scheme
- **Vue Router** for client-side navigation
- **Vite** for fast development and optimized builds
- **ESLint + Prettier** for code quality
- **Playwright** for end-to-end testing
- **Docker** support for containerized development and deployment

## 🛠 Development Setup

### Standard Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

### Docker Development (Recommended for WSL2)

For Windows users with WSL2 and Docker Desktop:

```sh
# Development with hot reload
docker-compose -f docker-compose.dev.yml up

# Or using the main compose file (dev service)
docker-compose up dev
```

Access the application at http://localhost:5173

### Production Build

```sh
# Build for production
npm run build

# Preview production build locally
npm run preview

# Run production build with Docker
docker-compose up app
```

Access the production build at http://localhost:3000

## 🐳 Docker Commands

```sh
# Development
docker-compose -f docker-compose.dev.yml up -d

# Production
docker-compose up app -d

# Build and run
docker-compose up --build

# Stop services
docker-compose down
```

## 🧪 Testing

```sh
# Run unit tests
npm run test:unit

# Install Playwright browsers (first time only)
npx playwright install

# Run end-to-end tests
npm run test:e2e

# Run specific browser tests
npm run test:e2e -- --project=chromium

# Run tests in debug mode
npm run test:e2e -- --debug
```

## 📝 Code Quality

```sh
# Lint code
npm run lint

# Format code
npm run format
```

## 📱 Key Pages

- **Home**: Hero section with features overview
- **Pricing**: $49/month plan with 14-day free trial
- **About**: Company story and statistics

## 🎨 Design

The website features:
- Modern gradient backgrounds
- Professional typography
- Fully responsive design
- Mobile-first navigation
- Fast loading (&lt; 40KB gzipped)
