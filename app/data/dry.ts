export const navLink = [
  { url: "#about", text: "About" },
  { url: "#projects", text: "Projects" },
  { url: "#contact", text: "Contact" },
];

export const featuredProjects = [
  {
    name: "Gymate",
    desc: "Website for Gym enthusiasts. Gymate provides a space for people to improve their physical fitness and overall health through regular exercise and physical activity.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/darrellrahan/gymate/",
    demo: "https://darrellrahan-gymate.vercel.app/",
    img: "/assets/gymate.jpeg",
    imgFirst: true,
  },
  {
    name: "E-commerce",
    desc: "Minimalist E-commerce Store. This website features a modern and intuitive design, with easy-to-use navigation and a simple shopping experience that puts the focus on the products.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/darrellrahan/ecommerce/",
    demo: "https://darrellrahan-ecommerce.vercel.app/",
    img: "/assets/ecommerce.jpeg",
    imgFirst: false,
  },
  {
    name: "Car Rental",
    desc: "Website for renting cars. An online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/darrellrahan/car-rental/",
    demo: "https://darrellrahan-carrental.vercel.app/",
    img: "/assets/car-rental.jpeg",
    imgFirst: true,
  },
];

export const networthyProjects = [
  {
    name: "Sneakers E-commerce",
    github: "https://github.com/darrellrahan/sneakers-ecommerce/",
    demo: "https://darrellrahan-ecommerce.netlify.app/",
    tech: ["React"],
  },
  {
    name: "The Cocktail DB",
    github: "https://github.com/darrellrahan/thecocktaildb/",
    demo: "https://darrellrahan-thecocktaildb.netlify.app/",
    tech: ["React"],
  },
  {
    name: "TMDB",
    github: "https://github.com/darrellrahan/tmdb/",
    demo: "https://darrellrahan-tmdb.netlify.app/",
    tech: ["React"],
  },
  {
    name: "Cost Of Living",
    github: "https://github.com/darrellrahan/cost-of-living/",
    demo: "https://darrellrahan-costofliving.netlify.app/",
    tech: ["React"],
  },
  {
    name: "ToDo",
    github: "https://github.com/darrellrahan/todo-react/",
    demo: "https://darrellrahan-todo.netlify.app/",
    tech: ["React"],
  },
  {
    name: "Sudoku Puzzle",
    github: "https://github.com/darrellrahan/sudoku-puzzle/",
    demo: "https://darrellrahan-sudoku.netlify.app/",
    tech: ["React"],
  },
  {
    name: "Dot Onclick",
    github: "https://github.com/darrellrahan/dot-onclick/",
    demo: "https://darrellrahan-dotonclick.netlify.app/",
    tech: ["React"],
  },
  {
    name: "Datamuse Synonym",
    github: "https://github.com/darrellrahan/datamuse-synonym-app/",
    demo: "https://darrellrahan-synonym.netlify.app/",
    tech: ["React"],
  },
  {
    name: "Colour Generator",
    github: "https://github.com/darrellrahan/colour-generator/",
    demo: "https://darrellrahan-synonym.netlify.app/",
    tech: ["React"],
  },
];

export const archiveProjects = [...featuredProjects, ...networthyProjects];
