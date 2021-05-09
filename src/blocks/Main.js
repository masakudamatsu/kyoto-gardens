import styled from 'styled-components';
import PropTypes from 'prop-types';

import {header, main} from 'src/utils/specLayout';
import {mediaQuery} from 'src/utils/mediaQuery';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

import {shippoPattern} from 'src/utils/patterns';

export const Main = styled.main`
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

Main.Index = styled(Main)``;

Main.propTypes = {};
