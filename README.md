# Modern Portfolio Website Template

A beautiful, responsive portfolio website template built with React, TypeScript, and Tailwind CSS. This template features a modern design with smooth animations, dark/light sections, and comprehensive sections to showcase your professional journey.

![Portfolio Preview](https://source.unsplash.com/random/1200x630?portfolio&sig=1)

## 🚀 Quick Start

1. Fork this repository

```bash
git clone https://github.com/shresthacodes/Portfolio-Website-Template
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## 🎨 Customization Guide

### Personal Information

Edit the following sections in `src/App.tsx`:

1. **Basic Info** (Lines 104-114):

- Name
- Title
- Bio
- Profile picture URL

2. **Education** (Lines 156-169):

- Degrees
- Schools
- Years
- Descriptions

3. **Experience** (Lines 198-211):

- Job roles
- Companies
- Years
- Descriptions

4. **Skills** (Lines 280-292):

- Add/remove skills from the array

5. **Projects** (Lines 243-266):

- Title
- Description
- Image URL
- Demo link
- Code repository link

6. **Contact Information** (Lines 502-505):

- Email address

7. **Social Links** (Lines 515-536):

- GitHub
- Twitter
- LinkedIn
- Email

### Styling

1. **Colors**:

- Primary colors can be modified in the Tailwind classes (currently using `[#02010e]` and `[#d8ff00]`)
- Background patterns and gradients can be adjusted in the respective component styles

2. **Animations**:
   Custom animations are defined in `tailwind.config.js` (Lines 6-19)

3. **CSS Utilities**:
   Additional custom styles are available in `src/index.css`

## 📁 Project Structure

```bash
src/
├── App.tsx        # Main application component
├── index.css      # Global styles
├── main.tsx       # Application entry point
└── vite-env.d.ts  # TypeScript declarations
```

## 🛠️ Built With

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

If you have any questions or suggestions, please feel free to reach out.

---

Made with ❤️ by Shrestha Raj
