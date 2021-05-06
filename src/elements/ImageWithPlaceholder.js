import styled from 'styled-components';
import {useState} from 'react';
import Image from 'next/image';

import {shippoPattern} from 'src/utils/patterns';

import P from 'src/elements/P';
import Span from 'src/elements/Span';
import {ryoanji} from 'src/utils/specRyoanji';
import {breakpoint} from 'src/utils/designSpec';

const Wrapper = styled.div`
  position: relative;
`; // for some reason, this element adds 12px to the height...

const Placeholder = styled(P)`
  ${shippoPattern}
  align-items: center;
  bottom 0;
  display: flex;
  flex-direction: column;
  height: calc(100% - ${ryoanji.figure.spaceBelowByBug.mobile}px);
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  @media only screen and ${breakpoint.fontSize} {
    height: calc(100% - ${ryoanji.figure.spaceBelowByBug.desktop}px);
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
