import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/blocks/Main';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';

const Kanji = styled.span.attrs(props => ({
  lang: 'ja',
}))`
  ${Main.Kohoan} & {
    font-family: ${kohoan.kanji.fontFamily};
    font-size: ${kohoan.kanji.fontSize};
    font-weight: ${kohoan.kanji.fontWeight};
    line-height: ${kohoan.kanji.lineHeight};
  }
  ${Main.Ryoanji} & {
    font-family: ${ryoanji.kanji.fontFamily};
    font-size: ${ryoanji.kanji.fontSize};
    font-weight: ${ryoanji.kanji.fontWeight};
  }
`;

Kanji.propTypes = {};
export default Kanji;
