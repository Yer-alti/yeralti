# Landing Page Base 🌟

<div align="center">
  <img width="1440" alt="Landing Page" src="https://github.com/user-attachments/assets/95758a94-b190-462e-a7b4-ab224f174ad2" />
</div>

A modern web platform built with SvelteKit for students providing mentorship services. Features a sleek UI, form handling with superforms, and automated email notifications.

## ✨ Features

- **Modern Design System**
  - Custom Tailwind components
  - Animated transitions and micro-interactions
  - Responsive layout for all devices
  - Yellow-themed professional color palette

- **Interactive Components**
  - Dynamic form validation
  - Animated navigation
  - Custom carousel implementation
  - Toast notifications

<div align="center">
  <img width="1440" alt="Application Form" src="https://github.com/user-attachments/assets/998fc4e2-6e75-4c79-80ac-4567b8a1a9a2" />
</div>

## 🛠 Tech Stack

- **Frontend**: SvelteKit 5.0
- **Styling**: TailwindCSS
- **Animations**: Svelte Motion
- **Form Handling**: Superforms + Zod
- **Email**: Nodemailer
- **Icons**: Lucide Icons

## 📱 Mobile Experience

<div align="center">
  <img width="200" alt="Mobile View" src="https://github.com/user-attachments/assets/dd344d1d-3716-4841-8dea-4cf834a435bf" />
</div>

## 🚀 Getting Started

1. **Clone and Install**
```bash
git clone https://github.com/yourusername/rising-stars-mentorship.git
cd rising-stars-mentorship
npm install
```

2. **Environment Setup**
```bash
# Create .env file
cp .env.example .env

# Add your email credentials
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

3. **Development**
```bash
# Start development server
npm run dev

# Open in browser
npm run dev -- --open
```

4. **Building**
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Palette

```css
:root {
  --primary: #fdb833;
  --primary-soft: #fdc43f;
  --secondary: #ffda3d;
  --secondary-soft: #ffe94e;
  --pop: #fff75e;
  --bg: #FAF8DB;
}
```

<div align="center">
  <img width="1440" alt="About Page" src="https://github.com/user-attachments/assets/acf8b7f6-9777-4091-ac73-3e4a74e30587" />
</div>

## ✉️ Contact Form

Integrated email system using Nodemailer for automatic notification handling.

<div align="center">
  <img width="552" alt="Contact Form" src="https://github.com/user-attachments/assets/6d050a63-c533-41e8-833b-99cffbe0e785" />
</div>

## 📦 Project Structure

```
rising-stars-mentorship/
├── src/
│   ├── routes/            # SvelteKit routes
│   ├── lib/              # Shared components
│   │   ├── components/   # Reusable UI components
│   │   ├── server/      # Server-side utilities
│   │   └── schemas/     # Zod validation schemas
│   └── app.css          # Global styles
├── static/              # Static assets
└── tests/              # Unit tests
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Me

---

<div align="center">
  Made with ❤️ by Carabelli
</div>