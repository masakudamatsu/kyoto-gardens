import styled from 'styled-components';
import PropTypes from 'prop-types';

import {useState} from 'react';
import Image from 'next/image';

import {seigaihaPattern, shippoPattern} from 'src/utils/patterns';

import Main from 'src/blocks/Main';
import P from 'src/elements/P';
import Span from 'src/elements/Span';
import {ryoanji} from 'src/utils/specRyoanji';
import {breakpoint} from 'src/utils/hspaceScheme';
import {hspace} from 'src/utils/hspaceScheme';

const Wrapper = styled.div`
  position: relative;
`; // for some reason, this element adds 12px to the height...

Wrapper.Kohoan = styled(Wrapper)`
  ${({width}) => `
    @media only screen and (min-width: ${width + 1}px) {
      ${hspace.kohoan.paddingSide.mobile}
    }
    `}
  ${hspace.kohoan.maxWidth.body}
  ${hspace.kohoan.paddingSide.tablet}
  ${hspace.kohoan.paddingSide.desktop}
`;

const Placeholder = styled(P)`
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
  ${Main.Kohoan} & {
    ${seigaihaPattern}
  }
  ${Main.Ryoanji} & {
    ${shippoPattern}
  }
`;

const ImageStyled = styled(({loaded, ...props}) => <Image {...props} />)`
  opacity: ${({loaded}) => (loaded ? '1' : '0')};
  transition: opacity 500ms linear;
`; // https://github.com/styled-components/styled-components/issues/1198#issuecomment-425650423

const ImageWithPlaceholder = ({src, alt, width, height, kohoan, ...props}) => {
  // https://codebrahma.com/how-to-smoothly-render-images-in-react-app/
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isSrcValid, setIsSrcValid] = useState(!!src);
  const loadingMessage = <Placeholder>Loading...</Placeholder>;
  const errorMessage = (
    <Placeholder>
      {alt} <Span smallcaps>(We’re sorry for failing to load the image.)</Span>
    </Placeholder>
  );
  const imageStyled = (
    <ImageStyled
      loaded={imageLoaded}
      onError={() => setIsSrcValid(false)}
      onLoad={() => setImageLoaded(true)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
  const placeholder = imageLoaded
    ? null
    : isSrcValid
    ? loadingMessage
    : errorMessage;
  if (kohoan) {
    return (
      <Wrapper.Kohoan width={width} data-testid="image-wrapper">
        {imageStyled}
        {placeholder}
      </Wrapper.Kohoan>
    );
  } else {
    return (
      <Wrapper width={width} data-testid="image-wrapper">
        {imageStyled}
        {placeholder}
      </Wrapper>
    );
  }
};

ImageWithPlaceholder.propTypes = {
  kohoan: PropTypes.bool,
};

export default ImageWithPlaceholder;
