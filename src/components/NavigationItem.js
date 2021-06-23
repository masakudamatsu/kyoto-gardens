import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import Link from 'next/link';

import NavTop from 'src/elements/NavTop';
import {vspace} from 'src/utils/vspaceScheme';

const rippling = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }  
`;

const ItemContainer = styled(NavTop.Li)`
  /* https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/#styling-the-button */
  overflow: hidden;
  position: relative;

  /* https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/#styling-the-ripples */
  & span {
    animation: ${rippling} 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    position: absolute; /* The absolute position we mentioned earlier */
    transform: scale(0);
  }
`;

const NavigationItem = ({currentPage, pageName, textContent}) => {
  // https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/#now-for-the-javascript
  const createRipple = event => {
    const elementClicked = event.currentTarget;

    // Get the coordinates
    const positionElementClicked = {
      x: elementClicked.offsetLeft,
      y: elementClicked.offsetTop + vspace.header.height.mobile,
    };
    const positionClicked = {
      x: event.pageX,
      y: event.pageY,
    }; // clientX and clinetY do not work with mobile screens
    // https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/#comment-1764013
    // https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y/11280547#11280547

    // Style the ripple
    const newRipple = document.createElement('span');
    const diameter = Math.max(
      elementClicked.clientWidth,
      elementClicked.clientHeight,
    );
    newRipple.style.height = `${diameter}px`;
    newRipple.style.width = `${diameter}px`;
    newRipple.style.left = `${
      positionClicked.x - positionElementClicked.x - diameter / 2
    }px`;
    newRipple.style.top = `${
      positionClicked.y - positionElementClicked.y - diameter / 2
    }px`;

    // Clear the previous ripple
    const previousRipple = elementClicked.getElementsByTagName('span')[0];
    if (previousRipple) {
      previousRipple.remove();
    }

    // Create the new ripple
    elementClicked.appendChild(newRipple);
  };

  return (
    <ItemContainer
      onClick={createRipple}
      currentPage={currentPage}
      pageName={pageName}
    >
      {currentPage === pageName ? (
        /* eslint-disable-next-line */
        <a>{textContent}</a>
      ) : (
        <Link href={pageName}>
          {/* eslint-disable-next-line */}
          <a>{textContent}</a>
        </Link>
      )}
    </ItemContainer>
  );
};

NavigationItem.propTypes = {
  currentPage: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};

export default NavigationItem;
