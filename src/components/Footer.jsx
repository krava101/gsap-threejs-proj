import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue"> Find an Apple Store </span>
            or
            <span className="underline text-blue"> other retailer </span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call +000-800-00-000
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @2024 Apple Inc. All rights reserved.
          </p>
          <ul className="flex">
            {footerLinks.map((link, i) => (
              <li key={i} className="font-semibold text-gray text-xs">
                <a href="#">
                  {link}{" "}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2"> | </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;