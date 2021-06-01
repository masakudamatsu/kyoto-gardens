import {xHeight} from './designSpec';

export const ryoanji = {
  title: 'Ryoan-ji Rock Garden | 龍安寺石庭',
  description:
    'Ryoan-ji Rock Garden teaches us the principle of Zen Buddhism to live happily, with the layout of 15 rocks as a textbook.',
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
  },
  figure: {
    maxHeight: 703, // half the height of spring/summer photos
    maxWidth: 941, // half the width of spring/summer/autumn/winter photos
    paddingInsideBorder: 15.564,
    spaceBelowByBug: {
      mobile: 8,
      desktop: 12,
    }, // See issue #29
  },
};
