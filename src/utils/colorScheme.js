export const color = {
  background: 'rgb(240,240,240)',
  onBackground: '#ffffff',
  surface: {
    index: '#ffffff',
    kohoan: '#6f6662',
    ryoanji: '#ffffff',
  },
  onSurface: {
    index: '#0a0a0a',
    kohoan: '#ffffff',
    ryoanji: '#0a0a0a',
  },
  onSurfaceShade: {kohoan: 'rgb(200,200,200)', ryoanji: 'rgb(100,100,100)'},
  onSurfaceSecondShade: {
    kohoan: '#9c938f',
    ryoanji: 'rgb(240,240,240)' /* TODO: Darken this */,
  },
  primary: 'hsla(193, 50%, 26%, 0.9)',
  primaryShade: 'hsla(193, 50%, 26%, 0.2)',
  onPrimary: '#eee',
  onPhoto: '#000',
  // Patterns
  lightingOverlay: `linear-gradient(
                      35deg,
                      hsla(0, 0%, 100%, 0) 0,
                      hsla(0, 0%, 100%, 0.5) 55%,
                      hsla(0, 0%, 100%, 0.5) 65%,
                      hsla(0, 0%, 100%, 0)
                    )`,
};
