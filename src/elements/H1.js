import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, setSpace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import round from 'src/utils/round';
import {ryoanji} from 'src/utils/specRyoanji';
import {horizontalSpacing} from 'src/utils/horizontalSpacing';
import MainRyoanji from 'src/blocks/MainRyoanji';

const fontStyle = {
  ryoanji: css`
    font-family: ${ryoanji.h1.fontFamily};
    font-size: ${remify(ryoanji.h1.fontSize.mobile)};
    font-weight: ${ryoanji.h1.fontWeight};
    letter-spacing: ${ryoanji.h1.letterSpacig};
    line-height: ${ryoanji.h1.lineHeight};
    @media only screen and ${ryoanji.breakpoint.h1} {
      font-size: ${remify(ryoanji.h1.fontSize.tablet)};
    }
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(ryoanji.h1.fontSize.desktop)};
    }
  `,
};
// Space between J and I: 28px for desktop
// Space between words: 60px for desktop
// 28px * (5/3) = 46.666px
// Word spacing reduced by 13.333px
// Font-size 103.208px
// Word spacing reduced by 0.129em

const H1 = styled.h1`
  ${MainRyoanji} & {
    ${fontStyle.ryoanji}
    ${horizontalSpacing.text['ryoanji'].inner}
  }
  display: flex;
  flex-direction: column;
`;

H1.Ryoanji = styled.span`
  padding-bottom: ${remify(ryoanji.h1.padding.between.mobile)};
  text-indent: ${remify(
    ryoanji.h1.textIndent.mobile,
  )}; /* Optical alignment with paragraphs */
  @media only screen and ${ryoanji.breakpoint.h1} {
    text-indent: ${remify(ryoanji.h1.textIndent.tablet)};
  }
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(ryoanji.h1.padding.between.desktop)};
    text-indent: ${remify(
      ryoanji.h1.textIndent.desktop,
    )}; /* Optical alignment with paragraphs */
  }
`;

H1.RockGarden = styled.span`
  font-size: ${round(ryoanji.h1.fontSize.rockGarden, 4)}em;
  padding-bottom: ${remify(ryoanji.h1.padding.bottom.mobile)};
  word-spacing: ${ryoanji.h1.wordSpacing.rockGarden};
  @media only screen and ${ryoanji.breakpoint.h1} {
    text-indent: ${remify(ryoanji.h1.textIndent.rockGarden.tablet)};
  }
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(ryoanji.h1.padding.bottom.desktop)};
    text-indent: ${remify(
      ryoanji.h1.textIndent.rockGarden.desktop,
    )}; /* Optical alignment with paragraphs */
  }
`;

H1.Wrapper = styled.div`
  ${MainRyoanji} & {
    ${horizontalSpacing.text['ryoanji'].outer}
    background-color: ${ryoanji.h1.backgroundColor.mobile};
    background-image: ${ryoanji.h1.backgroundImage.mobile};
    color: ${ryoanji.h1.color.mobile};
    padding-top: ${remify(ryoanji.h1.padding.top.mobile)};
    width: 100%;
    @media only screen and ${ryoanji.breakpoint.sideMargin} {
      background-color: ${ryoanji.h1.backgroundColor.desktop};
      background-image: ${ryoanji.h1.backgroundImage.desktop};
      bottom: 0;
      color: ${ryoanji.h1.color.desktop};
      left: 0;
      padding-top: ${remify(ryoanji.h1.padding.top.desktop)};
      position: absolute;
      z-index: 1;
    }
  }
`;

H1.propTypes = {};

export default H1;
