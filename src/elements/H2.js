import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/hspaceScheme';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';
import {hspace} from 'src/utils/hspaceScheme';

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
    ${hspace.kohoan.maxWidth.heading}
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
    ${hspace.ryoanji.maxWidth.heading}
  }
`;

H2Style.Wrapper = styled.div`
  ${Main.Kohoan} & {
    background-color: ${colour.kohoan.h2.background};
    background-image: ${colour.kohoan.h2.overlay};
    ${hspace.kohoan.paddingSide.mobile}
    ${hspace.kohoan.paddingSide.tablet}
    ${hspace.kohoan.paddingSide.desktop}
  }
  ${Main.Ryoanji} & {
    background-color: ${colour.ryoanji.h2.background};
    background-image: ${colour.ryoanji.h2.overlay};
    ${hspace.ryoanji.paddingSide.mobile}
    ${hspace.ryoanji.paddingSide.tablet}
    ${hspace.ryoanji.paddingSide.desktop}
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
