import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, paragraph} from 'src/utils/designSpec';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const P = styled.p`
  font-family: ${paragraph.mobile.fontFamily};
  font-size: ${remify(getFontSize(paragraph.mobile))};
  font-weight: ${paragraph.mobile.fontWeight};
  line-height: ${getLineHeight(paragraph.mobile)};
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(getFontSize(paragraph.desktop))};
  }
`;

P.propTypes = {};

export default P;
