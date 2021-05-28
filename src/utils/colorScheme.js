export const color = {
  background: 'rgb(240,240,240)',
  onBackground: '#ffffff',
  surface: {
    index: '#ffffff',
    kohoan: 'linear-gradient(to bottom, #575757, #111111)',
    // To create the feel of the sun setting and the moon rises in night sky
    // Libre Baskervill does not look great on lighter gray background or on pure black.
    ryoanji: '#ffffff',
  },
  onSurface: {
    index: '#0a0a0a',
    kohoan: '#ffffff',
    ryoanji: '#0a0a0a',
  },
  onSurfaceShade: {kohoan: 'rgb(200,200,200)', ryoanji: 'rgb(100,100,100)'},
  onSurfaceSecondShade: {
    kohoan: '#9c938f',
    ryoanji: 'rgb(240,240,240)' /* TODO: Darken this */,
  },
  primary: 'hsla(193, 50%, 26%, 0.9)',
  primaryShade: 'hsla(193, 50%, 26%, 0.2)',
  onPrimary: '#eee',
  onPhoto: '#000',
  // Patterns
  lightingOverlay: `linear-gradient(
                      35deg,
                      hsla(0, 0%, 100%, 0) 0,
                      hsla(0, 0%, 100%, 0.5) 55%,
                      hsla(0, 0%, 100%, 0.5) 65%,
                      hsla(0, 0%, 100%, 0)
                    )`,
};

const primary = 'hsla(193, 50%, 26%, 0.9)';
const primaryShade = 'hsla(193, 50%, 26%, 0.2)';
const onPrimary = 'rgb(238,238,238)';
const surface = 'rgb(255,255,255)';
const surfaceShade = 'rgb(240,240,240)';
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
)`;

export const colour = {
  global: {
    background: background, // TODO: change this to match with header/footer's background
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
    footer: {
      background: primary,
      color: onPrimary,
      overlay: lighting,
    },
    h1: {
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
  kohoan: {},
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
      onHoverBackground: surfaceShade,
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
