# 🚀 3D Developer Portfolio ✨

<p align="center">
Hey ! I've poured my heart and soul into building this 3D Developer Portfolio project. My goal was to create something that truly stands out, something with stunning visuals and cool interactive 3D stuff that grabs attention right away. I think it's perfect for anyone who's into frontend development, design, or just loves creative coding and wants to show off their skills in a unique way. Hope you like it! 😊
</p>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Check%20it%20out%21-%23FF0000?style=for-the-badge)](https://gouranga.das.khulna@gmail.com)

## ▶️ Demo Video

Need a quick look? Check out the demo video below to see this 3D portfolio in action! 👇

[![Watch the video](https://img.youtube.com/vi/d9xWeuUohDo/maxresdefault.jpg)](https://youtu.be/d9xWeuUohDo)


## ✨ Features

Here are some of the cool things you'll find in this 3D portfolio project:

- 🎥 **Hero Section Awesomeness:** It's got a motion-triggered 3D avatar that reacts as you scroll or move your mouse! How cool is that? 😎
- 👨‍💻 **Interactive About Section:** My 'About Me' section isn't just text! It features an interactive 3D model to make things more engaging.
- 📁 **Project Showcase:** I've built a custom animated slider to showcase my projects. No more boring static lists! 🔄
- 🚀 **Marquee & Shiny Tech Stack:** The technologies I've used are displayed with a smooth marquee animation 🚀 and a neat hover shiny effect ✨ to make them pop!
- ✍️ **Smooth Testimonials:** Testimonials section with a slick Tailwind CSS smooth animated hover effect. Looks really clean! ✨
- 📨 **Validation Ready Contact Form:** You can receive messages directly! It's got form validation built-in using React Hook Form and Zod, and it uses Email.js so you don't even need a backend for it. Super convenient! ✅

---

## 🛠️ Technologies Used

This project was built using some awesome technologies. Here's the stack:

- ⚛️ **React 19:** For building the user interface.
- 🌀 **Tailwind CSS v4:** For super fast and utility-first styling.
- 🎮 **Three.js + React Three Fiber:** To bring those amazing 3D graphics to life in React.
- 🎞️ **GSAP:** For powerful and smooth animations.
- 📩 **Email.js:** To handle contact form submissions without a backend.
- ✅ **React Hook Form + Zod:** For robust form validation.
- 🪖 **React Helmet:** To manage document head tags easily.

<p align="center">
    <img src="https://img.shields.io/badge/-React_JS_V19-black?style=for-the-badge&logoColor=white&logo=react&color=007ACC" alt="React JS Badge" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS_v4-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=030712" alt="Tailwind CSS Badge" />
    <img src="https://img.shields.io/badge/-Three.js-FFFFFF?style=for-the-badge&logo=three.js&logoColor=black" alt="Three.js Badge" />
    <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="GSAP Badge" />
    </p>

---

## 🚀 Getting Started

Ready to get this project up and running on your local machine? Just follow these simple steps, Sir!

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/GourangaDasSamrat/My-Personal-Portfolio.git
    ```

2.  **Navigate into the project directory:**

    ```bash
    cd My-Personal-Portfolio
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # Or if you prefer yarn:
    # yarn
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    # Or if you prefer yarn:
    # yarn dev
    ```

5.  Open your browser and visit `http://localhost:5173` (or whatever address the console provides) to see the portfolio! ✨

---

## Snippets (Code to Copy)

<details>
  <summary>📋 CSS</summary>

```js
// Example JavaScript snippet
@import "tailwindcss";

@layer base {
@font-face {
  font-family: "aeonik";
  src: url("/fonts/Aeonik-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "aeonik";
  src: url("/fonts/Aeonik-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "aeonik";
  src: url("/fonts/Aeonik-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "aeonik";
  src: url("/fonts/Aeonik-Black.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
}

@theme {
--font-sans: "aeonik";
--color-blue-50: #598eff;
--color-blue-300: #1c34ff;
--color-white-50: #fdfdfd;
--color-black-100: #0b0620;
--color-black-300: #17151f;
--color-pink-100: #ff28d5;
}

html,
body {
width: 100dvw;
overflow-x: hidden;
background-color: #0b0620;
color: #a7a7a7;
scroll-behavior: smooth;
}

section {
width: 100dvw;
min-height: 100dvh;
}

@layer utilities {
.flex-center {
  @apply flex items-center justify-center;
}
}

@layer components {
.gradient-title {
  background: linear-gradient(
    180deg,
    #fdfdfd 43.1%,
    rgba(253, 253, 253, 0) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient-border {
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}
.gradient-border::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1.5px; /* Border width */
  border-radius: 20px;
  background: linear-gradient(
    20deg,
    #fdfdfd 0%,
    rgba(253, 253, 253, 0) 100%
  ); /* Gradient colors */
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
.gradient-box {
  background: rgb(11, 6, 32);
  background: linear-gradient(
    0deg,
    rgba(11, 6, 32, 1) 0%,
    rgba(16, 11, 51, 0.7217480742296919) 23%,
    rgba(16, 11, 51, 0) 100%
  );
}
.gradient-sphere {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  filter: blur(200px);
}
.sphere-1 {
  background: radial-gradient(circle, #ff28d5, #ff28d5);
  top: -100px;
  left: 300px;
  animation: wander-left 10s ease-in-out infinite;
}
.sphere-2 {
  background: radial-gradient(circle, #1c34ff, #1c34ff);
  top: 100px;
  right: 300px;
  animation: wander-right 12s ease-in-out infinite;
}
/* tech stack */
.about-gradient-sphere {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(200px);
}
.about-sphere-1 {
  background: radial-gradient(circle, #ff28d5, #ff28d5);
  bottom: 300px;
  right: 150px;
  animation: wander-left 10s ease-in-out infinite;
}
.about-sphere-2 {
  background: radial-gradient(circle, #1c34ff, #1c34ff);
  bottom: 100px;
  right: 50px;
}
.tech-stack-gradient-left-box {
  background: rgb(11, 6, 32);
  background: linear-gradient(
    90deg,
    rgba(11, 6, 32, 1) 0%,
    rgba(11, 6, 32, 0.6601234243697479) 53%,
    rgba(16, 11, 51, 0) 100%
  );
}
.tech-stack-gradient-right-box {
  background: rgb(11, 6, 32);
  background: linear-gradient(
    -90deg,
    rgba(11, 6, 32, 1) 0%,
    rgba(11, 6, 32, 0.6601234243697479) 53%,
    rgba(16, 11, 51, 0) 100%
  );
}
/* marquee */
.marquee {
  width: 100dvw;
  overflow: hidden;
  position: relative;
}
.marquee-box {
  display: flex;
  align-items: center;
  width: 200%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  animation: marquee 60s linear infinite;
}
.marquee-item {
  float: left;
}
.marquee-item:after {
  content: "";
  position: absolute;
  top: 100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
  background: linear-gradient(
    to bottom,
    rgba(229, 172, 142, 0),
    rgba(255, 255, 255, 0.5) 50%,
    rgba(229, 172, 142, 0)
  );
}
/*This activates the shine once the button has been hovered*/
.marquee-item:hover::after,
button:focus::after {
  animation: shine 1s forwards;
}
/* projects */
.projects-gradient-sphere {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(150px);
}
.projects-sphere-1 {
  background: radial-gradient(circle, #ff28d5, #ff28d5);
  top: 300px;
  left: 50px;
}
.projects-sphere-2 {
  background: radial-gradient(circle, #1c34ff, #1c34ff);
  top: 400px;
  left: 150px;
}
/* carousel */
.carousel-gradient-left-box {
  background: rgb(11, 6, 32);
  background: linear-gradient(
    90deg,
    rgba(11, 6, 32, 1) 0%,
    rgba(11, 6, 32, 0) 100%,
    rgba(11, 6, 32, 0) 100%
  );
}

.carousel-gradient-right-box {
  background: rgb(11, 6, 32);
  background: linear-gradient(
    -90deg,
    rgba(11, 6, 32, 1) 0%,
    rgba(11, 6, 32, 0) 100%,
    rgba(11, 6, 32, 0) 100%
  );
}
/* testimonial */
.testimonial-gradient-sphere {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(150px);
}
.testimonial-sphere-1 {
  background: radial-gradient(circle, #ff28d5, #ff28d5);
  bottom: 300px;
  right: 100px;
}
.testimonial-sphere-2 {
  background: radial-gradient(circle, #1c34ff, #1c34ff);
  bottom: 100px;
  right: 0px;
  animation: wander-right 16s ease-in-out infinite;
}
/* nav-side-bar */
.side-bar-bg {
  border-bottom: 1px solid rgba(255, 255, 255, 0.01);
  background: rgba(23, 21, 31, 0.7);
  backdrop-filter: blur(10px);
}
}

@keyframes wander-left {
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(-20vw) translateY(50vh);
}
100% {
  transform: translateX(0);
}
}

@keyframes wander-right {
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(30vw) translateY(-50vh);
}
100% {
  transform: translateX(0);
}
}
@keyframes rotate {
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
}

@keyframes shine {
100% {
  transform: rotateZ(60deg) translate(1em, -15em);
}
}

@keyframes marquee {
0% {
  left: 0;
}
100% {
  left: -100%;
}
}

/* tablet */
@media screen and (min-width: 1024px) {
.testimonial-card:nth-of-type(even) {
  transform: translateY(70px);
}
}

```

</details>

<details>
<summary>
💌 Mail
</summary>

```html
<div
  style="font-family: system-ui, sans-serif, Arial; font-size: 14px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"
>
  <!-- Envelope Header -->
  <div
    style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 1px dashed #cccccc;"
  >
    <div style="font-size: 18px; color: #2c3e50; font-weight: bold;">
      📨 You've Got Mail!
    </div>
    <div style="font-size: 14px; color: #7f8c8d; margin-top: 5px;">
      A message from {{name}} has arrived.
    </div>
  </div>

  <!-- Message Body -->
  <div style="padding: 20px;">
    <div style="display: flex; align-items: flex-start;">
      <!-- Avatar -->
      <div
        style="padding: 10px; margin-right: 15px; background-color: #e3f2fd; border-radius: 50%; font-size: 24px;"
      >
        &#x1F464;
      </div>
      <!-- Sender Details -->
      <div>
        <div style="font-size: 16px; color: #2c3e50; font-weight: bold;">
          {{name}}
        </div>
        <div style="font-size: 12px; color: #95a5a6; margin-bottom: 10px;">
          {{time}}
        </div>
        <div style="font-size: 14px; color: #34495e; line-height: 1.5;">
          {{message}}
        </div>
      </div>
    </div>
  </div>

  <!-- Title & Email Section -->
  <div
    style="background-color: #f8f9fa; padding: 20px; border-top: 1px dashed #cccccc;"
  >
    <div style="font-size: 14px; color: #2c3e50; margin-bottom: 10px;">
      <strong>📌 Title:</strong> {{title}}
    </div>
    <div style="font-size: 14px; color: #2c3e50;">
      <strong>📧 Email:</strong> {{email}}
    </div>
  </div>

  <!-- Footer -->
  <div
    style="background-color: #2c3e50; padding: 15px; text-align: center; color: #ffffff; font-size: 12px;"
  >
    Please respond at your earliest convenience.
  </div>
</div>
```

</details>

---

## ⚠️ Important Note / Disclaimer

This is a personal portfolio project built to showcase my skills. Feel free to use it as inspiration or a base for your own portfolio, but please make sure to customize it significantly with your own content, design, and 3D models. Sharing it as your own work without substantial changes is not cool, okay? 😉

---

## 🙏 Contribution

Hey, if you find any bugs, have ideas for improvements, or want to add a new feature, feel free to open an issue or submit a pull request! Contributions are always welcome and appreciated. 😊 Let's make this even better together!

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). You can find the full

---

## 👨‍💻 Author

This project was lovingly crafted by me, Gouranga Das Samrat. 😊

[![Github](https://img.shields.io/badge/-Github-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GourangaDasSamrat)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gouranga-das-samrat)
[![Portfolio](https://img.shields.io/badge/-Portfolio-black?style=for-the-badge&logo=netlify&logoColor=white)](https://gourangadas.netlify.app/)
[![Email](https://img.shields.io/badge/-Email-black?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gouranga.das.khulna@gmail.com)
[![LeetCode](https://img.shields.io/badge/-LeetCode-black?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/gourangadassamrat/)
[![CodePen](https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/gouranga-das-samrat)
[![Behance](https://img.shields.io/badge/-Behance-black?style=for-the-badge&logo=behance&logoColor=white)](https://www.behance.net/gourangsamrat)
[![StackOverflow](https://img.shields.io/badge/-StackOverflow-black?style=for-the-badge&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/27733996/gouranga-das-samrat?tab=profile)
[![Medium](https://img.shields.io/badge/-Medium-black?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@gouranga.das.khulna)

---

---

## ⭐ Show Your Support

If you like this project, please give it a star ⭐ on GitHub! It helps a lot and motivates me to create more cool stuff. Thanks, Sir! 🙏

---

## 📬 Feedback

Got any feedback or suggestions? Don't hesitate to reach out or open an issue! I'm always open to hearing your thoughts and making improvements. Let's connect! 😊

---
