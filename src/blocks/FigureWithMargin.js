import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import FigCaption from 'src/elements/FigCaption';
import {kohoan} from 'src/utils/specKohoan';
import {ryoanji} from 'src/utils/specRyoanji';
import Main from 'src/blocks/Main';

import {setHorizontalSpace} from 'src/utils/designSpec';

// prettier-ignore
const FigureWithMargin = styled(Figure)`
  ${Main.Kohoan} & {
  }
  ${Main.Ryoanji} & {
    ${setHorizontalSpace('figure', ryoanji).innerMerged}
    ${setHorizontalSpace('figure', ryoanji).outer}
  }
`;

FigureWithMargin.FigCaption = styled(FigCaption)`
  ${Main.Kohoan} & {
    ${setHorizontalSpace('text', kohoan).innerMerged}
    ${setHorizontalSpace('text', kohoan).outer}
  }
`;

FigureWithMargin.propTypes = {
  diagram: PropTypes.bool,
};

export default FigureWithMargin;
