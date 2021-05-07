import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainRyoanji from 'src/blocks/MainRyoanji';
import {ryoanji} from 'src/utils/specRyoanji';
import remify from 'src/utils/remify';
import {breakpoint, setSpace} from 'src/utils/designSpec';

const Section = styled.section`
  ${MainRyoanji} & {
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
