# Muhammad Humayun Jawad - Portfolio

Personal portfolio website built with React, Vite, Three.js, and GSAP.

## Live
- Production: https://www.humayunjawad.com

## Tech Stack
- React 19
- Vite 6
- Three.js + React Three Fiber + Drei
- GSAP
- Tailwind CSS v4
- React Hook Form + Zod
- EmailJS + Google reCAPTCHA

## Features
- Interactive 3D hero model with animation
- Animated project showcase carousel
- Tech stack marquee section
- Contact form with validation, reCAPTCHA, and EmailJS integration
- Fully responsive layout for desktop and mobile

## Project Structure
```text
src/
  components/
    models/
  constants/
  sections/
public/
  images/
  models/
  fonts/
```

## Local Development
1. Install dependencies
```bash
npm install
```

2. Create environment file
```bash
cp .env.example .env
```

3. Add required environment variables
```env
VITE_EMAIL_PUBLIC_KEY=
VITE_EMAIL_SERVICE_ID=
VITE_EMAIL_TEMPLATE_ID=
VITE_RECAPTCHA_SITE_KEY=
```

4. Start dev server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Deployment
This project is deployed on Vercel and accessible at:
- https://www.humayunjawad.com

## License
MIT License. See [LICENSE](LICENSE).
