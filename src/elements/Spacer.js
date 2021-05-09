import styled from 'styled-components';
import {Main} from 'src/blocks/Main';

import {ryoanji} from 'src/utils/specRyoanji';
import remify from 'src/utils/remify';
import {breakpoint, setSpace} from 'src/utils/designSpec';

export const Spacer = styled.div`
  width: 100%;
`;

Spacer.BoxLineToText = styled(Spacer)`
  ${Main.Ryoanji} & {
    height: ${remify(
      setSpace('mobile', ryoanji.article.lineHeightRatio.mobile).betweenLines -
        ryoanji.article.ascender.mobile -
        ryoanji.article.capToX.mobile -
        ryoanji.figure.spaceBelowByBug.mobile, // see issue #29
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
          .betweenLines -
          ryoanji.article.ascender.desktop -
          ryoanji.article.capToX.desktop -
          ryoanji.figure.spaceBelowByBug.desktop, // see issue #29
      )};
    }
  }
`;
Spacer.BoxParagraphToText = styled(Spacer)`
  ${Main.Ryoanji} & {
    height: ${remify(
      setSpace('mobile', ryoanji.article.lineHeightRatio.mobile)
        .betweenParagraphs - ryoanji.article.ascender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
          .betweenParagraphs - ryoanji.article.ascender.desktop,
      )};
    }
  }
`;
Spacer.H3LineToBox = styled(Spacer)`
  ${Main.Ryoanji} & {
    height: ${remify(
      setSpace('mobile', ryoanji.article.lineHeightRatio.mobile).betweenLines -
        ryoanji.h3.descender.mobile -
        ryoanji.article.capToX.mobile, // make it symmetric with the space below the figure and the cap height of next paragraph
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
          .betweenLines -
          ryoanji.h3.descender.desktop -
          ryoanji.article.capToX.desktop, // make it symmetric with the space below the figure and the cap height of next paragraph
      )};
    }
  }
`;
Spacer.TextLineToBox = styled(Spacer)`
  ${Main.Ryoanji} & {
    height: ${remify(
      setSpace('mobile', ryoanji.article.lineHeightRatio.mobile).betweenLines -
        ryoanji.article.descender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
          .betweenLines - ryoanji.article.descender.desktop,
      )};
    }
  }
`;
Spacer.TextParagraphToBox = styled(Spacer)``; // not used for Ryoan-ji

Spacer.TextParagraphToText = styled(Spacer)`
  ${Main.Ryoanji} & {
    height: ${remify(
      setSpace('mobile', ryoanji.article.lineHeightRatio.mobile)
        .betweenParagraphs -
        setSpace('mobile', ryoanji.article.lineHeightRatio.mobile)
          .betweenLines +
        ryoanji.article.capToX.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      height: ${remify(
        setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
          .betweenParagraphs -
          setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
            .betweenLines +
          ryoanji.article.capToX.desktop,
      )};
    }
  }
`;
