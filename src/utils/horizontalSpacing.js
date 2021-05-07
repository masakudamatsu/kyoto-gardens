import {css} from 'styled-components';
import {breakpoint, setSpace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';

export const horizontalSpacing = {
  figure: {
    ryoanji: setHorizontalSpace(
      'figure',
      ryoanji.article.lineHeightRatio,
      ryoanji.article.lineLength,
    ),
  },
  text: {
    ryoanji: setHorizontalSpace(
      'text',
      ryoanji.article.lineHeightRatio,
      ryoanji.article.lineLength,
    ),
  },
};

export function setHorizontalSpace(elementType, lineHeightRatio, lineLength) {
  const sideMargin = {
    small: setSpace('mobile', lineHeightRatio.mobile).sideMargin,
    mobile: setSpace('mobile', lineHeightRatio.mobile).sideMarginLarge,
    desktop: setSpace('desktop', lineHeightRatio.desktop).sideMarginLarge,
  };
  const styleTextOnly =
    elementType === 'text'
      ? `
    padding: 0 ${remify(sideMargin.small)};
  `
      : null;
  return {
    inner: css`
      /* For H1 and H2 */
      margin: 0 auto;
      max-width: ${remify(lineLength.max.mobile)};
      @media only screen and ${breakpoint.fontSize} {
        max-width: ${remify(lineLength.max.desktop)};
      }
    `,
    innerMerged: css`
      /* For all the rest */
      margin: 0 auto;
      max-width: ${remify(
        lineLength.max.mobile + sideMargin.mobile * 2,
      )}; /* as no outer element, the width includes side margins */
      @media only screen and ${breakpoint.fontSize} {
        max-width: ${remify(
          lineLength.max.desktop + sideMargin.desktop * 2,
        )}; /* as no outer element, the width includes side margins */
      }
    `,
    outer: css`
      ${styleTextOnly}
      @media only screen and ${ryoanji.breakpoint.sideMargin} {
        padding: 0 ${remify(sideMargin.mobile)};
      }
      @media only screen and ${breakpoint.fontSize} {
        padding: 0 ${remify(sideMargin.desktop)};
      }
    `,
  };
}
