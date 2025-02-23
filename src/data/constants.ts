// Trading Features
export enum FeatureNames {
  AUTOMATION = "automation",
  ALGORITHMS = "algorithms",
  RISK_MANAGEMENT = "risk_management",
  REALTIME = "realtime",
  BACKTESTING = "backtesting",
  CUSTOMIZATION = "customization",
}

export type Feature = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const FEATURES: Record<FeatureNames, Feature> = {
  [FeatureNames.AUTOMATION]: {
    id: 1,
    name: "automation",
    label: "Automation",
    shortDescription:
      "Streamline your trading with powerful automated strategies",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/robot.svg",
  },
  [FeatureNames.ALGORITHMS]: {
    id: 2,
    name: "algorithms",
    label: "Smart Algorithms",
    shortDescription: "Advanced AI algorithms for optimal trading decisions",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/brain.svg",
  },
  [FeatureNames.RISK_MANAGEMENT]: {
    id: 3,
    name: "risk_management",
    label: "Risk Management",
    shortDescription: "Comprehensive tools to protect your investments",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shield.svg",
  },
  [FeatureNames.REALTIME]: {
    id: 4,
    name: "realtime",
    label: "Real-time Trading",
    shortDescription: "Execute trades instantly with live market data",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/lightning.svg",
  },
  [FeatureNames.BACKTESTING]: {
    id: 5,
    name: "backtesting",
    label: "Backtesting",
    shortDescription: "Test strategies with historical market data",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/chart.svg",
  },
  [FeatureNames.CUSTOMIZATION]: {
    id: 6,
    name: "customization",
    label: "Customization",
    shortDescription: "Tailor the platform to your trading style",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/settings.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
