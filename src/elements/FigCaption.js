import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/hspaceScheme';
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
        baselinePosition: font.kohoan.figCaption.link.baselinePosition.mobile,
        underlineWidth: font.kohoan.figCaption.link.underlineWidth,
        spaceBelowBaseline:
          font.kohoan.figCaption.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: 'transparent',
          backgroundColorOnHover: colour.kohoan.link.onHoverBackground,
          linkTextColor: colour.kohoan.link.color,
          baselinePosition:
            font.kohoan.figCaption.link.baselinePosition.desktop,
          underlineWidth: font.kohoan.figCaption.link.underlineWidth,
          spaceBelowBaseline:
            font.kohoan.figCaption.link.spaceBelowBaseline.desktop,
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
        baselinePosition: font.ryoanji.figCaption.link.baselinePosition.mobile,
        underlineWidth: font.ryoanji.figCaption.link.underlineWidth,
        spaceBelowBaseline:
          font.ryoanji.figCaption.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: 'transparent',
          backgroundColorOnHover: colour.ryoanji.link.onHoverBackground,
          linkTextColor: colour.ryoanji.link.color,
          baselinePosition:
            font.ryoanji.figCaption.link.baselinePosition.desktop,
          underlineWidth: font.ryoanji.figCaption.link.underlineWidth,
          spaceBelowBaseline:
            font.ryoanji.figCaption.link.spaceBelowBaseline.desktop,
        })}
      }
    }
  }
`;

FigCaption.propTypes = {};
export default FigCaption;
