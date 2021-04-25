import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, h2, lineLength, whitespace} from 'src/utils/designSpec';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const defaultSpace = {
  mobile: {
    ascender: 6,
    descender: 7,
    left: 2,
  },
};

const defaultStyle = css`
  color: #eee;
  font-family: ${h2.mobile.fontFamily};
  font-size: ${remify(getFontSize(h2.mobile))};
  font-weight: ${h2.mobile.fontWeight};
  line-height: ${getLineHeight(h2.mobile)};
  padding-bottom: ${remify(h2.mobile.padding - defaultSpace.mobile.descender)};
  padding-top: ${remify(h2.mobile.padding - defaultSpace.mobile.ascender)};
  text-indent: -${remify(defaultSpace.mobile.left)}; /* Optical alignment with paragraphs */
  @media only screen and ${breakpoint.floorPlanWidth} {
    margin: 0 auto;
    width: ${remify(lineLength.max.mobile)};
  }
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(getFontSize(h2.desktop))};
    margin: 0;
    width: auto;
  }
  @media only screen and ${breakpoint.floorPlanWidthDesktop} {
    margin: 0 auto;
    width: ${remify(lineLength.max.desktop)};
  }
`;

const visuallyHidden = css`
  /* Hide an element but show it for the screen reader. See my article on this technique: https://masakudamatsu.medium.com/the-visually-hidden-technique-303f8e2bd409 */
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const H2 = styled.h2`
  ${props => (props.hidden ? visuallyHidden : defaultStyle)}
`;

H2.Wrapper = styled.div`
  background-color: hsla(193, 50%, 26%, 0.9);
  background-image: linear-gradient(
    35deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.5) 55%,
    hsla(0, 0%, 100%, 0.5) 65%,
    hsla(0, 0%, 100%, 0)
  );
  padding-left: ${remify(whitespace().sideMargin)};
  padding-right: ${remify(whitespace().sideMargin)};
  @media only screen and ${breakpoint.sideMargin} {
    padding-left: ${remify(whitespace().sideMarginLarge)};
    padding-right: ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.fontSize} {
    padding-left: ${remify(whitespace('desktop').sideMarginLarge)};
    padding-right: ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

H2.propTypes = {
  hidden: PropTypes.bool,
};
export default H2;
