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
        content="https://raw.githubusercontent.com/GourangaDasSamrat/My-Personal-Portfolio/refs/heads/main/public/images/Preview.png
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
        content="https://raw.githubusercontent.com/GourangaDasSamrat/My-Personal-Portfolio/refs/heads/main/public/images/Preview.png
      />
      <meta name="twitter:site" content="@gouranga_khulna" />{" "}
      <meta name="twitter:creator" content="@gouranga_khulna" />{" "}
      <script type="application/ld+json">
        {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gouranga Das Samrat",
      "url": "https://gourangadas.netlify.app/",
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
      "image": "https://raw.githubusercontent.com/GourangaDasSamrat/My-Personal-Portfolio/refs/heads/main/public/images/Preview.png,
      "knowsAbout": ["Frontend Development", "React JS", "JavaScript", "HTML", "CSS", "Bootstrap", "Responsive Web Design", "UI Development", "Web Development", "Single Page Applications"],
      "birthDate": "2008-10-05"
    }
  `}
      </script>
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
