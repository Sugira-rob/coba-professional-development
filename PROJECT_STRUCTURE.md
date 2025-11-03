# Project Structure
## COBA Professional Development Website

Recommended folder and file organization for the project.

---

## 📁 Complete Folder Structure

```
coba-professional-development/
│
├── 📄 README.md                          # Main project documentation
├── 📄 LICENSE                            # MIT License
├── 📄 .gitignore                         # Git ignore rules
├── 📄 CONTRIBUTING.md                    # Contribution guidelines
├── 📄 GITHUB_SETUP_GUIDE.md             # GitHub setup instructions
├── 📄 PROJECT_STRUCTURE.md              # This file
├── 📄 COBA_Master_Content_Document.md   # Complete content inventory
│
├── 📂 docs/                              # Additional documentation
│   ├── DESIGN_GUIDE.md                  # Design specifications
│   ├── DEVELOPMENT_GUIDE.md             # Development instructions
│   ├── DEPLOYMENT_GUIDE.md              # Deployment steps
│   └── CONTENT_MANAGEMENT.md            # Content update guide
│
├── 📂 src/                               # Source files
│   │
│   ├── 📄 index.html                    # Main landing page
│   │
│   ├── 📂 pages/                        # Individual pages
│   │   ├── about.html
│   │   ├── finance.html
│   │   ├── accounting.html
│   │   ├── marketing.html
│   │   ├── management.html
│   │   ├── information-systems.html
│   │   ├── computer-science.html
│   │   ├── digital-entertainment.html
│   │   ├── data-analytics.html
│   │   ├── international-students.html
│   │   └── resources-all.html
│   │
│   ├── 📂 css/                          # Stylesheets
│   │   ├── main.css                     # Main styles
│   │   ├── variables.css                # CSS variables (colors, fonts)
│   │   ├── reset.css                    # CSS reset/normalize
│   │   │
│   │   └── 📂 components/               # Component-specific styles
│   │       ├── hero-slider.css
│   │       ├── navigation.css
│   │       ├── cards.css
│   │       ├── footer.css
│   │       ├── buttons.css
│   │       └── forms.css
│   │
│   ├── 📂 js/                           # JavaScript files
│   │   ├── main.js                      # Main JavaScript
│   │   ├── config.js                    # Configuration
│   │   │
│   │   └── 📂 components/               # Component scripts
│   │       ├── hero-slider.js
│   │       ├── navigation.js
│   │       ├── search.js
│   │       ├── modal.js
│   │       └── analytics.js
│   │
│   └── 📂 assets/                       # Static assets
│       │
│       ├── 📂 images/                   # Images
│       │   ├── logo.png
│       │   ├── logo-white.png
│       │   ├── favicon.ico
│       │   │
│       │   ├── 📂 hero/                 # Hero slider images
│       │   │   ├── slide-1.jpg
│       │   │   ├── slide-2.jpg
│       │   │   ├── slide-3.jpg
│       │   │   └── slide-4.jpg
│       │   │
│       │   ├── 📂 icons/                # Icons and small graphics
│       │   │   └── *.svg
│       │   │
│       │   └── 📂 sections/             # Section-specific images
│       │       ├── finance-hero.jpg
│       │       ├── accounting-hero.jpg
│       │       └── ...
│       │
│       ├── 📂 videos/                   # Local videos (if any)
│       │   └── intro.mp4
│       │
│       └── 📂 fonts/                    # Custom fonts (if any)
│           ├── Montserrat-Bold.woff2
│           └── OpenSans-Regular.woff2
│
├── 📂 data/                              # Data files
│   ├── certifications.json              # Certification data
│   ├── careers.json                     # Career information
│   ├── resources.json                   # Resource links
│   └── contacts.json                    # Contact information
│
├── 📂 build/                             # Compiled/build files (gitignored)
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
├── 📂 tests/                             # Test files
│   ├── unit/
│   └── integration/
│
└── 📂 config/                            # Configuration files
    ├── webpack.config.js                # Webpack config (if using)
    ├── package.json                     # NPM dependencies
    └── .eslintrc.js                     # ESLint config
```

---

## 📝 File Descriptions

### Root Level Files

| File | Purpose |
|------|---------|
| `README.md` | Main documentation, project overview, setup instructions |
| `LICENSE` | MIT License for open-source use |
| `.gitignore` | Tells Git which files to ignore |
| `CONTRIBUTING.md` | Guidelines for contributors |
| `COBA_Master_Content_Document.md` | Complete content inventory with all text, links, specs |
| `GITHUB_SETUP_GUIDE.md` | Step-by-step GitHub setup |
| `PROJECT_STRUCTURE.md` | This file - project organization |

### Documentation Folder (`docs/`)

| File | Purpose |
|------|---------|
| `DESIGN_GUIDE.md` | Colors, typography, component styles, brand guidelines |
| `DEVELOPMENT_GUIDE.md` | Development setup, architecture, coding standards |
| `DEPLOYMENT_GUIDE.md` | How to deploy to various platforms |
| `CONTENT_MANAGEMENT.md` | How to update content, add resources |

### Source Folder (`src/`)

#### HTML Pages (`src/pages/`)
- Individual HTML file for each major section
- Keeps code organized and manageable
- Easy to find and edit specific sections

#### CSS (`src/css/`)
- **`main.css`**: Imports all other CSS files
- **`variables.css`**: Color palette, fonts, breakpoints
- **`reset.css`**: Browser reset for consistency
- **`components/`**: One file per component for modularity

#### JavaScript (`src/js/`)
- **`main.js`**: Initializes all components
- **`config.js`**: API keys, settings
- **`components/`**: Individual scripts for each feature

#### Assets (`src/assets/`)
- **`images/`**: All image files organized by purpose
- **`videos/`**: Any local video files
- **`fonts/`**: Custom web fonts

---

## 🎨 CSS Organization Example

### `css/variables.css`
```css
:root {
  /* Colors */
  --color-primary: #4B2E83;    /* ACU Purple */
  --color-secondary: #FFB81C;  /* ACU Gold */
  --color-accent: #6B46A8;
  
  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  
  /* Breakpoints */
  --breakpoint-mobile: 768px;
  --breakpoint-tablet: 1024px;
  --breakpoint-desktop: 1440px;
}
```

### `css/main.css`
```css
@import 'reset.css';
@import 'variables.css';
@import 'components/navigation.css';
@import 'components/hero-slider.css';
@import 'components/cards.css';
@import 'components/footer.css';
@import 'components/buttons.css';
@import 'components/forms.css';
```

---

## 🔧 JavaScript Organization Example

### `js/main.js`
```javascript
import HeroSlider from './components/hero-slider.js';
import Navigation from './components/navigation.js';
import Search from './components/search.js';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  new HeroSlider();
  new Navigation();
  new Search();
});
```

### `js/components/hero-slider.js`
```javascript
class HeroSlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll('.hero-slider__slide');
    this.init();
  }
  
  init() {
    this.autoPlay();
    this.setupNavigation();
  }
  
  autoPlay() {
    setInterval(() => this.nextSlide(), 5000);
  }
  
  nextSlide() {
    // Slide logic
  }
}

export default HeroSlider;
```

---

## 📊 Data Organization Example

### `data/certifications.json`
```json
{
  "finance": [
    {
      "id": "cfa",
      "name": "CFA - Chartered Financial Analyst",
      "description": "Global standard for investment professionals",
      "url": "https://www.cfainstitute.org/",
      "icon": "📊",
      "category": "finance",
      "difficulty": "advanced"
    }
  ],
  "marketing": [
    {
      "id": "google-ads",
      "name": "Google Ads Certification",
      "description": "Search advertising expertise",
      "url": "https://skillshop.exceedlms.com/...",
      "icon": "🎯",
      "category": "marketing",
      "difficulty": "intermediate"
    }
  ]
}
```

---

## 🌐 Alternative Structure for WordPress

If using WordPress, structure would be:

```
coba-theme/
│
├── style.css                    # Theme stylesheet with metadata
├── functions.php                # Theme functions
├── index.php                    # Main template
├── header.php                   # Header template
├── footer.php                   # Footer template
├── sidebar.php                  # Sidebar template
│
├── 📂 template-parts/           # Reusable template parts
│   ├── hero-slider.php
│   ├── certification-card.php
│   └── career-card.php
│
├── 📂 page-templates/           # Custom page templates
│   ├── finance.php
│   ├── accounting.php
│   └── data-analytics.php
│
├── 📂 inc/                      # PHP includes
│   ├── custom-post-types.php
│   ├── custom-fields.php
│   └── theme-setup.php
│
├── 📂 assets/                   # Theme assets
│   ├── css/
│   ├── js/
│   └── images/
│
└── 📂 languages/                # Translation files
    └── coba-theme.pot
```

---

## 📦 Package.json Example

For projects using Node.js:

```json
{
  "name": "coba-professional-development",
  "version": "1.0.0",
  "description": "Professional development resources for ACU COBA students",
  "main": "src/js/main.js",
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/**/*.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/coba-professional-development.git"
  },
  "keywords": [
    "education",
    "career-development",
    "resources"
  ],
  "author": "ACU COBA",
  "license": "MIT",
  "devDependencies": {
    "webpack": "^5.0.0",
    "webpack-cli": "^5.0.0",
    "webpack-dev-server": "^4.0.0"
  }
}
```

---

## 🔄 Build Process

### Development Workflow
```bash
# 1. Work in src/ folder
src/
  ├── Edit HTML files
  ├── Edit CSS files
  └── Edit JS files

# 2. Build for production
npm run build

# 3. Files compiled to build/ folder
build/
  ├── Minified CSS
  ├── Minified JS
  └── Optimized images

# 4. Deploy build/ folder to server
```

---

## 📋 Naming Conventions

### Files
- **HTML**: `kebab-case.html` (e.g., `data-analytics.html`)
- **CSS**: `kebab-case.css` (e.g., `hero-slider.css`)
- **JavaScript**: `kebab-case.js` (e.g., `certification-card.js`)
- **Images**: `kebab-case.jpg` (e.g., `finance-hero.jpg`)

### CSS Classes
- **BEM Notation**: `block__element--modifier`
  ```css
  .hero-slider { }              /* Block */
  .hero-slider__slide { }       /* Element */
  .hero-slider__slide--active { } /* Modifier */
  ```

### JavaScript
- **Classes**: `PascalCase` (e.g., `HeroSlider`)
- **Functions**: `camelCase` (e.g., `getCertifications`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `API_KEY`)

---

## ✅ Best Practices

### Keep It Organized
- ✅ One component per file
- ✅ Group related files together
- ✅ Use descriptive file names
- ✅ Add comments for complex code

### Performance
- ✅ Optimize images (compress before upload)
- ✅ Minify CSS/JS for production
- ✅ Lazy load images and videos
- ✅ Use caching strategies

### Maintainability
- ✅ Document your code
- ✅ Follow consistent naming conventions
- ✅ Keep files small and focused
- ✅ Use version control (Git)

---

## 🚀 Getting Started

### Initial Setup
```bash
# 1. Create folder structure
mkdir -p src/{css/components,js/components,assets/{images,fonts}}
mkdir -p docs data config

# 2. Create initial files
touch src/index.html
touch src/css/{main,variables,reset}.css
touch src/js/main.js

# 3. Start coding!
```

### As You Grow
- Add new components to `components/` folders
- Create new pages in `src/pages/`
- Add data files to `data/` folder
- Document in `docs/` folder

---

## 📞 Questions?

If you're unsure where a file should go:
1. Check if similar file exists
2. Follow the patterns above
3. Ask in GitHub Discussions
4. When in doubt, keep it simple!

---

**Remember**: This is a guide, not a rule! Adjust the structure to fit your needs. The goal is organization and maintainability.

---

**Last Updated**: November 2024  
**For**: COBA Professional Development Website
