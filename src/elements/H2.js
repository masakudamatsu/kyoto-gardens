import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, lineLength} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';
import {horizontalSpacing} from 'src/utils/horizontalSpacing';

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

const backgroundStyle = {
  ryoanji: css`
    background-color: ${ryoanji.h2.backgroundColor};
    background-image: ${ryoanji.h2.backgroundImage};
  `,
};

const defaultStyle = css`
  ${({page}) => fontStyle[page]}
  ${({page}) => horizontalSpacing.text[page].inner}
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
  ${({page}) => backgroundStyle[page]}
  ${({page}) => horizontalSpacing.text[page].outer}
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
