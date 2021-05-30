import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';

import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';

import {colour} from 'src/utils/colorScheme';
import {font} from 'src/utils/fontScheme';

const Span = styled.span`
  ${props => props.nowrap && ''}
`;

Span.NoWrap = styled.span`
  white-space: nowrap;
`;

Span.Source = styled.span`
  white-space: nowrap;
  ${Main.Kohoan} & {
    color: ${colour.kohoan.source.color};
  }
  ${Main.Ryoanji} & {
    color: ${colour.ryoanji.source.color};
  }
`;

Span.LeadIn = styled.span`
  ${Main.Ryoanji} & {
    font-family: ${font.ryoanji.spanLeadIn.family};
    letter-spacing: ${font.ryoanji.spanLeadIn.letterSpacing};
    word-spacing: ${font.ryoanji.spanLeadIn.wordSpacing};
  }
  ${Main.Kohoan} & {
    font-family: ${font.kohoan.spanLeadIn.family};
    letter-spacing: ${font.kohoan.spanLeadIn.letterSpacing};
    word-spacing: ${font.kohoan.spanLeadIn.wordSpacing};
  }
`;

Span.propTypes = {
  nowrap: PropTypes.bool,
  source: PropTypes.bool,
};
export default Span;
