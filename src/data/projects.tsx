import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <SiReact />,
  },
  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <SiNodedotjs />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  mongodb: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "automated-trading",
    category: "Trading",
    title: "Automated Trading",
    src: "/assets/projects-screenshots/portfolio/skills.png",
    screenshots: ["skills.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongodb,
      ],
    },
    live: "https://autobuysell.io/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Our automated trading system leverages advanced algorithms and
            real-time market data to execute trades with precision and speed.
            Set up your strategies and let our system handle the execution.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Automated trade execution based on predefined strategies</li>
            <li>Real-time market data analysis</li>
            <li>Risk management controls</li>
            <li>Performance tracking and reporting</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "backtesting",
    category: "Analysis",
    title: "Strategy Backtesting",
    src: "/assets/projects-screenshots/portfolio/skills.png",
    screenshots: ["skills.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    },
    live: "https://autobuysell.io/backtest",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Test your trading strategies against historical market data to
            validate their effectiveness before deploying with real capital. Our
            backtesting engine provides comprehensive analytics and insights.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Historical data analysis</li>
            <li>Strategy performance metrics</li>
            <li>Risk assessment tools</li>
            <li>Detailed reporting and visualization</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "portfolio-management",
    category: "Management",
    title: "Portfolio Management",
    src: "/assets/projects-screenshots/portfolio/skills.png",
    screenshots: ["skills.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://autobuysell.io/portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Comprehensive portfolio management tools to track and optimize your
            investments. Monitor performance, analyze risk exposure, and make
            data-driven decisions.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Real-time portfolio tracking</li>
            <li>Risk exposure analysis</li>
            <li>Performance attribution</li>
            <li>Customizable reporting</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
