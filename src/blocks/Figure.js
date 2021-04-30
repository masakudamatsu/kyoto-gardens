import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import {getPaddingTopAboveBox} from 'src/utils/whitespaceCssFactory';

const Figure = styled.figure`
  overflow: hidden; /* Control the image size by the box size of the figure */
  ${props =>
    props.belowH3 &&
    `
    padding-top: ${getPaddingTopAboveBox(props, 'mobile')};
    @media only screen and ${breakpoint.fontSize} {
      padding-top: ${getPaddingTopAboveBox(props, 'desktop')};
    }
  `}
`;

Figure.propTypes = {
  belowH3: PropTypes.bool,
};

export default Figure;
