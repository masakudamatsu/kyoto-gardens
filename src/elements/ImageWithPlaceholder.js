import styled, {css} from 'styled-components';
import {useState} from 'react';
import Image from 'next/image';

import {color} from 'src/utils/specColor';
import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import {breakpoint, paragraph} from 'src/utils/designSpec';
import remify from 'src/utils/remify';

import P from 'src/elements/P';
import Span from 'src/elements/Span';

const Wrapper = styled.div`
  position: relative;
`;

const circleDiameter = 3.5;
const shippoPattern = css`
  background-color: ${color.imagePlaceholder}; /* fall back for Opera Mini */
  background-image: radial-gradient(
      circle closest-side,
      transparent 91%,
      #ffffff 100%,
      transparent
    ),
    radial-gradient(
      circle closest-side,
      ${color.imagePlaceholder} 91%,
      #ffffff 100%,
      ${color.imagePlaceholder}
    ); /* Higher than these percentages will create noticeable dots at the intersection of four circles */
  background-position: 0 0, ${circleDiameter / 2}rem ${circleDiameter / 2}rem; /* The second pair of values should be half as large as the background-size value so that the grid of circles overlaps just in halfway */
  background-repeat: repeat;
  background-size: ${circleDiameter}rem ${circleDiameter}rem; /* Circles won't be recognizable if smaller than these values. The feel of textile will lose if larger than these values */
`;

const Placeholder = styled(P)`
  ${shippoPattern}
  align-items: center;
  bottom 0;
  display: flex;
  flex-direction: column;
  font-family: ${paragraph.mobile.fontFamily};
  font-size: ${remify(getFontSize(paragraph.mobile))};
  font-weight: ${paragraph.mobile.fontWeight};
  height: 100%;
  justify-content: center;
  left: 0;
  line-height: ${getLineHeight(paragraph.mobile)};
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  @media only screen and ${breakpoint.fontSize} {
    font-size: ${remify(getFontSize(paragraph.desktop))};
    line-height: ${getLineHeight(paragraph.desktop)};
  }
`;

const ImageStyled = styled(({loaded, ...props}) => <Image {...props} />)`
  opacity: ${({loaded}) => (loaded ? '1' : '0')};
  transition: opacity 500ms linear;
`; // https://github.com/styled-components/styled-components/issues/1198#issuecomment-425650423

const ImageWithPlaceholder = ({src, alt, ...props}) => {
  // https://codebrahma.com/how-to-smoothly-render-images-in-react-app/
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isSrcValid, setIsSrcValid] = useState(!!src);
  const loadingMessage = <Placeholder>Loading...</Placeholder>;
  const errorMessage = (
    <Placeholder>
      {alt} <Span smallcaps>(We’re sorry for failing to load the image.)</Span>
    </Placeholder>
  );
  return (
    <Wrapper data-testid="image-wrapper">
      <ImageStyled
        loaded={imageLoaded}
        onError={() => setIsSrcValid(false)}
        onLoad={() => setImageLoaded(true)}
        src={src}
        alt={alt}
        {...props}
      />
      {imageLoaded ? null : isSrcValid ? loadingMessage : errorMessage}
    </Wrapper>
  );
};

export default ImageWithPlaceholder;
