import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {ryoanji} from 'src/utils/designSpec';

const fontStyle = {
  ryoanji: css`
    font-family: ${ryoanji.smallcaps.fontFamily};
    letter-spacing: ${ryoanji.smallcaps.letterSpacing};
  `,
};

const Abbr = styled.abbr`
  ${props => props.ryoanji && fontStyle.ryoanji}
  text-transform: lowercase; /* To make HTML document easy to understand */
  &[title] {
    text-decoration: none; /* See https://developer.mozilla.org/en-US/docs/Archive/Web_Standards/Styling_Abbreviations_and_Acronyms */
  }
`;

Abbr.propTypes = {
  ryoanji: PropTypes.bool,
};
export default Abbr;
