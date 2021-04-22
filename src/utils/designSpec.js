function xHeight(screenWidth = 'mobile') {
  const mediumFontSize = {
    mobile: 18,
    desktop: 21,
  };
  const mediumXHeight = 0.445; // Medium.com's body text face, ITC Charter, has a x-height ratio of 0.445 to font-size
  if (screenWidth === 'mobile') {
    return mediumFontSize.mobile * mediumXHeight;
  } else if (screenWidth === 'desktop') {
    return mediumFontSize.desktop * mediumXHeight;
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

export const whitespace = {
  get betweenLines() {
    const lineHeightRatio = paragraph.mobile.lineHeightRatio;
    const ratio = lineHeightRatio.betweenLines / lineHeightRatio.xHeight;
    return xHeight() * ratio;
  },
  scale: 5 / 3,
  get betweenParagraphs() {
    return this.betweenLines * this.scale;
  },
  get betweenSections() {
    return this.betweenParagraphs * this.scale;
  },
  get sideMargin() {
    return this.betweenParagraphs;
  },
};

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

export const figureBordered = {
  padding: 15.564,
};

export const breakpoint = {
  fontSize: `(min-width: ${728}px)`, // not in rem, because it proxies the physical distance between the user and the device
  floorPlan: `(min-width: ${497 + figureBordered.padding * 2}px)`,
};
