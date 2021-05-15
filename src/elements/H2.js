import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import {setHorizontalSpace} from 'src/utils/designSpec';
import Main from 'src/blocks/Main';

function fontStyle(spec) {
  return css`
    color: ${spec.h2.color};
    font-family: ${spec.h2.fontFamily};
    font-size: ${remify(spec.h2.fontSize.mobile)};
    font-weight: ${spec.h2.fontWeight};
    letter-spacing: ${spec.h2.letterSpacing};
    line-height: ${spec.h2.lineHeight};
    padding-bottom: ${remify(spec.h2.padding.bottom.mobile)};
    padding-top: ${remify(spec.h2.padding.top.mobile)};
    text-indent: ${remify(
      spec.h2.textIndent,
    )}; /* Optical alignment with paragraphs */
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(spec.h2.fontSize.desktop)};
      padding-bottom: ${remify(spec.h2.padding.bottom.desktop)};
      padding-top: ${remify(spec.h2.padding.top.desktop)};
    }
  `;
}

function backgroundStyle(spec) {
  return css`
    background-color: ${spec.h2.backgroundColor};
    background-image: ${spec.h2.backgroundImage};
  `;
}

const defaultStyle = css`
  ${Main.Kohoan} & {
    ${fontStyle(kohoan)}
    ${setHorizontalSpace('text', kohoan).inner}
  }
  ${Main.Ryoanji} & {
    ${fontStyle(ryoanji)}
    ${setHorizontalSpace('text', ryoanji).inner}
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

/* Styled Components */

const H2Style = styled.h2`
  ${props => (props.visuallyHidden ? visuallyHidden : defaultStyle)}
`;

H2Style.Wrapper = styled.div`
  ${Main.Kohoan} & {
    ${backgroundStyle(kohoan)}
    ${setHorizontalSpace('text', kohoan).outer}
  }
  ${Main.Ryoanji} & {
    ${backgroundStyle(ryoanji)}
    ${setHorizontalSpace('text', ryoanji).outer}
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
  visuallyHidden: PropTypes.bool,
};
export default H2;
