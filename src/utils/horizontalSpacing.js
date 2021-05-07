import {css} from 'styled-components';
import {breakpoint, setSpace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {ryoanji} from 'src/utils/specRyoanji';

export const horizontalSpacing = {
  ryoanji: css`
    padding: 0
      ${remify(
        setSpace('mobile', ryoanji.article.lineHeightRatio.mobile).sideMargin,
      )};
    @media only screen and ${breakpoint.sideMargin} {
      padding: 0
        ${remify(
          setSpace('mobile', ryoanji.article.lineHeightRatio.mobile)
            .sideMarginLarge,
        )};
    }
    @media only screen and ${breakpoint.fontSize} {
      padding: 0
        ${remify(
          setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
            .sideMarginLarge,
        )};
    }
  `,
};
