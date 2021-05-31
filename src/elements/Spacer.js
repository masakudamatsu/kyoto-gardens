import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import Main from 'src/blocks/Main';

import {index} from 'src/utils/specIndex';
import remify from 'src/utils/remify';
import {breakpoint} from 'src/utils/hspaceScheme';

import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

const Spacer = styled.div`
  width: 100%;
`;

////////////////////////////////////////////

Spacer.BoxLineToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${({image}) => spaceBoxLineToText('kohoan', image)}
  }
  ${Main.Ryoanji} & {
    ${({image}) => spaceBoxLineToText('ryoanji', image)}
  }
`;

Spacer.BoxLineToText.propTypes = {
  image: PropTypes.bool,
};

function spaceBoxLineToText(pageName, image = false) {
  const bugFix = image
    ? {
        // see issue #29
        mobile: spaceToTrim[pageName].figure.bottom.mobile,
        desktop: spaceToTrim[pageName].figure.bottom.desktop,
      }
    : {
        mobile: 0,
        desktop: 0,
      };
  return css`
    height: ${remify(
      vspace[pageName].betweenLines.mobile -
        spaceToTrim[pageName].article.top.mobile -
        spaceToTrim[pageName].article.capToX.mobile -
        bugFix.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        vspace[pageName].betweenLines.desktop -
          spaceToTrim[pageName].article.top.desktop -
          spaceToTrim[pageName].article.capToX.desktop -
          bugFix.desktop,
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.BoxParagraphToBox = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceBoxParagraphToBox('kohoan')}
  }
`;

function spaceBoxParagraphToBox(pageName) {
  return css`
    height: ${remify(vspace[pageName].betweenParagraphs.mobile)};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(vspace[pageName].betweenParagraphs.desktop)};
    }
  `;
}

////////////////////////////////////////////

Spacer.BoxParagraphToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceBoxParagraphToText('kohoan')}
  }
  ${Main.Ryoanji} & {
    ${spaceBoxParagraphToText('ryoanji')}
  }
`;

function spaceBoxParagraphToText(pageName) {
  return css`
    height: ${remify(
      vspace[pageName].betweenParagraphs.mobile -
        spaceToTrim[pageName].article.top.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        vspace[pageName].betweenParagraphs.desktop -
          spaceToTrim[pageName].article.top.desktop,
      )};
    }
  `;
}

/////////////
Spacer.CaptionParagraphToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceCaptionParagraphToText('kohoan')}
  }
`;

function spaceCaptionParagraphToText(pageName) {
  return css`
    height: ${remify(
      vspace[pageName].betweenParagraphs.mobile -
        (spaceToTrim[pageName].figCaption.bottom.mobile +
          spaceToTrim[pageName].article.top.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        vspace[pageName].betweenParagraphs.desktop -
          (spaceToTrim[pageName].figCaption.bottom.desktop +
            spaceToTrim[pageName].article.top.desktop),
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.H3LineToBox = styled(Spacer)`
  ${Main.Ryoanji} & {
    ${spaceH3LineToBox('ryoanji')}
  }
`;
function spaceH3LineToBox(pageName) {
  // We subtract capToX so
  // the space above (to the bottom of H3 text)
  // and below (to the top of the capital letter at the beginning)
  // the figure appears symmetric
  return css`
    height: ${remify(
      vspace[pageName].betweenLines.mobile -
        (spaceToTrim[pageName].h3.bottom.mobile +
          spaceToTrim[pageName].article.capToX.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        vspace[pageName].betweenLines.desktop -
          (spaceToTrim[pageName].h3.bottom.desktop +
            spaceToTrim[pageName].article.capToX.desktop),
      )};
    }
  `;
}

////////////////////////////////////////

Spacer.H3ParagraphToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceH3ParagraphToText('kohoan')}
  }
`;
function spaceH3ParagraphToText(pageName) {
  // We subtract capToX so whitespace above and below H3 looks symmetric
  // Otherwise, the paragraph below appears more distant than the one above
  return css`
    height: ${remify(
      vspace[pageName].betweenParagraphs.mobile -
        (spaceToTrim[pageName].h3.bottom.mobile +
          spaceToTrim[pageName].article.top.mobile +
          spaceToTrim[pageName].article.capToX.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        vspace[pageName].betweenParagraphs.desktop -
          (spaceToTrim[pageName].h3.bottom.desktop +
            spaceToTrim[pageName].article.top.desktop +
            spaceToTrim[pageName].article.capToX.desktop),
      )};
    }
  `;
}
////////////////////////////////////////////

Spacer.TextLineToBox = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceTextLineToBox('kohoan')}
  }
  ${Main.Ryoanji} & {
    ${spaceTextLineToBox('ryoanji')}
  }
`;
function spaceTextLineToBox(pageName) {
  return css`
    height: ${remify(
      vspace[pageName].betweenLines.mobile -
        spaceToTrim[pageName].article.bottom.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        vspace[pageName].betweenLines.desktop -
          spaceToTrim[pageName].article.bottom.desktop,
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.TextParagraphToBox = styled(Spacer)``; // not used for Ryoan-ji

////////////////////////////////////////////

Spacer.TextParagraphToText = styled(Spacer)`
  ${Main.Kohoan} & {
    ${spaceTextParagraphToText('kohoan')}
  }
  ${Main.Ryoanji} & {
    ${spaceTextParagraphToText('ryoanji')}
  }
`;

function spaceTextParagraphToText(pageName) {
  return css`
    height: ${remify(
      vspace[pageName].betweenParagraphs.mobile -
        (spaceToTrim[pageName].article.bottom.mobile +
          spaceToTrim[pageName].article.top.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        vspace[pageName].betweenParagraphs.desktop -
          (spaceToTrim[pageName].article.bottom.desktop +
            spaceToTrim[pageName].article.top.desktop),
      )};
    }
  `;
}

////////////////////////////////////////////

Spacer.Index = styled(Spacer)`
  height: ${index.spacer.height}px;
`;

export default Spacer;
