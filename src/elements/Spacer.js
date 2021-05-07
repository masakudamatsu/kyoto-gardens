import styled from 'styled-components';
import MainRyoanji from 'src/blocks/MainRyoanji';
import {ryoanji} from 'src/utils/specRyoanji';
import remify from 'src/utils/remify';
import {breakpoint, setSpace} from 'src/utils/designSpec';

export const SpacerBoxLineToText = styled.div`
  width: 100%;
  ${MainRyoanji} & {
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
export const SpacerBoxParagraphToText = styled.div`
  width: 100%;
  ${MainRyoanji} & {
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
export const SpacerH3LineToBox = styled.div`
  width: 100%;
  ${MainRyoanji} & {
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
export const SpacerTextLineToBox = styled.div`
  width: 100%;
  ${MainRyoanji} & {
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
export const SpacerTextParagraphToBox = styled.div`
  width: 100%;
`; // not used for Ryoan-ji
export const SpacerTextParagraphToText = styled.div`
  width: 100%;
  ${MainRyoanji} & {
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
