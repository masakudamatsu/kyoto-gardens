import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import {cssLinkText} from 'src/utils/cssLinkText';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';
import {
  font,
  makeLineHeightRatioToBe,
  makeXHeightToBe,
} from 'src/utils/fontScheme';

function figCaptionFontStyle(spec) {
  return css`
    font-family: ${spec.figCaption.family};
    font-size: ${remify(
      makeXHeightToBe(spec.figCaption.xHeight.mobile, spec.figCaption.metrics),
    )};
    font-weight: ${spec.figCaption.weight};
    font-variant-ligatures: ${spec.figCaption.ligature || 'normal'};
    line-height: ${makeLineHeightRatioToBe(
      spec.figCaption.lineHeightRatio.mobile,
      spec.figCaption.metrics,
    )};
    margin-right: ${spec.figCaption.marginRight || 0}px;
    text-align: ${spec.figCaption.textAlign};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(
        makeXHeightToBe(
          spec.figCaption.xHeight.desktop,
          spec.figCaption.metrics,
        ),
      )};
      line-height: ${makeLineHeightRatioToBe(
        spec.figCaption.lineHeightRatio.desktop,
        spec.figCaption.metrics,
      )};
    }
  `;
}

const FigCaption = styled.figcaption`
  ${Main.Kohoan} & {
    ${figCaptionFontStyle(font.kohoan)}
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
    ${figCaptionFontStyle(font.ryoanji)}
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
