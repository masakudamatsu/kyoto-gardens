const primary = 'hsla(193, 50%, 26%, 0.9)';
const primaryShade = 'hsla(193, 30%, 57%, 0.2)'; // same hue and chroma as primary but 3 times brighter
const primaryDarkShade = 'rgb(13, 49, 59)'; // temporary
const onPrimary = 'rgb(238,238,238)';
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
  buttonMenu: {
    border: primaryDarkShade,
    default: `hsl(0, 0%, 78%)`, // 4.5 to 1 against the primary color: https://contrast-ratio.com/#hsl%280%2C0%25%2C78%25%29-on-hsla%28193%2C%2050%25%2C%2026%25%2C%200.9%29
    focus: `hsl(0, 0%, 100%)`, // TODO: make it consistent with the above colour scheme
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
    background: primary,
    borderBottom: primaryShade,
    color: onPrimary,
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
