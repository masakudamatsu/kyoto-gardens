import {css} from 'styled-components';
import remify from './remify';

export function xHeight(screenWidth = 'mobile') {
  if (screenWidth === 'mobile') {
    return 8.5;
  } else if (screenWidth === 'desktop') {
    return 10.5;
  } else {
    throw new Error(`${screenWidth} is an invalid argument for xHeight()`);
  }
}

export const scale = 5 / 3;

export const breakpoint = {
  // floorPlan: `(min-width: ${497 + figureBordered.padding * 2}px)`, // merged to the sideMargin breakpoint
  fontSize: `(min-width: ${728}px)`, // not in rem, because it proxies the physical distance between the user and the device
};

export function setSpace(screenWidth, lineHeightRatio) {
  if (screenWidth !== 'mobile' && screenWidth !== 'desktop') {
    throw new Error(
      `space() received a screenWidth value other than 'mobile' or 'desktop'.`,
    );
  }
  if (!lineHeightRatio.xHeight) {
    throw new Error(
      `space() received a line-height ratio with xHeight property being missing.`,
    );
  }
  if (!lineHeightRatio.betweenLines) {
    throw new Error(
      `space() received a line-height ratio with betweenLines property being missing.`,
    );
  }
  const ratio = lineHeightRatio.betweenLines / lineHeightRatio.xHeight;
  const betweenLines = xHeight(screenWidth) * ratio;
  const betweenParagraphs = betweenLines * scale;
  const betweenSections = betweenParagraphs * scale;
  const sideMargin = betweenLines;
  const sideMarginLarge = betweenParagraphs;
  return {
    betweenLines: betweenLines,
    betweenParagraphs: betweenParagraphs,
    betweenSections: betweenSections,
    sideMargin: sideMargin,
    sideMarginLarge: sideMarginLarge,
  };
}

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
