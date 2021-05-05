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

const cormorant = {
  fontFamily: "'Cormorant', 'Times New Roman', serif",
  fontWeight: 700,
  fontMetrics: {
    unitsPerEm: 1000,
    xHeight: 402,
    capHeight: 642,
  }, // measured by myself
};

const cormorantGaramond = {
  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
  fontWeight: 600,
  fontMetrics: {
    unitsPerEm: 1000,
    xHeight: 398,
    capHeight: 633,
  },
};

const cormorantSC = {
  fontFamily: "'Cormorant SC', 'Times New Roman', serif",
  fontWeight: 700,
  fontMetrics: {
    unitsPerEm: 1000,
    xHeight: 471,
    capHeight: 630,
  }, // measured by myself
};

const ryoanji = {};

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

ryoanji.paragraph = paragraph;

export const h2 = {
  mobile: {
    ...cormorant,
    xHeight: xHeight() * scale,
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
  xHeight: xHeight('desktop') * scale,
  get padding() {
    return (
      this.xHeight * (this.fontMetrics.capHeight / this.fontMetrics.xHeight)
    );
  },
};

ryoanji.h2 = h2;

export const h1 = {
  mobile: {
    ...cormorantSC,
    xHeight: h2.mobile.xHeight * scale,
    lineHeightRatio: {
      xHeight: 2,
      betweenLines: 1,
    },
  },
  shrinkText: 4 / 9,
};

h1.desktop = {
  ...h1.mobile,
  xHeight: h2.desktop.xHeight * scale * scale,
};

ryoanji.h1 = h1;

export const figCaption = {
  mobile: {
    ...cormorantSC,
    fontWeight: 600,
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

ryoanji.figCaption = figCaption;

export const smallcaps = {
  fontFamily: cormorantSC.fontFamily,
  letterSpacing: '0.01em',
};

ryoanji.smallcaps = smallcaps;

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

export const h3 = {
  mobile: {
    ...cormorant,
    // capHeight: whitespace().betweenLines,
    xHeight: xHeight(),
    lineHeightRatio: {
      xHeight: 5,
      betweenLines: 8,
    }, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
  },
};

h3.desktop = {
  ...h3.mobile,
  // capHeight: whitespace('desktop').betweenLines,
  xHeight: xHeight('desktop'),
};

ryoanji.h3 = h3;

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
  photo: `(min-width: ${maxPhotoWidth}px)`,
};

export {ryoanji};

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
