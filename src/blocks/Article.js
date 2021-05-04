import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, kohoan, ryoanji} from 'src/utils/designSpec';
import {color} from 'src/utils/specColor';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import {maxPhotoWidth} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

const fontStyle = {
  kohoan: css`
    font-family: ${kohoan.paragraph.mobile.fontFamily};
    font-size: ${remify(getFontSize(kohoan.paragraph.mobile))};
    font-weight: ${kohoan.paragraph.mobile.fontWeight};
    line-height: ${getLineHeight(kohoan.paragraph.mobile)};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(getFontSize(kohoan.paragraph.desktop))};
      line-height: ${getLineHeight(kohoan.paragraph.desktop)};
    }
  `,
  ryoanji: css`
    font-family: ${ryoanji.paragraph.mobile.fontFamily};
    font-size: ${remify(getFontSize(ryoanji.paragraph.mobile))};
    font-weight: ${ryoanji.paragraph.mobile.fontWeight};
    line-height: ${getLineHeight(ryoanji.paragraph.mobile)};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(getFontSize(ryoanji.paragraph.desktop))};
      line-height: ${getLineHeight(ryoanji.paragraph.desktop)};
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
