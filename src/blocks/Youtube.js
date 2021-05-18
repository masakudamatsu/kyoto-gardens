import styled from 'styled-components';
import PropTypes from 'prop-types';

// Adapated from https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

const Iframe = styled.iframe`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

Iframe.Wrapper = styled.div`
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
`;

const Youtube = ({height, title, videoId, width}) => {
  return (
    <Iframe.Wrapper>
      <Iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        frameBorder={0}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}?fs=0&modestbranding=1&playsinline=1&rel=0`}
        // fs=0 hides fullscreen button
        // modestbranding=1 hides YouTube logo
        // playsinline=1 prevens iOS to play video fullscreen
        // rel=0 restricts "more videos" to those from the same channel (the YouTube user)
        title={title}
        width={width}
      />
    </Iframe.Wrapper>
  );
};

Youtube.propTypes = {
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Youtube;
