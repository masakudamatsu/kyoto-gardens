import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/specColor';
import {smallcaps} from 'src/utils/designSpec';

const Span = styled.span`
  ${props => props.nowrap && 'white-space: nowrap;'}
  ${props =>
    props.smallcaps &&
    `
      font-family: ${smallcaps.fontFamily};
      letter-spacing: ${smallcaps.letterSpacing};
    `}
  ${props => props.source && `color: ${color.source}`}
`;

Span.propTypes = {
  nowrap: PropTypes.bool,
  smallcaps: PropTypes.bool,
  source: PropTypes.bool,
};
export default Span;
