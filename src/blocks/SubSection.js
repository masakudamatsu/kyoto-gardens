import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';

import {ryoanji} from 'src/utils/specRyoanji';
import remify from 'src/utils/remify';
import {breakpoint, setSpace} from 'src/utils/designSpec';

const SubSection = styled.section`
  ${Main.Ryoanji} & {
    padding-top: ${remify(
      setSpace('mobile', ryoanji.article.lineHeightRatio.mobile)
        .betweenParagraphs -
        (ryoanji.article.descender.mobile + ryoanji.h3.ascender.mobile),
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-top: ${remify(
        setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
          .betweenParagraphs -
          (ryoanji.article.descender.desktop + ryoanji.h3.ascender.desktop),
      )};
    }
  }
`;

SubSection.propTypes = {};

export default SubSection;
