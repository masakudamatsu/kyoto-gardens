import {getFontSizeFromX, getLineHeightFromRatio} from './fontCssFactory';
import {scale, xHeight} from './designSpec';
// Color scheme
const background = 'rgb(240,240,240)';
const onBackground = '#ffffff';
const surface = '#ffffff';
const onSurface = '#0a0a0a';
const onSurfaceShade = 'rgb(100,100,100)';
const onSurfaceSecondShade = 'rgb(240,240,240)'; /* TODO: Darken this */
const primary = 'hsla(193, 50%, 26%, 0.9)';
const onPrimary = '#eee';
const onPhoto = '#000';

// Font scheme
const cormorant = {
  fontFamily: "'Cormorant', 'Times New Roman', serif",
  fontMetrics: {
    unitsPerEm: 1000,
    xHeight: 402,
    capHeight: 642,
  }, // measured by myself
};

const cormorantGaramond = {
  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
  fontMetrics: {
    unitsPerEm: 1000,
    xHeight: 398,
    capHeight: 633,
  },
};

const cormorantSC = {
  fontFamily: "'Cormorant SC', 'Times New Roman', serif",
  fontMetrics: {
    unitsPerEm: 1000,
    xHeight: 471,
    capHeight: 630,
  }, // measured by myself
};

export const ryoanji = {
  background: {
    backgroundColor: background,
    patternColor: onBackground,
  },
  article: {
    // This sets the default for all the other elements below
    backgroundColor: surface,
    color: onSurface,
    ...cormorantGaramond, // {fontFamily, fontMetrics}
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 600,
    get lineHeight() {
      return {
        mobile: getLineHeightFromRatio(
          {xHeight: 2, betweenLines: 5},
          this.fontMetrics,
        ),
        desktop: getLineHeightFromRatio(
          {xHeight: 4, betweenLines: 11},
          this.fontMetrics,
        ),
      };
    },
    baselinePosition: {
      mobile: 20,
      desktop: 24,
    },
  },
  italic: {
    fontWeight: 600,
  },
  link: {
    backgroundOnHover: onSurfaceSecondShade,
    color: 'inherit',
    lineWidth: 1,
    spaceBelowBaseline: {
      mobile: 1,
      desktop: 2,
      figCaption: {
        desktop: 1,
      },
    },
  },
  abbr: {
    ...cormorantSC,
    letterSpacing: '0.01em',
    textTransform: 'lowercase',
  },
  leadIn: {
    ...cormorantSC,
    letterSpacing: '0.01em',
    wordSpacing: '-0.05em',
  },
  sectionBreak: {
    color: primary,
  },
  source: {
    color: onSurfaceShade,
  },
  h1: {
    backgroundColor: {
      mobile: primary,
      desktop: 'transparent',
    },
    color: {
      mobile: onPrimary,
      desktop: onPhoto,
    },
    ...cormorantSC,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(
          xHeight('mobile') * Math.pow(scale, 2),
          this.fontMetrics,
        ),
        tablet: getFontSizeFromX(
          xHeight('mobile') * Math.pow(scale, 3),
          this.fontMetrics,
        ),
        desktop: getFontSizeFromX(
          xHeight('desktop') * Math.pow(scale, 3),
          this.fontMetrics,
        ),
        rockGarden: 4 / 9, // in em
      };
    },
    fontWeight: 700,
    get lineHeight() {
      return getLineHeightFromRatio(
        {xHeight: 2, betweenLines: 1}, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
        this.fontMetrics,
      );
    },
    get padding() {
      const target = {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      };
      const defaultSpace = {
        between: {
          mobile: 3,
          desktop: 5,
        },
        bottom: {
          mobile: 0,
          desktop: 1,
        },
        top: {
          mobile: 0,
        },
      };
      return {
        between: {
          mobile: target.mobile - defaultSpace.between.mobile,
          desktop: target.desktop - defaultSpace.between.desktop,
        },
        bottom: {
          mobile: target.mobile - defaultSpace.bottom.mobile,
          desktop: target.desktop - defaultSpace.bottom.desktop,
        },
        top: {
          mobile: target.mobile - defaultSpace.top.mobile,
          desktop: 0,
        },
      };
    },
    textIndent: {
      mobile: -3,
      tablet: -6, // Stem is 7px off, but -7 will make it look sticking out
      desktop: -8,
      rockGarden: {
        mobile: 0,
        tablet: -2,
        desktop: -2,
      },
    },
  },
  h2: {
    backgroundColor: primary,
    color: onPrimary,
    ...cormorant,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile') * scale, this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop') * scale, this.fontMetrics),
      };
    },
    fontWeight: 700,
    get lineHeight() {
      return getLineHeightFromRatio(
        {xHeight: 5, betweenLines: 8}, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
        this.fontMetrics,
      );
    },
    get padding() {
      const target = {
        mobile:
          (this.fontSize.mobile / this.fontMetrics.unitsPerEm) *
          this.fontMetrics.capHeight,
        desktop:
          (this.fontSize.desktop / this.fontMetrics.unitsPerEm) *
          this.fontMetrics.capHeight,
      };
      const defaultSpace = {
        mobile: {
          ascender: 6.5,
          descender: 7,
        },
        desktop: {
          ascender: 8.5,
          descender: 9,
        },
      };
      return {
        top: {
          mobile: target.mobile - defaultSpace.mobile.ascender,
          desktop: target.desktop - defaultSpace.desktop.ascender,
        },
        bottom: {
          mobile: target.mobile - defaultSpace.mobile.descender,
          desktop: target.desktop - defaultSpace.desktop.descender,
        },
      };
    },
    textIndent: -2,
  },
  h3: {
    color: primary,
    ...cormorant,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 700,
    get lineHeight() {
      return getLineHeightFromRatio(
        {xHeight: 5, betweenLines: 8}, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
        this.fontMetrics,
      );
    },
    textTransform: 'uppercase', // TODO: DRY this code to share it with other pages
  },
  figCaption: {
    ...cormorantSC,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 600,
    get lineHeight() {
      return {
        mobile: getLineHeightFromRatio(
          {xHeight: 2, betweenLines: 3},
          this.fontMetrics,
        ),
        desktop: getLineHeightFromRatio(
          {xHeight: 4, betweenLines: 7},
          this.fontMetrics,
        ),
      };
    },
    textAlign: 'right', // TODO: Dry this code to share with other pages
    baselinePosition: {
      mobile: 17,
      desktop: 21,
    },
  },
};
