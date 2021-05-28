import styled from 'styled-components';
import PropTypes from 'prop-types';

import {breakpoint, setSpace} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {colour} from 'src/utils/colorScheme';

const getPaddingTop = (screenWidth, spec) => {
  const targetHeight = setSpace(
    screenWidth,
    spec.article.lineHeightRatio[screenWidth],
  ).betweenParagraphs;
  return remify(targetHeight - spec.hr.spaceAboveByDefault[screenWidth]);
};

const getPaddingBottom = (screenWidth, spec) => {
  return remify(
    setSpace(screenWidth, spec.article.lineHeightRatio[screenWidth])
      .betweenParagraphs + spec.hr.asteriskHeight[screenWidth],
  );
};

const Hr = styled.hr`
  border: none;
  &::before {
    // eslint-disable-next-line no-irregular-whitespace
    content: '* * *';
    display: block;
    text-align: center;
  }
  ${Main.Kohoan} & {
    /* https://stackoverflow.com/a/32146824/11847654 */
    color: ${kohoan.hr.color};
    padding-bottom: ${getPaddingBottom('mobile', kohoan)};
    padding-top: ${getPaddingTop('mobile', kohoan)};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${getPaddingBottom('desktop', kohoan)};
      padding-top: ${getPaddingTop('desktop', kohoan)};
    }
  }
  ${Main.Ryoanji} & {
    /* https://stackoverflow.com/a/32146824/11847654 */
    color: ${colour.ryoanji.hr.color};
    padding-bottom: ${getPaddingBottom('mobile', ryoanji)};
    padding-top: ${getPaddingTop('mobile', ryoanji)};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${getPaddingBottom('desktop', ryoanji)};
      padding-top: ${getPaddingTop('desktop', ryoanji)};
    }
  }
`;

Hr.propTypes = {};
export default Hr;
