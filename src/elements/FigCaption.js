import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, figCaption} from 'src/utils/designSpec';
import {color} from 'src/utils/specColor';
import {getFontSize} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const fontStyle = {
  ryoanji: css`
    font-family: ${figCaption.mobile.fontFamily};
    font-size: ${remify(getFontSize(figCaption.mobile))};
    font-weight: ${figCaption.mobile.fontWeight};
    margin-right: 5px; /* Align with the right-edge of the floor plan */
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(getFontSize(figCaption.desktop))};
    }
  `,
};

const FigCaption = styled.figcaption`
  ${props => props.ryoanji && fontStyle.ryoanji}
  padding-top: 0.5rem;
  text-align: right;
`;

FigCaption.Footer = styled.footer`
  color: ${color.source};
`;

FigCaption.propTypes = {
  ryoanji: PropTypes.bool,
};
export default FigCaption;
