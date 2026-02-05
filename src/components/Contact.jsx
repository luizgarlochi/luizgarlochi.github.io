import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import { validateForm } from "../utils/validateForm";
import { displayErrorAlert } from "../utils/errorHandle";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const { t } = useTranslation();

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    const errors = validateForm(name, email, message);

    if (Object.keys(errors).length > 0) {
      displayErrorAlert(t("contact.validationError"));
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_vbnlzuf",
        "template_5fzuqmh",
        {
          from_name: name,
          reply_to: email,
          message,
        },
        "Mvvu5zxrkvoIVhXS1"
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);
      alert(t("contact.success"));
    } catch (error) {
      console.error("Failed to send email", error);
      setLoading(false);
      displayErrorAlert(t("contact.error"));
    }
  };

  return (
    <div
      className="
        xl:mt-12
        xl:flex-row
        flex-col-reverse
        flex
        gap-5
        overflow-hidden
      "
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-indigo-950 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>
          {t("contact.title")}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.name")}
              <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              className="
                bg-tertiary
                p-6
                py-4
                placeholder:text-secondary
                text-white
                rounded-lg
                outilined-none
                border-none
                font-medium
              "
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.email")}
              <span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              className="
                bg-tertiary
                p-6
                py-4
                placeholder:text-secondary
                text-white
                rounded-lg
                outilined-none
                border-none
                font-medium
              "
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.message")}
              <span className="text-red-500">*</span>
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder")}
              className="
                bg-tertiary
                p-6
                py-4
                placeholder:text-secondary
                text-white
                rounded-lg
                outilined-none
                border-none
                font-medium
              "
              required
            />
          </label>

          <button
            type="submit"
            className="
              bg-tertiary
              py-3
              px-8
              outline-none
              w-fit
              text-white
              font-bold
              shadow-md
              shadow-primary
              rounded-xl
              hover:shadow-lg
            "
          >
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
