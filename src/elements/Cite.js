import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'src/blocks/Main';
import {ryoanji} from 'src/utils/specRyoanji';

const Cite = styled.cite``;

Cite.Italic = styled.cite`
  ${Main.Ryoanji} & {
    font-style: italic;
  }
`;

Cite.Roman = styled.cite`
  font-style: normal;
`;

Cite.propTypes = {};
export default Cite;
