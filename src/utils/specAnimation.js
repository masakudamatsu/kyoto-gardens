import {css, keyframes} from 'styled-components';

// Duration parameters
const medium = {
  enter: '250ms',
  exit: '200ms',
};
const long = {
  enter: '300ms',
  exit: '250ms',
};

// Easing parameters
const decelerated = 'cubic-bezier(0,0,0.2,1)';
// Source: https://material.io/design/motion/speed.html#easing
// "Imagine yourself throwing a tennis ball into an open field. The ball leaves your hand with the maximum speed. As it moves, it loses energy, it decelerates and eventually comes to a halt. This is called ease-out." (https://zellwk.com/blog/css-transitions/)
const linear = 'linear';

export const animation = {
  header: {
    hide: {
      duration: medium.exit, // "Transitions that close, dismiss, or collapse an element use shorter durations. Exit transitions may be faster because they require less attention than the user’s next task." https://material.io/design/motion/speed.html#duration
      easing: decelerated,
    },
    show: {
      duration: medium.enter, // https://material.io/design/motion/speed.html#duration
      easing: decelerated, // "Incoming elements are animated using decelerated easing, in which transitions begin at peak velocity (the fastest point in an element's movement) and end at rest." https://material.io/design/motion/speed.html#easing
    },
  },
  navTop: {
    speed: css`
      transition-duration: ${({navShown}) =>
        navShown ? long.enter : long.exit};
      transition-timing-function: ${decelerated};
    `,
  },
  ripple: {
    duration: null, // set with createRipple() in NavigationItem.js
    easing: linear,
    keyframes: keyframes`
      to {
        transform: scale(1);
        opacity: 0;
      }  
    `,
  },
  scrim: {
    keyframes: keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 0.5;
      }  
    `,
    duration: long.enter,
    easing: decelerated,
  },
};
