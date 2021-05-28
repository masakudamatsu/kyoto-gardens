import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {header} from 'src/utils/specLayout';
import {index} from 'src/utils/specIndex';
import {mediaQuery} from 'src/utils/mediaQuery';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';
import {breakpoint, setSpace} from 'src/utils/designSpec';

import {seigaihaPattern, shippoPattern} from 'src/utils/patterns';

import {colour} from 'src/utils/colorScheme';

const Main = styled.main`
  /* uncomment these once the top bar is introduced
  padding-top: ${remify(header.height + header.borderBottomWidth)};
  @media only screen and ${mediaQuery.font} {
    padding-top: ${remify(header.height * scale + header.borderBottomWidth)};
  }
  */
`;

// Uncomment these once the top bar is introduced
// Main.MarginTop = styled.div`
//   height: ${remify(main.whitespace.marginTop)};
//   width: 100%;
//   @media only screen and ${mediaQuery.font} {
//     height: ${remify(main.whitespace.marginTop * scale)};
//   }
// `;

Main.Ryoanji = styled(Main)`
  ${shippoPattern}
`;

Main.Kohoan = styled(Main)`
  ${seigaihaPattern}
`;

Main.Index = styled(Main)`
  background-color: ${colour.index.main.background};
  color: ${colour.index.main.color};
  margin: 0 auto;
  max-width: ${remify(index.main.maxWidth)};
  overflow: hidden; /* to set height large enough to contain floated child elements; see https://www.internetingishard.com/html-and-css/floats/#floats-for-grids */
  ${getPaddingBottom(index)}
  & a,
  & a:visited {
    color: ${colour.index.main.color};
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

Main.propTypes = {};

export default Main;
