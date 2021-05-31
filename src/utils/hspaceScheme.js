import remify from './remify';
import {vspace} from './vspaceScheme';
import {xHeight} from './fontScheme';

export const lineLength = {
  ryoanji: {
    min: 51.3 * xHeight('mobile'), // 436.093px for font-size of 21.3568px
    max: {
      mobile: 64.97 * xHeight('mobile'),
      desktop: 64.97 * xHeight('desktop'),
    }, // 682.188px for font-size of 26.3824px
  },
  get index() {
    return this.ryoanji;
  },
  get kohoan() {
    return this.ryoanji;
  },
};

function sideMargin(pageName) {
  return {
    mobile: vspace[pageName].betweenLines.mobile,
    tablet: vspace[pageName].betweenParagraphs.mobile,
    desktop: vspace[pageName].betweenParagraphs.desktop,
  };
}

export const breakpoint = {
  fontSize: `(min-width: 728px)`, // not in rem, because it proxies the physical distance between the user and the device
  h1: pageName => {
    return `(min-width: ${remify(
      lineLength[pageName].max.mobile + 2 * sideMargin(pageName).tablet,
    )})`;
  },
  sideMargin: pageName => {
    return `(min-width: ${remify(
      lineLength[pageName].min + 2 * sideMargin(pageName).tablet,
    )})`;
  },
};

export const hspace = {
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
    paddingSide: {
      mobile: `
        padding-left: ${remify(sideMargin('index').mobile)};
        padding-right: ${remify(sideMargin('index').mobile)};
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
