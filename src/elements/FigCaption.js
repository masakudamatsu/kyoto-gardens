import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import {cssLinkText} from 'src/utils/cssLinkText';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';

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
  `;
}

const FigCaption = styled.figcaption`
  ${Main.Kohoan} & {
    ${fontStyle(kohoan)}
    & a {
      ${cssLinkText({
        backgroundColor: 'transparent',
        backgroundColorOnHover: colour.kohoan.link.onHoverBackground,
        linkTextColor: colour.kohoan.link.color,
        baselinePosition: kohoan.figCaption.baselinePosition.mobile,
        lineWidth: kohoan.link.lineWidth,
        spaceBelowBaseline: kohoan.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: 'transparent',
          backgroundColorOnHover: colour.kohoan.link.onHoverBackground,
          linkTextColor: colour.kohoan.link.color,
          baselinePosition: kohoan.figCaption.baselinePosition.desktop,
          lineWidth: kohoan.link.lineWidth,
          spaceBelowBaseline: kohoan.link.spaceBelowBaseline.figCaption.desktop,
        })}
      }
    }
  }
  ${Main.Ryoanji} & {
    ${fontStyle(ryoanji)}
    & a {
      ${cssLinkText({
        backgroundColor: 'transparent',
        backgroundColorOnHover: colour.ryoanji.link.onHoverBackground,
        linkTextColor: colour.ryoanji.link.color,
        baselinePosition: ryoanji.figCaption.baselinePosition.mobile,
        lineWidth: ryoanji.link.lineWidth,
        spaceBelowBaseline: ryoanji.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: 'transparent',
          backgroundColorOnHover: colour.ryoanji.link.onHoverBackground,
          linkTextColor: colour.ryoanji.link.color,
          baselinePosition: ryoanji.figCaption.baselinePosition.desktop,
          lineWidth: ryoanji.link.lineWidth,
          spaceBelowBaseline:
            ryoanji.link.spaceBelowBaseline.figCaption.desktop,
        })}
      }
    }
  }
`;

FigCaption.propTypes = {};
export default FigCaption;
