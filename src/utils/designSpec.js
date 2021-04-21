import remify from './remify';

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

export const breakpoint = {
  font: `(min-width: ${remify(728)})`,
};

export const paragraph = {
  mobile: {
    fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
    fontWeight: 500,
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
