import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import remify from 'src/utils/remify';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';
import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';
import {breakpoint, hspace} from 'src/utils/hspaceScheme';

import SiteTitle from 'src/components/SiteTitle';

const FooterStyled = styled.footer`
  background-color: ${colour.footer.background};
  margin: 0 auto;
  padding-bottom: ${remify(getPaddingBottom('mobile'))};
  padding-top: ${remify(getPaddingTop('mobile'))};
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(getPaddingBottom('desktop'))};
    padding-top: ${remify(getPaddingTop('desktop'))};
  }
`;

const DropCap = styled(SiteTitle)`
  fill: ${colour.footer.color};
  float: left;
  transform: translate(-8px, 15px);
  width: 160px;
  @media only screen and ${breakpoint.sideMargin('footer')} {
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
  color: ${colour.footer.color};
  font-family: ${font.footer.family};
  font-size: ${remify(
    makeXHeightToBe(font.footer.xHeight.mobile, font.footer.metrics),
  )};
  font-weight: ${font.footer.weight};
  line-height: ${makeLineHeightRatioToBe(
    font.footer.lineHeightRatio.mobile,
    font.footer.metrics,
  )};
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(
      makeXHeightToBe(font.footer.xHeight.desktop, font.footer.metrics),
    )};
    line-height: ${makeLineHeightRatioToBe(
      font.footer.lineHeightRatio.desktop,
      font.footer.metrics,
    )};
  }
  ${hspace.footer.maxWidth.body}
  ${hspace.footer.paddingSide.mobile}
  ${hspace.footer.paddingSide.tablet}
  ${hspace.footer.paddingSide.desktop}
text-align: ${({centerAligned}) => (centerAligned ? 'center' : 'left')};
`;

const Small = styled.small`
  font-size: ${font.footer.small.size};
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

function getPaddingBottom(screenWidth) {
  return (
    vspace.footer.betweenSections[screenWidth] -
    spaceToTrim.footer.bottom[screenWidth]
  );
}

function getPaddingTop(screenWidth) {
  return (
    vspace.footer.betweenLines[screenWidth] -
    spaceToTrim.footer.topToX[screenWidth]
  );
}
