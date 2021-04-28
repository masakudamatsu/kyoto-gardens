import {paragraph, whitespace} from 'src/utils/designSpec';
import {getCapHeightXHeightDiff} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

export function getPaddingTop(props, screenWidth = 'mobile') {
  let spaceByDefault, targetHeight;
  if (props.belowTextParagraph) {
    targetHeight = whitespace(screenWidth).betweenParagraphs;
    spaceByDefault =
      whitespace(screenWidth).betweenLines -
      getCapHeightXHeightDiff(paragraph[screenWidth]);
    return remify(targetHeight - spaceByDefault);
  }
}
