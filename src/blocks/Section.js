import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const spaceByDefault = {
  mobile: 8,
  desktop: 12,
};
const Section = styled.section`
  padding-bottom: ${remify(
    whitespace('mobile').betweenSections - spaceByDefault.mobile,
  )};
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(
      whitespace('desktop').betweenSections - spaceByDefault.desktop,
    )};
  }
`;

Section.propTypes = {};

export default Section;
