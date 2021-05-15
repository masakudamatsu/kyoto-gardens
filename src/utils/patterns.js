import {css} from 'styled-components';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';

const circleDiameter = 3.5;
const lightWidth = 0.5;
const concentricCircle = (scale = 1) => {
  // prettier-ignore
  return `
    ${kohoan.background.backgroundColor} ${25 * scale}%, 
    ${kohoan.background.patternColor} ${(31.25 - lightWidth /2) * scale}%, 
    ${kohoan.background.patternColor} ${(31.25 + lightWidth / 2) * scale}%, 
    ${kohoan.background.backgroundColor} ${37.5 * scale}%, 
    ${kohoan.background.backgroundColor} ${50 * scale}%, 
    ${kohoan.background.patternColor} ${(56.25 - lightWidth /2) * scale}%, 
    ${kohoan.background.patternColor} ${(56.25 + lightWidth / 2) * scale}%, 
    ${kohoan.background.backgroundColor} ${62.5 * scale}%, 
    ${kohoan.background.backgroundColor} ${75 * scale}%, 
    ${kohoan.background.patternColor} ${(81.25 - lightWidth / 2) * scale}%, 
    ${kohoan.background.patternColor} ${(81.25 + lightWidth / 2) * scale}%,
    ${kohoan.background.backgroundColor} ${87.5 * scale}%, 
    ${kohoan.background.backgroundColor} ${100 * scale}%, 
    transparent ${100 * scale}%, 
    transparent
  `;
};

export const seigaihaPattern = css`
  background-color: ${kohoan.background
    .backgroundColor}; /* fall back for Opera Mini */
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
  background-color: ${ryoanji.background
    .backgroundColor}; /* fall back for Opera Mini */
  background-image: radial-gradient(
      circle closest-side,
      transparent 91%,
      ${ryoanji.background.patternColor} 100%,
      transparent
    ),
    radial-gradient(
      circle closest-side,
      ${ryoanji.background.backgroundColor} 91%,
      ${ryoanji.background.patternColor} 100%,
      ${ryoanji.background.backgroundColor}
    ); /* Higher than these percentages will create noticeable dots at the intersection of four circles */
  background-position: 0 0, ${circleDiameter / 2}rem ${circleDiameter / 2}rem; /* The second pair of values should be half as large as the background-size value so that the grid of circles overlaps just in halfway */
  background-repeat: repeat;
  background-size: ${circleDiameter}rem ${circleDiameter}rem; /* Circles won't be recognizable if smaller than these values. The feel of textile will lose if larger than these values */
`;
