import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, whitespace} from 'src/utils/designSpec';

import remify from 'src/utils/remify';

const Section = styled.section`
  padding: 0 ${remify(whitespace.sideMargin)};
  @media only screen and ${breakpoint.sideMargin} {
    padding: 0 ${remify(whitespace.sideMarginLarge)};
  }
`;

Section.propTypes = {};

export default Section;
