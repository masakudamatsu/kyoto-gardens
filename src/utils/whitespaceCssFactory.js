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
    spaceByDefault = screenWidth === 'mobile' ? 7.5 : 10.5; // The value of 7.5 / 10.5 is the distance from box edge to cap height
  }
  if (props.belowBoxLine) {
    targetHeight = whitespace(screenWidth).betweenLines;
    spaceByDefault =
      screenWidth === 'mobile'
        ? 7.5 + getCapHeightXHeightDiff(paragraph[screenWidth])
        : 10.5 + getCapHeightXHeightDiff(paragraph[screenWidth]); // To subtract the distance from box edge to x-height (not cap-height)
  }
  return remify(targetHeight - spaceByDefault);
}
