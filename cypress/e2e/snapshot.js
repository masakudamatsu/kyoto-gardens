let scrollToBottom = require('scroll-to-bottomjs'); // to deal with lazy-loading images. see https://docs.percy.io/docs/capturing-lazy-loading-images

describe('Integration test with visual testing', () => {
  it('Loads the homepage', function () {
    cy.visit('/');
    // Scroll to the bottom so all the images will be loaded before taking a snapshot
    cy.window().then(cyWindow => scrollToBottom({remoteWindow: cyWindow}));
    cy.percySnapshot('index', {widths: [320, 410, 648, 836, 1011]});
    // 320px for the narrowest screen to support
    // 410px for font-size change breakpoint
    // 648px for the middle point between 571px to 727px
    // 836px for the middle point between 728px to 945px
    // 1011px for the breakpoint to show the background on both sides
  });
});
