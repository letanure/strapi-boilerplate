import Logo from "./extensions/logo.svg";
import Favicon from "./extensions/favicon-32x32.png";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Favicon,
    },
    menu: {
      logo: Logo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.LeftMenu.navbrand.title": "Boilerplate",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap(app) {
    console.log(app);
  },
};
