import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span`
  ${props => props.nowrap && 'white-space: nowrap;'}
`;

Span.propTypes = {
  nowrap: PropTypes.bool,
};
export default Span;
