import styled from 'styled-components';
import PropTypes from 'prop-types';

import {paragraph, whitespace} from 'src/utils/designSpec';
import {getCapHeightXHeightDiff} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

const Spacer = styled.div`
  height: ${props => {
    let targetHeight;
    if (props.betweenParagraphs) {
      targetHeight = whitespace.betweenParagraphs;
    }
    if (props.betweenSections) {
      targetHeight = whitespace.betweenSections;
    }
    if (!targetHeight) {
      throw new Error(`Spacer component does not get any props`);
    }
    if (props.textOnly) {
      const spaceByDefault =
        whitespace.betweenLines - getCapHeightXHeightDiff(paragraph.mobile);
      return remify(targetHeight - spaceByDefault);
    }
  }};
  width: 100%;
`;

Spacer.propTypes = {
  betweenParagraphs: PropTypes.bool,
  betweenSections: PropTypes.bool,
  textOnly: PropTypes.bool,
};

export default Spacer;
