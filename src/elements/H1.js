import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import {
  breakpoint,
  lineLength,
  paragraph,
  ryoanji,
  whitespace,
} from 'src/utils/designSpec';
import {color} from 'src/utils/specColor';
import remify from 'src/utils/remify';
import round from 'src/utils/round';
import Span from 'src/elements/Span';

const fontStyle = {
  ryoanji: css`
    font-family: ${ryoanji.h1.mobile.fontFamily};
    font-size: ${remify(getFontSize(ryoanji.h1.mobile))};
    font-weight: ${ryoanji.h1.mobile.fontWeight};
    line-height: ${getLineHeight(ryoanji.h1.mobile)};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(getFontSize(ryoanji.h1.desktop))};
    }
  `,
};

const defaultSpace = {
  mobile: {
    between: 3, // between Ryoan-ji and Rock Garden when vertically stacked
    bottom: 0, // below Rock Garden
    left: 3,
  },
  desktop: {
    between: 5,
    bottom: 1, // below Rock Garden
    left: 8, // left space of Ryoan-ji
    leftBottom: 2, // left space of Rock Garden
  },
};

// Space between J and I: 28px for desktop
// Space between words: 60px for desktop
// 28px * (5/3) = 46.666px
// Word spacing reduced by 13.333px
// Font-size 103.208px
// Word spacing reduced by 0.129em
const H1 = styled.h1`
  ${props => props.ryoanji && fontStyle.ryoanji}
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
  padding-bottom: ${remify(
    paragraph.mobile.xHeight - defaultSpace.mobile.between,
  )};
  text-indent: -${remify(defaultSpace.mobile.left)}; /* Optical alignment with paragraphs */
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(
      paragraph.desktop.xHeight - defaultSpace.desktop.between,
    )};
    text-indent: -${remify(defaultSpace.desktop.left)}; /* Optical alignment with paragraphs */
  }
`;

H1.RockGarden = styled.span`
  font-size: ${round(ryoanji.h1.shrinkText, 4)}em;
  padding-bottom: ${remify(paragraph.mobile.xHeight)};
  @media only screen and ${breakpoint.fontSize} {
    padding-bottom: ${remify(
      paragraph.desktop.xHeight - defaultSpace.desktop.bottom,
    )};
    text-indent: -${remify(defaultSpace.desktop.leftBottom)}; /* Optical alignment with paragraphs */
  }
`;

H1.Wrapper = styled.div`
  background-color: ${color.sectionTitle};
  background-image: linear-gradient(
    35deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.5) 55%,
    hsla(0, 0%, 100%, 0.5) 65%,
    hsla(0, 0%, 100%, 0)
  );
  color: #eee;
  padding-left: ${remify(whitespace().sideMargin)};
  padding-right: ${remify(whitespace().sideMargin)};
  padding-top: ${remify(paragraph.mobile.xHeight)};
  width: 100%;
  @media only screen and ${breakpoint.sideMargin} {
    background-color: transparent;
    background-image: none;
    bottom: 0;
    color: #000;
    left: 0;
    padding-left: ${remify(whitespace().sideMarginLarge)};
    padding-right: ${remify(whitespace().sideMarginLarge)};
    padding-top: 0;
    position: absolute;
    z-index: 1;
  }
  @media only screen and ${breakpoint.fontSize} {
    padding-left: ${remify(whitespace('desktop').sideMarginLarge)};
    padding-right: ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

H1.propTypes = {
  ryoanji: PropTypes.bool,
};

export default H1;
