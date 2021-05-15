import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/blocks/Main';

import {index} from 'src/utils/specIndex';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import remify from 'src/utils/remify';
import {breakpoint, setSpace} from 'src/utils/designSpec';

const Spacer = styled.div`
  width: 100%;
`;

////////////////////////////////////////////

Spacer.BoxLineToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${({image}) => spaceBoxLineToText(kohoan, image)}
  }
  ${Main.Ryoanji} & {
    ${({image}) => spaceBoxLineToText(ryoanji, image)}
  }
`;

Spacer.BoxLineToText.propTypes = {
  image: PropTypes.bool,
};

function spaceBoxLineToText(spec, image = false) {
  const bugFix = image
    ? {
        // see issue #29
        mobile: spec.figure.spaceBelowByBug.mobile,
        desktop: spec.figure.spaceBelowByBug.desktop,
      }
    : {
        mobile: 0,
        desktop: 0,
      };
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile).betweenLines -
        spec.article.ascender.mobile -
        spec.article.capToX.mobile -
        bugFix.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop).betweenLines -
          spec.article.ascender.desktop -
          spec.article.capToX.desktop -
          bugFix.desktop,
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.BoxParagraphToBox = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceBoxParagraphToBox(kohoan)}
  }
`;

function spaceBoxParagraphToBox(spec) {
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile).betweenParagraphs,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop)
          .betweenParagraphs,
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.BoxParagraphToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceBoxParagraphToText(kohoan)}
  }
  ${Main.Ryoanji} & {
    ${spaceBoxParagraphToText(ryoanji)}
  }
`;

function spaceBoxParagraphToText(spec) {
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile)
        .betweenParagraphs - spec.article.ascender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop)
          .betweenParagraphs - spec.article.ascender.desktop,
      )};
    }
  `;
}

////////////
Spacer.CaptionLineToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceCaptionLineToText(kohoan)}
  }
`;

/////////////
Spacer.CaptionParagraphToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceCaptionParagraphToText(kohoan)}
  }
`;
function spaceCaptionLineToText(spec) {
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile).betweenLines -
        spec.figCaption.descender.mobile -
        spec.article.ascender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop).betweenLines -
          spec.figCaption.descender.desktop -
          spec.article.ascender.desktop,
      )};
    }
  `;
}

function spaceCaptionParagraphToText(spec) {
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile)
        .betweenParagraphs -
        spec.figCaption.descender.mobile -
        spec.article.ascender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop)
          .betweenParagraphs -
          spec.figCaption.descender.desktop -
          spec.article.ascender.desktop,
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.H3LineToBox = styled(Spacer)`
  ${Main.Ryoanji} & {
    ${spaceH3LineToBox(ryoanji)}
  }
`;
function spaceH3LineToBox(spec) {
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile).betweenLines -
        spec.h3.descender.mobile -
        spec.article.capToX.mobile, // make it symmetric with the space below the figure and the cap height of next paragraph
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop).betweenLines -
          spec.h3.descender.desktop -
          spec.article.capToX.desktop, // make it symmetric with the space below the figure and the cap height of next paragraph
      )};
    }
  `;
}

////////////////////////////////////////

Spacer.H3ParagraphToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceH3ParagraphToText(kohoan)}
  }
`;
function spaceH3ParagraphToText(spec) {
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile)
        .betweenParagraphs -
        spec.h3.descender.mobile -
        spec.article.capToX.mobile, // make it symmetric with the space below the figure and the cap height of next paragraph
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop)
          .betweenParagraphs -
          spec.h3.descender.desktop -
          spec.article.capToX.desktop, // make it symmetric with the space below the figure and the cap height of next paragraph
      )};
    }
  `;
}
////////////////////////////////////////////

Spacer.TextLineToBox = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceTextLineToBox(kohoan)}
  }
  ${Main.Ryoanji} & {
    ${spaceTextLineToBox(ryoanji)}
  }
`;
function spaceTextLineToBox(spec) {
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile).betweenLines -
        spec.article.descender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop).betweenLines -
          spec.article.descender.desktop,
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.TextParagraphToBox = styled(Spacer)``; // not used for Ryoan-ji

////////////////////////////////////////////

Spacer.TextParagraphToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceTextParagraphToText(kohoan)}
  }
  ${Main.Ryoanji} & {
    ${spaceTextParagraphToText(ryoanji)}
  }
`;

function spaceTextParagraphToText(spec) {
  return css`
    height: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile)
        .betweenParagraphs -
        setSpace('mobile', spec.article.lineHeightRatio.mobile).betweenLines +
        spec.article.capToX.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop)
          .betweenParagraphs -
          setSpace('desktop', spec.article.lineHeightRatio.desktop)
            .betweenLines +
          spec.article.capToX.desktop,
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.Index = styled(Spacer)`
  height: ${index.spacer.height}px;
`;

export default Spacer;
