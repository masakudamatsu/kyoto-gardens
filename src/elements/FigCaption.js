import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, figCaption} from 'src/utils/designSpec';
import {color} from 'src/utils/specColor';
import {getFontSize} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const FigCaption = styled.figcaption`
  font-family: ${figCaption.mobile.fontFamily};
  font-size: ${remify(getFontSize(figCaption.mobile))};
  font-weight: ${figCaption.mobile.fontWeight};
  margin-right: 5px; /* Align with the right-edge of the floor plan */
  padding-top: 0.5rem;
  text-align: right;
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(getFontSize(figCaption.desktop))};
  }
`;

FigCaption.Footer = styled.footer`
  color: ${color.source};
`;

FigCaption.propTypes = {};
export default FigCaption;
