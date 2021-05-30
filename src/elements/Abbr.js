import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/blocks/Main';

import {font} from 'src/utils/fontScheme';

const Abbr = styled.abbr`
  &[title] {
    text-decoration: none; /* See https://developer.mozilla.org/en-US/docs/Archive/Web_Standards/Styling_Abbreviations_and_Acronyms */
  }
  ${Main.Ryoanji} & {
    font-family: ${font.ryoanji.abbr.family};
    letter-spacing: ${font.ryoanji.abbr.letterSpacing};
    text-transform: ${font.ryoanji.abbr.textTransform};
  }
`;

Abbr.propTypes = {};
export default Abbr;
