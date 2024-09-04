import {
  type IProfessionalExperience,
  type IProject,
  HiddenProject,
  Description,
} from "@/types";

export const me = {
  fullName: "Luis Quiñones Requelme",
  cvLink: "https://cdn.quinones.pro/resume.pdf",
  email: "luis@quinones.pro",
};

export const projects: Array<IProject | HiddenProject> = [
  {
    title: "luisnquin/nixos-config",
    description:
      "Infrastructure for my NixOS computer that I've maintained since 2022",
    link: "https://github.com/luisnquin/nixos-config",
  },
  {
    title: "luisnquin/battery-notifier",
    description:
      "Customizable daemon that send alerts the battery status of the guest laptop (only for Linux)",
    link: "https://github.com/luisnquin/battery-notifier",
  },
  new HiddenProject(),
  new HiddenProject(),
];

export const professionalCareer: Array<IProfessionalExperience> = [
  {
    company: "Chanchita",
    position: "CTO/Co-Founder",
    location: "El Salvador",
    mode: "Remote",
    since: "Jul 2024",
    until: "NaN",
  },
  {
    company: "Qompa",
    position: "Full-Stack Developer",
    location: "Perú",
    mode: "Remote",
    since: "May 2024",
    until: "NaN",
  },
  {
    company: "Netic Labs",
    position: "Founder & CEO",
    location: "Peru",
    mode: "Remote",
    since: "Mar 2024",
    until: "NaN",
  },
  {
    company: "Inversiones.io",
    position: "Site Reliability Engineer",
    location: "Perú",
    mode: "Hybrid",
    since: "Jan 2024",
    until: "NaN",
    description:
      "Is a crowdfunding fintech company situated in Peru, dedicated to connecting investors with enterprises in need of funding. Our aspiration is to enhance the Peruvian economy and boost small and medium-sized enterprises around the country.",
  },
  {
    company: "WiserSKILLS",
    position: "Full-Stack Developer",
    location: "Paris, France",
    mode: "Remote",
    since: "Jun 2023",
    until: "Dec 2023",
    description:
      "Is a software development company that specializes in the development of web applications and mobile applications. Our team focuses on building high-quality, scalable, and secure software solutions that meet the needs of our clients.",
  },
  {
    company: "WiserSKILLS",
    position: "Backend Developer",
    location: "Paris, France",
    mode: "Remote",
    since: "Feb 2022",
    until: "Jun 2023",
    description: new Description({
      achievements: [
        "Improved the development experience making that the productivity increases by 92.5% in all the cases.",
        "Configuration, deploying and monitoring tasks of more than 20 deployed servers using ArgoCD, kubernetes and k9s.",
        "I dealt with multiple cases of race condition issues that have been in the backend before my entry.",
        "Automation of some common processes for the backend and the DevOps team.",
      ],
      technologies: [
        "go",
        "arangodb",
        "vuejs",
        "aws",
        "docker",
        "linux",
        "typescript",
      ],
    }),
  },
  {
    company: "Desstorm",
    position: "Web Developer",
    location: "Perú",
    mode: "Remote",
    since: "Oct 2021",
    until: "Dec 2021",
  },
];
