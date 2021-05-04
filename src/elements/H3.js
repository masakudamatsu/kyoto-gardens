import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {
  breakpoint,
  lineLength,
  ryoanji,
  whitespace,
} from 'src/utils/designSpec';
import {color} from 'src/utils/specColor';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const fontStyle = {
  ryoanji: css`
    font-family: ${ryoanji.h3.mobile.fontFamily};
    font-size: ${remify(getFontSize(ryoanji.h3.mobile))};
    font-weight: ${ryoanji.h3.mobile.fontWeight};
    line-height: ${getLineHeight(ryoanji.h3.mobile)};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(getFontSize(ryoanji.h3.desktop))};
    }
  `,
};

const H3 = styled.h3`
  ${props => props.ryoanji && fontStyle.ryoanji}
  color: ${color.subsectionTitle.font};
  margin: 0 auto;
  max-width: ${remify(
    lineLength.max.mobile + whitespace('mobile').sideMarginLarge * 2,
  )};
  padding: 0 ${remify(whitespace().sideMargin)};
  text-transform: uppercase;
  @media only screen and ${breakpoint.sideMargin} {
    padding: 0 ${remify(whitespace().sideMarginLarge)};
  }
  @media only screen and ${breakpoint.fontSize} {
    max-width: ${remify(
      lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,
    )};
    padding: 0 ${remify(whitespace('desktop').sideMarginLarge)};
  }
`;

H3.propTypes = {
  ryoanji: PropTypes.bool,
};
export default H3;
