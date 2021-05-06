import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, lineLength, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import round from 'src/utils/round';
import {ryoanji} from 'src/utils/specRyoanji';

const fontStyle = {
  ryoanji: css`
    font-family: ${ryoanji.h1.fontFamily};
    font-size: ${remify(ryoanji.h1.fontSize.mobile)};
    font-weight: ${ryoanji.h1.fontWeight};
    letter-spacing: ${ryoanji.h1.letterSpacig};
    line-height: ${ryoanji.h1.lineHeight};
    @media only screen and ${breakpoint.floorPlanWidth} {
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
  ${({page}) => fontStyle[page]}
  display: flex;
  flex-direction: column;
  @media only screen and ${breakpoint.floorPlanWidth} {
    margin: 0 auto;
    width: ${remify(lineLength.max.mobile)};
  }
  @media only screen and ${breakpoint.fontSize} {
    margin: 0;
    width: auto;
  }
  @media only screen and ${breakpoint.floorPlanWidthDesktop} {
    margin: 0 auto;
    width: ${remify(lineLength.max.desktop)};
  }
`;

H1.Ryoanji = styled.span`
  padding-bottom: ${remify(ryoanji.h1.padding.between.mobile)};
  text-indent: ${remify(
    ryoanji.h1.textIndent.mobile,
  )}; /* Optical alignment with paragraphs */
  @media only screen and ${breakpoint.floorPlanWidth} {
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
  @media only screen and ${breakpoint.floorPlanWidth} {
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
  background-color: ${ryoanji.h1.backgroundColor.mobile};
  background-image: linear-gradient(
    35deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.5) 55%,
    hsla(0, 0%, 100%, 0.5) 65%,
    hsla(0, 0%, 100%, 0)
  );
  color: ${ryoanji.h1.color.mobile};
  padding-left: ${remify(whitespace().sideMargin)};
  padding-right: ${remify(whitespace().sideMargin)};
  padding-top: ${remify(ryoanji.h1.padding.top.mobile)};
  width: 100%;
  @media only screen and ${breakpoint.sideMargin} {
    background-color: ${ryoanji.h1.backgroundColor.desktop};
    background-image: none;
    bottom: 0;
    color: ${ryoanji.h1.color.desktop};
    left: 0;
    padding-left: ${remify(whitespace().sideMarginLarge)};
    padding-right: ${remify(whitespace().sideMarginLarge)};
    padding-top: ${remify(ryoanji.h1.padding.top.desktop)};
    position: absolute;
    z-index: 1;
  }
  @media only screen and ${breakpoint.fontSize} {
    padding-left: ${remify(whitespace('desktop').sideMarginLarge)};
    padding-right: ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

H1.propTypes = {
  page: PropTypes.string,
};

export default H1;
