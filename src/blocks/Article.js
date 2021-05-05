import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, kohoan} from 'src/utils/designSpec';
import {cssLinkText} from 'src/utils/cssLinkText';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import {maxPhotoWidth} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';

import CiteItalic from 'src/elements/CiteItalic';
import Strong from 'src/elements/Strong';

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
    background-color: ${ryoanji.article.backgroundColor};
    color: ${ryoanji.article.color};
    font-family: ${ryoanji.article.fontFamily};
    font-size: ${remify(ryoanji.article.fontSize.mobile)};
    font-weight: ${ryoanji.article.fontWeight};
    line-height: ${ryoanji.article.lineHeight.mobile};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(ryoanji.article.fontSize.desktop)};
      line-height: ${ryoanji.article.lineHeight.desktop};
    }
    & a {
      ${cssLinkText({
        backgroundColor: ryoanji.article.backgroundColor,
        backgroundColorOnHover: ryoanji.link.backgroundOnHover,
        linkTextColor: ryoanji.link.color,
        baselinePosition: ryoanji.article.baselinePosition.mobile,
        lineWidth: ryoanji.link.lineWidth,
        spaceBelowBaseline: ryoanji.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: ryoanji.article.backgroundColor,
          backgroundColorOnHover: ryoanji.link.backgroundOnHover,
          linkTextColor: ryoanji.link.color,
          baselinePosition: ryoanji.article.baselinePosition.desktop,
          lineWidth: ryoanji.link.lineWidth,
          spaceBelowBaseline: ryoanji.link.spaceBelowBaseline.desktop,
        })}
      }
    }
    & ${CiteItalic} {
      font-style: italic;
      font-weight: ${ryoanji.italic.fontWeight};
    }
    & ${Strong} {
      font-style: italic;
      font-weight: ${ryoanji.italic.fontWeight};
    }
  `,
};

const Article = styled.article`
  ${props => props.ryoanji && fontStyle.ryoanji}
  ${props => props.kohoan && fontStyle.kohoan}
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
