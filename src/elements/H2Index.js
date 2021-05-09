import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import {index} from 'src/utils/specIndex';
import remify from 'src/utils/remify';

const fontStyle = css`
  font-family: ${index.h2.fontFamily};
  font-size: ${remify(index.h2.fontSize.mobile)};
  font-weight: ${index.h2.fontWeight};
  font-style: ${index.h2.fontStyle};
`;

const H2Index = styled.div`
  ${fontStyle}
  display: flex;
  flex-direction: column;
  padding: 0 ${index.h2.paddingSide}px;
`;

H2Index.propTypes = {};
export default H2Index;
