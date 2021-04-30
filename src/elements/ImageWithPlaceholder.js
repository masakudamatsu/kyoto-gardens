import styled from 'styled-components';
import Image from 'next/image';

import {color} from 'src/utils/specColor';

const ImageWithPlaceholder = styled(Image)`
  background-color: ${color.imagePlaceholder};
`;

export default ImageWithPlaceholder;
