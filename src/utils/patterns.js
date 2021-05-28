import {css} from 'styled-components';

import {colour} from 'src/utils/colorScheme';

const circleDiameter = 3.5;
const lightWidth = 0.5;
const concentricCircle = (scale = 1) => {
  // prettier-ignore
  return `
    ${colour.kohoan.pattern.background} ${25 * scale}%, 
    ${colour.kohoan.pattern.figure} ${(31.25 - lightWidth /2) * scale}%, 
    ${colour.kohoan.pattern.figure} ${(31.25 + lightWidth / 2) * scale}%, 
    ${colour.kohoan.pattern.background} ${37.5 * scale}%, 
    ${colour.kohoan.pattern.background} ${50 * scale}%, 
    ${colour.kohoan.pattern.figure} ${(56.25 - lightWidth /2) * scale}%, 
    ${colour.kohoan.pattern.figure} ${(56.25 + lightWidth / 2) * scale}%, 
    ${colour.kohoan.pattern.background} ${62.5 * scale}%, 
    ${colour.kohoan.pattern.background} ${75 * scale}%, 
    ${colour.kohoan.pattern.figure} ${(81.25 - lightWidth / 2) * scale}%, 
    ${colour.kohoan.pattern.figure} ${(81.25 + lightWidth / 2) * scale}%,
    ${colour.kohoan.pattern.background} ${87.5 * scale}%, 
    ${colour.kohoan.pattern.background} ${100 * scale}%, 
    transparent ${100 * scale}%, 
    transparent
  `;
};

export const seigaihaPattern = css`
  background-color: ${colour.kohoan.pattern
    .background}; /* fall back for Opera Mini */
  background-image: radial-gradient(
      circle farthest-side at 50% 150%,
      ${concentricCircle(2 / 3)}
    ),
    radial-gradient(
      circle farthest-corner at 0% 100%,
      ${concentricCircle(1 / 2)}
    ),
    radial-gradient(
      circle farthest-corner at 100% 100%,
      ${concentricCircle(1 / 2)}
    ),
    radial-gradient(circle farthest-corner at 50% 50%, ${concentricCircle()});
  background-repeat: repeat;
  background-size: ${(circleDiameter * Math.sqrt(3)) / 2}rem
    ${circleDiameter / 2}rem;
`;

export const shippoPattern = css`
  background-color: ${colour.ryoanji.pattern
    .background}; /* fall back for Opera Mini */
  background-image: radial-gradient(
      circle closest-side,
      transparent 91%,
      ${colour.ryoanji.pattern.figure} 100%,
      transparent
    ),
    radial-gradient(
      circle closest-side,
      ${colour.ryoanji.pattern.background} 91%,
      ${colour.ryoanji.pattern.figure} 100%,
      ${colour.ryoanji.pattern.background}
    ); /* Higher than these percentages will create noticeable dots at the intersection of four circles */
  background-position: 0 0, ${circleDiameter / 2}rem ${circleDiameter / 2}rem; /* The second pair of values should be half as large as the background-size value so that the grid of circles overlaps just in halfway */
  background-repeat: repeat;
  background-size: ${circleDiameter}rem ${circleDiameter}rem; /* Circles won't be recognizable if smaller than these values. The feel of textile will lose if larger than these values */
`;
