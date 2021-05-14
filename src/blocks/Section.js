import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';

import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import remify from 'src/utils/remify';
import {breakpoint, setSpace} from 'src/utils/designSpec';
import {index} from 'src/utils/specIndex';

const Section = styled.section`
  ${Main.Kohoan} & {
    ${getPaddingBottom(kohoan)}
  }
  ${Main.Ryoanji} & {
    ${getPaddingBottom(ryoanji)}
  }
`;

function getPaddingBottom(spec) {
  return css`
    padding-bottom: ${remify(
      setSpace('mobile', spec.article.lineHeightRatio.mobile).betweenSections -
        spec.article.descender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(
        setSpace('desktop', spec.article.lineHeightRatio.desktop)
          .betweenSections - spec.article.descender.desktop,
      )};
    }
  `;
}

Section.propTypes = {};

export default Section;
