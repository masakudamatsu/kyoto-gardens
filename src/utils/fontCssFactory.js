export const getFontSize = typeface => {
  let fontSize;
  if (typeface.capHeight) {
    fontSize = capHeightToBe(typeface.capHeight, typeface.fontMetrics);
  }
  if (typeface.xHeight) {
    fontSize = xHeightToBe(typeface.xHeight, typeface.fontMetrics);
  }
  return fontSize;
};

// helper functions

function capHeightToBe(capHeight, fontMetrics) {
  const fontSizeToCapHeightRatio =
    fontMetrics.unitsPerEm / fontMetrics.capHeight;
  return capHeight * fontSizeToCapHeightRatio;
}

function xHeightToBe(xHeight, fontMetrics) {
  const fontSizeToXHeightRatio = fontMetrics.unitsPerEm / fontMetrics.xHeight;
  return xHeight * fontSizeToXHeightRatio;
}

export const getLineHeight = typeface => {
  if (!typeface.lineHeightRatio) {
    return 'normal';
  }
  const lineHeightToXHeightRatio =
    (typeface.lineHeightRatio.xHeight + typeface.lineHeightRatio.betweenLines) /
    typeface.lineHeightRatio.xHeight;
  return (
    (typeface.fontMetrics.xHeight * lineHeightToXHeightRatio) /
    typeface.fontMetrics.unitsPerEm
  );
};
