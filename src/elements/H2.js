import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, lineLength, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';

const fontStyle = {
  ryoanji: css`
    color: ${ryoanji.h2.color};
    font-family: ${ryoanji.h2.fontFamily};
    font-size: ${remify(ryoanji.h2.fontSize.mobile)};
    font-weight: ${ryoanji.h2.fontWeight};
    letter-spacing: ${ryoanji.h2.letterSpacing};
    line-height: ${ryoanji.h2.lineHeight};
    padding-bottom: ${remify(ryoanji.h2.padding.bottom.mobile)};
    padding-top: ${remify(ryoanji.h2.padding.top.mobile)};
    text-indent: ${remify(
      ryoanji.h2.textIndent,
    )}; /* Optical alignment with paragraphs */
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(ryoanji.h2.fontSize.desktop)};
      padding-bottom: ${remify(ryoanji.h2.padding.bottom.desktop)};
      padding-top: ${remify(ryoanji.h2.padding.top.desktop)};
    }
  `,
};

const defaultStyle = css`
  ${props => props.page === 'ryoanji' && fontStyle.ryoanji}
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
  ${props =>
    props.page === 'ryoanji' &&
    `
    background-color: ${ryoanji.h2.backgroundColor};
    background-image: linear-gradient(
      35deg,
      hsla(0, 0%, 100%, 0) 0,
      hsla(0, 0%, 100%, 0.5) 55%,
      hsla(0, 0%, 100%, 0.5) 65%,
      hsla(0, 0%, 100%, 0)
    );
  `}
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
  page: PropTypes.string,
  visuallyHidden: PropTypes.bool,
};
export default H2;
