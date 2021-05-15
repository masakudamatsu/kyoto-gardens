import {color} from './colorScheme';
import {getFontSizeFromX, getLineHeightFromRatio} from './fontCssFactory';
import {scale, setSpace, xHeight} from './designSpec';
import remify from './remify';
import {
  cormorant,
  cormorantSC,
  libreBaskerville,
  playfairDisplay,
  playfairDisplaySC,
} from './fontMetrics';

// Color scheme
const background = 'rgb(240,240,240)';
const onBackground = '#ffffff';
const onSurface = '#ffffff';
const onSurfaceShade = 'rgb(100,100,100)';
const onSurfaceSecondShade = 'rgb(240,240,240)'; /* TODO: Darken this */
const primary = 'hsla(193, 50%, 26%, 0.9)';
const primaryShade = 'hsla(193, 50%, 26%, 0.2)';
const onPrimary = '#eee';
const onPhoto = '#000';
// Patterns
const lightingOverlay = `linear-gradient(
  35deg,
  hsla(0, 0%, 100%, 0) 0,
  hsla(0, 0%, 100%, 0.5) 55%,
  hsla(0, 0%, 100%, 0.5) 65%,
  hsla(0, 0%, 100%, 0)
)`;

export const kohoan = {
  title: 'Koho-an Temple | 孤篷庵',
  description:
    'Koho-an Temple in Kyoto is a 17th-century masterpiece of spatial design, seemingly integrating architecture with gardens to take the visitor to an imaginary boat trip at sunset.',
  background: {
    backgroundColor: '#111',
    patternColor: '#7c7c7c', // 4.52 * #111
  },
  article: {
    // This sets the default for all the other elements below
    backgroundImage: color.surface.kohoan,
    color: color.onSurface.kohoan,
    ...libreBaskerville, // {fontFamily, fontMetrics}
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 400,
    lineHeightRatio: {
      mobile: {xHeight: 1, betweenLines: 2},
      desktop: {xHeight: 4, betweenLines: 9},
    },
    get lineHeight() {
      return {
        mobile: getLineHeightFromRatio(
          this.lineHeightRatio.mobile,
          this.fontMetrics,
        ),
        desktop: getLineHeightFromRatio(
          this.lineHeightRatio.desktop,
          this.fontMetrics,
        ),
      };
    },
    lineLength: {
      min: 51.3 * xHeight(), // 436.093px for font-size of 21.3568px
      max: {
        mobile: 64.97 * xHeight('mobile'),
        desktop: 64.97 * xHeight('desktop'),
      }, // 682.188px for font-size of 26.3824px
    },
    baselinePosition: {
      mobile: 16, // TODO: measure it properly
      desktop: 19, // TODO: measure it properly
    },
    ascender: {
      // from top of the text box to the top of capital letters
      // for space between box and paragraph
      mobile: 5.5,
      desktop: 8.5,
    },
    descender: {
      // for between Sections
      mobile: 7,
      desktop: 10,
    },
    get capToX() {
      const ratioToFontSize =
        (this.fontMetrics.capHeight - this.fontMetrics.xHeight) /
        this.fontMetrics.unitsPerEm;
      return {
        mobile: this.fontSize.mobile * ratioToFontSize,
        desktop: this.fontSize.desktop * ratioToFontSize,
      };
    },
  },
  link: {
    backgroundOnHover: color.onSurfaceSecondShade.kohoan,
    color: 'inherit',
    underlineColor: 'rgba(255, 255, 255, 0.8)',
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
  hr: {
    asteriskHeight: {
      mobile: 8,
      desktop: 10,
    },
    color: color.onSurface.kohoan,
    spaceAboveByDefault: {
      mobile: 13,
      desktop: 17.5,
    },
  },
  source: {
    color: color.onSurfaceShade.kohoan,
  },
  h1: {
    backgroundColor: {
      mobile: primary,
      desktop: 'transparent',
    },
    backgroundImage: {
      mobile: lightingOverlay,
      desktop: 'none',
    },
    color: {
      mobile: onPrimary,
      desktop: onPhoto,
    },
    ...playfairDisplaySC,
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
    fontWeight: 400,
    letterSpacig: '0.05em',
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
    wordSpacing: {
      rockGarden: '-0.2em',
    },
  },
  h2: {
    backgroundColor: primary,
    backgroundImage: lightingOverlay,
    color: onPrimary,
    ...playfairDisplay,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile') * scale, this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop') * scale, this.fontMetrics),
      };
    },
    fontWeight: 600,
    letterSpacing: '0.01em',
    get lineHeight() {
      return getLineHeightFromRatio(
        {xHeight: 5, betweenLines: 7}, // For the space from baseline to cap top to be larger than word space
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
          ascender: 8,
          descender: 6,
        },
        desktop: {
          ascender: 10.5,
          descender: 7,
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
    color: color.onSurface.kohoan,
    ...playfairDisplay,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 700,
    get lineHeight() {
      return getLineHeightFromRatio(
        {xHeight: 5, betweenLines: 8}, // For baseline to cap top to be larger than word space
        this.fontMetrics,
      );
    },
    letterSpacing: '0.02em',
    textTransform: 'uppercase', // TODO: DRY this code to share it with other pages
    ascender: {
      // for between paragraph spacing above h3
      mobile: 6, // 13 minus article.descender.mobile
      desktop: 7.5, //17.5 minus article.descender.desktop,
    },
    descender: {
      // for between h3 and text below
      mobile: 4.5, // 10 minus article.ascender.mobile
      desktop: 5.5, // 14 minus article.ascender.mobile
    },
  },
  figCaption: {
    ...playfairDisplaySC,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 400,
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
    textAlign: 'left',
    descender: {
      mobile: 5, // 10.5 - article.ascender.mobile
      desktop: 7, // 15.5 - article.ascender.desktop
    },
    baselinePosition: {
      mobile: 16,
      desktop: 20,
    },
  },
  figure: {
    borderColor: color.onSurfaceShade.kohoan,
    color: color.primary, // TODO: we may want to darken the seigaiha pattern
    maxHeight: 703, // half the height of spring/summer photos
    maxWidth: 941, // half the width of spring/summer/autumn/winter photos
    paddingInsideBorder: 15.564,
    spaceBelowByBug: {
      mobile: 7,
      desktop: 10,
    }, // See issue #29
  },
  get breakpoint() {
    const sideMarginLarge = setSpace(
      'mobile',
      this.article.lineHeightRatio.mobile,
    ).sideMarginLarge;
    return {
      h1: `(min-width: ${remify(
        this.article.lineLength.max.mobile + 2 * sideMarginLarge,
      )})`,
      sideMargin: `(min-width: ${remify(
        this.article.lineLength.min + 2 * sideMarginLarge,
      )})`,
    };
  },
};
