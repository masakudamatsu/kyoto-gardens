import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {getPaddingTop} from 'src/utils/whitespaceCssFactory';

const spaceByDefault = {
  mobile: 12.5,
  desktop: 17.5,
}; // Cormorant Garamond descender + Cormorant ascender

const Subsection = styled.section`
  padding-top: ${remify(
    whitespace('mobile').betweenParagraphs - spaceByDefault.mobile,
  )};
  @media only screen and ${breakpoint.fontSize} {
    padding-top: ${remify(
      whitespace('desktop').betweenParagraphs - spaceByDefault.desktop,
    )};
  }
`;

Subsection.propTypes = {};

export default Subsection;
