import remify from './remify';
import {vspace} from './vspaceScheme';
import {xHeight} from './fontScheme';

export const maxColumnWidth = 941;
// Ryoan-ji's top image's width is 1882px.
// To ensure high quality images, then half the value is the maximum colum width
// It's best to use this value for all the pages;
// otherwise moving back and forth across pages causes a layout shift, compromising the unity of the site as a whole

const lineLength = {
  ryoanji: {
    min: 51.3 * xHeight('mobile'), // 436.093px for font-size of 21.3568px
    max: {
      mobile: 64.97 * xHeight('mobile'),
      desktop: 64.97 * xHeight('desktop'),
    }, // 682.188px for font-size of 26.3824px
  },
  get footer() {
    return this.ryoanji;
  },
  get index() {
    return this.ryoanji;
  },
  get kohoan() {
    return this.ryoanji;
  },
};

export function sideMargin(pageName) {
  return {
    mobile: vspace[pageName].betweenLines.mobile,
    tablet: vspace[pageName].betweenParagraphs.mobile,
    desktop: vspace[pageName].betweenParagraphs.desktop,
  };
}

export const breakpoint = {
  columnWidth: pageName => {
    return `(min-width: ${remify(
      maxColumnWidth + 2 * sideMargin(pageName).desktop,
    )})`;
  },
  fontSize: `(min-width: 728px)`, // not in rem, because it proxies the physical distance between the user and the device
  h1: pageName => {
    return `(min-width: ${remify(
      lineLength[pageName].max.mobile + 2 * sideMargin(pageName).tablet,
    )})`;
  },
  kanji: `(min-width: ${remify(410)})`,
  sideMargin: pageName => {
    return `(min-width: ${remify(
      lineLength[pageName].min + 2 * sideMargin(pageName).tablet,
    )})`;
  },
};

export const hspace = {
  buttonMenu: {
    paddingLeft: 11.5, // to center-align the icon whose width is 25px
    width: 48, // minimum touch target size (source: https://web.dev/accessible-tap-targets/)
  },
  footer: {
    maxWidth: {
      body: `
        margin: 0 auto;
        max-width: ${remify(
          lineLength.footer.max.mobile + 2 * sideMargin('footer').tablet,
        )};
        @media only screen and ${breakpoint.fontSize} {
          max-width: ${remify(
            lineLength.footer.max.desktop + 2 * sideMargin('footer').desktop,
          )};
        }
      `,
    },
    paddingSide: {
      mobile: `
        padding-left: ${remify(sideMargin('footer').mobile)};
        padding-right: ${remify(sideMargin('footer').mobile)};
      `,
      tablet: `
        @media only screen and ${breakpoint.sideMargin('footer')} {
          padding-left: ${remify(sideMargin('footer').tablet)};
          padding-right: ${remify(sideMargin('footer').tablet)};
        }
      `,
      desktop: `
        @media only screen and ${breakpoint.fontSize} {
          padding-left: ${remify(sideMargin('footer').desktop)};
          padding-right: ${remify(sideMargin('footer').desktop)};
        }
      `,
    },
  },
  index: {
    maxWidth: {
      body: `
        margin: 0 auto;
        max-width: ${remify(
          lineLength.index.max.mobile + 2 * sideMargin('index').tablet,
        )};
        @media only screen and ${breakpoint.fontSize} {
          max-width: ${remify(
            lineLength.index.max.desktop + 2 * sideMargin('index').desktop,
          )};
        }
      `,
      heading: `
        margin: 0 auto;
        max-width: ${remify(lineLength.index.max.mobile)};
        @media only screen and ${breakpoint.fontSize} {
          max-width: ${remify(lineLength.index.max.desktop)};
        }
      `,
    },
    marginSide: {
      desktop: `
        @media only screen and ${breakpoint.fontSize} {
          margin-left: ${remify(sideMargin('index').desktop)};
          margin-right: ${remify(sideMargin('index').desktop)};
        }
        @media only screen and ${breakpoint.columnWidth('index')} {
          margin-left: auto;
          margin-right: auto;
        }
      `,
    },
    paddingSide: {
      mobile: `
        padding-left: ${remify(vspace['index'].xHeight.mobile)};
        padding-right: ${remify(vspace['index'].xHeight.mobile)};
      `,
      tablet: `
        @media only screen and ${breakpoint.sideMargin('index')} {
          padding-left: ${remify(sideMargin('index').tablet)};
          padding-right: ${remify(sideMargin('index').tablet)};
        }
      `,
      desktop: `
        @media only screen and ${breakpoint.fontSize} {
          padding-left: ${remify(sideMargin('index').desktop)};
          padding-right: ${remify(sideMargin('index').desktop)};
        }
      `,
    },
    section: {
      maxWidth: (maxColumnWidth + 1) / 2,
    },
  },
  kohoan: {
    maxWidth: {
      body: `
        margin: 0 auto;
        max-width: ${remify(
          lineLength.kohoan.max.mobile + 2 * sideMargin('kohoan').tablet,
        )};
        @media only screen and ${breakpoint.fontSize} {
          max-width: ${remify(
            lineLength.kohoan.max.desktop + 2 * sideMargin('kohoan').desktop,
          )};
        }
      `,
      heading: `
        margin: 0 auto;
        max-width: ${remify(lineLength.kohoan.max.mobile)};
        @media only screen and ${breakpoint.fontSize} {
          max-width: ${remify(lineLength.kohoan.max.desktop)};
        }
      `,
    },
    marginSide: {
      desktop: `
        @media only screen and ${breakpoint.fontSize} {
          margin-left: ${remify(sideMargin('kohoan').desktop)};
          margin-right: ${remify(sideMargin('kohoan').desktop)};
        }
        @media only screen and ${breakpoint.columnWidth('kohoan')} {
          margin-left: auto;
          margin-right: auto;
        }
      `,
    },
    paddingSide: {
      mobile: `
        padding-left: ${remify(sideMargin('kohoan').mobile)};
        padding-right: ${remify(sideMargin('kohoan').mobile)};
      `,
      tablet: `
        @media only screen and ${breakpoint.sideMargin('kohoan')} {
          padding-left: ${remify(sideMargin('kohoan').tablet)};
          padding-right: ${remify(sideMargin('kohoan').tablet)};
        }
      `,
      desktop: `
        @media only screen and ${breakpoint.fontSize} {
          padding-left: ${remify(sideMargin('kohoan').desktop)};
          padding-right: ${remify(sideMargin('kohoan').desktop)};
        }
      `,
    },
  },
  ryoanji: {
    maxWidth: {
      body: `
        margin: 0 auto;
        max-width: ${remify(
          lineLength.ryoanji.max.mobile + 2 * sideMargin('ryoanji').tablet,
        )};
        @media only screen and ${breakpoint.fontSize} {
          max-width: ${remify(
            lineLength.ryoanji.max.desktop + 2 * sideMargin('ryoanji').desktop,
          )};
        }
      `,
      heading: `
        margin: 0 auto;
        max-width: ${remify(lineLength.ryoanji.max.mobile)};
        @media only screen and ${breakpoint.fontSize} {
          max-width: ${remify(lineLength.ryoanji.max.desktop)};
        }
      `,
    },
    marginSide: {
      desktop: `
        @media only screen and ${breakpoint.fontSize} {
          margin-left: ${remify(sideMargin('ryoanji').desktop)};
          margin-right: ${remify(sideMargin('ryoanji').desktop)};
        }
        @media only screen and ${breakpoint.columnWidth('ryoanji')} {
          margin-left: auto;
          margin-right: auto;
        }
      `,
    },
    paddingSide: {
      mobile: `
        padding-left: ${remify(sideMargin('ryoanji').mobile)};
        padding-right: ${remify(sideMargin('ryoanji').mobile)};
      `,
      tablet: `
        @media only screen and ${breakpoint.sideMargin('ryoanji')} {
          padding-left: ${remify(sideMargin('ryoanji').tablet)};
          padding-right: ${remify(sideMargin('ryoanji').tablet)};
        }
      `,
      desktop: `
        @media only screen and ${breakpoint.fontSize} {
          padding-left: ${remify(sideMargin('ryoanji').desktop)};
          padding-right: ${remify(sideMargin('ryoanji').desktop)};
        }
      `,
    },
  },
};

// helper functions
