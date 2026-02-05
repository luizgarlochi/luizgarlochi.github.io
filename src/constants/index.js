import {
    backend,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    mysql,
    docker,
    wallet,
    threejs,
    ai,
    react,
    python,
    gaussian,
  } from "../assets";
  
export const navLinks = [
  {
    id: "about",
    title: "nav.about",
  },
  {
    id: "works",
    title: "nav.works",
  },
  {
    id: "contact",
    title: "nav.contact",
  },
];

  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: ai,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [

  ];
  
  const testimonials = [

  ];
  
const projects = [
  {
    id: "currency_wallet",
    nameKey: "projects.currencyWallet.name",
    descriptionKey: "projects.currencyWallet.description",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: wallet,
    source_code_link: "https://github.com/luizgarlochi/Wallet-Currency-Converter",
  },
  {
    id: "gaussian_3d",
    nameKey: "projects.gaussian3D.name",
    descriptionKey: "projects.gaussian3D.description",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "CudaToolkit", color: "green-text-gradient" },
      { name: "PyTorch", color: "red-text-gradient" },
      { name: "Conda-Forge", color: "orange-text-gradient" },
    ],
    image: gaussian,
    source_code_link: "https://github.com/luizgarlochi/Gaussian-3D-Reconstruction",
  },
];

  
  export { services, technologies, experiences, testimonials, projects };