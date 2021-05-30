import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/blocks/Main';

import {font} from 'src/utils/fontScheme';

const Kanji = styled.span.attrs(props => ({
  lang: 'ja',
}))`
  ${Main.Kohoan} & {
    font-family: ${font.kohoan.kanji.family};
    font-size: ${font.kohoan.kanji.size};
    font-weight: ${font.kohoan.kanji.weight};
    line-height: ${font.kohoan.kanji.lineHeight};
  }
  ${Main.Ryoanji} & {
    font-family: ${font.ryoanji.kanji.family};
    font-size: ${font.ryoanji.kanji.size};
    font-weight: ${font.ryoanji.kanji.weight};
  }
`;

Kanji.propTypes = {};
export default Kanji;
