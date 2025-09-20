# My Nutrition Club Website Development Guide

**IMPORTANT: Always follow these instructions first and only fallback to additional search and context gathering if the information in these instructions is incomplete or found to be in error.**

## Project Overview
This is a nutrition club website project currently in early development stage. The repository contains minimal content and is ready for implementation using modern web development frameworks.

## Working Effectively

### Development Environment Requirements
- Node.js v20.19.5+ (confirmed working)
- npm v10.8.2+ (confirmed working)
- Python 3.12.3+ (available for backend if needed)
- Git (confirmed working)

### Technology Stack Options
The project supports multiple technology approaches. Choose based on project requirements:

#### Option 1: React with TypeScript (Recommended for Dynamic Sites)
```bash
# Setup: NEVER CANCEL - Takes 2 minutes. Set timeout to 180+ seconds.
npx create-react-app nutrition-club --template typescript

# Development commands:
cd nutrition-club
npm start                    # Dev server - starts in ~2 seconds
npm run build               # Production build - takes ~8 seconds. Set timeout to 60+ seconds.
npm test -- --watchAll=false  # Run tests - takes ~1 second
```

#### Option 2: Next.js with TypeScript and Tailwind (Recommended for Full-Stack)
```bash
# Setup: NEVER CANCEL - Takes 25 seconds. Set timeout to 300+ seconds.
npx create-next-app@latest nutrition-club --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# CRITICAL: Remove Google Fonts imports to avoid network failures
# Edit src/app/layout.tsx and remove Geist font imports

# Development commands:
cd nutrition-club
npm run dev                 # Dev server - starts in <1 second
npm run build              # Production build - takes ~15 seconds. Set timeout to 180+ seconds.
npm run lint               # Linting - takes ~2 seconds
```

#### Option 3: Static HTML/CSS/JS (Recommended for Simple Sites)
```bash
# Create basic structure:
mkdir nutrition-club && cd nutrition-club
touch index.html styles.css script.js

# Development server options:
python3 -m http.server 8000    # Simple server
# OR
npm install -g live-server     # NEVER CANCEL - Takes 10 seconds
live-server --port=9000        # Auto-refresh server
```

### Essential Development Workflow

#### Always Run These Steps for Any Approach:
1. **Install dependencies**: Follow setup commands above - NEVER CANCEL builds
2. **Start development server**: Use appropriate command for your chosen stack
3. **Validate server is running**: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` (should return 200)
4. **Run tests** (if applicable): Always run with `--watchAll=false` for CI compatibility

#### Code Quality and Linting:
```bash
# For React projects:
npx eslint src/ --ext .js,.jsx,.ts,.tsx

# Add Prettier for formatting:
npm install --save-dev prettier     # Takes ~2 seconds
npx prettier --check src/           # Check formatting
npx prettier --write src/           # Fix formatting

# For Next.js projects:
npm run lint                        # Built-in linting
```

### Build and Deployment Validation

#### Production Build Testing:
```bash
# React: NEVER CANCEL - Build takes ~8 seconds
npm run build
# Validate: Check build/ directory exists with static files

# Next.js: NEVER CANCEL - Build takes ~15 seconds
npm run build
# Validate: Check .next/ directory and build output shows routes

# Static: No build needed
# Validate: Ensure all HTML/CSS/JS files are present
```

#### Network Limitations and Workarounds:
- **Google Fonts access is blocked** - Remove font imports from Next.js projects
- **External CDN access may fail** - Use local assets or npm packages instead
- **API calls to external services** - May be blocked, test locally first

### Manual Validation Requirements

#### Required Testing Scenarios:
After making any changes, always test these scenarios:

1. **Homepage loads correctly**:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
   # Should return 200
   ```

2. **Navigation works** (for multi-page sites):
   - Test all menu links
   - Verify smooth scrolling (for single-page sites)
   - Check mobile responsiveness

3. **Form functionality** (when forms are added):
   - Test all form inputs
   - Verify validation messages
   - Test form submission

4. **Content management** (when CMS is added):
   - Test content creation/editing
   - Verify image uploads work
   - Test content publishing

#### Browser Testing:
Since UI interaction is limited in this environment, validate core functionality by:
- Checking server response codes (200 for success)
- Inspecting generated HTML output
- Validating build artifacts are created correctly

### Time Expectations and Timeouts

**CRITICAL: Always set appropriate timeouts and NEVER CANCEL these operations:**

- **React project creation**: 2 minutes - Set timeout to 180+ seconds
- **Next.js project creation**: 25 seconds - Set timeout to 300+ seconds  
- **npm install**: 10 seconds - Set timeout to 60+ seconds
- **React build**: 8 seconds - Set timeout to 60+ seconds
- **Next.js build**: 15 seconds - Set timeout to 180+ seconds
- **Development server startup**: 1-2 seconds - Set timeout to 30+ seconds
- **Test execution**: 1 second - Set timeout to 30+ seconds
- **Linting**: 2 seconds - Set timeout to 30+ seconds

### Common Project Structure

#### React Project Structure:
```
nutrition-club/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

#### Next.js Project Structure:
```
nutrition-club/
├── src/
│   └── app/
│       ├── components/
│       ├── layout.tsx
│       └── page.tsx
├── public/
├── package.json
└── next.config.js
```

#### Static Project Structure:
```
nutrition-club/
├── index.html
├── styles.css
├── script.js
├── images/
└── pages/
```

### Nutrition Club Website Specific Features

#### Typical Features to Implement:
- **Member directory and profiles**
- **Nutrition resources and articles**  
- **Recipe sharing and management**
- **Event calendar and registration**
- **Contact forms and newsletter signup**
- **Responsive design for mobile access**

#### Testing These Features:
- Always test form submissions with validation
- Verify responsive design on different screen sizes
- Test image uploads and display functionality
- Validate calendar integration works correctly

### CI/CD Integration

#### Pre-commit Validation:
Always run these commands before committing:
```bash
npm run lint        # Must pass - takes ~2 seconds
npm run build       # Must succeed - see timing above
npm test           # Must pass (if tests exist) - takes ~1 second
```

#### GitHub Actions Considerations:
- Build processes may take longer in CI environment
- Network access limitations affect external dependencies
- Always use specific timeout values in workflow files

### Troubleshooting Common Issues

#### Build Failures:
- **Google Fonts errors**: Remove font imports from layout files
- **Network timeouts**: Use local alternatives to external CDNs
- **Memory issues**: Increase Node.js memory if builds fail

#### Development Server Issues:
- **Port conflicts**: Use different ports (3000, 8000, 9000)
- **Permission errors**: Ensure proper file permissions
- **Cache issues**: Clear node_modules and reinstall if needed

### Repository Commands Reference

#### Initial Setup (Choose One):
```bash
# React setup:
npx create-react-app . --template typescript

# Next.js setup:
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Static setup:
mkdir -p public src
touch public/index.html src/styles.css src/script.js
```

#### Development Workflow:
```bash
npm install                 # Install dependencies
npm start                   # Start dev server (React)
npm run dev                 # Start dev server (Next.js)
npm run build              # Production build
npm test                   # Run tests
npm run lint               # Check code quality
```

## Key Files and Locations

### Important Files to Monitor:
- `package.json` - Dependencies and scripts
- `src/App.tsx` or `src/app/page.tsx` - Main application entry
- `public/index.html` - HTML template (React)
- `src/app/layout.tsx` - Layout component (Next.js)
- `README.md` - Project documentation

### Configuration Files:
- `.eslintrc.json` - Linting configuration
- `tsconfig.json` - TypeScript configuration  
- `tailwind.config.js` - Tailwind CSS configuration (Next.js)
- `next.config.js` - Next.js configuration

Always refer to these instructions first before exploring or running bash commands to save time and avoid common pitfalls.