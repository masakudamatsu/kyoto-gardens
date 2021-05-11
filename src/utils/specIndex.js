import {cormorantGaramond, reforma1918, shipporiMinchoB1} from './fontMetrics';
import {getFontSizeFromX, getLineHeightFromRatio} from './fontCssFactory';
import {scale, setSpace, xHeight} from './designSpec';
import {color} from './colorScheme';

const sideMargin = 10; // TO be redefined in relation to between line space

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
    ...reforma1918,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile') * scale, this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop') * scale, this.fontMetrics),
      };
    },
    fontWeight: 600,
    fontStyle: 'italic',
    paddingSide: sideMargin,
  },
  card: {
    backgroundColorOnHover: `rgba(0, 0, 0, 0.1)`, // TODO: Incorporate into color scheme
  },
  figure: {
    scrim: {
      odd: `linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 80%,
        rgba(255, 255, 255, 1) 98%
      ),
      linear-gradient(
        to top right,
        rgba(255, 255, 255, 0) 80%,
        rgba(255, 255, 255, 0.8)
      )`,
      even: `linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 80%,
        rgba(255, 255, 255, 1) 98%
      ),
      linear-gradient(
        to top left,
        rgba(255, 255, 255, 0) 80%,
        rgba(255, 255, 255, 0.8)
      )`,
    },
  },
  kanji: {
    color: color.onSurface,
    fontFamily: shipporiMinchoB1.fontFamily,
    fontSize: '3em', // TODO: Set this value to match the latin counterpart's size
    fontWeight: 500, // TODO: Set this value to match the latin counterpart's storke width
    lineHeight: 1, // to control side margins
    paddingTop: sideMargin,
    top: -60,
  },
  latin: {
    color: color.onSurface,
    marginTop: -40,
    paddingSide: sideMargin,
  },
  p: {
    ...reforma1918,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop'), this.fontMetrics),
      };
    },
    paddingSide: sideMargin, // to match with latin.paddingSide
  },
  spacer: {
    height: 40,
  },
};
