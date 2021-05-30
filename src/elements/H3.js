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
    ${setHorizontalSpace('text', kohoan).innerMerged}
    ${setHorizontalSpace('text', kohoan).outer}
  }
  ${Main.Ryoanji} & {
    color: ${colour.ryoanji.h3.color};
    ${h3FontStyle(font.ryoanji)}
    ${setHorizontalSpace('text', ryoanji).innerMerged}
    ${setHorizontalSpace('text', ryoanji).outer}
  }
`;

H3.propTypes = {};
export default H3;
