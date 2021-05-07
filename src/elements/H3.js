import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, lineLength, whitespace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';
import {horizontalSpacing} from 'src/utils/horizontalSpacing';

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
  ${({page}) => fontStyle[page]}
  margin: 0 auto;
  max-width: ${remify(
    lineLength.max.mobile + whitespace('mobile').sideMarginLarge * 2,
  )};
  @media only screen and ${breakpoint.fontSize} {
    max-width: ${remify(
      lineLength.max.desktop + whitespace('desktop').sideMarginLarge * 2,
    )};
  }
  ${({page}) => horizontalSpacing[page]}
`;

H3.propTypes = {
  page: PropTypes.string.isRequired,
};
export default H3;
