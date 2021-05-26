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

/* Styled Components */
const H2Style = styled.h2`
  ${Main.Kohoan} & {
    ${fontStyle(kohoan)}
    ${setHorizontalSpace('text', kohoan).inner}
  }
  ${Main.Ryoanji} & {
    ${fontStyle(ryoanji)}
    ${setHorizontalSpace('text', ryoanji).inner}
  }
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
  return (
    <H2Style.Wrapper {...props}>
      <H2Style {...props}>{props.children}</H2Style>
    </H2Style.Wrapper>
  );
};

H2.propTypes = {};
export default H2;
