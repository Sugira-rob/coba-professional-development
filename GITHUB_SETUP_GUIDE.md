# GitHub Setup Guide
## COBA Professional Development Website

Complete step-by-step guide to upload your project to GitHub.

---

## 📋 Prerequisites

Before you start, make sure you have:
- [ ] A GitHub account ([Create one here](https://github.com/join))
- [ ] Git installed on your computer ([Download here](https://git-scm.com/downloads))
- [ ] All your project files ready

---

## 🚀 Quick Start (5 Steps)

### Step 1: Create Repository on GitHub

1. **Go to GitHub** and log in
2. **Click the "+" icon** in the top right → "New repository"
3. **Fill in repository details**:
   - **Repository name**: `coba-professional-development`
   - **Description**: "Professional development resource platform for ACU COBA students"
   - **Visibility**: Choose Public or Private
   - **Initialize**: ❌ Do NOT check any boxes (we have files already)
4. **Click "Create repository"**

---

### Step 2: Prepare Your Local Files

Open your terminal/command prompt and navigate to where you want to store the project:

```bash
# Create project folder
mkdir coba-professional-development
cd coba-professional-development

# Copy all your downloaded files here:
# - COBA_Master_Content_Document.md
# - README.md
# - LICENSE
# - .gitignore
# - CONTRIBUTING.md
```

**On Windows (using File Explorer):**
1. Create a folder named `coba-professional-development`
2. Copy all downloaded files into this folder
3. Right-click in the folder → "Git Bash Here" or "Open in Terminal"

**On Mac (using Finder):**
1. Create a folder named `coba-professional-development`
2. Copy all downloaded files into this folder
3. Right-click folder → "New Terminal at Folder"

---

### Step 3: Initialize Git Repository

Run these commands in your terminal (one at a time):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: COBA Professional Development Website"

# Rename branch to 'main' (GitHub's default)
git branch -M main
```

✅ **What just happened:**
- Created a local Git repository
- Added all your files to Git
- Made your first commit (snapshot) with a message
- Renamed the branch to "main"

---

### Step 4: Connect to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Connect your local repository to GitHub
git remote add origin https://github.com/YOUR_USERNAME/coba-professional-development.git

# Verify connection
git remote -v
```

You should see:
```
origin  https://github.com/YOUR_USERNAME/coba-professional-development.git (fetch)
origin  https://github.com/YOUR_USERNAME/coba-professional-development.git (push)
```

---

### Step 5: Push to GitHub

```bash
# Upload your files to GitHub
git push -u origin main
```

**First time?** Git may ask for your credentials:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your password!)

#### How to Create Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "COBA Project"
4. Select scopes: Check `repo` (all repository permissions)
5. Click "Generate token"
6. **Copy the token** and save it somewhere safe!
7. Use this token as your password when pushing to GitHub

---

## ✅ Verify Upload

1. **Go to your GitHub repository**: `https://github.com/YOUR_USERNAME/coba-professional-development`
2. **You should see**:
   - ✅ All your files uploaded
   - ✅ README.md displayed on the main page
   - ✅ Green checkmark next to your commit message

**Congratulations! 🎉 Your project is now on GitHub!**

---

## 📁 Recommended Project Structure

Once you're ready to build the website, organize your files like this:

```
coba-professional-development/
│
├── README.md                          ✅ Already have
├── LICENSE                            ✅ Already have
├── .gitignore                         ✅ Already have
├── CONTRIBUTING.md                    ✅ Already have
├── COBA_Master_Content_Document.md   ✅ Already have
│
├── docs/                              📚 Create this later
│   ├── DESIGN_GUIDE.md
│   ├── DEVELOPMENT_GUIDE.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── CONTENT_MANAGEMENT.md
│
├── src/                               💻 Create when building
│   ├── index.html
│   ├── css/
│   │   ├── main.css
│   │   ├── variables.css
│   │   └── components/
│   ├── js/
│   │   ├── main.js
│   │   └── components/
│   └── assets/
│       ├── images/
│       └── videos/
│
└── build/                             🏗️ Generated when you build
    └── (compiled files)
```

---

## 🔄 Future Updates

### Making Changes

When you want to add or update files:

```bash
# 1. Make your changes to files

# 2. Check what changed
git status

# 3. Add changed files
git add .
# Or add specific files:
# git add filename.md

# 4. Commit with a message
git commit -m "Add: New certification resources"

# 5. Push to GitHub
git push
```

### Commit Message Examples

Good commit messages:
```bash
git commit -m "Add: Data Analytics certification links"
git commit -m "Fix: Broken YouTube embed in Finance section"
git commit -m "Update: Internship timeline for 2025"
git commit -m "Improve: Mobile responsiveness of hero slider"
git commit -m "Remove: Outdated accounting resources"
```

---

## 🌿 Working with Branches

### Why Use Branches?
Branches let you work on new features without affecting the main code.

### Creating a Branch

```bash
# Create and switch to new branch
git checkout -b feature/new-section

# Make your changes, then commit
git add .
git commit -m "Add: International students resources"

# Push branch to GitHub
git push -u origin feature/new-section
```

### Creating Pull Request

1. Go to GitHub repository
2. You'll see "Compare & pull request" button
3. Click it, add description
4. Click "Create pull request"
5. After review, merge into main

### Switching Branches

```bash
# See all branches
git branch

# Switch to a branch
git checkout branch-name

# Switch back to main
git checkout main
```

---

## 🔒 Using GitHub with Teams

### Adding Collaborators

1. **Repository Settings** → Collaborators
2. **Click "Add people"**
3. **Enter GitHub usernames** of team members
4. They'll receive an invitation email

### Permission Levels

- **Read**: Can view and clone
- **Write**: Can push changes
- **Admin**: Full control (be careful!)

**Recommended for COBA team:**
- Project Lead: Admin
- Content Managers: Write
- Contributors: Write or Read (use Pull Requests)

---

## 📊 Using GitHub Features

### Issues (Track Tasks & Bugs)

**Create an Issue:**
1. Go to "Issues" tab
2. Click "New issue"
3. Add title and description
4. Assign to team member (optional)
5. Add labels (bug, enhancement, content, etc.)

**Example Issue:**
```
Title: Add CFA certification resources to Finance section
Description: 
- Add link to CFA Institute website
- Include study materials
- Add CFA preparation timeline

Labels: enhancement, content, finance
```

### Projects (Organize Work)

1. **Projects tab** → "New project"
2. **Choose template**: "Board" view
3. **Add columns**: To Do, In Progress, Done
4. **Link issues** to track progress

### Wiki (Additional Documentation)

1. **Wiki tab** → "Create the first page"
2. Add documentation that doesn't fit in README
3. Good for: FAQs, Style guides, Tutorials

---

## 🔍 Useful Git Commands

### Checking Status
```bash
# See what files changed
git status

# See commit history
git log

# See changes in files
git diff
```

### Undoing Changes
```bash
# Undo changes to a file (before commit)
git checkout -- filename.md

# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Discard all local changes (CAREFUL!)
git reset --hard HEAD
```

### Syncing with GitHub
```bash
# Get latest changes from GitHub
git pull

# See remote repositories
git remote -v
```

---

## 🆘 Troubleshooting

### Problem: "Permission denied"
**Solution:** 
- Make sure you're using a Personal Access Token, not your password
- Check if token has `repo` permissions

### Problem: "Repository not found"
**Solution:**
- Check repository name spelling
- Verify you have access (if private)
- Make sure you're logged in: `git config --global user.name "Your Name"`

### Problem: "Merge conflict"
**Solution:**
```bash
# Pull latest changes first
git pull

# If conflict occurs, open the file
# You'll see conflict markers like:
# <<<<<<< HEAD
# your changes
# =======
# their changes
# >>>>>>>

# Edit file to keep what you want
# Then:
git add .
git commit -m "Resolve merge conflict"
git push
```

### Problem: "Nothing to commit"
**Solution:**
- Make sure you actually changed files
- Check if you're in the right directory: `pwd`
- Use `git status` to see what Git sees

---

## 📱 GitHub Desktop (Alternative)

**Don't like command line?** Use GitHub Desktop (Visual Interface):

1. **Download**: [desktop.github.com](https://desktop.github.com)
2. **Install** and login to GitHub
3. **File** → "New Repository" or "Clone Repository"
4. **Make changes** to files
5. **Write commit message** in GitHub Desktop
6. **Click "Commit"** then "Push"

**Much easier!** But command line gives you more power.

---

## 🎓 Learning Resources

### Git Basics
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

### GitHub Guides
- [Hello World Guide](https://guides.github.com/activities/hello-world/)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

### Video Tutorials
- [Git & GitHub for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk) (freeCodeCamp)
- [GitHub Tutorial](https://www.youtube.com/watch?v=eulnSXkhE7I) (Programming with Mosh)

---

## ✅ Next Steps

After setting up GitHub, you should:

1. **✅ Add repository description** on GitHub
2. **✅ Add topics/tags** (web-development, education, resources)
3. **✅ Create a docs/ folder** for additional documentation
4. **✅ Set up GitHub Pages** (if deploying there)
5. **✅ Add team members** as collaborators
6. **✅ Create your first issue** for next task

---

## 📞 Need Help?

- **Git Issues**: [Git Documentation](https://git-scm.com/doc)
- **GitHub Help**: [GitHub Support](https://support.github.com/)
- **Team Questions**: Post in GitHub Discussions

---

## 🎉 You're Ready!

You now have:
- ✅ Project on GitHub
- ✅ Version control set up
- ✅ Team collaboration ready
- ✅ Professional project structure

**Next:** Start building the actual website! When you have files ready, just commit and push them to GitHub.

---

**Created for**: COBA Professional Development Website  
**Last Updated**: November 2024  
**Questions?** Open an issue on GitHub!
