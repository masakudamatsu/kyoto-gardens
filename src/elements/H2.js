import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const defaultStyle = css``;

const visuallyHidden = css`
  /* Hide an element but show it for the screen reader. See my article on this technique: https://masakudamatsu.medium.com/the-visually-hidden-technique-303f8e2bd409 */
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const H2 = styled.h2`
  ${props => (props.hidden ? visuallyHidden : defaultStyle)}
`;

H2.propTypes = {
  hidden: PropTypes.bool,
};
export default H2;
