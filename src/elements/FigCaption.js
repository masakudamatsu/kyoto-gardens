import styled from 'styled-components';
import PropTypes from 'prop-types';

import {figCaption} from 'src/utils/designSpec';
import {getFontSize} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const FigCaption = styled.figcaption`
  font-family: ${figCaption.mobile.fontFamily};
  font-size: ${remify(getFontSize(figCaption.mobile))};
  font-weight: ${figCaption.mobile.fontWeight};
  margin-right: 5px; /* Align with the right-edge of the floor plan */
  padding-top: 0.5rem;
  text-align: right;
`;

FigCaption.Footer = styled.footer`
  color: rgb(100, 100, 100);
`;

FigCaption.propTypes = {};
export default FigCaption;
