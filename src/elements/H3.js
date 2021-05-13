import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';
import {horizontalSpacing} from 'src/utils/horizontalSpacing';
import Main from 'src/blocks/Main';

const fontStyle = {
  ryoanji: css`
    color: ${ryoanji.h3.color};
    font-family: ${ryoanji.h3.fontFamily};
    font-size: ${remify(ryoanji.h3.fontSize.mobile)};
    font-weight: ${ryoanji.h3.fontWeight};
    letter-spacing: ${ryoanji.h3.letterSpacing};
    line-height: ${ryoanji.h3.lineHeight};
    text-transform: ${ryoanji.h3.textTransform};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(ryoanji.h3.fontSize.desktop)};
    }
  `,
};

const H3 = styled.h3`
  ${Main.Ryoanji} & {
    ${fontStyle['ryoanji']}
    ${horizontalSpacing.text['ryoanji'].innerMerged}
    ${horizontalSpacing.text['ryoanji'].outer}
  }
`;

H3.propTypes = {};
export default H3;
