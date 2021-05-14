import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';

import {ryoanji} from 'src/utils/specRyoanji';
import remify from 'src/utils/remify';
import {breakpoint, setSpace} from 'src/utils/designSpec';

const SubSection = styled.section`
  ${Main.Ryoanji} & {
    ${getPaddingTop(ryoanji)}
  }
`;

function getPaddingTop(spec) {
  return css`
    padding-top: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile)
        .betweenParagraphs -
        (spec.article.descender.mobile + spec.h3.ascender.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-top: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop)
          .betweenParagraphs -
          (spec.article.descender.desktop + spec.h3.ascender.desktop),
      )};
    }
  `;
}

SubSection.propTypes = {};

export default SubSection;
