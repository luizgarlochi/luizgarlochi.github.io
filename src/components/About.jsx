import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useDeviceType } from '../utils/devicesTypes';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="
          w-full
          bg-gradient-to-r from-green-500 via-purple-500 to-pink-500
          p-[1px]
          rounded-[20px]
          shadow-card
        "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="
            bg-indigo-950
            rounded-[20px]
            py-5
            px-12
            min-h-[280px]
            flex
            justify-evenly
            items-center
            flex-col
            bg-opacity-95
          "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="
            text-white
            text-[20px]
            font-bold
            text-center
          "
          >
            {title}
          </h3>
        </div>

      </motion.div>

    </Tilt>
  )
};


const About = () => {
  const { isMobile } = useDeviceType();
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("about.introduction")}</p>
        <h2 className={styles.sectionHeadText}>{t("about.overview")}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="
          mt-4
          text-secondary
          text-[17px]
          max-w-3xl
          leading-[30px]
        "
      >
        {t("about.description")}
      </motion.p>
      <div className={`
      mt-20
      flex
      flex-wrap
      gap-10
      ${isMobile ? 'justify-center' : ''}
    `}>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
};

export default SectionWrapper(About, "about");