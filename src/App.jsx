import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import {
  About,
  Contact,
  Footer,
  Hero,
  Loader,
  NavBar,
  Projects,
  Sidebar,
  TechStack,
} from "./sections";

const MainContent = () => (
  <>
    <Helmet>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta name="author" content="Gouranga Das Samrat" />
      <meta name="rating" content="General" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="BD" />
      <meta name="geo.placename" content="Khulna" />
      <meta http-equiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Highly motivated & passionate Frontend Web Developer specializing in modern, responsive web apps with HTML, CSS, JavaScript, and React JS. Explore my work and skills here."
      />
      <meta
        name="keywords"
        content="Gouranga Das Samrat, Frontend Developer, Web Developer, React JS, JavaScript ES6, HTML, CSS, Bootstrap 5, Responsive Web Design, UI Development, Web Development Portfolio, Junior Frontend Developer, Bangladesh Developer, Khulna, Modern Web Development, Single Page Application"
      />
      <link rel="canonical" href="https://gourangadas.netlify.app/" />
      <meta name="theme-color" content="#000000" />
      <meta
        property="og:title"
        content="Gouranga Das Samrat | Frontend Web Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Highly motivated and passionate Frontend Web Developer specializing in modern web applications with HTML, CSS, JavaScript, and React JS. Explore my work here."
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/GourangaDasSamrat/My-Personal-Portfolio/refs/heads/main/public/images/Preview.png"
      />
      <meta property="og:url" content="https://gourangadas.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Gouranga Das Samrat - Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Gouranga Das Samrat | Frontend Web Developer"
      />
      <meta
        name="twitter:description"
        content="Highly motivated and passionate Frontend Web Developer specializing in modern web applications with HTML, CSS, JavaScript, and React JS. Explore my work here."
      />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/GourangaDasSamrat/My-Personal-Portfolio/refs/heads/main/public/images/Preview.png"
      />
      <meta name="twitter:site" content="@gouranga_khulna" />
      <meta name="twitter:creator" content="@gouranga_khulna" />
      <meta
        property="article:author"
        content="https://www.facebook.com/gourangadassamrat"
      />
      <meta property="profile:first_name" content="Gouranga" />
      <meta property="profile:last_name" content="Das Samrat" />
      <meta property="profile:username" content="gourangadassamrat" />
      <script type="application/ld+json">
        {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gouranga Das Samrat",
      "url": "https://gourangadas.netlify.app/",
      "email": "gouranga.das.khulna@gmail.com",
      "telephone": "",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Khulna",
        "addressRegion": "Khulna",
        "addressCountry": "Bangladesh"
      },
      "workLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Khulna",
          "addressCountry": "Bangladesh"
        }
      },
      "sameAs": [
        "https://github.com/GourangaDasSamrat",
        "https://linkedin.com/in/gouranga-das-samrat",
        "https://gourangadas.netlify.app/",
        "mailto:gouranga.das.khulna@gmail.com",
        "https://leetcode.com/u/gourangadassamrat/",
        "https://codepen.io/gouranga-das-samrat",
        "https://www.reddit.com/user/Capable-Plantain8709/",
        "https://www.behance.net/gourangsamrat",
        "https://dribbble.com/gourangadassamrat",
        "https://stackoverflow.com/users/27733996/gouranga-das-samrat?tab=profile",
        "https://www.quora.com/profile/Gouranga-Das-Samrat",
        "https://www.twitch.tv/gourangadassamrat",
        "https://www.youtube.com/@GourangaDasSamrat",
        "https://medium.com/@gouranga.das.khulna",
        "https://gourangadassamrat.blogspot.com/",
        "https://discord.gg/jnZStfKW7v",
        "https://x.com/gouranga_khulna",
        "https://www.facebook.com/gourangadassamrat",
        "https://instagram.com/gouranga.das.khulna",
        "https://www.tiktok.com/@gourangadassamrat",
        "https://www.threads.net/@gouranga.das.khulna",
        "https://pinterest.com/gourangadaskhulna"
      ],
      "jobTitle": "Frontend Web Developer",
      "alumniOf": [
         {
          "@type": "EducationalOrganization",
          "name": "Bangabasi Secondary School",
          "location": {
            "@type": "Place",
            "name": "Khalishpur, Khulna"
           }
         }
      ],
      "gender": "Male",
      "nationality": "Bangladeshi",
      "description": "Highly motivated and passionate 16-year-old Frontend Web Developer specializing in building modern, responsive, and user-friendly web applications.",
      "image": "https://raw.githubusercontent.com/GourangaDasSamrat/My-Personal-Portfolio/refs/heads/main/public/images/Preview.png",
      "knowsAbout": ["Frontend Development", "React JS", "JavaScript", "HTML", "CSS", "Bootstrap", "Responsive Web Design", "UI Development", "Web Development", "Single Page Applications"],
      "birthDate": "2008-10-05",
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Frontend Web Developer",
        "occupationCategory": "15-1254.00",
        "skills": [
          "React.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap  5",
          "Tailwind CSS",
          "Responsive Design",
          "UI/UX",
          "Version Control",
          "Web Performance Optimization"
        ]
      },
      "seeks": {
        "@type": "Demand",
        "description": "Looking for frontend development opportunities and collaborations"
      },
      "makesOffer": {
        "@type": "Offer",
        "description": "Frontend web development services including React.js development, responsive design, and UI/UX implementation"
      },
      "memberOf": [
        {
          "@type": "Organization",
          "name": "GitHub Community"
        },
        {
          "@type": "Organization",
          "name": "Stack Overflow Community"
        }
      ]
    }
  `}
      </script>
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-title" content="Gouranga Das Samrat" />
      <meta name="application-name" content="Gouranga Das Samrat Portfolio" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="google" content="notranslate" />
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="copyright" content="Gouranga Das Samrat" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta
        name="classification"
        content="Portfolio, Web Development, Frontend Development"
      />
      <meta name="designer" content="Gouranga Das Samrat" />
      <meta name="owner" content="Gouranga Das Samrat" />
      <meta name="category" content="Portfolio" />
      <meta name="reply-to" content="gouranga.das.khulna@gmail.com" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="generator" content="React, Vite" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <link rel="me" href="https://github.com/GourangaDasSamrat" />
      <link rel="me" href="https://linkedin.com/in/gouranga-das-samrat" />
      <link rel="author" href="https://gourangadas.netlify.app/about" />
    </Helmet>
    <NavBar />
    <Loader />
    <Sidebar />
    <Hero />
    <About />
    <TechStack />
    <Projects />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="bg-black-100">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
