import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/specColor';
import {ryoanji} from 'src/utils/designSpec';

const Span = styled.span`
  ${props => props.nowrap && 'white-space: nowrap;'}
  ${props =>
    props.smallcaps &&
    props.ryoanji &&
    `
      font-family: ${ryoanji.smallcaps.fontFamily};
      letter-spacing: ${ryoanji.smallcaps.letterSpacing};
    `}
  ${props => props.source && `color: ${color.source}`}
`;

Span.propTypes = {
  nowrap: PropTypes.bool,
  ryoanji: PropTypes.bool,
  smallcaps: PropTypes.bool,
  source: PropTypes.bool,
};
export default Span;
