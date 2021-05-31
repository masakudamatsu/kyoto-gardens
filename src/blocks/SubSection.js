import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';

import remify from 'src/utils/remify';
import {breakpoint} from 'src/utils/designSpec';

import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

const SubSection = styled.section`
  ${Main.Kohoan} & {
    ${getPaddingTop('kohoan')}
  }
  ${Main.Ryoanji} & {
    ${getPaddingTop('ryoanji')}
  }
`;

function getPaddingTop(pageName) {
  return css`
    padding-top: ${remify(
      vspace[pageName].betweenParagraphs.mobile -
        (spaceToTrim[pageName].article.bottom.mobile +
          spaceToTrim[pageName].h3.top.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-top: ${remify(
        vspace[pageName].betweenParagraphs.desktop -
          (spaceToTrim[pageName].article.bottom.desktop +
            spaceToTrim[pageName].h3.top.desktop),
      )};
    }
  `;
}

SubSection.propTypes = {};

export default SubSection;
