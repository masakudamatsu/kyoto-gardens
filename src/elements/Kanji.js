import styled from 'styled-components';
import PropTypes from 'prop-types';

const Kanji = styled.span.attrs(props => ({
  lang: 'ja',
}))`
  font-family: 'Shippori Mincho', serif;
  font-size: 0.85em; /* to match with Cormorant Garamond body text */
  font-weight: 500; /* to match with stroke width of Cormorant Garamond SemiBold (600) */
`;

Kanji.propTypes = {};
export default Kanji;
