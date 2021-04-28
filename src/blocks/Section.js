import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, lineLength, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const targetHeight = whitespace().betweenSections;
const spaceByDefault = {
  mobile: 8, // given x-height of 8px and line-height of 28px
};
const Section = styled.section`
  padding-bottom: ${remify(targetHeight - spaceByDefault.mobile)};
`;

Section.propTypes = {};

export default Section;
