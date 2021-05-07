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

const cormorantGaramond = {
  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
  fontWeight: 600,
  fontMetrics: {
    unitsPerEm: 1000,
    xHeight: 398,
    capHeight: 633,
  },
};

export const paragraph = {
  mobile: {
    ...cormorantGaramond,
    xHeight: xHeight(),
    lineHeightRatio: {
      xHeight: 2,
      betweenLines: 5,
    },
  },
};

paragraph.desktop = {
  ...paragraph.mobile,
  xHeight: xHeight('desktop'),
  lineHeightRatio: {
    xHeight: 4,
    betweenLines: 11,
  },
};

export function whitespace(screenWidth = 'mobile') {
  let lineHeightRatio;
  if (screenWidth === 'mobile') {
    lineHeightRatio = paragraph.mobile.lineHeightRatio;
  }
  if (screenWidth === 'desktop') {
    lineHeightRatio = paragraph.desktop.lineHeightRatio;
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

export const figureBordered = {
  padding: 15.564,
};

export const lineLength = {
  min: 51.3 * xHeight(), // 436.093px for font-size of 21.3568px
  max: {
    mobile: 64.97 * xHeight('mobile'),
    desktop: 64.97 * xHeight('desktop'),
  }, // in em: 682.188px for font-size of 26.3824px
};

export const maxPhotoWidth = 941;
export const maxPhotoHeight = 703;

export const breakpoint = {
  // floorPlan: `(min-width: ${497 + figureBordered.padding * 2}px)`, // merged to the sideMargin breakpoint
  floorPlanWidth: `(min-width: ${remify(
    lineLength.max.mobile + whitespace('mobile').sideMarginLarge * 2,
  )})`,
  floorPlanWidthDesktop: `(min-width: ${remify(
    lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,
  )})`,
  fontSize: `(min-width: ${728}px)`, // not in rem, because it proxies the physical distance between the user and the device
  sideMargin: `(min-width: ${remify(
    lineLength.min + whitespace().sideMarginLarge * 2, // remify to be responsive to user's base font size
  )})`,
  photo: `(min-width: ${maxPhotoWidth}px)`,
};

/* *********  Koho-an   ********** */

export const libreBaskerville = {
  fontFamily: "'Libre Baskerville', 'Verdana', serif", // Verdana is sans-serif, but its letter height and width matches a lot closer than Georgia, Trebuchet, or Times
  fontWeight: 400,
  fontMetrics: {
    unitsPerEm: 1000,
    xHeight: 535,
    capHeight: 775,
  }, // measured by myself
};

export const kohoan = {
  paragraph: {
    mobile: {
      ...libreBaskerville,
      xHeight: xHeight(),
      lineHeightRatio: {
        xHeight: 2,
        betweenLines: 5,
      },
    },
  },
};

kohoan.paragraph.desktop = {
  ...kohoan.paragraph.mobile,
  xHeight: xHeight('desktop'),
  lineHeightRatio: {
    xHeight: 4,
    betweenLines: 11,
  },
};
