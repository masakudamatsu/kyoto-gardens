import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import round from 'src/utils/round';
import {ryoanji} from 'src/utils/specRyoanji';

const aspectRatio = ryoanji.figure.maxWidth / ryoanji.figure.maxHeight;

const Carousel = styled(Figure)`
  height: ${round((1 / aspectRatio) * 100, 4)}vw;
  max-height: ${ryoanji.figure.maxHeight}px;
  max-width: ${ryoanji.figure.maxWidth}px;
  position: relative;
  width: 100%;
`;

const unit = (1 / 20) * 100;
const acceleratedEasing = `cubic-bezier(0.4, 0.0, 1, 1)`;
const deceleratedEasing = `cubic-bezier(0.0, 0.0, 0.2, 1);`;

const spring = keyframes`
  from {
    opacity: 1;
  }
  ${3 * unit}% {
    opacity: 1;
    animation-timing-function: ${acceleratedEasing};
  }
  ${4 * unit}% {
    opacity: 0;
  }
  ${19 * unit}% {
    opacity: 0;
    animation-timing-function: ${deceleratedEasing}
  }
  100% {
    opacity: 1;
  }
`;

const summer = keyframes`
  from {
    opacity: 0;
  }
  ${4 * unit}% {
    opacity: 0;
    animation-timing-function: ${deceleratedEasing}
  }
  ${5 * unit}% {
    opacity: 1;
  }
  ${8 * unit}% {
    opacity: 1;
    animation-timing-function: ${acceleratedEasing};
  }
  ${9 * unit}% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;
const autumn = keyframes`
  from {
    opacity: 0;
  }
  ${9 * unit}% {
    opacity: 0;
    animation-timing-function: ${deceleratedEasing}
  }
  ${10 * unit}% {
    opacity: 1;
  }
  ${13 * unit}% {
    opacity: 1;
    animation-timing-function: ${acceleratedEasing};
  }
  ${14 * unit}% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const winter = keyframes`
  from {
    opacity: 0;
  }
  ${14 * unit}% {
    opacity: 0;
    animation-timing-function: ${deceleratedEasing}
  }
  ${15 * unit}% {
    opacity: 1;
  }
  ${18 * unit}% {
    opacity: 1;
    animation-timing-function: ${acceleratedEasing};
  }
  ${19 * unit}% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

Carousel.Spring = styled.div`
  animation: ${spring} 16s linear infinite;
  position: absolute;
`;
Carousel.Summer = styled.div`
  animation: ${summer} 16s linear infinite;
  position: absolute;
`;
Carousel.Autumn = styled.div`
  animation: ${autumn} 16s linear infinite;
  position: absolute;
`;
Carousel.Winter = styled.div`
  animation: ${winter} 16s linear infinite;
  position: absolute;
`;

Carousel.propTypes = {};

export default Carousel;
