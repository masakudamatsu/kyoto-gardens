import {font, scale, xHeight} from './fontScheme';

export const vspace = {
  footer: {
    betweenLines: {
      mobile: getSpaceBetweenLines('mobile', font.footer),
      desktop: getSpaceBetweenLines('desktop', font.footer),
    },
    betweenParagraphs: {
      mobile: getSpaceBetweenLines('mobile', font.footer) * scale,
      desktop: getSpaceBetweenLines('desktop', font.footer) * scale,
    },
    betweenSections: {
      mobile: getSpaceBetweenLines('mobile', font.footer) * scale * scale,
      desktop: getSpaceBetweenLines('desktop', font.footer) * scale * scale,
    },
  },
  header: {
    borderBottom: 1,
    height: {
      mobile: 60,
      desktop: 60,
    }, // SiteTitle is 48px for 320px wide 181px high; by making it a third, font-size gets 16px
  },
  index: {
    betweenLines: {
      mobile: getSpaceBetweenLines('mobile', font.index.main),
      desktop: getSpaceBetweenLines('desktop', font.index.main),
    },
    betweenParagraphs: {
      mobile: getSpaceBetweenLines('mobile', font.index.main) * scale,
      desktop: getSpaceBetweenLines('desktop', font.index.main) * scale,
    },
    betweenSections: {
      mobile: getSpaceBetweenLines('mobile', font.index.main) * scale * scale,
      desktop: getSpaceBetweenLines('desktop', font.index.main) * scale * scale,
    },
    kanji: {
      mobile: -59,
      tablet: -85,
    },
    xHeight: {
      mobile: xHeight('mobile'),
      desktop: xHeight('desktop'),
    },
  },
  kohoan: {
    betweenLines: {
      mobile: getSpaceBetweenLines('mobile', font.kohoan.article),
      desktop: getSpaceBetweenLines('desktop', font.kohoan.article),
    },
    betweenParagraphs: {
      mobile: getSpaceBetweenLines('mobile', font.kohoan.article) * scale,
      desktop: getSpaceBetweenLines('desktop', font.kohoan.article) * scale,
    },
    betweenSections: {
      mobile:
        getSpaceBetweenLines('mobile', font.kohoan.article) * scale * scale,
      desktop:
        getSpaceBetweenLines('desktop', font.kohoan.article) * scale * scale,
    },
    h1HyphenBottom: {
      // distance from text box top to the bottom of hyphen
      mobile: 18.5,
      desktop: 31.5,
    },
    h2CapHeight: {
      mobile: getCapHeight(font.kohoan.h2).mobile,
      desktop: getCapHeight(font.kohoan.h2).desktop,
    },
  },
  ryoanji: {
    betweenLines: {
      mobile: getSpaceBetweenLines('mobile', font.ryoanji.article),
      desktop: getSpaceBetweenLines('desktop', font.ryoanji.article),
    },
    betweenParagraphs: {
      mobile: getSpaceBetweenLines('mobile', font.ryoanji.article) * scale,
      desktop: getSpaceBetweenLines('desktop', font.ryoanji.article) * scale,
    },
    betweenSections: {
      mobile:
        getSpaceBetweenLines('mobile', font.ryoanji.article) * scale * scale,
      desktop:
        getSpaceBetweenLines('desktop', font.ryoanji.article) * scale * scale,
    },
    h2CapHeight: {
      mobile: getCapHeight(font.ryoanji.h2).mobile,
      desktop: getCapHeight(font.ryoanji.h2).desktop,
    },
    xHeight: {
      mobile: xHeight('mobile'),
      desktop: xHeight('desktop'),
    },
  },
};

export const spaceToTrim = {
  footer: {
    bottom: {
      mobile: 0, // TODO
      desktop: 0, // TODO
    },
    topToX: {
      mobile: 12.5,
      desktop: 16,
    },
  },
  index: {
    figure: {
      bottom: {
        mobile: 4,
      }, // See issue #29
    },
    kohoan: {
      top: {
        mobile: 9.5,
      },
      bottom: {
        mobile: 5,
      },
    },
    main: {
      top: {
        mobile: 5.5,
      },
      bottom: {
        mobile: 0, // TODO
        desktop: 0, // TODO
      },
    },
    ryoanji: {
      bottom: {
        mobile: 2,
      },
      top: {
        mobile: 1.5,
      },
    },
  },
  kohoan: {
    article: {
      top: {
        mobile: 5.5,
        desktop: 8.5,
      },
      bottom: {
        mobile: 7,
        desktop: 10,
      },
      capToX: {
        mobile: getCapToX(font.kohoan.article).mobile,
        desktop: getCapToX(font.kohoan.article).desktop,
      },
    },
    figCaption: {
      bottom: {
        mobile: 5, // 10.5 - article.ascender.mobile
        desktop: 7, // 15.5 - article.ascender.desktop
      },
    },
    figure: {
      bottom: {
        mobile: 7,
        desktop: 10,
      }, // See issue #29
    },
    h1: {
      bottom: {
        mobile: 5,
        desktop: 7,
      },
    },
    h2: {
      top: {
        mobile: 8,
        desktop: 10.5,
      },
      bottom: {
        mobile: 6,
        desktop: 7,
      },
    },
    h3: {
      top: {
        mobile: 6, // 13 minus article.descender.mobile
        desktop: 7.5, //17.5 minus article.descender.desktop,
      },
      bottom: {
        mobile: 4.5, // 10 minus article.ascender.mobile
        desktop: 5.5, // 14 minus article.ascender.mobile
      },
    },
    hr: {
      asteriskHeight: {
        mobile: 7,
        desktop: 8.5,
      },
      top: {
        mobile: 5.5, // 12.5 minus article.bottom.mobile
        desktop: 7.5, // 17.5 minus article.bottom.desktop
      },
    },
  },
  ryoanji: {
    article: {
      top: {
        mobile: 7.5,
        desktop: 10.5,
      },
      bottom: {
        mobile: 8,
        desktop: 12,
      },
      capToX: {
        mobile: getCapToX(font.ryoanji.article).mobile,
        desktop: getCapToX(font.ryoanji.article).desktop,
      },
    },
    figure: {
      bottom: {
        mobile: 8,
        desktop: 12,
      }, // See issue #29
    },
    floorplan: {
      top: 6,
    },
    h1: {
      top: {
        // = h1.top
        mobile: 0,
      },
      between: {
        // = h1.bottom + h1Sub.top
        mobile: 3,
        desktop: 5,
      },
      bottom: {
        // = h1Sub.bottom
        mobile: 0,
        desktop: 1,
      },
    },
    h2: {
      top: {
        mobile: 6.5,
        desktop: 8.5,
      },
      bottom: {
        mobile: 7,
        desktop: 9,
      },
    },
    h3: {
      top: {
        mobile: 4.5, // 12.5 minus article.bottom.mobile
        desktop: 5.5, //17.5 minus article.bottom.desktop,
      },
      bottom: {
        mobile: 4,
        desktop: 5,
      },
    },
    // Uncomment below if we use <Hr />
    // hr: {
    //   asteriskHeight: {
    //     mobile: 8,
    //     desktop: 10,
    //   },
    //   top: {
    //     mobile: 5, // 13 minus article.bottom.desktop
    //     desktop: 5.5, // 17.5 minus article.bottom.desktop
    //   },
    // },
  },
};

// helper functions
function getSpaceBetweenLines(screenWidth, spec) {
  if (screenWidth !== 'mobile' && screenWidth !== 'desktop') {
    throw new Error(
      `getSpaceBetweenLines() requires the first argument to be 'mobile' or 'desktop'`,
    );
  }
  if (!spec.xHeight) {
    throw new Error(
      `getSpaceBetweenLines() requires the second argument to be an object with 'xHeight' property`,
    );
  }
  if (!spec.lineHeightRatio) {
    throw new Error(
      `getSpaceBetweenLines() requires the second argument to be an object with 'lineHeightRatio' property`,
    );
  }
  return (
    spec.xHeight[screenWidth] *
    (spec.lineHeightRatio[screenWidth].betweenLines /
      spec.lineHeightRatio[screenWidth].xHeight)
  );
}

function getCapToX(spec) {
  if (spec.metrics && spec.xHeight) {
    const ratioToX =
      (spec.metrics.capHeight - spec.metrics.xHeight) / spec.metrics.xHeight;
    return {
      mobile: spec.xHeight.mobile * ratioToX,
      desktop: spec.xHeight.desktop * ratioToX,
    };
  } else if (!spec.metrics) {
    throw new Error(
      'getCapToX() requires an object with metrics property as an argument',
    );
  } else if (!spec.xHeight) {
    throw new Error(
      'getCapToX() requires an object with xHeight property as an argument',
    );
  } else {
    throw new Error(`getCapToX() gets an impossible error`);
  }
}

function getCapHeight(spec) {
  if (spec.metrics && spec.xHeight) {
    const ratioToX = spec.metrics.capHeight / spec.metrics.xHeight;
    return {
      mobile: spec.xHeight.mobile * ratioToX,
      desktop: spec.xHeight.desktop * ratioToX,
    };
  } else if (!spec.metrics) {
    throw new Error(
      'getCapHeight() requires an object with metrics property as an argument',
    );
  } else if (!spec.xHeight) {
    throw new Error(
      'getCapHeight() requires an object with xHeight property as an argument',
    );
  } else {
    throw new Error(`getCapHeight() gets an impossible error`);
  }
}
