import styled from 'styled-components';
import PropTypes from 'prop-types';
const Abbr = styled.abbr`
  &[title] {
    text-decoration: none; /* See https://developer.mozilla.org/en-US/docs/Archive/Web_Standards/Styling_Abbreviations_and_Acronyms */
  }
`;

Abbr.propTypes = {};
export default Abbr;
