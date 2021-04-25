import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/specColor';
import {maxPhotoWidth} from 'src/utils/designSpec';

const Article = styled.article`
  background-color: ${color.article.background};
  margin: 0 auto;
  max-width: ${maxPhotoWidth}px;
`;

Article.propTypes = {};

export default Article;
