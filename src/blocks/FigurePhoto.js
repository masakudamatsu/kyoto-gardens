import styled from 'styled-components';
import PropTypes from 'prop-types';

import Img from 'src/elements/Img';
import {breakpoint, figureBordered, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const FigurePhoto = styled.figure`
  margin: 0 -${remify(whitespace.sideMargin)}; /* override the side margins */
  overflow: hidden; /* Control the image size by the box size of the figure */
  @media only screen and ${breakpoint.floorPlan} {
    margin: 0; /* bring the side margins back */
  }
`;

FigurePhoto.Img = styled(Img)``;

FigurePhoto.propTypes = {
  borderColor: PropTypes.string,
};

export default FigurePhoto;
