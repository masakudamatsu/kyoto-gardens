import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, paragraph, whitespace} from 'src/utils/designSpec';
import {getCapHeightXHeightDiff} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

function getHeight(props, screenWidth = 'mobile') {
  let targetHeight;
  if (props.betweenLines) {
    targetHeight = whitespace(screenWidth).betweenLines;
  }
  if (props.betweenParagraphs) {
    targetHeight = whitespace(screenWidth).betweenParagraphs;
  }
  if (props.betweenSections) {
    targetHeight = whitespace(screenWidth).betweenSections;
  }
  if (!targetHeight) {
    throw new Error(`Spacer component does not get any props`);
  }
  if (props.textOnly) {
    const spaceByDefault =
      whitespace(screenWidth).betweenLines -
      getCapHeightXHeightDiff(paragraph[screenWidth]);
    return remify(targetHeight - spaceByDefault);
  }
  if (props.aboveBox) {
    const spaceByDefault = 8; // given x-height of 8px and line-height of 28px
    return remify(targetHeight - spaceByDefault);
  }
  if (props.belowBox) {
    const spaceByDefault = 12 - getCapHeightXHeightDiff(paragraph[screenWidth]);
    return remify(targetHeight - spaceByDefault);
  }
  if (props.aboveSubsectionTitle) {
    const spaceByDefault = 14;
    return remify(targetHeight - spaceByDefault);
  }
  if (props.belowSubsectionTitle) {
    const spaceByDefault = 6;
    return remify(targetHeight - spaceByDefault);
  }
}

const Spacer = styled.div`
  height: ${props => {
    return getHeight(props, 'mobile');
  }};
  width: 100%;
  @media only screen and ${breakpoint.fontSize} {
    height: ${props => {
      return getHeight(props, 'desktop');
    }};
  }
`;

Spacer.propTypes = {
  aboveBox: PropTypes.bool,
  betweenLines: PropTypes.bool,
  betweenParagraphs: PropTypes.bool,
  betweenSections: PropTypes.bool,
  textOnly: PropTypes.bool,
};

export default Spacer;
