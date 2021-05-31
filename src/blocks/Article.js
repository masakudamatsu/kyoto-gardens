import styled from 'styled-components';
import PropTypes from 'prop-types';

import {cssLinkText} from 'src/utils/cssLinkText';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {breakpoint} from 'src/utils/hspaceScheme';
import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

const Article = styled.article`
  margin: 0 auto;
  ${Main.Kohoan} & {
    background-image: ${colour.kohoan.article.background};
    color: ${colour.kohoan.article.color};
    font-family: ${font.kohoan.article.family};
    font-size: ${remify(
      makeXHeightToBe(
        font.kohoan.article.xHeight.mobile,
        font.kohoan.article.metrics,
      ),
    )};
    font-weight: ${font.kohoan.article.weight};
    line-height: ${makeLineHeightRatioToBe(
      font.kohoan.article.lineHeightRatio.mobile,
      font.kohoan.article.metrics,
    )};
    max-width: ${kohoan.figure.maxWidth}px; // TODO: to be replaced
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(
        makeXHeightToBe(
          font.kohoan.article.xHeight.desktop,
          font.kohoan.article.metrics,
        ),
      )};
      line-height: ${makeLineHeightRatioToBe(
        font.kohoan.article.lineHeightRatio.desktop,
        font.kohoan.article.metrics,
      )};
    }
  }
  & a {
    ${cssLinkText({
      backgroundColor: 'trasparent', // disable text-shadow
      backgroundColorOnHover: colour.kohoan.link.onHoverBackground,
      linkTextColor: colour.kohoan.link.color,
      underlineColor: colour.kohoan.link.underline,
      baselinePosition: font.kohoan.article.link.baselinePosition.mobile,
      underlineWidth: font.kohoan.article.link.underlineWidth,
      spaceBelowBaseline: font.kohoan.article.link.spaceBelowBaseline.mobile,
    })}
    @media only screen and ${breakpoint.fontSize} {
      ${cssLinkText({
        backgroundColor: 'transparent', // disable text-shadow
        backgroundColorOnHover: colour.kohoan.link.onHoverBackground,
        linkTextColor: colour.kohoan.link.color,
        baselinePosition: font.kohoan.article.link.baselinePosition.desktop,
        underlineWidth: font.kohoan.article.link.underlineWidth,
        spaceBelowBaseline: font.kohoan.article.link.spaceBelowBaseline.desktop,
      })}
    }
  }
  ${Main.Ryoanji} & {
    background-color: ${colour.ryoanji.article.background};
    color: ${colour.ryoanji.article.color};
    font-family: ${font.ryoanji.article.family};
    font-size: ${remify(
      makeXHeightToBe(
        font.ryoanji.article.xHeight.mobile,
        font.ryoanji.article.metrics,
      ),
    )};
    font-weight: ${font.ryoanji.article.weight};
    line-height: ${makeLineHeightRatioToBe(
      font.ryoanji.article.lineHeightRatio.mobile,
      font.ryoanji.article.metrics,
    )};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(
        makeXHeightToBe(
          font.ryoanji.article.xHeight.desktop,
          font.ryoanji.article.metrics,
        ),
      )};
      line-height: ${makeLineHeightRatioToBe(
        font.ryoanji.article.lineHeightRatio.desktop,
        font.ryoanji.article.metrics,
      )};
    }
    max-width: ${ryoanji.figure.maxWidth}px;
    & a {
      ${cssLinkText({
        backgroundColor: colour.ryoanji.article.background,
        backgroundColorOnHover: colour.ryoanji.link.onHoverBackground,
        linkTextColor: colour.ryoanji.link.color,
        baselinePosition: font.ryoanji.article.link.baselinePosition.mobile,
        underlineWidth: font.ryoanji.article.link.underlineWidth,
        spaceBelowBaseline: font.ryoanji.article.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: colour.ryoanji.article.background,
          backgroundColorOnHover: colour.ryoanji.link.onHoverBackground,
          linkTextColor: colour.ryoanji.link.color,
          baselinePosition: font.ryoanji.article.link.baselinePosition.desktop,
          underlineWidth: font.ryoanji.article.link.underlineWidth,
          spaceBelowBaseline:
            font.ryoanji.article.link.spaceBelowBaseline.desktop,
        })}
      }
    }
  }
`;

Article.Header = styled.header`
  position: relative;
  ${Main.Kohoan} & {
    padding-bottom: ${remify(
      vspace['kohoan'].betweenSections.mobile -
        (spaceToTrim['kohoan'].h1.bottom.mobile +
          spaceToTrim['kohoan'].article.top.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(
        vspace['kohoan'].betweenSections.desktop -
          (spaceToTrim['kohoan'].h1.bottom.desktop +
            spaceToTrim['kohoan'].article.top.desktop),
      )};
    }
  }
`;

Article.propTypes = {};

export default Article;
