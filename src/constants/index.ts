const PROJECTS = [
  {
    name: "Project One",
    emoji: "🚀",
    description: "Description for project one.",
    img: "/project1.png",
    link: "https://example.com/project-one",
  },
  {
    name: "Project Two",
    emoji: "🛠️",
    description: "Description for project two.",
    img: "/project2.png",
    link: "https://example.com/project-two",
  },
  {
    name: "Project Three",
    emoji: "🎨",
    description: "Description for project three.",
    link: "https://example.com/project-three",
  },
];

const SOCIAL_URL = {
  github: "#",
  x: "#",
  blog: "#",
};

export const BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://marumaru2018.github.io/portfolio"
    : "";
export { PROJECTS, SOCIAL_URL, BASE_URL };
