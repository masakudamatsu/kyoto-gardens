import styled from 'styled-components';
import PropTypes from 'prop-types';

import Img from 'src/elements/Img';
import {breakpoint, lineLength, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const FigurePhoto = styled.figure`
  overflow: hidden; /* Control the image size by the box size of the figure */
  ${props =>
    props.landscape
      ? ``
      : `
        @media only screen and ${breakpoint.sideMargin} {
          padding: 0 ${remify(whitespace().sideMarginLarge)};
        }
        @media only screen and ${breakpoint.floorPlanWidth} {
          margin: 0 auto;
          width: ${remify(
            lineLength.max.mobile + whitespace().sideMarginLarge * 2,
          )};
        }
        @media only screen and ${breakpoint.fontSize} {
          margin: 0;
          padding: 0 ${remify(whitespace('desktop').sideMarginLarge)};
          width: auto;
        }
        @media only screen and ${breakpoint.floorPlanWidthDesktop} {
          margin: 0 auto;
          width: ${remify(
            lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,
          )};
        }
      `}
`;

FigurePhoto.Img = styled(Img)``;

FigurePhoto.propTypes = {
  landscape: PropTypes.bool,
};

export default FigurePhoto;
