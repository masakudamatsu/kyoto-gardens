import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';

import remify from 'src/utils/remify';
import {breakpoint} from 'src/utils/hspaceScheme';

import {spaceToTrim, vspace} from 'src/utils/vspaceScheme';

const Section = styled.section`
  ${Main.Kohoan} & {
    ${getPaddingBottom('kohoan')}
  }
  ${Main.Ryoanji} & {
    ${getPaddingBottom('ryoanji')}
  }
`;

function getPaddingBottom(pageName) {
  return css`
    padding-bottom: ${remify(
      vspace[pageName].betweenSections.mobile -
        spaceToTrim[pageName].article.bottom.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(
        vspace[pageName].betweenSections.desktop -
          spaceToTrim[pageName].article.bottom.desktop,
      )};
    }
  `;
}

Section.propTypes = {};

export default Section;
