import styled from 'styled-components';
import PropTypes from 'prop-types';

import {header} from 'src/utils/specLayout';
import {index} from 'src/utils/specIndex';
import {mediaQuery} from 'src/utils/mediaQuery';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

import {seigaihaPattern, shippoPattern} from 'src/utils/patterns';

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
  margin: 0 auto;
  max-width: ${remify(index.main.maxWidth)};
`;

Main.propTypes = {};

export default Main;
