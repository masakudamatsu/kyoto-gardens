import {xHeight} from './designSpec';

export const kohoan = {
  title: 'Koho-an Temple | 孤篷庵',
  description:
    'Koho-an Temple in Kyoto is a 17th-century masterpiece of spatial design, seemingly integrating architecture with gardens to take the visitor to an imaginary boat trip at sunset.',
  figure: {
    maxHeight: 703, // half the height of spring/summer photos
    maxWidth: 941, // half the width of spring/summer/autumn/winter photos
    spaceBelowByBug: {
      mobile: 7,
      desktop: 10,
    }, // See issue #29
  },
};
