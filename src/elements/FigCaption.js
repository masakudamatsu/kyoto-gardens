import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import {cssLinkText} from 'src/utils/cssLinkText';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

function fontStyle(spec) {
  return css`
    font-family: ${spec.figCaption.fontFamily};
    font-size: ${remify(spec.figCaption.fontSize.mobile)};
    font-weight: ${spec.figCaption.fontWeight};
    font-variant-ligatures: ${spec.figCaption.ligature || 'normal'};
    line-height: ${spec.figCaption.lineHeight.mobile};
    margin-right: ${spec.figCaption.marginRight || 0}px;
    text-align: ${spec.figCaption.textAlign};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(spec.figCaption.fontSize.desktop)};
      line-height: ${spec.figCaption.lineHeight.desktop};
    }
    & a {
      ${cssLinkText({
        backgroundColor: 'transparent',
        backgroundColorOnHover: spec.link.backgroundOnHover,
        linkTextColor: spec.link.color,
        baselinePosition: spec.figCaption.baselinePosition.mobile,
        lineWidth: spec.link.lineWidth,
        spaceBelowBaseline: spec.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: 'transparent',
          backgroundColorOnHover: spec.link.backgroundOnHover,
          linkTextColor: spec.link.color,
          baselinePosition: spec.figCaption.baselinePosition.desktop,
          lineWidth: spec.link.lineWidth,
          spaceBelowBaseline: spec.link.spaceBelowBaseline.figCaption.desktop,
        })}
      }
    }
  `;
}

const FigCaption = styled.figcaption`
  ${Main.Kohoan} & {
    ${fontStyle(kohoan)}
  }
  ${Main.Ryoanji} & {
    ${fontStyle(ryoanji)}
  }
`;

FigCaption.propTypes = {};
export default FigCaption;
