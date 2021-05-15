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
    color: ${spec.h3.color};
    font-family: ${spec.h3.fontFamily};
    font-size: ${remify(spec.h3.fontSize.mobile)};
    font-weight: ${spec.h3.fontWeight};
    letter-spacing: ${spec.h3.letterSpacing};
    line-height: ${spec.h3.lineHeight};
    text-transform: ${spec.h3.textTransform};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(spec.h3.fontSize.desktop)};
    }
  `;
}

const H3 = styled.h3`
  ${Main.Kohoan} & {
    ${fontStyle(kohoan)}
    ${setHorizontalSpace('text', kohoan).innerMerged}
    ${setHorizontalSpace('text', kohoan).outer}
  }
  ${Main.Ryoanji} & {
    ${fontStyle(ryoanji)}
    ${setHorizontalSpace('text', ryoanji).innerMerged}
    ${setHorizontalSpace('text', ryoanji).outer}
  }
`;

H3.propTypes = {};
export default H3;
