import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/hspaceScheme';
import remify from 'src/utils/remify';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';
import {hspace} from 'src/utils/hspaceScheme';

function h3FontStyle(spec) {
  return css`
    font-family: ${spec.h3.family};
    font-size: ${remify(
      makeXHeightToBe(spec.h3.xHeight.mobile, spec.h3.metrics),
    )};
    font-weight: ${spec.h3.weight};
    letter-spacing: ${spec.h3.letterSpacing};
    line-height: ${makeLineHeightRatioToBe(
      spec.h3.lineHeightRatio.mobile,
      spec.h3.metrics,
    )};
    text-transform: ${spec.h3.textTransform};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(
        makeXHeightToBe(spec.h3.xHeight.desktop, spec.h3.metrics),
      )};
    }
  `;
}

const H3 = styled.h3`
  ${Main.Kohoan} & {
    color: ${colour.kohoan.h3.color};
    ${h3FontStyle(font.kohoan)}
    ${hspace.kohoan.maxWidth.body}
    ${hspace.kohoan.paddingSide.mobile}
    ${hspace.kohoan.paddingSide.tablet}
    ${hspace.kohoan.paddingSide.desktop}
  }
  ${Main.Ryoanji} & {
    color: ${colour.ryoanji.h3.color};
    ${h3FontStyle(font.ryoanji)}
    ${hspace.ryoanji.maxWidth.body}
    ${hspace.ryoanji.paddingSide.mobile}
    ${hspace.ryoanji.paddingSide.tablet}
    ${hspace.ryoanji.paddingSide.desktop}
  }
`;

H3.propTypes = {};
export default H3;
