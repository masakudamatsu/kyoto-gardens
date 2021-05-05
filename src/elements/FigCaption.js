import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint} from 'src/utils/designSpec';
import {cssLinkText} from 'src/utils/cssLinkText';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';

const fontStyle = {
  ryoanji: css`
    font-family: ${ryoanji.figCaption.fontFamily};
    font-size: ${remify(ryoanji.figCaption.fontSize.mobile)};
    font-weight: ${ryoanji.figCaption.fontWeight};
    line-height: ${ryoanji.figCaption.lineHeight.mobile};
    margin-right: 5px; /* Align with the right-edge of the floor plan */
    text-align: ${ryoanji.figCaption.textAlign};
    @media only screen and ${breakpoint.fontSize} {
      font-size: ${remify(ryoanji.figCaption.fontSize.desktop)};
      line-height: ${ryoanji.figCaption.lineHeight.desktop};
    }
    a {
      ${cssLinkText({
        backgroundColor: ryoanji.article.backgroundColor,
        backgroundColorOnHover: ryoanji.link.backgroundOnHover,
        linkTextColor: ryoanji.link.color,
        baselinePosition: ryoanji.figCaption.baselinePosition.mobile,
        lineWidth: ryoanji.link.lineWidth,
        spaceBelowBaseline: ryoanji.link.spaceBelowBaseline.mobile,
      })}
      @media only screen and ${breakpoint.fontSize} {
        ${cssLinkText({
          backgroundColor: ryoanji.article.backgroundColor,
          backgroundColorOnHover: ryoanji.link.backgroundOnHover,
          linkTextColor: ryoanji.link.color,
          baselinePosition: ryoanji.figCaption.baselinePosition.desktop,
          lineWidth: ryoanji.link.lineWidth,
          spaceBelowBaseline:
            ryoanji.link.spaceBelowBaseline.figCaption.desktop,
        })}
      }
    }
  `,
};

const FigCaption = styled.figcaption`
  ${props => props.ryoanji && fontStyle.ryoanji}
`;

FigCaption.Footer = styled.footer`
  color: ${ryoanji.source.color};
`;

FigCaption.propTypes = {
  ryoanji: PropTypes.bool,
};
export default FigCaption;
