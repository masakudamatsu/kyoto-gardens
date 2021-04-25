import remify from './remify';
function xHeight(screenWidth = 'mobile') {
  if (screenWidth === 'mobile') {
    return 8.5;
  } else if (screenWidth === 'desktop') {
    return 10.5;
  } else {
    throw new Error(`${screenWidth} is an invalid argument for xHeight()`);
  }
}

export const paragraph = {
  mobile: {
    fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
    fontWeight: 600,
    fontMetrics: {
      unitsPerEm: 1000,
      xHeight: 398,
      capHeight: 633,
    },
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

export const figCaption = {
  mobile: {
    fontFamily: "'Cormorant SC', 'Times New Roman', serif",
    fontWeight: 700,
    fontMetrics: {
      unitsPerEm: 1000,
      xHeight: 471,
      capHeight: 630,
    }, // measured by myself
    xHeight: xHeight(),
    lineHeightRatio: {
      xHeight: 2,
      betweenLines: 5,
    },
  },
};

figCaption.desktop = {
  ...figCaption.mobile,
  xHeight: xHeight('desktop'),
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
  const scale = 5 / 3;
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

export const h2 = {
  mobile: {
    fontFamily: "'Cormorant', 'Times New Roman', serif",
    fontWeight: 700,
    fontMetrics: {
      unitsPerEm: 1000,
      xHeight: 402,
      capHeight: 642,
    }, // measured by myself
    xHeight: (xHeight() * 5) / 3,
    lineHeightRatio: {
      xHeight: 5,
      betweenLines: 8,
    }, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
    get padding() {
      return (
        this.xHeight * (this.fontMetrics.capHeight / this.fontMetrics.xHeight)
      );
    },
  },
};

h2.desktop = {
  ...h2.mobile,
  xHeight: (xHeight('desktop') * 5) / 3,
};

export const h3 = {
  mobile: {
    fontFamily: "'Cormorant', 'Times New Roman', serif",
    fontWeight: 700,
    fontMetrics: {
      unitsPerEm: 1000,
      xHeight: 402,
      capHeight: 642,
    }, // measured by myself
    capHeight: whitespace().betweenLines,
    lineHeightRatio: {
      xHeight: 5,
      betweenLines: 8,
    }, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
    get padding() {
      return (
        this.xHeight * (this.fontMetrics.capHeight / this.fontMetrics.xHeight)
      );
    },
  },
};

h3.desktop = {
  ...h3.mobile,
  capHeight: whitespace('desktop').betweenLines,
};

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

export const breakpoint = {
  floorPlan: `(min-width: ${497 + figureBordered.padding * 2}px)`,
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
};
