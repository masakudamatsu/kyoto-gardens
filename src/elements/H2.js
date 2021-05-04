import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {
  breakpoint,
  lineLength,
  ryoanji,
  whitespace,
} from 'src/utils/designSpec';
import {color} from 'src/utils/specColor';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const defaultSpace = {
  mobile: {
    ascender: 6.5,
    descender: 7,
    left: 2,
  },
  desktop: {
    ascender: 8.5,
    descender: 9,
    left: 2,
  },
};

const fontStyle = {
  ryoanji: css`
    font-family: ${ryoanji.h2.mobile.fontFamily};
    font-size: ${remify(getFontSize(ryoanji.h2.mobile))};
    font-weight: ${ryoanji.h2.mobile.fontWeight};
    line-height: ${getLineHeight(ryoanji.h2.mobile)};
    text-indent: -${remify(defaultSpace.mobile.left)}; /* Optical alignment with paragraphs */
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(getFontSize(ryoanji.h2.desktop))};
    }
  `,
};

const defaultStyle = css`
  ${props => props.ryoanji && fontStyle.ryoanji}
  color: #eee;
  padding-bottom: ${remify(
    ryoanji.h2.mobile.padding - defaultSpace.mobile.descender,
  )};
  padding-top: ${remify(
    ryoanji.h2.mobile.padding - defaultSpace.mobile.ascender,
  )};
  @media only screen and ${breakpoint.floorPlanWidth} {
    margin: 0 auto;
    width: ${remify(lineLength.max.mobile)};
  }
  @media only screen and ${breakpoint.fontSize} {
    margin: 0;
    padding-bottom: ${remify(
      ryoanji.h2.desktop.padding - defaultSpace.desktop.descender,
    )};
    padding-top: ${remify(
      ryoanji.h2.desktop.padding - defaultSpace.desktop.ascender,
    )};
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

const H2Style = styled.h2`
  ${props => (props.visuallyHidden ? visuallyHidden : defaultStyle)}
`;

H2Style.Wrapper = styled.div`
  background-color: ${color.sectionTitle};
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

const H2 = props => {
  return props.visuallyHidden ? (
    <H2Style visuallyHidden>{props.children}</H2Style>
  ) : (
    <H2Style.Wrapper {...props}>
      <H2Style {...props}>{props.children}</H2Style>
    </H2Style.Wrapper>
  );
};

H2.propTypes = {
  ryoanji: PropTypes.bool,
  visuallyHidden: PropTypes.bool,
};
export default H2;
