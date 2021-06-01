import {xHeight} from './designSpec';

export const kohoan = {
  title: 'Koho-an Temple | 孤篷庵',
  description:
    'Koho-an Temple in Kyoto is a 17th-century masterpiece of spatial design, seemingly integrating architecture with gardens to take the visitor to an imaginary boat trip at sunset.',
  h1: {
    get padding() {
      const target = {
        mobile: xHeight('mobile'),
        desktop: xHeight('desktop'),
      };
      const defaultSpace = {
        between: {
          mobile: 3,
          desktop: 5,
        },
        bottom: {
          mobile: 0,
          desktop: 1,
        },
        top: {
          mobile: 0,
        },
      };
      return {
        between: {
          mobile: target.mobile - defaultSpace.between.mobile,
          desktop: target.desktop - defaultSpace.between.desktop,
        },
        bottom: {
          mobile: target.mobile - defaultSpace.bottom.mobile,
          desktop: target.desktop - defaultSpace.bottom.desktop,
        },
        top: {
          mobile: target.mobile - defaultSpace.top.mobile,
          desktop: 0,
        },
      };
    },
    textIndent: {
      mobile: -1,
      desktop: -3,
    },
    hyphen: {
      // distance from text box top to the bottom of hyphen
      mobile: 18.5,
      desktop: 31.5,
    },
    descender: {
      mobile: 5,
      desktop: 7,
    },
  },
  figure: {
    maxHeight: 703, // half the height of spring/summer photos
    maxWidth: 941, // half the width of spring/summer/autumn/winter photos
    paddingInsideBorder: 15.564,
    spaceBelowByBug: {
      mobile: 7,
      desktop: 10,
    }, // See issue #29
  },
};
