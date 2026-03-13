import { footerIconsList } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300 py-4">
      <div className="flex items-center md:gap-16 gap-8">
        {footerIconsList.map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target={icon.href.startsWith("http") ? "_blank" : "_self"}
            rel={icon.href.startsWith("http") ? "noreferrer" : undefined}
            className="cursor-pointer hover:-translate-y-5 transition-all duration-700"
          >
            <img
              src={icon.icon}
              alt={icon.name}
              className="md:size-10 size-8"
            />
          </a>
        ))}
      </div>
      <div className="text-center px-5">
        <p className="font-regular md:text-lg text-sm text-white-50">
          Official portfolio and professional website of Humayun Jawad.
        </p>
        <p className="font-regular md:text-lg text-sm">
          {currentYear} (c) Humayun Jawad. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
