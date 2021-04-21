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

const lineHeightRatio = {
  mobile: {
    xHeight: 2,
    betweenLines: 5,
  },
  desktop: {
    xHeight: 4,
    betweenLines: 11,
  },
};

export const cormorantGaramond = {
  semiBold: {
    fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
    fontWeight: 500,
    unitsPerEm: 1000,
    xHeight: 398,
    capHeight: 633,
  },
}; // Measured by myself for font-size 27.664px

export const poppins = {
  light: {
    fontFamily: "'Poppins', Verdana, sans-serif",
    fontWeight: 300,
    unitsPerEm: 1000,
    xHeight: 546,
    capHeight: 700,
  },
  thin: {
    fontFamily: "'Poppins', Verdana, sans-serif",
    fontWeight: 100,
    unitsPerEm: 1000,
    xHeight: 540,
    capHeight: 702,
  },
}; // Measured with https://opentype.js.org/font-inspector.html

// Scale factor to enlarge fonts beyond the tablet screen width of 728px
export const scale = 1.2;
export const breakpointForFont = 728;

// Type scales
export const typescale = {
  test: {
    capHeight: cormorantGaramond.semiBold.capHeight / 10,
    xHeightRatio: lineHeightRatio.mobile.xHeight,
    betweenLinesRatio: lineHeightRatio.mobile.betweenLines,
    textCropEm: {
      top: -0.2025, // 198 - 207
      bottom: -0.1925, // 188 - 197
    },
    fontMetrics: cormorantGaramond.semiBold,
  },
  display: {
    capHeight: 15,
    xHeightRatio: 3,
    betweenLinesRatio: 4,
    textCropEm: {
      top: -0.304, // from -0.281 to -0.327
      bottom: -0.3325, // from -0.305 to -0.350
    },
    fontMetrics: poppins.light,
  },
  body: {
    xHeight: xHeight('mobile'),
    xHeightRatio: lineHeightRatio.mobile.xHeight,
    betweenLinesRatio: lineHeightRatio.mobile.betweenLines,
    textCropEm: {
      top: 0,
      bottom: 0,
    },
    fontMetrics: cormorantGaramond.semiBold,
  },
  smallPrint: {
    capHeight: 10,
    xHeightRatio: 2,
    betweenLinesRatio: 3,
    textCropEm: {
      top: -0.3165, // from -0.282 to -0.351
      bottom: -0.4195, // from -0.385 to -0.454
    },
    fontMetrics: poppins.light,
  },
};

// Assign type scales to components
export const font = {
  p: typescale.body,
  h1: typescale.display,
  footer: typescale.smallPrint,
  linkText: typescale.body,
  section: typescale.body,
  textCropper: typescale.test,
};
