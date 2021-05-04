import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, paragraph} from 'src/utils/designSpec';
import {color} from 'src/utils/specColor';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import {maxPhotoWidth} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const fontStyle = {
  kohoan: css``,
  ryoanji: css`
    font-family: ${paragraph.mobile.fontFamily};
    font-size: ${remify(getFontSize(paragraph.mobile))};
    font-weight: ${paragraph.mobile.fontWeight};
    line-height: ${getLineHeight(paragraph.mobile)};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(getFontSize(paragraph.desktop))};
      line-height: ${getLineHeight(paragraph.desktop)};
    }
  `,
};

const Article = styled.article`
  ${props => props.ryoanji && fontStyle.ryoanji}
  ${props => props.kohoan && fontStyle.kohoan}
  background-color: ${color.article.background};
  margin: 0 auto;
  max-width: ${maxPhotoWidth}px;
`;

Article.Header = styled.header`
  position: relative;
`;

Article.propTypes = {
  ryoanji: PropTypes.bool,
};

export default Article;
