import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import {index} from 'src/utils/specIndex';
import remify from 'src/utils/remify';
import {breakpoint, setSpace, setHorizontalSpace} from 'src/utils/designSpec';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';

import SiteTitle from 'src/components/SiteTitle';

const FooterStyled = styled.footer`
  background-color: ${colour.index.footer.background};
  margin: 0 auto;
  padding-top: ${index.article.paddingTop};
  ${getPaddingBottom(index)}
`;

const DropCap = styled(SiteTitle)`
  fill: ${colour.index.footer.color};
  float: left;
  transform: translate(-8px, 15px);
  width: 160px;
  @media only screen and ${index.breakpoint.sideMargin} {
    width: 253px;
    transform: translate(-10px, 0px);
  }
  @media only screen and ${breakpoint.fontSize} {
    width: 364px;
    transform: translate(-10px, 0px);
  }
`;

const ParagraphStyled = styled.p`
  /* font */
  color: ${colour.index.footer.color};
  font-family: ${font.index.footer.family};
  font-size: ${remify(
    makeXHeightToBe(
      font.index.footer.xHeight.mobile,
      font.index.footer.metrics,
    ),
  )};
  font-weight: ${font.index.footer.weight};
  line-height: ${makeLineHeightRatioToBe(
    font.index.footer.lineHeightRatio.mobile,
    font.index.footer.metrics,
  )};
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(
      makeXHeightToBe(
        font.index.footer.xHeight.desktop,
        font.index.footer.metrics,
      ),
    )};
    line-height: ${makeLineHeightRatioToBe(
      font.index.footer.lineHeightRatio.desktop,
      font.index.footer.metrics,
    )};
  }
  ${setHorizontalSpace('text', index).innerMerged}
  ${setHorizontalSpace('text', index).outer}
  text-align: ${({centerAligned}) => (centerAligned ? 'center' : 'left')};
  & + & {
    padding-top: ${remify(
      setSpace('mobile', index.article.lineHeightRatio.mobile)
        .betweenParagraphs - index.article.descender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-top: ${remify(
        setSpace('desktop', index.article.lineHeightRatio.desktop)
          .betweenParagraphs - index.article.descender.desktop,
      )};
    }
  }
`;

const Small = styled.small`
  font-size: ${font.index.footerSmall.size};
`;

const Footer = () => {
  return (
    <FooterStyled>
      <ParagraphStyled>
        <DropCap /> presents alternative takes on historical gardens in Japan,
        attempting to uncover the intentions of their design. It is a one-person
        project: articles are written, photographs taken (unless otherwise
        indicated), and web pages designed and coded, by Masa Kudamatsu, a
        native Japanese speaker who loves living in Kyoto for its amazing
        gardens.
      </ParagraphStyled>
      <ParagraphStyled centerAligned>
        <Small>&copy; 2021 Masayuki Kudamatsu. All rights reserved.</Small>
      </ParagraphStyled>
    </FooterStyled>
  );
};

Footer.propTypes = {};

export default Footer;

function getPaddingBottom(spec) {
  return css`
    padding-bottom: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile).betweenSections -
        spec.article.descender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop)
          .betweenSections - spec.article.descender.desktop,
      )};
    }
  `;
}
