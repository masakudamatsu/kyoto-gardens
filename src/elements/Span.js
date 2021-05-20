import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';

import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';

const Span = styled.span`
  ${props => props.nowrap && ''}
`;

Span.NoWrap = styled.span`
  white-space: nowrap;
`;

Span.Source = styled.span`
  white-space: nowrap;
  ${Main.Kohoan} & {
    color: ${kohoan.source.color};
  }
  ${Main.Ryoanji} & {
    color: ${ryoanji.source.color};
  }
`;

Span.LeadIn = styled.span`
  ${Main.Ryoanji} & {
    font-family: ${ryoanji.leadIn.fontFamily};
    letter-spacing: ${ryoanji.leadIn.letterSpacing};
    word-spacing: ${ryoanji.leadIn.wordSpacing};
  }
`;

Span.propTypes = {
  nowrap: PropTypes.bool,
  source: PropTypes.bool,
};
export default Span;
