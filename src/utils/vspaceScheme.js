import {font, scale} from './fontScheme';

export const vspace = {
  index: {
    betweenSections: {
      mobile: getSpaceBetweenLines('mobile', font.index.main) * scale * scale,
      desktop: getSpaceBetweenLines('desktop', font.index.main) * scale * scale,
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
  },
};

export const spaceToTrim = {
  index: {
    main: {
      bottom: {
        mobile: 0, // TODO
        desktop: 0, // TODO
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
  if (!spec.metrics) {
    throw new Error(
      'getCapToX() requires an object with metrics property as an argument',
    );
  }
  if (!spec.xHeight) {
    throw new Error(
      'getCapToX() requires an object with xHeight property as an argument',
    );
  }
  const ratioToX =
    (spec.metrics.capHeight - spec.metrics.xHeight) / spec.metrics.xHeight;
  return {
    mobile: spec.xHeight.mobile * ratioToX,
    desktop: spec.xHeight.desktop * ratioToX,
  };
}
