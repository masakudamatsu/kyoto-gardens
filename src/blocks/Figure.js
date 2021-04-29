import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import {getPaddingTop} from 'src/utils/whitespaceCssFactory';

const Figure = styled.figure`
  overflow: hidden; /* Control the image size by the box size of the figure */
  ${props =>
    props.belowH3 &&
    `
    padding-top: ${getPaddingTop(props, 'mobile')};
    @media only screen and ${breakpoint.fontSize} {
      padding-top: ${getPaddingTop(props, 'desktop')};
    }
  `}
`;

Figure.Img = styled.img`
  display: block; /* Prevent images from aligning with other contents */
  height: auto; /* Preserve the aspect ratio */
  margin: auto; /* For vertically & horizontally centering the image #2 */
  max-width: 100%; /* Control the image size by the box size of the figure */
`;

Figure.propTypes = {
  belowH3: PropTypes.bool,
};

export default Figure;
