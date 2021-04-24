import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, lineLength, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const Section = styled.section`
  margin: 0 auto;
  max-width: ${remify(lineLength.max.mobile + whitespace.sideMarginLarge * 2)};
  @media only screen and ${breakpoint.fontSize} {
    max-width: ${remify(
      lineLength.max.desktop + whitespace.sideMarginLarge * 2,
    )};
  }
`;

Section.propTypes = {};

export default Section;
