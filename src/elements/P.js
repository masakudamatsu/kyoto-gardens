import styled from 'styled-components';
import PropTypes from 'prop-types';

const P = styled.p`
  text-align: ${props => (props.message ? 'center' : 'left')};
`;

P.propTypes = {
  message: PropTypes.bool,
};

export default P;
