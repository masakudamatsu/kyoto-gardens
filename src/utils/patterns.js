import {css} from 'styled-components';
import {color} from 'src/utils/specColor';

const circleDiameter = 3.5;
const concentricCircle = (scale = 1) => {
  return `
    white ${12.5 * scale}%, silver ${12.5 * scale}%, 
    silver ${25 * scale}%, white ${25 * scale}%, 
    white ${37.5 * scale}%, silver ${37.5 * scale}%, 
    silver ${50 * scale}%, white ${50 * scale}%, 
    white ${62.5 * scale}%, silver ${62.5 * scale}%, 
    silver ${75 * scale}%, white ${75 * scale}%, 
    white ${87.5 * scale}%, silver ${87.5 * scale}%, 
    silver ${100 * scale}%, transparent ${100 * scale}%, 
    transparent
  `;
};
export const seigaihaPattern = css`
  background-color: ${color.imagePlaceholder}; /* fall back for Opera Mini */
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
  background-color: ${color.imagePlaceholder}; /* fall back for Opera Mini */
  background-image: radial-gradient(
      circle closest-side,
      transparent 91%,
      #ffffff 100%,
      transparent
    ),
    radial-gradient(
      circle closest-side,
      ${color.imagePlaceholder} 91%,
      #ffffff 100%,
      ${color.imagePlaceholder}
    ); /* Higher than these percentages will create noticeable dots at the intersection of four circles */
  background-position: 0 0, ${circleDiameter / 2}rem ${circleDiameter / 2}rem; /* The second pair of values should be half as large as the background-size value so that the grid of circles overlaps just in halfway */
  background-repeat: repeat;
  background-size: ${circleDiameter}rem ${circleDiameter}rem; /* Circles won't be recognizable if smaller than these values. The feel of textile will lose if larger than these values */
`;
