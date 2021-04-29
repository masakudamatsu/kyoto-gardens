import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/specColor';

const Span = styled.span`
  ${props => props.nowrap && 'white-space: nowrap;'}
  ${props =>
    props.smallcaps && `font-family: 'Cormorant SC', Times New Roman, serif;`}
  ${props => props.source && `color: ${color.source}`}
`;

Span.propTypes = {
  nowrap: PropTypes.bool,
  smallcaps: PropTypes.bool,
  source: PropTypes.bool,
};
export default Span;
