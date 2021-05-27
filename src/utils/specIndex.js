import {cormorantGaramond, reforma1918, shipporiMinchoB1} from './fontMetrics';
import {getFontSizeFromX, getLineHeightFromRatio} from './fontCssFactory';
import {scale, setSpace, xHeight} from './designSpec';
import {color} from './colorScheme';
import remify from './remify';

const sideMargin = 10; // TODO: Redefine this in relation to between line space

export const index = {
  title: 'Japanese Gardens: Timeline',
  description:
    'List of years when well-known Japanese gardens were designed, with links to the detail of each garden',
  main: {
    maxWidth: 830, // TODO: This must be twice the max-width of images
  },
  section: {
    maxWidth: 500, // TODO: Adjust this value
  },
  h2: {
    color: color.primary,
    ...reforma1918,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        tablet: getFontSizeFromX(xHeight('mobile') * scale, this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 600,
    fontStyle: 'italic',
    paddingSide: sideMargin,
    ascender: {
      mobile: 11,
      tablet: 18,
    },
  },
  card: {
    backgroundColorOnHover: color.primaryShade, // TODO: Incorporate into color scheme
  },
  figure: {
    scrim: {
      odd: `linear-gradient(
        to top right,
        rgba(255, 255, 255, 0) 75%,
        rgba(255, 255, 255, 0.8)
      )`,
      even: `linear-gradient(
        to top left,
        rgba(255, 255, 255, 0) 75%,
        rgba(255, 255, 255, 0.8)
      )`,
    },
  },
  kanji: {
    breakpoint: `(min-width: ${remify(410)})`,
    color: color.onSurface.index,
    fontFamily: shipporiMinchoB1.fontFamily,
    fontSize: {
      mobile: '2em',
      tablet: '3em',
    }, // TODO: Set this value to match the latin counterpart's size
    fontWeight: 500, // TODO: Set this value to match the latin counterpart's storke width
    lineHeight: 1, // to control side margins
    paddingTop: sideMargin,
    top: {
      mobile: -65,
      tablet: -90,
    },
  },
  latin: {
    color: color.onSurface.index,
    marginTop: 0, // TODO: Adjust this value
    paddingSide: sideMargin,
  },
  p: {
    paddingSide: sideMargin, // to match with latin.paddingSide
  },
  spacer: {
    height: 40,
  },
  article: {
    // for Footer. To use `setHorizontalSpace()` we need to name it `article`
    backgroundColor: color.primary,
    color: '#fff',
    ...reforma1918,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    fontWeight: 300,
    lineHeightRatio: {
      mobile: {xHeight: 4, betweenLines: 9},
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
    paddingTop: `15px`, // 10
    descender: {
      // for between Sections
      mobile: 0, // TODO measure this properly
      desktop: 0, // TODO measure this properly
    },
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
  small: {
    fontSize: `80%`, // TODO: set this number more systematically (80% is <small>'s default style)
  },
};
