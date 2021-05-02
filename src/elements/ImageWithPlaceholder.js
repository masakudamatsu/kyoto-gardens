import styled from 'styled-components';
import {useState} from 'react';
import Image from 'next/image';

import {getFontSize, getLineHeight} from 'src/utils/fontCssFactory';
import {breakpoint, paragraph} from 'src/utils/designSpec';
import remify from 'src/utils/remify';
import {shippoPattern} from 'src/utils/patterns';

import P from 'src/elements/P';
import Span from 'src/elements/Span';

const Wrapper = styled.div`
  position: relative;
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
