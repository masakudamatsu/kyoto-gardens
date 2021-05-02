import {css} from 'styled-components';
import {color} from 'src/utils/specColor';

const circleDiameter = 3.5;
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
