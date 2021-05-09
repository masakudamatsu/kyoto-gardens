import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, kohoan} from 'src/utils/designSpec';
import {cssLinkText} from 'src/utils/cssLinkText';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';
import Abbr from 'src/elements/Abbr';
import CiteItalic from 'src/elements/CiteItalic';
import LeadIn from 'src/elements/LeadIn';
import {Main} from 'src/blocks/Main';

import SectionBreak from 'src/elements/SectionBreak';
import Source from 'src/elements/Source';
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
};

const Article = styled.article`
  margin: 0 auto;
  ${Main.Ryoanji} & {
    background-color: ${ryoanji.article.backgroundColor};
    color: ${ryoanji.article.color};
    font-family: ${ryoanji.article.fontFamily};
    font-size: ${remify(ryoanji.article.fontSize.mobile)};
    font-weight: ${ryoanji.article.fontWeight};
    line-height: ${ryoanji.article.lineHeight.mobile};
    max-width: ${ryoanji.figure.maxWidth}px;
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
    & ${Abbr} {
      font-family: ${ryoanji.abbr.fontFamily};
      letter-spacing: ${ryoanji.abbr.letterSpacing};
      text-transform: ${ryoanji.abbr.textTransform};
    }
    & ${CiteItalic} {
      font-style: italic;
      font-weight: ${ryoanji.italic.fontWeight};
    }
    & ${LeadIn} {
      font-family: ${ryoanji.leadIn.fontFamily};
      letter-spacing: ${ryoanji.leadIn.letterSpacing};
      word-spacing: ${ryoanji.leadIn.wordSpacing};
    }
    & ${SectionBreak} {
      color: ${ryoanji.sectionBreak.color};
    }
    & ${Source} {
      color: ${ryoanji.source.color};
    }
    & ${Strong} {
      font-style: italic;
      font-weight: ${ryoanji.italic.fontWeight};
    }
  }
`;

Article.Header = styled.header`
  position: relative;
`;

Article.propTypes = {};

export default Article;
