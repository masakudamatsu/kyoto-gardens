import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/blocks/Main';
import {ryoanji} from 'src/utils/specRyoanji';

const Abbr = styled.abbr`
  &[title] {
    text-decoration: none; /* See https://developer.mozilla.org/en-US/docs/Archive/Web_Standards/Styling_Abbreviations_and_Acronyms */
  }
  ${Main.Ryoanji} & {
    font-family: ${ryoanji.abbr.fontFamily};
    letter-spacing: ${ryoanji.abbr.letterSpacing};
    text-transform: ${ryoanji.abbr.textTransform};
  }
`;

Abbr.propTypes = {};
export default Abbr;
