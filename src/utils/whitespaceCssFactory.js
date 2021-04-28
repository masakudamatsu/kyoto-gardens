import {paragraph, whitespace} from 'src/utils/designSpec';
import {getCapHeightXHeightDiff} from 'src/utils/fontCssFactory';
import remify from 'src/utils/remify';

export function getPaddingTop(props, screenWidth = 'mobile') {
  if (!props) {
    throw new Error(`getPaddingTop requires props as the first argument.`);
  }
  let spaceByDefault, targetHeight;
  if (props.belowTextParagraph) {
    targetHeight = whitespace(screenWidth).betweenParagraphs;
    spaceByDefault =
      whitespace(screenWidth).betweenLines -
      getCapHeightXHeightDiff(paragraph[screenWidth]);
  }
  if (props.belowBoxParagraph) {
    targetHeight = whitespace(screenWidth).betweenParagraphs;
    spaceByDefault = 12 - getCapHeightXHeightDiff(paragraph[screenWidth]);
  }
  return remify(targetHeight - spaceByDefault);
}
