# COBA Professional Development Website

> A comprehensive professional development resource platform for ACU College of Business Administration students

[![ACU COBA](https://img.shields.io/badge/ACU-COBA-4B2E83?style=for-the-badge)](https://acu.edu)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)]()

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Content Structure](#content-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Content Management](#content-management)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [License](#license)

---

## 🎯 Overview

The COBA Professional Development Website is a modern, interactive replacement for the existing LibGuide system, designed to provide ACU business and technology students with comprehensive career development resources, certifications, internship opportunities, and professional guidance.

### Purpose

Replace the traditional LibGuide format with:
- **Modern Design**: Beautiful, interactive UI with ACU purple branding
- **Easy Navigation**: Intuitive structure across all business and technology majors
- **Rich Content**: 100+ resources, 15+ videos, complete career guides
- **Mobile-First**: Fully responsive design for all devices
- **Easy Maintenance**: Simple content management for staff

---

## ✨ Features

### 🎨 Design Features
- **Hero Slider**: 4 rotating slides introducing key opportunities
- **Interactive Maps**: Tech talent hubs visualization
- **Connected Network**: Visual relationship of experiential learning opportunities
- **Career Cards**: Hover effects and detailed career information
- **Video Integration**: Embedded YouTube videos with thumbnails
- **Responsive Design**: Mobile, tablet, and desktop optimized

### 📚 Content Features
- **9 Major Sections**: Finance, Accounting, Marketing, Management, Information Systems, Computer Science, Digital Entertainment Technology, Data Analytics, International Students
- **100+ Curated Links**: Certifications, tools, job platforms, resources
- **Complete Learning Pages**: Resume building, cover letters, LinkedIn optimization, interview prep
- **Embedded Resources**: Google Sheets for internships/jobs, GitHub repositories
- **Professional Development Guides**: 8 comprehensive PDF guides converted to interactive web pages

### 🔧 Technical Features
- **Fast Loading**: Optimized assets and lazy loading
- **Accessibility**: WCAG 2.1 compliant
- **Search Functionality**: Easy resource discovery
- **Analytics Ready**: Google Analytics integration
- **SEO Optimized**: Meta tags and semantic HTML

---

## 📊 Content Structure

```
COBA Professional Development
│
├── 🏠 Home (Hero Slider + Quick Links)
│
├── ℹ️ About COBA
│
├── 💰 Finance
│   ├── Career Paths to Explore
│   ├── Internships Guide
│   ├── Certifications/Resources (7 certifications)
│   └── Books on Finance (5 books)
│
├── 📊 Accounting
│   ├── Internships Guide
│   ├── Certifications (CPA, CMA, CIA)
│   ├── ACU MAcc Program
│   ├── CPA Exam Guide
│   └── Accounting Presentation
│
├── 👔 Management Sciences
│   ├── 📱 Marketing
│   │   ├── Certifications (7 digital marketing certs)
│   │   └── Career Paths
│   ├── 💼 Management
│   │   ├── Certifications (8 management certs)
│   │   └── Careers (6 career paths)
│   └── 💻 Information Systems
│       └── Certifications (10 IT certifications)
│
├── 🖥️ SITC
│   ├── Computer Science
│   │   ├── Tech Talent Hubs Map (35+ cities)
│   │   ├── Certifications (6 CS certifications)
│   │   ├── Interview Prep Tools (4 platforms)
│   │   ├── Jobs & Internships (embedded sheets)
│   │   └── CS Career Paths
│   └── 🎮 Digital Entertainment Technology
│       ├── Career Paths (gaming industry data)
│       ├── Certifications (12 game dev certs)
│       └── Jobs & Internships (embedded sheets)
│
├── 📈 Data Analytics
│   ├── What is Data Analytics
│   ├── Career Paths (8 analytics roles)
│   ├── Certifications (5 data certs)
│   └── Jobs & Internships
│
├── 🌍 International Students
│   ├── H1B Sponsorship Info
│   ├── How to Identify Sponsoring Companies
│   └── Companies Hiring International Students
│
├── 📚 Resources for ALL Business & Tech Majors
│   ├── Experiential Learning (6 opportunities network)
│   ├── "How To" Guides
│   │   ├── Resume Building (complete guide)
│   │   ├── Professional Summary (6 major templates)
│   │   ├── Cover Letters (checklist + samples)
│   │   ├── LinkedIn Optimization (8-section guide)
│   │   ├── Job Search Templates (4 email templates)
│   │   ├── Elevator Pitch (ChatGPT tutorial)
│   │   └── Skills Section Guide
│   ├── Top Job Seeker Tools (40+ platforms)
│   ├── Interview Prep (practice tools)
│   ├── Career Research (O*Net, PathwayU)
│   ├── Graduate School Resources
│   ├── How to Dress Professionally (complete guide)
│   └── Helpful Social Media Accounts
│
└── 👤 Career Professional Contact
```

---

## 🛠️ Technology Stack

### Recommended Stack

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- Framework Options:
  - React.js (recommended for interactivity)
  - Vue.js (lightweight alternative)
  - Vanilla JS (simplest, no dependencies)

**Styling:**
- CSS Grid & Flexbox for layouts
- Tailwind CSS or custom CSS
- ACU Brand Colors: Purple (#4B2E83), Gold (#FFB81C)

**Deployment Options:**

**Option A: Static Site**
- **Hosting**: Netlify, Vercel, GitHub Pages (all free)
- **CMS**: Decap CMS (formerly Netlify CMS) for easy editing
- **Build**: Webpack or Vite

**Option B: WordPress**
- **Hosting**: ACU IT servers or InfinityFree
- **Theme**: Custom theme based on design specs
- **Plugins**: Elementor or Advanced Custom Fields

**Option C: Google Sites**
- **Hosting**: Google (free)
- **CMS**: Built-in Google Sites editor
- **Integration**: Google Workspace

---

## 🚀 Getting Started

### Prerequisites

- Git installed
- Node.js 16+ (if using React/Vue)
- Text editor (VS Code recommended)
- ACU branding assets (logo, colors)

### Installation

#### Option 1: Clone and Run Static Site

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/coba-professional-development.git

# Navigate to project directory
cd coba-professional-development

# If using Node.js build tools
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

#### Option 2: WordPress Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/coba-professional-development.git

# Copy theme files to WordPress themes directory
cp -r wordpress-theme /path/to/wordpress/wp-content/themes/coba-theme

# Activate theme in WordPress admin
# Go to Appearance > Themes > Activate COBA Theme
```

### Configuration

1. **Update Brand Assets**
   - Replace logo in `/assets/images/logo.png`
   - Verify colors in `/css/variables.css` or theme settings

2. **Set Up Analytics** (Optional)
   - Add Google Analytics tracking code
   - Configure conversion tracking

3. **Test Functionality**
   - Check all links
   - Test video embeds
   - Verify responsive design
   - Test embedded Google Sheets

---

## 📦 Deployment

### Deploying to Netlify (Recommended for Static Sites)

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist` or `build`
   - Click "Deploy site"

3. **Custom Domain** (Optional)
   - Add custom domain in Netlify settings
   - Update DNS records

### Deploying to ACU Servers

1. **Contact ACU IT**
   - Request WordPress hosting or web server space
   - Get FTP/SSH credentials

2. **Upload Files**
   ```bash
   # Using FTP client (FileZilla, Cyberduck)
   # Upload all files to public_html or designated folder
   
   # Or using SSH
   scp -r build/* username@server:/path/to/public_html/
   ```

3. **Configure Database** (if using WordPress)
   - Create MySQL database
   - Update wp-config.php with database credentials

---

## 📝 Content Management

### Updating Content

#### For Static Site with CMS

1. **Access Admin Panel**
   - Navigate to `yoursite.com/admin`
   - Login with credentials

2. **Edit Content**
   - Select section to update
   - Edit in visual editor
   - Save and publish

3. **Add New Resources**
   - Go to "Resources" collection
   - Click "New Resource"
   - Fill in title, description, link, category
   - Save

#### For WordPress

1. **Login to WordPress Admin**
   - Go to `yoursite.com/wp-admin`
   - Enter credentials

2. **Edit Pages**
   - Pages > All Pages
   - Click page to edit
   - Make changes in visual editor
   - Update

3. **Add Resources**
   - Resources > Add New
   - Fill in custom fields
   - Publish

### Content Update Schedule

- **Monthly**: Job/internship spreadsheets, new resources
- **Quarterly**: Verify all external links, update certifications
- **Annually**: Review all content, update videos, refresh statistics
- **As Needed**: Contact information, new opportunities

---

## 🤝 Contributing

We welcome contributions from the ACU COBA community!

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

3. **Make Changes**
   - Add new content
   - Fix bugs
   - Improve design

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add: Description of changes"
   ```

5. **Push to GitHub**
   ```bash
   git push origin feature/new-feature
   ```

6. **Create Pull Request**
   - Go to GitHub repository
   - Click "New Pull Request"
   - Describe your changes
   - Submit for review

### Contribution Guidelines

- **Code Style**: Follow existing code formatting
- **Commit Messages**: Use clear, descriptive messages
- **Testing**: Test all changes before submitting
- **Documentation**: Update README if adding features

---

## 📖 Documentation

### Available Documentation

- **[Master Content Document](./COBA_Master_Content_Document.md)** - Complete content inventory with all links, text, and specifications
- **[Design Guide](./docs/DESIGN_GUIDE.md)** - Brand colors, typography, component styles
- **[Development Guide](./docs/DEVELOPMENT_GUIDE.md)** - Technical setup and architecture
- **[Content Management Guide](./docs/CONTENT_MANAGEMENT.md)** - How to update and maintain content
- **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)** - Step-by-step deployment instructions

### Quick Links

- [ACU COBA Website](https://acu.edu/coba)
- [Current LibGuide](https://guides.acu.edu/cobaguides)
- [ACU Branding Guidelines](https://acu.edu/brand)

---

## 👥 Team

**Project Lead**: [Your Name]
**Institution**: Abilene Christian University - College of Business Administration
**Contact**: [Your Email]

### Stakeholders
- Jasmine McCabe-Gossett - Professional Development Coordinator
- Jody Jones - STAR Program Coordinator
- Laura Phillips - Social Enterprise Consulting Coordinator
- COBA Faculty and Staff

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

Permission is granted to use, copy, modify, and distribute this software for any purpose with or without fee, provided that copyright notices are retained.

---

## 🙏 Acknowledgments

- **ACU COBA Faculty & Staff** - Content and guidance
- **Students** - Feedback and testing
- **Career Services Ambassadors** - Professional development resources
- **IT Department** - Technical support and hosting

---

## 📞 Support

### Getting Help

- **Technical Issues**: Open an issue on GitHub
- **Content Questions**: Contact COBA Professional Development Team
- **ACU IT Support**: [IT Support Portal](https://acu.edu/it)

### Contact Information

**COBA Professional Development**
- Email: coba.profdev@acu.edu
- Phone: (325) 674-2427
- Office: Mabee Business Building, Room 132

---

## 🗺️ Roadmap

### Phase 1: Initial Launch ✅
- [x] Content gathering and organization
- [x] Master content document creation
- [ ] Website design and development
- [ ] Initial deployment
- [ ] Staff training

### Phase 2: Enhancement 🚧
- [ ] Add chatbot functionality
- [ ] Implement advanced search
- [ ] Add student testimonials
- [ ] Create video library
- [ ] Mobile app consideration

### Phase 3: Expansion 📋
- [ ] Alumni network integration
- [ ] Company partnership portal
- [ ] Event calendar integration
- [ ] Online appointment scheduling
- [ ] Analytics dashboard for staff

---

## 📊 Statistics

- **Total Resources**: 100+ curated links
- **Video Content**: 15+ embedded videos
- **Learning Guides**: 8 comprehensive guides
- **Career Paths**: 30+ detailed career descriptions
- **Certifications**: 50+ professional certifications
- **Sections**: 9 major academic areas covered

---

## 🔄 Version History

### Version 1.0.0 (In Development)
- Initial content organization
- Master content document created
- Design specifications defined
- Navigation structure established

### Planned Version 1.1.0
- Complete website launch
- All content implemented
- Mobile responsive
- Analytics integrated

---

## 📌 Important Notes

### Content Maintenance
- Keep job/internship spreadsheets current
- Update certification links annually
- Verify all external links quarterly
- Refresh student experience stories

### Technical Considerations
- Optimize images for web (compress before upload)
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Ensure WCAG 2.1 Level AA compliance
- Monitor site performance with Lighthouse

### Future Enhancements
- AI chatbot integration
- Personalized learning paths
- Career assessment tools
- Alumni mentorship platform

---

**Built with 💜 for ACU COBA Students**

*Empowering the next generation of Christian business leaders*

---

**Last Updated**: November 2024  
**Repository**: [GitHub Repository URL]  
**Website**: [Live Website URL]
