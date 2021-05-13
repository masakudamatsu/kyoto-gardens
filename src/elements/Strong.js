import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';

const Strong = styled.strong`
  ${Main.Ryoanji} & {
    font-style: italic;
  }
`;

Strong.propTypes = {};
export default Strong;
