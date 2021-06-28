const primary = 'rgb(56, 75, 85)';
const primaryShade = 'rgba(56, 75, 85, 0.2)'; // same hue and chroma as primary but 3 times brighter
const onPrimary = 'rgb(238,238,238)';
const secondary = 'rgb(56, 75, 85)'; // 'rgb(73,73,73)'; // 2.33, i.e. contrast ratio 1:9 against onSecondary: https://contrast-ratio.com/#white-on-rgb%2850%2C78%2C73%29
const secondaryShade = 'rgb(2, 19, 28)'; // 'rgb(22,22,22)'; // 1.16, i.e. contrast ratio 1:2 against secondary: https://contrast-ratio.com/#rgb%2850%2C78%2C73-on-rgb%280%2C26%2C21%29
const secondaryTranslucent = 'rgba(56, 75, 85, 0.58)'; // 'rgba(73,73,73,0.59)'; // contrast ratio 1:3 against onSecondary, if the background is pure white: https://contrast-ratio.com/#rgba%2850%2C78%2C72%2C0.58%29-on-white
const onSecondary = 'rgb(255,255,255)';
const onSecondaryShade = 'rgba(255,255,255,0.42)'; // contrast ratio of 3:1 against secondary: https://contrast-ratio.com/#rgb%28255%2C255%2C255%2C0.42-on-rgba%2850%2C78%2C72%29
const surface = 'rgb(255,255,255)';
const onSurface = 'rgb(10,10,10)';
const onSurfaceShade = 'rgb(100,100,100)';
const background = 'rgb(240,240,240)';
const onBackground = surface;
const lighting = `linear-gradient(
  35deg,
  hsla(0, 0%, 100%, 0) 0,
  hsla(0, 0%, 100%, 0.5) 55%,
  hsla(0, 0%, 100%, 0.5) 65%,
  hsla(0, 0%, 100%, 0)
)`; // borrowed from https://googlefonts.github.io/japanese/#hannari

const kohoan = {
  surface: 'linear-gradient(to bottom, rgb(87,87,87), rgb(17,17,17))',
  // To create the feel of the sun setting and the moon rises in night sky
  // Libre Baskervill does not look great on lighter gray background or on pure black.
  onSurface: 'rgb(255,255,255)',
  onSurfaceShade1: 'rgb(238,238,238)',
  onSurfaceShade2: 'rgb(200,200,200)',
  background: 'rgb(17,17,17)',
  onBackground: 'rgb(124,124,124)', // 4.52 * rgb(17,17,17)
};

export const colour = {
  navTop: {
    background: {
      button: secondary,
      li: secondary,
      currentPage: secondaryTranslucent,
    },
    border: {
      button: secondaryShade,
      li: onSecondaryShade, // to match with header.borderBottom
    },
    font: {
      button: onSecondaryShade,
      buttonOnFocus: onSecondary,
      ul: onSecondary,
    },
    overlayOnFocus: {
      button: null, // no overlay for button on focus
      li: onSecondaryShade,
    },
  },
  footer: {
    background: surface,
    surface: primary,
    onSurface: onPrimary,
    overlay: lighting,
  },
  global: {
    background: background, // TODO: change this to match with header/footer's background
  },
  header: {
    background: secondary,
    borderBottom: onSecondaryShade, // to be matched with navTop.border.li
    font: onSecondary,
  },
  index: {
    figure: {
      scrim: {
        right: `linear-gradient(
          to top right,
          rgba(255, 255, 255, 0) 75%,
          rgba(255, 255, 255, 0.8)
        )`,
        left: `linear-gradient(
          to top left,
          rgba(255, 255, 255, 0) 75%,
          rgba(255, 255, 255, 0.8)
        )`,
      },
    },
    siteTitle: {
      color: primary,
    },
    h2: {
      color: primary,
    },
    link: {
      onHoverBackground: primaryShade,
    },
    main: {
      background: surface,
      color: onSurface,
    },
  },
  kohoan: {
    article: {
      background: kohoan.surface,
      color: kohoan.onSurface,
    },
    figure: {
      border: kohoan.onSurfaceShade2,
    },
    h1: {
      color: kohoan.onSurfaceShade1,
    },
    h2: {
      background: primary,
      color: onPrimary,
      overlay: lighting,
    },
    h3: {
      color: kohoan.onSurface,
    },
    hr: {
      color: kohoan.onSurface,
    },
    link: {
      color: 'inherit',
      onHoverBackground: 'rgb(156,147,143)', // TODO: Choose this color logically
      underline: 'rgba(255, 255, 255, 0.8)',
    },
    pattern: {
      background: kohoan.background,
      figure: kohoan.onBackground,
    },
    source: {
      color: kohoan.onSurfaceShade2,
    },
  },
  ryoanji: {
    article: {
      background: surface,
      color: onSurface,
    },
    figure: {
      border: primaryShade,
    },
    h1: {
      background: {
        mobile: primary,
        desktop: 'transparent',
      },
      color: {
        mobile: onPrimary,
        desktop: onSurface,
      },
      overlay: {
        mobile: lighting,
        desktop: 'none',
      },
    },
    h2: {
      background: primary,
      color: onPrimary,
      overlay: lighting,
    },
    h3: {
      color: primary,
    },
    hr: {
      color: primary,
    },
    link: {
      color: 'inherit',
      onHoverBackground: primaryShade,
    },
    pattern: {
      background: background,
      figure: onBackground,
    },
    source: {
      color: onSurfaceShade,
    },
  },
};
