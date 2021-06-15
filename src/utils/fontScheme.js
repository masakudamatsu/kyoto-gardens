import {
  cormorant,
  cormorantGaramond,
  cormorantSC,
  libreBaskerville,
  playfairDisplay,
  playfairDisplaySC,
  reforma1918,
  shipporiMincho,
  shipporiMinchoB1,
} from './fontMetrics';

// Common parameters

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

// Page-specific parameters

export const font = {
  footer: {
    family: reforma1918.fontFamily,
    metrics: reforma1918.fontMetrics,
    xHeight: {
      mobile: xHeight('mobile'),
      desktop: xHeight('desktop'),
    },
    weight: 300,
    lineHeightRatio: {
      mobile: {xHeight: 4, betweenLines: 9},
      desktop: {xHeight: 2, betweenLines: 5},
    },
    small: {
      size: '80%', // TODO: set this number more systematically (80% is <small>'s default style)
    },
  },
  index: {
    main: {
      family: reforma1918.fontFamily,
      metrics: reforma1918.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      },
      weight: 300,
      lineHeightRatio: {
        mobile: {xHeight: 4, betweenLines: 7},
        desktop: {xHeight: 1, betweenLines: 2},
      },
    },
    h2: {
      family: reforma1918.fontFamily,
      metrics: reforma1918.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile'),
        tablet: xHeight('mobile') * scale,
        desktop: xHeight('desktop'),
      },
      style: 'italic',
      weight: 600,
    },
    kanji: {
      family: shipporiMinchoB1.fontFamily,
      size: {
        mobile: '2em',
        tablet: '3em',
      }, // TODO: Set this value to match the latin counterpart's size
      weight: 500, // TODO: Set this value to match the latin counterpart's storke width
      lineHeight: 1, // to control side margins
      writingMode: 'vertical-rl',
    },
    siteTitle: {
      family: reforma1918.fontFamily,
      size: '48px',
      weight: 500,
    },
  },
  kohoan: {
    article: {
      family: libreBaskerville.fontFamily,
      metrics: libreBaskerville.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      },
      weight: 400,
      lineHeightRatio: {
        mobile: {xHeight: 1, betweenLines: 2},
        desktop: {xHeight: 4, betweenLines: 9},
      },
      link: {
        baselinePosition: {
          // for link underlines
          mobile: 16, // TODO: measure it properly
          desktop: 19, // TODO: measure it properly
        },
        spaceBelowBaseline: {
          mobile: 1,
          desktop: 2,
        },
        underlineWidth: 1,
      },
    },
    figCaption: {
      family: playfairDisplaySC.fontFamily,
      metrics: playfairDisplaySC.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      },
      weight: 400,
      lineHeightRatio: {
        mobile: {xHeight: 2, betweenLines: 3},
        desktop: {xHeight: 4, betweenLines: 7},
      },
      link: {
        baselinePosition: {
          // for link underlines
          mobile: 16,
          desktop: 20,
        },
        spaceBelowBaseline: {
          mobile: 1,
          desktop: 1,
        },
        underlineWidth: 1,
      },
      ligature: 'none', // Fix the bug that the fl ligature will be shown in lowercase...
      textAlign: 'left',
    },
    h1: {
      family: playfairDisplay.fontFamily,
      metrics: playfairDisplay.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile') * Math.pow(scale, 1),
        tablet: xHeight('mobile') * Math.pow(scale, 2),
      },
      weight: 600,
      lineHeightRatio: {
        mobile: {xHeight: 1, betweenLines: 1},
      },
      letterSpacing: '0.05em',
      textIndent: {
        mobile: -1,
        tablet: -3,
      },
    },
    h2: {
      family: playfairDisplay.fontFamily,
      metrics: playfairDisplay.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile') * scale,
        desktop: xHeight('desktop') * scale,
      },
      weight: 600,
      lineHeightRatio: {
        mobile: {xHeight: 5, betweenLines: 7},
      },
      letterSpacing: '0.01em',
      textIndent: -2,
    },
    h3: {
      family: playfairDisplay.fontFamily,
      metrics: playfairDisplay.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      },
      weight: 700,
      lineHeightRatio: {
        mobile: {xHeight: 5, betweenLines: 8}, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
      },
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    kanji: {
      family: shipporiMincho.fontFamily,
      size: '1em', // Baseline 1px below LibreBaskerville's, Height 2px above Libre Baskerville's cap height
      weight: 500, // Match Libre Baskerville 400
      lineHeight: 'normal', // line height doesn't change up to around 1.5
    },
    spanLeadIn: {
      family: playfairDisplaySC.fontFamily,
      letterSpacing: '0.01em', // TODO: Adjust this value
      wordSpacing: '-0.05em', // TODO: Adjust this value
    },
  },
  ryoanji: {
    article: {
      family: cormorantGaramond.fontFamily,
      metrics: cormorantGaramond.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      },
      weight: 600,
      lineHeightRatio: {
        mobile: {xHeight: 2, betweenLines: 5},
        desktop: {xHeight: 4, betweenLines: 11},
      },
      link: {
        baselinePosition: {
          mobile: 20,
          desktop: 24,
        },
        spaceBelowBaseline: {
          mobile: 1,
          desktop: 2,
        },
        underlineWidth: 1,
      },
    },
    abbr: {
      family: cormorantSC.fontFamily,
      letterSpacing: '0.01em',
      textTransform: 'lowercase',
    },
    figCaption: {
      family: cormorantSC.fontFamily,
      metrics: cormorantSC.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      },
      weight: 600,
      lineHeightRatio: {
        mobile: {xHeight: 2, betweenLines: 3},
        desktop: {xHeight: 4, betweenLines: 7},
      },
      link: {
        baselinePosition: {
          mobile: 17,
          desktop: 21,
        },
        spaceBelowBaseline: {
          mobile: 1,
          desktop: 1,
        },
        underlineWidth: 1,
      },
      marginRight: 5, // Align with the right-edge of the floor plan for narrowest screens
      textAlign: 'right',
    },
    h1: {
      family: cormorantSC.fontFamily,
      metrics: cormorantSC.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile') * Math.pow(scale, 2),
        tablet: xHeight('mobile') * Math.pow(scale, 3),
        desktop: xHeight('desktop') * Math.pow(scale, 3),
      },
      weight: 700,
      lineHeightRatio: {
        mobile: {xHeight: 2, betweenLines: 1},
      },
      letterSpacing: '0.05em',
      textIndent: {
        mobile: -3,
        tablet: -6, // Stem is 7px off, but -7 will make it look sticking out
        desktop: -8,
      },
    },
    h1Sub: {
      // "Rock Garden"
      size: 4 / 9, // in em
      textIndent: {
        tablet: -2,
        desktop: -2,
      },
      wordSpacing: '-0.2em',
    },
    h2: {
      family: cormorant.fontFamily,
      metrics: cormorant.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile') * scale,
        desktop: xHeight('desktop') * scale,
      },
      weight: 700,
      lineHeightRatio: {
        mobile: {xHeight: 5, betweenLines: 8}, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
      },
      letterSpacing: '0.01em',
      textIndent: -2,
    },
    h3: {
      family: cormorant.fontFamily,
      metrics: cormorant.fontMetrics,
      xHeight: {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      },
      weight: 700,
      lineHeightRatio: {
        mobile: {xHeight: 5, betweenLines: 8}, // Set the line height to be [ x-height +  cap-height ], assuming the cap-to-x height ratio is 8:5.
      },
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    kanji: {
      family: shipporiMincho.fontFamily,
      size: '0.85em' /* to match with Cormorant Garamond body text */,
      weight: 500 /* to match with stroke width of Cormorant Garamond SemiBold (600) */,
    },
    spanLeadIn: {
      family: cormorantSC.fontFamily,
      letterSpacing: '0.01em',
      wordSpacing: '-0.05em',
    },
  },
  topAppBar: {
    family: reforma1918.fontFamily,
    metrics: reforma1918.fontMetrics,
    capHeight: {
      mobile: 16,
      desktop: 16,
    },
    weight: 300,
  },
};

// Helper functions

export function makeXHeightToBe(xHeight, fontMetrics) {
  if (typeof xHeight !== 'number') {
    throw new Error(
      `makeXHeightToBe() received x-height as ${typeof xHeight}, not as number`,
    );
  }
  if (!fontMetrics) {
    throw new Error(`makeXHeightToBe() received no fontMetrics`);
  }
  return xHeightToBe(xHeight, fontMetrics);
}

export function makeCapHeightToBe(capHeight, fontMetrics) {
  if (typeof capHeight !== 'number') {
    throw new Error(
      `makeCapHeightToBe() received capHeight as ${typeof capHeight}, not as number`,
    );
  }
  if (!fontMetrics) {
    throw new Error(`makeCapHeightToBe() received no fontMetrics`);
  }
  return capHeightToBe(capHeight, fontMetrics);
}

export function makeLineHeightRatioToBe(lineHeightRatio, fontMetrics) {
  if (!fontMetrics.unitsPerEm) {
    throw new Error(`makeLineHeightRatioToBe() received no fontMetrics`);
  }
  const lineHeightToXHeightRatio =
    (lineHeightRatio.xHeight + lineHeightRatio.betweenLines) /
    lineHeightRatio.xHeight;
  return (
    (fontMetrics.xHeight * lineHeightToXHeightRatio) / fontMetrics.unitsPerEm
  );
}

function capHeightToBe(capHeight, fontMetrics) {
  const fontSizeToCapHeightRatio =
    fontMetrics.unitsPerEm / fontMetrics.capHeight;
  return capHeight * fontSizeToCapHeightRatio;
}
function xHeightToBe(xHeight, fontMetrics) {
  const fontSizeToXHeightRatio = fontMetrics.unitsPerEm / fontMetrics.xHeight;
  return xHeight * fontSizeToXHeightRatio;
}
