import {getFontSizeFromX, getLineHeightFromRatio} from './fontCssFactory';
import {scale, setSpace, xHeight} from './designSpec';
import remify from './remify';
import {cormorant, cormorantGaramond, cormorantSC} from './fontMetrics';
import {color} from './colorScheme';

export const ryoanji = {
  title: 'Ryoan-ji Rock Garden | 龍安寺石庭',
  description:
    'Ryoan-ji Rock Garden teaches us the principle of Zen Buddhism to live happily, with the layout of 15 rocks as a textbook.',
  background: {
    backgroundColor: color.background,
    patternColor: color.onBackground,
  },
  article: {
    // This sets the default for all the other elements below
    backgroundColor: color.surface.ryoanji,
    color: color.onSurface.ryoanji,
    ...cormorantGaramond, // {fontFamily, fontMetrics}
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 600,
    lineHeightRatio: {
      mobile: {xHeight: 2, betweenLines: 5},
      desktop: {xHeight: 4, betweenLines: 11},
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
      mobile: 20,
      desktop: 24,
    },
    ascender: {
      // for space between box and paragraph
      mobile: 7.5,
      desktop: 10.5,
    },
    descender: {
      // for between Sections
      mobile: 8,
      desktop: 12,
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
    backgroundOnHover: color.onSurfaceSecondShade.ryoanji,
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
  hr: {
    asteriskHeight: {
      mobile: 8,
      desktop: 10,
    },
    color: color.primary,
    spaceAboveByDefault: {
      mobile: 13,
      desktop: 17.5,
    },
  },
  source: {
    color: color.onSurfaceShade.ryoanji,
  },
  h1: {
    backgroundColor: {
      mobile: color.primary,
      desktop: 'transparent',
    },
    backgroundImage: {
      mobile: color.lightingOverlay,
      desktop: 'none',
    },
    color: {
      mobile: color.onPrimary,
      desktop: color.onPhoto,
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
    backgroundColor: color.primary,
    backgroundImage: color.lightingOverlay,
    color: color.onPrimary,
    ...cormorant,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile') * scale, this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop') * scale, this.fontMetrics),
      };
    },
    fontWeight: 700,
    letterSpacing: '0.01em',
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
    color: color.primary,
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
    letterSpacing: '0.02em',
    textTransform: 'uppercase', // TODO: DRY this code to share it with other pages
    ascender: {
      // for between paragraph spacing above h3
      mobile: 4.5, // 12.5 minus article.descender.mobile
      desktop: 5.5, //17.5 minus article.descender.desktop,
    },
    descender: {
      // for between h3 and figure below
      mobile: 4,
      desktop: 5,
    },
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
    marginRight: 5, // Align with the right-edge of the floor plan for narrowest screens
    baselinePosition: {
      mobile: 17,
      desktop: 21,
    },
  },
  figure: {
    borderColor: color.primaryShade,
    maxHeight: 703, // half the height of spring/summer photos
    maxWidth: 941, // half the width of spring/summer/autumn/winter photos
    paddingInsideBorder: 15.564,
    spaceBelowByBug: {
      mobile: 8,
      desktop: 12,
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
