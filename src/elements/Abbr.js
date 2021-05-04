import styled from 'styled-components';
import PropTypes from 'prop-types';

import {smallcaps} from 'src/utils/designSpec';

const Abbr = styled.abbr`
  font-family: ${smallcaps.fontFamily};
  letter-spacing: ${smallcaps.letterSpacing};
  text-transform: lowercase; /* To make HTML document easy to understand */
  &[title] {
    text-decoration: none; /* See https://developer.mozilla.org/en-US/docs/Archive/Web_Standards/Styling_Abbreviations_and_Acronyms */
  }
`;

Abbr.propTypes = {};
export default Abbr;
