import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { bentoSocialLinks } from "../constants";

const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="Full stack engineer focused on product quality"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Humayun Jawad
                  </h1>
                  <p className="md:text-2xl mt-2">
                    Experienced full-stack developer with 6+ years of hands-on
                    work, specializing in React.js, Next.js, and TypeScript. I
                    build responsive, scalable, and production-grade web
                    applications across client, server, and infrastructure with
                    Node.js, Prisma, Supabase, Firebase, AWS, and CI/CD
                    pipelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div
                className="bg-[#c9a46a] hover:cursor-pointer rounded-2xl w-full md:h-full h-60"
                onClick={() => {
                  window.open("https://github.com/humayun-1/");
                }}
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  {/* <img src="![GitHub Stats](https://github-readme-stats-fast.vercel.app/api/streak?username=pranesh-2005&theme=radical)" />*/}
                  <h1 className="text-[#17151f] text-2xl font-bold mb-1">
                    Github Stats
                  </h1>
                  <img src="https://github-readme-stats-fast.vercel.app/api/streak?username=humayun-1&theme=radical" />
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Full Stack Development
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Designing and shipping scalable web products end-to-end,
                    from architecture and UI to APIs and deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Systems & Integrations
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    API integration, cloud deployment, and maintainable
                    full-stack architecture with reliable delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BUILD FAST!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BUILD CLEAN!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    SHIP VALUE!
                  </h1>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center md:gap-5">
                        <img src={item.icon} alt={item.icon} />
                        <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                          {item.name}
                        </h1>
                      </div>
                      <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrow-up"
                          className="md:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
