import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";
import { professionalProfiles } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5"
    >
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />

      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full">
          <div className="md:mt-40 mt-20">
            <p className="font md:text-2xl text-base">Hello, I&apos;m</p>
            <h1 className="font-bold md:text-9xl text-5xl">Humayun Jawad</h1>
            <p className="mt-4 max-w-3xl md:text-2xl text-base text-white-50">
              Humayun Jawad is a full stack developer in Pakistan specializing
              in React, Next.js, TypeScript, Node.js, and scalable product
              engineering.
            </p>
            <p className="mt-4 max-w-2xl md:text-xl text-sm">
              Explore the official portfolio, recent projects, and public
              profiles of Humayun Jawad across LinkedIn, GitHub, Upwork, and
              Fiverr.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {professionalProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-black-300/70 px-4 py-2 text-sm text-white-50 transition-transform duration-300 hover:-translate-y-1"
                >
                  {profile.name}
                </a>
              ))}
            </div>
            <h2 className="font-bold md:text-9xl text-5xl mt-6">Full Stack</h2>
          </div>
          <div className="absolute w-full z-30 bottom-20 right-0">
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-center md:gap-5 gap-1">
                <p className="md:text-base text-xs">Explore</p>
                <img
                  src="images/arrowdown.svg"
                  alt="arrowdown"
                  className="size-7 animate-bounce"
                />
              </div>
              <div className="flex flex-col items-end">
                <img src="/images/shape.svg" alt="shape" />
                <h1 className="font-bold md:text-9xl text-5xl">Developer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;
