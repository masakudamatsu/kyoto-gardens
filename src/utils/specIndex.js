import {cormorantGaramond} from './fontMetrics';
import {getFontSizeFromX, getLineHeightFromRatio} from './fontCssFactory';
import {scale, setSpace, xHeight} from './designSpec';

const sideMargin = 10; // TO be redefined in relation to between line space

export const index = {
  title: 'Japanese Gardens: Timeline',
  description:
    'List of years when well-known Japanese gardens were designed, with links to the detail of each garden',
  h2: {
    ...cormorantGaramond,
    get fontSize() {
      return {
        mobile: getFontSizeFromX(xHeight('mobile'), this.fontMetrics),
        desktop: getFontSizeFromX(xHeight('desktop') * scale, this.fontMetrics),
      };
    },
    fontWeight: 600,
    fontStyle: 'italic',
    paddingSide: sideMargin,
  },
};
