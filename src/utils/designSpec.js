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

export const breakpoint = {
  // floorPlan: `(min-width: ${497 + figureBordered.padding * 2}px)`, // merged to the sideMargin breakpoint
  fontSize: `(min-width: ${728}px)`, // not in rem, because it proxies the physical distance between the user and the device
};
