import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import {setHorizontalSpace} from 'src/utils/designSpec';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';

function h2FontStyle(spec) {
  return css`
    font-family: ${spec.h2.family};
    font-size: ${remify(
      makeXHeightToBe(spec.h2.xHeight.mobile, spec.h2.metrics),
    )};
    font-weight: ${spec.h2.weight};
    letter-spacing: ${spec.h2.letterSpacing};
    line-height: ${makeLineHeightRatioToBe(
      spec.h2.lineHeightRatio.mobile,
      spec.h2.metrics,
    )};
    text-indent: ${remify(
      spec.h2.textIndent,
    )}; /* Optical alignment with paragraphs */
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(
        makeXHeightToBe(spec.h2.xHeight.desktop, spec.h2.metrics),
      )};
    }
  `;
}

/* Styled Components */
const H2Style = styled.h2`
  ${Main.Kohoan} & {
    color: ${colour.kohoan.h2.color};
    ${h2FontStyle(font.kohoan)}
    padding-bottom: ${remify(kohoan.h2.padding.bottom.mobile)};
    padding-top: ${remify(kohoan.h2.padding.top.mobile)};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(kohoan.h2.padding.bottom.desktop)};
      padding-top: ${remify(kohoan.h2.padding.top.desktop)};
    }
    ${setHorizontalSpace('text', kohoan).inner}
  }
  ${Main.Ryoanji} & {
    color: ${colour.ryoanji.h2.color};
    ${h2FontStyle(font.ryoanji)}
    padding-bottom: ${remify(ryoanji.h2.padding.bottom.mobile)};
    padding-top: ${remify(ryoanji.h2.padding.top.mobile)};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(ryoanji.h2.padding.bottom.desktop)};
      padding-top: ${remify(ryoanji.h2.padding.top.desktop)};
    }
    ${setHorizontalSpace('text', ryoanji).inner}
  }
`;

H2Style.Wrapper = styled.div`
  ${Main.Kohoan} & {
    background-color: ${colour.kohoan.h2.background};
    background-image: ${colour.kohoan.h2.overlay};
    ${setHorizontalSpace('text', kohoan).outer}
  }
  ${Main.Ryoanji} & {
    background-color: ${colour.ryoanji.h2.background};
    background-image: ${colour.ryoanji.h2.overlay};
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
