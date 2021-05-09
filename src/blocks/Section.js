import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Main} from 'src/blocks/Main';

import {ryoanji} from 'src/utils/specRyoanji';
import remify from 'src/utils/remify';
import {breakpoint, setSpace} from 'src/utils/designSpec';

const Section = styled.section`
  ${Main.Ryoanji} & {
    padding-bottom: ${remify(
      setSpace('mobile', ryoanji.article.lineHeightRatio.mobile)
        .betweenSections - ryoanji.article.descender.mobile,
    )};
    @media only screen and ${breakpoint.fontSize} {
      padding-bottom: ${remify(
        setSpace('desktop', ryoanji.article.lineHeightRatio.desktop)
          .betweenSections - ryoanji.article.descender.desktop,
      )};
    }
  }
`;

Section.propTypes = {};

export default Section;
