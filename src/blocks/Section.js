import styled from 'styled-components';
import PropTypes from 'prop-types';

import {whitespace} from 'src/utils/designSpec';

import remify from 'src/utils/remify';

const Section = styled.section`
  padding: 0 ${remify(whitespace.sideMargin)};
`;

Section.propTypes = {};

export default Section;
