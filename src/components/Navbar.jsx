import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import {
  logo,
  menu,
  close,
  github,
  linkedin,
  flagBr,
  flagUSA,
} from "../assets";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = i18n.language;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full
        flex
        items-center
        py-5
        fixed
        top-0
        z-20
        bg-stone-950
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
                ${active === link.id ? "text-white" : "text-secondary"}
                hover:text-white
                text-[18px]
                font-medium
                cursor-pointer
              `}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{t(link.title)}</a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4 relative">
          {/* Social (desktop only) */}
          <div className="hidden sm:flex items-center gap-4">
            <img
              src={github}
              alt="github"
              className="w-8 h-8 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/luizgarlochi", "_blank")
              }
            />
            <img
              src={linkedin}
              alt="linkedin"
              className="w-8 h-8 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/luiz-arlochi/",
                  "_blank"
                )
              }
            />
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="
                flex
                items-center
                gap-2
                bg-stone-900
                px-2
                py-1
                rounded-full
                hover:bg-stone-800
                transition
              "
            >
              <img
                src={currentLang === "pt" ? flagBr : flagUSA}
                alt="language"
                className="h-9 w-9 object-contain"
              />
              <span className="hidden sm:block text-white text-sm uppercase">
                {currentLang}
              </span>
            </button>

            {langOpen && (
              <div
                className="
                  absolute
                  right-0
                  mt-2
                  bg-stone-900
                  rounded-xl
                  shadow-lg
                  p-2
                  z-50
                  min-w-[110px]
                "
              >
                {currentLang !== "pt" && (
                  <button
                    onClick={() => changeLanguage("pt")}
                    className="flex items-center gap-2 w-full px-3 py-2 hover:bg-stone-800 rounded-lg"
                  >
                    <img
                      src={flagBr}
                      alt="PT-BR"
                      className="h-9 w-9 object-contain"
                    />
                    <span className="text-white text-sm">PT</span>
                  </button>
                )}

                {currentLang !== "en" && (
                  <button
                    onClick={() => changeLanguage("en")}
                    className="flex items-center gap-2 w-full px-3 py-2 hover:bg-stone-800 rounded-lg"
                  >
                    <img
                      src={flagUSA}
                      alt="EN"
                      className="h-9 w-9 object-contain"
                    />
                    <span className="text-white text-sm">EN</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-7 h-7 object-contain"
              onClick={() => setToggle(!toggle)}
            />

            {toggle && (
              <div className="absolute top-20 right-4 bg-stone-900 p-6 rounded-xl">
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className="text-secondary text-[16px]"
                      onClick={() => {
                        setToggle(false);
                        setActive(link.id);
                      }}
                    >
                      <a href={`#${link.id}`}>{t(link.title)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
