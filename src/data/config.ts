const config = {
  title: "AutoBuySell | AI Trading Platform",
  description: {
    long: "AutoBuySell is your trusted partner in automated trading. Our AI-powered platform offers advanced algorithms, real-time trading, and comprehensive risk management tools. Experience the future of trading with automated strategies, backtesting capabilities, and customizable solutions that help you maximize your trading potential.",
    short:
      "AutoBuySell - Your trusted partner in automated trading. Experience the power of AI-driven trading strategies.",
  },
  keywords: [
    "AutoBuySell",
    "AI Trading",
    "Automated Trading",
    "Trading Platform",
    "Trading Algorithms",
    "Risk Management",
    "Real-time Trading",
    "Backtesting",
    "Trading Automation",
    "Trading Strategies",
    "Financial Technology",
    "Investment Platform",
  ],
  author: "AutoBuySell",
  email: "contact@autobuysell.io",
  site: "https://autobuysell.io",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/autobuysell",
    linkedin: "https://www.linkedin.com/company/autobuysell",
    github: "https://github.com/autobuysell",
  },
};
export { config };
