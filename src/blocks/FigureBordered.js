import styled from 'styled-components';
import PropTypes from 'prop-types';

import Img from 'src/elements/Img';
import {breakpoint, figureBordered, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const FigureBordered = styled.figure`
  border-bottom: 1px solid hsla(193, 50%, 26%, 0.2);
  border-top: 1px solid hsla(193, 50%, 26%, 0.2);
  overflow: hidden; /* Control the image size by the box size of the figure */
  padding: ${figureBordered.padding}px;
  @media only screen and ${breakpoint.floorPlan} {
    border-left: 1px solid hsla(193, 50%, 26%, 0.2);
    border-right: 1px solid hsla(193, 50%, 26%, 0.2);
    margin: 0 ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.fontSize} {
    margin: 0 ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

FigureBordered.Img = styled(Img)``;

FigureBordered.propTypes = {
  borderColor: PropTypes.string,
};

export default FigureBordered;
