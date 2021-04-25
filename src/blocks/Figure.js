import styled from 'styled-components';
import PropTypes from 'prop-types';

const Figure = styled.figure`
  overflow: hidden; /* Control the image size by the box size of the figure */
`;

Figure.Img = styled.img`
  display: block; /* Prevent images from aligning with other contents */
  height: auto; /* Preserve the aspect ratio */
  margin: auto; /* For vertically & horizontally centering the image #2 */
  max-width: 100%; /* Control the image size by the box size of the figure */
`;

Figure.propTypes = {};

export default Figure;
