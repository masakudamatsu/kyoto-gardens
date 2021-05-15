import {css} from 'styled-components';
import {breakpoint, setSpace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

export function setHorizontalSpace(elementType, spec) {
  // Checking if arguments are missing
  if (
    !spec.article.lineHeightRatio.mobile ||
    !spec.article.lineHeightRatio.desktop
  ) {
    throw new Error(
      'The setHorizontalSpace() requires the line-height ratio, which you fail to specify either for mobile or desktop.',
    );
  }
  if (
    !spec.article.lineLength.max.mobile ||
    !spec.article.lineLength.max.desktop
  ) {
    throw new Error(
      'The setHorizontalSpace() requires the max line length, which you fail to specify either for mobile or desktop.',
    );
  }
  if (!spec.breakpoint.sideMargin) {
    throw new Error(
      'The setHorizontalSpace() requires the breakpoint for increasing side margins, which you fail to specify.',
    );
  }
  // Calculation
  const sideMargin = {
    small: setSpace('mobile', spec.article.lineHeightRatio.mobile).sideMargin,
    mobile: setSpace('mobile', spec.article.lineHeightRatio.mobile)
      .sideMarginLarge,
    desktop: setSpace('desktop', spec.article.lineHeightRatio.desktop)
      .sideMarginLarge,
  };
  const styleTextOnly =
    elementType === 'text'
      ? `
    padding: 0 ${remify(sideMargin.small)};
  `
      : null;
  // CSS code to spit out
  return {
    inner: css`
      /* For H1 and H2 */
      margin: 0 auto;
      max-width: ${remify(spec.article.lineLength.max.mobile)};
      @media only screen and ${breakpoint.fontSize} {
        max-width: ${remify(spec.article.lineLength.max.desktop)};
      }
    `,
    innerMerged: css`
      /* For all the rest */
      margin: 0 auto;
      max-width: ${remify(
        spec.article.lineLength.max.mobile + sideMargin.mobile * 2,
      )}; /* as no outer element, the width includes side margins */
      @media only screen and ${breakpoint.fontSize} {
        max-width: ${remify(
          spec.article.lineLength.max.desktop + sideMargin.desktop * 2,
        )}; /* as no outer element, the width includes side margins */
      }
    `,
    outer: css`
      ${styleTextOnly}
      @media only screen and ${spec.breakpoint.sideMargin} {
        padding: 0 ${remify(sideMargin.mobile)};
      }
      @media only screen and ${breakpoint.fontSize} {
        padding: 0 ${remify(sideMargin.desktop)};
      }
    `,
  };
}
